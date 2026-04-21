import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "FixRight Handyman Services",
    tagline: "Your Trusted Home Repair Specialist",
    phone: "+1 (703) 555-1008",
    email: "info@fixrighthandyman.com",
    address: "4112 Duke St",
    city: "Alexandria",
    state: "VA",
    logo: "https://cdn.zikwala.com/demo/handyman/fixright/logo.png",
    niche: "handyman",
  },
  theme: {
    primary: "#166534",
    secondary: "#14532D",
    accent: "#DCFCE7",
    surface: "#F0FDF4",
    onPrimary: "#FFFFFF",
    font: "Inter",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "FixRight Handyman Services | Home Repair in Alexandria VA",
    description:
      "Reliable handyman services in Alexandria and Northern Virginia. Furniture assembly, drywall, door repairs, and general home maintenance.",
    keywords: [
      "handyman Alexandria VA",
      "home repair Northern Virginia",
      "furniture assembly DMV",
      "drywall repair Alexandria",
      "TV mounting Alexandria VA",
      "handyman services Arlington VA",
    ],
    ogImage: "https://cdn.zikwala.com/demo/handyman/fixright/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book a Handyman",
    ctaHref: "/contact",
  },
  hero: {
    variant: "bold",
    heading: "One Call, Every Home Repair",
    subheading:
      "From small fixes to bigger projects — FixRight handles it all so you don't have to. Serving Alexandria and Northern VA.",
    cta: { label: "Book a Handyman", href: "/contact" },
    secondaryCta: { label: "What We Fix", href: "/services" },
    image: "/clients/fixright-handyman/hero.jpg",
    badge: "Same-Week Availability",
    trustPoints: ["Background-Checked Technicians", "Flat Hourly Rate — No Hidden Fees", "Same-Week Availability"],
    socialProof: { count: "900+", label: "home repairs completed in Northern VA" },
  },
  services: {
    title: "Handyman Services",
    subtitle: "Reliable repairs, installations, and maintenance",
    items: [
      {
        name: "Furniture Assembly",
        description:
          "IKEA, Wayfair, Amazon — we assemble it all. Fast, correct, and no leftover screws.",
        price: "From $60/hr",
        icon: "Armchair",
      },
      {
        name: "Drywall Repair",
        description:
          "Patch holes, cracks, and water damage. Textured or smooth finish to match your walls.",
        price: "From $80",
        icon: "Square",
      },
      {
        name: "Door & Window Repair",
        description:
          "Sticking doors, broken locks, window hardware replacement, and weatherstripping.",
        price: "From $75",
        icon: "DoorOpen",
      },
      {
        name: "General Home Repairs",
        description:
          "TV mounting, shelf installation, caulking, minor carpentry, and honey-do list projects.",
        price: "$75/hr",
        icon: "Wrench",
      },
    ],
  },
  gallery: {
    title: "Jobs We've Completed",
    subtitle: "No job too small, no project too big",
    images: [
      { src: "https://cdn.zikwala.com/demo/handyman/gallery1.jpg", alt: "Furniture assembly Alexandria VA" },
      { src: "https://cdn.zikwala.com/demo/handyman/gallery2.jpg", alt: "Drywall patch repair" },
      { src: "https://cdn.zikwala.com/demo/handyman/gallery3.jpg", alt: "TV wall mounting Northern VA" },
      { src: "https://cdn.zikwala.com/demo/handyman/gallery4.jpg", alt: "Door repair Alexandria" },
      { src: "https://cdn.zikwala.com/demo/handyman/gallery5.jpg", alt: "Shelf installation home" },
      { src: "https://cdn.zikwala.com/demo/handyman/gallery6.jpg", alt: "Bathroom caulking repair" },
    ],
  },
  testimonials: {
    title: "Happy Homeowners",
    subtitle: "Trusted by families across Northern Virginia",
    items: [
      {
        name: "Jessica T.",
        role: "Homeowner, Alexandria VA",
        text: "FixRight assembled my entire bedroom set in under 2 hours. Punctual, professional, and they cleaned up after themselves. Highly recommend.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/handyman/fixright/testimonial-1.jpg",
      },
      {
        name: "Omar H.",
        role: "Condo Owner, Arlington VA",
        text: "They patched 4 holes in my walls before I sold my condo. Painted over perfectly — the inspector didn't notice a thing.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/handyman/fixright/testimonial-2.jpg",
      },
      {
        name: "Cheryl M.",
        role: "Homeowner, Springfield VA",
        text: "My honey-do list was a mile long. FixRight knocked out 8 items in one afternoon. Amazing value for the price.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/handyman/fixright/testimonial-3.jpg",
      },
    ],
  },
  stats: {
    items: [
      { label: "Jobs Completed", value: "900+" },
      { label: "Years Experience", value: "10+" },
      { label: "Services Offered", value: "30+" },
      { label: "Client Satisfaction", value: "98%" },
    ],
  },
  about: {
    title: "About FixRight Handyman",
    story:
      "FixRight Handyman was founded in Alexandria, VA with one mission: be the handyman people actually want to call. We're background-checked, fully insured, and charge honest flat-rate or hourly pricing. No job is too small and no customer is too demanding — we show up, fix it, and leave your home better than we found it.",
    image: "https://cdn.zikwala.com/demo/handyman/fixright/owner.jpg",
    highlights: [
      { label: "Background Checked", value: "Yes" },
      { label: "Insured", value: "Yes" },
      { label: "Rate", value: "Transparent & Flat" },
      { label: "Area Served", value: "Northern VA & DC" },
    ],
  },
  contact: {
    title: "Book Your Handyman",
    subtitle: "Tell us what needs fixing and we'll schedule you in — often same week.",
    mapEmbed: "https://maps.google.com/maps?q=4112+Duke+St,+Alexandria,+VA&output=embed",
    formEndpoint: "mailto:info@fixrighthandyman.com",
  },
  googleReviewUrl: "https://g.page/r/fixright-handyman-alexandria/review",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
