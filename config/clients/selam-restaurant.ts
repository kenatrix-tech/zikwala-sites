import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Selam Ethiopian Restaurant",
    tagline: "Home-Cooked Ethiopian Food for the Whole Family",
    phone: "+1 (301) 555-0247",
    email: "hello@selamrestaurant.com",
    address: "6210 Greenbelt Rd",
    city: "Greenbelt",
    state: "MD",
    logo: "/clients/selam-restaurant/logo.png",
    niche: "restaurant",
  },

  theme: {
    primary: "#2D6A4F",
    secondary: "#1B4332",
    accent: "#F0FAF4",
    surface: "#FAFFFE",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "full",
    darkMode: false,
  },

  tier: "pro",
  isDemo: false,

  seo: {
    title: "Selam Ethiopian Restaurant | Greenbelt, MD",
    description:
      "Authentic home-cooked Ethiopian food in Greenbelt, MD. Generous portions, fasting menu, family platters, and catering. Walk-ins welcome. Call (301) 555-0247.",
    keywords: [
      "Ethiopian restaurant Greenbelt MD",
      "Ethiopian food Prince George's County",
      "Ethiopian restaurant Maryland",
      "Ethiopian fasting food Maryland",
      "injera Greenbelt MD",
      "Ethiopian catering Maryland",
      "family Ethiopian restaurant MD",
    ],
    ogImage: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
  },

  nav: {
    links: [
      { label: "Home",    href: "/" },
      { label: "Menu",    href: "/products" },
      { label: "Reserve", href: "/booking" },
      { label: "Catering", href: "/catering" },
      { label: "About",   href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Reserve a Table",
    ctaHref: "/booking",
  },

  hero: {
    variant: "centered",
    heading: "Feel at Home. Every Plate.",
    subheading:
      "Generous portions, warm hospitality, and the taste of Ethiopia — cooked the way your family would. Walk-ins always welcome.",
    cta:          { label: "Reserve a Table", href: "/booking" },
    secondaryCta: { label: "View Our Menu",   href: "/products" },
    image: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
    badge: "Greenbelt, MD · Family-Style Ethiopian",
    trustPoints: [
      "Generous Portions",
      "Fasting Menu Daily",
      "Walk-ins Welcome",
    ],
    socialProof: { count: "4.7★", label: "from 410 Google reviews" },
  },

  services: {
    title: "How We Serve You",
    subtitle: "Good food, good company — that's all you need",
    items: [
      {
        name: "Dine-In — Family Style",
        description:
          "Large injera platters loaded with your choice of stews — the way Ethiopians have always eaten together. Generous portions, always.",
        price: "Open Daily 11AM – 10PM",
        icon: "UtensilsCrossed",
      },
      {
        name: "Fasting Menu",
        description:
          "Full vegan fasting menu available every day — misir, gomen, shiro, atkilt, fosolia, and more. No meat, no dairy, no eggs.",
        price: "Available Daily",
        icon: "Leaf",
      },
      {
        name: "Takeout & Delivery",
        description:
          "Call ahead or order online for pickup. We also deliver through major platforms. Hot, fresh, and ready on time.",
        price: "Call to Order",
        icon: "Car",
      },
      {
        name: "Catering",
        description:
          "Ethiopian buffet catering for weddings, Timket, graduations, and community events across Maryland and DC.",
        price: "Custom Quote",
        icon: "Users",
      },
    ],
  },

  products: {
    title: "Our Menu",
    subtitle: "Cooked fresh daily — the way it's been done for generations",
    items: [
      {
        id: "tibs-selam",
        name: "Tibs",
        description: "Sautéed beef with onions, jalapeños, and Ethiopian spices. Served on injera with fresh salad.",
        price: 18.99,
        category: "Meat Dishes",
        badge: "Popular",
      },
      {
        id: "doro-wat-selam",
        name: "Doro Wat",
        description: "Slow-braised chicken in rich berbere sauce with boiled egg. A beloved Ethiopian classic.",
        price: 17.99,
        category: "Meat Dishes",
        badge: "Best Seller",
      },
      {
        id: "kitfo-selam",
        name: "Kitfo",
        description: "Finely minced beef seasoned with mitmita and niter kibbeh, with ayib cheese and collard greens.",
        price: 19.99,
        category: "Meat Dishes",
      },
      {
        id: "yebeg-selam",
        name: "Yebeg Tibs",
        description: "Tender lamb sautéed with onions, peppers, and house spices. Rich and satisfying.",
        price: 20.99,
        category: "Meat Dishes",
      },
      {
        id: "beyaynetu-selam",
        name: "Beyaynetu",
        description: "Full vegetarian platter — misir, gomen, shiro, atkilt, fosolia, and tikil gomen on injera.",
        price: 15.99,
        category: "Fasting / Vegetarian",
        badge: "Vegan",
      },
      {
        id: "misir-selam",
        name: "Misir Wat",
        description: "Red lentils slow-cooked in berbere sauce. Simple, hearty, and deeply flavorful.",
        price: 13.99,
        category: "Fasting / Vegetarian",
        badge: "Vegan",
      },
      {
        id: "shiro-selam",
        name: "Shiro Wat",
        description: "Creamy chickpea stew with garlic and Ethiopian spices. A fasting favorite.",
        price: 13.99,
        category: "Fasting / Vegetarian",
        badge: "Vegan",
      },
      {
        id: "family-platter-selam",
        name: "Family Platter for 4",
        description: "Feeds 4 generously — 2 meat dishes, beyaynetu, and a large injera. Best value for groups.",
        price: 69.99,
        category: "Platters",
        badge: "Best Value",
      },
      {
        id: "couple-platter",
        name: "Couple Platter for 2",
        description: "Perfect for two — 1 meat dish, beyaynetu, and injera.",
        price: 34.99,
        category: "Platters",
        badge: "Popular",
      },
      {
        id: "buna-selam",
        name: "Ethiopian Coffee (Buna)",
        description: "Traditional Ethiopian coffee — freshly brewed and served in a jebena with popcorn.",
        price: 5,
        category: "Beverages",
        badge: "Signature",
      },
    ],
  },

  gallery: {
    title: "Our Food",
    subtitle: "Honest portions, authentic flavors — straight from our kitchen",
    images: [
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_beyainet.jpg",  alt: "Beyaynetu platter",       badge: "Vegan Favorite" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_tibs.jpg",      alt: "Tibs" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_kitifo.jpg",    alt: "Kitfo",                   badge: "Family Favorite" },
      { src: "https://cdn.zikwala.com/demo/restaurant/shiro.jpg",          alt: "Shiro Wat" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery2.jpg",       alt: "Family sharing platter" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_tiresiga.jpg",  alt: "Traditional dish" },
    ],
  },

  testimonials: {
    title: "What Our Guests Say",
    subtitle: "4.7 stars · 410 Google reviews — a Greenbelt community staple",
    items: [
      {
        name: "Tigist B.",
        role: "Greenbelt, MD",
        text: "Selam is our family's go-to every Sunday after church. The portions are huge, the food tastes just like home, and the staff always treats us like family. We love this place.",
        rating: 5,
      },
      {
        name: "David O.",
        role: "College Park, MD",
        text: "Best Ethiopian food in Maryland. The tibs and misir wat are incredible. The prices are very fair and the portions are more than enough. I always leave full and happy.",
        rating: 5,
      },
      {
        name: "Meron H.",
        role: "Hyattsville, MD",
        text: "I've been coming here for 3 years. The fasting menu is amazing — huge variety, all fresh, all delicious. They never disappoint and the owners are so welcoming.",
        rating: 5,
      },
    ],
  },

  stats: {
    items: [
      { label: "Google Rating",  value: "4.7★"  },
      { label: "Google Reviews", value: "410"   },
      { label: "Walk-ins",       value: "Welcome" },
      { label: "Fasting Menu",   value: "Daily" },
    ],
  },

  about: {
    title: "About Selam Ethiopian Restaurant",
    story:
      "Selam means 'peace' in Amharic — and that's exactly what you'll feel when you walk through our doors. Founded by an Ethiopian family in Greenbelt, Maryland, Selam has been a gathering place for the Ethiopian community and our neighbors for years. We cook everything fresh daily using traditional recipes and generous portions. Whether you're coming alone, with family, or celebrating a special occasion, our door is always open. Enibla — let's eat together.",
    image: "https://cdn.zikwala.com/demo/restaurant/about.jpeg",
    highlights: [
      { label: "Location",  value: "Greenbelt, MD"          },
      { label: "Cuisine",   value: "Traditional Ethiopian"   },
      { label: "Portions",  value: "Generous & Affordable"  },
      { label: "Dietary",   value: "Fasting · Vegan · GF"   },
    ],
  },

  booking: {
    title: "Reserve a Table",
    subtitle: "Pick your party size, choose a date and time — we'll call to confirm.",
    openTime: "11:00",
    closeTime: "22:00",
    timeStep: 30,
    services: [],
  },

  contact: {
    title: "Find Us & Get In Touch",
    subtitle: "Open daily 11AM – 10PM · Walk-ins always welcome.",
    mapEmbed: "https://maps.google.com/maps?q=6210+Greenbelt+Rd,+Greenbelt,+MD+20770&output=embed",
    formEndpoint: "mailto:hello@selamrestaurant.com",
    submitLabel: "Send Message",
  },

  deliveryLinks: [
    { name: "Uber Eats", url: "https://www.ubereats.com/store/selam-ethiopian-restaurant" },
    { name: "DoorDash",  url: "https://www.doordash.com/store/selam-ethiopian-restaurant" },
    { name: "Grubhub",   url: "https://www.grubhub.com/restaurant/selam-ethiopian-restaurant" },
  ],

  stickyContact: "phone",

  catering: {
    title: "Catering by Selam",
    subtitle: "Authentic Ethiopian food for your event — Maryland, DC & Virginia.",
    serviceArea: "Maryland, DC & Northern Virginia",
    minimumNotice: "48 hours advance notice required",
    eventTypes: [
      "Ethiopian Weddings & Receptions",
      "Timket & Holiday Celebrations",
      "Birthday & Graduation Parties",
      "Church & Community Events",
      "Corporate Lunches",
      "Baby & Bridal Showers",
    ],
    packages: [
      {
        name: "Drop-Off Platter",
        description: "Hot injera platters delivered to your event — no staff needed, just great food.",
        priceFrom: "From $18/person",
        minimumGuests: 15,
        features: [
          "Choice of 3 stews",
          "Fresh injera included",
          "Salad & sides",
          "Delivered hot on time",
        ],
      },
      {
        name: "Full Buffet",
        description: "Complete Ethiopian buffet with setup, serving staff, and full breakdown.",
        priceFrom: "From $30/person",
        minimumGuests: 25,
        highlight: true,
        badge: "Most Popular",
        features: [
          "5+ meat & vegetarian stews",
          "Unlimited fresh injera",
          "Full setup & breakdown",
          "Serving staff included",
          "Coffee ceremony available",
        ],
      },
      {
        name: "Community Event",
        description: "Large-scale catering for church events, Timket, and community gatherings.",
        priceFrom: "From $15/person",
        minimumGuests: 50,
        features: [
          "Large batch cooking",
          "Full team on-site",
          "Fasting & non-fasting options",
          "Flexible setup styles",
        ],
      },
    ],
  },

  faq: [
    { question: "Are you open every day?", answer: "Yes — we are open daily from 11AM to 10PM including weekends. Walk-ins are always welcome." },
    { question: "Do you have a fasting menu?", answer: "Yes — our full vegan fasting menu is available every day. All fasting dishes are made without meat, dairy, or eggs." },
    { question: "Do you do takeout?", answer: "Yes — call ahead and your food will be ready when you arrive. We are also available on delivery platforms." },
    { question: "Do you cater events?", answer: "Yes — we cater weddings, Timket, graduations, church events, and corporate lunches across Maryland, DC, and Virginia." },
    { question: "How big are the portions?", answer: "We are known for generous portions. Our family platters easily feed 3-4 people. We never leave you hungry." },
    { question: "What is injera?", answer: "Injera is a soft, spongy Ethiopian flatbread made from teff. It is both the plate and the utensil — stews are served on top and you tear pieces to scoop them up." },
  ],

  googleReviewUrl: "https://www.google.com/maps/search/Selam+Ethiopian+Restaurant+Greenbelt+MD",

  social: {
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com",
  },
}
