"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface NavbarProps {
  business: SiteConfig["business"]
  nav: SiteConfig["nav"]
}

export function Navbar({ business, nav }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {business.logo ? (
              <Image
                src={business.logo}
                alt={business.name}
                width={40}
                height={40}
                className="object-contain"
              />
            ) : null}
            <span className="text-xl font-bold text-primary leading-tight">
              {business.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={nav.ctaHref}
              className="bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-site hover:bg-secondary transition-colors"
            >
              {nav.ctaLabel}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={nav.ctaHref}
              className="bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-site text-center mt-2 hover:bg-secondary transition-colors"
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
