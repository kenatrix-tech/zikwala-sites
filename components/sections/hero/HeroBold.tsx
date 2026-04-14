import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface HeroProps {
  hero: SiteConfig["hero"]
  business: SiteConfig["business"]
}

export function HeroBold({ hero, business }: HeroProps) {
  // Strip to just the raw number/text for the decorative background element
  const decorNum = hero.socialProof?.count?.replace(/[^0-9KkMm+]/g, "") ?? ""

  return (
    <section className="overflow-hidden lg:relative lg:h-[88vh]">

      {/* ── Mobile: image strip above content ── */}
      <div className="relative h-56 sm:h-72 lg:hidden">
        <Image
          src={hero.image}
          alt={hero.heading}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        {hero.badge && (
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2
                          bg-black/50 border border-white/20 backdrop-blur-sm
                          text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {hero.badge}
          </div>
        )}
      </div>

      {/* ── Desktop: full-bleed background image ── */}
      <Image
        src={hero.image}
        alt={hero.heading}
        fill
        className="hidden lg:block object-cover"
        priority
      />
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-black/20 via-black/10 to-transparent" />

      {/* ── Color panel: below image on mobile, clipped overlay on desktop ── */}
      <div
        className="relative z-10 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[58%]
                   flex flex-col justify-center
                   px-8 sm:px-12 lg:px-20 py-12 lg:py-0 text-white lg:hero-bold-clip"
        style={{ background: "var(--color-primary)" }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Decorative oversized number — background depth element */}
        {decorNum && (
          <div
            className="absolute bottom-0 right-4 text-white/[0.06] font-black leading-none
                       select-none pointer-events-none"
            style={{ fontSize: "clamp(140px, 22vw, 300px)" }}
          >
            {decorNum}
          </div>
        )}

        {/* Content */}
        <AnimateIn>
          <div className="relative z-10 max-w-lg">

            {hero.badge && (
              <div className="hidden lg:inline-flex items-center gap-2 bg-white/15 border border-white/20
                             text-white text-xs font-semibold px-4 py-2 rounded-full mb-8 w-fit
                             backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {hero.badge}
              </div>
            )}

            {/* Massive heading — the "bold" signature */}
            <h1
              className="font-black text-white leading-[0.92] tracking-tight mb-7"
              style={{ fontSize: "clamp(44px, 6.5vw, 88px)" }}
            >
              {hero.heading}
            </h1>

            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-sm">
              {hero.subheading}
            </p>

            {/* Trust points */}
            <div className="space-y-3 mb-10">
              {(hero.trustPoints ?? ["Licensed & Insured", "Free Estimate", "5-Star Rated"]).map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={hero.cta.href}
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold
                           px-7 py-3.5 rounded-site shadow-2xl
                           hover:bg-gray-100 hover:scale-105 transition-all duration-200"
              >
                {hero.cta.label}
                <ArrowRight size={16} />
              </Link>
              {hero.secondaryCta && (
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25
                             text-white font-semibold px-7 py-3.5 rounded-site
                             hover:bg-white/20 transition-all duration-200"
                >
                  {hero.secondaryCta.label}
                </Link>
              )}
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-white/15 flex items-center gap-3">
              <div className="flex -space-x-2 shrink-0">
                {["bg-white/25", "bg-white/35", "bg-white/45", "bg-white/55"].map((c, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-white/15 ${c}`} />
                ))}
              </div>
              <p className="text-sm text-white/60">
                <span className="font-bold text-white">
                  {hero.socialProof?.count ?? "500+"}
                </span>{" "}
                {hero.socialProof?.label ?? `happy clients in ${business.city}`}
              </p>
            </div>

          </div>
        </AnimateIn>
      </div>

    </section>
  )
}
