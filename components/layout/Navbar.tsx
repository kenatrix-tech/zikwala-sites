"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import type { SiteConfig } from "@/config/types"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

interface NavbarProps {
  business: SiteConfig["business"]
  nav: SiteConfig["nav"]
  extraLinks?: { label: string; href: string }[]
  defaultDark?: boolean
  allowDarkMode?: boolean
}

export function Navbar({ business, nav, extraLinks = [], defaultDark = false, allowDarkMode = true }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoBroken, setLogoBroken] = useState(false)

  const existingHrefs = new Set(nav.links.map(l => l.href))
  const allLinks = [
    ...nav.links,
    ...extraLinks.filter(l => !existingHrefs.has(l.href)),
  ]

  const shortName = business.name.split(/[-–|]/)[0].trim()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
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

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0" onClick={() => setOpen(false)}>
              {business.logo && !logoBroken ? (
                <Image
                  src={business.logo}
                  alt=""
                  width={120}
                  height={36}
                  className="h-9 w-auto object-contain"
                  priority
                  onError={() => setLogoBroken(true)}
                />
              ) : (
                <span
                  className="flex items-center justify-center h-9 w-9 rounded-lg text-sm font-bold shrink-0"
                  style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
                  aria-hidden="true"
                >
                  {shortName.charAt(0).toUpperCase()}
                </span>
              )}
              <span className="text-base font-bold leading-tight text-gray-900 dark:text-white">
                {shortName}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {allLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200
                    text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-accent dark:hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {business.phone && (
                <a
                  href={`tel:${business.phone}`}
                  className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-200"
                >
                  <Phone size={14} />
                  {business.phone}
                </a>
              )}

              {allowDarkMode && <ThemeToggle defaultDark={defaultDark} />}

              <Link
                href={nav.ctaHref}
                className="hidden md:inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-site
                           bg-gradient-brand text-on-primary shadow-md hover:shadow-lg hover:opacity-90
                           transition-all duration-200 hover:scale-105"
              >
                {nav.ctaLabel}
              </Link>

              {/* Hamburger — morphs to X when open */}
              <button
                className="md:hidden relative z-[60] p-2 rounded-lg transition-all text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-accent dark:hover:bg-white/10"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <span className={`absolute inset-2 transition-all duration-200 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                  <X size={22} />
                </span>
                <span className={`transition-all duration-200 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
                  <Menu size={22} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer — rendered OUTSIDE header to avoid stacking context issues ── */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-black/30 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer panel — slides in from right */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 md:hidden w-72
          bg-white dark:bg-gray-900 shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer top */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 dark:border-gray-800 shrink-0">
          <span className="font-bold text-gray-900 dark:text-white text-sm">{shortName}</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-accent
                         dark:hover:bg-white/10 px-4 py-3 rounded-xl transition-all"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom: phone + CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2.5 shrink-0">
          {business.phone && (
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400
                         hover:text-primary hover:bg-accent dark:hover:bg-white/10
                         px-4 py-2.5 rounded-xl transition-all"
              onClick={() => setOpen(false)}
            >
              <Phone size={14} />
              {business.phone}
            </a>
          )}
          <Link
            href={nav.ctaHref}
            className="block bg-gradient-brand text-on-primary text-sm font-bold
                       px-4 py-3 rounded-site text-center hover:opacity-90 transition-opacity"
            onClick={() => setOpen(false)}
          >
            {nav.ctaLabel}
          </Link>
        </div>
      </div>
    </>
  )
}
