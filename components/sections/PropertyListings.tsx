"use client"

import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Maximize2, MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"
import { useState } from "react"

interface Props {
  properties: NonNullable<SiteConfig["properties"]>
  business: SiteConfig["business"]
  /** Show first 3 items only with a "View All" link — used on home page */
  preview?: boolean
  hideHeader?: boolean
}

type Filter = "All" | "For Sale" | "For Rent"

function formatPrice(n: number, status: string) {
  const formatted = "$" + n.toLocaleString("en-US")
  return status === "For Rent" ? formatted + "/mo" : formatted
}

function whatsappLink(phone: string, p: NonNullable<SiteConfig["properties"]>["items"][0]) {
  const digits = phone.replace(/\D/g, "")
  const text = encodeURIComponent(
    `Hi, I'm interested in the property at ${p.address}, ${p.city} listed ${p.status} for ${formatPrice(p.price, p.status)}. Is it still available?`
  )
  return `https://wa.me/${digits}?text=${text}`
}

const STATUS_COLORS: Record<string, string> = {
  "For Sale":        "bg-blue-600 text-white",
  "For Rent":        "bg-green-600 text-white",
  "Sold":            "bg-gray-600 text-white",
  "Under Contract":  "bg-orange-500 text-white",
}

const BADGE_COLORS: Record<string, string> = {
  "New Listing":   "bg-blue-500 text-white",
  "Price Reduced": "bg-red-500 text-white",
  "Open House":    "bg-purple-600 text-white",
  "Just Listed":   "bg-green-600 text-white",
}

export function PropertyListings({ properties, business, preview = false, hideHeader = false }: Props) {
  const [filter, setFilter] = useState<Filter>("All")

  const allVisible = filter === "All"
    ? properties.items
    : properties.items.filter(p => p.status === filter)

  const visible = preview ? properties.items.slice(0, 3) : allVisible

  const isUnavailable = (p: NonNullable<SiteConfig["properties"]>["items"][0]) =>
    p.status === "Sold" || p.status === "Under Contract"

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        {!hideHeader && (
          <AnimateIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {properties.title}
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                {properties.subtitle}
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Filter tabs — hidden in preview mode */}
        {!preview && <div className="flex flex-wrap gap-2 justify-center mb-8">
          {(["All", "For Sale", "For Rent"] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-1.5 rounded-full text-sm font-semibold border transition-all
                ${filter === f
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
                }`}
            >
              {f}
            </button>
          ))}
        </div>}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <AnimateIn key={p.id} delay={i * 60}>
              <div className={`group rounded-2xl overflow-hidden bg-white shadow-sm
                              hover:shadow-xl transition-shadow duration-300 border border-gray-100
                              ${isUnavailable(p) ? "opacity-70" : ""}`}>

                {/* Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Status badge */}
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full
                    ${STATUS_COLORS[p.status] ?? "bg-gray-800 text-white"}`}>
                    {p.status}
                  </span>
                  {/* Extra badge */}
                  {p.badge && (
                    <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full
                      ${BADGE_COLORS[p.badge] ?? "bg-gray-800 text-white"}`}>
                      {p.badge}
                    </span>
                  )}
                  {/* Price */}
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm
                                  text-white font-black text-sm px-3 py-1.5 rounded-full">
                    {formatPrice(p.price, p.status)}
                  </div>
                  {/* Type pill */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm
                                  text-gray-700 font-semibold text-xs px-2.5 py-1 rounded-full">
                    {p.type}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-base mb-1">{p.title}</h3>
                  <p className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <MapPin size={13} className="shrink-0" />
                    {p.address}, {p.city}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4
                                  pb-4 border-b border-gray-100">
                    {p.bedrooms !== undefined && (
                      <span className="flex items-center gap-1">
                        <Bed size={14} className="text-gray-400" />
                        {p.bedrooms} bd
                      </span>
                    )}
                    {p.bathrooms !== undefined && (
                      <span className="flex items-center gap-1">
                        <Bath size={14} className="text-gray-400" />
                        {p.bathrooms} ba
                      </span>
                    )}
                    {p.sqft !== undefined && (
                      <span className="flex items-center gap-1">
                        <Maximize2 size={14} className="text-gray-400" />
                        {p.sqft.toLocaleString()} sqft
                      </span>
                    )}
                  </div>

                  {/* CTAs */}
                  {!isUnavailable(p) ? (
                    <div className="flex flex-col gap-2">
                      {p.slug && (
                        <Link
                          href={`/properties/${p.slug}`}
                          className="w-full inline-flex items-center justify-center gap-1.5
                                     border border-primary text-primary font-semibold text-sm
                                     py-2 rounded-site hover:bg-primary hover:text-white transition-all"
                        >
                          View Details
                          <ArrowRight size={13} />
                        </Link>
                      )}
                      <div className="flex gap-2">
                        <a
                          href={`tel:${business.phone}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5
                                     bg-primary text-white font-semibold text-sm py-2.5 rounded-site
                                     hover:opacity-90 transition-opacity"
                        >
                          <Phone size={14} />
                          Call
                        </a>
                        <a
                          href={whatsappLink(business.phone, p)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5
                                     bg-[#25D366] text-white font-semibold text-sm py-2.5 rounded-site
                                     hover:opacity-90 transition-opacity"
                        >
                          <MessageCircle size={14} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 font-medium text-center">
                      {p.status === "Sold" ? "This property has been sold" : "Under contract"}
                    </p>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No {filter} properties available right now. Check back soon.
          </p>
        )}

        {/* Preview CTA */}
        {preview && (
          <AnimateIn>
            <div className="mt-8 text-center">
              <a
                href="/properties"
                className="inline-flex items-center gap-2 bg-primary text-white
                           font-bold px-8 py-3.5 rounded-site shadow-lg
                           hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                View All Listings
                <ArrowRight size={16} />
              </a>
              <p className="text-sm text-gray-400 mt-3">
                {properties.items.length} properties available
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Contact nudge — full page only */}
        {!preview && <AnimateIn>
          <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 font-semibold mb-1">
              Looking for something specific?
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Tell us your budget and requirements — we&apos;ll find the right property for you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center gap-2 bg-primary text-white
                           font-bold px-6 py-3 rounded-site hover:opacity-90 transition-opacity"
              >
                <Phone size={15} />
                Free Consultation
              </a>
              <a
                href={whatsappLink(business.phone, {
                  id: "general",
                  title: "property inquiry",
                  address: "",
                  city: business.city,
                  price: 0,
                  status: "For Sale",
                  type: "House",
                  image: "",
                })}
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
        </AnimateIn>}

      </div>
    </section>
  )
}
