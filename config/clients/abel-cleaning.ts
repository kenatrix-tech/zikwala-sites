import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Abel Cleaning Services",
    tagline: "Professional Home & Office Cleaning in Dallas, TX",
    phone: "+1 (214) 555-0192",
    email: "info@abelcleaning.com",
    address: "4521 Gaston Ave",
    city: "Dallas",
    state: "TX",
    logo: "https://cdn.zikwala.com/demo/cleaning/abel-cleaning/logo.png",
    niche: "cleaning",
  },
  theme: {
    primary: "#1B7A4A",
    secondary: "#145C38",
    accent: "#E8F5EE",
    surface: "#F4FBF7",
    onPrimary: "#FFFFFF",
    font: "Poppins",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Abel Cleaning Services | Home & Office Cleaning in Dallas, TX",
    description:
      "Trusted home and office cleaning in Dallas, TX. Eco-friendly products, reliable team, satisfaction guaranteed. Book your clean today.",
    keywords: [
      "house cleaning Dallas TX",
      "cleaning service Dallas",
      "maid service Dallas",
      "office cleaning Dallas",
      "deep cleaning Dallas TX",
      "move out cleaning Dallas",
    ],
    ogImage: "https://cdn.zikwala.com/demo/cleaning/hero.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Get a Free Quote",
    ctaHref: "/contact",
  },
  hero: {
    heading: "A Cleaner Home, A Happier Life",
    variant: "split",
    subheading:
      "Professional cleaning services for homes and offices across Dallas, TX. Eco-friendly, reliable, and satisfaction guaranteed.",
    cta: { label: "Get a Free Quote", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/cleaning/hero.jpg",
    badge: "Serving Dallas Since 2015",
    trustPoints: ["Eco-Friendly Products", "Insured & Bonded", "Satisfaction Guaranteed"],
    socialProof: { count: "500+", label: "homes cleaned across Dallas" },
  },
  services: {
    title: "Cleaning Services",
    subtitle: "Tailored cleaning solutions for every need",
    items: [
      {
        name: "Regular Home Cleaning",
        description:
          "Weekly, bi-weekly, or monthly recurring cleans. Dusting, vacuuming, mopping, bathrooms, and kitchen — top to bottom.",
        icon: "Home",
      },
      {
        name: "Deep Cleaning",
        description:
          "A thorough top-to-bottom clean for homes that need extra attention. Perfect for first-time cleans or spring cleaning.",
        icon: "Sparkles",
      },
      {
        name: "Move-In / Move-Out",
        description:
          "Leave your old place spotless or start fresh in your new home. We handle everything so you don't have to.",
        icon: "Truck",
      },
      {
        name: "Office Cleaning",
        description:
          "Keep your workspace clean and professional. Flexible scheduling — evenings or weekends to avoid disruption.",
        icon: "Building2",
      },
    ],
  },
  gallery: {
    title: "Before & After",
    subtitle: "Real results from real Dallas homes",
    images: [
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery1.jpg", alt: "Kitchen deep clean Dallas" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery2.jpg", alt: "Bathroom cleaning Dallas" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery3.jpg", alt: "Living room cleaning" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery4.jpg", alt: "Office cleaning Dallas" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery5.jpg", alt: "Move-out cleaning Dallas" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery6.jpg", alt: "Bedroom cleaning Dallas" },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Trusted by hundreds of Dallas families and businesses",
    items: [
      {
        name: "Sarah M.",
        role: "Homeowner, Plano TX",
        text: "Abel's team is incredible. My house has never looked this clean. They even organized my pantry without being asked!",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/cleaning/abel-cleaning/testimonial-1.jpg",
      },
      {
        name: "James T.",
        role: "Office Manager, Dallas TX",
        text: "We use them every week for our office. Always on time, thorough, and professional. Highly recommend.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/cleaning/abel-cleaning/testimonial-2.jpg",
      },
      {
        name: "Priya K.",
        role: "Renter, Irving TX",
        text: "Booked for a move-out clean and got my full deposit back. Worth every penny. Will use again.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/cleaning/abel-cleaning/testimonial-3.jpg",
      },
    ],
  },
  stats: {
    items: [
      { label: "Homes Cleaned", value: "500+" },
      { label: "Years in Business", value: "9+" },
      { label: "Satisfaction Rate", value: "99%" },
      { label: "5-Star Reviews", value: "120+" },
    ],
  },
  about: {
    title: "About Abel Cleaning Services",
    story:
      "Founded in 2015, Abel Cleaning Services has been keeping Dallas homes and offices spotless for nearly a decade. We use only eco-friendly, non-toxic products that are safe for kids and pets. Our team is fully insured, background-checked, and trained to deliver consistent results every visit.",
    image: "https://cdn.zikwala.com/demo/cleaning/abel-cleaning/owner.jpg",
    highlights: [
      { label: "Founded", value: "2015" },
      { label: "Team Size", value: "8 cleaners" },
      { label: "Products", value: "Eco-friendly" },
      { label: "Coverage", value: "Dallas & DFW" },
    ],
  },
  contact: {
    title: "Get a Free Quote",
    subtitle: "Tell us about your space and we'll get back to you within 2 hours.",
    mapEmbed: "https://maps.google.com/maps?q=4521+Gaston+Ave,+Dallas,+TX&output=embed",
    formEndpoint: "mailto:info@abelcleaning.com",
  },
  googleReviewUrl: "https://g.page/r/abel-cleaning-dallas/review",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
