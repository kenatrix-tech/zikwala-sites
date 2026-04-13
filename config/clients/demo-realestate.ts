import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Habesha Realty Group",
    tagline: "Your Trusted Real Estate Partner in the DMV",
    phone: "+1 (301) 555-0202",
    email: "info@habesharealtygroup.com",
    address: "456 Georgia Ave NW",
    city: "Washington",
    state: "DC",
    logo: "/clients/demo-realestate/logo.png",
    niche: "realestate",
  },
  theme: {
    primary: "#1D4ED8",
    secondary: "#1E3A8A",
    accent: "#DBEAFE",
    surface: "#F8FAFF",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Habesha Realty Group | Real Estate Agent in Washington DC",
    description:
      "Buy, sell, or rent property in Washington DC, Maryland, and Virginia with a trusted local agent.",
    keywords: [
      "real estate agent Washington DC",
      "DMV realtor",
      "buy home Maryland",
      "sell home Virginia",
      "Ethiopian realtor DC",
    ],
    ogImage: "/clients/demo-realestate/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Listings", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Free Consultation",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Find Your Dream Home in the DMV",
    subheading:
      "Expert real estate guidance for buyers, sellers, and investors in DC, Maryland, and Virginia.",
    cta: { label: "Free Consultation", href: "/contact" },
    secondaryCta: { label: "View Listings", href: "/gallery" },
    image: "/clients/demo-realestate/hero.jpg",
    badge: "Licensed in DC, MD & VA",
    trustPoints: ["Licensed in DC, MD & VA", "Free Consultation", "12+ Years Experience"],
    socialProof: { count: "300+", label: "homes sold across the DMV" },
  },
  services: {
    title: "Real Estate Services",
    subtitle: "Expert guidance at every step of your journey",
    items: [
      {
        name: "Home Buying",
        description:
          "From pre-approval to closing, we guide first-time and experienced buyers through every step.",
        icon: "Home",
      },
      {
        name: "Home Selling",
        description:
          "Strategic pricing, professional staging, and marketing to sell your home fast and at top dollar.",
        icon: "TrendingUp",
      },
      {
        name: "Rental & Investment",
        description:
          "Find income-producing properties or quality rentals in prime DMV locations.",
        icon: "Building2",
      },
      {
        name: "Relocation Services",
        description:
          "Moving to the DMV area? We make your transition seamless with local expertise.",
        icon: "MapPin",
      },
    ],
  },
  gallery: {
    title: "Featured Listings",
    subtitle: "Properties we've helped buy, sell, and rent",
    images: [
      { src: "/clients/demo-realestate/gallery/1.jpg", alt: "Modern townhouse" },
      { src: "/clients/demo-realestate/gallery/2.jpg", alt: "DC condo" },
      { src: "/clients/demo-realestate/gallery/3.jpg", alt: "Maryland home" },
      { src: "/clients/demo-realestate/gallery/4.jpg", alt: "Virginia villa" },
      { src: "/clients/demo-realestate/gallery/5.jpg", alt: "Investment property" },
      { src: "/clients/demo-realestate/gallery/6.jpg", alt: "Luxury apartment" },
    ],
  },
  testimonials: {
    title: "Client Success Stories",
    subtitle: "Trusted by families across the DMV",
    items: [
      {
        name: "Mekdes A.",
        role: "First-time Buyer, Rockville MD",
        text: "They made buying my first home stress-free. Explained everything in detail and got me a great deal.",
        rating: 5,
      },
      {
        name: "Daniel G.",
        role: "Seller, Alexandria VA",
        text: "Sold my home in 12 days above asking price. Exceptional marketing and negotiation.",
        rating: 5,
      },
      {
        name: "Tigist B.",
        role: "Investor, DC",
        text: "Found me a great rental property with strong ROI. Knows the DMV market inside out.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Homes Sold", value: "300+" },
      { label: "Years Experience", value: "12+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Avg Days on Market", value: "14" },
    ],
  },
  about: {
    title: "About Habesha Realty Group",
    story:
      "With over 12 years of experience in the DC, Maryland, and Virginia market, we bring deep local knowledge and a personal touch to every transaction. As part of the Ethiopian community in the DMV, we understand the unique needs of families and investors in our area.",
    image: "/clients/demo-realestate/about.jpg",
    highlights: [
      { label: "Licensed in", value: "DC, MD, VA" },
      { label: "Transactions Closed", value: "300+" },
      { label: "Languages", value: "English, Amharic" },
      { label: "Specialization", value: "Residential & Investment" },
    ],
  },
  contact: {
    title: "Let's Talk Real Estate",
    subtitle: "Schedule your free consultation today.",
    mapEmbed: "https://maps.google.com/maps?q=456+Georgia+Ave+NW,+Washington,+DC&output=embed",
    formEndpoint: "mailto:info@habesharealtygroup.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
}
