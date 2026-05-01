import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { VehicleListings } from "@/components/sections/VehicleListings"
import { fetchVehiclesBySeller, adaptVehicles } from "@/lib/kenatrix"

export function generateMetadata(): Metadata {
  const config = getConfig()
  return {
    title: `Vehicle Inventory | ${config.business.name} | ${config.business.city}, ${config.business.state.split(" ")[0]}`,
    description: `Browse available vehicles at ${config.business.name} in ${config.business.city}, ${config.business.state.split(" ")[0]}. ${config.business.tagline}`,
  }
}

export default async function VehiclesPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  if (!features.vehicleListings || (!config.vehicles && !config.sellerSlug)) redirect("/")

  let vehicles = config.vehicles

  // Fetch from Kenatrix API when sellerSlug is configured
  if (config.sellerSlug) {
    const apiItems = await fetchVehiclesBySeller(config.sellerSlug)
    if (apiItems.length > 0) {
      vehicles = adaptVehicles(apiItems, config.vehicles)
    }
  }

  if (!vehicles) redirect("/")

  return (
    <>
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {vehicles.title}
          </h1>
          <p className="text-gray-500 text-lg">{vehicles.subtitle}</p>
        </div>
      </section>

      <VehicleListings
        vehicles={vehicles}
        business={config.business}
        hideHeader
      />
    </>
  )
}
