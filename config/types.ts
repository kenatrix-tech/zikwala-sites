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
  | "Cormorant Garamond"

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
    allowDarkMode?: boolean  // false = hide toggle and never apply dark mode
  }

  // ─── Tier & Demo ─────────────────────────────────────────
  tier: Tier
  isDemo?: boolean         // true = show "order your site" demo banner
  isLive?: boolean         // true = allow Google indexing (default blocked)
  isActive?: boolean       // false = entire site blocked (default true)
  launchDate?: string      // e.g. "April 1, 2026" — used as effective date on Terms & Privacy pages

  // ─── Zikwala Marketplace Integration ─────────────────────
  /** Zikwala marketplace seller slug — enables dynamic listings from Kenatrix API */
  sellerSlug?: string
  /** Optional filter applied to all storefront listing fetches for this client */
  storefrontFilter?: {
    listingType?: string   // e.g. "PRODUCT" | "SERVICE" | "PROPERTY" | "VEHICLE"
    categoryName?: string  // e.g. "Jewelry"
    categorySlug?: string  // e.g. "jewelry"
  }

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
    /** Stripe Connect payment & checkout (Pro+) */
    payment?: boolean
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
    variant?: "split" | "centered" | "minimal" | "bold" | "magazine" | "shop"
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
    /** Image aspect ratio. Defaults to "square". Use "portrait" for beauty/fashion. */
    aspectRatio?: "square" | "portrait" | "landscape"
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
      imagePosition?: string  // CSS object-position — e.g. "top", "center 25%"
      highlights?: { label: string; value: string }[]
      awards?: { title: string; org: string; year: number | string; icon?: string; color?: string }[]
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
    whatsappMessage?: string    // pre-filled WhatsApp message for the contact page
    submitLabel?: string        // submit button text — e.g. "Request a Reservation"
    bookingFields?: {
      date?: boolean            // show date picker
      time?: boolean            // show time picker
      timeStep?: number         // minute interval for time picker — e.g. 15 or 30 (default 15)
      guests?: boolean          // show number of guests input
      maxGuests?: number        // max value for guests input (default 20)
      placeholder?: string      // message textarea label — e.g. "Special requests or dietary needs"
    }
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
      image?: string
      category?: string        // e.g. "Shoes", "Tops", "Electronics"
      badge?: string           // "New", "Best Seller", "Sale", "Low Stock"
      inStock?: boolean        // defaults to true
      slug?: string            // productId (string) for detail page — set when data comes from Kenatrix API
      listingType?: string     // "PRODUCT" | "SERVICE" | "VEHICLE" — from Kenatrix API
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
      specsLine?: string      // pre-formatted "3 bd · 2 ba · 1,826 sqft" — from API titleLine2
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
      status?: "Sold" | "Under Contract"
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
      cta?: { label?: string; href: string }
    }[]
  }

  // ─── Booking System (Pro+ / service-based businesses) ───
  booking?: {
    title?: string
    subtitle?: string
    /** Stripe Connect account ID for this seller — charges go to seller, platform takes a fee */
    stripeConnectAccountId?: string
    /** Business open time — e.g. "09:00" (default "09:00") */
    openTime?: string
    /** Business close time — e.g. "19:00" (default "19:00") */
    closeTime?: string
    /** Slot interval in minutes — 15, 30, or 60 (default 30) */
    timeStep?: number
    /** Show address field — for at-home services (cleaning, handyman, plumbing, etc.) */
    collectAddress?: boolean
    /** Custom notes placeholder — guides the client on what to write */
    notesPlaceholder?: string
    services: {
      name: string
      description?: string
      price?: string
      priceAmount?: number
      duration?: string
      icon?: string
      listingId?: number
      depositPercent?: number
    }[]
    defaultDepositPercent?: number
  }

  // ─── Payment (Pro+ / Stripe Connect) ────────────────────
  payment?: {
    enabled: boolean
    /** Stripe Connect Standard connected account ID — e.g. "acct_xxxxx" */
    stripeConnectedAccountId: string
    /** Currency code — defaults to "usd" */
    currency?: string
  }

  // ─── Delivery / Order Links ──────────────────────────────
  /** Third-party delivery platforms — shown as secondary links below direct order CTAs */
  deliveryLinks?: { name: string; url: string }[]

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
