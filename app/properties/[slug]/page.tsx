import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Bed, Bath, Maximize2, MapPin, Phone,
  ChevronLeft, CheckCircle2, Home, Calendar, Layers, ArrowRight,
} from "lucide-react"
import { PropertyPhotoGallery } from "@/components/sections/PropertyPhotoGallery"
import { getConfig } from "@/config"
import {
  fetchPropertiesBySeller,
  fetchListingsBySellerSlug,
  fetchListingsBySellerSlugAndStatus,
  fetchPropertyBySlug,
  type PropertyDto,
} from "@/lib/kenatrix"

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const config = getConfig()
  if (!config.sellerSlug) return [{ slug: "_" }]

  try {
    if (config.storefrontFilter?.listingType === "PROPERTY") {
      const [active, nonActive] = await Promise.all([
        fetchListingsBySellerSlug(config.sellerSlug, config.storefrontFilter),
        fetchListingsBySellerSlugAndStatus(config.sellerSlug, ["SOLD", "UNDER_CONTRACT"], "PROPERTY"),
      ])
      const all = [...active, ...nonActive]
      const slugs = Array.from(new Set(all.map(l => l.slug ?? String(l.id))))
        .map(slug => ({ slug }))
      return slugs.length ? slugs : [{ slug: "_" }]
    }
    const properties = await fetchPropertiesBySeller(config.sellerSlug)
    return properties.length
      ? properties.map(p => ({ slug: p.listingSlug }))
      : [{ slug: "_" }]
  } catch {
    return [{ slug: "_" }]
  }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const config = getConfig()
  const property = await fetchPropertyBySlug(params.slug)
  if (!property) return { title: "Property | " + config.business.name }
  const address = [property.street, property.city, property.state].filter(Boolean).join(", ")
  return {
    title: `${address} | ${config.business.name}`,
    description:
      property.description?.slice(0, 155) ??
      `${statusLabel(property)} in ${property.city}, ${property.state}`,
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatPrice(p: PropertyDto) {
  const amount = p.sellingPrice ?? p.monthlyRent ?? 0
  const formatted = "$" + Number(amount).toLocaleString("en-US")
  return p.propertyPurpose === "R" ? formatted + "/mo" : formatted
}

function statusLabel(p: PropertyDto) {
  return p.propertyPurpose === "R" ? "For Rent" : "For Sale"
}

// ─── Photo mosaic ─────────────────────────────────────────────────────────────


// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const config = getConfig()
  const property = await fetchPropertyBySlug(params.slug)
  if (!property || params.slug === "_") notFound()

  const address = [property.street, property.city, property.state].filter(Boolean).join(", ")
  const cityState = [property.city, property.state].filter(Boolean).join(", ")

  const allImages = Array.from(new Set([
    ...(property.thumbnailUrl ? [property.thumbnailUrl] : []),
    ...(property.images?.map(img => img.imageUrl).filter(Boolean) ?? []),
  ])).slice(0, 6)

  const contactPhone = config.business.phone
  const isRent = property.propertyPurpose === "R"

  return (
    <div className="bg-white min-h-screen pb-16">

      {/* ── Back nav ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3">
        <Link
          href="/properties"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500
                     hover:text-primary transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Listings
        </Link>
      </div>

      {/* ── Photo gallery ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <PropertyPhotoGallery images={allImages} alt={address} />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── LEFT: details ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Price + badges */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full
                  ${isRent ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
                  {statusLabel(property)}
                </span>
                {property.categoryName && (
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
                    {property.categoryName}
                  </span>
                )}
                {property.isFeatured && (
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-amber-100 text-amber-700">
                    ⭐ Featured
                  </span>
                )}
              </div>
              <p className="text-4xl font-black text-gray-900 mb-2">{formatPrice(property)}</p>
              <p className="flex items-center gap-2 text-gray-500 text-[15px]">
                <MapPin size={15} className="shrink-0 text-primary" />
                {address}
              </p>
            </div>

            {/* Key specs */}
            {(property.bedRooms > 0 || property.bathRooms > 0 || property.squareFeet > 0) && (
              <div className="flex flex-wrap gap-6 py-5 border-y border-gray-100">
                {property.bedRooms > 0 && (
                  <div className="flex flex-col items-center gap-1.5 min-w-[60px]">
                    <Bed size={22} className="text-primary" />
                    <span className="text-2xl font-black text-gray-900">{property.bedRooms}</span>
                    <span className="text-xs text-gray-500 font-medium">Bedrooms</span>
                  </div>
                )}
                {property.bathRooms > 0 && (
                  <div className="flex flex-col items-center gap-1.5 min-w-[60px]">
                    <Bath size={22} className="text-primary" />
                    <span className="text-2xl font-black text-gray-900">{property.bathRooms}</span>
                    <span className="text-xs text-gray-500 font-medium">Bathrooms</span>
                  </div>
                )}
                {property.squareFeet > 0 && (
                  <div className="flex flex-col items-center gap-1.5 min-w-[60px]">
                    <Maximize2 size={22} className="text-primary" />
                    <span className="text-2xl font-black text-gray-900">
                      {property.squareFeet.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Sq Ft</span>
                  </div>
                )}
              </div>
            )}

            {/* Description — strip internal "Submitted by:" contact note */}
            {property.description && (() => {
              const desc = property.description.split(/\n\nSubmitted by:/i)[0].trim()
              return desc ? (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">About This Property</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {desc}
                  </p>
                </div>
              ) : null
            })()}

            {/* Property details */}
            {(property.yearBuilt > 0 || property.totalFloors > 0 || property.flooring || property.parking) && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Property Details</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {property.yearBuilt > 0 && (
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-2.5">
                      <Calendar size={16} className="text-primary shrink-0" />
                      <div>
                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Built</p>
                        <p className="text-sm font-bold text-gray-900">{property.yearBuilt}</p>
                      </div>
                    </div>
                  )}
                  {property.totalFloors > 0 && (
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-2.5">
                      <Layers size={16} className="text-primary shrink-0" />
                      <div>
                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Floors</p>
                        <p className="text-sm font-bold text-gray-900">{property.totalFloors}</p>
                      </div>
                    </div>
                  )}
                  {property.flooring && (
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Flooring</p>
                      <p className="text-sm font-bold text-gray-900">{property.flooring}</p>
                    </div>
                  )}
                  {property.parking && (
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">Parking</p>
                      <p className="text-sm font-bold text-gray-900">{property.parking}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map(a => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Appliances */}
            {property.appliances && property.appliances.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Appliances</h2>
                <div className="grid grid-cols-2 gap-2">
                  {property.appliances.map(a => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="pt-4">
              <Link
                href="/properties"
                className="inline-flex items-center gap-1.5 text-sm text-primary
                           font-semibold hover:underline"
              >
                <ChevronLeft size={14} />
                See all listings
              </Link>
            </div>
          </div>

          {/* ── RIGHT: sticky contact card ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-100 shadow-lg overflow-hidden">

              {/* Accent header — matches page hero bg */}
              <div className="bg-accent px-6 py-6 border-b border-gray-100">
                <p className="text-3xl font-black text-gray-900">{formatPrice(property)}</p>
                <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                  <MapPin size={13} className="text-primary shrink-0" />
                  {address}
                </p>
              </div>

              {/* Body */}
              <div className="bg-white px-6 py-5 space-y-4">

                {/* Agent row */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{config.business.name}</p>
                    <p className="text-xs text-gray-400">{contactPhone}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5">
                  <a
                    href={`tel:${contactPhone}`}
                    className="w-full inline-flex items-center justify-center gap-2
                               bg-primary text-white font-bold py-3.5 rounded-site
                               hover:opacity-90 transition-opacity"
                  >
                    <Phone size={16} />
                    Call Agent
                  </a>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2
                               border border-gray-200 text-gray-700 font-semibold py-3
                               rounded-site hover:border-primary hover:text-primary transition-all"
                  >
                    Send Inquiry
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Map ── */}
      {(property.latitude || property.street || property.city) && (() => {
        const mapAddress = [property.street, property.city, property.state, property.zipCode]
          .filter(Boolean).join(", ")
        // Coordinates give an exact pin; fall back to address search when unavailable
        const mapQuery = (property.latitude && property.longitude)
          ? `${property.latitude},${property.longitude}`
          : encodeURIComponent(mapAddress)
        const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed&z=17`
        return (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              Location
            </h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[360px]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${mapAddress}`}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">{mapAddress}</p>
          </div>
        )
      })()}

    </div>
  )
}
