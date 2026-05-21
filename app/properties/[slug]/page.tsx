import type { Metadata } from "next"
import { PropertyDetailClient } from "@/components/sections/PropertyDetailClient"
import { getConfig } from "@/config"
import {
  fetchListingsBySellerSlug,
  fetchListingsBySellerSlugAndStatus,
  fetchPropertyBySlug,
} from "@/lib/kenatrix"

// ─── Static params ────────────────────────────────────────────────────────────
// Pre-renders known listings so they get proper OG tags when shared.
// New listings added after deploy are handled client-side via CloudFront 403→index.html.

export async function generateStaticParams() {
  const config = getConfig()
  if (!config.sellerSlug) return [{ slug: "_" }]

  try {
    const [active, sold] = await Promise.all([
      fetchListingsBySellerSlug(config.sellerSlug, config.storefrontFilter),
      fetchListingsBySellerSlugAndStatus(config.sellerSlug, ["SOLD", "UNDER_CONTRACT"], "PROPERTY"),
    ])
    const slugs = Array.from(
      new Set([...active, ...sold].map(l => l.slug ?? String(l.id)))
    )
    return [...slugs.map(slug => ({ slug })), { slug: "_" }]
  } catch {
    return [{ slug: "_" }]
  }
}

// ─── OG Metadata ─────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const config = getConfig()
  if (params.slug === "_") return { title: config.business.name }

  const property = await fetchPropertyBySlug(params.slug)
  if (!property) return { title: config.business.name }

  const address = [property.street, property.city, property.state].filter(Boolean).join(", ")
  const price = property.propertyPurpose === "R"
    ? "$" + Number(property.monthlyRent ?? 0).toLocaleString("en-US") + "/mo"
    : "$" + Number(property.sellingPrice ?? 0).toLocaleString("en-US")

  const specs = [
    property.bedRooms > 0 ? `${property.bedRooms} bd` : "",
    property.bathRooms > 0 ? `${property.bathRooms} ba` : "",
    property.squareFeet > 0 ? `${property.squareFeet.toLocaleString()} sqft` : "",
  ].filter(Boolean).join(" · ")

  const title = `${address} | ${config.business.name}`
  const description = [price, specs, property.city && property.state ? `${property.city}, ${property.state}` : ""]
    .filter(Boolean).join(" · ")

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: property.thumbnailUrl ? [{ url: property.thumbnailUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: property.thumbnailUrl ? [property.thumbnailUrl] : [],
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
// Data is fetched client-side by PropertyDetailClient so new listings
// (not in generateStaticParams) still render correctly after CloudFront fallback.

export default function PropertyDetailPage() {
  return <PropertyDetailClient />
}
