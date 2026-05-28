import type { MetadataRoute } from "next"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { fetchListingsBySellerSlug } from "@/lib/kenatrix"

export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const config = getConfig()
  const features = getFeatures(config.tier)

  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? ""
  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`,        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about/`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact/`,lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/`,lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]

  if (config.mortgageCalculator) {
    routes.push({ url: `${base}/mortgage-calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })
  }

  // Products listing page — skip for real estate (uses /properties/ instead)
  if (features.productListings && config.business.niche !== "realestate" && (config.products || config.sellerSlug)) {
    routes.push({ url: `${base}/products/`, lastModified: now, changeFrequency: "daily", priority: 0.9 })
  }

  if (features.booking && config.booking) {
    routes.push({ url: `${base}/booking/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })
  }

  if (features.gallery && config.gallery) {
    routes.push({ url: `${base}/gallery/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })
  }

  if (config.catering) {
    routes.push({ url: `${base}/catering/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })
  }

  if (!features.propertyListings && config.business.niche === "realestate" && config.soldListings) {
    routes.push({ url: `${base}/sold/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })
  }

  if (features.vehicleListings && config.vehicles) {
    routes.push({ url: `${base}/vehicles/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 })
  }

  if (features.propertyListings && config.properties) {
    routes.push({ url: `${base}/properties/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 })
  }

  // Individual listing detail pages — highest SEO value (Google can index each listing)
  if (config.sellerSlug) {
    if (config.business.niche === "realestate") {
      // Property detail pages for real estate agents
      try {
        const listings = await fetchListingsBySellerSlug(config.sellerSlug, { listingType: "PROPERTY" })
        listings
          .filter(l => l.status !== "INACTIVE")
          .forEach(l => {
            routes.push({
              url: `${base}/properties/${l.slug ?? String(l.id)}/`,
              lastModified: now,
              changeFrequency: "weekly",
              priority: 0.8,
            })
          })
      } catch {}
    } else {
      // Product detail pages for other niches
      try {
        const listings = await fetchListingsBySellerSlug(config.sellerSlug, { listingType: "PRODUCT" })
        listings
          .filter(l => l.status !== "SOLD" && l.status !== "INACTIVE")
          .forEach(l => {
            routes.push({
              url: `${base}/products/${l.slug ?? String(l.id)}/`,
              lastModified: now,
              changeFrequency: "weekly",
              priority: 0.8,
            })
          })
      } catch {}
    }
  }

  return routes
}
