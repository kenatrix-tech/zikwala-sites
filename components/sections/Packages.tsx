import Link from "next/link"
import { Check } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { AnimateIn } from "@/components/ui/AnimateIn"

interface PackagesProps {
  packages: NonNullable<SiteConfig["packages"]>
  nav: SiteConfig["nav"]
}

export function Packages({ packages, nav }: PackagesProps) {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-accent)_0%,_transparent_60%)] opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {packages.title}
          </h2>
          {packages.subtitle && (
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              {packages.subtitle}
            </p>
          )}
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.items.map((pkg, index) => (
            <AnimateIn key={pkg.name} delay={index * 100}>
              <div className={`relative flex flex-col h-full rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-md
                ${pkg.highlight
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-gray-100"
                }`}>

                {pkg.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wide whitespace-nowrap
                    ${pkg.highlight ? "bg-white text-primary" : "bg-primary text-white"}`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-gray-900"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/80" : "text-gray-500"}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className={`text-3xl font-bold mb-6 ${pkg.highlight ? "text-white" : "text-primary"}`}>
                  {pkg.price}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${pkg.highlight ? "text-white" : "text-primary"}`}
                      />
                      <span className={`text-sm ${pkg.highlight ? "text-white/90" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.cta?.href ?? nav.ctaHref}
                  className={`block text-center py-3 px-6 rounded-site font-semibold text-sm transition-all
                    ${pkg.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:opacity-90"
                    }`}
                >
                  {pkg.cta?.label ?? nav.ctaLabel}
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
