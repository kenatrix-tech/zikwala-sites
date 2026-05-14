import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Addis Bistro",
    tagline: "Modern Ethiopian Cuisine in the Heart of Arlington, VA",
    phone: "+1 (703) 555-0192",
    email: "hello@addisbistro.com",
    address: "2100 Clarendon Blvd",
    city: "Arlington",
    state: "VA",
    logo: "/clients/addis-bistro/logo.png",
    niche: "restaurant",
  },

  theme: {
    primary: "#1C1C2E",
    secondary: "#C9A227",
    accent: "#FEF8EC",
    surface: "#FDFBF5",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "lg",
    darkMode: false,
  },

  tier: "pro",
  isDemo: false,

  seo: {
    title: "Addis Bistro | Modern Ethiopian Cuisine in Arlington, VA",
    description:
      "Contemporary Ethiopian cuisine in Clarendon, Arlington. Elevated injera platters, craft cocktails, wood-fired dishes, and a full bar. Reservations recommended.",
    keywords: [
      "Ethiopian restaurant Arlington VA",
      "Ethiopian food Clarendon",
      "modern Ethiopian cuisine Northern Virginia",
      "Ethiopian restaurant DC area",
      "upscale Ethiopian Arlington",
      "Ethiopian dinner Arlington VA",
    ],
    ogImage: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
  },

  nav: {
    links: [
      { label: "Home",    href: "/" },
      { label: "Menu",    href: "/products" },
      { label: "Reserve", href: "/booking" },
      { label: "Gallery", href: "/gallery" },
      { label: "About",   href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Reserve a Table",
    ctaHref: "/booking",
  },

  hero: {
    variant: "centered",
    heading: "Ethiopia, Elevated.",
    subheading:
      "Classic recipes reimagined with seasonal ingredients and a modern hand. Dine-in, share plates, full bar — in the heart of Clarendon.",
    cta:          { label: "Reserve a Table", href: "/booking" },
    secondaryCta: { label: "View Our Menu",   href: "/products" },
    image: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
    badge: "Clarendon, Arlington VA",
    trustPoints: [
      "Authentic Ethiopian Recipes",
      "Full Bar & Craft Cocktails",
      "Orthodox Fasting Menu",
    ],
    socialProof: { count: "4.8★", label: "from 680 Google reviews" },
  },

  services: {
    title: "Dining at Addis Bistro",
    subtitle: "Every seat tells a story from back home",
    items: [
      {
        name: "Dinner Service",
        description:
          "Intimate dining with a seasonal Ethiopian menu. Sharing platters, curated wine pairings, and warm hospitality every evening.",
        price: "Tue – Sun, 5PM – 10PM",
        icon: "UtensilsCrossed",
      },
      {
        name: "Weekend Brunch",
        description:
          "Ethiopian brunch classics — firfir, chechebsa, fresh juice, and our signature buna (coffee ceremony).",
        price: "Sat & Sun, 11AM – 3PM",
        icon: "Coffee",
      },
      {
        name: "Vegetarian / Fasting Menu",
        description:
          "A full vegan fasting menu — misir, gomen, shiro, atkilt, and beyaynetu — available every day.",
        price: "Available Daily",
        icon: "Leaf",
      },
      {
        name: "Private Events",
        description:
          "Private dining room for up to 18 guests. Custom menus for birthdays, anniversaries, and corporate dinners.",
        price: "By Reservation",
        icon: "Users",
      },
    ],
  },

  products: {
    title: "Our Menu",
    subtitle: "Traditional flavors, modern presentation — served on fresh injera",
    items: [
      {
        id: "addis-tibs",
        name: "Addis Tibs",
        description: "Tender beef tips sautéed with onions, rosemary, and house spices. Served with injera and fresh salad.",
        price: 22.99,
        category: "Mains",
        badge: "Best Seller",
      },
      {
        id: "doro-wat",
        name: "Doro Wat",
        description: "Slow-braised chicken legs in a rich berbere sauce with boiled egg. A classic Ethiopian celebration dish.",
        price: 21.99,
        category: "Mains",
        badge: "Chef's Pick",
      },
      {
        id: "yebeg-tibs",
        name: "Yebeg Tibs",
        description: "Sautéed lamb with jalapeños, onions, and Ethiopian spices. Bold, tender, and deeply flavored.",
        price: 24.99,
        category: "Mains",
      },
      {
        id: "kitfo",
        name: "Kitfo",
        description: "Finely minced lean beef seasoned with mitmita and niter kibbeh. Served raw or lightly warmed with ayib and gomen.",
        price: 23.99,
        category: "Mains",
      },
      {
        id: "beyaynetu",
        name: "Beyaynetu",
        description: "A generous vegetarian platter — misir, gomen, shiro, atkilt, fosolia, and salad on injera.",
        price: 18.99,
        category: "Vegetarian",
        badge: "Vegan",
      },
      {
        id: "shiro-deluxe",
        name: "Shiro Deluxe",
        description: "Creamy chickpea stew with garlic and Ethiopian spices. Served with injera and a side of ayib.",
        price: 16.99,
        category: "Vegetarian",
        badge: "Vegan",
      },
      {
        id: "addis-platter-2",
        name: "Addis Platter for 2",
        description: "A curated sharing platter for two — choice of 2 meat dishes + beyaynetu on a large injera.",
        price: 48.99,
        category: "Platters",
        badge: "Popular",
      },
      {
        id: "family-platter",
        name: "Family Platter for 4",
        description: "The full Addis experience — 3 meat dishes, beyaynetu, injera, and house salad for four guests.",
        price: 89.99,
        category: "Platters",
        badge: "Best Value",
      },
      {
        id: "buna-ceremony",
        name: "Ethiopian Coffee Ceremony",
        description: "Three rounds of freshly roasted buna, incense, and popcorn — the full traditional experience.",
        price: 12,
        category: "Beverages",
        badge: "Signature",
      },
      {
        id: "tej-cocktail",
        name: "Tej Honey Wine",
        description: "Traditional Ethiopian honey wine — lightly sweet, mildly fermented, served chilled.",
        price: 10,
        category: "Beverages",
      },
    ],
  },

  gallery: {
    title: "Food & Atmosphere",
    subtitle: "Where tradition meets a modern table",
    images: [
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_tibs.jpg",      alt: "Addis Tibs",              badge: "Signature Dish" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_kitifo.jpg",    alt: "Kitfo platter" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_beyainet.jpg",  alt: "Beyaynetu vegetarian platter", badge: "Vegan Favorite" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_ribs.jpg",      alt: "Yebeg Tibs" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery2.jpg",       alt: "Dining room family-style", badge: "Dine-In" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery4.jpeg",      alt: "Coffee ceremony",          badge: "Coffee Ceremony" },
    ],
  },

  testimonials: {
    title: "What Our Guests Say",
    subtitle: "4.8 stars · 680 Google reviews — a DMV favorite",
    items: [
      {
        name: "Rahel T.",
        role: "Arlington, VA",
        text: "Addis Bistro is the best Ethiopian restaurant in Northern Virginia. The tibs are perfectly spiced and the atmosphere is beautiful. I bring all my friends here.",
        rating: 5,
      },
      {
        name: "Michael B.",
        role: "First-Time Guest, DC",
        text: "My first time trying Ethiopian food and I was completely blown away. The staff walked me through every dish. The beyaynetu platter was incredible — will be back.",
        rating: 5,
      },
      {
        name: "Sara K.",
        role: "Regular, Clarendon",
        text: "The coffee ceremony is a must. We come every month and it never disappoints. The doro wat is the best I've had outside of Addis Ababa.",
        rating: 5,
      },
    ],
  },

  stats: {
    items: [
      { label: "Google Rating",   value: "4.8★"  },
      { label: "Google Reviews",  value: "680"   },
      { label: "Years in Clarendon", value: "6+" },
      { label: "Fasting Menu",    value: "Daily" },
    ],
  },

  about: {
    title: "About Addis Bistro",
    story:
      "Addis Bistro was founded with one mission — bring the warmth and flavor of Ethiopian home cooking to the modern table. Located in the heart of Clarendon, Arlington, we serve the DC metro community with authentic recipes passed down through generations, prepared with fresh, locally sourced ingredients. Whether you grew up eating injera or you're experiencing it for the first time, our table is yours. In Amharic, we say 'Enibla' — come, let's eat together.",
    image: "https://cdn.zikwala.com/demo/restaurant/about.jpeg",
    highlights: [
      { label: "Location",  value: "Clarendon, Arlington VA" },
      { label: "Cuisine",   value: "Modern Ethiopian"        },
      { label: "Bar",       value: "Full Bar & Wine"         },
      { label: "Dietary",   value: "Fasting · Vegan · GF"   },
    ],
  },

  booking: {
    title: "Reserve a Table",
    subtitle: "Pick your party size, choose a date and time — we'll confirm your reservation shortly.",
    openTime: "11:00",
    closeTime: "22:00",
    timeStep: 30,
    services: [],
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Questions about the menu, private dining, or catering? We'd love to hear from you.",
    mapEmbed: "https://maps.google.com/maps?q=2100+Clarendon+Blvd,+Arlington,+VA+22201&output=embed",
    formEndpoint: "mailto:hello@addisbistro.com",
    submitLabel: "Send Message",
  },

  deliveryLinks: [
    { name: "Uber Eats", url: "https://www.ubereats.com/store/addis-bistro" },
    { name: "DoorDash",  url: "https://www.doordash.com/store/addis-bistro" },
    { name: "Grubhub",   url: "https://www.grubhub.com/restaurant/addis-bistro" },
  ],

  stickyContact: "phone",

  catering: {
    title: "Catering by Addis Bistro",
    subtitle: "Authentic Ethiopian cuisine for your event — DC, Maryland & Virginia.",
    serviceArea: "DC, Maryland & Virginia",
    minimumNotice: "48 hours advance notice required",
    eventTypes: [
      "Ethiopian Weddings & Receptions",
      "Corporate Lunches & Dinners",
      "Birthday & Anniversary Parties",
      "Timket & Holiday Celebrations",
      "Graduation Parties",
      "Community & Cultural Events",
    ],
    packages: [
      {
        name: "Drop-Off Platter",
        description: "Large injera platters with your choice of stews — delivered hot and ready to serve.",
        priceFrom: "From $22/person",
        minimumGuests: 15,
        features: [
          "Choice of 3 meat or vegetarian stews",
          "Fresh injera included",
          "Salad & side dishes",
          "Delivered hot & on time",
        ],
      },
      {
        name: "Full Ethiopian Buffet",
        description: "Complete buffet with setup, serving staff, and the full Ethiopian dining experience.",
        priceFrom: "From $38/person",
        minimumGuests: 25,
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
        description: "Office Ethiopian lunch packages for team meetings and client lunches.",
        priceFrom: "From $20/person",
        minimumGuests: 10,
        features: [
          "Individually boxed or family-style",
          "Vegetarian & fasting options labeled",
          "Invoicing for businesses",
          "Recurring scheduling available",
        ],
      },
    ],
  },

  faq: [
    { question: "What are your hours?", answer: "Dinner Tuesday–Sunday 5PM–10PM. Weekend brunch Saturday–Sunday 11AM–3PM. Closed Mondays." },
    { question: "Do you take reservations?", answer: "Yes — reserve online, call us, or send a WhatsApp message. Reservations strongly recommended on weekends." },
    { question: "Do you have a fasting menu?", answer: "Yes — our full vegan fasting menu is available every day. All dishes are made without meat, dairy, or eggs." },
    { question: "What is injera?", answer: "Injera is a spongy Ethiopian flatbread made from teff flour. It serves as both the plate and utensil — stews are served on top and you tear pieces to scoop them up." },
    { question: "Do you have a full bar?", answer: "Yes — we serve craft cocktails, wine, beer, and traditional Ethiopian tej (honey wine)." },
    { question: "Do you cater events?", answer: "Yes — we cater weddings, corporate events, and celebrations across DC, Maryland, and Virginia. Contact us for a custom quote." },
  ],

  googleReviewUrl: "https://www.google.com/maps/search/Addis+Bistro+2100+Clarendon+Blvd+Arlington+VA",

  social: {
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com",
  },
}
