import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { SoldListings } from "@/components/sections/SoldListings"
import { fetchListingsBySellerSlugAndStatus, adaptListingsToSoldItems } from "@/lib/kenatrix"

export const dynamic = "force-static"

export function generateMetadata(): Metadata {
  const config = getConfig()
  return {
    title: `Sold Listings | ${config.business.name} | ${config.business.city}, ${config.business.state.split(" ")[0]}`,
    description: `Homes sold by ${config.business.name} across ${config.business.city} and surrounding areas. A proven track record of successful closings.`,
  }
}

export default async function SoldListingsPage() {
  const config = getConfig()

  if (config.business.niche !== "realestate" || !config.soldListings) redirect("/")

  const staticItems = config.soldListings.items

  // Fetch API sold/rented listings — Pro and Premium only (Standard uses static config only)
  const isApiTier = config.tier === "pro" || config.tier === "premium"
  let apiItems: typeof staticItems = []
  if (isApiTier && config.sellerSlug) {
    try {
      const listings = await fetchListingsBySellerSlugAndStatus(
        config.sellerSlug,
        ["SOLD", "RENTED", "UNDER_CONTRACT"],
        "PROPERTY"
      )
      apiItems = adaptListingsToSoldItems(listings)
    } catch {}
  }

  // API items first (newest closings), static items after
  const mergedItems = [...apiItems, ...staticItems]

  const soldListings = {
    ...config.soldListings,
    items: mergedItems,
  }

  return (
    <>
      <section className="bg-accent py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Sold Listings</h1>
          <p className="text-gray-500 text-lg">
            A track record of homes closed across {config.business.city} and surrounding areas.
          </p>
        </div>
      </section>

      <SoldListings soldListings={soldListings} business={config.business} hideHeader />
    </>
  )
}
