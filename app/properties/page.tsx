import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { PropertyListings } from "@/components/sections/PropertyListings"
import { fetchPropertiesBySeller, adaptProperties } from "@/lib/kenatrix"

export function generateMetadata(): Metadata {
  const config = getConfig()
  return {
    title: `Properties for Sale & Rent | ${config.business.name} | ${config.business.city}, ${config.business.state.split(" ")[0]}`,
    description: `Browse homes for sale and rent with ${config.business.name} in ${config.business.city}, ${config.business.state.split(" ")[0]}. Expert real estate guidance at every step.`,
  }
}

export default async function PropertiesPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  if (!features.propertyListings || (!config.properties && !config.sellerSlug)) redirect("/")

  let properties = config.properties

  // Fetch from Kenatrix API when sellerSlug is configured
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
