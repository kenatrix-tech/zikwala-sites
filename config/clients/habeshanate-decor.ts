import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Habeshanate Jewelry",
    tagline: "Handcrafted Jewelry & Accessories",
    phone: "+1 (571) 327-6333",
    email: "lomellyve@gmail.com",
    address: "Washington",
    city: "Washington",
    state: "DC",
    logo: "https://cdn.zikwala.com/seller/4ce51792-7674-4479-a196-8d0efb261297.webp",
    niche: "boutique",
  },
  theme: {
    primary: "#7C3AED",
    secondary: "#5B21B6",
    accent: "#EDE9FE",
    surface: "#FDFCFF",
    onPrimary: "#FFFFFF",
    font: "Cormorant Garamond",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: false,
  sellerSlug: "habeshanate-decor-event-planner",
  storefrontFilter: { categorySlug: "jewelry" },
  seo: {
    title: "Habeshanate Jewelry | Handcrafted Jewelry & Accessories in Washington DC",
    description:
      "Shop handcrafted jewelry — necklaces, bracelets, earrings, and pendants. Order instantly via WhatsApp. Serving DC, Maryland, and Virginia.",
    keywords: [
      "jewelry shop Washington DC",
      "handcrafted jewelry DMV",
      "gold plated jewelry DC",
      "necklace bracelet earrings DC",
      "jewelry store Maryland Virginia",
      "handmade jewelry Washington DC",
      "affordable jewelry DMV",
      "unique jewelry gifts DC",
    ],
    ogImage: "https://cdn.zikwala.com/seller/4ce51792-7674-4479-a196-8d0efb261297.webp",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Shop Jewelry", href: "/products" },
      { label: "Event Decor", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Shop Now",
    ctaHref: "/products",
  },
  hero: {
    variant: "shop",
    heading: "Handcrafted Jewelry You'll Treasure Forever",
    subheading:
      "Shop unique handcrafted jewelry — necklaces, pendants, bracelets, and earrings. Order instantly via WhatsApp, delivered across DC, Maryland & Virginia.",
    cta: { label: "Shop Jewelry", href: "/products" },
    secondaryCta: { label: "Book Event Decor", href: "/contact" },
    image: "https://cdn.zikwala.com/demo/decoration/habeshanate/h_hero.jpg",
    imagePosition: "center center",
    badge: "Handcrafted Jewelry & Accessories · DC, MD & VA",
    trustPoints: ["Handcrafted Jewelry", "WhatsApp Ordering", "Fast Delivery", "Unique Designs"],
    socialProof: { count: "500+", label: "happy customers across the DMV" },
  },
  services: {
    title: "Event Decoration",
    subtitle: "We also offer custom event decoration for your special occasions — contact us to get a quote",
    items: [
      {
        name: "Birthday Decoration",
        description:
          "Balloon arches, backdrops, table setups, and custom themes for intimate home birthdays or large venue parties.",
        icon: "Cake",
      },
      {
        name: "Wedding Decoration",
        description:
          "Elegant ceremony and reception decor — floral arrangements, backdrops, centerpieces, aisle styling, and lighting.",
        icon: "Heart",
      },
      {
        name: "Graduation Decoration",
        description:
          "Custom grad-themed setups with photo walls, balloon columns, table decor, and personalized banners.",
        icon: "GraduationCap",
      },
      {
        name: "Baby Shower Decoration",
        description:
          "Sweet and stylish setups with gender-reveal options, dessert table styling, balloon garlands, and welcome signs.",
        icon: "Baby",
      },
      {
        name: "Bridal Shower Decoration",
        description:
          "Chic and romantic bridal shower decor — floral backdrops, bride-to-be banners, elegant table settings, and balloon displays.",
        icon: "Sparkles",
      },
      {
        name: "Corporate & Other Events",
        description:
          "Professional event styling for anniversaries, gender reveals, corporate gatherings, and any other special occasion.",
        icon: "Paintbrush",
      },
    ],
  },
  gallery: {
    title: "Our Jewelry & Events",
    subtitle: "A glimpse of our handcrafted pieces and decorated celebrations",
    images: [
      { src: "https://cdn.zikwala.com/demo/decoration/gallery1.jpg", alt: "Event decoration setup" },
      { src: "https://cdn.zikwala.com/service/751416d6-09ee-4a48-af53-a684711e1d0d.webp", alt: "Baby shower decor" },
      { src: "https://cdn.zikwala.com/demo/decoration/gallery3.jpg", alt: "Baptism decoration" },
      { src: "https://cdn.zikwala.com/service/2f3ca59a-fa50-4257-82d0-d323116f9447.webp", alt: "Graduation party decoration" },
      { src: "https://cdn.zikwala.com/vehicle/bf6a06cf-e7bb-4e7a-bb6c-8effaa5d2e00.webp", alt: "Wedding decoration" },
      { src: "https://cdn.zikwala.com/service/e5aeb130-4783-4e51-8b63-82d5e77bec58.webp", alt: "Birthday balloon arch" },
    ],
  },
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Loved by jewelry shoppers and event clients across the DMV",
    items: [
      {
        name: "Jessica T.",
        role: "Jewelry Customer, Washington DC",
        text: "I ordered the cross pendant necklace and it arrived so quickly. The quality is amazing — it looks even more beautiful in person. I've already ordered two more pieces as gifts!",
        rating: 5,
      },
      {
        name: "Tigist A.",
        role: "Jewelry Customer, Alexandria VA",
        text: "The gold-plated necklace and earring set is absolutely gorgeous. Such high quality and the design is so elegant. Ordering through WhatsApp was quick and easy — will definitely shop again!",
        rating: 5,
      },
      {
        name: "Meron B.",
        role: "Jewelry & Event Customer, Hyattsville MD",
        text: "Bought a beautiful necklace as a gift and it was a huge hit! Also had them decorate my baby shower — everything was perfect. Truly a one-stop shop.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Jewelry Pieces Sold", value: "500+" },
      { label: "Years Experience", value: "7+" },
      { label: "5-Star Reviews", value: "120+" },
      { label: "Happy Customers", value: "500+" },
    ],
  },
  about: {
    title: "About Habeshanate Jewelry",
    story:
      "Habeshanate Jewelry was founded with one simple goal: to make beautiful, high-quality jewelry accessible to everyone. Based in Washington DC, we curate and sell handcrafted jewelry — necklaces, pendants, bracelets, earrings, and more — sourced from skilled artisans and delivered to your door across the DMV. Every piece is chosen with care. We also offer event decoration services — reach out to us for a custom quote.",
    image: "https://cdn.zikwala.com/demo/event-panner/event_panning_hero.jpg",
    highlights: [
      { label: "Based in", value: "Washington, DC" },
      { label: "Specialty", value: "Handcrafted Jewelry" },
      { label: "Order via", value: "WhatsApp" },
      { label: "Service Area", value: "DC, MD & Virginia" },
    ],
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Questions about jewelry or want to book event decoration? Send us a message and we'll get back to you within 24 hours.",
    mapEmbed: "https://maps.google.com/maps?q=Washington,+DC&output=embed",
    formEndpoint: "mailto:lomellyve@gmail.com",
    notifyEmail: "lomellyve@gmail.com",
  },
  faq: [
    { question: "How do I order jewelry?", answer: "Simply tap the WhatsApp button on any product and send us a message. We'll confirm availability, arrange payment, and ship directly to you." },
    { question: "Do you ship outside DC?", answer: "Yes — we ship across DC, Maryland, and Virginia. Contact us via WhatsApp for shipping details to other states." },
    { question: "Where does the jewelry come from?", answer: "Our jewelry is sourced from skilled artisans and trusted suppliers from various countries. Every piece is carefully selected for quality and craftsmanship before we offer it." },
    { question: "Can I order a jewelry piece as a gift?", answer: "Absolutely. We can include a gift message and arrange gift-ready packaging. Just let us know when you message us on WhatsApp." },
    { question: "Do you do event decoration?", answer: "Yes, as an additional service. We decorate birthdays, weddings, graduations, baby showers, and bridal showers across the DMV. Contact us for a custom quote." },
    { question: "How far in advance should I book event decoration?", answer: "We recommend 2–3 weeks in advance for events, especially on weekends. Reach out via the contact form or WhatsApp and we'll check availability." },
  ],
  social: {
    facebook: "https://www.facebook.com/habeshanate.habeshanate",
    instagram: "https://www.instagram.com/habeshanate_jewelry/",
  },
}
