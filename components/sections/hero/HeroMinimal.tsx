import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface HeroProps {
  hero: SiteConfig["hero"]
  business: SiteConfig["business"]
}

export function HeroMinimal({ hero, business }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-28 md:py-40" style={{ background: "var(--color-surface)" }}>
      {/* Decorative blobs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-2xl pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="absolute bottom-0 -left-20 w-72 h-72 rounded-full opacity-[0.05] blur-xl pointer-events-none"
        style={{ background: "var(--color-secondary)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">

          {/* Left — oversized heading (3 cols) */}
          <AnimateIn className="lg:col-span-3">
            {hero.badge && (
              <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {hero.badge}
              </div>
            )}

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] text-gray-900 mb-6">
              {hero.heading.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-gradient">
                {hero.heading.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
              {hero.subheading}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.cta.href}
                className="inline-flex items-center gap-2 bg-gradient-brand text-on-primary font-semibold px-8 py-4 rounded-site shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
              >
                {hero.cta.label}
                <ArrowRight size={16} />
              </Link>
              {hero.secondaryCta && (
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-site hover:border-primary hover:text-primary transition-all"
                >
                  {hero.secondaryCta.label}
                </Link>
              )}
            </div>
          </AnimateIn>

          {/* Right — trust card (2 cols) */}
          <AnimateIn className="lg:col-span-2" delay={150}>
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 space-y-6">
              {/* Trust points */}
              <div className="space-y-4">
                {(hero.trustPoints ?? ["Licensed & Insured", "Free Estimate", "5-Star Rated"]).map((point) => (
                  <div key={point} className="flex items-center gap-3 text-gray-700">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--color-accent)" }}
                    >
                      <CheckCircle2 size={16} className="text-primary" />
                    </div>
                    <span className="font-medium text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100" />

              {/* Social proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 shrink-0">
                  {["bg-blue-400", "bg-purple-400", "bg-green-400"].map((c, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full border-2 border-white ${c}`} />
                  ))}
                </div>
                <div className="text-sm text-gray-500 leading-tight">
                  <span className="font-bold text-gray-900 text-lg block">
                    {hero.socialProof?.count ?? "500+"}
                  </span>
                  {hero.socialProof?.label ?? `happy clients in ${business.city}`}
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
