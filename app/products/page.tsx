import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { ProductListings } from "@/components/sections/ProductListings"

export function generateMetadata(): Metadata {
  const config = getConfig()
  return {
    title: `Shop | ${config.business.name}`,
    description: `Browse products from ${config.business.name} in ${config.business.city}, ${config.business.state}.`,
  }
}

export default function ProductsPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  if (!features.productListings || !config.products) redirect("/")

  return (
    <>
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {config.products.title}
          </h1>
          <p className="text-gray-500 text-lg">{config.products.subtitle}</p>
        </div>
      </section>

      <ProductListings
        products={config.products}
        business={config.business}
      />
    </>
  )
}
