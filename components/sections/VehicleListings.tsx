"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, Gauge, Fuel, Settings2, CheckCircle2, ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"
import { useState } from "react"

interface Props {
  vehicles: NonNullable<SiteConfig["vehicles"]>
  business: SiteConfig["business"]
  /** Show first 3 items only with a "View All" link — used on home page */
  preview?: boolean
  hideHeader?: boolean
}

type Filter = "All" | "Gasoline" | "Diesel" | "Hybrid" | "Electric"

function formatPrice(n: number) {
  return "$" + n.toLocaleString("en-US")
}

function formatMileage(n: number) {
  return n.toLocaleString("en-US") + " mi"
}

function whatsappLink(phone: string, vehicle: NonNullable<SiteConfig["vehicles"]>["items"][0]) {
  const digits = phone.replace(/\D/g, "")
  const text = encodeURIComponent(
    `Hi, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} listed for ${formatPrice(vehicle.price)}. Is it still available?`
  )
  return `https://wa.me/${digits}?text=${text}`
}

const FUEL_COLORS: Record<string, string> = {
  Electric: "bg-green-100 text-green-700",
  Hybrid:   "bg-teal-100 text-teal-700",
  Diesel:   "bg-amber-100 text-amber-700",
  Gasoline: "bg-gray-100 text-gray-600",
}

const BADGE_COLORS: Record<string, string> = {
  "Certified":    "bg-blue-600 text-white",
  "Hot Deal":     "bg-red-500 text-white",
  "New Arrival":  "bg-green-600 text-white",
  "Price Drop":   "bg-orange-500 text-white",
}

export function VehicleListings({ vehicles, business, preview = false, hideHeader = false }: Props) {
  const [filter, setFilter] = useState<Filter>("All")

  const fuels: Filter[] = ["All", ...Array.from(
    new Set(vehicles.items.map(v => v.fuel).filter(Boolean) as Filter[])
  )]

  const allVisible = filter === "All"
    ? vehicles.items
    : vehicles.items.filter(v => v.fuel === filter)

  const visible = preview ? vehicles.items.slice(0, 3) : allVisible

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        {!hideHeader && (
          <AnimateIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {vehicles.title}
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                {vehicles.subtitle}
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Filter tabs — hidden in preview mode */}
        {!preview && fuels.length > 2 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {fuels.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all
                  ${filter === f
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((v, i) => (
            <AnimateIn key={v.id} delay={i * 60}>
              <div className={`group rounded-2xl border border-gray-100 shadow-sm overflow-hidden
                              bg-white hover:shadow-xl transition-shadow duration-300
                              ${v.sold ? "opacity-60" : ""}`}>

                {/* Image */}
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={v.image}
                    alt={`${v.year} ${v.make} ${v.model}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  {v.badge && !v.sold && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full
                      ${BADGE_COLORS[v.badge] ?? "bg-gray-800 text-white"}`}>
                      {v.badge}
                    </span>
                  )}
                  {v.sold && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-white text-gray-900 font-black text-sm px-4 py-1.5 rounded-full">
                        SOLD
                      </span>
                    </div>
                  )}
                  {/* Price pill */}
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm
                                  text-white font-black text-sm px-3 py-1.5 rounded-full">
                    {formatPrice(v.price)}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-base mb-3">
                    {v.year} {v.make} {v.model}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.mileage !== undefined && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50
                                       border border-gray-100 px-2.5 py-1 rounded-full">
                        <Gauge size={11} />
                        {formatMileage(v.mileage)}
                      </span>
                    )}
                    {v.fuel && (
                      <span className={`inline-flex items-center gap-1 text-xs font-medium
                                        px-2.5 py-1 rounded-full ${FUEL_COLORS[v.fuel] ?? "bg-gray-100 text-gray-600"}`}>
                        <Fuel size={11} />
                        {v.fuel}
                      </span>
                    )}
                    {v.transmission && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50
                                       border border-gray-100 px-2.5 py-1 rounded-full">
                        <Settings2 size={11} />
                        {v.transmission}
                      </span>
                    )}
                    {v.color && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50
                                       border border-gray-100 px-2.5 py-1 rounded-full">
                        {v.color}
                      </span>
                    )}
                  </div>

                  {/* CTAs */}
                  {!v.sold && (
                    <div className="flex flex-col gap-2">
                      {v.slug && (
                        <Link
                          href={`/vehicles/${v.slug}`}
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
                          href={whatsappLink(business.phone, v)}
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
                  )}
                  {v.sold && (
                    <div className="flex items-center gap-1.5 text-sm text-gray-400 font-medium">
                      <CheckCircle2 size={14} />
                      This vehicle has been sold
                    </div>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No {filter} vehicles available right now. Check back soon.
          </p>
        )}

        {/* Preview CTA — show "View All" link instead of contact nudge */}
        {preview && (
          <AnimateIn>
            <div className="mt-8 text-center">
              <a
                href="/vehicles"
                className="inline-flex items-center gap-2 bg-primary text-white
                           font-bold px-8 py-3.5 rounded-site shadow-lg
                           hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                View Full Inventory
                <ArrowRight size={16} />
              </a>
              <p className="text-sm text-gray-400 mt-3">
                {vehicles.items.length} vehicles available
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Contact nudge — full page only */}
        {!preview && (
        <AnimateIn>
          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-700 font-semibold mb-1">
              Don&apos;t see what you&apos;re looking for?
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Contact us — we source vehicles on request.
            </p>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 bg-primary text-white
                         font-bold px-6 py-3 rounded-site hover:opacity-90 transition-opacity"
            >
              <Phone size={15} />
              Call {business.phone}
            </a>
          </div>
        </AnimateIn>
        )}

      </div>
    </section>
  )
}
