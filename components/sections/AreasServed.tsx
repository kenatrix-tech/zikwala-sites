"use client"

import { useState } from "react"
import { MapPin, ChevronDown, ChevronUp } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface Props {
  areasServed: NonNullable<SiteConfig["areasServed"]>
  business: SiteConfig["business"]
  initialVisible?: number
}

export function AreasServed({ areasServed, business, initialVisible = 6 }: Props) {
  const [expanded, setExpanded] = useState(false)

  const visible = expanded ? areasServed : areasServed.slice(0, initialVisible)
  const hasMore = areasServed.length > initialVisible

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--color-primary)" }}>
            Coverage Area
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Serving the DMV Area
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg mx-auto">
            {business.name.split(/[-–|]/)[0].trim()} serves communities across Maryland, Washington DC, and Northern Virginia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map(({ name, description }) => (
            <div
              key={name}
              className="group flex gap-4 items-start p-5 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-primary hover:shadow-md transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: "var(--color-accent)" }}
              >
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{name}</p>
                {description && (
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hidden from view but in DOM for SEO */}
        {!expanded && hasMore && (
          <div className="sr-only" aria-hidden="true">
            {areasServed.slice(initialVisible).map(({ name }) => (
              <span key={name}>{name} </span>
            ))}
          </div>
        )}

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 text-sm font-semibold transition-all duration-200 hover:shadow-md"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              {expanded ? (
                <><ChevronUp size={16} /> Show Less</>
              ) : (
                <><ChevronDown size={16} /> Show {areasServed.length - initialVisible} More Cities</>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
