import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Kedus Hair Salon & Braiding",
    tagline: "Expert Hair Braiding & Styling in Silver Spring, MD",
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
      "Expert hair braiding, knotless braids, cornrows, locs, and natural hair care in Silver Spring, MD. Walk-ins welcome. Call (301) 495-0114.",
    keywords: [
      "hair braiding Silver Spring MD",
      "knotless braids Silver Spring",
      "African braiding salon Maryland",
      "cornrows Silver Spring MD",
      "natural hair salon Silver Spring",
      "locs Silver Spring Maryland",
      "hair salon Eastern Ave Silver Spring",
      "braiding salon near me MD",
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
      "Silver Spring's trusted hair salon. Braiding, straightening, weave, extensions, and more — for all ages and hair types. Walk-ins welcome.",
    cta: { label: "Book Appointment", href: "/booking" },
    secondaryCta: { label: "View Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    badge: "Silver Spring, MD · 7851 Eastern Ave NW",
    trustPoints: ["Walk-ins Welcome", "Expert Braiders", "All Hair Types"],
    socialProof: { count: "500+", label: "happy clients in Silver Spring & MD" },
  },
  services: {
    title: "Our Services",
    subtitle: "Full-service hair salon for the whole family",
    items: [
      {
        name: "Braiding",
        description:
          "All braid styles — knotless, box braids, cornrows, twists, and more. Any size, any length, for all ages.",
        price: "From $60",
        icon: "Sparkles",
      },
      {
        name: "Hair Straightening",
        description:
          "Relaxers, press & curl, and keratin treatments. Smooth, straight, frizz-free results that last.",
        price: "From $60",
        icon: "Scissors",
      },
      {
        name: "Weave & Extensions",
        description:
          "Sew-in weaves and extensions for added length and volume. Natural-looking finish using quality hair.",
        price: "From $120",
        icon: "Crown",
      },
      {
        name: "Hair Coloring",
        description:
          "Color, highlights, and touch-ups. Vibrant, long-lasting results with professional-grade products.",
        price: "From $80",
        icon: "Palette",
      },
      {
        name: "Wash & Style",
        description:
          "Shampoo, deep condition, blow dry, and style. Clean, healthy, beautiful hair every time.",
        price: "From $50",
        icon: "Droplets",
      },
      {
        name: "Nail Care",
        description:
          "Manicure and pedicure services. Clean, shaped, and polished — hands and feet looking their best.",
        price: "From $35",
        icon: "Heart",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "A glimpse of our work — braiding, styling, weave, and more",
    images: [
      { src: "https://cdn.zikwala.com/demo/beauty/gallery1.jpg", alt: "Hair styling at Kedus Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery2.jpg", alt: "Hair styling at Kedus Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery3.jpg", alt: "Hair styling at Kedus Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery4.jpg", alt: "Hair styling at Kedus Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery5.jpg", alt: "Hair styling at Kedus Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery6.jpg", alt: "Hair styling at Kedus Salon" },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Trusted by hundreds of clients in Silver Spring and across Maryland",
    items: [
      {
        name: "Amara T.",
        role: "Client, Silver Spring MD",
        text: "I've been coming to Kedus for two years and they never disappoint. My knotless braids always come out perfect and last so long. Best braiding salon in Silver Spring!",
        rating: 5,
      },
      {
        name: "Destiny W.",
        role: "Client, Hyattsville MD",
        text: "I drove from Hyattsville and it was absolutely worth it. My cornrows were done so neatly and the price was very fair. I'll definitely be back.",
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
      { label: "Happy Clients", value: "500+" },
      { label: "Years in Business", value: "8+" },
      { label: "5-Star Reviews", value: "120+" },
      { label: "Styles Offered", value: "15+" },
    ],
  },
  about: {
    title: "About Kedus Hair Salon & Braiding",
    story:
      "Kedus Hair Salon & Braiding has been serving the Silver Spring community for over 8 years. Located on Eastern Ave NW, we specialize in African hair braiding, natural hair care, and protective styles for all hair types. Our experienced braiders take pride in every client — making sure you leave looking and feeling your best. We welcome walk-ins and love building long-term relationships with our community.",
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    highlights: [
      { label: "Location", value: "Silver Spring, MD" },
      { label: "Specialty", value: "African Braiding" },
      { label: "Experience", value: "8+ years" },
      { label: "Walk-ins", value: "Welcome" },
    ],
  },
  booking: {
    title: "Book Your Appointment",
    subtitle: "Pick a service, choose your date and time — no payment needed, we'll call to confirm.",
    services: [
      {
        name: "Braiding",
        description: "All braid styles — knotless, box braids, cornrows, twists, and more.",
        price: "From $60",
        priceAmount: 60,
        duration: "1–6 hrs",
        icon: "Sparkles",
      },
      {
        name: "Hair Straightening",
        description: "Relaxers, press & curl, and keratin treatments.",
        price: "From $60",
        priceAmount: 60,
        duration: "1–2 hrs",
        icon: "Scissors",
      },
      {
        name: "Weave & Extensions",
        description: "Sew-in weaves and extensions for added length and volume.",
        price: "From $120",
        priceAmount: 120,
        duration: "2–4 hrs",
        icon: "Crown",
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
        name: "Wash & Style",
        description: "Shampoo, deep condition, blow dry, and style.",
        price: "From $50",
        priceAmount: 50,
        duration: "1–2 hrs",
        icon: "Droplets",
      },
      {
        name: "Nail Care",
        description: "Manicure and pedicure — clean, shaped, and polished.",
        price: "From $35",
        priceAmount: 35,
        duration: "45–60 min",
        icon: "Heart",
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
    bookingFields: {
      date: true,
      time: true,
      timeStep: 30,
      guests: false,
      placeholder: "What style are you looking for? Any questions? (optional)",
    },
  },
  faq: [
    { question: "Do you accept walk-ins?", answer: "Yes! Walk-ins are welcome, but we recommend calling ahead to check availability, especially on weekends." },
    { question: "How long do braids last?", answer: "Knotless and box braids typically last 4–8 weeks with proper care. Cornrows last 2–4 weeks." },
    { question: "Do I need to bring my own hair?", answer: "No — we provide braiding hair. Just let us know your preferred style when booking and we'll have everything ready." },
    { question: "How much do braids cost?", answer: "Prices start at $60 for cornrows and $120 for box braids. Final price depends on length, size, and style. Call us for an exact quote." },
    { question: "How long does it take?", answer: "Cornrows take 1–2 hours. Box braids and knotless braids take 3–6 hours depending on length and size." },
    { question: "Do you do children's hair?", answer: "Yes! We specialize in children's braids and are very patient with young clients." },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
