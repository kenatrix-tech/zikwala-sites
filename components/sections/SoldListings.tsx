"use client"

import Image from "next/image"
import { Bed, Bath, Maximize2, MapPin, Phone } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface Props {
  soldListings: NonNullable<SiteConfig["soldListings"]>
  business: SiteConfig["business"]
  /** Hide the title/subtitle — use on the dedicated /sold page which has its own page header */
  hideHeader?: boolean
}

type Item = NonNullable<SiteConfig["soldListings"]>["items"][0]

function formatPrice(n: number) {
  return "$" + n.toLocaleString("en-US")
}

function whatsappLink(phone: string, item: Item) {
  const digits = phone.replace(/\D/g, "")
  const text = encodeURIComponent(
    `Hi, I saw a similar ${item.type.toLowerCase()} you sold at ${item.address}. I'm looking for something similar — can we talk?`
  )
  return `https://wa.me/${digits}?text=${text}`
}

export function SoldListings({ soldListings, business, hideHeader = false }: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {!hideHeader && (
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {soldListings.title}
            </h2>
            <p className="text-gray-500 text-lg">{soldListings.subtitle}</p>
          </AnimateIn>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {soldListings.items.map((item, i) => (
            <AnimateIn key={i} delay={i * 60}>
              <div className="group rounded-2xl overflow-hidden bg-white shadow-sm
                              hover:shadow-xl transition-shadow duration-300 border border-gray-100">

                {/* Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.address}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* SOLD badge */}
                  <span className="absolute top-3 left-3 bg-gray-900 text-white
                                   text-xs font-black px-3 py-1 rounded-full tracking-widest uppercase">
                    Sold
                  </span>

                  {/* Year sold */}
                  {item.soldYear && (
                    <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm
                                     text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {item.soldYear}
                    </span>
                  )}

                  {/* Price */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="bg-black/70 backdrop-blur-sm text-white
                                     font-black text-sm px-3 py-1.5 rounded-full">
                      {formatPrice(item.price)}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white
                                     font-semibold text-xs px-2.5 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <p className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm mb-1">
                    <MapPin size={13} className="text-primary shrink-0" />
                    {item.address}
                  </p>
                  <p className="text-gray-400 text-xs mb-3 pl-5">{item.city}</p>

                  {/* Specs */}
                  {(item.bedrooms || item.bathrooms || item.sqft) && (
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4
                                    pb-4 border-b border-gray-100">
                      {item.bedrooms && (
                        <span className="flex items-center gap-1">
                          <Bed size={12} className="text-gray-400" />
                          {item.bedrooms} bd
                        </span>
                      )}
                      {item.bathrooms && (
                        <span className="flex items-center gap-1">
                          <Bath size={12} className="text-gray-400" />
                          {item.bathrooms} ba
                        </span>
                      )}
                      {item.sqft && (
                        <span className="flex items-center gap-1">
                          <Maximize2 size={12} className="text-gray-400" />
                          {item.sqft.toLocaleString()} sqft
                        </span>
                      )}
                    </div>
                  )}

                  {/* CTA */}
                  <a
                    href={`tel:${business.phone}`}
                    className="w-full inline-flex items-center justify-center gap-1.5
                               bg-primary text-white font-semibold text-sm py-2.5 rounded-site
                               hover:opacity-90 transition-opacity"
                  >
                    <Phone size={13} />
                    Get a Free Consultation
                  </a>
                </div>

              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
