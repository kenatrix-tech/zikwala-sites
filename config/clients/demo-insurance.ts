import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Trustmark Insurance Group",
    tagline: "Protecting What Matters Most",
    phone: "+1 (301) 555-1412",
    email: "info@trustmarkinsurance.com",
    address: "4800 Hampden Lane",
    city: "Bethesda",
    state: "MD",
    logo: "/clients/demo-insurance/logo.png",
    niche: "insurance",
  },
  theme: {
    primary: "#1E3A8A",
    secondary: "#1E40AF",
    accent: "#DBEAFE",
    surface: "#EFF6FF",
    onPrimary: "#FFFFFF",
    font: "Inter",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Trustmark Insurance Group | Independent Insurance Agent in Bethesda MD",
    description:
      "Independent insurance agent in Bethesda, MD. Auto, home, life, and business insurance from top-rated carriers. Get your free quote today.",
    keywords: [
      "insurance agent Bethesda MD",
      "auto insurance Maryland",
      "life insurance DMV",
      "home insurance Montgomery County",
      "independent insurance broker",
    ],
    ogImage: "/clients/demo-insurance/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Coverage", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Reviews", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Get Free Quote",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Coverage You Can Count On",
    subheading:
      "Independent insurance agent in Bethesda, MD. We shop 20+ carriers to find you the best coverage at the lowest price.",
    cta: { label: "Get Free Quote", href: "/contact" },
    secondaryCta: { label: "Our Coverage", href: "/services" },
    image: "/clients/demo-insurance/hero.jpg",
    badge: "Independent Agent — We Work for You",
    trustPoints: ["Independent Agent — We Shop 20+ Carriers", "Licensed in MD, VA & DC", "Free Policy Review"],
    socialProof: { count: "1,500+", label: "clients protected across the DMV" },
  },
  services: {
    title: "Insurance Coverage",
    subtitle: "The right protection for every stage of life",
    items: [
      {
        name: "Auto Insurance",
        description:
          "Liability, comprehensive, and collision coverage from top-rated carriers. Multi-car discounts available.",
        price: "Free Quote",
        icon: "Car",
      },
      {
        name: "Home & Renters Insurance",
        description:
          "Protect your home, condo, or rental with the right coverage. Bundle discounts with auto available.",
        price: "Free Quote",
        icon: "Home",
      },
      {
        name: "Life & Health Insurance",
        description:
          "Term, whole, and universal life policies. Individual and family health insurance plans.",
        price: "Free Quote",
        icon: "ShieldCheck",
      },
      {
        name: "Business Insurance",
        description:
          "General liability, BOP, professional liability, and workers' comp for small businesses.",
        price: "Free Quote",
        icon: "Building2",
      },
    ],
  },
  gallery: {
    title: "Why Clients Choose Us",
    subtitle: "Trusted by families and small businesses across the DMV",
    images: [
      { src: "/clients/demo-insurance/gallery/1.jpg", alt: "Family consultation" },
      { src: "/clients/demo-insurance/gallery/2.jpg", alt: "Business coverage" },
      { src: "/clients/demo-insurance/gallery/3.jpg", alt: "Auto insurance" },
      { src: "/clients/demo-insurance/gallery/4.jpg", alt: "Home insurance" },
      { src: "/clients/demo-insurance/gallery/5.jpg", alt: "Life insurance review" },
      { src: "/clients/demo-insurance/gallery/6.jpg", alt: "Client meeting" },
    ],
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "Protection and peace of mind, delivered",
    items: [
      {
        name: "Fikadu B.",
        role: "Client, Bethesda MD",
        text: "Trustmark saved my family over $600/year by switching our auto and home insurance. The process was seamless and they explained everything clearly.",
        rating: 5,
      },
      {
        name: "Nicole H.",
        role: "Small Business Owner, DC",
        text: "Finally found an agent who understands small business coverage. They got me properly insured and the price was much better than I expected.",
        rating: 5,
      },
      {
        name: "Girma & Sara W.",
        role: "Clients, Rockville MD",
        text: "We came for auto insurance and ended up bundling our home and life too. Great advisor who actually listens to your needs.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Clients Protected", value: "1,500+" },
      { label: "Years Experience", value: "14+" },
      { label: "Carrier Partners", value: "20+" },
      { label: "Claims Assisted", value: "400+" },
    ],
  },
  about: {
    title: "About Trustmark Insurance Group",
    story:
      "Trustmark Insurance Group is an independent insurance agency based in Bethesda, MD. As an independent agent, we represent you — not the insurance companies. We compare rates and coverage from 20+ top-rated carriers to find the best policy for your specific needs and budget. Our multilingual team proudly serves the diverse DMV community.",
    image: "/clients/demo-insurance/about.jpg",
    highlights: [
      { label: "Agent Type", value: "Independent (Unbiased)" },
      { label: "Licensed in", value: "MD, VA, DC" },
      { label: "Languages", value: "English, Amharic" },
      { label: "Carriers", value: "20+ Top-Rated" },
    ],
  },
  contact: {
    title: "Get Your Free Insurance Quote",
    subtitle: "Tell us what you need and we'll compare your options within 24 hours.",
    mapEmbed: "",
    formEndpoint: "mailto:info@trustmarkinsurance.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
}
