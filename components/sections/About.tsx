import Image from "next/image"
import type { SiteConfig } from "@/config/types"

interface AboutProps {
  about: SiteConfig["about"]
}

export function About({ about }: AboutProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          {about.image && (
            <div className="relative h-72 md:h-96 rounded-site overflow-hidden shadow-lg">
              <Image
                src={about.image}
                alt={about.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{about.story}</p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-accent rounded-site p-4"
                >
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    {h.label}
                  </div>
                  <div className="text-primary font-bold">{h.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
