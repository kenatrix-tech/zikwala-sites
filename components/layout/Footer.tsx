"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { LogoBrand } from "@/components/ui/LogoBrand"

// Inline SVGs
const SocialIcons = {
  facebook: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  youtube: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="white" />
    </svg>
  ),
  tiktok: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  ),
}

interface FooterProps {
  business: SiteConfig["business"]
  nav: SiteConfig["nav"]
  social?: SiteConfig["social"]
}

export function Footer({ business, nav, social }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-400">
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-2"><LogoBrand logo={business.logo} name={business.name} variant="footer" /></div>
            <p className="text-gray-400 text-sm mb-6">{business.tagline}</p>

            {social && (
              <div className="flex gap-3">
                {[
                  { key: "facebook" as const, href: social.facebook,  color: "#1877F2" },
                  { key: "instagram" as const, href: social.instagram, color: "#E1306C" },
                  { key: "tiktok" as const,    href: social.tiktok,    color: "#010101" },
                  { key: "linkedin" as const,  href: social.linkedin,  color: "#0A66C2" },
                  { key: "twitter" as const,   href: social.twitter,   color: "#000000" },
                  { key: "youtube" as const,   href: social.youtube,   color: "#FF0000" },
                ]
                  .filter((s) => s.href)
                  .map(({ key, href, color }) => {
                    const Icon = SocialIcons[key]
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${business.name} on ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                        className="w-9 h-9 rounded-lg bg-white/10 text-gray-300 flex items-center justify-center transition-all hover:scale-110 hover:text-white"
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = color)}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "")}
                      >
                        <Icon aria-hidden="true" />
                      </a>
                    )
                  })}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={15} className="text-primary" />
                <a href={`tel:${business.phone}`}>{business.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-primary" />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin size={15} className="text-primary" />
                <span>{business.address}, {business.city}, {business.state}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-gray-500 flex justify-between">
          <a
            href="https://zikwala.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            Powered by Zikwala
          </a>
          <span>© {year} {business.name}</span>
        </div>
      </div>
    </footer>
  )
}