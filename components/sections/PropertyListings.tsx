"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight, Home, Share2, Check, MapPin } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"
import { useState } from "react"

interface Props {
  properties: NonNullable<SiteConfig["properties"]>
  business: SiteConfig["business"]
  preview?: boolean
  hideHeader?: boolean
  hideTabs?: boolean
}

type Filter = "All" | "For Sale" | "For Rent"
type Property = NonNullable<SiteConfig["properties"]>["items"][0]

function formatPrice(price: number, status: string) {
  const n = "$" + price.toLocaleString("en-US")
  return status === "For Rent" ? n + "/mo" : n
}


const STATUS_STYLE: Record<string, string> = {
  "For Sale":       "bg-blue-600 text-white",
  "For Rent":       "bg-emerald-600 text-white",
  "Sold":           "bg-gray-500 text-white",
  "Under Contract": "bg-amber-500 text-white",
}

function ShareButton({ slug, address }: { slug: string; address: string }) {
  const [copied, setCopied] = useState(false)

  const share = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const url = `${window.location.origin}/properties/${slug}`
    if (navigator.share) {
      navigator.share({ title: address, url }).catch(() => {})
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  return (
    <button
      onClick={share}
      aria-label="Share listing"
      className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors"
    >
      {copied
        ? <><Check size={13} className="text-emerald-500" /><span className="text-[11px] text-emerald-500 font-medium">Copied!</span></>
        : <><Share2 size={13} /><span className="text-[11px] font-medium">Share</span></>
      }
    </button>
  )
}

function PropertyCard({ p }: { p: Property }) {
  const sold = p.status === "Sold" || p.status === "Under Contract"
  const href = p.slug ? `/properties/${p.slug}` : null

  const inner = (
    <div className={`group flex flex-col bg-white rounded-2xl overflow-hidden
                     border border-gray-100 shadow-sm
                     ${href ? "cursor-pointer hover:shadow-xl hover:-translate-y-0.5" : ""}
                     transition-all duration-300 ${sold ? "opacity-70" : ""}`}>

      {/* ── Image ── */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden shrink-0">
        {p.image ? (
          <Image
            src={p.image}
            alt={[p.address, p.city].filter(Boolean).join(", ")}
            fill
            className={`object-cover ${href ? "group-hover:scale-105" : ""} transition-transform duration-500`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-150
                          flex items-center justify-center">
            <Home size={40} className="text-gray-300" />
          </div>
        )}

        {/* Status pill — top left */}
        <span className={`absolute top-3 left-3 text-[11px] font-bold tracking-wider
                          uppercase px-2.5 py-1 rounded-full shadow-sm
                          ${STATUS_STYLE[p.status] ?? "bg-gray-700 text-white"}`}>
          {p.status}
        </span>

        {/* Extra badge — top right */}
        {p.badge && (
          <span className="absolute top-3 right-3 text-[11px] font-bold tracking-wider
                           uppercase px-2.5 py-1 rounded-full bg-primary text-white shadow-sm">
            {p.badge}
          </span>
        )}
      </div>

      {/* ── Card body — Zillow-style layout ── */}
      <div className="flex flex-col flex-1 px-3 sm:px-4 py-3 gap-0.5">

        {/* Price — largest, boldest */}
        <p className="text-base sm:text-xl font-black text-gray-900 leading-tight">
          {p.price > 0
            ? formatPrice(p.price, p.status)
            : <span className="text-gray-400 font-medium text-sm">Price on request</span>}
        </p>

        {/* Beds · Baths · Sqft */}
        {(p.specsLine || p.bedrooms || p.bathrooms || p.sqft) && (
          <p className="text-xs text-gray-500 pb-2 border-b border-gray-100">
            {p.specsLine ?? [
              p.bedrooms  && `${p.bedrooms} bd`,
              p.bathrooms && `${p.bathrooms} ba`,
              p.sqft      && `${p.sqft.toLocaleString()} sqft`,
            ].filter(Boolean).join(" | ")}
          </p>
        )}

        {/* Street address */}
        <p className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-900 font-medium truncate leading-snug mt-0.5">
          <MapPin size={13} className="text-primary shrink-0" />
          {p.address || p.title}
        </p>

        {/* City, state */}
        <p className="text-xs sm:text-sm text-gray-500 truncate leading-snug pl-5">
          {p.city}
        </p>

        {/* Type tag + share */}
        <div className="flex items-center justify-between mt-1.5 pb-0.5">
          <p className="text-[11px] text-gray-400">
            {p.type}{sold && <span className="ml-1.5">· {p.status}</span>}
          </p>
          {p.slug && <ShareButton slug={p.slug} address={p.address || p.title} />}
        </div>
      </div>
    </div>
  )

  if (href) return <Link href={href} className="block">{inner}</Link>
  return inner
}

export function PropertyListings({ properties, business, preview = false, hideHeader = false, hideTabs = false }: Props) {
  const [filter, setFilter] = useState<Filter>("All")

  const visible = preview
    ? properties.items.slice(0, 3)
    : filter === "All"
      ? properties.items
      : properties.items.filter(p => p.status === filter)

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        {!hideHeader && (
          <AnimateIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {properties.title}
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">{properties.subtitle}</p>
            </div>
          </AnimateIn>
        )}

        {/* Filter tabs */}
        {!preview && !hideTabs && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
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
          </div>
        )}

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {visible.map((p, i) => (
              <AnimateIn key={p.id ?? i} delay={i * 60}>
                <PropertyCard p={p} />
              </AnimateIn>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 py-16">
            No {filter !== "All" ? filter + " " : ""}properties available right now.
          </p>
        )}

        {/* Preview CTA */}
        {preview && properties.items.length > 0 && (
          <AnimateIn>
            <div className="mt-10 text-center">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 bg-primary text-white
                           font-bold px-8 py-3.5 rounded-site shadow-md
                           hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                View All Listings
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateIn>
        )}

        {/* Contact nudge */}
        {!preview && (
          <AnimateIn>
            <div className="mt-14 rounded-2xl bg-white border border-gray-100 shadow-sm p-8 text-center">
              <p className="text-gray-900 font-bold text-lg mb-1">
                Not finding what you&apos;re looking for?
              </p>
              <p className="text-gray-500 text-sm mb-5">
                Tell us your budget and requirements — we&apos;ll find the right home for you.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-2 bg-primary text-white
                             font-bold px-6 py-3 rounded-site hover:opacity-90 transition-opacity"
                >
                  <Phone size={15} />
                  Call Agent
                </a>
              </div>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
