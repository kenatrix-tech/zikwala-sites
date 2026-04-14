import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface HeroProps {
  hero: SiteConfig["hero"]
  business: SiteConfig["business"]
}

// Short category label per niche — editorial touch above the heading
const NICHE_LABELS: Partial<Record<string, string>> = {
  photography:    "Photography Studio",
  eventplanning:  "Event Planning",
  catering:       "Catering & Events",
  beauty:         "Beauty & Wellness",
  bakery:         "Artisan Bakery",
  decoration:     "Interior Design",
  realestate:     "Real Estate",
  cleaning:       "Professional Cleaning",
  lawfirm:        "Legal Services",
  tax:            "Tax & Accounting",
  autorepair:     "Auto Repair",
  painting:       "Painting Services",
  hvac:           "HVAC Services",
  electrical:     "Electrical Services",
  plumbing:       "Plumbing Services",
  handyman:       "Handyman Services",
  tutor:          "Tutoring & Education",
  insurance:      "Insurance Agency",
  babysitting:    "Childcare Services",
}

export function HeroMagazine({ hero, business }: HeroProps) {
  const categoryLabel = NICHE_LABELS[business.niche] ?? `${business.city}, ${business.state}`
  const headingWords = hero.heading.split(" ")
  const headingMain = headingWords.slice(0, -2).join(" ")
  const headingAccent = headingWords.slice(-2).join(" ")

  return (
    <section className="min-h-screen flex flex-col lg:grid lg:grid-cols-[3fr_2fr] overflow-hidden">

      {/* ── Left: image panel — first in DOM so it's on top on mobile ── */}
      <AnimateIn className="relative h-72 sm:h-80 lg:h-auto">
        <Image
          src={hero.image}
          alt={hero.heading}
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay — bottom fade + subtle brand tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        {/* Subtle brand color tint on top */}
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--color-primary)" }} />

        {/* Floating glass card — bottom left, desktop only */}
        <AnimateIn delay={400} className="absolute bottom-8 left-8 hidden lg:block
                        bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl
                        border border-white/60 px-5 py-4 max-w-[220px]">
          <div className="flex items-center gap-1 mb-2">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
            <span className="text-xs text-gray-500 ml-1">4.9</span>
          </div>
          <p className="text-sm font-bold text-gray-900 leading-tight">
            {hero.socialProof?.count ?? "500+"}
          </p>
          <p className="text-xs text-gray-500 leading-tight mt-0.5">
            {hero.socialProof?.label ?? `happy clients in ${business.city}`}
          </p>
        </AnimateIn>

        {/* Business name tag — top right, desktop only */}
        <AnimateIn delay={200} className="absolute top-8 right-8 hidden lg:flex items-center gap-2
                        bg-black/40 backdrop-blur-md rounded-full
                        border border-white/20 px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold text-white">{business.name}</span>
        </AnimateIn>
      </AnimateIn>

      {/* ── Right: editorial text panel ── */}
      <div className="relative bg-white flex flex-col justify-between
                      px-10 md:px-14 py-16 overflow-hidden">

        {/* Top accent bar — full width, 3px */}
        <div className="absolute top-0 left-0 right-0 h-[3px]"
             style={{ background: "var(--color-primary)" }} />

        {/* Very subtle dot-grid on text panel */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.035) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Main content — staggered animation per element */}
        <div className="relative z-10 flex-1">

          <AnimateIn delay={0}>
            <p
              className="text-[11px] font-bold tracking-[0.35em] uppercase mb-5"
              style={{ color: "var(--color-primary)" }}
            >
              {categoryLabel}
            </p>
          </AnimateIn>

          {hero.badge && (
            <AnimateIn delay={80}>
              <div className="inline-flex items-center gap-2 bg-accent border border-primary/20
                              text-primary text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {hero.badge}
              </div>
            </AnimateIn>
          )}

          <AnimateIn delay={160}>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 mb-5">
              {headingMain}{headingMain ? " " : ""}
              <span className="text-gradient">{headingAccent}</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={240}>
            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              {hero.subheading}
            </p>
          </AnimateIn>

          <AnimateIn delay={320}>
            <div className="space-y-2.5 mb-10">
              {(hero.trustPoints ?? ["Licensed & Insured", "Free Estimate", "5-Star Rated"]).map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={400}>
            <div className="flex flex-wrap gap-3">
              <Link
                href={hero.cta.href}
                className="inline-flex items-center gap-2 bg-gradient-brand text-on-primary
                           font-semibold px-7 py-3.5 rounded-site shadow-lg
                           hover:opacity-90 hover:shadow-xl hover:scale-105
                           transition-all duration-200"
              >
                {hero.cta.label}
                <ArrowRight size={15} />
              </Link>
              {hero.secondaryCta && (
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-white border-2 border-gray-200
                             text-gray-700 font-semibold px-7 py-3.5 rounded-site
                             hover:border-primary hover:text-primary transition-all duration-200"
                >
                  {hero.secondaryCta.label}
                </Link>
              )}
            </div>
          </AnimateIn>
        </div>

        {/* Social proof — pinned to bottom of text panel */}
        <div className="relative z-10 mt-10 pt-6 border-t border-gray-100 flex items-center gap-3">
          <div className="flex -space-x-2 shrink-0">
            {["bg-blue-400", "bg-purple-400", "bg-green-400"].map((c, i) => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${c}`} />
            ))}
          </div>
          <div>
            <p className="text-xs text-gray-500 leading-tight">
              <span className="font-bold text-gray-900">
                {hero.socialProof?.count ?? "500+"}
              </span>{" "}
              {hero.socialProof?.label ?? `happy clients in ${business.city}`}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
