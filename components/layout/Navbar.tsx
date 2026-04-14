"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface NavbarProps {
  business: SiteConfig["business"]
  nav: SiteConfig["nav"]
  /** Extra links auto-injected by layout based on active features */
  extraLinks?: { label: string; href: string }[]
}

export function Navbar({ business, nav, extraLinks = [] }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Merge config links with auto-injected listing links (no duplicates)
  const existingHrefs = new Set(nav.links.map(l => l.href))
  const allLinks = [
    ...nav.links,
    ...extraLinks.filter(l => !existingHrefs.has(l.href)),
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {business.logo && (
              <div className="w-9 h-9 relative shrink-0">
                <Image
                  src={business.logo}
                  alt={business.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
              {business.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary hover:bg-accent px-3 py-2 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={nav.ctaHref}
              className="hidden md:inline-flex items-center bg-gradient-brand text-on-primary text-sm font-semibold px-5 py-2.5 rounded-site shadow-md hover:shadow-lg hover:opacity-90 transition-all"
            >
              {nav.ctaLabel}
            </Link>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary hover:bg-accent rounded-lg transition-all"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
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
            <Link
              href={nav.ctaHref}
              className="mt-2 bg-gradient-brand text-on-primary text-sm font-semibold px-4 py-3 rounded-site text-center hover:opacity-90 transition-opacity"
              onClick={() => setOpen(false)}
            >
              {nav.ctaLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
