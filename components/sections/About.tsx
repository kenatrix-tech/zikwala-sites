import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface AboutProps {
  about: SiteConfig["about"]
}

export function About({ about }: AboutProps) {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--color-accent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          {about.image && (
            <div className="relative">
              <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={about.image}
                  alt={about.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative accent box */}
              <div
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl -z-10 opacity-30"
                style={{ background: "var(--color-primary)" }}
              />
              {/* Experience badge */}
              <div className="absolute -left-6 bottom-12 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">
                <div className="text-3xl font-bold text-gradient mb-0.5">
                  {about.highlights[0]?.value}
                </div>
                <div className="text-xs text-gray-500 font-medium">{about.highlights[0]?.label}</div>
              </div>
            </div>
          )}

          {/* Text side */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {about.title}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              {about.story}
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{h.label}</div>
                    <div className="text-gray-800 font-semibold text-sm">{h.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
