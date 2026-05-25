import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Zyluna Beauty",
    tagline: "Hair, Nails & Skin Care in Arlington, VA",
    phone: "+1 (571) 555-0147",
    email: "hello@zylunabeauty.com",
    address: "2847 Crestvale Ln",
    city: "Arlington",
    state: "VA",
    logo: "https://cdn.zikwala.com/demo/beauty/zyluna-beauty/logo.png",
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
  isDemo: true,
  seo: {
    title: "Zyluna Beauty | Hair, Nails & Skin in Arlington, VA",
    description:
      "Premium hair, nail, and skincare services in Arlington, VA. Book your appointment online today. Walk-ins welcome.",
    keywords: [
      "beauty salon Arlington VA",
      "hair salon Arlington VA",
      "nail salon Arlington VA",
      "facial Arlington VA",
      "balayage Arlington VA",
      "lash extensions Arlington VA",
    ],
    ogImage: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book Now",
    ctaHref: "/booking",
  },
  hero: {
    heading: "Look Good. Feel Confident.",
    variant: "magazine",
    subheading:
      "Arlington's go-to studio for hair, nails, and skincare. Expert stylists, relaxing atmosphere, results you'll love.",
    cta: { label: "Book Now", href: "/booking" },
    secondaryCta: { label: "View Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    badge: "Arlington's Premier Studio",
    trustPoints: ["Walk-ins Welcome", "Expert Stylists", "Online Booking"],
    socialProof: { count: "1,200+", label: "happy clients served in Arlington" },
  },
  services: {
    title: "Our Services",
    subtitle: "Everything you need to look and feel your best",
    items: [
      {
        name: "Hair Styling",
        description:
          "Cuts, blowouts, balayage, highlights, and color corrections. Our stylists stay current with the latest trends.",
        price: "From $60",
        icon: "Scissors",
      },
      {
        name: "Nail Care",
        description:
          "Manicures, pedicures, gel, acrylic, and nail art. Relaxing treatments using premium, long-lasting products.",
        price: "From $35",
        icon: "Sparkles",
      },
      {
        name: "Skincare & Facials",
        description:
          "Deep cleansing facials, hydration treatments, and anti-aging therapies tailored to your skin type.",
        price: "From $75",
        icon: "Heart",
      },
      {
        name: "Lash & Brow",
        description:
          "Lash extensions, lifts, brow shaping, tinting, and microblading. Wake up looking polished every day.",
        price: "From $55",
        icon: "Eye",
      },
      {
        name: "Waxing Services",
        description:
          "Full body waxing including Brazilian, legs, arms, and face. Smooth, long-lasting results using premium gentle wax.",
        price: "From $25",
        icon: "Droplets",
      },
      {
        name: "Makeup & Bridal",
        description:
          "Professional makeup for weddings, special occasions, and everyday glam. Airbrush and traditional application available.",
        price: "From $85",
        icon: "Palette",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "Real results from our Arlington studio",
    aspectRatio: "portrait",
    images: [
      { src: "https://cdn.zikwala.com/demo/beauty/gallery1.jpg", alt: "Balayage hair Arlington" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery2.jpg", alt: "Nail art Arlington" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery3.jpg", alt: "Facial treatment Arlington" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery4.jpg", alt: "Lash & Brow Arlington" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery5.jpg", alt: "Waxing Services Arlington" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery6.jpg", alt: "Makeup & BridalArlington" },
    ],
  },
  testimonials: {
    title: "Client Love",
    subtitle: "Hundreds of happy clients in Arlington and beyond",
    items: [
      {
        name: "Keisha B.",
        role: "Regular Client, Arlington VA",
        text: "Zyluna is the only place I trust with my hair. My balayage looks incredible every single time. The studio is so relaxing too.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/beauty/zyluna-beauty/testimonial-1.jpg",
      },
      {
        name: "Sofia R.",
        role: "Client, McLean VA",
        text: "Best nail salon I've ever been to. The gel manicure lasted 4 weeks without chipping. I won't go anywhere else.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/beauty/zyluna-beauty/testimonial-2.jpg",
      },
      {
        name: "Amara J.",
        role: "Client, Bethesda MD",
        text: "I came in for a facial and left glowing. The esthetician was so knowledgeable and my skin has never looked better.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/beauty/zyluna-beauty/testimonial-3.jpg",
      },
    ],
  },
  stats: {
    items: [
      { label: "Happy Clients", value: "1,200+" },
      { label: "Years in Business", value: "7+" },
      { label: "5-Star Reviews", value: "340+" },
      { label: "Services Offered", value: "20+" },
    ],
  },
  about: {
    title: "About Zyluna Beauty",
    story:
      "Zyluna Beauty opened its doors in Arlington in 2018 with one goal — to make every client feel confident and beautiful. Our team of licensed stylists and estheticians bring passion, skill, and care to every appointment. We use only premium, cruelty-free products and stay up to date with the latest techniques so you always leave looking your best.",
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    highlights: [
      { label: "Founded", value: "2017" },
      { label: "Location", value: "Arlington, VA" },
      { label: "Team", value: "6 specialists" },
      { label: "Products", value: "Cruelty-free" },
    ],
  },
  booking: {
    title: "Book Your Appointment",
    subtitle: "Choose a service below, pick your date and time, and secure your spot with a 30% deposit.",
    defaultDepositPercent: 0,
    services: [
      {
        name: "Hair Styling",
        description: "Cuts, blowouts, balayage, highlights, and color corrections.",
        price: "From $60",
        priceAmount: 60,
        duration: "60–120 min",
        icon: "Scissors",
      },
      {
        name: "Nail Care",
        description: "Manicures, pedicures, gel, acrylic, and nail art.",
        price: "From $35",
        priceAmount: 35,
        duration: "45–75 min",
        icon: "Sparkles",
      },
      {
        name: "Skincare & Facial",
        description: "Deep cleansing facials and hydration treatments tailored to your skin.",
        price: "From $75",
        priceAmount: 75,
        duration: "60 min",
        icon: "Heart",
      },
      {
        name: "Lash & Brow",
        description: "Lash extensions, lifts, brow shaping, tinting, and microblading.",
        price: "From $55",
        priceAmount: 55,
        duration: "60–90 min",
        icon: "Eye",
      },
      {
        name: "Waxing",
        description: "Full body waxing with premium, gentle wax for long-lasting results.",
        price: "From $25",
        priceAmount: 25,
        duration: "30–60 min",
        icon: "Droplets",
      },
      {
        name: "Makeup & Bridal",
        description: "Professional makeup for weddings, events, and everyday glam.",
        price: "From $85",
        priceAmount: 85,
        duration: "60–90 min",
        icon: "Palette",
      },
    ],
  },
  contact: {
    title: "Visit Us or Get in Touch",
    subtitle: "Walk-ins welcome — call ahead for same-day appointments.",
    mapEmbed: "https://maps.google.com/maps?q=2847+Crestvale+Ln,+Arlington,+VA&output=embed",
    formEndpoint: "mailto:hello@zylunabeauty.com",
    submitLabel: "Send Message",
  },
  packages: {
    title: "Beauty Packages",
    subtitle: "Bundle and save — treat yourself to the full experience",
    items: [
      {
        name: "Refresh Package",
        description: "A quick pick-me-up for busy schedules.",
        price: "$85",
        features: [
          "Classic manicure",
          "Express facial (30 min)",
          "Brow shaping",
          "Complimentary hand massage",
        ],
      },
      {
        name: "Glow Package",
        description: "Our most loved all-in-one beauty experience.",
        price: "$175",
        badge: "Best Value",
        highlight: true,
        features: [
          "Full facial (60 min)",
          "Gel manicure & pedicure",
          "Lash tint",
          "Brow shaping & tint",
          "Complimentary scalp massage",
        ],
      },
      {
        name: "Bridal Package",
        description: "Look and feel your absolute best on your special day.",
        price: "From $350",
        features: [
          "Bridal hair styling",
          "Airbrush makeup application",
          "Lash extensions",
          "Gel manicure & pedicure",
          "Trial session included",
          "Day-of touch-up kit",
        ],
      },
    ],
  },
  stickyContact: "phone",

  faq: [
    { question: "Do you accept walk-ins?", answer: "Yes! Walk-ins are welcome based on availability. For a guaranteed time slot we recommend booking online or calling ahead, especially on weekends." },
    { question: "How do I book an appointment?", answer: "You can book directly on our website — just pick a service, choose your date and time, and confirm. You can also call us or walk in." },
    { question: "What services do you offer?", answer: "We offer hair styling, nail care, skincare & facials, lash & brow services, waxing, and makeup including bridal packages. See our full services page for details." },
    { question: "Do you offer bridal services?", answer: "Yes — we have a full bridal package covering hair, airbrush makeup, lash extensions, and gel manicure & pedicure, including a trial session. Contact us to plan your bridal experience." },
    { question: "What products do you use?", answer: "We use only premium, cruelty-free products across all services — from hair color to skincare treatments and nail care." },
    { question: "How much does a haircut cost?", answer: "Hair services start from $60 depending on length and style. Color, balayage, and highlights are priced separately. Call us for an exact quote." },
    { question: "Do you do lash extensions?", answer: "Yes — we offer lash extensions, lash lifts, brow shaping, brow tinting, and microblading. Services start from $55." },
    { question: "Is there parking available?", answer: "Yes — free parking is available in the lot at our Crestvale Ln location in Arlington." },
  ],

  googleReviewUrl: "https://g.page/r/zyluna-beauty-studio-arlington/review",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
