import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "DMZ Hair Salon & Braiding",
    tagline: "Hair Styling, Braiding & Weaving in Silver Spring, MD",
    phone: "(202) 819-9265",
    email: "hello@dmzhairsalon.com",
    address: "7908 Georgia Ave",
    city: "Silver Spring",
    state: "MD",
    logo: "https://cdn.zikwala.com/demo/beauty/aria-beauty/logo.png",
    niche: "beauty",
  },
  theme: {
    primary: "#7A2D4A",
    secondary: "#571F34",
    accent: "#FDF0F4",
    surface: "#FFFCFD",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "full",
    darkMode: false,
  },
  tier: "pro",
  isDemo: false,
  seo: {
    title: "DMZ Hair Salon & Braiding | Silver Spring, MD",
    description:
      "Full-service hair salon in Silver Spring, MD. Haircuts, braiding, weaving, coloring, extensions, straightening, and waxing. 4.9 stars · 483 reviews. Walk-ins welcome. Call (202) 819-9265.",
    keywords: [
      "hair salon Silver Spring MD",
      "braiding Silver Spring Maryland",
      "hair extensions Silver Spring",
      "hair coloring Silver Spring MD",
      "hair straightening Silver Spring",
      "waxing Silver Spring MD",
      "walk-in hair salon Georgia Ave Silver Spring",
      "DMZ hair salon Silver Spring",
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
    heading: "Your Best Hair. Every Visit.",
    variant: "magazine",
    subheading:
      "Silver Spring's trusted hair salon. Braiding, weaving, coloring, extensions, and more — for all hair types. Walk-ins welcome.",
    cta: { label: "Book Appointment", href: "/booking" },
    secondaryCta: { label: "View Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    badge: "4.9 ★ · 483 Reviews · Silver Spring, MD",
    trustPoints: ["Walk-ins Welcome", "Good for Kids", "4.9 Star Rating"],
    socialProof: { count: "483", label: "five-star reviews on Google" },
  },
  services: {
    title: "Our Services",
    subtitle: "All hair types, all styles — coarse, fine, straight, or curly",
    items: [
      {
        name: "Haircuts & Styling",
        description:
          "Professional haircuts and blowouts for men, women, and kids. Clean, precise, and tailored to your face shape and style.",
        price: "From $25",
        icon: "Scissors",
      },
      {
        name: "Braiding",
        description:
          "All braid styles — knotless braids, box braids, cornrows, twists, and more. Gentle technique, clean parts, perfect finish.",
        price: "From $60",
        icon: "Sparkles",
      },
      {
        name: "Weave & Extensions",
        description:
          "Sew-in weaves and hair extensions for added length and volume. Natural-looking results using quality hair.",
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
        name: "Hair Straightening",
        description:
          "Relaxers, press & curl, and keratin treatments. Smooth, straight, frizz-free results that last.",
        price: "From $60",
        icon: "Droplets",
      },
      {
        name: "Body Waxing",
        description:
          "Face, eyebrow, and body waxing. Smooth, clean results using quality wax that is gentle on skin.",
        price: "From $15",
        icon: "Heart",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "A glimpse of our work — braiding, weaving, styling, and more",
    images: [
      { src: "https://cdn.zikwala.com/demo/beauty/gallery1.jpg", alt: "Hair styling at DMZ Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery2.jpg", alt: "Hair styling at DMZ Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery3.jpg", alt: "Hair styling at DMZ Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery4.jpg", alt: "Hair styling at DMZ Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery5.jpg", alt: "Hair styling at DMZ Salon" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery6.jpg", alt: "Hair styling at DMZ Salon" },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "4.9 stars across 483 Google reviews — trusted by the Silver Spring community",
    items: [
      {
        name: "Fatima A.",
        role: "Client, Silver Spring MD",
        text: "Best braiding salon I've been to. They never pull too tight or braid too small. My hair always looks amazing and lasts for weeks. Highly recommend!",
        rating: 5,
      },
      {
        name: "Tanya R.",
        role: "Client, Wheaton MD",
        text: "My weave came out so natural and beautiful. The stylists really listen to what you want and deliver every time. I drive from Wheaton just for this salon.",
        rating: 5,
      },
      {
        name: "Sandra M.",
        role: "Client, Takoma Park MD",
        text: "Clean, comfortable, and friendly. Got my hair colored and it turned out exactly how I wanted. They're great with kids too — brought my daughter and she loved it.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Google Reviews", value: "483" },
      { label: "Google Rating", value: "4.9 ★" },
      { label: "Services Offered", value: "10+" },
      { label: "Walk-ins", value: "Welcome" },
    ],
  },
  about: {
    title: "About DMZ Hair Salon & Braiding",
    story:
      "DMZ Hair Salon & Braiding is a full-service hair salon located on Georgia Ave in Silver Spring, MD. We specialize in all kinds of hair styles, braids, and weaves for all hair types — coarse, fine, straight, or curly. We pride ourselves on our clean and comfortable atmosphere, with friendly hair technicians who give you exactly what you ask for, without brushing too hard, pulling too tight, or braiding too small or large. Walk-ins are always welcome.",
    image: "https://cdn.zikwala.com/demo/beauty/hero.jpg",
    highlights: [
      { label: "Location", value: "Silver Spring, MD" },
      { label: "Rating", value: "4.9 ★ Google" },
      { label: "Walk-ins", value: "Welcome" },
      { label: "Kids", value: "Friendly" },
    ],
  },
  booking: {
    title: "Book Your Appointment",
    subtitle: "Pick a service, choose your date and time — no payment needed, we'll call to confirm.",
    services: [
      {
        name: "Haircuts & Styling",
        description: "Professional haircuts and blowouts for men, women, and kids.",
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
        name: "Hair Straightening",
        description: "Relaxers, press & curl, and keratin treatments.",
        price: "From $60",
        priceAmount: 60,
        duration: "1–2 hrs",
        icon: "Droplets",
      },
      {
        name: "Body Waxing",
        description: "Face, eyebrow, and body waxing.",
        price: "From $15",
        priceAmount: 15,
        duration: "15–30 min",
        icon: "Heart",
      },
    ],
  },
  contact: {
    title: "Visit Us or Get in Touch",
    subtitle: "Walk-ins welcome — call ahead for same-day appointments.",
    mapEmbed: "https://maps.google.com/maps?q=7908+Georgia+Ave,+Silver+Spring,+MD+20910&output=embed",
    formEndpoint: "mailto:hello@dmzhairsalon.com",
    whatsappMessage: "Hi, I'd like to book an appointment at DMZ Hair Salon & Braiding.",
    submitLabel: "Send Message",
  },
  faq: [
    { question: "Do you accept walk-ins?", answer: "Yes! Walk-ins are always welcome. We recommend calling ahead on weekends to check availability." },
    { question: "Are you good with kids?", answer: "Absolutely — we are patient and gentle with young clients of all ages." },
    { question: "What hair types do you work with?", answer: "All hair types — coarse, fine, straight, and curly. We have the techniques to make any hair look its best." },
    { question: "Do you do braids and weaves?", answer: "Yes — braiding and weaving are our specialties. All styles, any size, any length." },
    { question: "How much does a haircut cost?", answer: "Haircuts start from $25 depending on length and style. Call us for an exact quote." },
    { question: "Do you do waxing?", answer: "Yes — we offer face, eyebrow, and body waxing starting from $15." },
  ],
  stickyContact: "phone",

  googleReviewUrl: "https://www.google.com/maps/search/DMZ+Hair+Salon+Braiding+7908+Georgia+Ave+Silver+Spring+MD",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
