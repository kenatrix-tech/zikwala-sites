import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Habesha Auto Care",
    tagline: "Honest, Reliable Auto Repair in the DMV",
    phone: "+1 (703) 555-0301",
    email: "info@habeshautocare.com",
    address: "2210 Columbia Pike",
    city: "Arlington",
    state: "VA",
    logo: "/clients/demo-autorepair/logo.png",
    niche: "autorepair",
  },
  theme: {
    primary: "#B91C1C",
    secondary: "#7F1D1D",
    accent: "#FEE2E2",
    surface: "#FFF5F5",
    onPrimary: "#FFFFFF",
    font: "Inter",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Habesha Auto Care | Trusted Auto Repair in Arlington, VA",
    description:
      "ASE-certified auto repair and maintenance in Arlington, VA. Oil changes, brake service, engine diagnostics, transmission repair, tire work, and more — honest pricing, same-day service available. Proudly serving Northern Virginia since 2014.",
    keywords: [
      "auto repair Arlington VA",
      "car mechanic Northern Virginia",
      "oil change Arlington VA",
      "brake repair Arlington VA",
      "engine diagnostics Arlington",
      "transmission repair Northern Virginia",
      "tire rotation Arlington VA",
      "AC repair car Northern Virginia",
      "check engine light Arlington VA",
      "same-day auto repair Arlington",
      "ASE certified mechanic Arlington",
      "honest mechanic DMV",
    ],
    ogImage: "/clients/demo-autorepair/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book Appointment",
    ctaHref: "/contact",
  },
  hero: {
    variant: "bold",
    heading: "Auto Repair You Can Trust",
    subheading:
      "Expert mechanics serving Arlington and Northern Virginia. No upsells, no surprises — just honest work at fair prices.",
    cta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "/clients/demo-autorepair/hero.jpg",
    badge: "ASE-Certified Mechanics",
    trustPoints: ["ASE-Certified Technicians", "Free Diagnostics", "Same-Day Service Available"],
    socialProof: { count: "1,200+", label: "vehicles serviced in Northern VA" },
  },
  services: {
    title: "Auto Repair Services",
    subtitle: "Full-service care for every make and model",
    items: [
      {
        name: "Oil Change & Maintenance",
        description:
          "Full synthetic, conventional, or high-mileage oil changes with multi-point inspection included.",
        price: "From $49",
        icon: "Droplets",
      },
      {
        name: "Brake Service",
        description:
          "Brake pad replacement, rotor resurfacing, and hydraulic brake system repair.",
        price: "From $89",
        icon: "CircleStop",
      },
      {
        name: "Engine Diagnostics",
        description:
          "Check engine light, performance issues, and warning light diagnosis with advanced scan tools.",
        price: "Free",
        icon: "Cpu",
      },
      {
        name: "Tire & Wheel Services",
        description:
          "Tire rotation, balancing, flat repair, and new tire installation for all vehicle types.",
        price: "From $25",
        icon: "CircleDot",
      },
    ],
  },
  gallery: {
    title: "Our Shop & Work",
    subtitle: "Clean, organized, and fully equipped",
    images: [
      { src: "/clients/demo-autorepair/gallery/1.jpg", alt: "Service bay" },
      { src: "/clients/demo-autorepair/gallery/2.jpg", alt: "Engine repair" },
      { src: "/clients/demo-autorepair/gallery/3.jpg", alt: "Brake work" },
      { src: "/clients/demo-autorepair/gallery/4.jpg", alt: "Tire change" },
      { src: "/clients/demo-autorepair/gallery/5.jpg", alt: "Diagnostics" },
      { src: "/clients/demo-autorepair/gallery/6.jpg", alt: "Waiting area" },
    ],
  },
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Trusted by drivers across Northern Virginia",
    items: [
      {
        name: "Marcus W.",
        role: "Customer, Arlington VA",
        text: "Finally found a mechanic I can trust. They fixed my brakes quickly, explained everything, and charged what they quoted. Won't go anywhere else.",
        rating: 5,
      },
      {
        name: "Hana G.",
        role: "Customer, Falls Church VA",
        text: "Brought my car in for a check engine light. They diagnosed it same day and had it fixed by afternoon. Very honest and professional.",
        rating: 5,
      },
      {
        name: "David S.",
        role: "Customer, Arlington VA",
        text: "Best oil change place in the area. In and out in 30 minutes, and they always do a quick inspection at no extra charge.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Vehicles Serviced", value: "1,200+" },
      { label: "Years Experience", value: "10+" },
      { label: "5-Star Reviews", value: "300+" },
      { label: "Avg Turnaround", value: "1 Day" },
    ],
  },
  about: {
    title: "About Habesha Auto Care",
    story:
      "Founded by a master mechanic with over 10 years of experience, Habesha Auto Care was built on a simple principle: treat every customer's car like your own. We're a family-owned shop in Arlington serving the broader Northern Virginia community with honest diagnostics, quality parts, and fair pricing.",
    image: "/clients/demo-autorepair/about.jpg",
    highlights: [
      { label: "Certifications", value: "ASE-Certified" },
      { label: "Experience", value: "10+ Years" },
      { label: "Makes Serviced", value: "All Brands" },
      { label: "Warranty", value: "12-Month/12K Mi" },
    ],
  },
  contact: {
    title: "Book Your Appointment",
    subtitle: "Call, text, or fill out the form — we'll confirm within the hour.",
    mapEmbed: "",
    formEndpoint: "mailto:info@habeshautocare.com",
  },
  areasServed: [
    { name: "Arlington, VA",     description: "Full-service auto repair and maintenance" },
    { name: "Alexandria, VA",    description: "Same-day service available" },
    { name: "Falls Church, VA",  description: "Oil changes, brakes, and diagnostics" },
    { name: "McLean, VA",        description: "European and domestic car service" },
    { name: "Rosslyn, VA",       description: "Walk-ins and appointments welcome" },
    { name: "Fairfax, VA",       description: "Tire and wheel services" },
  ],
  faq: [
    { question: "Do you work on all car makes and models?", answer: "Yes — we service all makes and models, domestic and imported, including Toyota, Honda, BMW, Ford, Chevy, Hyundai, and more." },
    { question: "Do you offer same-day service?", answer: "For most common services (oil changes, brakes, diagnostics, tires), we offer same-day service when you call ahead. Walk-ins are welcome based on availability." },
    { question: "Is the engine diagnostic fee included in the repair cost?", answer: "Yes — if you proceed with the repair, the diagnostic fee is waived. You only pay for the fix." },
    { question: "Do you offer a warranty on repairs?", answer: "All our repairs come with a 12-month / 12,000-mile warranty on parts and labor." },
    { question: "How do I book an appointment?", answer: "Call us, fill out the contact form on our website, or walk in. We'll confirm your appointment time within the hour." },
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
