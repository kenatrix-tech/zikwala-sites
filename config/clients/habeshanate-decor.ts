import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Habeshanate Jewelry & Décor",
    tagline: "Handcrafted Jewelry & Custom Event Decoration",
    phone: "+1 (571) 327-6333",
    email: "lomellyve@gmail.com",
    address: "Washington",
    city: "Washington",
    state: "DC",
    logo: "https://cdn.zikwala.com/seller/4ce51792-7674-4479-a196-8d0efb261297.webp",
    niche: "decoration",
  },
  theme: {
    primary: "#7C3AED",
    secondary: "#5B21B6",
    accent: "#EDE9FE",
    surface: "#FDFCFF",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  sellerSlug: "habeshanate-decor-event-planner",
  seo: {
    title: "Habeshanate Jewelry & Décor | Jewelry Shop & Event Decoration in Washington DC",
    description:
      "Shop handcrafted jewelry and book professional event decoration across DC, Maryland, and Virginia. Necklaces, rings, bracelets, and custom event setups for birthdays, weddings, graduations, and more.",
    keywords: [
      "jewelry shop Washington DC",
      "handcrafted jewelry DMV",
      "jewelry store DC Maryland Virginia",
      "event decoration Washington DC",
      "birthday decoration DMV",
      "wedding decoration DC Maryland Virginia",
      "balloon arch DC",
      "party decoration Virginia Maryland",
    ],
    ogImage: "https://cdn.zikwala.com/seller/4ce51792-7674-4479-a196-8d0efb261297.webp",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Shop Jewelry", href: "/products" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
    ],
    ctaLabel: "Book Your Event",
    ctaHref: "/contact",
  },
  hero: {
    variant: "shop",
    heading: "Handcrafted Jewelry You'll Treasure Forever",
    subheading:
      "Shop unique handcrafted jewelry — necklaces, rings, bracelets and more. Order instantly via WhatsApp. We also decorate events across DC, Maryland & Virginia.",
    cta: { label: "Shop Jewelry", href: "/products" },
    secondaryCta: { label: "Book Event Decor", href: "/contact" },
    image: "https://cdn.zikwala.com/demo/decoration/habeshanate/h_hero.jpg",
    imagePosition: "center center",
    badge: "Jewelry & Event Decoration · DC, MD & VA",
    trustPoints: ["Handcrafted Jewelry", "WhatsApp Ordering", "Event Decoration DMV", "Same-Week Booking"],
    socialProof: { count: "500+", label: "customers served across the DMV" },
  },
  services: {
    title: "Decoration & Design Services",
    subtitle: "Every celebration deserves a stunning setup — we make it happen",
    items: [
      {
        name: "Birthday Decoration",
        description:
          "From intimate home birthdays to large venue parties — balloon arches, backdrops, table setups, and custom themes for kids and adults.",
        price: "From $650",
        icon: "Cake",
      },
      {
        name: "Wedding Decoration",
        description:
          "Elegant ceremony and reception decor including floral arrangements, backdrops, centerpieces, aisle styling, and lighting.",
        price: "From $1,500",
        icon: "Heart",
      },
      {
        name: "Graduation Decoration",
        description:
          "Celebrate the big achievement with custom grad-themed setups — photo walls, balloon columns, table decor, and personalized banners.",
        price: "From $650",
        icon: "GraduationCap",
      },
      {
        name: "Baby Shower Decoration",
        description:
          "Sweet and stylish baby shower setups with gender-reveal options, dessert table styling, balloon garlands, and welcome signs.",
        price: "From $700",
        icon: "Baby",
      },
      {
        name: "Bridal Shower Decoration",
        description:
          "Chic and romantic bridal shower decor — floral backdrops, bride-to-be banners, elegant table settings, and custom balloon displays.",
        price: "From $800",
        icon: "Sparkles",
      },
      {
        name: "Interior Design & Styling",
        description:
          "Full interior design consultations and space transformations — from home styling to complete venue makeovers tailored to your aesthetic.",
        price: "Custom Quote",
        icon: "Paintbrush",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "A glimpse of celebrations we've brought to life",
    images: [
      { src: "https://cdn.zikwala.com/demo/decoration/gallery1.jpg", alt: "Wedding backdrop and table styling" },
      { src: "https://cdn.zikwala.com/service/751416d6-09ee-4a48-af53-a684711e1d0d.webp", alt: "Baby shower decor setup" },
      { src: "https://cdn.zikwala.com/demo/decoration/gallery3.jpg", alt: "Baptism decoration" },
      { src: "https://cdn.zikwala.com/service/2f3ca59a-fa50-4257-82d0-d323116f9447.webp", alt: "Graduation party decoration" },
      { src: "https://cdn.zikwala.com/vehicle/bf6a06cf-e7bb-4e7a-bb6c-8effaa5d2e00.webp", alt: "Wedding decoration" },
      { src: "https://cdn.zikwala.com/service/e5aeb130-4783-4e51-8b63-82d5e77bec58.webp", alt: "Birthday balloon arch and custom theme" },
    ],
  },
  testimonials: {
    title: "Happy Clients",
    subtitle: "Celebrations remembered for a lifetime",
    items: [
      {
        name: "Hana M.",
        role: "Birthday Party, Washington DC",
        text: "They turned my daughter's 5th birthday into an absolute dream. The balloon arch and backdrop were gorgeous — every guest was amazed. Will definitely book again!",
        rating: 5,
      },
      {
        name: "Yonas & Sara T.",
        role: "Wedding, Arlington VA",
        text: "Our wedding reception looked like something out of a magazine. The team handled everything from setup to teardown — we didn't have to worry about a thing.",
        rating: 5,
      },
      {
        name: "Meron B.",
        role: "Baby Shower, Hyattsville MD",
        text: "The baby shower setup was beyond what I imagined. The dessert table styling and balloon garland were perfect. So many compliments from our guests!",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Events Decorated", value: "200+" },
      { label: "Years Experience", value: "7+" },
      { label: "5-Star Reviews", value: "120+" },
      { label: "Happy Clients", value: "180+" },
    ],
  },
  about: {
    title: "About Habeshanate Jewelry & Décor",
    story:
      "Habeshanate Jewelry & Décor was founded with one mission: to bring beauty into everyday life and every milestone. Based in Washington DC, we craft and curate unique handcrafted jewelry — necklaces, rings, bracelets, and more — and specialize in stunning custom event decoration for families across DC, Maryland, and Virginia. Whether you're shopping for a special piece or planning a celebration, we're here to make it unforgettable.",
    image: "https://cdn.zikwala.com/demo/event-panner/event_panning_hero.jpg",
    highlights: [
      { label: "Based in", value: "Washington, DC" },
      { label: "Events Decorated", value: "200+" },
      { label: "Specialization", value: "Celebrations & Milestones" },
      { label: "Service Area", value: "DC, MD & Virginia" },
    ],
  },
  packages: {
    title: "Decoration Packages",
    subtitle: "Simple, all-inclusive pricing for every celebration",
    items: [
      {
        name: "Essential",
        description: "Perfect for intimate gatherings and smaller celebrations.",
        price: "From $650",
        features: [
          "Balloon garland or arch",
          "1 custom backdrop",
          "Table setup (up to 5 tables)",
          "Welcome sign",
          "Setup & teardown included",
        ],
        cta: { label: "Book Essential", href: "/contact?package=Essential" },
      },
      {
        name: "Premium",
        description: "Our most popular package — full-room transformation.",
        price: "From $1,000",
        badge: "Most Popular",
        highlight: true,
        features: [
          "Everything in Essential",
          "Balloon columns & centerpieces",
          "Custom color theme",
          "Dessert table styling",
          "Personalized banners",
          "Up to 10 tables",
          "Priority booking",
        ],
        cta: { label: "Book Premium", href: "/contact?package=Premium" },
      },
      {
        name: "Luxury",
        description: "All-inclusive experience for large events and weddings.",
        price: "From $2,500",
        features: [
          "Everything in Premium",
          "Floral arrangements",
          "Lighting & draping",
          "Venue walk-through included",
          "Unlimited table setups",
          "Day-of coordination",
          "Full cleanup",
        ],
        cta: { label: "Book Luxury", href: "/contact?package=Luxury" },
      },
    ],
  },
  contact: {
    title: "Let's Plan Your Celebration",
    subtitle: "Tell us about your event and we'll get back to you within 24 hours.",
    mapEmbed: "https://maps.google.com/maps?q=Washington,+DC&output=embed",
    formEndpoint: "mailto:lomellyve@gmail.com",
    notifyEmail: "lomellyve@gmail.com",
  },
  faq: [
    { question: "How far in advance should I book?", answer: "We recommend booking at least 2–3 weeks in advance, especially for weekends. That said, we do accept same-week bookings based on availability — contact us and we'll do our best." },
    { question: "What areas do you serve?", answer: "We serve Washington DC, Maryland, and Virginia — the full DMV area. Travel fees may apply for locations outside 20 miles from Washington DC." },
    { question: "Do you set up and take down the decorations?", answer: "Yes, every package includes full setup before your event and teardown after. You don't have to lift a finger." },
    { question: "Can I customize the colors and theme?", answer: "Absolutely. All packages are fully customizable. We work with your chosen color palette, theme, and any specific items or personalization you want." },
    { question: "Do you do outdoor events?", answer: "Yes, we do outdoor setups for gardens, backyards, and outdoor venues. We'll advise on balloon and decor options that hold up well outdoors." },
    { question: "What events do you decorate?", answer: "We specialize in birthdays, weddings, graduations, baby showers, and bridal showers. We also do anniversaries, gender reveals, and corporate events." },
  ],
  social: {
    facebook: "https://www.facebook.com/habeshanate.habeshanate",
    instagram: "https://www.instagram.com/habeshanate_jewelry/",
  },
}
