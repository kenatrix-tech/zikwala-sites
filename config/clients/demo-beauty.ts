import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Crown Beauty & Barber Studio",
    tagline: "Where Style Meets Culture",
    phone: "+1 (301) 555-1109",
    email: "book@crownbeautystudio.com",
    address: "6930 Carroll Ave",
    city: "Takoma Park",
    state: "MD",
    logo: "/clients/demo-beauty/logo.png",
    niche: "beauty",
  },
  theme: {
    primary: "#7C3AED",
    secondary: "#5B21B6",
    accent: "#EDE9FE",
    surface: "#F5F3FF",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "full",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Crown Beauty & Barber Studio | Hair Salon in Takoma Park MD",
    description:
      "Natural hair, braiding, barber services, and lashes in Takoma Park, MD. Walk-ins welcome. Book online today.",
    keywords: [
      "hair salon Takoma Park MD",
      "natural hair salon Maryland",
      "braiding DMV",
      "barber Takoma Park",
      "lash extensions Maryland",
    ],
    ogImage: "/clients/demo-beauty/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Book", href: "/contact" },
    ],
    ctaLabel: "Book Appointment",
    ctaHref: "/contact",
  },
  hero: {
    variant: "split",
    heading: "Look Good. Feel Confident.",
    subheading:
      "Expert hair, barber, and beauty services in Takoma Park, MD. Specializing in natural hair and protective styles.",
    cta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "/clients/demo-beauty/hero.jpg",
    badge: "Walk-Ins Welcome",
    trustPoints: ["Specializing in Natural & Textured Hair", "Licensed Cosmetologists", "Walk-Ins Welcome"],
    socialProof: { count: "800+", label: "clients styled in Takoma Park & DMV" },
  },
  services: {
    title: "Beauty & Barber Services",
    subtitle: "Full-service care for every hair type",
    items: [
      {
        name: "Haircuts & Styling",
        description:
          "Cuts, blowouts, silk press, and styling for all hair types. Men, women, and kids welcome.",
        price: "From $35",
        icon: "Scissors",
      },
      {
        name: "Natural Hair & Braiding",
        description:
          "Box braids, knotless braids, locs, twists, and protective styles for natural hair.",
        price: "From $80",
        icon: "Sparkles",
      },
      {
        name: "Barber Services",
        description:
          "Fades, tapers, line-ups, beard shaping, and hot towel shaves for men and boys.",
        price: "From $25",
        icon: "Scissors",
      },
      {
        name: "Lashes & Brows",
        description:
          "Classic and volume lash extensions, lash lifts, brow lamination, and tinting.",
        price: "From $60",
        icon: "Eye",
      },
    ],
  },
  gallery: {
    title: "Style Gallery",
    subtitle: "Fresh styles from our talented team",
    images: [
      { src: "/clients/demo-beauty/gallery/1.jpg", alt: "Box braids" },
      { src: "/clients/demo-beauty/gallery/2.jpg", alt: "Barber fade" },
      { src: "/clients/demo-beauty/gallery/3.jpg", alt: "Natural hair styling" },
      { src: "/clients/demo-beauty/gallery/4.jpg", alt: "Lash extensions" },
      { src: "/clients/demo-beauty/gallery/5.jpg", alt: "Silk press" },
      { src: "/clients/demo-beauty/gallery/6.jpg", alt: "Knotless braids" },
    ],
  },
  testimonials: {
    title: "Client Love",
    subtitle: "Our clients keep coming back — and sending their friends",
    items: [
      {
        name: "Amara D.",
        role: "Client, Takoma Park MD",
        text: "Crown is the only place I trust with my natural hair. They always understand my texture and the styles last so long.",
        rating: 5,
      },
      {
        name: "Jordan P.",
        role: "Client, Silver Spring MD",
        text: "Best barber I've found in MD. Consistent fade every single time. Great atmosphere too.",
        rating: 5,
      },
      {
        name: "Yeshi T.",
        role: "Client, Hyattsville MD",
        text: "Got knotless braids and they were absolutely beautiful. Clean, neat, and the stylist took her time. Will be back!",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Happy Clients", value: "800+" },
      { label: "Years Experience", value: "7+" },
      { label: "Stylists on Staff", value: "6" },
      { label: "5-Star Reviews", value: "400+" },
    ],
  },
  about: {
    title: "About Crown Beauty & Barber Studio",
    story:
      "Crown Beauty & Barber Studio opened in Takoma Park with a vision to create an inclusive space where everyone leaves feeling confident. Our team of licensed cosmetologists and barbers specializes in natural and textured hair, and we celebrate the diversity of the DMV community. We use quality products and take the time to truly understand each client's hair needs.",
    image: "/clients/demo-beauty/about.jpg",
    highlights: [
      { label: "Specialization", value: "Natural & Textured Hair" },
      { label: "Licensed", value: "Maryland Cosmetology" },
      { label: "Products", value: "Sulfate-Free & Natural" },
      { label: "Languages", value: "English, Amharic" },
    ],
  },
  products: {
    title: "Shop Hair & Beauty Products",
    subtitle: "Professional products we use in the studio — available to take home",
    items: [
      {
        id: "bty1",
        name: "Shea Moisture Curl Shampoo",
        description: "Sulfate-free shampoo for curly and natural hair. Deeply moisturizing.",
        price: 14,
        image: "/clients/demo-beauty/gallery/1.jpg",
        category: "Hair Care",
        badge: "Best Seller",
        inStock: true,
      },
      {
        id: "bty2",
        name: "Jamaican Black Castor Oil",
        description: "Promotes hair growth and scalp health. Great for edges and locs.",
        price: 18,
        image: "/clients/demo-beauty/gallery/3.jpg",
        category: "Hair Care",
        inStock: true,
      },
      {
        id: "bty3",
        name: "Satin Edge Bonnet",
        description: "Protect your style overnight with this double-lined satin bonnet.",
        price: 12,
        image: "/clients/demo-beauty/gallery/5.jpg",
        category: "Accessories",
        badge: "New",
        inStock: true,
      },
      {
        id: "bty4",
        name: "Braid Spray (Leave-In)",
        description: "Keeps braids moisturized and scalp hydrated between wash days.",
        price: 16,
        originalPrice: 22,
        image: "/clients/demo-beauty/gallery/6.jpg",
        category: "Hair Care",
        badge: "Sale",
        inStock: true,
      },
      {
        id: "bty5",
        name: "Beard Grooming Kit",
        description: "Beard oil, balm, and comb set. Keeps your beard soft, shaped, and healthy.",
        price: 28,
        image: "/clients/demo-beauty/gallery/2.jpg",
        category: "Men's Care",
        badge: "Best Seller",
        inStock: true,
      },
      {
        id: "bty6",
        name: "Lash Aftercare Serum",
        description: "Nourishing serum to extend the life of your lash extensions.",
        price: 20,
        image: "/clients/demo-beauty/gallery/4.jpg",
        category: "Lashes",
        inStock: false,
      },
    ],
  },
  contact: {
    title: "Book Your Appointment",
    subtitle: "Call, text, or fill out the form. Walk-ins welcome based on availability.",
    mapEmbed: "",
    formEndpoint: "mailto:book@crownbeautystudio.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
