"use client"

import { useState } from "react"
import { Search, FileCheck, Key, DollarSign, BarChart2, Megaphone, ClipboardCheck, Handshake } from "lucide-react"

const BUYER_STEPS = [
  { icon: Search,       title: "Pre-Approval",       body: "Get pre-approved with a lender so you know your budget and can make competitive offers." },
  { icon: BarChart2,    title: "Home Search",         body: "We tour homes together — I handle scheduling, showings, and market insight on every property." },
  { icon: FileCheck,    title: "Offer & Negotiation", body: "I write and negotiate your offer to protect your interests and get the best price." },
  { icon: Key,          title: "Close & Move In",     body: "Inspections, title, and closing paperwork — I guide you through every step to the finish line." },
]

const SELLER_STEPS = [
  { icon: BarChart2,    title: "Free Home Valuation", body: "I run a Comparative Market Analysis to price your home competitively — not too high, not too low." },
  { icon: Megaphone,    title: "Strategic Marketing", body: "Professional photos, MLS listing, social media, and targeted buyer outreach to maximize exposure." },
  { icon: ClipboardCheck, title: "Showings & Offers", body: "I manage all showings and negotiate every offer to maximize your net proceeds." },
  { icon: Handshake,    title: "Close & Get Paid",    body: "From inspection to closing day, I handle the details so you walk away stress-free." },
]

export function HowItWorks() {
  const [tab, setTab] = useState<"buyer" | "seller">("buyer")
  const steps = tab === "buyer" ? BUYER_STEPS : SELLER_STEPS

  return (
    <section className="py-20 bg-surface dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--color-primary)" }}>
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm">
            Whether you&apos;re buying or selling, the process is straightforward — and I&apos;m with you every step.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1 gap-1">
            {(["buyer", "seller"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 sm:px-8 py-2.5 rounded-lg text-sm font-semibold transition-all capitalize ${
                  tab === t
                    ? "text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
                style={tab === t ? { background: "var(--color-primary)" } : {}}
              >
                I&apos;m a {t === "buyer" ? "Buyer" : "Seller"}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm">
              {/* Step number */}
              <span
                className="absolute top-4 right-4 text-xs font-bold opacity-20"
                style={{ color: "var(--color-primary)" }}
              >
                0{i + 1}
              </span>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "var(--color-accent)" }}
              >
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
