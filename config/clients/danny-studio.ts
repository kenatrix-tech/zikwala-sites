import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Danny Studio",
    tagline: "Haircuts, Braids, Color & More in Silver Spring, MD",
    phone: "(240) 839-7988",
    email: "hello@dannystudio.com",
    address: "959 Bonifant St",
    city: "Silver Spring",
    state: "MD",
    logo: "https://cdn.zikwala.com/demo/beauty/aria-beauty/logo.png",
    niche: "beauty",
  },
  theme: {
    primary: "#A0537E",
    secondary: "#7A3A5E",
    accent: "#FDF0F7",
    surface: "#FFFCFE",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "full",
    darkMode: false,
  },
  tier: "pro",
  isDemo: false,
  seo: {
    title: "Danny Studio | Hair Salon in Silver Spring, MD",
    description:
      "Relaxed full-service hair salon in Silver Spring, MD. Haircuts, braiding, coloring, waxing, and dreadlocks. Walk-ins welcome. Good for kids. Call (240) 839-7988.",
    keywords: [
      "hair salon Silver Spring MD",
      "haircut Silver Spring Maryland",
      "braiding Silver Spring MD",
      "hair coloring Silver Spring",
      "waxing Silver Spring MD",
      "dreadlocks Silver Spring",
      "walk-in hair salon Silver Spring",
      "kids haircut Silver Spring MD",
    ],
    ogImage: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Book Now", href: "/booking" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book Now",
    ctaHref: "/booking",
  },
  hero: {
    heading: "Look Good. Feel Good.",
    variant: "magazine",
    subheading:
      "Silver Spring's relaxed hair salon. Haircuts, braiding, coloring, waxing, and dreadlocks — for the whole family. Walk-ins welcome.",
    cta: { label: "Book Appointment", href: "/booking" },
    secondaryCta: { label: "View Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    badge: "Silver Spring, MD · 959 Bonifant St",
    trustPoints: ["Walk-ins Welcome", "Good for Kids", "All Hair Types"],
    socialProof: { count: "300+", label: "happy clients in Silver Spring & MD" },
  },
  services: {
    title: "Our Services",
    subtitle: "Full-service hair salon for the whole family",
    items: [
      {
        name: "Haircuts",
        description:
          "Professional haircuts for men, women, and kids. Clean, precise cuts tailored to your face shape and style.",
        price: "From $25",
        icon: "Scissors",
      },
      {
        name: "Braiding",
        description:
          "All braid styles — knotless braids, box braids, cornrows, twists, and more. Any size, any length.",
        price: "From $60",
        icon: "Sparkles",
      },
      {
        name: "Hair Coloring",
        description:
          "Color, highlights, and touch-ups. Vibrant, long-lasting results with professional-grade products.",
        price: "From $80",
        icon: "Palette",
      },
      {
        name: "Dreadlocks",
        description:
          "Starter dreadlocks, retwisting, and maintenance. We take care of your locs at every stage of growth.",
        price: "From $80",
        icon: "Crown",
      },
      {
        name: "Waxing",
        description:
          "Face, eyebrow, and body waxing. Smooth, clean results using quality wax that's gentle on skin.",
        price: "From $15",
        icon: "Heart",
      },
      {
        name: "Wash & Style",
        description:
          "Shampoo, deep condition, blow dry, and style. Clean, healthy, beautiful hair every time.",
        price: "From $50",
        icon: "Droplets",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "A glimpse of our work — cuts, braiding, color, and more",
    images: [
      { src: "https://cdn.zikwala.com/demo/beauty/gallery1.jpg", alt: "Hair styling at Danny Studio" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery2.jpg", alt: "Hair styling at Danny Studio" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery3.jpg", alt: "Hair styling at Danny Studio" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery4.jpg", alt: "Hair styling at Danny Studio" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery5.jpg", alt: "Hair styling at Danny Studio" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery6.jpg", alt: "Hair styling at Danny Studio" },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Trusted by hundreds of clients in Silver Spring and across Maryland",
    items: [
      {
        name: "Keisha M.",
        role: "Client, Silver Spring MD",
        text: "Danny Studio is my go-to salon. The vibe is so relaxed and welcoming. My color came out exactly how I wanted — I always leave happy.",
        rating: 5,
      },
      {
        name: "Marcus J.",
        role: "Client, Wheaton MD",
        text: "Best haircut I've had in years. Clean, sharp, and done quickly. The staff are friendly and professional. I bring my son here too.",
        rating: 5,
      },
      {
        name: "Amina B.",
        role: "Client, Takoma Park MD",
        text: "My braids look amazing every single time. Very patient and thorough. I love that they're good with kids too — my daughter gets her hair done here.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Happy Clients", value: "300+" },
      { label: "Services Offered", value: "10+" },
      { label: "5-Star Reviews", value: "80+" },
      { label: "Walk-ins", value: "Welcome" },
    ],
  },
  about: {
    title: "About Danny Studio",
    story:
      "Danny Studio is a relaxed, welcoming hair salon located on Bonifant St in Silver Spring, MD. Our experienced stylists specialize in haircuts, braiding, coloring, waxing, and dreadlocks — for men, women, and kids. We believe everyone deserves to look and feel their best, and we take pride in every client who walks through our door. Walk-ins are always welcome.",
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    highlights: [
      { label: "Location", value: "Silver Spring, MD" },
      { label: "Hours", value: "Closes 7:30 PM" },
      { label: "Walk-ins", value: "Welcome" },
      { label: "Kids", value: "Friendly" },
    ],
  },
  booking: {
    title: "Book Your Appointment",
    subtitle: "Pick a service, choose your date and time — no payment needed, we'll call to confirm.",
    services: [
      {
        name: "Haircuts",
        description: "Professional haircuts for men, women, and kids.",
        price: "From $25",
        priceAmount: 25,
        duration: "30–60 min",
        icon: "Scissors",
      },
      {
        name: "Braiding",
        description: "All braid styles — knotless, box braids, cornrows, twists, and more.",
        price: "From $60",
        priceAmount: 60,
        duration: "1–6 hrs",
        icon: "Sparkles",
      },
      {
        name: "Hair Coloring",
        description: "Color, highlights, and touch-ups with professional-grade products.",
        price: "From $80",
        priceAmount: 80,
        duration: "1–3 hrs",
        icon: "Palette",
      },
      {
        name: "Dreadlocks",
        description: "Starter dreadlocks, retwisting, and loc maintenance.",
        price: "From $80",
        priceAmount: 80,
        duration: "1–3 hrs",
        icon: "Crown",
      },
      {
        name: "Waxing",
        description: "Face, eyebrow, and body waxing.",
        price: "From $15",
        priceAmount: 15,
        duration: "15–30 min",
        icon: "Heart",
      },
      {
        name: "Wash & Style",
        description: "Shampoo, deep condition, blow dry, and style.",
        price: "From $50",
        priceAmount: 50,
        duration: "1–2 hrs",
        icon: "Droplets",
      },
    ],
  },
  contact: {
    title: "Visit Us or Get in Touch",
    subtitle: "Walk-ins welcome — call ahead for same-day appointments.",
    mapEmbed: "https://maps.google.com/maps?q=959+Bonifant+St,+Silver+Spring,+MD+20910&output=embed",
    formEndpoint: "mailto:hello@dannystudio.com",
    whatsappMessage: "Hi, I'd like to book an appointment at Danny Studio.",
    submitLabel: "Send Message",
    bookingFields: {
      date: true,
      time: true,
      timeStep: 30,
      guests: false,
      placeholder: "What service are you looking for? Any questions? (optional)",
    },
  },
  faq: [
    { question: "Do you accept walk-ins?", answer: "Yes! Walk-ins are always welcome. We recommend calling ahead on weekends to check availability." },
    { question: "Are you good with kids?", answer: "Absolutely — we love working with kids and are patient and gentle with young clients of all ages." },
    { question: "What time do you close?", answer: "We close at 7:30 PM. Call us to confirm same-day availability." },
    { question: "Do you do both men and women?", answer: "Yes — we serve men, women, and children. Haircuts, braiding, coloring, and more for everyone." },
    { question: "How much does a haircut cost?", answer: "Haircuts start from $25 depending on length and style. Call us for an exact quote." },
    { question: "Do you do waxing?", answer: "Yes — we offer eyebrow, face, and body waxing starting from $15." },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
