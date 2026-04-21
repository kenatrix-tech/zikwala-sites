import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Zikwala",
    tagline: "Custom Websites, Web Apps & Mobile Apps for Small Businesses",
    phone: "+1 (571) 639-1098",
    email: "contact@zikwala.com",
    address: "Chantilly",
    city: "Chantilly",
    state: "VA",
    logo: "https://cdn.zikwala.com/client/zikwala-agency/zikwala_logo_blue.png",
    niche: "cleaning",
  },
  theme: {
    primary: "#1A73E8",
    secondary: "#1255CC",
    accent: "#E8F0FE",
    surface: "#F0F4FF",
    onPrimary: "#FFFFFF",
    font: "Poppins",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "basic",
  isDemo: false,
  seo: {
    title: "Zikwala | Custom Websites & Apps for Small Businesses",
    description:
      "Zikwala builds custom websites, web apps, and mobile apps for small businesses across the US. Fast, affordable, and professional. Get a free demo in 24 hours.",
    keywords: [
      "custom website for small business",
      "website designer for small business",
      "affordable website design",
      "web design agency",
      "small business website",
      "mobile app development",
      "web app development",
      "professional website design",
    ],
    ogImage: "https://cdn.zikwala.com/zikwala/og-image.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Get Free Demo",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Your Business Deserves a Professional Website",
    variant: "bold",
    subheading:
      "We build custom websites, web apps, and mobile apps for small businesses across the US. Fast, affordable, and live in days — not months.",
    cta: { label: "Get a Free Demo", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/services" },
    image: "https://cdn.zikwala.com/client/zikwala-agency/zikwala_hero.png",
    badge: "🚀 Live in 24–48 Hours",
    trustPoints: ["100% Custom Design", "No Templates", "Affordable Monthly Plans"],
    socialProof: { count: "10+", label: "businesses launched across the US" },
  },
  services: {
    title: "What We Build",
    subtitle: "From simple landing pages to full platforms — we handle it all",
    items: [
      {
        name: "Business Websites",
        description:
          "Professional, mobile-friendly websites that generate leads and build credibility. Perfect for real estate agents, cleaners, restaurants, law firms, and more.",
        icon: "Globe",
      },
      {
        name: "Web Applications",
        description:
          "Custom web platforms, marketplaces, dashboards, and portals. Built to scale with your business.",
        icon: "Monitor",
      },
      {
        name: "Mobile Apps",
        description:
          "iOS and Android apps for your business. From customer-facing apps to internal tools.",
        icon: "Smartphone",
      },
      {
        name: "AI Integration",
        description:
          "Add AI-powered features to your business — chatbots, automation, smart recommendations, and more.",
        icon: "Zap",
      },
      {
        name: "E-commerce",
        description:
          "Online stores with product listings, payments, and order management. Start selling online in days.",
        icon: "ShoppingBag",
      },
      {
        name: "SEO & Digital Marketing",
        description:
          "Get found on Google. We optimize your site for local search and help you attract more customers.",
        icon: "TrendingUp",
      },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Real businesses, real results",
    items: [
      {
        name: "Wakjira G. Alamu",
        role: "Real Estate Agent, Keller Williams Portland",
        text: "Zikwala built my website in days. It looks amazing, loads fast, and I've already gotten leads from it. Best investment I made for my business.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Sites Launched", value: "10+" },
      { label: "Turnaround", value: "24–48hrs" },
      { label: "Client Rating", value: "⭐ 5.0" },
      { label: "Support", value: "Always On" },
    ],
  },
  about: {
    title: "About Zikwala",
    sections: [
      {
        heading: "We Build for Small Businesses",
        body: "Zikwala was built by a team of developers who believe every small business deserves a fast, beautiful, and affordable website. We've seen too many small businesses lose customers to competitors with better websites. We're here to fix that — with custom-built sites that look professional, load fast, and generate real leads.",
        image: "https://cdn.zikwala.com/zikwala/agency-about.jpg",
        highlights: [
          { label: "Founded", value: "2024" },
          { label: "Based in", value: "Chantilly, VA" },
          { label: "Clients", value: "US & Global" },
          { label: "Turnaround", value: "24–48 hours" },
        ],
      },
      {
        heading: "Why Choose Zikwala?",
        body: "We don't use Wix or Squarespace templates. Every site we build is custom — designed for your brand, optimized for Google, and hosted on fast infrastructure. Our plans start affordable and scale as your business grows. From a simple landing page to a full web platform — we build it all.",
        image: "https://cdn.zikwala.com/zikwala/agency-why.jpg",
      },
    ],
  },
  contact: {
    title: "Get Your Free Demo",
    subtitle: "Tell us about your business — we'll have a demo ready for you in 24 hours. No commitment.",
    formEndpoint: "mailto:contact@zikwala.com",
  },
  stickyContact: "whatsapp",
  social: {
    instagram: "https://www.instagram.com/zikwala",
    facebook: "https://www.facebook.com/zikwala",
  },
}
