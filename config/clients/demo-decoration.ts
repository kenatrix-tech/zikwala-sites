import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Eleni Interiors",
    tagline: "Transforming Spaces into Beautiful Experiences",
    phone: "+1 (703) 555-0505",
    email: "hello@eleniinteriors.com",
    address: "88 Wilson Blvd",
    city: "Arlington",
    state: "VA",
    logo: "/clients/demo-decoration/logo.png",
    niche: "decoration",
  },
  theme: {
    primary: "#9333EA",
    secondary: "#7E22CE",
    accent: "#F3E8FF",
    surface: "#FAF5FF",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Eleni Interiors | Interior Decoration in Arlington VA",
    description:
      "Creative interior decoration and event styling services in Arlington, VA and the DMV area. Transform your space today.",
    keywords: [
      "interior decorator Arlington VA",
      "home decoration DMV",
      "event decoration Virginia",
      "interior design Maryland",
      "Ethiopian decorator DC",
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
      "Interior decoration and event styling that blends elegance, culture, and creativity for homes and occasions in the DMV.",
    cta: { label: "Get a Free Quote", href: "/contact" },
    secondaryCta: { label: "View Portfolio", href: "/gallery" },
    image: "/clients/demo-decoration/hero.jpg",
    badge: "100+ Spaces Transformed",
  },
  services: {
    title: "Decoration Services",
    subtitle: "From your living room to your dream event",
    items: [
      {
        name: "Interior Design",
        description:
          "Full-room design consultation, furniture selection, color schemes, and decor sourcing.",
        price: "From $500",
        icon: "Palette",
      },
      {
        name: "Event Decoration",
        description:
          "Weddings, graduations, baby showers, corporate events — stunning setups for every occasion.",
        price: "From $300",
        icon: "Star",
      },
      {
        name: "Home Staging",
        description:
          "Professional staging to make your home sell faster and at a higher price.",
        price: "From $400",
        icon: "Home",
      },
      {
        name: "Color Consultation",
        description:
          "Expert color palette selection for your walls, furniture, and accents.",
        price: "From $150",
        icon: "Droplets",
      },
    ],
  },
  gallery: {
    title: "Portfolio",
    subtitle: "A glimpse of spaces we've brought to life",
    images: [
      { src: "/clients/demo-decoration/gallery/1.jpg", alt: "Living room design" },
      { src: "/clients/demo-decoration/gallery/2.jpg", alt: "Wedding decoration" },
      { src: "/clients/demo-decoration/gallery/3.jpg", alt: "Bedroom styling" },
      { src: "/clients/demo-decoration/gallery/4.jpg", alt: "Event setup" },
      { src: "/clients/demo-decoration/gallery/5.jpg", alt: "Kitchen refresh" },
      { src: "/clients/demo-decoration/gallery/6.jpg", alt: "Dining room" },
    ],
  },
  testimonials: {
    title: "Happy Clients",
    subtitle: "Spaces transformed, people delighted",
    items: [
      {
        name: "Rahel A.",
        role: "Homeowner, Arlington VA",
        text: "Eleni completely transformed my living room. The color palette she chose is perfect. I get compliments every time guests visit.",
        rating: 5,
      },
      {
        name: "Bereket M.",
        role: "Wedding Client, DC",
        text: "Our wedding venue looked absolutely stunning. She understood our vision perfectly and executed it beyond expectations.",
        rating: 5,
      },
      {
        name: "Tsehay G.",
        role: "Homeowner, McLean VA",
        text: "Helped me stage my home before selling. It sold in 5 days over asking price. Best investment I made.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Spaces Designed", value: "100+" },
      { label: "Events Styled", value: "200+" },
      { label: "Years Experience", value: "10+" },
      { label: "Happy Clients", value: "150+" },
    ],
  },
  about: {
    title: "About Eleni Interiors",
    story:
      "Founded by Eleni Haile, an interior designer with a background in Ethiopian art and contemporary design, Eleni Interiors blends cultural aesthetics with modern elegance. Based in Arlington, VA, we serve clients across the DMV who want spaces that tell their story.",
    image: "/clients/demo-decoration/about.jpg",
    highlights: [
      { label: "Founded", value: "2014" },
      { label: "Certified", value: "ASID Member" },
      { label: "Specialization", value: "Residential & Events" },
      { label: "Style", value: "Contemporary & Cultural Fusion" },
    ],
  },
  contact: {
    title: "Let's Design Something Beautiful",
    subtitle: "Tell us about your space or event and we'll get back to you within 24 hours.",
    mapEmbed: "",
    formEndpoint: "mailto:hello@eleniinteriors.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
}
