import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Abebe Tax Solutions",
    tagline: "Accurate Tax Filing & Financial Planning",
    phone: "+1 (301) 555-0404",
    email: "info@abebetax.com",
    address: "321 Colesville Rd",
    city: "Silver Spring",
    state: "MD",
    logo: "/clients/demo-tax/logo.png",
    niche: "tax",
  },
  theme: {
    primary: "#15803D",
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
    title: "Abebe Tax Solutions | Tax Preparation in Silver Spring MD",
    description:
      "Professional tax preparation, bookkeeping, and financial planning for individuals and small businesses in Maryland.",
    keywords: [
      "tax preparation Silver Spring",
      "tax service Maryland",
      "small business accounting DMV",
      "Ethiopian tax preparer MD",
      "IRS help Maryland",
    ],
    ogImage: "/clients/demo-tax/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book Appointment",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Tax Filing Made Simple",
    subheading:
      "Professional tax preparation for individuals, families, and small businesses in the DMV area. Get the maximum refund you deserve.",
    cta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "/clients/demo-tax/hero.jpg",
    badge: "15+ Years of Tax Expertise",
  },
  services: {
    title: "Tax & Financial Services",
    subtitle: "Everything you need to stay compliant and maximize returns",
    items: [
      {
        name: "Individual Tax Filing",
        description:
          "Accurate federal and state tax returns for individuals and families. Maximize your refund.",
        price: "From $75",
        icon: "FileText",
      },
      {
        name: "Small Business Taxes",
        description:
          "LLC, S-Corp, and sole proprietor tax filing with strategic planning to minimize liability.",
        price: "From $250",
        icon: "Building2",
      },
      {
        name: "Bookkeeping",
        description:
          "Monthly bookkeeping and financial records management so you're always audit-ready.",
        price: "From $150/mo",
        icon: "BookOpen",
      },
      {
        name: "IRS Audit Support",
        description:
          "Representation and guidance if you receive an IRS notice or audit request.",
        price: "Call for pricing",
        icon: "Shield",
      },
    ],
  },
  gallery: {
    title: "Our Office",
    subtitle: "A welcoming space for all your financial needs",
    images: [
      { src: "/clients/demo-tax/gallery/1.jpg", alt: "Office front" },
      { src: "/clients/demo-tax/gallery/2.jpg", alt: "Consultation room" },
      { src: "/clients/demo-tax/gallery/3.jpg", alt: "Reception" },
      { src: "/clients/demo-tax/gallery/4.jpg", alt: "Team" },
    ],
  },
  testimonials: {
    title: "What Clients Say",
    subtitle: "Trusted by families and businesses across Maryland",
    items: [
      {
        name: "Hiwot D.",
        role: "Individual Client, Silver Spring",
        text: "Got the biggest refund I've ever had. They found deductions I didn't even know I qualified for.",
        rating: 5,
      },
      {
        name: "Solomon T.",
        role: "Small Business Owner",
        text: "Handles all my business taxes and bookkeeping. Saves me hours every month and I never worry about compliance.",
        rating: 5,
      },
      {
        name: "Meron K.",
        role: "Family, Rockville MD",
        text: "Friendly, professional, and affordable. We've been coming for 5 years and wouldn't go anywhere else.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Returns Filed", value: "5,000+" },
      { label: "Years Experience", value: "15+" },
      { label: "Avg Refund Increase", value: "23%" },
      { label: "Client Retention", value: "94%" },
    ],
  },
  about: {
    title: "About Abebe Tax Solutions",
    story:
      "Established in 2009 in Silver Spring, MD, Abebe Tax Solutions was founded to provide affordable, reliable tax services to the Ethiopian and broader immigrant community in the DMV. We understand the unique tax situations of families with international ties, small business owners, and first-generation Americans.",
    image: "/clients/demo-tax/about.jpg",
    highlights: [
      { label: "Founded", value: "2009" },
      { label: "Certified", value: "IRS Enrolled Agent" },
      { label: "Languages", value: "English, Amharic" },
      { label: "Specialization", value: "Individual & Small Business" },
    ],
  },
  contact: {
    title: "Book Your Tax Appointment",
    subtitle:
      "Available year-round. Tax season slots fill fast — book early.",
    mapEmbed: "",
    formEndpoint: "mailto:info@abebetax.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
