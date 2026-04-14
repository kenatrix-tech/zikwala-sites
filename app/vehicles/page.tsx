import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { VehicleListings } from "@/components/sections/VehicleListings"

export function generateMetadata(): Metadata {
  const config = getConfig()
  return {
    title: `Inventory | ${config.business.name}`,
    description: `Browse available vehicles at ${config.business.name} in ${config.business.city}, ${config.business.state}.`,
  }
}

export default function VehiclesPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  if (!features.vehicleListings || !config.vehicles) redirect("/")

  return (
    <>
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.vehicles.title}
          </h1>
          <p className="text-gray-500 text-lg">{config.vehicles.subtitle}</p>
        </div>
      </section>

      <VehicleListings
        vehicles={config.vehicles}
        business={config.business}
      />
    </>
  )
}
