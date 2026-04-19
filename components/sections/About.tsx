"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface AboutProps {
  about: SiteConfig["about"]
}

type Section = NonNullable<SiteConfig["about"]["sections"]>[0]

function SectionImage({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false)
  if (broken) return null

  return (
    <div className="relative">
      {/* Decorative accents behind the image */}
      <div
        className="absolute -bottom-5 -right-5 w-44 h-44 rounded-2xl -z-10 opacity-20"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="absolute -top-5 -left-5 w-28 h-28 rounded-2xl -z-10 opacity-10"
        style={{ background: "var(--color-secondary)" }}
      />

      <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setBroken(true)}
        />
      </div>
    </div>
  )
}

function SectionText({
  section,
  isFirst,
}: {
  section: Section
  isFirst: boolean
}) {
  return (
    <div>
      {isFirst && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
          About
        </span>
      )}

      {section.heading && (
        <h2
          className={`font-bold text-gray-900 leading-tight mb-6 ${
            isFirst ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
          }`}
        >
          {section.heading}
        </h2>
      )}

      <p className="text-gray-500 text-lg leading-relaxed mb-10">
        {section.body}
      </p>

      {section.highlights && section.highlights.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {section.highlights.map((h) => (
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
      )}
    </div>
  )
}

export function About({ about }: AboutProps) {
  // Normalize legacy format → sections array so the component has one render path
  const sections: Section[] = about.sections ??
    (about.story
      ? [{ heading: undefined, body: about.story, image: about.image, highlights: about.highlights }]
      : [])

  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Decorative ambient blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, i) => {
          const reversed = i % 2 === 1   // even → image left; odd → image right
          const hasImage = !!section.image

          return (
            <div
              key={i}
              className={`py-20 ${i > 0 ? "border-t border-gray-200" : ""}`}
            >
              <div
                className={`grid grid-cols-1 items-center gap-14 ${
                  hasImage ? "lg:grid-cols-2" : "max-w-3xl"
                }`}
              >
                {/* Image */}
                {hasImage && (
                  <AnimateIn
                    className={`order-1 ${reversed ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <SectionImage
                      src={section.image!}
                      alt={section.heading ?? about.title}
                    />
                  </AnimateIn>
                )}

                {/* Text */}
                <AnimateIn
                  delay={150}
                  className={
                    hasImage
                      ? `order-2 ${reversed ? "lg:order-1" : "lg:order-2"}`
                      : ""
                  }
                >
                  <SectionText section={section} isFirst={i === 0} />
                </AnimateIn>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
