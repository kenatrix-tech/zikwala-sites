import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Golden Lens Photography",
    tagline: "Capturing Your Most Meaningful Moments",
    phone: "+1 (202) 555-1210",
    email: "hello@goldenlensphotography.com",
    address: "1012 U St NW",
    city: "Washington",
    state: "DC",
    logo: "/clients/demo-photography/logo.png",
    niche: "photography",
  },
  theme: {
    primary: "#9F1239",
    secondary: "#881337",
    accent: "#FFE4E6",
    surface: "#FFF1F2",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "none",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Golden Lens Photography | Wedding & Portrait Photographer in Washington DC",
    description:
      "Professional wedding, portrait, and event photography in Washington DC. Capturing your story with artistry and emotion.",
    keywords: [
      "wedding photographer Washington DC",
      "portrait photographer DMV",
      "event photography DC",
      "newborn photography Maryland",
      "Ethiopian photographer DC",
    ],
    ogImage: "/clients/demo-photography/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Book", href: "/contact" },
    ],
    ctaLabel: "Book a Session",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Your Story, Beautifully Told",
    subheading:
      "Award-winning photography for weddings, portraits, and events in Washington DC and the DMV.",
    cta: { label: "Book a Session", href: "/contact" },
    secondaryCta: { label: "View Portfolio", href: "/gallery" },
    image: "/clients/demo-photography/hero.jpg",
    badge: "Available for Weekends & Travel",
    trustPoints: ["Full Gallery Delivery in 3 Weeks", "High-Resolution Digital Files Included", "Travel Available Nationwide"],
    socialProof: { count: "500+", label: "sessions and weddings photographed" },
  },
  services: {
    title: "Photography Services",
    subtitle: "Every session tells a unique story",
    items: [
      {
        name: "Wedding Photography",
        description:
          "Full-day coverage, two photographers, sneak peek within 48 hours, and full gallery in 3 weeks.",
        price: "From $2,200",
        icon: "Heart",
      },
      {
        name: "Portrait & Family Sessions",
        description:
          "Outdoor or studio portraits for individuals, couples, and families. 1-2 hour sessions.",
        price: "From $350",
        icon: "Users",
      },
      {
        name: "Corporate & Events",
        description:
          "Headshots, brand photography, galas, and corporate events with fast turnaround.",
        price: "From $500",
        icon: "Building2",
      },
      {
        name: "Newborn Photography",
        description:
          "Safe, gentle newborn sessions in the first 14 days of life. Beautiful heirloom images.",
        price: "From $400",
        icon: "Baby",
      },
    ],
  },
  gallery: {
    title: "Portfolio",
    subtitle: "A glimpse of moments we've preserved",
    images: [
      { src: "/clients/demo-photography/gallery/1.jpg", alt: "Wedding ceremony" },
      { src: "/clients/demo-photography/gallery/2.jpg", alt: "Family portrait" },
      { src: "/clients/demo-photography/gallery/3.jpg", alt: "Newborn session" },
      { src: "/clients/demo-photography/gallery/4.jpg", alt: "Corporate headshot" },
      { src: "/clients/demo-photography/gallery/5.jpg", alt: "Engagement shoot" },
      { src: "/clients/demo-photography/gallery/6.jpg", alt: "Event coverage" },
    ],
  },
  testimonials: {
    title: "Client Stories",
    subtitle: "What couples and families say about their experience",
    items: [
      {
        name: "Selamawit & Bereket",
        role: "Newlyweds, Washington DC",
        text: "Our wedding photos are absolutely stunning. Every emotion, every detail was captured perfectly. We cried happy tears looking through the gallery.",
        rating: 5,
      },
      {
        name: "The Johnson Family",
        role: "Family Portrait, Maryland",
        text: "The session was relaxed and fun — even our 3-year-old cooperated! The photos are hanging in our living room and we get compliments constantly.",
        rating: 5,
      },
      {
        name: "Nardos T.",
        role: "Corporate Client, DC",
        text: "Professional headshots for our whole team. Delivered within 48 hours and the quality was exceptional. We've already booked for next year.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Sessions Photographed", value: "500+" },
      { label: "Years Experience", value: "9+" },
      { label: "Weddings Covered", value: "120+" },
      { label: "Gallery Delivery", value: "3 Weeks" },
    ],
  },
  about: {
    title: "About Golden Lens Photography",
    story:
      "Golden Lens Photography is a Washington DC-based studio dedicated to documentary-style storytelling. With 9 years of experience photographing weddings, families, and brands across the DMV, we approach every session as a collaboration — listening to what matters most to you and crafting images that will last a lifetime.",
    image: "/clients/demo-photography/about.jpg",
    highlights: [
      { label: "Style", value: "Documentary & Editorial" },
      { label: "Editing", value: "Natural, Timeless" },
      { label: "Delivery", value: "Online Gallery" },
      { label: "Travel", value: "Nationwide Available" },
    ],
  },
  contact: {
    title: "Book Your Session",
    subtitle: "Tell us about your event or session and we'll check availability.",
    mapEmbed: "",
    formEndpoint: "mailto:hello@goldenlensphotography.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
