"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { SoldListings } from "@/components/sections/SoldListings"
import type { SiteConfig } from "@/config/types"
import { fetchListingsBySellerSlugAndStatus, adaptListingsToSoldItems } from "@/lib/kenatrix"

interface Props {
  business: SiteConfig["business"]
  soldListings?: SiteConfig["soldListings"]
  sellerSlug?: string
  listingType?: string
}

export function SoldListingsConditional({ business, soldListings, sellerSlug, listingType }: Props) {
  const purpose = useSearchParams().get("purpose")
  const [apiItems, setApiItems] = useState<NonNullable<SiteConfig["soldListings"]>["items"]>([])

  useEffect(() => {
    if (!sellerSlug || purpose === "rent") return
    fetchListingsBySellerSlugAndStatus(sellerSlug, ["SOLD", "UNDER_CONTRACT"], listingType)
      .then(items => { setApiItems(adaptListingsToSoldItems(items)) })
      .catch(() => {})
  }, [sellerSlug, purpose, listingType])

  if (purpose === "rent") return null

  const staticItems = soldListings?.items ?? []
  const mergedItems = [...apiItems, ...staticItems]

  if (mergedItems.length === 0) return null

  const data: NonNullable<SiteConfig["soldListings"]> = {
    title: soldListings?.title ?? "Recently Sold & Under Contract",
    subtitle: soldListings?.subtitle ?? "",
    items: mergedItems,
  }

  return <SoldListings soldListings={data} business={business} />
}
