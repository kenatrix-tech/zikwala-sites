import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Bed, Bath, Maximize2, MapPin, Phone, MessageCircle,
  ChevronLeft, CheckCircle2, Home, Calendar, Layers
} from "lucide-react"
import { getConfig } from "@/config"
import {
  fetchPropertiesBySeller,
  fetchPropertyBySlug,
  type PropertyDto,
} from "@/lib/kenatrix"

// ─── Static params for output: export ──────────────────────────────────────

export async function generateStaticParams() {
  const config = getConfig()
  if (!config.sellerSlug) return [{ slug: "_" }]
  const properties = await fetchPropertiesBySeller(config.sellerSlug)
  return properties.length ? properties.map((p) => ({ slug: p.listingSlug })) : [{ slug: "_" }]
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const config = getConfig()
  const property = await fetchPropertyBySlug(params.slug)
  if (!property) return { title: "Property | " + config.business.name }
  const address = [property.street, property.city, property.state].filter(Boolean).join(", ")
  return {
    title: `${address} | ${config.business.name}`,
    description: property.description?.slice(0, 160) ?? `Property listing in ${property.city}, ${property.state}`,
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(p: PropertyDto) {
  const amount = p.sellingPrice ?? p.monthlyRent ?? 0
  const formatted = "$" + Number(amount).toLocaleString("en-US")
  return p.propertyPurpose === "R" ? formatted + "/mo" : formatted
}

function statusLabel(p: PropertyDto) {
  return p.propertyPurpose === "R" ? "For Rent" : "For Sale"
}

function whatsappLink(phone: string, p: PropertyDto) {
  const digits = phone.replace(/\D/g, "")
  const address = [p.street, p.city, p.state].filter(Boolean).join(", ")
  const text = encodeURIComponent(
    `Hi, I'm interested in the property at ${address} listed ${statusLabel(p)} for ${formatPrice(p)}. Is it still available?`
  )
  return `https://wa.me/${digits}?text=${text}`
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function PropertyDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const config = getConfig()
  const property = await fetchPropertyBySlug(params.slug)
  if (!property) notFound()

  const address = [property.street, property.city, property.state].filter(Boolean).join(", ")
  const allImages = [
    ...(property.thumbnailUrl ? [property.thumbnailUrl] : []),
    ...(property.images?.map((img) => img.imageUrl) ?? []),
  ].filter(Boolean).slice(0, 6)

  const contactPhone = property.contactPhone ?? config.business.phone

  return (
    <div className="bg-white min-h-screen">

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <Link
          href="/properties"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Listings
        </Link>
      </div>

      {/* Hero image */}
      {allImages.length > 0 ? (
        <div className="max-w-5xl mx-auto px-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-2xl overflow-hidden">
            <div className="relative aspect-[4/3] bg-gray-100">
              <Image
                src={allImages[0]}
                alt={address}
                fill
                className="object-cover"
                priority
              />
            </div>
            {allImages.length > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {allImages.slice(1, 5).map((url, i) => (
                  <div key={i} className="relative aspect-square bg-gray-100">
                    <Image src={url} alt={`${address} photo ${i + 2}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto px-4 mb-6">
          <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 to-primary/5
                          rounded-2xl flex items-center justify-center">
            <Home size={64} className="text-primary/30" />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: details */}
          <div className="lg:col-span-2 space-y-6">

            {/* Title + status */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full
                  ${property.propertyPurpose === "R"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                  }`}>
                  {statusLabel(property)}
                </span>
                {property.categoryName && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {property.categoryName}
                  </span>
                )}
                {property.isFeatured && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
                {formatPrice(property)}
              </h1>
              <p className="flex items-center gap-1.5 text-gray-500">
                <MapPin size={15} className="shrink-0 text-primary" />
                {address}
              </p>
            </div>

            {/* Key specs */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
              {property.bedRooms > 0 && (
                <div className="flex flex-col items-center gap-1">
                  <Bed size={20} className="text-primary" />
                  <span className="text-xl font-black text-gray-900">{property.bedRooms}</span>
                  <span className="text-xs text-gray-500">Bedrooms</span>
                </div>
              )}
              {property.bathRooms > 0 && (
                <div className="flex flex-col items-center gap-1">
                  <Bath size={20} className="text-primary" />
                  <span className="text-xl font-black text-gray-900">{property.bathRooms}</span>
                  <span className="text-xs text-gray-500">Bathrooms</span>
                </div>
              )}
              {property.squareFeet > 0 && (
                <div className="flex flex-col items-center gap-1">
                  <Maximize2 size={20} className="text-primary" />
                  <span className="text-xl font-black text-gray-900">
                    {property.squareFeet.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500">Sq Ft</span>
                </div>
              )}
            </div>

            {/* Description */}
            {property.description && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">About this property</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>
            )}

            {/* Additional details */}
            {(property.yearBuilt || property.totalFloors || property.flooring || property.parking) && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Property Details</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.yearBuilt > 0 && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={14} className="text-gray-400 shrink-0" />
                      <span>Built {property.yearBuilt}</span>
                    </div>
                  )}
                  {property.totalFloors > 0 && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Layers size={14} className="text-gray-400 shrink-0" />
                      <span>{property.totalFloors} {property.totalFloors === 1 ? "Floor" : "Floors"}</span>
                    </div>
                  )}
                  {property.flooring && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gray-400">▪</span>
                      <span>Flooring: {property.flooring}</span>
                    </div>
                  )}
                  {property.parking && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gray-400">▪</span>
                      <span>Parking: {property.parking}</span>
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
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-green-500 shrink-0" />
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
                  {property.appliances.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: contact card (sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <p className="text-2xl font-black text-gray-900 mb-1">{formatPrice(property)}</p>
              <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                <MapPin size={13} className="shrink-0" />
                {[property.city, property.state].filter(Boolean).join(", ")}
              </p>

              {property.contactName && (
                <p className="text-sm font-semibold text-gray-700 mt-3 mb-4">
                  Listed by: {property.contactName}
                </p>
              )}

              <div className="space-y-3">
                <a
                  href={`tel:${contactPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2
                             bg-primary text-white font-bold py-3 rounded-site
                             hover:opacity-90 transition-opacity"
                >
                  <Phone size={16} />
                  Call Agent
                </a>
                <a
                  href={whatsappLink(contactPhone, property)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2
                             bg-[#25D366] text-white font-bold py-3 rounded-site
                             hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={16} />
                  WhatsApp Agent
                </a>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2
                             border-2 border-gray-900 text-gray-900 font-bold py-3 rounded-site
                             hover:bg-gray-900 hover:text-white transition-all"
                >
                  Send Inquiry
                </Link>
              </div>

              <p className="text-xs text-gray-400 text-center mt-4">
                {config.business.name}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
