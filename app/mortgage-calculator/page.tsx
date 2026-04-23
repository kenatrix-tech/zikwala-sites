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
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use This Mortgage Calculator
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Enter the home price, your expected down payment, current interest rate, and loan term
            to get an instant estimate of your principal and interest payment. The calculator
            updates in real time as you adjust each slider.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            What&apos;s Not Included
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            This calculator shows principal &amp; interest only. Your actual monthly payment will
            also include:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-1 mb-4">
            <li>Property taxes (varies by county)</li>
            <li>Homeowner&apos;s insurance (~0.5–1% of home value annually)</li>
            <li>HOA fees (if applicable)</li>
            <li>PMI — if your down payment is under 20%</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            Ready to Buy or Sell?
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {agent} is a top-rated real estate agent who can connect you with trusted local lenders
            and guide you through every step of the process — from pre-approval to closing day.
          </p>
        </div>
      </section>
    </>
  )
}
