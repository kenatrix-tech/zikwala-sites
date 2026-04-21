import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Aria Beauty Studio",
    tagline: "Hair, Nails & Skin Care in Houston, TX",
    phone: "+1 (713) 555-0284",
    email: "hello@ariabeautystudio.com",
    address: "3820 Westheimer Rd",
    city: "Houston",
    state: "TX",
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
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Aria Beauty Studio | Hair, Nails & Skin in Houston, TX",
    description:
      "Premium hair, nail, and skincare services in Houston, TX. Book your appointment online today. Walk-ins welcome.",
    keywords: [
      "beauty salon Houston TX",
      "hair salon Houston",
      "nail salon Houston TX",
      "facial Houston",
      "balayage Houston",
      "lash extensions Houston TX",
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
    ctaLabel: "Book Appointment",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Look Good. Feel Confident.",
    variant: "magazine",
    subheading:
      "Houston's go-to studio for hair, nails, and skincare. Expert stylists, relaxing atmosphere, results you'll love.",
    cta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "View Services", href: "/services" },
    image: "/clients/aria-beauty-studio/hero.svg",
    badge: "Houston's Favorite Studio",
    trustPoints: ["Walk-ins Welcome", "Expert Stylists", "Online Booking"],
    socialProof: { count: "1,200+", label: "happy clients served in Houston" },
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
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "Real results from our Houston studio",
    images: [
      { src: "https://cdn.zikwala.com/demo/beauty/gallery1.jpg", alt: "Balayage hair Houston" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery2.jpg", alt: "Nail art Houston" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery3.jpg", alt: "Facial treatment Houston" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery4.jpg", alt: "Hair color Houston TX" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery5.jpg", alt: "Lash extensions Houston" },
      { src: "https://cdn.zikwala.com/demo/beauty/gallery6.jpg", alt: "Brow shaping Houston" },
    ],
  },
  testimonials: {
    title: "Client Love",
    subtitle: "Hundreds of happy clients in Houston and beyond",
    items: [
      {
        name: "Keisha B.",
        role: "Regular Client, Houston TX",
        text: "Aria is the only place I trust with my hair. My balayage looks incredible every single time. The studio is so relaxing too.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/beauty/aria-beauty/testimonial-1.jpg",
      },
      {
        name: "Sofia R.",
        role: "Client, Sugar Land TX",
        text: "Best nail salon I've ever been to. The gel manicure lasted 4 weeks without chipping. I won't go anywhere else.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/beauty/aria-beauty/testimonial-2.jpg",
      },
      {
        name: "Amara J.",
        role: "Client, Katy TX",
        text: "I came in for a facial and left glowing. The esthetician was so knowledgeable and my skin has never looked better.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/beauty/aria-beauty/testimonial-3.jpg",
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
    title: "About Aria Beauty Studio",
    story:
      "Aria Beauty Studio opened its doors in Houston in 2017 with one goal — to make every client feel confident and beautiful. Our team of licensed stylists and estheticians bring passion, skill, and care to every appointment. We use only premium, cruelty-free products and stay up to date with the latest techniques so you always leave looking your best.",
    image: "https://cdn.zikwala.com/demo/beauty/aria-beauty/owner.jpg",
    highlights: [
      { label: "Founded", value: "2017" },
      { label: "Location", value: "Houston, TX" },
      { label: "Team", value: "6 specialists" },
      { label: "Products", value: "Cruelty-free" },
    ],
  },
  contact: {
    title: "Book Your Appointment",
    subtitle: "Walk-ins welcome — or reserve your spot online.",
    mapEmbed: "https://maps.google.com/maps?q=3820+Westheimer+Rd,+Houston,+TX&output=embed",
    formEndpoint: "mailto:hello@ariabeautystudio.com",
  },
  googleReviewUrl: "https://g.page/r/aria-beauty-studio-houston/review",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
