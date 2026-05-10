"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

type MenuItem = NonNullable<SiteConfig["products"]>["items"][number]

interface Props {
  products: NonNullable<SiteConfig["products"]>
  business: SiteConfig["business"]
  deliveryLinks?: SiteConfig["deliveryLinks"]
  preview?: boolean
}

function WhatsAppIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const BADGE_STYLES: Record<string, string> = {
  "Best Seller":  "bg-amber-100 text-amber-700",
  "Most Popular": "bg-amber-100 text-amber-700",
  "Chef's Pick":  "bg-violet-50 text-violet-700",
  "Signature":    "bg-primary/10 text-primary",
  "Best Value":   "bg-blue-50 text-blue-600",
  "Vegan":        "bg-green-50 text-green-700",
  "Vegetarian":   "bg-green-50 text-green-700",
  "New":          "bg-purple-50 text-purple-700",
  "Halal":        "bg-emerald-50 text-emerald-700",
  "Spicy":        "bg-red-50 text-red-600",
}

function badgeClass(badge: string) {
  return BADGE_STYLES[badge] ?? "bg-gray-100 text-gray-500"
}

function whatsappOrderLink(phone: string, item: MenuItem) {
  const digits = phone.replace(/\D/g, "")
  const text = encodeURIComponent(`Hi, I'd like to order: ${item.name} — $${item.price}. Is it available?`)
  return `https://wa.me/${digits}?text=${text}`
}

// ─── Single menu item row ──────────────────────────────────────────────────────

function MenuItemRow({ item, phone }: { item: MenuItem; phone: string }) {
  const unavailable = item.inStock === false

  return (
    <div className={`flex items-start gap-4 py-5 border-b border-gray-100 last:border-0 group ${unavailable ? "opacity-50" : ""}`}>

      {/* Left: text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <h3 className="font-bold text-gray-900 text-[15px] leading-snug">{item.name}</h3>
          <div className="shrink-0 text-right">
            <span className="font-black text-primary text-base">${item.price}</span>
            {item.originalPrice && (
              <span className="text-gray-400 line-through text-xs ml-1.5">${item.originalPrice}</span>
            )}
          </div>
        </div>

        {item.description && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2.5">
            {item.description}
          </p>
        )}

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {item.badge && (
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${badgeClass(item.badge)}`}>
                {item.badge}
              </span>
            )}
            {unavailable && (
              <span className="text-xs text-gray-400 font-medium">Currently unavailable</span>
            )}
          </div>
          {!unavailable && (
            <a
              href={whatsappOrderLink(phone, item)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white
                         px-3 py-1 rounded-full transition-all hover:opacity-90 hover:scale-105 shrink-0"
              style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}
            >
              <WhatsAppIcon />
              Order
            </a>
          )}
        </div>
      </div>

      {/* Right: image */}
      {item.image && (
        <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            width={96}
            height={96}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────

export function RestaurantMenu({ products, business, deliveryLinks, preview = false }: Props) {
  const items = products.items
  const categories = Array.from(new Set(items.map(p => p.category).filter(Boolean))) as string[]
  const [activeTab, setActiveTab] = useState("All")

  const visibleItems = preview
    ? items.slice(0, 5)
    : activeTab === "All"
      ? items
      : items.filter(p => p.category === activeTab)

  const grouped = categories.reduce<Record<string, MenuItem[]>>((acc, cat) => {
    const catItems = visibleItems.filter(p => p.category === cat)
    if (catItems.length) acc[cat] = catItems
    return acc
  }, {})

  return (
    <section className="bg-surface">

      {/* ── Sticky category tab bar ── */}
      {!preview && categories.length > 1 && (
        <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex gap-1 overflow-x-auto scrollbar-none py-3">
              {["All", ...categories].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap
                    ${activeTab === tab
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-500 hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        {/* ── All tab: grouped sections with headers ── */}
        {!preview && activeTab === "All" && categories.length > 0 ? (
          <div className="space-y-10">
            {categories.map(cat => {
              const catItems = grouped[cat]
              if (!catItems?.length) return null
              return (
                <AnimateIn key={cat}>
                  <div>
                    <h2 className="text-lg font-black text-gray-900 pb-3 mb-1 border-b-2 border-primary/20 flex items-center gap-2">
                      {cat}
                      <span className="text-xs font-medium text-gray-400 normal-case">
                        {catItems.length} item{catItems.length !== 1 ? "s" : ""}
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
                      {catItems.map(item => (
                        <MenuItemRow key={item.id} item={item} phone={business.phone} />
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        ) : (
          // ── Single category tab: 2 columns on desktop, 1 on mobile ──
          <AnimateIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
              {visibleItems.map(item => (
                <MenuItemRow key={item.id} item={item} phone={business.phone} />
              ))}
            </div>
          </AnimateIn>
        )}

        {/* ── Preview CTA ── */}
        {preview && (
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-white
                         font-bold px-8 py-3.5 rounded-site shadow-lg
                         hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              View Full Menu
              <ArrowRight size={16} />
            </Link>
            <p className="text-sm text-gray-400 mt-3">{items.length} items on our menu</p>
          </div>
        )}

        {/* ── Bottom order nudge ── */}
        {!preview && (
          <AnimateIn>
            <div className="mt-14 rounded-2xl bg-primary/5 border border-primary/10 p-6 sm:p-8 text-center max-w-xl mx-auto">
              <p className="font-bold text-gray-900 mb-1">Ready to order or have a question?</p>
              <p className="text-gray-500 text-sm mb-5">
                Call us or message on WhatsApp — we'll take care of you.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white
                             font-bold px-6 py-3 rounded-site hover:bg-gray-700 transition-colors"
                >
                  <Phone size={15} />
                  Call to Order
                </a>
                <a
                  href={`https://wa.me/${business.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I'd like to place an order. Can you help me?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-site
                             hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}
                >
                  <WhatsAppIcon />
                  WhatsApp Order
                </a>
              </div>

              {deliveryLinks && deliveryLinks.length > 0 && (
                <div className="mt-6 pt-5 border-t border-primary/10">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3">
                    Also available on
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {deliveryLinks.map(link => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200
                                   text-sm font-semibold text-gray-600 bg-white hover:border-gray-400
                                   hover:text-gray-900 transition-all"
                      >
                        <ArrowRight size={13} />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimateIn>
        )}

      </div>
    </section>
  )
}
