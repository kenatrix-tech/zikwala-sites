import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "ComfortZone HVAC",
    tagline: "Heating & Cooling You Can Count On",
    phone: "+1 (571) 555-0705",
    email: "service@comfortzoneHVAC.com",
    address: "9801 Lee Hwy",
    city: "Fairfax",
    state: "VA",
    logo: "/clients/demo-hvac/logo.png",
    niche: "hvac",
  },
  theme: {
    primary: "#0891B2",
    secondary: "#0E7490",
    accent: "#CFFAFE",
    surface: "#ECFEFF",
    onPrimary: "#FFFFFF",
    font: "Inter",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "ComfortZone HVAC | Heating & Cooling in Fairfax VA",
    description:
      "Licensed HVAC installation, repair, and maintenance in Fairfax and Northern Virginia. 24/7 emergency service available.",
    keywords: [
      "HVAC Fairfax VA",
      "AC repair Northern Virginia",
      "heating repair Fairfax",
      "furnace installation VA",
      "emergency HVAC DMV",
    ],
    ogImage: "/clients/demo-hvac/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Schedule Service",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Stay Cool in Summer, Warm in Winter",
    subheading:
      "Licensed HVAC installation, repair, and tune-ups in Northern Virginia. Fast response, upfront pricing.",
    cta: { label: "Schedule Service", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "/clients/demo-hvac/hero.jpg",
    badge: "24/7 Emergency Service",
    trustPoints: ["NATE-Certified Technicians", "24/7 Emergency Response", "Upfront Flat-Rate Pricing"],
    socialProof: { count: "800+", label: "systems installed and serviced in Northern VA" },
  },
  services: {
    title: "HVAC Services",
    subtitle: "Complete comfort solutions for home and business",
    items: [
      {
        name: "AC Installation & Repair",
        description:
          "Central AC, mini-splits, and heat pumps installed by certified technicians. Fast repairs on all brands.",
        price: "Free Estimate",
        icon: "Wind",
      },
      {
        name: "Heating System Service",
        description:
          "Furnace installation, heat pump repair, and boiler maintenance for reliable winter warmth.",
        price: "Free Estimate",
        icon: "Flame",
      },
      {
        name: "Air Quality & Duct Cleaning",
        description:
          "Duct cleaning, air purifier installation, and humidity control for healthier indoor air.",
        price: "From $199",
        icon: "Airplay",
      },
      {
        name: "Emergency HVAC Repair",
        description:
          "24/7 emergency service for sudden breakdowns. We arrive within 2 hours, guaranteed.",
        price: "Call for Pricing",
        icon: "AlertTriangle",
      },
    ],
  },
  gallery: {
    title: "Installs & Service Work",
    subtitle: "Quality equipment, quality installation",
    images: [
      { src: "/clients/demo-hvac/gallery/1.jpg", alt: "AC unit installation" },
      { src: "/clients/demo-hvac/gallery/2.jpg", alt: "Furnace installation" },
      { src: "/clients/demo-hvac/gallery/3.jpg", alt: "Mini-split system" },
      { src: "/clients/demo-hvac/gallery/4.jpg", alt: "Duct work" },
      { src: "/clients/demo-hvac/gallery/5.jpg", alt: "Thermostat installation" },
      { src: "/clients/demo-hvac/gallery/6.jpg", alt: "Commercial HVAC" },
    ],
  },
  testimonials: {
    title: "What Homeowners Say",
    subtitle: "Trusted across Northern Virginia",
    items: [
      {
        name: "Robert K.",
        role: "Homeowner, Fairfax VA",
        text: "Our AC died in July. ComfortZone had a tech out within 2 hours and it was fixed by evening. Lifesavers.",
        rating: 5,
      },
      {
        name: "Fatuma H.",
        role: "Homeowner, Vienna VA",
        text: "They installed a new heat pump for us and the difference is incredible. Energy bill went down 30% the first month.",
        rating: 5,
      },
      {
        name: "Tom & Grace W.",
        role: "Homeowners, Reston VA",
        text: "Annual maintenance plan is worth every penny. They caught a cracked heat exchanger before it became a safety issue.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Systems Serviced", value: "800+" },
      { label: "Years Experience", value: "11+" },
      { label: "Emergency Response", value: "2 hrs" },
      { label: "Client Satisfaction", value: "98%" },
    ],
  },
  about: {
    title: "About ComfortZone HVAC",
    story:
      "ComfortZone HVAC has been keeping Northern Virginia homes comfortable for over 11 years. We're a locally owned company staffed by NATE-certified technicians who take pride in clean installs, honest diagnostics, and service that lasts. We work with all major brands and back every job with our satisfaction guarantee.",
    image: "/clients/demo-hvac/about.jpg",
    highlights: [
      { label: "Certification", value: "NATE-Certified" },
      { label: "Licensed in", value: "VA, MD, DC" },
      { label: "Brands Serviced", value: "All Major Brands" },
      { label: "Warranty", value: "10-Year Parts" },
    ],
  },
  contact: {
    title: "Schedule HVAC Service",
    subtitle: "For emergencies, call us directly. Otherwise fill out the form for next-day scheduling.",
    mapEmbed: "",
    formEndpoint: "mailto:service@comfortzoneHVAC.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
