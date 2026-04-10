"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface ContactProps {
  contact: SiteConfig["contact"]
  business: SiteConfig["business"]
}

export function Contact({ contact, business }: ContactProps) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Build mailto link with form data
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

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {contact.title}
          </h2>
          <p className="text-gray-500 text-lg">{contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent text-primary p-3 rounded-site shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">Phone</div>
                <a href={`tel:${business.phone}`} className="text-gray-600 hover:text-primary">
                  {business.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent text-primary p-3 rounded-site shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">Email</div>
                <a href={`mailto:${business.email}`} className="text-gray-600 hover:text-primary">
                  {business.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent text-primary p-3 rounded-site shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-1">Address</div>
                <p className="text-gray-600">
                  {business.address}<br />
                  {business.city}, {business.state}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {sent ? (
            <div className="flex items-center justify-center bg-white border border-accent rounded-site p-8 text-center">
              <div>
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-accent rounded-site p-6 space-y-4 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full border border-gray-200 rounded-site px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full border border-gray-200 rounded-site px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-site px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full border border-gray-200 rounded-site px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-semibold py-3 rounded-site hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
