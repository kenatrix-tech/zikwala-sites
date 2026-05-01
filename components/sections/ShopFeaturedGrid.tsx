"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { fetchListingsBySellerSlug, adaptListings } from "@/lib/kenatrix"

interface Props {
  sellerSlug: string
  business: SiteConfig["business"]
  fallback?: { title?: string; subtitle?: string }
}

type Products = NonNullable<SiteConfig["products"]>
type Product = Products["items"][0]

function formatPrice(n: number) {
  return "$" + n.toLocaleString("en-US")
}

function whatsappLink(phone: string, product: Product) {
  const digits = phone.replace(/\D/g, "")
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "")
  const link = product.slug && base ? `\n\n🔗 ${base}/products/${product.slug}` : ""
  const text = encodeURIComponent(
    `Hi, I'd like to order: ${product.name} — ${formatPrice(product.price)}. Is it available?${link}`
  )
  return `https://wa.me/${digits}?text=${text}`
}

function WhatsAppIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function Skeleton() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 bg-gray-200 rounded-lg w-48 mb-2 animate-pulse" />
        <div className="h-4 bg-gray-100 rounded-lg w-64 mb-8 animate-pulse" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gray-100 animate-pulse" />
              <div className="p-3 sm:p-4 space-y-2">
                <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4" />
                <div className="h-5 bg-gray-100 rounded animate-pulse w-1/3" />
                <div className="h-8 bg-gray-100 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ShopFeaturedGrid({ sellerSlug, business, fallback }: Props) {
  const [products, setProducts] = useState<Products | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchListingsBySellerSlug(sellerSlug)
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

  const featured = products.items.slice(0, 6)
  const totalCount = products.items.length

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
          {featured.map((product) => {
            const inStock = product.inStock !== false
            return (
              <div
                key={product.id}
                className={`relative group rounded-2xl overflow-hidden bg-white shadow-sm
                            hover:shadow-xl transition-all duration-300 border border-gray-100
                            ${inStock && product.slug ? "cursor-pointer" : ""}
                            ${!inStock ? "opacity-60" : ""}`}
              >
                {/* Stretched card link — sits above image, below action buttons */}
                {inStock && product.slug && (
                  <Link
                    href={`/products/${product.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={product.name}
                  />
                )}

                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                      <ShoppingBag size={36} className="text-gray-300" />
                    </div>
                  )}
                  {!inStock && (
                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                      <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-full">Sold</span>
                    </div>
                  )}
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-base font-black text-gray-900 mb-3">{formatPrice(product.price)}</p>
                  {inStock ? (
                    <a
                      href={whatsappLink(business.phone, product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="relative z-20 w-full inline-flex items-center justify-center gap-1.5
                                 text-white text-xs font-semibold py-2.5 rounded-site
                                 hover:scale-[1.03] transition-all"
                      style={{ background: "linear-gradient(135deg, #5BBF7A 0%, #3EA85E 100%)" }}
                    >
                      <WhatsAppIcon size={13} />
                      Order on WhatsApp
                    </a>
                  ) : (
                    <p className="text-xs text-gray-400 text-center py-1 font-medium">Unavailable</p>
                  )}
                </div>
              </div>
            )
          })}
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
