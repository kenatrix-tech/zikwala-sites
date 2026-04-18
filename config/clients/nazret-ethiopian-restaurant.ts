import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Nazret Ethiopian Restaurant",
    tagline: "Authentic Flavors of Ethiopia, Every Plate a Celebration",
    phone: "+1(703) 347-9911",
    email: "info@nazretrestaurant.com",
    address: "3821 S George Mason Dr, Unit D",
    city: "Falls Church",
    state: "VA",
    logo: "/clients/nazret-ethiopian-restaurant/logo.png",
    niche: "restaurant",
  },

  theme: {
    primary: "#7B1F1F",      // deep Ethiopian red (berbere)
    secondary: "#C8922A",    // warm turmeric gold
    accent: "#FEF3E2",       // warm injera cream
    surface: "#FFFBF5",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "lg",
    darkMode: false,
  },

  tier: "pro",
  isDemo: true,

  seo: {
    title: "Nazret Ethiopian Restaurant | Authentic Ethiopian Food in Falls Church VA",
    description:
      "Experience the rich flavors of Ethiopia — injera, doro wat, tibs, and a traditional coffee ceremony. Located at Skyline, Falls Church VA.",
    keywords: [
      "Ethiopian restaurant Falls Church VA",
      "Ethiopian food Falls Church",
      "Ethiopian restaurant Skyline VA",
      "doro wat Falls Church",
      "injera Falls Church Virginia",
      "Ethiopian restaurant Northern Virginia",
      "halal Ethiopian restaurant VA",
    ],
    ogImage: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
  },

  nav: {
    links: [
      { label: "Home",    href: "/" },
      { label: "Gallery", href: "/gallery" },
      { label: "About",   href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Reserve a Table",
    ctaHref: "/contact",
  },

  hero: {
    variant: "centered",
    heading: "A Taste of Home, Shared Around Injera",
    subheading:
      "Traditional Ethiopian dishes slow-cooked with authentic spices — served the way it's been done for generations. Family-style. Warm. Unforgettable.",
    cta:          { label: "Reserve a Table",  href: "/contact" },
    secondaryCta: { label: "View Our Menu",    href: "/products" },
    image: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
    badge: "Skyline, Falls Church VA · Halal Certified",
    trustPoints: [
      "100% Authentic Recipes",
      "Halal & Vegetarian Options",
      "Traditional Coffee Ceremony",
    ],
    socialProof: { count: "4.8★", label: "from 900+ Google reviews" },
  },

  services: {
    title: "Dining Experiences",
    subtitle: "Every visit is a journey to the heart of Ethiopia",
    items: [
      {
        name: "Dine-In — Family Style",
        description:
          "Share a large injera platter loaded with your choice of stews and vegetables — the authentic way Ethiopians eat together.",
        price: "Daily 11AM – 10PM",
        icon: "UtensilsCrossed",
      },
      {
        name: "Traditional Coffee Ceremony",
        description:
          "Freshly roasted beans, three rounds of buna, and popcorn — the full Ethiopian coffee experience at your table.",
        price: "$12 per person",
        icon: "Coffee",
      },
      {
        name: "Vegetarian / Fasting Menu",
        description:
          "A full menu of vegan fasting dishes — misir, gomen, shiro, atkilt — all made without meat, dairy, or eggs.",
        price: "Available Daily",
        icon: "Leaf",
      },
      {
        name: "Catering & Private Events",
        description:
          "Ethiopian buffet catering for weddings, Timket celebrations, graduations, and corporate events across DC, MD & VA.",
        price: "Custom Quote",
        icon: "Users",
      },
    ],
  },

  products: {
    title: "Our Menu",
    subtitle: "Every dish served on freshly made injera — the bread, the plate, and the spoon",
    items: [
      // ── Meat Dishes ───────────────────────────────────────────
      {
        id: "doro-wat",
        name: "Doro Wat",
        description: "Ethiopia's national dish — chicken slow-simmered in rich berbere sauce with boiled egg",
        price: 22,
        image: "https://cdn.zikwala.com/demo/restaurant/menu_tiresiga.jpg",
        category: "Meat Dishes",
        badge: "Best Seller",
      },
      {
        id: "lamb-tibs",
        name: "Lamb Tibs",
        description: "Tender lamb sautéed with onions, jalapeños, rosemary, and Ethiopian spices",
        price: 24,
        image: "https://cdn.zikwala.com/demo/restaurant/menu_ribs.jpg",
        category: "Meat Dishes",
        badge: "Chef's Pick",
      },
      {
        id: "kitfo",
        name: "Kitfo",
        description: "Ethiopian-style beef seasoned with mitmita and niter kibbeh, served lebleb or raw",
        price: 22,
        image: "https://cdn.zikwala.com/demo/restaurant/menu_kitifo.jpg",
        category: "Meat Dishes",
      },
      {
        id: "beef-tibs",
        name: "Beef Tibs",
        description: "Cubed beef stir-fried with onions, garlic, tomatoes, green peppers, and berbere",
        price: 20,
        image: "https://cdn.zikwala.com/demo/restaurant/menu_tibs.jpg",
        category: "Meat Dishes",
      },

      // ── Vegetarian / Fasting ──────────────────────────────────
      {
        id: "misir-wat",
        name: "Misir Wat",
        description: "Red lentil stew slow-cooked in berbere and Ethiopian spiced butter — a fasting staple",
        price: 16,
        image: "https://cdn.zikwala.com/demo/restaurant/menu_beyainet.jpg",
        category: "Vegetarian",
        badge: "Vegan",
      },
      {
        id: "shiro",
        name: "Shiro",
        description: "Smooth ground chickpea stew simmered with onions, garlic, and spiced clarified butter",
        price: 15,
        image: "https://cdn.zikwala.com/demo/restaurant/shiro.jpg",
        category: "Vegetarian",
        badge: "Vegan",
      },
      {
        id: "gomen",
        name: "Gomen (Collard Greens)",
        description: "Ethiopian-style collard greens with onions, garlic, ginger, and a touch of green chili",
        price: 14,
        image: "https://cdn.zikwala.com/demo/restaurant/gomen.jpg",
        category: "Vegetarian",
        badge: "Vegan",
      },

      // ── Combo Platters ────────────────────────────────────────
      {
        id: "nazret-special",
        name: "Nazret Special (For 2)",
        description: "Doro Wat, Lamb Tibs, and Beef Tibs on a large shared injera — the full meat experience",
        price: 48,
        image: "https://cdn.zikwala.com/demo/restaurant/menu-special.jpeg",
        category: "Combo Platters",
        badge: "Best Value",
      },
      {
        id: "beyaynetu",
        name: "Beyaynetu (Veggie Platter)",
        description: "Traditional fasting platter — Misir, Shiro, Gomen, Atkilt, Timatim, and Fosolia on injera",
        price: 28,
        image: "https://cdn.zikwala.com/demo/restaurant/menu_beyainet.jpg",
        category: "Combo Platters",
      },

      // ── Drinks & Coffee ───────────────────────────────────────
      {
        id: "buna",
        name: "Ethiopian Coffee Ceremony",
        description: "Three rounds of freshly roasted and brewed buna, served with incense and popcorn",
        price: 12,
        image: "https://cdn.zikwala.com/demo/restaurant/buna.jpg",
        category: "Drinks",
        badge: "Signature",
      },
      {
        id: "tej",
        name: "Tej (Honey Wine)",
        description: "Traditional Ethiopian honey mead — lightly fermented, mildly sweet, served in a berele",
        price: 10,
        image: "https://cdn.zikwala.com/demo/restaurant/mocktail.jpg",
        category: "Drinks",
      },
    ],
  },

  gallery: {
    title: "Food, Culture & Community",
    subtitle: "Every plate tells a story from back home",
    images: [
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery2.jpg", alt: "Injera platter with stews",       badge: "Family Style" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery3.jpg", alt: "Restaurant interior with decor" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery4.jpeg", alt: "Ethiopian coffee ceremony",       badge: "Coffee Ceremony" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery5.jpeg", alt: "Doro Wat close-up" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery6.jpg", alt: "Traditional Ethiopian spices",    badge: "Authentic Spices" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery7.jpg", alt: "Group dining family-style" },
    ],
  },

  testimonials: {
    title: "What Our Guests Say",
    subtitle: "From the Ethiopian community and beyond",
    items: [
      {
        name: "Alem T.",
        role: "Washington DC",
        text: "Nazret takes me back home every time. The doro wat tastes exactly like my mom's — rich, spicy, and full of love. The coffee ceremony is a must.",
        rating: 5,
      },
      {
        name: "Sarah M.",
        role: "First-Time Ethiopian Food Guest",
        text: "I had never tried Ethiopian food before and my coworker brought me here. I can't believe I waited this long. The injera, the lentils, everything was incredible.",
        rating: 5,
      },
      {
        name: "Marcus J.",
        role: "Adams Morgan Regular",
        text: "Best Ethiopian spot in DC — and that's saying something. The Nazret Special platter for two is unbeatable. Generous portions, warm staff, great atmosphere.",
        rating: 5,
      },
    ],
  },

  stats: {
    items: [
      { label: "Google Rating",   value: "4.8★"  },
      { label: "Years in DC",     value: "15+"   },
      { label: "Menu Items",      value: "40+"   },
      { label: "Halal Certified", value: "100%"  },
    ],
  },

  about: {
    title: "About Nazret Ethiopian Restaurant",
    story:
      "Named after the historic Ethiopian city of Nazret (Adama), our restaurant has been a home away from home for the Ethiopian community in Northern Virginia since 2009. Located in the heart of Skyline, Falls Church, we serve families, neighbors, and first-time guests alike. Our recipes have been passed down through generations — the same berbere blend, the same slow-cooked doro wat, the same love that goes into every dish. Whether you grew up eating injera or you're tasting it for the first time, we welcome you to our table. In Ethiopia, we say 'Enibla' — come, let's eat together.",
    image: "https://cdn.zikwala.com/demo/restaurant/about.jpeg",
    highlights: [
      { label: "Founded",      value: "2009, Falls Church VA"    },
      { label: "Cuisine",      value: "Traditional Ethiopian"    },
      { label: "Dietary",      value: "Halal · Vegan · GF"      },
      { label: "Location",     value: "Skyline, Falls Church VA" },
    ],
  },

  contact: {
    title: "Find Us & Get In Touch",
    subtitle:
      "Open daily 11AM – 10PM · 3821 S George Mason Dr, Unit D, Falls Church, VA 22041 (Skyline). Walk-ins welcome — reservations recommended on weekends.",
    mapEmbed: "https://maps.google.com/maps?q=3821+S+George+Mason+Dr,+Falls+Church,+VA+22041&t=&z=16&ie=UTF8&iwloc=&output=embed",
    formEndpoint: "mailto:info@nazretrestaurant.com",
  },

  catering: {
    title: "Ethiopian Catering by Nazret",
    subtitle:
      "Bring the authentic taste of Ethiopia to your event — full injera spreads, traditional stews, and coffee ceremony.",
    serviceArea: "Northern Virginia, DC & Maryland",
    minimumNotice: "48 hours advance notice required",
    eventTypes: [
      "Ethiopian Weddings & Receptions",
      "Timket & Holiday Celebrations",
      "Graduation & Birthday Parties",
      "Corporate Lunches",
      "Mehndi & Pre-Wedding Events",
      "Community & Cultural Events",
    ],
    packages: [
      {
        name: "Drop-Off Platter",
        description:
          "Large injera platters with your choice of stews — delivered hot, ready to serve, no staff needed.",
        priceFrom: "From $20/person",
        minimumGuests: 20,
        features: [
          "Choice of 3 meat or vegetarian stews",
          "Fresh injera included",
          "Salad & side dishes",
          "Delivered hot & on time",
        ],
      },
      {
        name: "Full Ethiopian Buffet",
        description:
          "Authentic buffet with setup, serving staff, and the complete Ethiopian dining experience.",
        priceFrom: "From $35/person",
        minimumGuests: 30,
        highlight: true,
        badge: "Most Popular",
        features: [
          "5+ meat & vegetarian stews",
          "Unlimited fresh injera",
          "Full setup & breakdown",
          "Dedicated serving staff",
          "Salads, sides & dessert",
          "Coffee ceremony add-on available",
        ],
      },
      {
        name: "Corporate Lunch",
        description:
          "Office Ethiopian lunch packages — great for team meetings, client lunches, and recurring orders.",
        priceFrom: "From $18/person",
        minimumGuests: 15,
        features: [
          "Individually boxed or family-style",
          "Vegetarian & halal options labeled",
          "Invoicing for businesses",
          "Recurring weekly scheduling",
        ],
      },
      {
        name: "Full Event Package",
        description:
          "Complete catering for weddings and large celebrations — custom menu, full staff, and optional coffee ceremony.",
        features: [
          "Custom menu consultation",
          "Full wait staff on-site",
          "Traditional coffee ceremony",
          "Cultural decorative setup",
          "Vegetarian & meat menus",
          "Post-event cleanup included",
        ],
        badge: "Custom",
      },
    ],
  },

  googleReviewUrl: "https://g.page/r/nazret-dc/review",

  social: {
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com",
  },
}
