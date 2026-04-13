#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Zikwala Sites — Deploy Script
#
# DEMO  (shared bucket, client subpath):
#   ./deploy.sh <client-id> --demo [--region <region>]
#   Deploys to: s3://demo.zikwala.com/<client-id>/
#   Live at:    http://demo.zikwala.com.s3-website-us-east-1.amazonaws.com/<client-id>/
#
# PRODUCTION (dedicated bucket per client):
#   ./deploy.sh <client-id> <bucket> [--region <region>]
#   Deploys to: s3://<bucket>/
#   Live at:    http://<bucket>.s3-website-us-east-1.amazonaws.com
#
# Defaults:
#   region → us-east-1
# ─────────────────────────────────────────────────────────────
set -e

# ── Args ──────────────────────────────────────────────────────
CLIENT_ID=$1
shift

DEMO_MODE=false
BUCKET="demo.zikwala.com"
REGION="us-east-1"

while [ $# -gt 0 ]; do
  case "$1" in
    --demo)
      DEMO_MODE=true
      ;;
    --region)
      shift; REGION=$1
      ;;
    *)
      [ -z "$BUCKET" ] && BUCKET=$1
      ;;
  esac
  shift
done

if [ -z "$CLIENT_ID" ]; then
  echo "Usage:"
  echo "  Demo: ./deploy.sh <client-id> --demo [--region <region>]"
  echo "  Prod: ./deploy.sh <client-id> <bucket> [--region <region>]"
  echo ""
  echo "Available client IDs:"
  echo "  demo-realestate  demo-cleaning  demo-lawfirm  demo-tax  demo-decoration"
  exit 1
fi

if $DEMO_MODE; then
  BUCKET="demo.zikwala.com"
  BASE_PATH="/${CLIENT_ID}"
  S3_PREFIX="${CLIENT_ID}"
else
  if [ -z "$BUCKET" ]; then
    echo "Error: Production deploy requires a bucket name."
    echo "  Usage: ./deploy.sh <client-id> <bucket> [--region <region>]"
    exit 1
  fi
  BASE_PATH=""
  S3_PREFIX=""
fi

echo ""
echo "▶  Client : $CLIENT_ID"
if $DEMO_MODE; then
  echo "▶  Mode   : demo  →  ${BUCKET}/${CLIENT_ID}/"
else
  echo "▶  Mode   : production  →  ${BUCKET}/"
fi
echo "▶  Region : $REGION"
echo ""

# ── 1. Build ──────────────────────────────────────────────────
echo "── Building static site..."
NEXT_PUBLIC_CLIENT_ID=$CLIENT_ID NEXT_PUBLIC_BASE_PATH=$BASE_PATH npm run build
echo "✓  Build complete"
echo ""

# ── Steps 2–5: Bucket setup ────────────────────────────────────
# Demo mode: demo.zikwala.com is a shared, pre-configured bucket.
# Bucket setup (create, public access, policy, website hosting) only
# runs for production deploys where a new dedicated bucket is needed.
if $DEMO_MODE; then
  echo "── Demo mode: skipping bucket setup (pre-configured)"
else
  # ── 2. Create bucket ─────────────────────────────────────────
  echo "── Creating bucket (if not exists)..."
  if aws s3api head-bucket --bucket "$BUCKET" --region "$REGION" 2>/dev/null; then
    echo "   Bucket already exists, skipping create"
  else
    if [ "$REGION" = "us-east-1" ]; then
      aws s3api create-bucket \
        --bucket "$BUCKET" \
        --region "$REGION"
    else
      aws s3api create-bucket \
        --bucket "$BUCKET" \
        --region "$REGION" \
        --create-bucket-configuration LocationConstraint="$REGION"
    fi
    echo "✓  Bucket created: $BUCKET"
  fi

  # ── 3. Unblock public access ──────────────────────────────────
  echo "── Enabling public access..."
  aws s3api put-public-access-block \
    --bucket "$BUCKET" \
    --public-access-block-configuration \
      "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
  echo "✓  Public access unblocked"

  # ── 4. Bucket policy — public read ───────────────────────────
  echo "── Applying public read policy..."
  aws s3api put-bucket-policy \
    --bucket "$BUCKET" \
    --policy "{
      \"Version\": \"2012-10-17\",
      \"Statement\": [{
        \"Sid\": \"PublicReadGetObject\",
        \"Effect\": \"Allow\",
        \"Principal\": \"*\",
        \"Action\": \"s3:GetObject\",
        \"Resource\": \"arn:aws:s3:::${BUCKET}/*\"
      }]
    }"
  echo "✓  Policy applied"

  # ── 5. Enable static website hosting ─────────────────────────
  echo "── Enabling static website hosting..."
  aws s3 website "s3://${BUCKET}" \
    --index-document index.html \
    --error-document 404.html
  echo "✓  Static hosting enabled"
fi

# ── 6. Sync files ──────────────────────────────────────────────
echo "── Syncing files..."

if $DEMO_MODE; then
  DEST_STATIC="s3://${BUCKET}/${S3_PREFIX}/_next/static"
  DEST_ROOT="s3://${BUCKET}/${S3_PREFIX}"
else
  DEST_STATIC="s3://${BUCKET}/_next/static"
  DEST_ROOT="s3://${BUCKET}"
fi

# Long-term cache for content-hashed assets
aws s3 sync out/_next/static "$DEST_STATIC" \
  --delete \
  --cache-control "public,max-age=31536000,immutable"

# No-cache for HTML pages (updates propagate immediately)
aws s3 sync out/ "$DEST_ROOT" \
  --delete \
  --exclude "_next/static/*" \
  --cache-control "public,max-age=0,must-revalidate"

echo "✓  Files synced"

# ── 7. Print URL ───────────────────────────────────────────────
if [ "$REGION" = "us-east-1" ]; then
  BASE_URL="http://${BUCKET}.s3-website-${REGION}.amazonaws.com"
else
  BASE_URL="http://${BUCKET}.s3-website.${REGION}.amazonaws.com"
fi

if $DEMO_MODE; then
  WEBSITE_URL="${BASE_URL}/${CLIENT_ID}/"
else
  WEBSITE_URL="${BASE_URL}"
fi

echo ""
echo "────────────────────────────────────────────────"
echo "  ✅  Live at: $WEBSITE_URL"
echo "────────────────────────────────────────────────"
echo ""
