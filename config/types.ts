export type Niche =
  | "cleaning"
  | "realestate"
  | "lawfirm"
  | "tax"
  | "decoration"

export type Tier = "basic" | "standard" | "pro" | "premium"

export type FontFamily =
  | "Inter"
  | "Poppins"
  | "Montserrat"
  | "Playfair Display"

export interface SiteConfig {
  // ─── Identity ────────────────────────────────────────────
  business: {
    name: string
    tagline: string
    phone: string
    email: string
    address: string
    city: string
    state: string
    logo: string           // path under /public
    niche: Niche
  }

  // ─── Theme ───────────────────────────────────────────────
  theme: {
    primary: string        // hex — main brand color
    secondary: string      // hex — darker shade
    accent: string         // hex — light background tint
    surface: string        // hex — card/section bg
    onPrimary: string      // hex — text color on primary bg (white or dark)
    font: FontFamily
    roundedLevel: "none" | "sm" | "md" | "lg" | "full"
    darkMode: boolean
  }

  // ─── Tier & Demo ─────────────────────────────────────────
  tier: Tier
  isDemo: boolean          // shows the "order your site" banner

  // ─── SEO ─────────────────────────────────────────────────
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
  }

  // ─── Navigation ──────────────────────────────────────────
  nav: {
    links: { label: string; href: string }[]
    ctaLabel: string       // e.g. "Book Now" or "Free Consultation"
    ctaHref: string
  }

  // ─── Hero Section ────────────────────────────────────────
  hero: {
    heading: string
    subheading: string
    cta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
    image: string
    badge?: string                   // e.g. "Licensed in DC, MD & VA"
    trustPoints?: string[]           // 3 bullet trust indicators below subheading
    socialProof?: { count: string; label: string }  // e.g. { count: "300+", label: "homes sold in DC" }
  }

  // ─── Services Section ────────────────────────────────────
  services: {
    title: string
    subtitle: string
    items: {
      name: string
      description: string
      price?: string
      icon: string         // lucide icon name
    }[]
  }

  // ─── Gallery (Standard+) ─────────────────────────────────
  gallery?: {
    title: string
    subtitle: string
    images: { src: string; alt: string }[]
  }

  // ─── Testimonials (Standard+) ────────────────────────────
  testimonials?: {
    title: string
    subtitle: string
    items: {
      name: string
      role: string
      text: string
      rating: number
      avatar?: string
    }[]
  }

  // ─── Stats / Highlights ──────────────────────────────────
  stats?: {
    items: { label: string; value: string }[]
  }

  // ─── About Section ───────────────────────────────────────
  about: {
    title: string
    story: string
    image?: string
    highlights: { label: string; value: string }[]
  }

  // ─── Contact Section ─────────────────────────────────────
  contact: {
    title: string
    subtitle: string
    mapEmbed?: string      // Google Maps embed URL
    formEndpoint?: string  // e.g. mailto: or external form service
  }

  // ─── Social Links ────────────────────────────────────────
  social?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    youtube?: string
  }
}
