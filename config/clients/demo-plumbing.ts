import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "FlowPro Plumbing",
    tagline: "Fast, Reliable Plumbing for Home & Business",
    phone: "+1 (301) 555-0907",
    email: "info@flowproplumbing.com",
    address: "6400 Greenbelt Rd",
    city: "Greenbelt",
    state: "MD",
    logo: "/clients/demo-plumbing/logo.png",
    niche: "plumbing",
  },
  theme: {
    primary: "#0F766E",
    secondary: "#134E4A",
    accent: "#CCFBF1",
    surface: "#F0FDFA",
    onPrimary: "#FFFFFF",
    font: "Inter",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "FlowPro Plumbing | Licensed Plumber in Greenbelt MD",
    description:
      "Licensed plumbers serving Greenbelt and Prince George's County MD. Drain cleaning, water heaters, pipe repair, and 24/7 emergency service.",
    keywords: [
      "plumber Greenbelt MD",
      "drain cleaning Maryland",
      "water heater replacement DMV",
      "emergency plumber Prince George County",
    ],
    ogImage: "/clients/demo-plumbing/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Call Now",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Plumbing Problems? We Fix Them Fast",
    subheading:
      "Licensed plumbers in Greenbelt, MD. From clogged drains to full repiping — same-day service and 24/7 emergency response.",
    cta: { label: "Call Now", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "/clients/demo-plumbing/hero.jpg",
    badge: "24/7 Emergency Plumbing",
    trustPoints: ["Licensed & Insured Plumbers", "Same-Day Service", "24/7 Emergency Response"],
    socialProof: { count: "1,000+", label: "plumbing calls handled in the DMV" },
  },
  services: {
    title: "Plumbing Services",
    subtitle: "From small repairs to full system replacements",
    items: [
      {
        name: "Drain Cleaning",
        description:
          "Kitchen, bathroom, and main line drain clearing. Camera inspection available for stubborn blockages.",
        price: "From $99",
        icon: "Waves",
      },
      {
        name: "Water Heater Service",
        description:
          "Tank and tankless water heater installation, repair, and replacement. Same-day installs available.",
        price: "From $800",
        icon: "Flame",
      },
      {
        name: "Pipe Repair & Repiping",
        description:
          "Burst pipe repair, leak detection, and full copper or PEX repiping for older homes.",
        price: "Free Estimate",
        icon: "Wrench",
      },
      {
        name: "Emergency Plumbing",
        description:
          "24/7 response for floods, burst pipes, and sewage backups. We arrive within 60 minutes.",
        price: "Call for Pricing",
        icon: "AlertTriangle",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "Clean, professional plumbing you can trust",
    images: [
      { src: "/clients/demo-plumbing/gallery/1.jpg", alt: "Water heater install" },
      { src: "/clients/demo-plumbing/gallery/2.jpg", alt: "Drain cleaning" },
      { src: "/clients/demo-plumbing/gallery/3.jpg", alt: "Pipe repair" },
      { src: "/clients/demo-plumbing/gallery/4.jpg", alt: "Bathroom plumbing" },
      { src: "/clients/demo-plumbing/gallery/5.jpg", alt: "Kitchen sink" },
      { src: "/clients/demo-plumbing/gallery/6.jpg", alt: "Tankless water heater" },
    ],
  },
  testimonials: {
    title: "Customer Reviews",
    subtitle: "Fast, honest plumbing service",
    items: [
      {
        name: "Linda C.",
        role: "Homeowner, Greenbelt MD",
        text: "Called FlowPro at 9pm for a burst pipe. They were there in under an hour and stopped the flooding. Incredibly professional under pressure.",
        rating: 5,
      },
      {
        name: "Dawit A.",
        role: "Homeowner, College Park MD",
        text: "They replaced my old water heater same day I called. Quick, clean, and priced fairly. Will definitely call again.",
        rating: 5,
      },
      {
        name: "Maria V.",
        role: "Property Manager, Lanham MD",
        text: "I manage 8 units and FlowPro is my go-to for all plumbing. Reliable, shows up when they say they will, and the work holds up.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Calls Handled", value: "1,000+" },
      { label: "Years Experience", value: "13+" },
      { label: "Emergency Response", value: "60 min" },
      { label: "Client Satisfaction", value: "97%" },
    ],
  },
  about: {
    title: "About FlowPro Plumbing",
    story:
      "FlowPro Plumbing has been solving plumbing problems across Greenbelt and Prince George's County for over 13 years. We're licensed, bonded, and insured, with a team of experienced plumbers who show up on time and leave your home clean. We believe in transparent pricing — you'll always know the cost before we start.",
    image: "/clients/demo-plumbing/about.jpg",
    highlights: [
      { label: "Licensed in", value: "MD, VA, DC" },
      { label: "Emergency Service", value: "24/7" },
      { label: "Pricing", value: "Upfront Flat Rate" },
      { label: "Guarantee", value: "1-Year Parts & Labor" },
    ],
  },
  contact: {
    title: "Need a Plumber?",
    subtitle: "For emergencies call us directly. For non-urgent jobs, fill out the form.",
    mapEmbed: "",
    formEndpoint: "mailto:info@flowproplumbing.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
