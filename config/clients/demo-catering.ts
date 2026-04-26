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
    ogImage: "https://cdn.zikwala.com/demo/catering/catering_hero.jpg",
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
    variant: "magazine",
    heading: "Food That Brings People Together",
    subheading:
      "From intimate gatherings to 500-guest events — fresh, flavorful catering tailored to your occasion.",
    cta: { label: "Request a Quote", href: "/contact" },
    secondaryCta: { label: "View Our Menu", href: "/services" },
    image: "https://cdn.zikwala.com/demo/catering/catering_hero.jpg",
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
    image: "https://cdn.zikwala.com/demo/catering/catering_hero.jpg",
    highlights: [
      { label: "Cuisine", value: "Ethiopian, American, Fusion" },
      { label: "Dietary Options", value: "Halal, Vegan, GF" },
      { label: "Staff", value: "Licensed & Insured" },
      { label: "Min. Guest Count", value: "20 Guests" },
    ],
  },
  catering: {
    title: "Catering Packages",
    subtitle: "Simple pricing for every occasion — all packages include setup and cleanup",
    serviceArea: "DC, MD & VA",
    minimumNotice: "72 hours advance notice required",
    eventTypes: ["Weddings", "Corporate Events", "Birthday Parties", "Baby Showers", "Graduations", "Holiday Parties"],
    packages: [
      {
        name: "Drop-Off Package",
        description: "Hot, ready-to-serve trays delivered to your location.",
        priceFrom: "From $12/person",
        minimumGuests: 20,
        features: [
          "Choice of 3 entrees",
          "2 sides included",
          "Disposable serving trays",
          "Utensils & napkins",
          "Delivery within DMV",
        ],
      },
      {
        name: "Buffet Package",
        description: "Full buffet setup with serving staff and cleanup.",
        priceFrom: "From $22/person",
        minimumGuests: 30,
        badge: "Most Popular",
        highlight: true,
        features: [
          "Choice of 4 entrees",
          "3 sides + salad",
          "Chafing dishes & linens",
          "Uniformed serving staff",
          "Full setup & cleanup",
          "Halal & vegan options",
        ],
      },
      {
        name: "Full-Service Package",
        description: "White-glove catering with plated service for weddings and galas.",
        priceFrom: "Custom Quote",
        minimumGuests: 50,
        features: [
          "Custom menu consultation",
          "Plated or family-style service",
          "Full waitstaff team",
          "Specialty linens & décor",
          "Bar service coordination",
          "Day-of event manager",
        ],
      },
    ],
  },
  contact: {
    title: "Request a Catering Quote",
    subtitle: "Tell us about your event and we'll send a custom menu and pricing within 24 hours.",
    mapEmbed: "https://maps.google.com/maps?q=1820+Georgia+Ave+NW,+Washington,+DC&output=embed",
    formEndpoint: "mailto:info@selamcatering.com",
  },
  faq: [
    { question: "What is the minimum guest count?", answer: "Our minimum is 20 guests for drop-off orders and 30 guests for full buffet service. For smaller gatherings, please contact us and we'll do our best to accommodate." },
    { question: "Do you offer halal and vegan options?", answer: "Yes — all our meat is halal certified. We also offer a full range of vegan, vegetarian, and gluten-free dishes. Just let us know your dietary requirements when booking." },
    { question: "How far in advance do I need to book?", answer: "We require at least 72 hours notice for drop-off orders and 1–2 weeks for full-service events. For weddings, we recommend booking 2–3 months in advance." },
    { question: "Do you provide staff for the event?", answer: "Yes — our buffet and full-service packages include uniformed serving staff. Staff count depends on guest size and event type." },
    { question: "What areas do you serve?", answer: "We serve Washington DC, Maryland, and Northern Virginia. Delivery fees may apply based on distance from our Georgia Ave location." },
  ],
  googleReviewUrl: "https://g.page/r/selam-catering-dc/review",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
