"use client"

import { useState } from "react"
import { Home, TrendingUp, Send } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface Props {
  business: SiteConfig["business"]
  contact: SiteConfig["contact"]
}

const TIMELINES = ["ASAP (1–3 months)", "3–6 months", "6–12 months", "Just curious"]

export function HomeValuation({ business, contact }: Props) {
  const [sent, setSent]           = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [timeline, setTimeline]   = useState(TIMELINES[0])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data    = new FormData(e.currentTarget)
    const name    = data.get("name") as string
    const email   = data.get("email") as string
    const phone   = data.get("phone") as string
    const address = data.get("address") as string

    const apiBase  = (process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com").replace(/\/$/, "")
    const endpoint = `${apiBase}/api/v1/public/contact/notify-lead`

    setSubmitting(true)
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          details:        `Property Address: ${address}\nSelling Timeline: ${timeline}`,
          reason:         "Home Valuation Request",
          type:           "HOME_VALUATION",
          clientId:       process.env.NEXT_PUBLIC_CLIENT_ID ?? "unknown",
          appName:        business.name,
          notifyEmail:    contact.notifyEmail ?? business.email,
          telegramChatId: contact.telegramChatId,
        }),
      })
      setSent(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, var(--color-accent) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — pitch */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-primary)" }}>
              Free Home Valuation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
              What&apos;s Your Home <span className="text-gradient">Worth Today?</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Get a free, no-obligation Comparative Market Analysis (CMA) from a top Portland Metro agent.
              Know your home&apos;s true market value before you decide to sell.
            </p>

            <div className="space-y-4">
              {[
                { icon: Home,      title: "Local Market Expertise",  body: "Accurate valuations based on recent comparable sales in your exact neighborhood." },
                { icon: TrendingUp, title: "No Pressure, No Cost",   body: "This is a free service. You get real data with zero commitment to list." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: "var(--color-accent)" }}>
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 sm:p-12 text-center">
                <div className="text-5xl mb-4">🏡</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-2">Request Received!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {business.name.split(/[-–|]/)[0].trim()} will reach out within 24 hours with your home valuation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl p-5 sm:p-8 space-y-5"
              >
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Get My Free Home Value</h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Property Address *
                  </label>
                  <input
                    name="address"
                    required
                    placeholder="123 Main St, Portland, OR 97201"
                    className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Phone *</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="(503) 000-0000"
                      className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">When are you thinking of selling?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {TIMELINES.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-left ${
                          timeline === t
                            ? "text-white border-transparent"
                            : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary"
                        }`}
                        style={timeline === t ? { background: "var(--color-primary)" } : {}}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
                  style={{ background: "var(--color-primary)" }}
                >
                  <Send size={16} />
                  {submitting ? "Sending…" : "Get My Free Valuation"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Free. No obligation. Response within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
