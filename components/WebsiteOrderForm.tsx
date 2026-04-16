"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Send, CheckCircle2 } from "lucide-react"

const WEBSITE_PLANS = [
  { value: "Basic - $399 setup + $19/mo",    label: "Basic — $399 setup + $19/mo" },
  { value: "Standard - $799 setup + $29/mo", label: "Standard — $799 setup + $29/mo" },
  { value: "Pro - $1,399 setup + $49/mo",    label: "Pro — $1,399 setup + $49/mo" },
  { value: "Premium - Custom pricing",        label: "Premium — Custom pricing" },
]

const CUSTOM_APPS = [
  { value: "E-Commerce Store",            label: "E-Commerce Store" },
  { value: "Booking & Scheduling App",    label: "Booking & Scheduling App" },
  { value: "Business Portal / Dashboard", label: "Business Portal / Dashboard" },
]

const ALL_OPTIONS = [...WEBSITE_PLANS, ...CUSTOM_APPS]

function OrderFormInner({ endpoint }: { endpoint: string }) {
  const params    = useSearchParams()
  const planParam = params.get("plan") ?? ""

  const resolve = (p: string) =>
    ALL_OPTIONS.find(
      o => o.value.toLowerCase() === p.toLowerCase() ||
           o.label.toLowerCase().startsWith(p.toLowerCase())
    )?.value ?? ""

  const [plan,       setPlan]       = useState(() => resolve(planParam))
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)
  const [error,      setError]      = useState("")

  // Sync when user clicks a different plan button (URL changes without remount)
  useEffect(() => {
    const resolved = resolve(planParam)
    if (resolved) setPlan(resolved)
    if (planParam) {
      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planParam])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setSubmitting(true)
    setError("")
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name:        fd.get("name"),
          email:       fd.get("email"),
          phone:       fd.get("phone"),
          serviceType: plan,
          notes:       fd.get("notes") ?? "",
        }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or email contact@kenatrix.com")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-3">Request Received!</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          We&apos;ll reach out within 24 hours to get your website started.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Plan */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Plan *</label>
        <select
          value={plan}
          onChange={e => setPlan(e.target.value)}
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                     focus:outline-none focus:ring-2 bg-white appearance-none cursor-pointer"
        >
          <option value="">Choose a plan or service…</option>
          <optgroup label="Website Plans">
            {WEBSITE_PLANS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </optgroup>
          <optgroup label="Custom Applications">
            {CUSTOM_APPS.map(o => (
              <option key={o.value} value={o.value}>{o.label} — Custom quote</option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input
            name="name" required placeholder="Your name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
          <input
            name="phone" type="tel" required placeholder="+1 (703) 555-0000"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
        <input
          name="email" type="email" required placeholder="you@example.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Notes <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          name="notes" rows={4}
          placeholder="Tell us about your business — name, location, anything specific you need…"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                     focus:outline-none focus:ring-2 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gradient-brand text-white font-bold py-4 rounded-xl
                   hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={18} />
        {submitting ? "Submitting…" : "Submit Order Request"}
      </button>

      <p className="text-center text-xs text-gray-400">
        No payment required now. We&apos;ll contact you within 24 hours to confirm details.
      </p>
    </form>
  )
}

export function WebsiteOrderForm({ endpoint }: { endpoint: string }) {
  return (
    <Suspense fallback={<div className="h-64" />}>
      <OrderFormInner endpoint={endpoint} />
    </Suspense>
  )
}
