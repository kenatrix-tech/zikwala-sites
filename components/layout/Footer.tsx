import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface FooterProps {
  business: SiteConfig["business"]
  nav: SiteConfig["nav"]
  social?: SiteConfig["social"]
}

export function Footer({ business, nav, social }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">{business.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{business.tagline}</p>
            {/* Social */}
            {social && (
              <div className="flex gap-3">
                {social.facebook && (
                  <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors">
                    <Facebook size={18} />
                  </a>
                )}
                {social.instagram && (
                  <a href={social.instagram} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors">
                    <Instagram size={18} />
                  </a>
                )}
                {social.linkedin && (
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin size={18} />
                  </a>
                )}
                {social.twitter && (
                  <a href={social.twitter} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter size={18} />
                  </a>
                )}
                {social.youtube && (
                  <a href={social.youtube} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors">
                    <Youtube size={18} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
                <a href={`tel:${business.phone}`} className="hover:text-primary transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail size={15} className="mt-0.5 shrink-0 text-primary" />
                <a href={`mailto:${business.email}`} className="hover:text-primary transition-colors">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{business.address}, {business.city}, {business.state}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {year} {business.name}. All rights reserved. &nbsp;|&nbsp;{" "}
          <span>
            Built by{" "}
            <a href="https://zikwala.com" className="text-primary hover:underline" target="_blank">
              Zikwala
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
