import type { MetadataRoute } from "next"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getConfig()
  const features = getFeatures(config.tier)

  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? ""

  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/services/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  if (features.gallery && config.gallery) {
    routes.push({
      url: `${base}/gallery/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  if (!features.propertyListings && config.business.niche === "realestate" && config.soldListings) {
    routes.push({
      url: `${base}/sold/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  }

  if (features.vehicleListings && config.vehicles) {
    routes.push({
      url: `${base}/vehicles/`,
      lastModified: now,
      changeFrequency: "weekly",   // inventory changes often
      priority: 0.9,
    })
  }

  if (features.propertyListings && config.properties) {
    routes.push({
      url: `${base}/properties/`,
      lastModified: now,
      changeFrequency: "weekly",   // listings change often
      priority: 0.9,
    })
  }

  return routes
}
