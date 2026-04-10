#!/bin/bash
# Usage: ./deploy.sh <client-id> <s3-bucket>
# Example: ./deploy.sh sparkle-cleaning s3://demo.zikwala.com/sparkle-cleaning

CLIENT_ID=$1
S3_TARGET=$2

if [ -z "$CLIENT_ID" ] || [ -z "$S3_TARGET" ]; then
  echo "Usage: ./deploy.sh <client-id> <s3-bucket-path>"
  exit 1
fi

echo "Building site for: $CLIENT_ID"
NEXT_PUBLIC_CLIENT_ID=$CLIENT_ID npm run build

echo "Deploying to: $S3_TARGET"
aws s3 sync out/ $S3_TARGET --delete

echo "Done! Site live at $S3_TARGET"
