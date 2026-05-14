import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { getFeatures } from "@/lib/features"
import { ProductListings } from "@/components/sections/ProductListings"
import { ProductsClientGrid } from "@/components/sections/ProductsClientGrid"
import { RestaurantMenu } from "@/components/sections/RestaurantMenu"

const RESTAURANT_NICHES = ["restaurant", "bakery"]

export function generateMetadata(): Metadata {
  const config = getConfig()
  const isRestaurant = RESTAURANT_NICHES.includes(config.business.niche)
  return {
    title: `${isRestaurant ? "Menu" : "Shop"} | ${config.business.name} | ${config.business.city}, ${config.business.state.split(" ")[0]}`,
    description: `${isRestaurant ? `View our full menu at ${config.business.name}` : `Browse products from ${config.business.name}`} in ${config.business.city}, ${config.business.state.split(" ")[0]}. ${config.business.tagline}`,
  }
}

export default function ProductsPage() {
  const config = getConfig()
  const features = getFeatures(config.tier)

  if (!features.productListings || (!config.products && !config.sellerSlug)) redirect("/")

  const isRestaurant = RESTAURANT_NICHES.includes(config.business.niche)
  const showCart = features.payment
  const title = config.products?.title ?? (isRestaurant ? "Our Menu" : "Our Collection")
  const subtitle = config.products?.subtitle ?? (isRestaurant ? "Call us to place a takeout order or reserve a table" : showCart ? "Add items to your cart and checkout securely online" : "Browse and order directly via WhatsApp")

  return (
    <>
      <section className="bg-accent py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-500 text-base sm:text-lg">{subtitle}</p>
        </div>
      </section>

      {config.sellerSlug ? (
        <ProductsClientGrid
          sellerSlug={config.sellerSlug}
          business={config.business}
          fallback={{ title, subtitle }}
          storefrontFilter={config.storefrontFilter}
        />
      ) : isRestaurant ? (
        <RestaurantMenu
          products={config.products!}
          business={config.business}
          deliveryLinks={config.deliveryLinks}
        />
      ) : (
        <ProductListings
          products={config.products!}
          business={config.business}
          hideHeader
          showCart={showCart}
        />
      )}
    </>
  )
}
