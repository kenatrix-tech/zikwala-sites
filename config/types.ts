export type Niche =
  | "cleaning"
  | "realestate"
  | "lawfirm"
  | "tax"
  | "decoration"
  | "autorepair"
  | "painting"
  | "catering"
  | "restaurant"
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
  | "boutique"

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
  isActive?: boolean       // false = entire site blocked (default true)

  // ─── Zikwala Marketplace Integration ─────────────────────
  /** Zikwala marketplace seller slug — enables dynamic listings from Kenatrix API */
  sellerSlug?: string

  // ─── Premium Features (Premium tier only) ────────────────
  features?: {
    /** Login / Signup — tenant, agent, or client auth (Premium) */
    auth?: boolean
    /** User dashboard — client manages their own content (Premium) */
    userDashboard?: boolean
    /** Dynamic property/vehicle/product listings managed via dashboard (Premium) */
    dynamicListings?: boolean
    /** Rental applications — tenants apply online (Premium / realestate) */
    rentalApplications?: boolean
    /** Online booking / appointment scheduling (Premium) */
    onlineBooking?: boolean
    /** Blog / news section with CMS (Premium) */
    blog?: boolean
    /** Live chat widget (Pro+) */
    liveChat?: boolean
    /** Email marketing / newsletter signup (Pro+) */
    newsletter?: boolean
  }

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
    /** CSS object-position for the hero image — e.g. "center", "top", "center 25%" */
    imagePosition?: string
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
    // ─── Legacy single-section (auto-normalized by component) ───
    story?: string
    image?: string
    highlights?: { label: string; value: string }[]
    // ─── Multi-section alternating layout ───────────────────────
    sections?: {
      heading?: string     // h2 within the section
      body: string
      image?: string
      highlights?: { label: string; value: string }[]
    }[]
  }

  // ─── Contact Section ─────────────────────────────────────
  contact: {
    title: string
    subtitle: string
    mapEmbed?: string           // Google Maps embed URL
    formEndpoint?: string       // e.g. mailto: or external form service
    notifyEmail?: string        // email to notify on new lead
    telegramChatId?: string     // Telegram numeric chat ID for lead notifications
  }

  // ─── Product Listings (Standard+ / retail niches) ───────
  products?: {
    title: string
    subtitle: string
    items: {
      id: string
      name: string
      description?: string
      price: number
      originalPrice?: number   // shows strikethrough + discount
      image: string
      category?: string        // e.g. "Shoes", "Tops", "Electronics"
      badge?: string           // "New", "Best Seller", "Sale", "Low Stock"
      inStock?: boolean        // defaults to true
      slug?: string            // productId (string) for detail page — set when data comes from Kenatrix API
    }[]
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
      slug?: string           // vehicleId (string) for detail page — set when data comes from Kenatrix API
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
      slug?: string           // listingSlug for detail page — set when data comes from Kenatrix API
    }[]
  }

  // ─── Catering (restaurants, caterers, bakeries, etc.) ───
  catering?: {
    title: string
    subtitle: string
    serviceArea?: string          // e.g. "DC, MD & VA"
    minimumNotice?: string        // e.g. "48 hours advance notice required"
    eventTypes: string[]          // e.g. ["Weddings", "Corporate", "Birthdays"]
    packages: {
      name: string
      description: string
      priceFrom?: string          // e.g. "From $18/person" or "From $500"
      minimumGuests?: number
      features: string[]
      badge?: string
      highlight?: boolean
    }[]
  }

  // ─── Sold Listings Portfolio (realestate, Basic+) ────────
  /** Static portfolio of past sales — shown on /sold page, no feature gate */
  soldListings?: {
    title: string
    subtitle: string
    items: {
      image: string
      address: string
      city: string
      price: number
      type: "House" | "Condo" | "Townhouse" | "Apartment" | "Land" | "Commercial"
      bedrooms?: number
      bathrooms?: number
      sqft?: number
      soldYear?: number   // e.g. 2024
    }[]
  }

  // ─── Mortgage Calculator ─────────────────────────────────
  /** Show a mortgage calculator section — real estate niche only */
  mortgageCalculator?: boolean

  // ─── Home Valuation Form ─────────────────────────────────
  /** Show a "What's My Home Worth?" lead form — real estate niche only */
  homeValuation?: boolean

  // ─── How It Works ────────────────────────────────────────
  /** Show a buyer/seller process section — real estate niche only */
  howItWorks?: boolean

  // ─── Areas Served ────────────────────────────────────────
  areasServed?: { name: string; description?: string }[]

  // ─── FAQ ─────────────────────────────────────────────────
  faq?: { question: string; answer: string }[]

  // ─── Packages / Pricing ──────────────────────────────────
  packages?: {
    title: string
    subtitle?: string
    items: {
      name: string
      description: string
      price: string
      features: string[]
      badge?: string
      highlight?: boolean
    }[]
  }

  // ─── Sticky Contact Button ───────────────────────────────
  /** "phone" = call only, "whatsapp" = WA only, "both" = stacked (default: "whatsapp") */
  stickyContact?: "phone" | "whatsapp" | "both"

  // ─── Google Review ───────────────────────────────────────
  googleReviewUrl?: string   // e.g. https://g.page/r/{PLACE_ID}/review

  // ─── Social Links ────────────────────────────────────────
  social?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    youtube?: string
    tiktok?: string
  }
}
