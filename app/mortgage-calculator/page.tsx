import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getConfig } from "@/config"
import { MortgageCalculator } from "@/components/sections/MortgageCalculator"

export function generateMetadata(): Metadata {
  const config = getConfig()
  const city  = config.business.city
  const state = config.business.state
  const name  = config.business.name
  return {
    title: `Mortgage Calculator | ${city}, ${state} | ${name}`,
    description: `Use our free mortgage calculator to estimate your monthly payment for homes in ${city}, ${state}. Adjust price, down payment, rate, and loan term instantly.`,
    keywords: [
      `mortgage calculator ${city}`,
      `home loan calculator ${state}`,
      `monthly payment calculator ${city} ${state}`,
      `real estate mortgage calculator ${city}`,
      "how much house can I afford",
      `${city} home buying calculator`,
    ],
    openGraph: {
      title: `Free Mortgage Calculator | ${city}, ${state}`,
      description: `Estimate your monthly mortgage payment for homes in ${city}, ${state}. Free tool from ${name}.`,
      type: "website",
    },
  }
}

export default function MortgageCalculatorPage() {
  const config = getConfig()

  if (!config.mortgageCalculator || config.business.niche !== "realestate") redirect("/")

  const agent = config.business.name.split(/[-–|]/)[0].trim()

  return (
    <>
      {/* SEO page header */}
      <section className="bg-accent dark:bg-gray-800 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--color-primary)" }}>
            Free Tool
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mortgage Calculator
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Estimate your monthly mortgage payment instantly.
            Adjust price, down payment, rate, and term — no sign-up required.
          </p>
        </div>
      </section>

      <MortgageCalculator nav={config.nav} business={config.business} hideHeader />

      {/* SEO content block */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-10">

            {/* Left — How to use */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How It Works</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Adjust the sliders for home price, down payment, interest rate, and loan term.
                Your estimated monthly payment updates instantly in real time.
              </p>
            </div>

            {/* Right — What's not included */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Not Included</h2>
              <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" style={{ background: "var(--color-primary)" }} />
                  Property taxes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-primary)" }} />
                  Homeowner&apos;s insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-primary)" }} />
                  HOA fees (if applicable)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-primary)" }} />
                  PMI (if down payment under 20%)
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-accent dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to Take the Next Step?</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
              {agent} can connect you with trusted lenders and guide you from pre-approval to closing.
            </p>
            <a
              href={config.nav.ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-site text-white text-sm font-semibold shadow-md hover:opacity-90 transition-all"
              style={{ background: "var(--color-primary)" }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
