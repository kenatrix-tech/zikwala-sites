"use client"

import { useSearchParams } from "next/navigation"

interface Props {
  defaultTitle: string
  defaultSubtitle: string
}

export function PropertiesPageTitle({ defaultTitle, defaultSubtitle }: Props) {
  const purpose = useSearchParams().get("purpose")

  const title = purpose === "sale"
    ? "Homes for Sale"
    : purpose === "rent"
      ? "Homes for Rent"
      : defaultTitle

  const subtitle = purpose === "sale"
    ? "Browse available homes for sale — updated regularly."
    : purpose === "rent"
      ? "Browse rental properties available now."
      : defaultSubtitle

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-500 text-lg">{subtitle}</p>
    </>
  )
}
