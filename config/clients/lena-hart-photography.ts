import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Lena Hart Photography",
    tagline: "Capturing Your Most Precious Moments in Austin, TX",
    phone: "+1 (512) 555-0347",
    email: "hello@lenahart.com",
    address: "2108 South Lamar Blvd",
    city: "Austin",
    state: "TX",
    logo: "https://cdn.zikwala.com/demo/photography/lena-hart/logo.png",
    niche: "photography",
  },
  theme: {
    primary: "#2C2C2C",
    secondary: "#C9A84C",
    accent: "#F9F5F0",
    surface: "#FDFCFA",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "md",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Lena Hart Photography | Wedding & Portrait Photographer in Austin, TX",
    description:
      "Award-winning wedding and portrait photographer based in Austin, TX. Timeless, natural photography for your most important moments.",
    keywords: [
      "wedding photographer Austin TX",
      "portrait photographer Austin",
      "Austin TX photographer",
      "engagement photos Austin",
      "family photographer Austin TX",
      "newborn photographer Austin",
    ],
    ogImage: "https://cdn.zikwala.com/demo/photography/lena-hart/hero.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book a Session",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Photos That Tell Your Story",
    variant: "magazine",
    subheading:
      "Wedding, portrait, and lifestyle photography across Austin, TX. Natural light. Genuine moments. Timeless results.",
    cta: { label: "Book a Session", href: "/contact" },
    secondaryCta: { label: "View Portfolio", href: "/gallery" },
    image: "/clients/lena-hart-photography/hero.svg",
    badge: "Based in Austin, TX",
    trustPoints: ["200+ Weddings Captured", "Natural Light Specialist", "Same-Week Previews"],
    socialProof: { count: "200+", label: "couples & families photographed" },
  },
  services: {
    title: "Photography Services",
    subtitle: "Every session is tailored to you",
    items: [
      {
        name: "Wedding Photography",
        description:
          "Full-day coverage from getting ready to the last dance. Candid, emotional, and beautifully composed. Packages from $2,500.",
        price: "From $2,500",
        icon: "Heart",
      },
      {
        name: "Portrait Sessions",
        description:
          "Individual, couple, or family portraits. 1-hour outdoor session, 50+ edited photos delivered within 5 days.",
        price: "From $350",
        icon: "Camera",
      },
      {
        name: "Engagement Photos",
        description:
          "Celebrate your love story before the big day. Perfect for save-the-dates and social media. Golden-hour specialty.",
        price: "From $450",
        icon: "Sparkles",
      },
      {
        name: "Brand & Commercial",
        description:
          "Professional headshots and brand photos for entrepreneurs and small businesses. Studio or on-location available.",
        price: "From $500",
        icon: "Briefcase",
      },
    ],
  },
  gallery: {
    title: "Portfolio",
    subtitle: "A glimpse into the moments we've captured",
    images: [
      { src: "https://cdn.zikwala.com/demo/photography/gallery1.jpg", alt: "Wedding ceremony Austin TX" },
      { src: "https://cdn.zikwala.com/demo/photography/gallery2.jpg", alt: "Bride and groom portrait" },
      { src: "https://cdn.zikwala.com/demo/photography/gallery3.jpg", alt: "Family portrait Austin" },
      { src: "https://cdn.zikwala.com/demo/photography/gallery4.jpg", alt: "Engagement session golden hour" },
      { src: "https://cdn.zikwala.com/demo/photography/gallery5.jpg", alt: "Newborn photography Austin" },
      { src: "https://cdn.zikwala.com/demo/photography/gallery6.jpg", alt: "Brand headshots Austin TX" },
    ],
  },
  testimonials: {
    title: "Kind Words",
    subtitle: "From couples and families across Austin",
    items: [
      {
        name: "Emily & Jake R.",
        role: "Wedding, Barton Creek TX",
        text: "Lena made us feel completely at ease. Our wedding photos are beyond what we imagined — we cry every time we look at them.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/photography/lena-hart/testimonial-1.jpg",
      },
      {
        name: "Marcus D.",
        role: "Brand Session, Austin TX",
        text: "Booked Lena for my business headshots. She knew exactly how to make me look natural. Got compliments from every client.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/photography/lena-hart/testimonial-2.jpg",
      },
      {
        name: "The Nguyen Family",
        role: "Family Portrait, Round Rock TX",
        text: "Our family photos came out stunning. Kids were running everywhere and Lena captured magic in every shot.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/photography/lena-hart/testimonial-3.jpg",
      },
    ],
  },
  stats: {
    items: [
      { label: "Weddings Captured", value: "200+" },
      { label: "Years of Experience", value: "8+" },
      { label: "5-Star Reviews", value: "150+" },
      { label: "Photos Delivered", value: "50K+" },
    ],
  },
  about: {
    title: "About Lena Hart",
    story:
      "I'm Lena — a wedding and portrait photographer based in Austin, TX. With over 8 years behind the lens, I believe every photo should feel real, warm, and timeless. I specialize in natural light and candid storytelling. Whether it's your wedding day, your growing family, or your brand — I'm here to capture it beautifully.",
    image: "https://cdn.zikwala.com/demo/photography/lena-hart/lena.jpg",
    highlights: [
      { label: "Based in", value: "Austin, TX" },
      { label: "Specialty", value: "Weddings & Portraits" },
      { label: "Experience", value: "8+ years" },
      { label: "Style", value: "Natural & Candid" },
    ],
  },
  contact: {
    title: "Let's Make Something Beautiful",
    subtitle: "Tell me about your session and I'll get back to you within 24 hours.",
    mapEmbed: "https://maps.google.com/maps?q=2108+South+Lamar+Blvd,+Austin,+TX&output=embed",
    formEndpoint: "mailto:hello@lenahart.com",
  },
  googleReviewUrl: "https://g.page/r/lena-hart-photography-austin/review",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
