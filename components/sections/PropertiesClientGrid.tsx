"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Home, Phone } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { PropertyListings } from "@/components/sections/PropertyListings"
import { fetchListingsBySellerSlug, adaptListingsToProperties } from "@/lib/kenatrix"

interface Props {
  sellerSlug: string
  business: SiteConfig["business"]
  fallback?: { title: string; subtitle: string }
  storefrontFilter?: SiteConfig["storefrontFilter"]
  /** Show only first 3 items with "View All" link — for homepage use */
  preview?: boolean
}

type Properties = NonNullable<SiteConfig["properties"]>

function Skeleton() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="aspect-video bg-gray-100 animate-pulse" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4" />
                <div className="h-5 bg-gray-100 rounded animate-pulse w-1/3" />
                <div className="h-4 bg-gray-100 rounded animate-pulse w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PropertiesClientGrid({ sellerSlug, business, fallback, storefrontFilter, preview = false }: Props) {
  const searchParams = useSearchParams()
  // Read purpose filter from URL — only applied on the full listings page, not preview
  const purposeFilter = preview ? undefined : (searchParams.get("purpose") as "sale" | "rent" | null) ?? undefined

  const [properties, setProperties] = useState<Properties | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchListingsBySellerSlug(sellerSlug, storefrontFilter)
      .then(items => {
        const filtered = purposeFilter
          ? items.filter(l => {
              const purpose = l.titleLine3?.toUpperCase()   // "SALE" or "RENT"
              return purposeFilter === "rent" ? purpose === "RENT" : purpose === "SALE"
            })
          : items
        setProperties(adaptListingsToProperties(filtered, fallback))
      })
      .catch(() => setProperties(null))
      .finally(() => setLoading(false))
  }, [sellerSlug, purposeFilter])

  if (loading) return preview ? null : <Skeleton />

  if (!properties || properties.items.length === 0) {
    // On home page preview, hide the whole section (header included)
    if (preview) return null

    // On listings page, show empty state
    return (
      <section className="section-padding bg-surface">
        <div className="max-w-md mx-auto px-4 text-center py-20">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Home size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Active Listings Right Now</h3>
          <p className="text-gray-500 text-sm mb-6">
            New properties are added regularly. Contact us directly and we&apos;ll match you with the right home.
          </p>
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center gap-2 bg-primary text-white
                       font-bold px-6 py-3 rounded-site hover:opacity-90 transition-opacity"
          >
            <Phone size={15} />
            Call Agent
          </a>
        </div>
      </section>
    )
  }

  // In preview mode, render header + grid together so they hide as one unit
  if (preview) {
    return (
      <>
        <section className="bg-accent py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{properties.title}</h2>
            {properties.subtitle && <p className="text-gray-500">{properties.subtitle}</p>}
          </div>
        </section>
        <PropertyListings
          properties={properties}
          business={business}
          hideHeader
          preview
          hideTabs
        />
      </>
    )
  }

  return (
    <PropertyListings
      properties={properties}
      business={business}
      hideHeader
      preview={false}
      hideTabs
    />
  )
}
