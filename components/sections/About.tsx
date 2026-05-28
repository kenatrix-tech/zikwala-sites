"use client"

import React, { useState } from "react"
import Image from "next/image"
import { CheckCircle2, Trophy, Star, Crown, TrendingUp, DollarSign, Target, Award, Medal } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface AboutProps {
  about: SiteConfig["about"]
}

type Section = NonNullable<SiteConfig["about"]["sections"]>[0]

function SectionImage({ src, alt, imagePosition }: { src: string; alt: string; imagePosition?: string }) {
  const [broken, setBroken] = useState(false)
  if (broken) return null

  return (
    <div className="relative overflow-hidden">
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
          style={{ objectPosition: imagePosition ?? "center" }}
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
          className={`font-bold text-gray-900 dark:text-white leading-tight mb-6 ${
            isFirst ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
          }`}
        >
          {section.heading}
        </h2>
      )}

      <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10">
        {section.body}
      </p>

      {section.highlights && section.highlights.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {section.highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm"
            >
              <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-0.5">{h.label}</div>
                <div className="text-gray-800 dark:text-gray-200 font-semibold text-sm">{h.value}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {section.awards && section.awards.length > 0 && (
        <div className="mt-8 space-y-3">
          {section.awards.map((award) => {
            const ICON_MAP: Record<string, React.ElementType> = {
              Trophy, Star, Crown, TrendingUp, DollarSign, Target, Award, Medal
            }
            const IconComponent = ICON_MAP[award.icon ?? "Trophy"] ?? Trophy
            const bg = award.color ?? "var(--color-accent)"
            const iconColor = award.color ? "#fff" : "var(--color-primary)"
            return (
              <div
                key={`${award.title}-${award.year}`}
                className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl px-5 py-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: bg }}
                >
                  <IconComponent size={18} style={{ color: iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-900 dark:text-white font-semibold text-sm">{award.title}</div>
                  <div className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{award.org}</div>
                </div>
                <div className="text-primary font-black text-sm shrink-0 bg-accent px-3 py-1 rounded-full">{award.year}</div>
              </div>
            )
          })}
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
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
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
              className={`py-20 ${i > 0 ? "border-t border-gray-200 dark:border-gray-700" : ""}`}
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
                      imagePosition={section.imagePosition}
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
