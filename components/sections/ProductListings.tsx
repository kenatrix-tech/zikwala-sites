"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Tag, ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface Props {
  products: NonNullable<SiteConfig["products"]>
  business: SiteConfig["business"]
  preview?: boolean
  hideHeader?: boolean
}

type Product = NonNullable<SiteConfig["products"]>["items"][0]

function formatPrice(n: number) {
  return "$" + n.toLocaleString("en-US")
}

function discountPercent(original: number, current: number) {
  return Math.round(((original - current) / original) * 100)
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

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const BADGE_STYLES: Record<string, string> = {
  "New":        "bg-blue-500 text-white",
  "Best Seller":"bg-amber-400 text-gray-900",
  "Sale":       "bg-red-500 text-white",
  "Low Stock":  "bg-orange-500 text-white",
}

export function ProductListings({ products, business, preview = false, hideHeader = false }: Props) {
  const categories = ["All", ...Array.from(new Set(products.items.map(p => p.category).filter(Boolean)))] as string[]
  const [activeCategory, setActiveCategory] = useState("All")

  const visible = preview
    ? products.items.slice(0, 3)
    : activeCategory === "All"
      ? products.items
      : products.items.filter(p => p.category === activeCategory)

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">

        {!hideHeader && (
          <AnimateIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {products.title}
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                {products.subtitle}
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Category filters — full page only */}
        {!preview && categories.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-1.5 rounded-full text-sm font-semibold border transition-all
                  ${activeCategory === cat
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((product, i) => {
            const outOfStock = product.inStock === false
            return (
              <AnimateIn key={product.id} delay={i * 60}>
                <div className={`relative group rounded-2xl overflow-hidden bg-white shadow-sm
                                hover:shadow-xl transition-all duration-300 border border-gray-100
                                ${!outOfStock && product.slug ? "cursor-pointer" : ""}
                                ${outOfStock ? "opacity-60" : ""}`}>

                  {/* Stretched card link — sits above image, below action buttons */}
                  {!outOfStock && product.slug && (
                    <Link
                      href={`/products/${product.slug}`}
                      className="absolute inset-0 z-10"
                      aria-label={product.name}
                    />
                  )}

                  {/* Image */}
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full
                        ${BADGE_STYLES[product.badge] ?? "bg-gray-800 text-white"}`}>
                        {product.badge}
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-black
                                       px-2.5 py-1 rounded-full">
                        -{discountPercent(product.originalPrice, product.price)}%
                      </span>
                    )}
                    {outOfStock && (
                      <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                        <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    {product.category && (
                      <div className="flex items-center gap-1 text-xs font-semibold text-primary mb-1">
                        <Tag size={11} />
                        {product.category}
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-gray-500 text-xs mb-3 line-clamp-2">{product.description}</p>
                    )}

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-lg font-black text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {!outOfStock ? (
                      <div className="relative z-20 flex gap-2">
                        <a
                          href={whatsappLink(business.phone, product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-1.5
                                     text-white font-semibold text-sm py-2.5 rounded-site
                                     transition-all hover:scale-[1.03] hover:shadow-md"
                          style={{
                            background: "linear-gradient(135deg, #5BBF7A 0%, #3EA85E 100%)",
                            boxShadow: "0 2px 8px rgba(62,168,94,0.35)",
                          }}
                        >
                          <WhatsAppIcon size={14} />
                          Order
                        </a>
                        <a
                          href={`tel:${business.phone}`}
                          onClick={e => e.stopPropagation()}
                          className="inline-flex items-center justify-center
                                     bg-primary text-white font-semibold text-sm px-4 py-2.5 rounded-site
                                     hover:opacity-90 transition-opacity"
                        >
                          <Phone size={14} />
                        </a>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400 font-medium text-center py-1">
                        Currently unavailable
                      </p>
                    )}
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No products in this category right now. Check back soon.
          </p>
        )}

        {/* Preview CTA */}
        {preview && (
          <AnimateIn>
            <div className="mt-8 text-center">
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-primary text-white
                           font-bold px-8 py-3.5 rounded-site shadow-lg
                           hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                View All Products
                <ArrowRight size={16} />
              </a>
              <p className="text-sm text-gray-400 mt-3">
                {products.items.length} products available
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Contact nudge — full page only */}
        {!preview && (
          <AnimateIn>
            <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-gray-700 font-semibold mb-1">
                Looking for something specific?
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Message us and we&apos;ll help you find exactly what you need.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-2 bg-primary text-white
                             font-bold px-6 py-3 rounded-site hover:opacity-90 transition-opacity"
                >
                  <Phone size={15} />
                  Call Us
                </a>
                <a
                  href={`https://wa.me/${business.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I'm looking for a product and need help.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white
                             font-bold px-6 py-3 rounded-site transition-all hover:scale-[1.03] hover:shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #5BBF7A 0%, #3EA85E 100%)",
                    boxShadow: "0 2px 8px rgba(62,168,94,0.35)",
                  }}
                >
                  <WhatsAppIcon size={15} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </AnimateIn>
        )}

      </div>
    </section>
  )
}
