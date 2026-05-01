import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface HeroProps {
  hero: SiteConfig["hero"]
  business: SiteConfig["business"]
}

export function HeroShop({ hero, business }: HeroProps) {
  return (
    <section className="relative h-[58vh] min-h-[380px] max-h-[620px] overflow-hidden">

      {/* Image */}
      <Image
        src={hero.image}
        alt={hero.heading}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: hero.imagePosition ?? "center 30%" }}
        priority
      />

      {/* Gradient — stronger at bottom where text sits */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content — bottom left, concise */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 sm:px-10 sm:pb-10 max-w-2xl">
        <AnimateIn delay={0}>
          {hero.badge && (
            <p className="text-white/50 text-[11px] font-bold tracking-[0.3em] uppercase mb-2">
              {hero.badge}
            </p>
          )}
        </AnimateIn>

        <AnimateIn delay={80}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            {hero.heading}
          </h1>
        </AnimateIn>

        <AnimateIn delay={160}>
          <div className="flex flex-wrap gap-3">
            <Link
              href={hero.cta.href}
              className="inline-flex items-center gap-2 bg-white text-gray-900
                         font-bold px-6 py-3 rounded-full shadow-xl text-sm
                         hover:bg-gray-100 hover:scale-105 transition-all duration-200"
            >
              {hero.cta.label}
              <ArrowRight size={14} />
            </Link>
            {hero.secondaryCta && (
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 border border-white/40 text-white
                           font-semibold px-6 py-3 rounded-full text-sm
                           hover:bg-white/10 transition-all duration-200"
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </AnimateIn>
      </div>

      {/* Business name — top right, barely visible */}
      <div className="absolute top-5 right-5 z-10 pointer-events-none select-none">
        <p className="text-white/25 text-[10px] font-bold tracking-[0.4em] uppercase">
          {business.name}
        </p>
      </div>

    </section>
  )
}
