/**
 * Zikwala Sites — CloudFront Function: Client Router
 *
 * Runs on every viewer request. Maps each client's custom domain
 * to their S3 folder in clients.zikwala.com.
 *
 * Attach to: CloudFront distribution → Behaviors → Default (*) → Viewer request
 *
 * To add a new client:
 *   1. Add their domain(s) to CLIENT_MAP below
 *   2. Add their domain to the ACM certificate
 *   3. Add their domain as an Alternate Domain Name in the CloudFront distribution
 *   4. Deploy this function (Publish in CloudFront Functions console)
 */

