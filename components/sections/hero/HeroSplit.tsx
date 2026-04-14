import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface HeroProps {
  hero: SiteConfig["hero"]
  business: SiteConfig["business"]
}

export function HeroSplit({ hero, business }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--color-secondary)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <AnimateIn className="order-2 lg:order-1">
            {hero.badge && (
              <div className="inline-flex items-center gap-2 bg-accent border border-primary/20 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {hero.badge}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              {hero.heading.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-gradient">
                {hero.heading.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg">
              {hero.subheading}
            </p>

            {/* Trust points */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {(hero.trustPoints ?? ["Licensed & Insured", "Free Estimate", "5-Star Rated"]).map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {point}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.cta.href}
                className="inline-flex items-center gap-2 bg-gradient-brand text-on-primary font-semibold px-7 py-3.5 rounded-site shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
              >
                {hero.cta.label}
                <ArrowRight size={16} />
              </Link>
              {hero.secondaryCta && (
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-site hover:border-primary hover:text-primary transition-all"
                >
                  {hero.secondaryCta.label}
                </Link>
              )}
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-blue-400", "bg-purple-400", "bg-green-400", "bg-yellow-400"].map((c, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-white ${c}`} />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">
                  {hero.socialProof?.count ?? "500+"}
                </span>{" "}
                {hero.socialProof?.label ?? `happy clients in ${business.city}`}
              </div>
            </div>
          </AnimateIn>

          {/* Right — Image */}
          <AnimateIn className="order-1 lg:order-2 relative" delay={150}>
            <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={hero.image}
                alt={hero.heading}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-1.5">
                  {business.city}, {business.state}
                </p>
                <p className="text-white font-bold text-xl leading-snug">
                  {business.name}
                </p>
                <p className="text-white/65 text-sm mt-1 leading-snug line-clamp-1">
                  {hero.subheading}
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
