import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Sparkle Clean Pro",
    tagline: "Professional Cleaning for Homes & Offices",
    phone: "+1 (240) 555-0101",
    email: "info@sparklecleanpro.com",
    address: "123 Maryland Ave",
    city: "Silver Spring",
    state: "MD",
    logo: "/clients/demo-cleaning/logo.png",
    niche: "cleaning",
  },
  theme: {
    primary: "#5C7A5E",
    secondary: "#435C45",
    accent: "#EFF5EF",
    surface: "#F7FBF7",
    onPrimary: "#FFFFFF",
    font: "Poppins",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Sparkle Clean Pro | Professional Cleaning in Silver Spring MD",
    description:
      "Affordable residential and commercial cleaning services in Silver Spring, MD. Book your free estimate today.",
    keywords: [
      "cleaning service Silver Spring",
      "home cleaning Maryland",
      "office cleaning DMV",
      "house cleaning MD",
    ],
    ogImage: "/clients/demo-cleaning/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book Free Estimate",
    ctaHref: "/contact",
  },
  hero: {
    variant: "centered",
    heading: "Your Home, Sparkling Clean",
    subheading:
      "Professional residential & commercial cleaning in the DMV area. Trusted by 500+ families.",
    cta: { label: "Book Free Estimate", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "/clients/demo-cleaning/hero.jpg",
    badge: "Trusted by 500+ Families",
  },
  services: {
    title: "Our Cleaning Services",
    subtitle: "Tailored solutions for every space",
    items: [
      {
        name: "Home Cleaning",
        description:
          "Regular or one-time deep cleaning for your home. We bring all supplies.",
        price: "From $80",
        icon: "Home",
      },
      {
        name: "Office Cleaning",
        description:
          "Keep your workplace spotless and professional. Flexible scheduling available.",
        price: "From $120",
        icon: "Building2",
      },
      {
        name: "Deep Cleaning",
        description:
          "Top-to-bottom intensive cleaning. Perfect for move-in/out or spring cleaning.",
        price: "From $150",
        icon: "Sparkles",
      },
      {
        name: "Post-Construction",
        description:
          "Remove dust, debris, and residue after renovations or construction.",
        price: "From $200",
        icon: "HardHat",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "Before & after results that speak for themselves",
    images: [
      { src: "/clients/demo-cleaning/gallery/1.jpg", alt: "Kitchen cleaning" },
      { src: "/clients/demo-cleaning/gallery/2.jpg", alt: "Living room" },
      { src: "/clients/demo-cleaning/gallery/3.jpg", alt: "Bathroom" },
      { src: "/clients/demo-cleaning/gallery/4.jpg", alt: "Office space" },
      { src: "/clients/demo-cleaning/gallery/5.jpg", alt: "Bedroom" },
      { src: "/clients/demo-cleaning/gallery/6.jpg", alt: "Deep clean" },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Real reviews from real customers",
    items: [
      {
        name: "Sarah M.",
        role: "Homeowner, Rockville MD",
        text: "Sparkle Clean Pro transformed my home! They were thorough, professional, and on time. Highly recommend!",
        rating: 5,
      },
      {
        name: "James K.",
        role: "Office Manager, Bethesda",
        text: "We use them weekly for our office. Consistent quality every single time. Our team loves coming to a clean workspace.",
        rating: 5,
      },
      {
        name: "Liya T.",
        role: "Homeowner, Silver Spring",
        text: "They did our post-renovation clean and it was spotless. Worth every penny.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Happy Clients", value: "500+" },
      { label: "Years Experience", value: "8+" },
      { label: "Cities Served", value: "12" },
      { label: "5-Star Reviews", value: "200+" },
    ],
  },
  about: {
    title: "About Sparkle Clean Pro",
    story:
      "Founded in 2016 in Silver Spring, MD, Sparkle Clean Pro has grown from a one-person operation to a trusted team of certified cleaners serving the entire DMV area. We use eco-friendly products and proven methods to deliver results you can see and feel.",
    image: "/clients/demo-cleaning/about.jpg",
    highlights: [
      { label: "Founded", value: "2016" },
      { label: "Team Size", value: "15 cleaners" },
      { label: "Insured & Bonded", value: "Yes" },
      { label: "Eco-Friendly Products", value: "Yes" },
    ],
  },
  contact: {
    title: "Get Your Free Estimate",
    subtitle:
      "Fill out the form and we'll get back to you within 24 hours.",
    mapEmbed: "",
    formEndpoint: "mailto:info@sparklecleanpro.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
