import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface HeroProps {
  hero: SiteConfig["hero"]
  business: SiteConfig["business"]
}

export function HeroCentered({ hero, business }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      {/* Layered overlay — lighter at top (shows image), darker toward center/bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/80" />
      {/* Subtle vignette ring for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center py-36">
        <AnimateIn>
          {hero.badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-8 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {hero.badge}
            </div>
          )}

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6 drop-shadow-lg">
            {hero.heading}
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-xl mx-auto mb-10 leading-relaxed">
            {hero.subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Link
              href={hero.cta.href}
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-200"
            >
              {hero.cta.label}
              <ArrowRight size={16} />
            </Link>
            {hero.secondaryCta && (
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200"
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-5">
            {(hero.trustPoints ?? ["Licensed & Insured", "Free Estimate", "5-Star Rated"]).map((point) => (
              <div key={point} className="flex items-center gap-2 text-white/65 text-sm">
                <CheckCircle2 size={14} className="text-white/45 shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-50">
        <ChevronDown size={24} className="text-white" />
      </div>

      {/* Social proof bar — glassmorphism pinned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/[0.06] backdrop-blur-md border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-center gap-4">
          <div className="flex -space-x-2 shrink-0">
            {["bg-blue-400", "bg-purple-400", "bg-green-400", "bg-yellow-400"].map((c, i) => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-white/20 ${c}`} />
            ))}
          </div>
          <div className="flex items-center gap-1 mr-2">
            {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-xs">★</span>)}
          </div>
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">{hero.socialProof?.count ?? "500+"}</span>{" "}
            {hero.socialProof?.label ?? `happy clients in ${business.city}`}
          </p>
        </div>
      </div>
    </section>
  )
}
