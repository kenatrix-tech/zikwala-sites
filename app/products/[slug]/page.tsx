import type { Metadata } from "next"
import { getConfig } from "@/config"
import { fetchListingsBySellerSlug, fetchProductBySlug } from "@/lib/kenatrix"
import { ProductDetailClient } from "@/components/sections/ProductDetailClient"

// Only pre-render PRODUCT type listings — SERVICE/VEHICLE slugs have no product detail page.
export async function generateStaticParams() {
  const config = getConfig()
  if (!config.sellerSlug) return [{ slug: "_" }]
  try {
    const listings = await fetchListingsBySellerSlug(config.sellerSlug, { listingType: "PRODUCT" })
    const slugs = listings.map(l => ({ slug: l.slug ?? String(l.id) }))
    return [{ slug: "_" }, ...slugs]
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
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "")
  const product = await fetchProductBySlug(params.slug)

  if (!product) {
    return {
      title: `Product | ${config.business.name}`,
      description: config.business.tagline,
      openGraph: { images: [{ url: config.seo.ogImage }] },
    }
  }

  const price = product.price ? `$${Number(product.price).toLocaleString("en-US")}` : null
  const title = `${product.name}${price ? ` — ${price}` : ""} | ${config.business.name}`
  const description = [
    price ? `Price: ${price}` : null,
    product.categoryName ? `Category: ${product.categoryName}` : null,
    product.description?.slice(0, 120),
  ].filter(Boolean).join(" · ") || config.business.tagline
  const image = product.thumbnailUrl ?? config.seo.ogImage
  const url = `${siteUrl}/products/${params.slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: config.business.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 1200, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const config = getConfig()
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "")
  const product = await fetchProductBySlug(params.slug)

  const jsonLd = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    ...(product.description ? { description: product.description } : {}),
    ...(product.thumbnailUrl ? { image: product.thumbnailUrl } : {}),
    ...(product.brandName ? { brand: { "@type": "Brand", name: product.brandName } } : {}),
    "offers": {
      "@type": "Offer",
      "price": product.price ?? 0,
      "priceCurrency": product.currency ?? "USD",
      "availability": product.status === "SOLD" || product.status === "INACTIVE"
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock",
      "url": `${siteUrl}/products/${params.slug}`,
      "seller": { "@type": "Organization", "name": config.business.name },
    },
  } : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProductDetailClient slug={params.slug} business={config.business} sellerSlug={config.sellerSlug} />
    </>
  )
}
