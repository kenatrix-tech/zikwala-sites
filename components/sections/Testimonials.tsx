"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface TestimonialsProps {
  testimonials: NonNullable<SiteConfig["testimonials"]>
  googleReviewUrl?: string
}

type TestimonialItem = NonNullable<SiteConfig["testimonials"]>["items"][0]

function Avatar({ src, name }: { src?: string; name: string }) {
  const [broken, setBroken] = useState(false)

  if (src && !broken) {
    return (
      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          onError={() => setBroken(true)}
        />
      </div>
    )
  }

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
      style={{ background: "var(--color-primary)" }}
    >
      {name.charAt(0)}
    </div>
  )
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover h-full flex flex-col">
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-primary/10">
        <Quote size={48} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: item.rating }).map((_, j) => (
          <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed mb-6 relative z-10 flex-1">
        &ldquo;{item.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <Avatar src={item.avatar} name={item.name} />
        <div>
          <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
          <div className="text-gray-400 text-xs">{item.role}</div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials({ testimonials, googleReviewUrl }: TestimonialsProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-30 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-accent), transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {testimonials.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{testimonials.subtitle}</p>
        </AnimateIn>

        {/* Mobile: horizontal snap scroll */}
        <div className="md:hidden relative">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-4 -mx-4 px-4
                        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.items.map((item) => (
              <div key={item.name} className="snap-center w-[82vw] shrink-0">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          {/* Right-edge fade — signals more content */}
          <div className="absolute right-0 top-0 bottom-4 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Swipe hint */}
          <p className="mt-3 text-center text-xs text-gray-400 tracking-wide">
            Swipe to see more &rsaquo;
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch">
          {testimonials.items.map((item, i) => (
            <AnimateIn key={item.name} delay={i * 120} className="h-full">
              <TestimonialCard item={item} />
            </AnimateIn>
          ))}
        </div>

        {/* Google Review banner */}
        {googleReviewUrl && (
          <AnimateIn className="mt-12">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-8 py-7
                            flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Google G logo */}
                <svg viewBox="0 0 48 48" className="w-10 h-10 shrink-0" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.08-6.08C34.52 3.05 29.55 1 24 1 14.82 1 7.01 6.48 3.44 14.28l7.08 5.5C12.27 13.55 17.68 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v8.97h12.42c-.54 2.9-2.18 5.36-4.64 7.01l7.16 5.56C43.05 37.3 46.1 31.38 46.1 24.55z"/>
                  <path fill="#FBBC05" d="M10.52 28.22A14.6 14.6 0 0 1 9.5 24c0-1.47.25-2.9.69-4.22l-7.08-5.5A23.9 23.9 0 0 0 .1 24c0 3.87.93 7.52 2.56 10.74l7.86-6.52z"/>
                  <path fill="#34A853" d="M24 47c5.55 0 10.21-1.84 13.62-5l-7.16-5.56A14.39 14.39 0 0 1 24 38.5c-6.32 0-11.73-4.05-13.48-9.78l-7.86 6.52C6.22 42.7 14.46 47 24 47z"/>
                </svg>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">See our reviews on Google</p>
                  <p className="text-xs text-gray-500">Read what clients say — or share your experience</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-5 py-2.5 rounded-full border-2 transition-all duration-200
                             hover:scale-105 text-gray-700 border-gray-200 hover:border-gray-400 bg-white"
                >
                  Read reviews
                </a>
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200
                             hover:scale-105 text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  Write a review
                </a>
              </div>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
