"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface NavbarProps {
  business: SiteConfig["business"]
  nav: SiteConfig["nav"]
  extraLinks?: { label: string; href: string }[]
}

export function Navbar({ business, nav, extraLinks = [] }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoBroken, setLogoBroken] = useState(false)

  const existingHrefs = new Set(nav.links.map(l => l.href))
  const allLinks = [
    ...nav.links,
    ...extraLinks.filter(l => !existingHrefs.has(l.href)),
  ]

  // Short display name — drop suffixes like "- Real Estate Agent"
  const shortName = business.name.split(/[-–|]/)[0].trim()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Brand accent line — visible only on scroll */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "var(--color-primary)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo — image (+ name beside it) if available, fall back to text name */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            {business.logo && !logoBroken ? (
              <>
                <Image
                  src={business.logo}
                  alt={shortName}
                  width={120}
                  height={36}
                  className="h-9 w-auto object-contain"
                  onError={() => setLogoBroken(true)}
                />
                <span className="text-base font-bold leading-tight text-gray-900">
                  {shortName}
                </span>
              </>
            ) : (
              <span className="text-base font-bold leading-tight text-gray-900">
                {shortName}
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200
                  text-gray-600 hover:text-primary hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side — phone + CTA + mobile toggle */}
          <div className="flex items-center gap-3">

            {/* Phone — desktop only */}
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <Phone size={14} />
                {business.phone}
              </a>
            )}

            {/* CTA button */}
            <Link
              href={nav.ctaHref}
              className="hidden md:inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-site
                         bg-gradient-brand text-on-primary shadow-md hover:shadow-lg hover:opacity-90
                         transition-all duration-200 hover:scale-105"
            >
              {nav.ctaLabel}
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-accent transition-all"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — animated slide down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white/97 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary hover:bg-accent px-3 py-2.5 rounded-lg transition-all"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Phone in mobile menu */}
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-accent px-3 py-2.5 rounded-lg transition-all"
                onClick={() => setOpen(false)}
              >
                <Phone size={14} />
                {business.phone}
              </a>
            )}

            <Link
              href={nav.ctaHref}
              className="mt-2 bg-gradient-brand text-on-primary text-sm font-semibold px-4 py-3 rounded-site text-center hover:opacity-90 transition-opacity"
              onClick={() => setOpen(false)}
            >
              {nav.ctaLabel}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
