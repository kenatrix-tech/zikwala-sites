"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"
import { ProductCard } from "@/components/ui/ProductCard"

interface Props {
  products: NonNullable<SiteConfig["products"]>
  business: SiteConfig["business"]
  preview?: boolean
  hideHeader?: boolean
}

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function ProductListings({ products, business, preview = false, hideHeader = false }: Props) {
  const productOnly = products.items.filter(p => !p.listingType || p.listingType === "PRODUCT")
  const categories = ["All", ...Array.from(new Set(productOnly.map(p => p.category).filter(Boolean)))] as string[]
  const [activeCategory, setActiveCategory] = useState("All")

  const visible = preview
    ? productOnly.slice(0, 3)
    : activeCategory === "All"
      ? productOnly
      : productOnly.filter(p => p.category === activeCategory)

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

        {/* Category filters */}
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visible.map((product, i) => (
            <AnimateIn key={product.id} delay={i * 60}>
              <ProductCard product={product} businessPhone={business.phone} />
            </AnimateIn>
          ))}
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
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary text-white
                           font-bold px-8 py-3.5 rounded-site shadow-lg
                           hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                View All Products
                <ArrowRight size={16} />
              </Link>
              <p className="text-sm text-gray-400 mt-3">
                {products.items.length} products available
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Contact nudge */}
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
                             font-bold px-6 py-3 rounded-site transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}
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
