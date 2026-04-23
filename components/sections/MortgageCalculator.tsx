"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import type { SiteConfig } from "@/config/types"

interface Props {
  nav: SiteConfig["nav"]
  business: SiteConfig["business"]
  hideHeader?: boolean
}

const TERMS = [10, 15, 20, 30] as const
type Term = typeof TERMS[number]

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

export function MortgageCalculator({ nav, business, hideHeader = false }: Props) {
  const [homePrice, setHomePrice]     = useState(450000)
  const [downPct, setDownPct]         = useState(20)
  const [rate, setRate]               = useState(6.8)
  const [term, setTerm]               = useState<Term>(30)

  const result = useMemo(() => {
    const down       = homePrice * (downPct / 100)
    const principal  = homePrice - down
    const monthly    = rate / 100 / 12
    const payments   = term * 12
    const monthlyPI  =
      monthly === 0
        ? principal / payments
        : (principal * monthly * Math.pow(1 + monthly, payments)) /
          (Math.pow(1 + monthly, payments) - 1)
    const totalPaid    = monthlyPI * payments
    const totalInterest = totalPaid - principal
    return { down, principal, monthlyPI, totalPaid, totalInterest }
  }, [homePrice, downPct, rate, term])

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        {!hideHeader && (
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--color-primary)" }}>
            Financial Tools
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Mortgage Calculator
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
            Estimate your monthly payment in seconds. Adjust the sliders to match your situation.
          </p>
        </div>
        )}

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">

          {/* ── Inputs ── */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 sm:p-8 space-y-7">

            {/* Home Price */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Home Price</label>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(homePrice)}</span>
              </div>
              <input
                type="range"
                min={100000} max={2000000} step={10000}
                value={homePrice}
                onChange={e => setHomePrice(Number(e.target.value))}
                className="w-full accent-primary h-1.5 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$100k</span><span>$2M</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Down Payment</label>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {downPct}% · {formatCurrency(result.down)}
                </span>
              </div>
              <input
                type="range"
                min={3} max={50} step={1}
                value={downPct}
                onChange={e => setDownPct(Number(e.target.value))}
                className="w-full accent-primary h-1.5 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>3%</span><span>50%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Interest Rate</label>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{rate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={2} max={12} step={0.1}
                value={rate}
                onChange={e => setRate(Number(e.target.value))}
                className="w-full accent-primary h-1.5 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>2%</span><span>12%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-3">Loan Term</label>
              <div className="grid grid-cols-4 gap-2">
                {TERMS.map(t => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`py-2 rounded-lg text-sm font-semibold border transition-all ${
                      term === t
                        ? "text-white border-transparent"
                        : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary"
                    }`}
                    style={term === t ? { background: "var(--color-primary)", borderColor: "var(--color-primary)" } : {}}
                  >
                    {t} yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Results ── */}
          <div className="flex flex-col gap-5">

            {/* Monthly Payment card */}
            <div
              className="rounded-2xl p-8 text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary, var(--color-primary)))" }}
            >
              <p className="text-white/80 text-sm font-medium mb-1">Estimated Monthly Payment</p>
              <p className="text-4xl sm:text-5xl font-bold mb-1">{formatCurrency(result.monthlyPI)}</p>
              <p className="text-white/70 text-xs">Principal &amp; interest only</p>
            </div>

            {/* Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 space-y-4">
              {[
                { label: "Loan Amount",     value: formatCurrency(result.principal) },
                { label: "Down Payment",    value: formatCurrency(result.down) },
                { label: "Total Interest",  value: formatCurrency(result.totalInterest) },
                { label: "Total Cost",      value: formatCurrency(result.totalPaid + result.down) },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{label}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={nav.ctaHref}
              className="w-full text-center py-3.5 rounded-site text-sm font-semibold text-white shadow-md hover:opacity-90 hover:shadow-lg transition-all"
              style={{ background: "var(--color-primary)" }}
            >
              Talk to {business.name.split(/[-–|]/)[0].trim()} About Pre-Approval
            </Link>

            {/* Disclaimer + full page link */}
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed text-center">
              For estimation purposes only. Does not include property taxes, homeowner&apos;s
              insurance, HOA fees, or PMI. Consult a licensed lender for accurate figures.
            </p>
            {!hideHeader && (
              <Link
                href="/mortgage-calculator"
                className="text-xs text-center font-medium hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                Open full calculator page →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
