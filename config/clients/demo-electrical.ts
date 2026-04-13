import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "PowerSafe Electric",
    tagline: "Licensed Electricians Serving the DMV",
    phone: "+1 (301) 555-0806",
    email: "info@powersafeelectric.com",
    address: "14800 Annapolis Rd",
    city: "Bowie",
    state: "MD",
    logo: "/clients/demo-electrical/logo.png",
    niche: "electrical",
  },
  theme: {
    primary: "#A16207",
    secondary: "#713F12",
    accent: "#FEF9C3",
    surface: "#FEFCE8",
    onPrimary: "#FFFFFF",
    font: "Inter",
    roundedLevel: "sm",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "PowerSafe Electric | Licensed Electrician in Bowie MD",
    description:
      "Licensed and insured electricians serving Bowie and Prince George's County MD. Panel upgrades, wiring, and same-day service available.",
    keywords: [
      "electrician Bowie MD",
      "electrical panel upgrade Maryland",
      "licensed electrician Prince George County",
      "electrical repair DMV",
    ],
    ogImage: "/clients/demo-electrical/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Get a Quote",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Electrical Work Done Safely & Right",
    subheading:
      "Licensed electricians in Bowie, MD. Panel upgrades, new wiring, outlets, lighting, and emergency service.",
    cta: { label: "Get a Free Quote", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "/clients/demo-electrical/hero.jpg",
    badge: "Licensed & Bonded in MD",
    trustPoints: ["Maryland Master Electrician License", "Same-Day Service Available", "All Work Code-Compliant"],
    socialProof: { count: "600+", label: "electrical projects completed in the DMV" },
  },
  services: {
    title: "Electrical Services",
    subtitle: "Safe, code-compliant electrical work for homes and businesses",
    items: [
      {
        name: "Panel Upgrades",
        description:
          "100A to 200A panel upgrades to support modern electrical demands safely and up to code.",
        price: "From $1,200",
        icon: "Zap",
      },
      {
        name: "Outlet & Wiring Installation",
        description:
          "New outlets, GFCI installation, whole-home rewiring, and EV charger installation.",
        price: "From $150",
        icon: "Plug",
      },
      {
        name: "Lighting & Smart Home",
        description:
          "Recessed lighting, ceiling fans, smart switches, and whole-home automation wiring.",
        price: "From $100",
        icon: "Lightbulb",
      },
      {
        name: "Electrical Inspections",
        description:
          "Pre-sale, new home, or safety inspections with a detailed written report.",
        price: "From $199",
        icon: "ClipboardCheck",
      },
    ],
  },
  gallery: {
    title: "Recent Projects",
    subtitle: "Clean, code-compliant electrical work",
    images: [
      { src: "/clients/demo-electrical/gallery/1.jpg", alt: "Panel upgrade" },
      { src: "/clients/demo-electrical/gallery/2.jpg", alt: "Recessed lighting" },
      { src: "/clients/demo-electrical/gallery/3.jpg", alt: "EV charger install" },
      { src: "/clients/demo-electrical/gallery/4.jpg", alt: "Outlet installation" },
      { src: "/clients/demo-electrical/gallery/5.jpg", alt: "Smart home wiring" },
      { src: "/clients/demo-electrical/gallery/6.jpg", alt: "Commercial panel" },
    ],
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "Safe, reliable electrical service",
    items: [
      {
        name: "Patricia N.",
        role: "Homeowner, Bowie MD",
        text: "They upgraded our 100A panel to 200A for our EV charger. The work was clean, inspected, and passed first try. Very professional.",
        rating: 5,
      },
      {
        name: "Samuel O.",
        role: "Landlord, Upper Marlboro MD",
        text: "Used PowerSafe for two rental properties. Reliable, fairly priced, and they always pull the right permits.",
        rating: 5,
      },
      {
        name: "Karen L.",
        role: "Homeowner, Crofton MD",
        text: "Called them for a tripping breaker. They found an undersized wire and fixed it safely. Really glad I didn't ignore it.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Projects Completed", value: "600+" },
      { label: "Years Experience", value: "15+" },
      { label: "Licensed & Bonded", value: "Yes" },
      { label: "Same-Day Service", value: "Available" },
    ],
  },
  about: {
    title: "About PowerSafe Electric",
    story:
      "PowerSafe Electric has been the trusted name for electrical work in Prince George's County and surrounding areas for 15 years. We're a fully licensed, bonded, and insured electrical contractor that pulls all required permits and ensures every job passes inspection. Our team stays current on NEC code updates so your project is always done right.",
    image: "/clients/demo-electrical/about.jpg",
    highlights: [
      { label: "License", value: "Maryland Master Electrician" },
      { label: "Insured", value: "$2M Liability" },
      { label: "Code Compliance", value: "All Permits Pulled" },
      { label: "Warranty", value: "1-Year Labor" },
    ],
  },
  contact: {
    title: "Request an Electrical Quote",
    subtitle: "Describe your project and we'll get back to you with a written estimate.",
    mapEmbed: "",
    formEndpoint: "mailto:info@powersafeelectric.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
