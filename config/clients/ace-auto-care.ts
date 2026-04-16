import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Ace Auto Care",
    tagline: "Honest, Reliable Auto Repair in Chicago, IL",
    phone: "+1 (773) 555-0531",
    email: "info@aceautocare.com",
    address: "4215 N Western Ave",
    city: "Chicago",
    state: "IL",
    logo: "https://cdn.zikwala.com/demo/autorepair/ace-auto/logo.png",
    niche: "autorepair",
  },
  theme: {
    primary: "#C0392B",
    secondary: "#1A1A1A",
    accent: "#FFF0EE",
    surface: "#FAFAFA",
    onPrimary: "#FFFFFF",
    font: "Inter",
    roundedLevel: "sm",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Ace Auto Care | Auto Repair & Oil Change in Chicago, IL",
    description:
      "Trusted auto repair shop in Chicago, IL. Oil changes, brakes, engine diagnostics, and more. Honest pricing. ASE-certified mechanics.",
    keywords: [
      "auto repair Chicago IL",
      "car repair Chicago",
      "oil change Chicago",
      "brake repair Chicago",
      "mechanic Chicago IL",
      "engine repair Chicago",
    ],
    ogImage: "https://cdn.zikwala.com/demo/autorepair/hero.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book a Service",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Your Car Deserves the Best.",
    variant: "bold",
    subheading:
      "ASE-certified mechanics serving Chicago, IL since 2010. Honest pricing, fast turnaround, and quality work — guaranteed.",
    cta: { label: "Book a Service", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/autorepair/hero.jpg",
    badge: "ASE Certified",
    trustPoints: ["ASE-Certified Mechanics", "Honest Flat-Rate Pricing", "Same-Day Service"],
    socialProof: { count: "2,000+", label: "vehicles serviced in Chicago" },
  },
  services: {
    title: "Auto Repair Services",
    subtitle: "From oil changes to major repairs — we handle it all",
    items: [
      {
        name: "Oil Change & Lube",
        description:
          "Conventional, synthetic, and high-mileage oil changes. Filter replacement and multi-point inspection included.",
        price: "From $39",
        icon: "Droplets",
      },
      {
        name: "Brake Repair",
        description:
          "Brake pad and rotor replacement, caliper service, and brake fluid flush. We use quality OEM-spec parts.",
        price: "From $149",
        icon: "CircleStop",
      },
      {
        name: "Engine Diagnostics",
        description:
          "Check engine light on? We run a full computer diagnostic to find the exact issue before any work begins.",
        price: "From $79",
        icon: "Search",
      },
      {
        name: "Tires & Alignment",
        description:
          "Tire rotation, balancing, replacement, and wheel alignment. All major tire brands available.",
        price: "From $25",
        icon: "Circle",
      },
    ],
  },
  gallery: {
    title: "Our Shop",
    subtitle: "Clean, modern facility — your car is in good hands",
    images: [
      { src: "https://cdn.zikwala.com/demo/autorepair/gallery1.jpg", alt: "Auto repair shop Chicago" },
      { src: "https://cdn.zikwala.com/demo/autorepair/gallery2.jpg", alt: "Engine repair Chicago IL" },
      { src: "https://cdn.zikwala.com/demo/autorepair/gallery3.jpg", alt: "Brake service Chicago" },
      { src: "https://cdn.zikwala.com/demo/autorepair/gallery4.jpg", alt: "Oil change Chicago IL" },
      { src: "https://cdn.zikwala.com/demo/autorepair/gallery5.jpg", alt: "Tire replacement Chicago" },
      { src: "https://cdn.zikwala.com/demo/autorepair/gallery6.jpg", alt: "Mechanic Chicago IL" },
    ],
  },
  testimonials: {
    title: "What Customers Say",
    subtitle: "Chicagoans trust Ace Auto Care",
    items: [
      {
        name: "Dave K.",
        role: "Customer, Lincoln Square IL",
        text: "Took my car in for a check engine light. They diagnosed it in 30 min, fixed it same day, and didn't try to upsell me on anything. Rare find.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/autorepair/ace-auto/testimonial-1.jpg",
      },
      {
        name: "Yolanda P.",
        role: "Customer, Wicker Park IL",
        text: "I've been coming here for 5 years. Always fair, always honest. They once told me I didn't need a repair I thought I needed. That's integrity.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/autorepair/ace-auto/testimonial-2.jpg",
      },
      {
        name: "Ray T.",
        role: "Customer, Evanston IL",
        text: "Best mechanic shop in Chicago, hands down. Fast service, great prices, and the team actually explains what's wrong in plain English.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/autorepair/ace-auto/testimonial-3.jpg",
      },
    ],
  },
  stats: {
    items: [
      { label: "Vehicles Serviced", value: "2,000+" },
      { label: "Years in Business", value: "14+" },
      { label: "5-Star Reviews", value: "430+" },
      { label: "Certified Mechanics", value: "5" },
    ],
  },
  about: {
    title: "About Ace Auto Care",
    story:
      "Ace Auto Care has been a trusted name in Chicago auto repair since 2010. Founded by ASE-certified master mechanic Marco Rivera, our shop was built on one principle: treat every customer's car like it's your own. We're a neighborhood shop — no chains, no commissions, no pressure. Just honest work at a fair price.",
    image: "https://cdn.zikwala.com/demo/autorepair/ace-auto/owner.jpg",
    highlights: [
      { label: "Founded", value: "2010" },
      { label: "Certification", value: "ASE Certified" },
      { label: "Coverage", value: "Chicago & suburbs" },
      { label: "Warranty", value: "12-month parts & labor" },
    ],
  },
  contact: {
    title: "Book a Service",
    subtitle: "Drop off or call ahead — we'll get you back on the road fast.",
    mapEmbed: "https://maps.google.com/maps?q=4215+N+Western+Ave,+Chicago,+IL&output=embed",
    formEndpoint: "mailto:info@aceautocare.com",
  },
  googleReviewUrl: "https://g.page/r/ace-auto-care-chicago/review",
  social: {
    facebook: "https://facebook.com",
  },
}
