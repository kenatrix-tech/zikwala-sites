"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { SoldListings } from "@/components/sections/SoldListings"
import type { SiteConfig } from "@/config/types"
import { fetchListingsBySellerSlugAndStatus, adaptListingsToProperties } from "@/lib/kenatrix"

interface Props {
  business: SiteConfig["business"]
  // Static fallback — shown while loading or if API returns nothing
  soldListings?: SiteConfig["soldListings"]
  // When sellerSlug is set, fetches dynamically from API
  sellerSlug?: string
  listingType?: string
}

export function SoldListingsConditional({ business, soldListings, sellerSlug, listingType }: Props) {
  const purpose = useSearchParams().get("purpose")
  const [dynamicSold, setDynamicSold] = useState<SiteConfig["soldListings"] | null>(null)

  useEffect(() => {
    if (!sellerSlug || purpose === "rent") return
    fetchListingsBySellerSlugAndStatus(sellerSlug, ["SOLD", "UNDER_CONTRACT"], listingType)
      .then(items => {
        if (!items.length) return
        const adapted = adaptListingsToProperties(items)
        setDynamicSold({
          title: "Recently Sold & Under Contract",
          subtitle: "A track record of results across the Greater Portland Metro.",
          items: adapted.items.map(p => ({
            image:     p.image,
            address:   p.address,
            city:      p.city,
            price:     p.price,
            type:      p.type,
            bedrooms:  p.bedrooms,
            bathrooms: p.bathrooms,
            sqft:      p.sqft,
          })),
        })
      })
      .catch(() => {})
  }, [sellerSlug, purpose, listingType])

  if (purpose === "rent") return null

  const data = dynamicSold ?? soldListings
  if (!data) return null

  return <SoldListings soldListings={data} business={business} />
}
