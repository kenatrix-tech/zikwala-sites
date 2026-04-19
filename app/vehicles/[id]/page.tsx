import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Phone, MessageCircle, ChevronLeft,
  Gauge, Fuel, Settings2, Car
} from "lucide-react"
import { getConfig } from "@/config"
import {
  fetchVehiclesBySeller,
  fetchVehicleById,
  type VehicleDto,
} from "@/lib/kenatrix"

// ─── Static params for output: export ──────────────────────────────────────

export async function generateStaticParams() {
  const config = getConfig()
  if (!config.sellerSlug) return []
  const vehicles = await fetchVehiclesBySeller(config.sellerSlug)
  return vehicles.map((v) => ({ id: String(v.id) }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const config = getConfig()
  const vehicle = await fetchVehicleById(params.id)
  if (!vehicle) return { title: "Vehicle | " + config.business.name }
  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}`
  return {
    title: `${title} | ${config.business.name}`,
    description: vehicle.description?.slice(0, 160) ?? `${title} available at ${config.business.name}`,
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(v: VehicleDto) {
  return "$" + Number(v.price ?? 0).toLocaleString("en-US")
}

function formatMileage(n: number) {
  return n.toLocaleString("en-US") + " mi"
}

function whatsappLink(phone: string, v: VehicleDto) {
  const digits = phone.replace(/\D/g, "")
  const name = `${v.year} ${v.make} ${v.model}`
  const text = encodeURIComponent(
    `Hi, I'm interested in the ${name} listed for ${formatPrice(v)}. Is it still available?`
  )
  return `https://wa.me/${digits}?text=${text}`
}

const FUEL_COLORS: Record<string, string> = {
  Electric: "bg-green-100 text-green-700",
  Hybrid:   "bg-teal-100 text-teal-700",
  Diesel:   "bg-amber-100 text-amber-700",
  Gasoline: "bg-gray-100 text-gray-600",
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function VehicleDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const config = getConfig()
  const vehicle = await fetchVehicleById(params.id)
  if (!vehicle) notFound()

  const vehicleTitle = `${vehicle.year} ${vehicle.make} ${vehicle.model}`
  const isSold = vehicle.status === "SOLD"
  const contactPhone = vehicle.contactPhone ?? config.business.phone

  const allImages = [
    ...(vehicle.thumbnailUrl ? [vehicle.thumbnailUrl] : []),
    ...(vehicle.images?.map((img) => img.imageUrl) ?? []),
  ].filter(Boolean).slice(0, 6)

  const specs = vehicle.specifications
    ? Object.entries(vehicle.specifications).filter(([, v]) => v != null)
    : []

  return (
    <div className="bg-white min-h-screen">

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <Link
          href="/vehicles"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Inventory
        </Link>
      </div>

      {/* Hero image */}
      {allImages.length > 0 ? (
        <div className="max-w-5xl mx-auto px-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-2xl overflow-hidden">
            <div className="relative aspect-[16/10] bg-gray-100">
              <Image
                src={allImages[0]}
                alt={vehicleTitle}
                fill
                className="object-cover"
                priority
              />
              {isSold && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-white text-gray-900 font-black text-lg px-6 py-2 rounded-full">
                    SOLD
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm
                              text-white font-black text-lg px-4 py-2 rounded-full">
                {formatPrice(vehicle)}
              </div>
            </div>
            {allImages.length > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {allImages.slice(1, 5).map((url, i) => (
                  <div key={i} className="relative aspect-[16/10] bg-gray-100">
                    <Image src={url} alt={`${vehicleTitle} photo ${i + 2}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto px-4 mb-6">
          <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 to-primary/5
                          rounded-2xl flex items-center justify-center relative">
            <Car size={64} className="text-primary/30" />
            <div className="absolute bottom-4 right-4 bg-primary/80 text-white
                            font-black text-xl px-5 py-2 rounded-full">
              {formatPrice(vehicle)}
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: details */}
          <div className="lg:col-span-2 space-y-6">

            {/* Title + badges */}
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                {vehicleTitle}
              </h1>
              <div className="flex flex-wrap gap-2">
                {vehicle.condition && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {vehicle.condition}
                  </span>
                )}
                {vehicle.fuelType && (
                  <span className={`inline-flex items-center gap-1 text-xs font-medium
                                    px-3 py-1 rounded-full ${FUEL_COLORS[vehicle.fuelType] ?? "bg-gray-100 text-gray-600"}`}>
                    <Fuel size={11} />
                    {vehicle.fuelType}
                  </span>
                )}
                {vehicle.transmission && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium
                                   px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    <Settings2 size={11} />
                    {vehicle.transmission}
                  </span>
                )}
                {vehicle.isFeatured && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-gray-100">
              {vehicle.year && (
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">{vehicle.year}</p>
                  <p className="text-xs text-gray-500">Year</p>
                </div>
              )}
              {vehicle.mileage != null && (
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">
                    <Gauge size={16} className="inline mr-1 -mt-0.5 text-gray-400" />
                    {formatMileage(vehicle.mileage)}
                  </p>
                  <p className="text-xs text-gray-500">Mileage</p>
                </div>
              )}
              {vehicle.exteriorColor && (
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">{vehicle.exteriorColor}</p>
                  <p className="text-xs text-gray-500">Color</p>
                </div>
              )}
              {vehicle.vehicleTrim && (
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">{vehicle.vehicleTrim}</p>
                  <p className="text-xs text-gray-500">Trim</p>
                </div>
              )}
            </div>

            {/* Description */}
            {vehicle.description && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">About this vehicle</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {vehicle.description}
                </p>
              </div>
            )}

            {/* Specs */}
            {specs.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">Specifications</h2>
                <div className="grid grid-cols-2 gap-2">
                  {specs.map(([key, val]) => (
                    <div key={key} className="flex justify-between text-sm py-2
                                              border-b border-gray-50">
                      <span className="text-gray-500 capitalize">{key.replace(/_/g, " ")}</span>
                      <span className="font-semibold text-gray-800">{String(val)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            {(vehicle.city || vehicle.state) && (
              <p className="text-sm text-gray-500">
                📍 {[vehicle.city, vehicle.state].filter(Boolean).join(", ")}
              </p>
            )}
          </div>

          {/* Right: contact card (sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <p className="text-3xl font-black text-gray-900 mb-1">{formatPrice(vehicle)}</p>
              <p className="text-sm font-semibold text-gray-600 mb-4">{vehicleTitle}</p>

              {vehicle.contactName && (
                <p className="text-sm text-gray-500 mb-4">
                  Listed by: <span className="font-semibold text-gray-700">{vehicle.contactName}</span>
                </p>
              )}

              {!isSold ? (
                <div className="space-y-3">
                  <a
                    href={`tel:${contactPhone}`}
                    className="w-full inline-flex items-center justify-center gap-2
                               bg-primary text-white font-bold py-3 rounded-site
                               hover:opacity-90 transition-opacity"
                  >
                    <Phone size={16} />
                    Call About This Vehicle
                  </a>
                  <a
                    href={whatsappLink(contactPhone, vehicle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2
                               bg-[#25D366] text-white font-bold py-3 rounded-site
                               hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
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
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-400 font-semibold mb-3">This vehicle has been sold</p>
                  <Link
                    href="/vehicles"
                    className="inline-flex items-center gap-2 bg-primary text-white
                               font-bold px-6 py-2.5 rounded-site hover:opacity-90 transition-opacity"
                  >
                    View Other Vehicles
                  </Link>
                </div>
              )}

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
