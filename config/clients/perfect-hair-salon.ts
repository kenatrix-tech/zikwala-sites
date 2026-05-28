import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Perfect Hair Salon",
    tagline: "Braids, Balayage, Extensions & More in Alexandria, VA",
    phone: "(571) 312-5062",
    email: "hello@perfecthairsalon.com",
    address: "1468 N Beauregard St",
    city: "Alexandria",
    state: "VA",
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
    title: "Perfect Hair Salon | Hair Salon in Alexandria, VA",
    description:
      "Full-service hair salon in Alexandria, VA. Balayage, box braids, hair extensions, haircuts, hairstyling, perms, and body waxing. Walk-ins welcome. Call (571) 312-5062.",
    keywords: [
      "hair salon Alexandria VA",
      "balayage Alexandria Virginia",
      "box braids Alexandria VA",
      "hair extensions Alexandria VA",
      "haircut Alexandria VA",
      "perms Alexandria VA",
      "body waxing Alexandria VA",
      "braids Alexandria Virginia",
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
      "Alexandria's go-to hair salon. Balayage, braids, extensions, haircuts, perms, and body waxing. Walk-ins welcome.",
    cta: { label: "Book Appointment", href: "/booking" },
    secondaryCta: { label: "View Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    badge: "Alexandria, VA · 1468 N Beauregard St",
    trustPoints: ["Walk-ins Welcome", "4.3 Stars on Google", "All Hair Types"],
    socialProof: { count: "35+", label: "happy clients reviewed on Google" },
  },
  services: {
    title: "Our Services",
    subtitle: "Full-service hair salon in Alexandria, VA",
    items: [
      {
        name: "Haircut",
        description:
          "Professional haircuts for men, women, and kids. Clean, precise cuts tailored to your face shape and style.",
        price: "Call for pricing",
        icon: "Scissors",
      },
      {
        name: "Braids & Box Braids",
        description:
          "All braid styles — box braids, knotless braids, cornrows, and more. Any size, any length.",
        price: "Call for pricing",
        icon: "Sparkles",
      },
      {
        name: "Balayage",
        description:
          "Natural-looking color painted onto the hair for a sun-kissed, dimensional finish. Long-lasting and low maintenance.",
        price: "Call for pricing",
        icon: "Palette",
      },
      {
        name: "Hair Extensions",
        description:
          "Add length, volume, and versatility with professional hair extensions. Natural-looking results that blend seamlessly.",
        price: "Call for pricing",
        icon: "Crown",
      },
      {
        name: "Hairstyling",
        description:
          "Blowouts, curls, updos, and everyday styles. Leave the salon looking polished and put-together.",
        price: "Call for pricing",
        icon: "Droplets",
      },
      {
        name: "Perms & Body Waxing",
        description:
          "Perms for lasting curl and wave, plus smooth body waxing services using gentle, quality wax.",
        price: "Call for pricing",
        icon: "Heart",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "A glimpse of our work — braids, balayage, extensions, and more",
    images: [
      { src: "https://cdn.zikwala.com/demo/beauty/gallery1.jpg", alt: "Hair styling at Perfect Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery2.jpg", alt: "Braids at Perfect Hair Salon Alexandria VA" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery3.jpg", alt: "Balayage at Perfect Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery4.jpg", alt: "Hair extensions at Perfect Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery5.jpg", alt: "Hairstyling at Perfect Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery6.jpg", alt: "Box braids at Perfect Hair Salon Alexandria" },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "4.3 stars on Google · Trusted by clients in Alexandria and Northern Virginia",
    items: [
      {
        name: "Keisha M.",
        role: "Client, Alexandria VA",
        text: "Perfect Hair Salon is my go-to place. My balayage came out exactly how I wanted — natural, beautiful, and long-lasting. I always leave happy.",
        rating: 5,
      },
      {
        name: "Tamara J.",
        role: "Client, Arlington VA",
        text: "Best box braids I've ever had. They took their time, the style is clean, and it's lasted so long. I won't go anywhere else.",
        rating: 5,
      },
      {
        name: "Amina B.",
        role: "Client, Alexandria VA",
        text: "Got hair extensions here and they look so natural. The staff are professional and made me feel comfortable the whole time. Highly recommend.",
        rating: 4,
      },
    ],
  },
  stats: {
    items: [
      { label: "Google Reviews", value: "35+" },
      { label: "Google Rating", value: "4.3★" },
      { label: "Services Offered", value: "8+" },
      { label: "Walk-ins", value: "Welcome" },
    ],
  },
  about: {
    title: "About Perfect Hair Salon",
    story:
      "Perfect Hair Salon is a full-service hair salon located on N Beauregard St in Alexandria, VA. Our experienced stylists specialize in balayage, box braids, hair extensions, haircuts, hairstyling, perms, and body waxing. We take pride in every client who walks through our door and are committed to making you look and feel your best. Walk-ins are always welcome.",
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    highlights: [
      { label: "Location", value: "Alexandria, VA" },
      { label: "Phone", value: "(571) 312-5062" },
      { label: "Walk-ins", value: "Welcome" },
      { label: "Restroom", value: "Available" },
    ],
  },
  booking: {
    title: "Book Your Appointment",
    subtitle: "Pick a service, choose your date and time — no payment needed, we'll call to confirm.",
    services: [
      {
        name: "Haircut",
        description: "Professional haircuts for men, women, and kids.",
        price: "Call for pricing",
        priceAmount: 0,
        duration: "30–60 min",
        icon: "Scissors",
      },
      {
        name: "Braids & Box Braids",
        description: "All braid styles — box braids, knotless, cornrows, and more.",
        price: "Call for pricing",
        priceAmount: 0,
        duration: "1–6 hrs",
        icon: "Sparkles",
      },
      {
        name: "Balayage",
        description: "Natural-looking sun-kissed color painted onto the hair.",
        price: "Call for pricing",
        priceAmount: 0,
        duration: "2–4 hrs",
        icon: "Palette",
      },
      {
        name: "Hair Extensions",
        description: "Add length and volume with professional hair extensions.",
        price: "Call for pricing",
        priceAmount: 0,
        duration: "2–4 hrs",
        icon: "Crown",
      },
      {
        name: "Hairstyling",
        description: "Blowouts, curls, updos, and everyday styles.",
        price: "Call for pricing",
        priceAmount: 0,
        duration: "1–2 hrs",
        icon: "Droplets",
      },
      {
        name: "Perms & Body Waxing",
        description: "Perms for lasting curl and wave, plus body waxing services.",
        price: "Call for pricing",
        priceAmount: 0,
        duration: "1–3 hrs",
        icon: "Heart",
      },
    ],
  },
  contact: {
    title: "Visit Us or Get in Touch",
    subtitle: "Walk-ins welcome — call ahead for same-day appointments.",
    mapEmbed: "https://maps.google.com/maps?q=1468+N+Beauregard+St,+Alexandria,+VA+22311&output=embed",
    formEndpoint: "mailto:hello@perfecthairsalon.com",
    whatsappMessage: "Hi, I'd like to book an appointment at Perfect Hair Salon.",
    submitLabel: "Send Message",
  },
  faq: [
    { question: "Do you accept walk-ins?", answer: "Yes! Walk-ins are always welcome. We recommend calling ahead to check availability, especially on busy days." },
    { question: "What services do you offer?", answer: "We offer balayage, box braids, braids, hair extensions, haircuts, hairstyling, perms, and body waxing." },
    { question: "Do you do balayage?", answer: "Yes — we specialize in balayage for a natural, sun-kissed look. Call us to book your color appointment." },
    { question: "Do you do hair extensions?", answer: "Yes — we offer professional hair extensions that blend naturally with your hair for added length and volume." },
    { question: "Do you do body waxing?", answer: "Yes — we offer body waxing services. Call us at (571) 312-5062 for details and availability." },
    { question: "Where are you located?", answer: "We are located at 1468 N Beauregard St, Alexandria, VA 22311. Free restroom available on site." },
  ],
  stickyContact: "phone",

  googleReviewUrl: "https://www.google.com/maps/search/Perfect+Hair+Salon+1468+N+Beauregard+St+Alexandria+VA",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
