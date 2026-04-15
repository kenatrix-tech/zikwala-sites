export type Niche =
  | "cleaning"
  | "realestate"
  | "lawfirm"
  | "tax"
  | "decoration"
  | "autorepair"
  | "painting"
  | "catering"
  | "bakery"
  | "hvac"
  | "electrical"
  | "plumbing"
  | "handyman"
  | "beauty"
  | "photography"
  | "tutor"
  | "insurance"
  | "babysitting"
  | "eventplanning"
  | "cardealership"

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
    /**
     * Layout variant. Omit (or "split") for the default.
     * split    — text left, image right (default)
     * centered — full-viewport image bg, text centered over overlay
     * minimal  — no image, large typography + trust card
     * bold     — solid primary-color panel left, full-bleed image right
     * magazine — image-forward 60/40, editorial text column right
     */
    variant?: "split" | "centered" | "minimal" | "bold" | "magazine"
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
    images: { src: string; alt: string; badge?: string }[]
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

  // ─── Vehicle Listings (Standard+ / cardealership niche) ──
  vehicles?: {
    title: string
    subtitle: string
    items: {
      id: string
      make: string
      model: string
      year: number
      price: number
      mileage?: number
      fuel?: "Gasoline" | "Diesel" | "Hybrid" | "Electric"
      transmission?: "Automatic" | "Manual"
      color?: string
      image: string
      badge?: string          // e.g. "Certified", "Hot Deal", "New Arrival"
      sold?: boolean
    }[]
  }

  // ─── Property Listings (Standard+ / realestate niche) ────
  properties?: {
    title: string
    subtitle: string
    items: {
      id: string
      title: string
      address: string
      city: string
      price: number
      status: "For Sale" | "For Rent" | "Sold" | "Under Contract"
      type: "House" | "Condo" | "Townhouse" | "Apartment" | "Land" | "Commercial"
      bedrooms?: number
      bathrooms?: number
      sqft?: number
      image: string
      badge?: string          // e.g. "New Listing", "Price Reduced", "Open House"
    }[]
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
