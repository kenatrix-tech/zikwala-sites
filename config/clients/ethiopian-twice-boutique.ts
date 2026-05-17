import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Ethiopian Twice Boutique",
    tagline: "Handmade African-Inspired Clothing & Jewelry — Springfield, VA",
    phone: "+1 (703) 270-9546",
    email: "info@ethiopiantwiceboutique.com",
    address: "6854 Springfield Mall Center",
    city: "Springfield",
    state: "VA",
    logo: "/clients/demo/ethiopia_boutiq.png",
    niche: "boutique",
  },
  theme: {
    primary: "#C41E1A",
    secondary: "#8C1414",
    accent: "#FFF0EE",
    surface: "#FFFAF9",
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
    title: "Ethiopian Twice Boutique | African-Inspired Clothing & Jewelry in Springfield VA",
    description:
      "Shop handmade African-inspired clothing, traditional Ethiopian wear, and jewelry for women, men & kids. Located at Springfield Town Center, VA. Order via WhatsApp.",
    keywords: [
      "Ethiopian boutique Springfield VA",
      "African clothing Springfield Virginia",
      "Habesha kemis Virginia",
      "Ethiopian clothing DMV",
      "African jewelry Springfield VA",
      "traditional Ethiopian dress Virginia",
      "African boutique Springfield Town Center",
      "Ethiopian fashion DMV",
    ],
    ogImage: "/clients/demo/eth-boutique_hero.jpg",
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
      "Handmade African-inspired clothing and jewelry for women, men & kids. Proudly serving the DMV community from Springfield Town Center.",
    cta: { label: "Shop Collection", href: "/products" },
    secondaryCta: { label: "View Cart", href: "/cart" },
    image: "/clients/demo/eth-boutique_hero.jpg",
    badge: "Handmade · African-Inspired · Springfield VA",
    trustPoints: ["Handmade with Care", "Women, Men & Kids", "WhatsApp Orders", "In-Store & Online"],
    socialProof: { count: "268", label: "Google reviews — 4.7 stars" },
  },
  services: {
    title: "What We Offer",
    subtitle: "More than a store — a celebration of African culture and craftsmanship",
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
    subtitle: "Handmade African-inspired clothing and jewelry — order online with secure checkout",
    items: [],
  },
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Loved by the DMV Ethiopian community and beyond",
    items: [
      {
        name: "Mekdes H.",
        role: "Customer, Alexandria VA",
        text: "I bought a Habesha kemis for Timkat and it was absolutely beautiful. The quality is exceptional and it fits perfectly. This is my go-to shop for Ethiopian clothing in Virginia.",
        rating: 5,
      },
      {
        name: "Dawit T.",
        role: "Customer, Annandale VA",
        text: "Ordered traditional outfits for my whole family for the holidays. Everything arrived perfectly. The craftsmanship is outstanding and the staff is so helpful.",
        rating: 5,
      },
      {
        name: "Sara B.",
        role: "Customer, Woodbridge VA",
        text: "The jewelry selection here is unlike anything else in the DMV. I get compliments every time I wear my necklace. Will definitely be back for more!",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Google Reviews", value: "268+" },
      { label: "Google Rating", value: "4.7★" },
      { label: "Serving DMV", value: "Since 2015" },
      { label: "Happy Customers", value: "1,000+" },
    ],
  },
  about: {
    title: "About Ethiopian Twice Boutique",
    story:
      "Ethiopian Twice Boutique was founded with a deep love for African culture and craftsmanship. Located at Springfield Town Center in Virginia, we specialize in handmade African-inspired clothing and jewelry for women, men, and kids. Every piece in our collection is carefully crafted or curated — from traditional Habesha kemis and netela to modern African-inspired fashion and handcrafted jewelry. We are proud to serve the Ethiopian and African community across the DMV and welcome everyone who appreciates the beauty of African culture.",
    image: "/clients/demo/ethiopia_boutiq.png",
    highlights: [
      { label: "Location", value: "Springfield Town Center, VA" },
      { label: "Specialty", value: "Ethiopian & African Clothing" },
      { label: "Serves", value: "Women, Men & Kids" },
      { label: "Order via", value: "In-Store or WhatsApp" },
    ],
  },
  contact: {
    title: "Visit Us or Get in Touch",
    subtitle: "Stop by our store at Springfield Town Center or send us a message — we respond within a few hours.",
    mapEmbed:
      "https://maps.google.com/maps?q=6854+Springfield+Mall,+Springfield,+VA+22150&output=embed",
    formEndpoint: "mailto:info@ethiopiantwiceboutique.com",
    whatsappMessage: "Hi! I'd like to place an order. Can you help me?",
  },
  faq: [
    {
      question: "Where are you located?",
      answer: "We are located at 6854 Springfield Mall Center, Springfield, VA 22150 — inside Springfield Town Center.",
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
  googleReviewUrl: "https://g.page/r/ethiopian-twice-boutique/review",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
}
