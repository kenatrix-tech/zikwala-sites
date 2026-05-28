/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export only at build time — dev server runs normally so sitemap/metadata routes work
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
