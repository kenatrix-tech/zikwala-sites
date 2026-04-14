/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",         // static export → S3
  trailingSlash: true,      // needed for S3 static hosting
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,      // required for static export
  },
}

export default nextConfig
