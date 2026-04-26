import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Eleni Interiors",
    tagline: "Interior Design Studio in Arlington, VA",
    phone: "+1 (703) 555-0505",
    email: "hello@eleniinteriors.com",
    address: "88 Wilson Blvd",
    city: "Arlington",
    state: "VA",
    logo: "/clients/demo-decoration/logo.png",
    niche: "decoration",
  },
  theme: {
    primary: "#5C7A5E",
    secondary: "#435C45",
    accent: "#EFF5EF",
    surface: "#F7FBF7",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Eleni Interiors | Interior Design Studio in Arlington VA",
    description:
      "Full-service interior design and home staging in Arlington, VA and the DMV. Custom spaces that blend elegance, comfort, and your personal style.",
    keywords: [
      "interior designer Arlington VA",
      "interior design DMV",
      "home staging Virginia",
      "interior decorator Maryland",
      "home design consultation DC",
    ],
    ogImage: "/clients/demo-decoration/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Get a Quote",
    ctaHref: "/contact",
  },
  hero: {
    variant: "split",
    heading: "Design Spaces You Love to Live In",
    subheading:
      "Full-service interior design for homes and offices in the DMV. Elegant, functional spaces tailored to your lifestyle.",
    cta: { label: "Get a Free Quote", href: "/contact" },
    secondaryCta: { label: "View Portfolio", href: "/gallery" },
    image: "/clients/demo-decoration/hero.jpg",
    badge: "100+ Spaces Transformed",
    trustPoints: ["ASID Certified Designer", "Free Initial Consultation", "Full-Service Design", "Arlington, VA"],
  },
  services: {
    title: "Interior Design Services",
    subtitle: "From a single room to your entire home — we handle every detail",
    items: [
      {
        name: "Full Interior Design",
        description:
          "End-to-end design for any room — space planning, furniture selection, color schemes, and decor sourcing.",
        price: "From $500",
        icon: "Palette",
      },
      {
        name: "Home Staging",
        description:
          "Professional staging to make your home sell faster and at a higher price. Proven results across the DMV.",
        price: "From $400",
        icon: "Home",
      },
      {
        name: "Room Makeover",
        description:
          "Quick, focused transformation of a single room. Ideal for living rooms, bedrooms, and home offices.",
        price: "From $300",
        icon: "Star",
      },
      {
        name: "Color Consultation",
        description:
          "Expert color palette selection for your walls, furniture, and accents. In-home or virtual sessions available.",
        price: "From $150",
        icon: "Droplets",
      },
    ],
  },
  gallery: {
    title: "Portfolio",
    subtitle: "A glimpse of spaces we've brought to life",
    images: [
      { src: "/clients/demo-decoration/gallery/1.jpg", alt: "Living room redesign Arlington VA" },
      { src: "/clients/demo-decoration/gallery/2.jpg", alt: "Modern bedroom styling" },
      { src: "/clients/demo-decoration/gallery/3.jpg", alt: "Home office design DMV" },
      { src: "/clients/demo-decoration/gallery/4.jpg", alt: "Kitchen refresh Virginia" },
      { src: "/clients/demo-decoration/gallery/5.jpg", alt: "Dining room transformation" },
      { src: "/clients/demo-decoration/gallery/6.jpg", alt: "Home staging Arlington VA" },
    ],
  },
  testimonials: {
    title: "Happy Clients",
    subtitle: "Spaces transformed, people delighted",
    items: [
      {
        name: "Rahel A.",
        role: "Homeowner, Arlington VA",
        text: "Eleni completely transformed my living room. The color palette she chose is perfect and my space finally feels like me. I get compliments every time guests visit.",
        rating: 5,
      },
      {
        name: "Michael T.",
        role: "Homeowner, McLean VA",
        text: "She staged my home before listing and it sold in 5 days over asking price. Best investment I made in the whole selling process.",
        rating: 5,
      },
      {
        name: "Tsehay G.",
        role: "Client, Bethesda MD",
        text: "Hired Eleni for a full bedroom and home office redesign. The attention to detail was incredible — she understood exactly what I wanted.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Spaces Designed", value: "100+" },
      { label: "Years Experience", value: "10+" },
      { label: "5-Star Reviews", value: "80+" },
      { label: "Happy Clients", value: "150+" },
    ],
  },
  about: {
    title: "About Eleni Interiors",
    story:
      "Founded by Eleni Haile, an ASID-certified interior designer with a background in art and contemporary design, Eleni Interiors blends cultural aesthetics with modern elegance. Based in Arlington, VA, we serve homeowners and businesses across the DMV who want spaces that are beautiful, functional, and deeply personal.",
    image: "/clients/demo-decoration/about.jpg",
    highlights: [
      { label: "Founded", value: "2014" },
      { label: "Certified", value: "ASID Member" },
      { label: "Specialization", value: "Residential & Commercial" },
      { label: "Style", value: "Contemporary & Cultural Fusion" },
    ],
  },
  packages: {
    title: "Design Packages",
    subtitle: "Simple, transparent pricing for every home and budget",
    items: [
      {
        name: "Consultation",
        description: "One session to assess your space and get expert direction.",
        price: "$150",
        features: [
          "2-hour in-home visit",
          "Color & layout recommendations",
          "Shopping list provided",
          "Virtual follow-up included",
        ],
      },
      {
        name: "Room Design",
        description: "Complete design for one room from concept to finish.",
        price: "From $500",
        badge: "Most Popular",
        highlight: true,
        features: [
          "Full design concept board",
          "Furniture & decor sourcing",
          "Color palette selection",
          "Shopping & vendor coordination",
          "2 revision rounds",
          "Installation guidance",
        ],
      },
      {
        name: "Full Home Design",
        description: "End-to-end design for your entire home.",
        price: "Custom Quote",
        features: [
          "All rooms covered",
          "Space planning & layout",
          "Full furniture sourcing",
          "Contractor coordination",
          "Unlimited consultations",
          "Project management",
        ],
      },
    ],
  },
  contact: {
    title: "Let's Design Something Beautiful",
    subtitle: "Tell us about your space and we'll get back to you within 24 hours.",
    mapEmbed: "https://maps.google.com/maps?q=88+Wilson+Blvd,+Arlington,+VA&output=embed",
    formEndpoint: "mailto:hello@eleniinteriors.com",
  },
  faq: [
    { question: "What is included in a free consultation?", answer: "Our free initial consultation is a 20-minute call where we discuss your space, style goals, and budget. It helps us recommend the right package for your needs with no obligation." },
    { question: "How long does a full room design take?", answer: "A single room design typically takes 2–4 weeks from consultation to final concept delivery, depending on the complexity of the space and sourcing timeline." },
    { question: "Do you work with a specific furniture style?", answer: "We work across all styles — modern, transitional, traditional, and cultural fusion. We design around your preferences and lifestyle, not ours." },
    { question: "Can you work within a tight budget?", answer: "Absolutely. We work with a range of budgets and can source from both high-end and affordable retailers. During the consultation we establish a clear budget and stick to it." },
    { question: "Do you offer virtual design services?", answer: "Yes — we offer virtual consultations and e-design packages for clients outside the Arlington area or who prefer remote collaboration." },
    { question: "What areas do you serve?", answer: "We serve Arlington, Alexandria, McLean, Bethesda, Washington DC, and the broader DMV metropolitan area." },
  ],
  googleReviewUrl: "https://g.page/r/eleni-interiors-arlington/review",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
}
