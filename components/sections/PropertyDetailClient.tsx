"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
  Bed, Bath, Maximize2, MapPin, Phone,
  ChevronLeft, CheckCircle2, Calendar, Layers, ArrowRight,
} from "lucide-react"
import { PropertyPhotoGallery } from "@/components/sections/PropertyPhotoGallery"
import { fetchPropertyBySlug, type PropertyDto } from "@/lib/kenatrix"
import { getConfig } from "@/config"

const config = getConfig()

function formatPrice(p: PropertyDto) {
  const amount = p.sellingPrice ?? p.monthlyRent ?? 0
  const formatted = "$" + Number(amount).toLocaleString("en-US")
  return p.propertyPurpose === "R" ? formatted + "/mo" : formatted
}

function statusLabel(p: PropertyDto) {
  return p.propertyPurpose === "R" ? "For Rent" : "For Sale"
}

function Skeleton() {
  return (
    <div className="bg-white min-h-screen pb-16 animate-pulse">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3">
        <div className="h-4 w-32 bg-gray-100 rounded" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="aspect-video bg-gray-100 rounded-2xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-8 w-48 bg-gray-100 rounded" />
            <div className="h-10 w-64 bg-gray-100 rounded" />
            <div className="h-4 w-40 bg-gray-100 rounded" />
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-100 h-64 bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-5xl font-black text-gray-200 mb-4">404</p>
        <h1 className="text-xl font-bold text-gray-900 mb-2">Property Not Found</h1>
        <p className="text-gray-500 text-sm mb-6">This listing may have been removed or the link is incorrect.</p>
        <Link
          href="/properties"
          className="inline-flex items-center gap-1.5 bg-primary text-white font-bold px-6 py-3 rounded-site hover:opacity-90 transition-opacity"
        >
          <ChevronLeft size={15} />
          Back to Listings
        </Link>
      </div>
    </div>
  )
}

export function PropertyDetailClient() {
  const params = useParams()
  const slug = params.slug as string

  const [property, setProperty] = useState<PropertyDto | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug || slug === "_") { setLoading(false); return }
    fetchPropertyBySlug(slug)
      .then(p => { if (!p) setNotFound(true); else setProperty(p) })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <Skeleton />
  if (notFound || slug === "_") return <NotFound />
  if (!property) return null

  const address = [property.street, property.city, property.state].filter(Boolean).join(", ")
  const allImages = Array.from(new Set([
    ...(property.thumbnailUrl ? [property.thumbnailUrl] : []),
    ...(property.images?.map(img => img.imageUrl).filter(Boolean) ?? []),
  ]))
  const contactPhone = config.business.phone
  const isRent = property.propertyPurpose === "R"
  const mapAddress = [property.street, property.city, property.state, property.zipCode].filter(Boolean).join(", ")
  const mapQuery = (property.latitude && property.longitude)
    ? `${property.latitude},${property.longitude}`
    : encodeURIComponent(mapAddress)
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed&z=17`

  return (
    <div className="bg-white min-h-screen pb-16">

      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3">
        <Link href="/properties" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors">
          <ChevronLeft size={16} />
          Back to Listings
        </Link>
      </div>

      {/* Photo gallery */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <PropertyPhotoGallery images={allImages} alt={address} />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT: details */}
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
                    <span className="text-2xl font-black text-gray-900">{property.squareFeet.toLocaleString()}</span>
                    <span className="text-xs text-gray-500 font-medium">Sq Ft</span>
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            {property.description && (() => {
              const desc = property.description.split(/\n\nSubmitted by:/i)[0].trim()
              return desc ? (
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">About This Property</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{desc}</p>
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

            <div className="pt-4">
              <Link href="/properties" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
                <ChevronLeft size={14} />
                See all listings
              </Link>
            </div>
          </div>

          {/* RIGHT: sticky contact card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="bg-accent px-6 py-6 border-b border-gray-100">
                <p className="text-3xl font-black text-gray-900">{formatPrice(property)}</p>
                <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                  <MapPin size={13} className="text-primary shrink-0" />
                  {address}
                </p>
              </div>
              <div className="bg-white px-6 py-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{config.business.name}</p>
                    <p className="text-xs text-gray-400">{contactPhone}</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <a
                    href={`tel:${contactPhone}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 rounded-site hover:opacity-90 transition-opacity"
                  >
                    <Phone size={16} />
                    Call Agent
                  </a>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold py-3 rounded-site hover:border-primary hover:text-primary transition-all"
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

      {/* Map */}
      {(property.latitude || property.street || property.city) && (
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
      )}

    </div>
  )
}
