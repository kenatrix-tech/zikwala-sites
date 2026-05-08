import type { MetadataRoute } from "next"
import { getConfig } from "@/config"

export default function robots(): MetadataRoute.Robots {
  const config = getConfig()
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? ""

  if (config.isLive !== true) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    }
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  }
}
