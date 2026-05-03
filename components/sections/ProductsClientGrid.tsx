"use client"

import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { ProductListings } from "@/components/sections/ProductListings"
import { fetchListingsBySellerSlug, adaptListings } from "@/lib/kenatrix"

interface Props {
  sellerSlug: string
  business: SiteConfig["business"]
  fallback?: { title?: string; subtitle?: string }
  storefrontFilter?: SiteConfig["storefrontFilter"]
}

type Products = NonNullable<SiteConfig["products"]>

function Skeleton() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gray-100 animate-pulse" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4" />
                <div className="h-5 bg-gray-100 rounded animate-pulse w-1/3" />
                <div className="h-9 bg-gray-100 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductsClientGrid({ sellerSlug, business, fallback, storefrontFilter }: Props) {
  const [products, setProducts] = useState<Products | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchListingsBySellerSlug(sellerSlug, storefrontFilter)
      .then(items => setProducts(adaptListings(items, fallback)))
      .catch(() => setProducts(null))
      .finally(() => setLoading(false))
  }, [sellerSlug])

  if (loading) return <Skeleton />

  if (!products || products.items.length === 0) {
    return (
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 text-gray-400">
          <ShoppingBag size={48} className="mx-auto mb-3 opacity-20" />
          <p className="font-medium">No items available right now. Check back soon.</p>
        </div>
      </section>
    )
  }

  return (
    <ProductListings
      products={products}
      business={business}
      hideHeader
    />
  )
}
