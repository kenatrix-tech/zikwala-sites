import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { SoldListings } from "@/components/sections/SoldListings"

export function generateMetadata(): Metadata {
  const config = getConfig()
  return {
    title: `Sold Listings | ${config.business.name}`,
    description: `Past sales and closed transactions by ${config.business.name} in ${config.business.city}, ${config.business.state}.`,
  }
}

export default function SoldListingsPage() {
  const config = getConfig()

  if (config.business.niche !== "realestate" || !config.soldListings) redirect("/")

  return (
    <>
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Sold Listings</h1>
          <p className="text-gray-500 text-lg">
            A track record of homes closed across {config.business.city} and surrounding areas.
          </p>
        </div>
      </section>

      <SoldListings soldListings={config.soldListings} business={config.business} hideHeader />
    </>
  )
}
