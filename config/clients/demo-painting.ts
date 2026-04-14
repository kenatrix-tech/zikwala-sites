import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Precise Coat Painting",
    tagline: "Interior & Exterior Painting Done Right",
    phone: "+1 (301) 555-0402",
    email: "info@precisecoatpainting.com",
    address: "5412 Queens Chapel Rd",
    city: "Hyattsville",
    state: "MD",
    logo: "/clients/demo-painting/logo.png",
    niche: "painting",
  },
  theme: {
    primary: "#C2410C",
    secondary: "#7C2D12",
    accent: "#FED7AA",
    surface: "#FFF7ED",
    onPrimary: "#FFFFFF",
    font: "Poppins",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Precise Coat Painting | Interior & Exterior Painters in Hyattsville MD",
    description:
      "Professional residential and commercial painting in Hyattsville and the DMV. Clean lines, premium paint, no mess left behind.",
    keywords: [
      "painter Hyattsville MD",
      "interior painting Maryland",
      "exterior painting DMV",
      "house painter Prince George's County",
    ],
    ogImage: "/clients/demo-painting/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Free Estimate",
    ctaHref: "/contact",
  },
  hero: {
    variant: "split",
    heading: "Transform Your Space with Color",
    subheading:
      "Expert painting services for homes and businesses in the DMV. Clean prep, premium paint, flawless finish.",
    cta: { label: "Get Free Estimate", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/gallery" },
    image: "/clients/demo-painting/hero.jpg",
    badge: "Licensed & Insured",
    trustPoints: ["Licensed & Insured", "Free Color Consultation", "2-Year Workmanship Warranty"],
    socialProof: { count: "400+", label: "rooms and exteriors painted in the DMV" },
  },
  services: {
    title: "Painting Services",
    subtitle: "Every surface, every project — done with precision",
    items: [
      {
        name: "Interior Painting",
        description:
          "Walls, ceilings, trim, and doors. We protect your furniture and floors and leave zero mess.",
        price: "From $200/room",
        icon: "PaintBucket",
      },
      {
        name: "Exterior Painting",
        description:
          "Full exterior repaint including prep, primer, and two finish coats. Weather-resistant paints.",
        price: "From $1,200",
        icon: "Home",
      },
      {
        name: "Cabinet Refinishing",
        description:
          "Give your kitchen a new look without replacing cabinets. Smooth, durable factory-like finish.",
        price: "From $800",
        icon: "Layers",
      },
      {
        name: "Deck & Fence Staining",
        description:
          "Power wash, sand, and stain your deck or fence for lasting protection and curb appeal.",
        price: "From $350",
        icon: "TreePine",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "Before & after transformations",
    images: [
      { src: "/clients/demo-painting/gallery/1.jpg", alt: "Living room interior" },
      { src: "/clients/demo-painting/gallery/2.jpg", alt: "Kitchen cabinets" },
      { src: "/clients/demo-painting/gallery/3.jpg", alt: "Exterior front" },
      { src: "/clients/demo-painting/gallery/4.jpg", alt: "Bedroom accent wall" },
      { src: "/clients/demo-painting/gallery/5.jpg", alt: "Deck staining" },
      { src: "/clients/demo-painting/gallery/6.jpg", alt: "Commercial space" },
    ],
  },
  testimonials: {
    title: "Client Reviews",
    subtitle: "Quality work that speaks for itself",
    items: [
      {
        name: "Angela R.",
        role: "Homeowner, Bowie MD",
        text: "They painted our entire first floor and it looks incredible. Very neat, finished on time, and the color consultation helped us pick the perfect shade.",
        rating: 5,
      },
      {
        name: "Kevin T.",
        role: "Property Manager, Hyattsville",
        text: "Used Precise Coat for 3 rental unit turnovers. Fast, professional, and the quality is consistent every time.",
        rating: 5,
      },
      {
        name: "Tigist M.",
        role: "Homeowner, Greenbelt MD",
        text: "Our exterior was peeling badly. They prepped everything properly and the new paint looks brand new. Great crew.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Projects Completed", value: "400+" },
      { label: "Years Experience", value: "9+" },
      { label: "Client Satisfaction", value: "97%" },
      { label: "Sq Ft Painted", value: "500K+" },
    ],
  },
  about: {
    title: "About Precise Coat Painting",
    story:
      "Precise Coat Painting was founded with a commitment to quality prep and clean execution. Based in Hyattsville, we've been transforming homes and businesses across Prince George's County and the DMV for nearly a decade. We use only premium paints and every job comes with a 2-year workmanship warranty.",
    image: "/clients/demo-painting/about.jpg",
    highlights: [
      { label: "Licensed in", value: "MD, VA, DC" },
      { label: "Paint Brands", value: "Sherwin-Williams, PPG" },
      { label: "Warranty", value: "2-Year Workmanship" },
      { label: "Crew Size", value: "8 Painters" },
    ],
  },
  contact: {
    title: "Get Your Free Estimate",
    subtitle: "We'll visit, measure, and give you a written quote — no obligation.",
    mapEmbed: "",
    formEndpoint: "mailto:info@precisecoatpainting.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
