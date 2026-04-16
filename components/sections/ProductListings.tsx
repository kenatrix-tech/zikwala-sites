"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, Phone, ArrowRight, Tag } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface Props {
  products: NonNullable<SiteConfig["products"]>
  business: SiteConfig["business"]
  preview?: boolean
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
  const text = encodeURIComponent(
    `Hi, I'd like to order: ${product.name} — ${formatPrice(product.price)}. Is it available?`
  )
  return `https://wa.me/${digits}?text=${text}`
}

const BADGE_STYLES: Record<string, string> = {
  "New":        "bg-blue-500 text-white",
  "Best Seller":"bg-amber-400 text-gray-900",
  "Sale":       "bg-red-500 text-white",
  "Low Stock":  "bg-orange-500 text-white",
}

export function ProductListings({ products, business, preview = false }: Props) {
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
                <div className={`group rounded-2xl overflow-hidden bg-white shadow-sm
                                hover:shadow-xl transition-shadow duration-300 border border-gray-100
                                ${outOfStock ? "opacity-60" : ""}`}>

                  {/* Image */}
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge */}
                    {product.badge && (
                      <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full
                        ${BADGE_STYLES[product.badge] ?? "bg-gray-800 text-white"}`}>
                        {product.badge}
                      </span>
                    )}
                    {/* Discount pill */}
                    {product.originalPrice && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-black
                                       px-2.5 py-1 rounded-full">
                        -{discountPercent(product.originalPrice, product.price)}%
                      </span>
                    )}
                    {/* Out of stock overlay */}
                    {outOfStock && (
                      <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                        <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Details */}
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

                    {/* Price */}
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

                    {/* CTAs */}
                    {!outOfStock ? (
                      <div className="flex gap-2">
                        <a
                          href={whatsappLink(business.phone, product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5
                                     bg-[#25D366] text-white font-semibold text-sm py-2.5 rounded-site
                                     hover:opacity-90 transition-opacity"
                        >
                          <MessageCircle size={14} />
                          Order
                        </a>
                        <a
                          href={`tel:${business.phone}`}
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
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white
                             font-bold px-6 py-3 rounded-site hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={15} />
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
