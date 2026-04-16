import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Peak Comfort HVAC",
    tagline: "Heating & Cooling Experts in Phoenix, AZ",
    phone: "+1 (602) 555-0418",
    email: "service@peakcomforthvac.com",
    address: "1750 W Baseline Rd",
    city: "Phoenix",
    state: "AZ",
    logo: "https://cdn.zikwala.com/demo/hvac/peak-comfort/logo.png",
    niche: "hvac",
  },
  theme: {
    primary: "#1A5FA8",
    secondary: "#E8500A",
    accent: "#EEF4FC",
    surface: "#F7FAFF",
    onPrimary: "#FFFFFF",
    font: "Inter",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Peak Comfort HVAC | AC Repair & Installation in Phoenix, AZ",
    description:
      "Fast, reliable HVAC repair, installation, and maintenance in Phoenix, AZ. 24/7 emergency service. Licensed & insured. Free estimates.",
    keywords: [
      "HVAC repair Phoenix AZ",
      "AC repair Phoenix",
      "air conditioning installation Phoenix",
      "furnace repair Phoenix AZ",
      "HVAC company Phoenix",
      "emergency AC repair Phoenix",
    ],
    ogImage: "https://cdn.zikwala.com/demo/hvac/hero.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Call Now",
    ctaHref: "tel:+16025550418",
  },
  hero: {
    heading: "Stay Cool in Phoenix. Year-Round.",
    variant: "bold",
    subheading:
      "Fast HVAC repair, installation, and maintenance across Phoenix, AZ. 24/7 emergency service. Same-day appointments available.",
    cta: { label: "Get a Free Estimate", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/hvac/hero.jpg",
    badge: "24/7 Emergency Service",
    trustPoints: ["Same-Day Service", "Licensed & Insured", "Free Estimates"],
    socialProof: { count: "800+", label: "Phoenix homes & businesses served" },
  },
  services: {
    title: "HVAC Services",
    subtitle: "Everything your heating and cooling system needs",
    items: [
      {
        name: "AC Repair",
        description:
          "Fast diagnosis and repair for all AC brands. Same-day service available. We fix it right the first time.",
        icon: "Wrench",
      },
      {
        name: "AC Installation",
        description:
          "New system installation and replacements. We help you choose the right unit for your home and budget.",
        icon: "Wind",
      },
      {
        name: "Heating Repair & Install",
        description:
          "Furnace, heat pump, and mini-split repair and installation. Stay warm when Phoenix nights get cold.",
        icon: "Flame",
      },
      {
        name: "Maintenance Plans",
        description:
          "Regular tune-ups keep your system running efficiently. Prevent breakdowns before the summer heat hits.",
        icon: "Shield",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "HVAC installations and repairs across Phoenix, AZ",
    images: [
      { src: "https://cdn.zikwala.com/demo/hvac/gallery1.jpg", alt: "AC installation Phoenix AZ" },
      { src: "https://cdn.zikwala.com/demo/hvac/gallery2.jpg", alt: "HVAC repair Phoenix" },
      { src: "https://cdn.zikwala.com/demo/hvac/gallery3.jpg", alt: "Commercial HVAC Phoenix" },
      { src: "https://cdn.zikwala.com/demo/hvac/gallery4.jpg", alt: "Duct cleaning Phoenix AZ" },
      { src: "https://cdn.zikwala.com/demo/hvac/gallery5.jpg", alt: "Mini split installation" },
      { src: "https://cdn.zikwala.com/demo/hvac/gallery6.jpg", alt: "HVAC maintenance Phoenix" },
    ],
  },
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Trusted by Phoenix homeowners and businesses",
    items: [
      {
        name: "Tom W.",
        role: "Homeowner, Scottsdale AZ",
        text: "AC went out on a Friday night in July. Peak Comfort was at my house by 9am Saturday. Fixed in 2 hours. Lifesavers.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/hvac/peak-comfort/testimonial-1.jpg",
      },
      {
        name: "Linda H.",
        role: "Property Manager, Phoenix AZ",
        text: "I manage 12 units and use Peak Comfort exclusively. Always professional, always on time, always fair pricing.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/hvac/peak-comfort/testimonial-2.jpg",
      },
      {
        name: "Carlos M.",
        role: "Business Owner, Tempe AZ",
        text: "Replaced our entire commercial HVAC system. Clean work, great price, and finished on schedule. Highly recommend.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/hvac/peak-comfort/testimonial-3.jpg",
      },
    ],
  },
  stats: {
    items: [
      { label: "Customers Served", value: "800+" },
      { label: "Years in Business", value: "11+" },
      { label: "5-Star Reviews", value: "200+" },
      { label: "Response Time", value: "< 2 hrs" },
    ],
  },
  about: {
    title: "About Peak Comfort HVAC",
    story:
      "Peak Comfort HVAC has been keeping Phoenix homes and businesses comfortable since 2013. We're a family-owned company with a team of fully licensed and insured technicians. We believe in honest pricing, clean work, and getting the job done right the first time. No upsells, no surprises — just reliable HVAC service you can count on.",
    image: "https://cdn.zikwala.com/demo/hvac/peak-comfort/owner.jpg",
    highlights: [
      { label: "Founded", value: "2013" },
      { label: "License", value: "AZ ROC #324891" },
      { label: "Coverage", value: "Phoenix & Metro AZ" },
      { label: "Emergency", value: "24/7 available" },
    ],
  },
  contact: {
    title: "Get a Free Estimate",
    subtitle: "Call us or fill out the form — we respond within 1 hour.",
    mapEmbed: "https://maps.google.com/maps?q=1750+W+Baseline+Rd,+Phoenix,+AZ&output=embed",
    formEndpoint: "mailto:service@peakcomforthvac.com",
  },
  googleReviewUrl: "https://g.page/r/peak-comfort-hvac-phoenix/review",
  social: {
    facebook: "https://facebook.com",
  },
}
