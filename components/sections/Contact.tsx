"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface ContactProps {
  contact: SiteConfig["contact"]
  business: SiteConfig["business"]
  whatsappInquiry?: boolean
  hideHeader?: boolean
}

type Errors = { name?: string; email?: string; phone?: string; message?: string }

function validate(name: string, email: string, phone: string, message: string): Errors {
  const errs: Errors = {}
  if (!name.trim() || name.trim().length < 2)
    errs.name = "Please enter your full name."
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errs.email = "Please enter a valid email address."
  if (!phone.trim())
    errs.phone = "Please enter your phone number."
  else if (!/^[\d\s\-\+\(\)]{7,15}$/.test(phone.trim()))
    errs.phone = "Please enter a valid phone number."
  if (!message.trim())
    errs.message = "Please enter a message."
  return errs
}

export function Contact({ contact, business, whatsappInquiry = false, hideHeader = false }: ContactProps) {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  function handleBlur(field: string) {
    setTouched(t => ({ ...t, [field]: true }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name    = data.get("name") as string
    const phone   = data.get("phone") as string
    const email   = data.get("email") as string
    const message = data.get("message") as string

    const errs = validate(name, email, phone, message)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setTouched({ name: true, email: true, phone: true, message: true })
      return
    }
    setErrors({})

    const apiBase = (process.env.NEXT_PUBLIC_KENATRIX_API_URL ?? "https://api.zikwala.com").replace(/\/$/, "")
    const endpoint = `${apiBase}/api/v1/public/contact/notify-lead`

    setSubmitting(true)
    try {
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          name,
          phone,
          email,
          details:          message,
          clientId:         process.env.NEXT_PUBLIC_CLIENT_ID ?? "unknown",
          appName:          business.name,
          type:             "WEBSITE_INQUIRY",
          reason:           "Contact Us",
          notifyEmail:      contact.notifyEmail ?? business.email,
          telegramChatId:   contact.telegramChatId,
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
      setSent(true)
    } finally {
      setSubmitting(false)
    }

    // Pro+ — open WhatsApp with inquiry pre-filled after submission
    if (whatsappInquiry && business.phone) {
      const waText = encodeURIComponent(
        `Hi, I'm ${name} — I just sent an inquiry from your website.\n\nMessage: ${message}\n\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}`
      )
      const waNumber = business.phone.replace(/\D/g, "")
      window.open(`https://wa.me/${waNumber}?text=${waText}`, "_blank")
    }
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, var(--color-accent) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {contact.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">{contact.subtitle}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {[
              { icon: Phone, label: "Phone", value: business.phone, href: `tel:${business.phone}` },
              { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
              { icon: MapPin, label: "Location", value: `${business.address}, ${business.city}, ${business.state}`, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "var(--color-accent)" }}
                >
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a href={href} className="text-gray-700 font-medium hover:text-primary transition-colors text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map — contextual below address */}
            {contact.mapEmbed && (
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48">
                <iframe
                  src={contact.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Business location"
                />
              </div>
            )}

            {/* Quick CTA */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: "var(--color-primary)" }}
            >
              <div className="font-bold text-lg mb-1">Ready to get started?</div>
              <p className="text-white/80 text-sm mb-4">
                We respond within 24 hours. No commitment required.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>Send us a message below</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-12 text-center">
                <div>
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${touched.name && errors.name ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"}`}
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                      placeholder="Your name"
                      onBlur={() => handleBlur("name")}
                    />
                    {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${touched.phone && errors.phone ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"}`}
                      placeholder="Your phone"
                      onBlur={() => handleBlur("phone")}
                    />
                    {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${touched.email && errors.email ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"}`}
                    placeholder="your@email.com"
                    onBlur={() => handleBlur("email")}
                  />
                  {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${touched.message && errors.message ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-gray-600"}`}
                    placeholder="Tell us how we can help..."
                    onBlur={() => handleBlur("message")}
                  />
                  {touched.message && errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-brand text-on-primary font-semibold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
