import type { Metadata } from "next"
import { getConfig } from "@/config"
import { fetchListingsBySellerSlug } from "@/lib/kenatrix"
import { ProductDetailClient } from "@/components/sections/ProductDetailClient"

// Pre-render all known listing slugs at build time so S3 has the HTML files.
// The client component re-fetches fresh data at runtime.
export async function generateStaticParams() {
  const config = getConfig()
  if (!config.sellerSlug) return [{ slug: "_" }]
  try {
    const listings = await fetchListingsBySellerSlug(config.sellerSlug)
    const slugs = listings.map(l => ({ slug: l.slug ?? String(l.id) }))
    return slugs.length ? slugs : [{ slug: "_" }]
  } catch {
    return [{ slug: "_" }]
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const config = getConfig()
  return {
    title: `Product | ${config.business.name}`,
    description: `View product details at ${config.business.name}. ${config.business.tagline}`,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const config = getConfig()
  return <ProductDetailClient slug={params.slug} business={config.business} />
}
