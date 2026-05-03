"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { fetchListingsBySellerSlug, adaptListings } from "@/lib/kenatrix"
import { ProductCard } from "@/components/ui/ProductCard"

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
      <div className="max-w-6xl mx-auto">
        <div className="h-8 bg-gray-200 rounded-lg w-48 mb-2 animate-pulse" />
        <div className="h-4 bg-gray-100 rounded-lg w-64 mb-8 animate-pulse" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gray-100 animate-pulse" />
              <div className="p-4 space-y-2">
                <div className="h-3 bg-gray-100 rounded animate-pulse w-1/3" />
                <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4" />
                <div className="h-5 bg-gray-100 rounded animate-pulse w-1/4" />
                <div className="h-9 bg-gray-100 rounded-site animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ShopFeaturedGrid({ sellerSlug, business, fallback, storefrontFilter }: Props) {
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
        <div className="max-w-6xl mx-auto text-center py-20 text-gray-400">
          <ShoppingBag size={48} className="mx-auto mb-3 opacity-20" />
          <p className="font-medium">No items available right now. Check back soon.</p>
        </div>
      </section>
    )
  }

  const featured = products.items.slice(0, 6)
  const totalCount = products.items.length

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{products.title}</h2>
            <p className="text-gray-500 mt-1 text-base">{products.subtitle}</p>
          </div>
          {totalCount > 6 && (
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-sm shrink-0 hover:gap-3 transition-all"
              style={{ color: "var(--color-primary)" }}
            >
              View All ({totalCount}) <ArrowRight size={15} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              businessPhone={business.phone}
            />
          ))}
        </div>

        {totalCount > 6 && (
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gradient-brand text-on-primary
                         font-bold px-8 py-3.5 rounded-site shadow-lg
                         hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              View All {totalCount} Items
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
