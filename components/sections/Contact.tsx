"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface ContactProps {
  contact: SiteConfig["contact"]
  business: SiteConfig["business"]
}

export function Contact({ contact, business }: ContactProps) {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const endpoint = contact.formEndpoint

    if (endpoint?.startsWith("https://")) {
      setSubmitting(true)
      try {
        await fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        })
        setSent(true)
      } finally {
        setSubmitting(false)
      }
    } else {
      // Fallback: open mailto
      const name = data.get("name") as string
      const email = data.get("email") as string
      const phone = data.get("phone") as string
      const message = data.get("message") as string
      const subject = encodeURIComponent(`Website inquiry from ${name}`)
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      )
      window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
      setSent(true)
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, var(--color-accent) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {contact.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{contact.subtitle}</p>
        </div>

        {/* Map embed */}
        {contact.mapEmbed && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
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

            {/* Quick CTA */}
            <div
              className="mt-4 rounded-2xl p-6 text-white"
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
              <div className="h-full flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 p-12 text-center">
                <div>
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
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
