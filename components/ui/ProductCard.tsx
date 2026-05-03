"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ShoppingBag } from "lucide-react"

export interface ProductCardItem {
  id: string
  name: string
  price: number
  image?: string
  category?: string
  description?: string
  inStock?: boolean
  slug?: string
  badge?: string
  originalPrice?: number
  listingType?: string
}

interface ProductCardProps {
  product: ProductCardItem
  businessPhone: string
}

function formatPrice(n: number) {
  return "$" + n.toLocaleString("en-US")
}

function whatsappLink(phone: string, product: ProductCardItem) {
  const digits = phone.replace(/\D/g, "")
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "")
  const link = product.slug && base ? `\n\n🔗 ${base}/products/${product.slug}` : ""
  const text = encodeURIComponent(
    `Hi, I'm interested in: ${product.name} — ${formatPrice(product.price)}. Is it available?${link}`
  )
  return `https://wa.me/${digits}?text=${text}`
}

function WhatsAppIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ProductCard({ product, businessPhone }: ProductCardProps) {
  const inStock = product.inStock !== false
  const discountPct = product.originalPrice && product.originalPrice > product.price
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null
  // Only PRODUCT listings have a detail page; SERVICE/VEHICLE/etc. show WhatsApp/Call only
  const isNavigable = inStock && product.slug && product.listingType !== "SERVICE" && product.listingType !== "VEHICLE"

  return (
    <div className={`relative group rounded-2xl overflow-hidden bg-white shadow-sm
                     hover:shadow-xl transition-all duration-300 border border-gray-100
                     ${isNavigable ? "cursor-pointer" : ""}
                     ${!inStock ? "opacity-60" : ""}`}>

      {/* Stretched link — covers card, sits below action buttons */}
      {isNavigable && (
        <Link
          href={`/products/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${product.name}`}
        />
      )}

      {/* Image — landscape on mobile (less height), square on desktop */}
      <div className="relative aspect-[4/3] sm:aspect-square bg-gray-50 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag size={36} className="text-gray-200" />
          </div>
        )}

        {/* Badges */}
        {product.badge && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-white
                           text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1
                           rounded-full tracking-wide">
            {product.badge}
          </span>
        )}
        {discountPct && (
          <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-500 text-white
                           text-[10px] sm:text-[11px] font-black px-2 py-0.5 sm:px-2.5 sm:py-1
                           rounded-full">
            -{discountPct}%
          </span>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <span className="bg-gray-800 text-white text-xs font-bold px-4 py-1.5 rounded-full
                             tracking-widest uppercase">Sold</span>
          </div>
        )}
      </div>

      {/* Info — compact on mobile, fuller on desktop */}
      <div className="p-2 sm:p-4">
        {product.category && (
          <p className="hidden sm:block text-xs font-semibold text-primary uppercase tracking-widest mb-1">
            {product.category}
          </p>
        )}
        <h3 className="font-semibold text-gray-900 text-xs sm:text-base leading-tight sm:leading-snug
                       mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <span className="text-sm sm:text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Action buttons */}
        {inStock ? (
          <div className="relative z-20 flex items-center gap-2">
            <a
              href={whatsappLink(businessPhone, product)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5
                         text-on-primary font-semibold text-xs py-2 sm:py-2.5 rounded-site
                         hover:opacity-85 transition-opacity"
              style={{ background: "var(--color-primary)" }}
            >
              <WhatsAppIcon />
              Order
            </a>
            <a
              href={`tel:${businessPhone}`}
              onClick={e => e.stopPropagation()}
              aria-label="Call"
              className="relative z-20 text-gray-400 hover:text-primary transition-colors p-1"
            >
              <Phone size={14} />
            </a>
          </div>
        ) : (
          <p className="text-xs text-gray-400 font-medium text-center py-1 tracking-wide">
            Currently unavailable
          </p>
        )}
      </div>
    </div>
  )
}
