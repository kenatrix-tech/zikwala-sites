import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { PropertyListings } from "@/components/sections/PropertyListings"
import { SoldListingsConditional } from "@/components/sections/SoldListingsConditional"
import { PropertyFilterTabs } from "@/components/sections/PropertyFilterTabs"
import { fetchPropertiesBySeller, adaptProperties } from "@/lib/kenatrix"
import { PropertiesClientGrid } from "@/components/sections/PropertiesClientGrid"
import { PropertiesPageTitle } from "@/components/sections/PropertiesPageTitle"

export function generateMetadata(): Metadata {
  const config = getConfig()
  const city = config.business.city
  const state = config.business.state.split(" ")[0]
  return {
    title: `Properties for Sale & Rent | ${config.business.name} | ${city}, ${state}`,
    description: `Browse properties for sale and rent with ${config.business.name} in ${city}, ${state}. Expert real estate guidance at every step.`,
  }
}

export default async function PropertiesPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  if (!features.propertyListings || (!config.properties && !config.sellerSlug)) redirect("/")

  // Client-side fetch via StorefrontListingController (same pattern as ProductsClientGrid)
  if (config.sellerSlug && config.storefrontFilter?.listingType === "PROPERTY") {
    const { title, subtitle } = config.properties ?? { title: "Active Listings", subtitle: "" }
    return (
      <>
        {/* ── Header + tabs ── */}
        <section className="bg-accent py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Suspense fallback={<><h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1><p className="text-gray-500 text-lg">{subtitle}</p></>}>
              <PropertiesPageTitle defaultTitle={title} defaultSubtitle={subtitle} />
            </Suspense>
            <Suspense>
              <PropertyFilterTabs />
            </Suspense>
          </div>
        </section>

        {/* ── Active listings — purposeFilter read from URL inside the component ── */}
        <Suspense>
          <PropertiesClientGrid
            sellerSlug={config.sellerSlug}
            business={config.business}
            fallback={{ title, subtitle }}
            storefrontFilter={config.storefrontFilter}
          />
        </Suspense>

        {/* ── Recently Sold & Under Contract — dynamic from API, falls back to config ── */}
        {(config.sellerSlug || config.soldListings) && (
          <div className="border-t border-gray-100">
            <Suspense>
              <SoldListingsConditional
                business={config.business}
                sellerSlug={config.sellerSlug}
                listingType={config.storefrontFilter?.listingType}
                soldListings={config.soldListings}
              />
            </Suspense>
          </div>
        )}
      </>
    )
  }

  // Server-side fetch for dedicated property endpoint (non-storefront clients)
  let properties = config.properties

  if (config.sellerSlug) {
    const apiItems = await fetchPropertiesBySeller(config.sellerSlug)
    if (apiItems.length > 0) {
      properties = adaptProperties(apiItems, config.properties)
    }
  }

  if (!properties) redirect("/")

  return (
    <>
      <section className="bg-accent py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {properties.title}
          </h1>
          <p className="text-gray-500 text-lg">{properties.subtitle}</p>
        </div>
      </section>

      <PropertyListings
        properties={properties}
        business={config.business}
        hideHeader
      />
    </>
  )
}
