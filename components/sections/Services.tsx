import { ArrowRight, Home, Building2, Sparkles, HardHat, Globe, Briefcase, Heart,
  MapPin, TrendingUp, FileText, BookOpen, Shield, Palette, Star, Droplets, type LucideIcon } from "lucide-react"
import Link from "next/link"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

const ICON_MAP: Record<string, LucideIcon> = {
  Home, Building2, Sparkles, HardHat, Globe, Briefcase, Heart,
  MapPin, TrendingUp, FileText, BookOpen, Shield, Palette, Star, Droplets,
}

interface ServicesProps {
  services: SiteConfig["services"]
  nav: SiteConfig["nav"]
}

export function Services({ services, nav }: ServicesProps) {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent)_0%,_transparent_60%)] opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {services.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {services.subtitle}
          </p>
        </AnimateIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Home
            return (
              <AnimateIn key={service.name} delay={index * 100}>
                <div className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover cursor-default h-full">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "var(--color-accent)" }}
                  >
                    <Icon size={26} className="text-primary" />
                  </div>

                  {/* Number badge */}
                  <div className="text-xs font-bold text-gray-300 mb-2 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {service.price && (
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-primary font-bold text-base">{service.price}</span>
                    </div>
                  )}
                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <AnimateIn className="text-center mt-14">
          <Link
            href={nav.ctaHref}
            className="inline-flex items-center gap-2 bg-gradient-brand text-on-primary font-semibold px-8 py-4 rounded-site shadow-lg hover:shadow-xl hover:opacity-90 transition-all text-base"
          >
            {nav.ctaLabel}
            <ArrowRight size={18} />
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}
