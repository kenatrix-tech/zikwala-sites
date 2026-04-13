import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Selam Catering & Events",
    tagline: "Authentic Flavors for Every Occasion",
    phone: "+1 (202) 555-0503",
    email: "info@selamcatering.com",
    address: "1820 Georgia Ave NW",
    city: "Washington",
    state: "DC",
    logo: "/clients/demo-catering/logo.png",
    niche: "catering",
  },
  theme: {
    primary: "#92400E",
    secondary: "#78350F",
    accent: "#FDE68A",
    surface: "#FFFBEB",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Selam Catering & Events | Catering in Washington DC",
    description:
      "Full-service catering for corporate events, weddings, and private parties in Washington DC. Ethiopian, American, and fusion menus available.",
    keywords: [
      "catering Washington DC",
      "Ethiopian catering DC",
      "wedding catering DMV",
      "corporate catering DC",
      "event catering Maryland",
    ],
    ogImage: "/clients/demo-catering/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Food That Brings People Together",
    subheading:
      "From intimate gatherings to 500-guest events — fresh, flavorful catering tailored to your occasion.",
    cta: { label: "Request a Quote", href: "/contact" },
    secondaryCta: { label: "View Our Menu", href: "/services" },
    image: "/clients/demo-catering/hero.jpg",
    badge: "Serving DC, MD & VA",
    trustPoints: ["Halal & Dietary Options Available", "Full-Service Setup & Cleanup", "Serving DC, MD & VA"],
    socialProof: { count: "600+", label: "events catered across the DMV" },
  },
  services: {
    title: "Catering Services",
    subtitle: "Every event deserves exceptional food",
    items: [
      {
        name: "Corporate Catering",
        description:
          "Breakfast, lunch, and dinner service for office meetings, trainings, and company events.",
        price: "From $18/person",
        icon: "Building2",
      },
      {
        name: "Wedding & Receptions",
        description:
          "Full wedding catering with custom menus, professional staff, and elegant presentation.",
        price: "Custom Quote",
        icon: "Heart",
      },
      {
        name: "Buffet & Banquet Service",
        description:
          "Buffet-style service with chafing dishes, full setup, serving staff, and cleanup.",
        price: "From $22/person",
        icon: "UtensilsCrossed",
      },
      {
        name: "Drop-off Catering",
        description:
          "Packaged meals and trays delivered hot and ready to serve — ideal for smaller gatherings.",
        price: "From $12/person",
        icon: "PackageCheck",
      },
    ],
  },
  gallery: {
    title: "Food & Events Gallery",
    subtitle: "A taste of what we bring to every event",
    images: [
      { src: "/clients/demo-catering/gallery/1.jpg", alt: "Wedding buffet" },
      { src: "/clients/demo-catering/gallery/2.jpg", alt: "Ethiopian platter" },
      { src: "/clients/demo-catering/gallery/3.jpg", alt: "Corporate lunch" },
      { src: "/clients/demo-catering/gallery/4.jpg", alt: "Dessert table" },
      { src: "/clients/demo-catering/gallery/5.jpg", alt: "Event setup" },
      { src: "/clients/demo-catering/gallery/6.jpg", alt: "Appetizer spread" },
    ],
  },
  testimonials: {
    title: "Happy Hosts",
    subtitle: "Events remembered for the food",
    items: [
      {
        name: "Yohannes B.",
        role: "Corporate Client, DC",
        text: "Selam has catered our quarterly all-hands three times now. The food is always fresh, the team is professional, and everyone raves about the injera platters.",
        rating: 5,
      },
      {
        name: "Priya S.",
        role: "Bride, Alexandria VA",
        text: "They catered our 200-person wedding reception and it was flawless. The fusion menu was a huge hit with both families.",
        rating: 5,
      },
      {
        name: "Marcus E.",
        role: "Event Organizer, Maryland",
        text: "Reliable, flavorful, and easy to work with. They handled the setup and cleanup too — couldn't ask for more.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Events Catered", value: "600+" },
      { label: "Years Experience", value: "12+" },
      { label: "Menu Items", value: "50+" },
      { label: "Client Satisfaction", value: "99%" },
    ],
  },
  about: {
    title: "About Selam Catering & Events",
    story:
      "Selam Catering was born from a love of food and hospitality. Founded in Washington DC, we specialize in blending authentic Ethiopian flavors with American and international cuisine. Whether it's a 20-person office lunch or a 400-guest wedding, we bring the same care and attention to every plate.",
    image: "/clients/demo-catering/about.jpg",
    highlights: [
      { label: "Cuisine", value: "Ethiopian, American, Fusion" },
      { label: "Dietary Options", value: "Halal, Vegan, GF" },
      { label: "Staff", value: "Licensed & Insured" },
      { label: "Min. Guest Count", value: "20 Guests" },
    ],
  },
  contact: {
    title: "Request a Catering Quote",
    subtitle: "Tell us about your event and we'll send a custom menu and pricing within 24 hours.",
    mapEmbed: "",
    formEndpoint: "mailto:info@selamcatering.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
