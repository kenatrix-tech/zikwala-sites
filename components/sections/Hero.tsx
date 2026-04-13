import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface HeroProps {
  hero: SiteConfig["hero"]
  business: SiteConfig["business"]
}

export function Hero({ hero, business }: HeroProps) {
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
          <div className="order-2 lg:order-1">
            {/* Badge */}
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

            {/* Social proof mini */}
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
          </div>

          {/* Right — Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Main image */}
            <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={hero.image}
                alt={hero.heading}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating card — top left */}
            <div className="absolute -left-6 top-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
                ✅
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Verified Business</div>
                <div className="text-sm font-bold text-gray-800">{business.name}</div>
              </div>
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute -right-6 bottom-8 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <div className="text-xs text-gray-500">4.9 avg rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
