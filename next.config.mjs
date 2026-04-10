/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",         // static export → S3 + CloudFront
  trailingSlash: true,      // needed for S3 static hosting
  images: {
    unoptimized: true,      // required for static export
  },
}

export default nextConfig
