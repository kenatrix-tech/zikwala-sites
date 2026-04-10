import Link from "next/link"
import Image from "next/image"
import type { SiteConfig } from "@/config/types"

interface HeroProps {
  hero: SiteConfig["hero"]
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            {hero.badge && (
              <span className="inline-block bg-primary text-on-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {hero.badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {hero.heading}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {hero.subheading}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.cta.href}
                className="bg-primary text-on-primary font-semibold px-6 py-3 rounded-site hover:bg-secondary transition-colors"
              >
                {hero.cta.label}
              </Link>
              {hero.secondaryCta && (
                <Link
                  href={hero.secondaryCta.href}
                  className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-site hover:bg-accent transition-colors"
                >
                  {hero.secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-72 md:h-96 rounded-site overflow-hidden shadow-xl">
            <Image
              src={hero.image}
              alt={hero.heading}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
