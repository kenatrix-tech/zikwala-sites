#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Zikwala Sites — S3 Deploy Script
#
# Usage:
#   ./deploy.sh <client-id> [options]
#
# Options:
#   --bucket <name>     S3 bucket name           (default: demo.zikwala.com)
#   --prefix <path>     S3 subpath prefix        (default: <client-id>)
#   --site-url <url>    NEXT_PUBLIC_SITE_URL      (default: https://<bucket>/<prefix>)
#   --base-path <path>  Override basePath         (default: /<prefix> for demo, "" for client)
#   --zikwala-url <url> NEXT_PUBLIC_ZIKWALA_URL   (default: https://zikwala.com)
#   --email <email>     NEXT_PUBLIC_ZIKWALA_EMAIL (default: hello@zikwala.com)
#   --cf-id <id>        CloudFront distribution ID for cache invalidation
#   --region <region>   AWS region               (default: us-east-1)
#   --no-build          Skip build, only sync existing out/ folder
#   --force             Re-upload all files (not just changed ones)
#   --setup             First-time bucket setup (create, policy, website hosting)
#   --private           Mark bucket as private (OAC) — used with clients.zikwala.com
#
# Examples (demo):
#   ./deploy.sh demo-realestate
#   ./deploy.sh demo-realestate --force
#
# Examples (paying client with custom domain):
#   ./deploy.sh bulcha-real-estate \
#     --bucket clients.zikwala.com \
#     --site-url https://bulcharealestate.com \
#     --cf-id YOUR_CF_ID
# ─────────────────────────────────────────────────────────────────────────────
set -e

CLIENT_ID=$1
if [ -z "$CLIENT_ID" ]; then
  echo "Error: client-id is required."
  echo "Usage: ./deploy.sh <client-id> [--bucket <name>] [--cf-id <id>]"
  exit 1
fi
shift

BUCKET="demo.zikwala.com"
PREFIX="${CLIENT_ID}"
SITE_URL=""
BASE_PATH_OVERRIDE=""
ZIKWALA_URL="https://zikwala.com"
ZIKWALA_EMAIL="contact@kenatrix.com"
ZIKWALA_PHONE="+1(571) 639-1098"
FORM_ENDPOINT="https://api.zikwala.com/api/v1/public/contact/sendMessage"
WEBSITE_ORDER_ENDPOINT="https://api.zikwala.com/api/v1/public/website"
CF_ID="EACQJM4V4CO8W"
REGION="us-east-1"
SKIP_BUILD=false
FORCE=false
SETUP=false
PRIVATE=false

while [ $# -gt 0 ]; do
  case "$1" in
    --bucket)       shift; BUCKET=$1 ;;
    --prefix)       shift; PREFIX=$1 ;;
    --site-url)     shift; SITE_URL=$1 ;;
    --base-path)    shift; BASE_PATH_OVERRIDE=$1 ;;
    --zikwala-url)  shift; ZIKWALA_URL=$1 ;;
    --email)        shift; ZIKWALA_EMAIL=$1 ;;
    --phone)        shift; ZIKWALA_PHONE=$1 ;;
    --cf-id)        shift; CF_ID=$1 ;;
    --region)       shift; REGION=$1 ;;
    --no-build)     SKIP_BUILD=true ;;
    --force)        FORCE=true ;;
    --setup)        SETUP=true ;;
    --private)      PRIVATE=true ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
  shift
done

# Client bucket = no basePath (CloudFront origin path handles folder routing)
# Demo bucket   = basePath set to /<prefix> (shared domain, path-based routing)
if [ -n "$BASE_PATH_OVERRIDE" ]; then
  BASE_PATH="$BASE_PATH_OVERRIDE"
elif [ "$BUCKET" = "clients.zikwala.com" ]; then
  BASE_PATH=""
else
  BASE_PATH="/${PREFIX}"
fi

if [ -z "$SITE_URL" ]; then
  SITE_URL="https://demo.zikwala.com/${PREFIX}"
fi

echo ""
echo "┌─────────────────────────────────────────────┐"
echo "  Zikwala Sites — Deploy"
echo "├─────────────────────────────────────────────┤"
echo "  Client : $CLIENT_ID"
echo "  Bucket : s3://$BUCKET/$PREFIX/"
echo "  Region : $REGION"
[ -n "$CF_ID" ] && echo "  CF     : $CF_ID"
echo "└─────────────────────────────────────────────┘"
echo ""

# ── 1. Build ──────────────────────────────────────────────────────────────────
if $SKIP_BUILD; then
  echo "── Skipping build (--no-build)"
  [ ! -d "out" ] && echo "Error: out/ not found. Run without --no-build first." && exit 1
else
  echo "── Building..."
  NEXT_PUBLIC_CLIENT_ID="$CLIENT_ID" \
  NEXT_PUBLIC_BASE_PATH="$BASE_PATH" \
  NEXT_PUBLIC_SITE_URL="$SITE_URL" \
  NEXT_PUBLIC_ZIKWALA_URL="$ZIKWALA_URL" \
  NEXT_PUBLIC_ZIKWALA_EMAIL="$ZIKWALA_EMAIL" \
  NEXT_PUBLIC_ZIKWALA_PHONE="$ZIKWALA_PHONE" \
  NEXT_PUBLIC_FORM_ENDPOINT="$FORM_ENDPOINT" \
  NEXT_PUBLIC_WEBSITE_ORDER_ENDPOINT="$WEBSITE_ORDER_ENDPOINT" \
  npm run build:clean
  echo "✓  Build complete"
fi
echo ""

# ── 2. First-time bucket setup (--setup flag only) ────────────────────────────
if $SETUP; then
  echo "── Setting up bucket: $BUCKET ..."

  if [ "$REGION" = "us-east-1" ]; then
    aws s3api create-bucket --bucket "$BUCKET" --region "$REGION"
  else
    aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" \
      --create-bucket-configuration LocationConstraint="$REGION"
  fi

  if $PRIVATE; then
    # Private bucket — block all public access, access via CloudFront OAC only
    aws s3api put-public-access-block --bucket "$BUCKET" \
      --public-access-block-configuration \
      "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
    echo "✓  Bucket is private (attach OAC policy from CloudFront console)"
  else
    # Public bucket — static website hosting
    aws s3api put-public-access-block --bucket "$BUCKET" \
      --public-access-block-configuration \
      "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

    aws s3api put-bucket-policy --bucket "$BUCKET" --policy "{
      \"Version\": \"2012-10-17\",
      \"Statement\": [{
        \"Effect\": \"Allow\",
        \"Principal\": \"*\",
        \"Action\": \"s3:GetObject\",
        \"Resource\": \"arn:aws:s3:::${BUCKET}/*\"
      }]
    }"

    aws s3 website "s3://${BUCKET}" \
      --index-document index.html \
      --error-document 404.html
  fi

  echo "✓  Bucket ready"
  echo ""
fi

# ── 3. Sync files ─────────────────────────────────────────────────────────────
echo "── Syncing to s3://$BUCKET ..."

# Content-hashed assets — cache forever
aws s3 sync out/_next/static "s3://${BUCKET}/${PREFIX}/_next/static" \
  --delete \
  --cache-control "public,max-age=31536000,immutable"

# Everything else — no cache (always fetch latest)
if $FORCE; then
  aws s3 cp out/ "s3://${BUCKET}/${PREFIX}/" \
    --recursive \
    --exclude "_next/static/*" \
    --cache-control "no-cache" \
    --metadata-directive REPLACE
else
  aws s3 sync out/ "s3://${BUCKET}/${PREFIX}/" \
    --delete \
    --exclude "_next/static/*" \
    --cache-control "no-cache"
fi

echo "✓  Synced"
echo ""

# ── 3b. Sync /clients/ assets to bucket root (images use absolute paths) ──────
# Hero images, SVGs and other public/clients/* assets are referenced as
# absolute URLs (/clients/<id>/hero.jpg) so they must live at the bucket
# root, not nested under the client prefix.
if [ -d "out/clients" ]; then
  aws s3 sync out/clients/ "s3://${BUCKET}/clients/" \
    --cache-control "public,max-age=86400"
  echo "✓  /clients/ assets synced to bucket root"
  echo ""
fi

# ── 3c. Copy 404.html to bucket root (S3 website error doc must be at root) ──
if aws s3 ls "s3://${BUCKET}/${PREFIX}/404/index.html" > /dev/null 2>&1 || aws s3 ls "s3://${BUCKET}/${PREFIX}/404.html" > /dev/null 2>&1; then
  aws s3 cp "s3://${BUCKET}/${PREFIX}/404.html" "s3://${BUCKET}/404.html" \
    --cache-control "no-cache" > /dev/null
  echo "✓  404.html copied to bucket root"
  echo ""
fi

# ── 4. CloudFront invalidation ────────────────────────────────────────────────
if [ -n "$CF_ID" ]; then
  echo "── Invalidating CloudFront..."
  INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id "$CF_ID" \
    --paths "/*" --query 'Invalidation.Id' --output text)
  echo "   Invalidation ID: $INVALIDATION_ID"
  echo "── Waiting for invalidation to complete..."
  aws cloudfront wait invalidation-completed \
    --distribution-id "$CF_ID" \
    --id "$INVALIDATION_ID"
  echo "✓  CloudFront fully propagated"
  echo ""
fi

# ── 5. URL ────────────────────────────────────────────────────────────────────
if [ "$REGION" = "us-east-1" ]; then
  S3_URL="http://${BUCKET}.s3-website-${REGION}.amazonaws.com"
else
  S3_URL="http://${BUCKET}.s3-website.${REGION}.amazonaws.com"
fi

LIVE_URL="$SITE_URL"
echo "┌─────────────────────────────────────────────┐"
echo "  ✅  Live at: $LIVE_URL"
echo "└─────────────────────────────────────────────┘"
echo ""
