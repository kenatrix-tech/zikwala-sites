import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { ProductListings } from "@/components/sections/ProductListings"
import { ProductsClientGrid } from "@/components/sections/ProductsClientGrid"

export function generateMetadata(): Metadata {
  const config = getConfig()
  return {
    title: `Shop | ${config.business.name} | ${config.business.city}, ${config.business.state.split(" ")[0]}`,
    description: `Browse products from ${config.business.name} in ${config.business.city}, ${config.business.state.split(" ")[0]}. ${config.business.tagline}`,
  }
}

export default function ProductsPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  if (!features.productListings || (!config.products && !config.sellerSlug)) redirect("/")

  const title = config.products?.title ?? "Our Collection"
  const subtitle = config.products?.subtitle ?? "Browse and order directly via WhatsApp"

  return (
    <>
      <section className="bg-accent py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-500 text-lg">{subtitle}</p>
        </div>
      </section>

      {config.sellerSlug ? (
        <ProductsClientGrid
          sellerSlug={config.sellerSlug}
          business={config.business}
          fallback={{ title, subtitle }}
          storefrontFilter={config.storefrontFilter}
        />
      ) : (
        <ProductListings
          products={config.products!}
          business={config.business}
          hideHeader
        />
      )}
    </>
  )
}
