"use client"

import { useState } from "react"
import { CheckCircle2, ArrowRight, MapPin, Clock, Users, X, Send, CheckCircle, Phone, Calendar } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface Props {
  catering: NonNullable<SiteConfig["catering"]>
  business: SiteConfig["business"]
  contact: SiteConfig["contact"]
}

interface FormState {
  name: string
  phone: string
  email: string
  date: string
  guests: string
  notes: string
}

type Errors = Partial<Record<keyof FormState, string>>

function validate(f: FormState): Errors {
  const e: Errors = {}
  if (!f.name.trim() || f.name.trim().length < 2) e.name = "Please enter your full name."
  if (!f.phone.trim() || !/^[\d\s\-\+\(\)]{7,15}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number."
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address."
  if (!f.guests.trim()) e.guests = "Please estimate the guest count."
  return e
}

// ── Quote modal ────────────────────────────────────────────────────────────────

function QuoteModal({
  packageName,
  business,
  contact,
  onClose,
}: {
  packageName: string
  business: SiteConfig["business"]
  contact: SiteConfig["contact"]
  onClose: () => void
}) {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", date: "", guests: "", notes: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  function handleChange(field: keyof FormState, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }
  function handleBlur(field: keyof FormState) {
    setTouched(t => ({ ...t, [field]: true }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setTouched({ name: true, phone: true, email: true, guests: true })
      return
    }
    setErrors({})
    setSubmitting(true)

    const parts: string[] = [`Package: ${packageName}`]
    if (form.guests) parts.push(`Guests: ${form.guests}`)
    if (form.date) {
      const d = new Date(form.date + "T12:00")
      parts.push(`Event Date: ${d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`)
    }
    const details = parts.join(" · ") + (form.notes.trim() ? `\n\nNotes: ${form.notes}` : "")

    const apiBase = (process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com").replace(/\/$/, "")
    try {
      await fetch(`${apiBase}/api/v1/public/contact/notify-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          details,
          clientId: process.env.NEXT_PUBLIC_CLIENT_ID ?? "unknown",
          appName: business.name,
          type: "CATERING_INQUIRY",
          reason: "Catering Quote Request",
          notifyEmail: contact.notifyEmail ?? business.email,
        }),
      })
    } finally {
      setSubmitting(false)
      setSent(true)
    }
  }

  const inputClass = (field: keyof FormState) =>
    `w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-gray-200 dark:border-gray-600 focus:ring-primary/20"
    }`

  return (
    /* Backdrop */
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel — slides up from bottom on mobile, centered on sm+ */}
      <div className="relative z-10 w-full sm:max-w-lg bg-white dark:bg-gray-900 rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[92dvh] overflow-y-auto">

        {/* Handle bar (mobile only) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-5 sm:px-6 pt-4 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Request a Quote</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              <span className="font-semibold text-primary">{packageName}</span> · {business.name}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ml-3 shrink-0"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-6 py-5">
          {sent ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "var(--color-accent)" }}>
                <CheckCircle size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quote Request Sent!</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                Thanks <strong className="text-gray-700 dark:text-gray-300">{form.name}</strong>! We'll call you at <strong className="text-gray-700 dark:text-gray-300">{form.phone}</strong> within 24 hours.
              </p>
              <p className="text-xs text-gray-400 mb-6">Package: {packageName}</p>
              <button
                onClick={onClose}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">Full Name *</label>
                  <input
                    value={form.name}
                    onChange={e => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder="Your name"
                    className={inputClass("name")}
                  />
                  {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    placeholder="Your phone number"
                    className={inputClass("phone")}
                  />
                  {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                  Email <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="your@email.com"
                  className={inputClass("email")}
                />
                {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Event Date + Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                    <span className="flex items-center gap-1.5"><Calendar size={13} />Event Date <span className="text-gray-400 font-normal">(optional)</span></span>
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={e => handleChange("date", e.target.value)}
                    className={inputClass("date")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                    <span className="flex items-center gap-1.5"><Users size={13} />Guest Count *</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={form.guests}
                    onChange={e => handleChange("guests", e.target.value)}
                    onBlur={() => handleBlur("guests")}
                    placeholder="e.g. 50"
                    className={inputClass("guests")}
                  />
                  {touched.guests && errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                  Notes <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  value={form.notes}
                  onChange={e => handleChange("notes", e.target.value)}
                  rows={3}
                  placeholder="Event type, dietary needs, location, or any other details…"
                  className="w-full border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "var(--color-primary)" }}
              >
                <Send size={16} />
                {submitting ? "Sending…" : "Send Quote Request"}
              </button>

              <p className="text-center text-xs text-gray-400">
                We'll call you back within 24 hours to discuss your event.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main client component ──────────────────────────────────────────────────────

export function CateringClient({ catering, business, contact }: Props) {
  const [openPackage, setOpenPackage] = useState<string | null>(null)

  return (
    <>
      {/* ── Hero banner ── */}
      <section className="bg-gradient-brand text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4">
            Catering Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight">
            {catering.title}
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-8">
            {catering.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {catering.serviceArea && (
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80">
                <MapPin size={13} />
                {catering.serviceArea}
              </div>
            )}
            {catering.minimumNotice && (
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80">
                <Clock size={13} />
                {catering.minimumNotice}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Event types ── */}
      <section className="bg-gray-50 py-10 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">We cater for</p>
          <div className="flex flex-wrap justify-center gap-2">
            {catering.eventTypes.map((type) => (
              <span key={type} className="px-4 py-2 rounded-full text-sm font-semibold border-2 text-primary border-primary/20 bg-accent">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Catering Packages</h2>
            <p className="text-gray-500">Choose a package or contact us for a fully custom quote.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catering.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border-2 flex flex-col overflow-hidden
                  ${pkg.highlight
                    ? "border-primary shadow-2xl shadow-primary/20 scale-[1.02]"
                    : "border-gray-200 shadow-sm"
                  }`}
              >
                {pkg.badge && (
                  <div className="bg-gradient-brand text-white text-xs font-bold text-center py-1.5 tracking-wide">
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-snug">{pkg.description}</p>

                  <div className="mb-5">
                    <p className="text-2xl font-black text-gray-900">{pkg.priceFrom ?? "Custom Quote"}</p>
                    {pkg.minimumGuests && (
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <Users size={11} />
                        Minimum {pkg.minimumGuests} guests
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setOpenPackage(pkg.name)}
                    className={`w-full text-center py-3 rounded-site font-bold text-sm
                      transition-all duration-200 hover:scale-105 flex items-center justify-center gap-1.5
                      ${pkg.highlight
                        ? "bg-gradient-brand text-white shadow-lg hover:opacity-90"
                        : "bg-gray-900 text-white hover:bg-gray-700"
                      }`}
                  >
                    Get a Quote
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-4 text-center">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Have a custom event in mind?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Send us the details — guest count, date, and menu preferences — and we&apos;ll build a package around your event.
        </p>
        <button
          onClick={() => setOpenPackage("Custom Event")}
          className="inline-flex items-center gap-2 bg-gradient-brand text-white font-bold px-8 py-4 rounded-site shadow-xl hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          Request a Custom Quote
          <ArrowRight size={16} />
        </button>
        <p className="text-xs text-gray-400 mt-4">
          Or call us directly at{" "}
          <a href={`tel:${business.phone}`} className="underline">{business.phone}</a>
        </p>
      </section>

      {/* ── Quote modal ── */}
      {openPackage && (
        <QuoteModal
          packageName={openPackage}
          business={business}
          contact={contact}
          onClose={() => setOpenPackage(null)}
        />
      )}
    </>
  )
}
