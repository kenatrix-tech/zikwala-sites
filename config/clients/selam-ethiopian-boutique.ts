import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Selam Ethiopian Boutique",
    tagline: "Authentic Ethiopian Clothing & Jewelry — Silver Spring, MD",
    phone: "+1 (301) 587-4923",
    email: "info@selamhabeshaboutique.com",
    address: "8432 Georgia Ave",
    city: "Silver Spring",
    state: "MD",
    logo: "/clients/demo/eth-boutique_hero1.jpg",
    niche: "boutique",
  },
  theme: {
    primary: "#2C1A0E",
    secondary: "#1A0E07",
    accent: "#FFF8F2",
    surface: "#FFFCF9",
    onPrimary: "#FFFFFF",
    font: "Cormorant Garamond",
    roundedLevel: "sm",
    darkMode: false,
  },
  tier: "pro",
  isDemo: false,
  features: {
    payment: true,
  },
  sellerSlug: "rahel-c-1318",
  storefrontFilter: { listingType: "PRODUCT" },
  seo: {
    title: "Selam Ethiopian Boutique | Ethiopian Clothing & Jewelry in Silver Spring MD",
    description:
      "Shop handmade Ethiopian clothing, traditional Habesha kemis, netela, and jewelry for women, men & kids. Located in Silver Spring, MD. Serving the DMV community.",
    keywords: [
      "Ethiopian boutique Silver Spring MD",
      "Habesha clothing Maryland",
      "Ethiopian kemis Silver Spring",
      "Ethiopian clothing DMV",
      "African jewelry Silver Spring MD",
      "traditional Ethiopian dress Maryland",
      "Ethiopian boutique Silver Spring",
      "Ethiopian fashion Maryland",
    ],
    ogImage: "/clients/demo/selam-ethiopian-hero.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/products" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Shop Now",
    ctaHref: "/products",
  },
  hero: {
    variant: "shop",
    heading: "Wear Your Culture. Celebrate Your Roots.",
    subheading:
      "Handmade Ethiopian clothing and jewelry for women, men & kids. Proudly serving the DMV community from Silver Spring, Maryland.",
    cta: { label: "Shop Collection", href: "/products" },
    secondaryCta: { label: "View Cart", href: "/cart" },
    image: "/clients/demo/selam-ethiopian-hero.jpg",
    badge: "Handmade · Habesha · Silver Spring MD",
    trustPoints: ["Handmade with Care", "Women, Men & Kids", "WhatsApp Orders", "In-Store & Online"],
    socialProof: { count: "200+", label: "happy customers in the DMV" },
  },
  services: {
    title: "What We Offer",
    subtitle: "More than a store — a celebration of Ethiopian culture and craftsmanship",
    items: [
      {
        name: "Traditional Ethiopian Clothing",
        description:
          "Authentic Habesha kemis, netela, and traditional outfits for women, men, and kids. Perfect for holidays, weddings, and cultural events.",
        icon: "Shirt",
      },
      {
        name: "African-Inspired Jewelry",
        description:
          "Handcrafted necklaces, earrings, bracelets, and anklets with authentic African designs. Beautiful statement pieces for every occasion.",
        icon: "Gem",
      },
      {
        name: "Custom & Special Orders",
        description:
          "Need a specific size, color, or design? We take custom orders. Send us a message on WhatsApp and we'll make it happen.",
        icon: "PackageCheck",
      },
      {
        name: "Gift Sets & Bundles",
        description:
          "Curated gift bundles for holidays, birthdays, and special occasions. Beautifully packaged and ready to give.",
        icon: "Gift",
      },
    ],
  },
  gallery: {
    title: "Our Collection",
    subtitle: "A glimpse of our handmade clothing and jewelry",
    images: [
      { src: "https://cdn.zikwala.com/demo/boutique/gallery1.jpg", alt: "Traditional Ethiopian dress" },
      { src: "https://cdn.zikwala.com/demo/boutique/gallery2.jpg", alt: "African jewelry collection" },
      { src: "https://cdn.zikwala.com/demo/boutique/gallery3.jpg", alt: "Habesha kemis for women" },
      { src: "https://cdn.zikwala.com/demo/boutique/gallery4.jpg", alt: "African-inspired kids clothing" },
      { src: "https://cdn.zikwala.com/demo/boutique/gallery5.jpg", alt: "Traditional Ethiopian jewelry" },
      { src: "https://cdn.zikwala.com/demo/boutique/gallery6.jpg", alt: "African accessories collection" },
    ],
  },
  products: {
    title: "Shop the Collection",
    subtitle: "Handmade Ethiopian clothing and jewelry — order online with secure checkout",
    items: [],
  },
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Loved by the DMV Ethiopian community and beyond",
    items: [
      {
        name: "Mekdes H.",
        role: "Customer, Alexandria VA",
        text: "I bought a Habesha kemis for Timkat and it was absolutely beautiful. The quality is exceptional and it fits perfectly. This is my go-to shop for Ethiopian clothing in the DMV.",
        rating: 5,
      },
      {
        name: "Dawit T.",
        role: "Customer, Rockville MD",
        text: "Ordered traditional outfits for my whole family for the holidays. Everything arrived perfectly. The craftsmanship is outstanding and the staff is so helpful.",
        rating: 5,
      },
      {
        name: "Sara B.",
        role: "Customer, Hyattsville MD",
        text: "The jewelry selection here is unlike anything else in the DMV. I get compliments every time I wear my necklace. Will definitely be back for more!",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Happy Customers", value: "200+" },
      { label: "Customer Rating", value: "4.8★" },
      { label: "Serving DMV", value: "Since 2018" },
      { label: "Custom Orders", value: "Always Open" },
    ],
  },
  about: {
    title: "About Selam Ethiopian Boutique",
    story:
      "Selam Ethiopian Boutique was founded with a deep love for Ethiopian culture and craftsmanship. Located in Silver Spring, Maryland, we specialize in handmade Ethiopian clothing and jewelry for women, men, and kids. Every piece in our collection is carefully crafted or curated — from traditional Habesha kemis and netela to modern African-inspired fashion and handcrafted jewelry. We are proud to serve the Ethiopian and Habesha community across the DMV and welcome everyone who appreciates the beauty of Ethiopian culture.",
    image: "/clients/demo/selam-ethiopian-hero.jpg",
    highlights: [
      { label: "Location", value: "Silver Spring, MD" },
      { label: "Specialty", value: "Ethiopian & Habesha Clothing" },
      { label: "Serves", value: "Women, Men & Kids" },
      { label: "Order via", value: "In-Store or WhatsApp" },
    ],
  },
  contact: {
    title: "Visit Us or Get in Touch",
    subtitle: "Stop by our store in Silver Spring or send us a message — we respond within a few hours.",
    mapEmbed:
      "https://maps.google.com/maps?q=8432+Georgia+Ave,+Silver+Spring,+MD+20910&output=embed",
    formEndpoint: "mailto:info@selamhabeshaboutique.com",
    whatsappMessage: "Hi! I'd like to place an order. Can you help me?",
  },
  faq: [
    {
      question: "Where are you located?",
      answer: "We are located at 8432 Georgia Ave, Silver Spring, MD 20910.",
    },
    {
      question: "Do you sell online?",
      answer: "Yes! Browse our collection on this website and order via WhatsApp. We ship across the DMV and beyond.",
    },
    {
      question: "Do you make custom orders?",
      answer: "Absolutely. Send us a message on WhatsApp with your size, preferred color, and design. We will do our best to make it for you.",
    },
    {
      question: "Do you have clothing for kids?",
      answer: "Yes — we carry traditional and African-inspired clothing for women, men, and kids of all ages.",
    },
    {
      question: "What occasions are your outfits perfect for?",
      answer: "Our clothing is perfect for Ethiopian holidays (Timkat, Enkutatash, Christmas), weddings, cultural events, graduations, and everyday wear.",
    },
  ],
  stickyContact: "phone",
  googleReviewUrl: "https://g.page/r/selam-habesha-boutique/review",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
