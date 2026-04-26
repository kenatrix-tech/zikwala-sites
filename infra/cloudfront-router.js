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

var CLIENT_MAP = {
  // ─── Paying clients ──────────────────────────────────────────
  "bulcharealestate.com":     "bulcha-real-estate",

  // ─── Add new clients below ───────────────────────────────────
  // "nextclient.com":         "next-client",
};

function handler(event) {
  var request = event.request;
  var host = request.headers.host.value;
  var uri = request.uri;

  // Remove Range header — prevents 206 Partial Content responses that
  // break social media scrapers (Facebook, LinkedIn, etc.)
  delete request.headers["range"];

  // Redirect www → non-www
  if (host.startsWith("www.")) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://" + host.slice(4) + uri },
      },
    };
  }

  var folder = CLIENT_MAP[host];

  if (folder) {
    // Rewrite URI to include the client's S3 folder
    request.uri = "/" + folder + uri;
  }

  // Append index.html for directory requests (S3 doesn't auto-resolve)
  if (request.uri.endsWith("/")) {
    request.uri += "index.html";
  } else if (!request.uri.includes(".")) {
    request.uri += "/index.html";
  }

  return request;
}
