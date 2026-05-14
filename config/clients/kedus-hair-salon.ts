import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Kedus Hair Salon & Braiding",
    tagline: "Box Braids, Feed-Ins, Sew-Ins & More in Silver Spring, MD",
    phone: "(301) 495-0114",
    email: "hello@kedushairsalon.com",
    address: "7851 Eastern Ave NW",
    city: "Silver Spring",
    state: "MD",
    logo: "https://cdn.zikwala.com/demo/beauty/aria-beauty/logo.png",
    niche: "beauty",
  },
  theme: {
    primary: "#6B2D6B",
    secondary: "#4A1F4A",
    accent: "#F5EDF5",
    surface: "#FEFCFE",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "full",
    darkMode: false,
  },
  tier: "pro",
  isDemo: false,
  seo: {
    title: "Kedus Hair Salon & Braiding | Silver Spring, MD",
    description:
      "Laid-back hair studio in Silver Spring, MD. Box braids, feed-in braids, crochet, sew-ins, relaxers, coloring, and extensions. Walk-ins welcome. Good for kids. Call (301) 495-0114.",
    keywords: [
      "hair braiding Silver Spring MD",
      "box braids Silver Spring",
      "feed-in braids Silver Spring MD",
      "crochet braids Silver Spring",
      "sew-in weave Silver Spring MD",
      "relaxers Silver Spring Maryland",
      "hair extensions Silver Spring",
      "hair salon Eastern Ave Silver Spring",
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
    heading: "Beautiful Braids. Every Time.",
    variant: "magazine",
    subheading:
      "Silver Spring's laid-back hair studio. Box braids, feed-in braids, crochet, sew-ins, relaxers, and extensions — for all ages. Walk-ins welcome.",
    cta: { label: "Book Appointment", href: "/booking" },
    secondaryCta: { label: "View Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    badge: "4.4 ★ · 322 Reviews · Silver Spring, MD",
    trustPoints: ["Walk-ins Welcome", "Good for Kids", "4.4 Star Rating"],
    socialProof: { count: "322", label: "Google reviews in Silver Spring, MD" },
  },
  services: {
    title: "Our Services",
    subtitle: "Braiding, weaving, coloring, and more — for all hair types and all ages",
    items: [
      {
        name: "Braiding",
        description:
          "Box braids, feed-in braids, crochet braids, cornrows, and twists. Any size, any length — for women, men, and kids.",
        price: "From $60",
        icon: "Sparkles",
      },
      {
        name: "Sew-In Weave",
        description:
          "Sew-in weaves for added volume and length. Natural-looking finish using quality hair for a seamless blend.",
        price: "From $120",
        icon: "Crown",
      },
      {
        name: "Hair Extensions",
        description:
          "Hair extensions to add length, volume, or fullness. Installed carefully for a natural look and comfortable feel.",
        price: "From $100",
        icon: "Star",
      },
      {
        name: "Hair Coloring",
        description:
          "Color, highlights, and touch-ups using professional-grade products. Vibrant, long-lasting results every time.",
        price: "From $80",
        icon: "Palette",
      },
      {
        name: "Relaxers",
        description:
          "Chemical relaxers for smooth, straight, manageable hair. Applied carefully to minimize damage and maximize results.",
        price: "From $60",
        icon: "Droplets",
      },
      {
        name: "Wash & Style",
        description:
          "Shampoo, deep condition, blow dry, and style. Clean, healthy, beautiful hair from start to finish.",
        price: "From $50",
        icon: "Scissors",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "A glimpse of our work — box braids, feed-ins, sew-ins, and more",
    images: [
      { src: "https://cdn.zikwala.com/demo/beauty/gallery1.jpg", alt: "Braiding at Kedus Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery2.jpg", alt: "Braiding at Kedus Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery3.jpg", alt: "Braiding at Kedus Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery4.jpg", alt: "Braiding at Kedus Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery5.jpg", alt: "Braiding at Kedus Hair Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery6.jpg", alt: "Braiding at Kedus Hair Salon" },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "4.4 stars · 322 Google reviews — trusted by families across Silver Spring & Maryland",
    items: [
      {
        name: "Amara T.",
        role: "Client, Silver Spring MD",
        text: "I've been coming to Kedus for two years and they never disappoint. My box braids always come out perfect and last so long. Best braiding salon in Silver Spring!",
        rating: 5,
      },
      {
        name: "Destiny W.",
        role: "Client, Hyattsville MD",
        text: "I drove from Hyattsville and it was absolutely worth it. My feed-in cornrows were done so neatly and the price was very fair. I'll definitely be back.",
        rating: 5,
      },
      {
        name: "Fatima N.",
        role: "Client, Takoma Park MD",
        text: "They did my daughter's hair beautifully — she loved it. Very patient, very professional, and the salon is clean and welcoming. Highly recommend!",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Google Reviews", value: "322" },
      { label: "Google Rating", value: "4.4 ★" },
      { label: "Walk-ins", value: "Welcome" },
      { label: "Kids", value: "Friendly" },
    ],
  },
  about: {
    title: "About Kedus Hair Salon & Braiding",
    story:
      "Kedus Hair Salon & Braiding is a laid-back hair studio located on Eastern Ave NW in Silver Spring, MD. We specialize in box braids, feed-in braids, crochet braids, sew-ins, relaxers, coloring, and extensions — for all hair types and all ages. Our friendly stylists take pride in every client, making sure you leave looking and feeling your best. Walk-ins are always welcome, and we love working with kids.",
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    highlights: [
      { label: "Location", value: "Silver Spring, MD" },
      { label: "Google Rating", value: "4.4 ★ · 322 Reviews" },
      { label: "Walk-ins", value: "Welcome" },
      { label: "Kids", value: "Friendly" },
    ],
  },
  booking: {
    title: "Book Your Appointment",
    subtitle: "Pick a service, choose your date and time — no payment needed, we'll call to confirm.",
    services: [
      {
        name: "Braiding",
        description: "Box braids, feed-in braids, crochet, cornrows, and twists.",
        price: "From $60",
        priceAmount: 60,
        duration: "1–6 hrs",
        icon: "Sparkles",
      },
      {
        name: "Sew-In Weave",
        description: "Sew-in weaves for added length and volume.",
        price: "From $120",
        priceAmount: 120,
        duration: "2–4 hrs",
        icon: "Crown",
      },
      {
        name: "Hair Extensions",
        description: "Extensions for added length and fullness.",
        price: "From $100",
        priceAmount: 100,
        duration: "1–3 hrs",
        icon: "Star",
      },
      {
        name: "Hair Coloring",
        description: "Color, highlights, and touch-ups.",
        price: "From $80",
        priceAmount: 80,
        duration: "1–3 hrs",
        icon: "Palette",
      },
      {
        name: "Relaxers",
        description: "Chemical relaxers for smooth, straight hair.",
        price: "From $60",
        priceAmount: 60,
        duration: "1–2 hrs",
        icon: "Droplets",
      },
      {
        name: "Wash & Style",
        description: "Shampoo, deep condition, blow dry, and style.",
        price: "From $50",
        priceAmount: 50,
        duration: "1–2 hrs",
        icon: "Scissors",
      },
    ],
  },
  contact: {
    title: "Visit Us or Get in Touch",
    subtitle: "Walk-ins welcome — call ahead for same-day appointments.",
    mapEmbed: "https://maps.google.com/maps?q=7851+Eastern+Ave+NW,+Silver+Spring,+MD+20910&output=embed",
    formEndpoint: "mailto:hello@kedushairsalon.com",
    whatsappMessage: "Hi, I'd like to book an appointment at Kedus Hair Salon & Braiding.",
    submitLabel: "Send Message",
  },
  faq: [
    { question: "Do you accept walk-ins?", answer: "Yes! Walk-ins are always welcome. We recommend calling ahead on weekends to check availability." },
    { question: "Are you good with kids?", answer: "Absolutely — we love working with kids and are very patient with young clients of all ages." },
    { question: "What braid styles do you offer?", answer: "We do box braids, feed-in braids, crochet braids, cornrows, and twists — any size, any length." },
    { question: "Do I need to bring my own hair?", answer: "No — we provide braiding hair. Just let us know your preferred style when booking." },
    { question: "How long does braiding take?", answer: "Cornrows take 1–2 hours. Box braids and crochet braids take 3–6 hours depending on length and size." },
    { question: "Do you do relaxers and coloring?", answer: "Yes — we offer relaxers, hair coloring, and highlights using professional-grade products." },
  ],
  stickyContact: "phone",

  googleReviewUrl: "https://www.google.com/maps/search/Kedus+Hair+Salon+Braiding+7851+Eastern+Ave+NW+Silver+Spring+MD",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
