import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Enat Ethiopian Restaurant",
    tagline: "Ethiopian Favorites in a Relaxed Dining Room — Alexandria, VA",
    phone: "(703) 642-3628",
    email: "hello@enatrestaurant.com",
    address: "4709 N Chambliss St",
    city: "Alexandria",
    state: "VA",
    logo: "/clients/enat-ethiopian-restaurant/logo.png",
    niche: "restaurant",
  },

  theme: {
    primary: "#5C1A0F",      // deep Ethiopian coffee brown
    secondary: "#C87941",    // warm amber / cinnamon
    accent: "#FDF3EC",       // warm cream
    surface: "#FFFAF5",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "lg",
    darkMode: false,
  },

  tier: "pro",
  isDemo: false,

  seo: {
    title: "Enat Ethiopian Restaurant | Alexandria, VA",
    description:
      "Ethiopian favorites — doro wat, Enat kitfo & tibs — in a relaxed dining room in Alexandria, VA. Great cocktails, full vegan menu, and good for watching sports. Call (703) 642-3628.",
    keywords: [
      "Ethiopian restaurant Alexandria VA",
      "Ethiopian food Alexandria Virginia",
      "doro wat Alexandria VA",
      "kitfo Alexandria VA",
      "Ethiopian restaurant Northern Virginia",
      "Ethiopian fasting menu Alexandria",
      "Ethiopian catering Alexandria VA",
    ],
    ogImage: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
  },

  nav: {
    links: [
      { label: "Home",     href: "/" },
      { label: "Menu",     href: "/products" },
      { label: "Reserve",  href: "/booking" },
      { label: "Catering", href: "/catering" },
      { label: "Gallery",  href: "/gallery" },
      { label: "About",    href: "/about" },
      { label: "Contact",  href: "/contact" },
    ],
    ctaLabel: "Reserve a Table",
    ctaHref: "/booking",
  },

  hero: {
    variant: "centered",
    heading: "Enat — Mother. Every Dish Made With Her Love.",
    subheading:
      "Doro wat, Enat kitfo, tibs, and the full Ethiopian coffee ceremony — served in a warm, relaxed dining room in Alexandria, VA. Cocktails, vegan menu, and always a great time.",
    cta:          { label: "Reserve a Table", href: "/booking" },
    secondaryCta: { label: "View Our Menu",   href: "/products" },
    image: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
    badge: "Alexandria, VA · Relaxed Ethiopian Dining",
    trustPoints: [
      "Great Cocktails & Bar",
      "Full Vegan Fasting Menu",
      "Good for Watching Sports",
    ],
    socialProof: { count: "4.8★", label: "Google reviews — Alexandria, VA" },
  },

  services: {
    title: "Dining at Enat",
    subtitle: "Great food, great drinks, great company",
    items: [
      {
        name: "Dine-In — Family Style",
        description:
          "Share a large injera platter loaded with slow-cooked stews — the authentic Ethiopian way. Relaxed atmosphere, generous portions, open daily.",
        price: "Open Daily",
        icon: "UtensilsCrossed",
      },
      {
        name: "Cocktails & Full Bar",
        description:
          "Craft cocktails, Ethiopian tej honey wine, beer, and a full bar. Great for date nights, group dinners, and watching the game.",
        price: "Full Bar",
        icon: "Coffee",
      },
      {
        name: "Vegetarian & Fasting Menu",
        description:
          "A full vegan fasting menu every day — misir, gomen, shiro, tikil gomen, fasolia, and our Vegan Combination. Made without meat, dairy, or eggs.",
        price: "Available Daily",
        icon: "Leaf",
      },
      {
        name: "Catering & Private Events",
        description:
          "Ethiopian buffet catering for weddings, Timket, graduations, and corporate events across DC, MD & VA.",
        price: "Custom Quote",
        icon: "Users",
      },
    ],
  },

  products: {
    title: "Our Menu",
    subtitle: "Every dish served on freshly made injera — the bread, the plate, and the spoon",
    items: [

      // ── Appetizers ────────────────────────────────────────────
      {
        id: "enat-sambussa",
        name: "Sambussa",
        description: "Crisp fried pastry filled with mixed vegetables and lentils.",
        price: 3.25,
        category: "Appetizers",
        badge: "Popular",
      },
      {
        id: "enat-aware-wings",
        name: "Aware Wings",
        description: "Eight pieces of chicken wing sections tossed in herbed berbere sauce.",
        price: 9.95,
        category: "Appetizers",
        badge: "Popular",
      },
      {
        id: "enat-kategna",
        name: "Kategna",
        description: "Toasted injera topped with buttered berbere spread. Add imported Ethiopian teff injera +$4.25.",
        price: 8.95,
        category: "Appetizers",
      },
      {
        id: "enat-timatim-salata",
        name: "Timatim Salata",
        description: "Tomatoes, jalapeño, onions, mitmita, and house dressing.",
        price: 8.95,
        category: "Appetizers",
      },
      {
        id: "enat-buticha",
        name: "Buticha",
        description: "Chickpea dumpling — chilled and crushed with onions, garlic, jalapeño, olive oil, lime juice, and spice.",
        price: 7.95,
        category: "Appetizers",
        badge: "Vegan",
      },

      // ── Meat Dishes ───────────────────────────────────────────
      {
        id: "enat-doro-wot",
        name: "Doro Wot",
        description: "Tender bone-in chicken simmered in a hearty berbere sauce, served with hard-boiled egg and aybe cheese.",
        price: 18.95,
        category: "Meat Dishes",
        badge: "Best Seller",
      },
      {
        id: "enat-bere-wot",
        name: "Bere Wot",
        description: "Tender beef stew in a spicy, rich, herbed berbere sauce, served with aybe cheese.",
        price: 16.95,
        category: "Meat Dishes",
      },
      {
        id: "enat-yebeg-wot",
        name: "Yebeg Wot",
        description: "Lamb shank stew in herbed berbere sauce. Rich, slow-cooked, and deeply flavorful.",
        price: 14.95,
        category: "Meat Dishes",
      },
      {
        id: "enat-begg-alicha",
        name: "Begg Alicha",
        description: "Slow-stewed bone-in lamb chunks in a mild turmeric base broth. Tender and aromatic.",
        price: 17.95,
        category: "Meat Dishes",
      },
      {
        id: "enat-minchet-abish",
        name: "Minchet Abish",
        description: "Minced lean beef stew in a rich herb berbere sauce. Hearty and bold.",
        price: 14.95,
        category: "Meat Dishes",
      },
      {
        id: "enat-bozana-shiro",
        name: "Bozana Shiro",
        description: "Beef tips simmered in herb niter kibe and shiro. A rich, creamy crowd favorite.",
        price: 16.95,
        category: "Meat Dishes",
      },

      // ── Tibs ─────────────────────────────────────────────────
      {
        id: "enat-kitfo",
        name: "Enat Kitfo",
        description: "Flavorful crumbled lean beef tossed in kibe and mitmita, traditionally eaten very rare. Served with aybe and gomen.",
        price: 17.95,
        category: "Tibs",
        badge: "Signature",
      },
      {
        id: "enat-chekina-tibs",
        name: "Chekina Tibs",
        description: "Tenderloin tips sautéed in onions, hot green peppers, and Ethiopian butter.",
        price: 17.95,
        category: "Tibs",
        badge: "Popular",
      },
      {
        id: "enat-goden-tibs",
        name: "Goden Tibs",
        description: "Beef ribs sautéed with onion, karya, and garlic. Bold, meaty, and deeply satisfying.",
        price: 19.95,
        category: "Tibs",
        badge: "Chef's Pick",
      },
      {
        id: "enat-yebeg-tibs",
        name: "Yebeg Tibs",
        description: "Lamb tips sautéed in onions, hot green peppers, and Ethiopian butter.",
        price: 18.97,
        category: "Tibs",
      },
      {
        id: "enat-gored-gored",
        name: "Gored Gored",
        description: "Hand-cubed lean beef knuckle mixed with berbere, kibe, and Ethiopian herbs. Traditionally cooked very rare.",
        price: 16.95,
        category: "Tibs",
      },
      {
        id: "enat-dullet",
        name: "Dullet",
        description: "Minced lamb tripe, liver, and lean red meat with onions, karia, cardamom, mitmita, and kibe. Cooked to order.",
        price: 16.95,
        category: "Tibs",
      },

      // ── Vegetarian ────────────────────────────────────────────
      {
        id: "enat-vegan-combo",
        name: "Vegan Combination",
        description: "An array of ten of our vegan dishes — the full plant-based Ethiopian experience on one platter.",
        price: 16.95,
        category: "Vegetarian & Fasting",
        badge: "Vegan",
      },
      {
        id: "enat-miser",
        name: "Miser",
        description: "Split red lentil simmered in a tomato-based berbere-spiced sauce. Simple, hearty, and deeply flavorful.",
        price: 14.95,
        category: "Vegetarian & Fasting",
        badge: "Vegan",
      },
      {
        id: "enat-shiro",
        name: "Shiro",
        description: "Porridge of sun-dried yellow split peas, chickpeas, garlic, herbs, and spices. A fasting staple.",
        price: 14.95,
        category: "Vegetarian & Fasting",
        badge: "Vegan",
      },
      {
        id: "enat-engudaey-tibs",
        name: "Engudaey Tibs",
        description: "Portobello mushroom sautéed in red wine, onion, garlic, tomato, karia, and a touch of mitmita.",
        price: 16.95,
        category: "Vegetarian & Fasting",
        badge: "Vegan",
      },
      {
        id: "enat-gomen",
        name: "Gomen",
        description: "Hand-cut collard greens slow-cooked with onions and Ethiopian spices.",
        price: 13.95,
        category: "Vegetarian & Fasting",
        badge: "Vegan",
      },

      // ── Combos & Platters ─────────────────────────────────────
      {
        id: "enat-agelgil",
        name: "Agelgil",
        description: "Array of qey wot, allecha, gomen be sigga, kitfo, and choice of two vegan items. The complete Enat experience.",
        price: 22.95,
        category: "Combos & Platters",
        badge: "Best Value",
      },
      {
        id: "enat-agelgel-tibs",
        name: "Enat Agelgel + Choice of Tibs",
        description: "Wot, allecha, gomen be segga, Enat kitfo, and two vegetables — served with your choice of tibs. Perfect for two.",
        price: 40.95,
        category: "Combos & Platters",
        badge: "Popular",
      },
      {
        id: "enat-ybeg-combo",
        name: "Ybeg Key & Allecha",
        description: "Lamb key wot and allecha stew — a generous serving of two classic Ethiopian lamb preparations.",
        price: 18.95,
        category: "Combos & Platters",
      },

      // ── Breakfast ─────────────────────────────────────────────
      {
        id: "enat-breakfast-combo",
        name: "Breakfast Combination",
        description: "Platter of chechebsa, kinche, enkulal firfir, and ye kurse firfir. A full Ethiopian breakfast.",
        price: 13.95,
        category: "Breakfast",
        badge: "Popular",
      },
      {
        id: "enat-chechebsa",
        name: "Chechebsa",
        description: "Pan-fried flatbread pieces mixed with berbere and herb butter, served with yogurt and honey.",
        price: 8.95,
        category: "Breakfast",
      },
      {
        id: "enat-enqulale",
        name: "Enqulale be Sigga",
        description: "Three eggs, ground beef, diced tomatoes, peppers, onions, and herb butter.",
        price: 11.95,
        category: "Breakfast",
      },
      {
        id: "enat-ful",
        name: "Ful",
        description: "Chickpea stew topped with diced timatim, karia, shinkurt, boiled egg, feta cheese, yogurt, berbere, and herbed butter.",
        price: 9.95,
        category: "Breakfast",
      },

      // ── Seafood ───────────────────────────────────────────────
      {
        id: "enat-asa-gulash",
        name: "Asa Gulash",
        description: "Cubed tilapia with onions, garlic, tomato, karia, and a touch of tomato berbere sauce.",
        price: 15.95,
        category: "Seafood",
      },
      {
        id: "enat-asa-dullet",
        name: "Asa Dullet",
        description: "Minced tilapia sautéed with diced onion, karia, garlic, mitmita, seasoned with herbs and olive oil.",
        price: 15.95,
        category: "Seafood",
      },

      // ── Beverages ─────────────────────────────────────────────
      {
        id: "enat-buna-ceremony",
        name: "Ethiopian Coffee Ceremony",
        description: "Three rounds of freshly roasted and brewed buna, served with incense and popcorn — the full traditional experience.",
        price: 12,
        category: "Beverages",
        badge: "Signature",
      },
    ],
  },

  gallery: {
    title: "Food, Culture & Good Times",
    subtitle: "Ethiopian favorites in a warm, relaxed dining room",
    images: [
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_ribs.jpg",      alt: "Goden Tibs",              badge: "Chef's Pick" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_kitifo.jpg",    alt: "Enat Kitfo" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_beyainet.jpg",  alt: "Vegan Combination",       badge: "Vegan Favorite" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_tibs.jpg",      alt: "Chekina Tibs" },
      { src: "https://cdn.zikwala.com/demo/restaurant/shiro.jpg",          alt: "Shiro" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu-special.jpeg",  alt: "Agelgil Platter" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_tiresiga.jpg",  alt: "Tirre Segga" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery2.jpg",       alt: "Family dining",           badge: "Family Style" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery4.jpeg",      alt: "Coffee ceremony",         badge: "Coffee Ceremony" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery6.jpg",       alt: "Sambussa",                badge: "Authentic" },
    ],
  },

  testimonials: {
    title: "What Our Guests Say",
    subtitle: "A Northern Virginia staple — loved by the Ethiopian community and beyond",
    items: [
      {
        name: "Mekdes A.",
        role: "Alexandria, VA",
        text: "Enat is hands down the best Ethiopian food in Northern Virginia. The kitfo is incredible and the cocktails are a nice surprise. Love that I can watch the game here too.",
        rating: 5,
      },
      {
        name: "James R.",
        role: "First-Time Guest",
        text: "My coworker brought me here for the first time. I ordered the Agelgil platter and it was overwhelming in the best way. Staff was so warm and walked me through every dish.",
        rating: 5,
      },
      {
        name: "Tigist W.",
        role: "Regular, NOVA",
        text: "The vegan combination is the best in the area. Ten dishes, all fresh, all delicious. I come for the fasting menu at least twice a month. Never disappoints.",
        rating: 5,
      },
    ],
  },

  stats: {
    items: [
      { label: "Google Rating",  value: "4.8★"      },
      { label: "Menu Items",     value: "90+"       },
      { label: "Fasting Menu",   value: "Daily"     },
      { label: "Cocktails",      value: "Full Bar"  },
    ],
  },

  about: {
    title: "About Enat Ethiopian Restaurant",
    story:
      "Enat means 'mother' in Amharic — and that warmth is in every dish we serve. Located at 4709 N Chambliss St in Alexandria, Virginia, Enat has been a neighborhood favorite for Ethiopian home cooking, great cocktails, and a relaxed vibe. Our menu covers the full range of Ethiopian cuisine — from doro wat and kitfo to a complete vegan fasting menu with ten dishes. Come hungry, come with friends, or catch the game at the bar. We have something for everyone. Enibla — come, let's eat together.",
    image: "https://cdn.zikwala.com/demo/restaurant/about.jpeg",
    highlights: [
      { label: "Location",  value: "Alexandria, VA 22312"       },
      { label: "Cuisine",   value: "Traditional Ethiopian"       },
      { label: "Bar",       value: "Cocktails & Ethiopian Tej"   },
      { label: "Dietary",   value: "Fasting · Vegan · GF"        },
    ],
  },

  booking: {
    title: "Reserve a Table",
    subtitle: "Pick your party size, choose a date and time — we'll call to confirm your reservation.",
    openTime: "11:00",
    closeTime: "22:00",
    timeStep: 30,
    services: [],
  },

  contact: {
    title: "Find Us & Get In Touch",
    subtitle: "4709 N Chambliss St, Alexandria, VA 22312 · Call (703) 642-3628",
    mapEmbed: "https://maps.google.com/maps?q=4709+N+Chambliss+St,+Alexandria,+VA+22312&output=embed",
    formEndpoint: "mailto:hello@enatrestaurant.com",
    notifyEmail: "hello@enatrestaurant.com",
    submitLabel: "Send Message",
  },

  deliveryLinks: [
    { name: "Grubhub",   url: "https://www.grubhub.com/restaurant/enat-restaurant-4709-n-chambliss-st-alexandria/553359" },
    { name: "Uber Eats", url: "https://www.ubereats.com/store/enat-ethiopian-restaurant-alexandria" },
    { name: "DoorDash",  url: "https://www.doordash.com/store/enat-ethiopian-restaurant-alexandria" },
  ],

  stickyContact: "phone",

  catering: {
    title: "Catering by Enat",
    subtitle: "Authentic Ethiopian cuisine for your event — DC, Maryland & Virginia.",
    serviceArea: "Northern Virginia, DC & Maryland",
    minimumNotice: "48 hours advance notice required",
    eventTypes: [
      "Ethiopian Weddings & Receptions",
      "Timket & Holiday Celebrations",
      "Graduation & Birthday Parties",
      "Corporate Lunches & Dinners",
      "Community & Cultural Events",
      "Sports Watch Parties",
    ],
    packages: [
      {
        name: "Drop-Off Platter",
        description: "Large injera platters with your choice of stews — delivered hot, ready to serve, no staff needed.",
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
        description: "Complete buffet with setup, serving staff, and the full Enat dining experience.",
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
        description: "Office Ethiopian lunch packages for team meetings and client lunches.",
        priceFrom: "From $18/person",
        minimumGuests: 15,
        features: [
          "Individually boxed or family-style",
          "Vegetarian & fasting options labeled",
          "Invoicing for businesses",
          "Recurring scheduling available",
        ],
      },
    ],
  },

  areasServed: [
    { name: "Alexandria, VA",      description: "Our home — walk-ins welcome daily" },
    { name: "Arlington, VA",       description: "Dine-in & catering delivery" },
    { name: "Falls Church, VA",    description: "Dine-in & catering delivery" },
    { name: "Fairfax, VA",         description: "Catering & private events" },
    { name: "Washington, DC",      description: "Catering & private events" },
    { name: "Silver Spring, MD",   description: "Catering & private events" },
  ],

  faq: [
    {
      question: "Where are you located?",
      answer: "We are at 4709 N Chambliss St, Alexandria, VA 22312. Free parking is available on-site.",
    },
    {
      question: "What are your hours?",
      answer: "We are open daily. Call us at (703) 642-3628 for current hours or to make a reservation.",
    },
    {
      question: "Do you have a bar and cocktails?",
      answer: "Yes — we have a full bar with craft cocktails, Ethiopian tej honey wine, beer, and more. Great for date nights and group dinners.",
    },
    {
      question: "Is it good for watching sports?",
      answer: "Yes — we have TVs and a great bar area. Come for the game, stay for the kitfo.",
    },
    {
      question: "Do you have vegetarian and vegan options?",
      answer: "Yes — we have an extensive vegan menu including our Vegan Combination with 10 dishes. Everything is made without meat, dairy, or eggs. Full fasting menu available every day.",
    },
    {
      question: "What is injera?",
      answer: "Injera is a soft, spongy flatbread made from fermented teff flour — it is both the plate and the utensil. Stews are served on top and you tear pieces to scoop them up. Naturally vegan and gluten-friendly.",
    },
    {
      question: "What is the Ethiopian coffee ceremony?",
      answer: "Beans are roasted fresh, brewed three times, and served with incense and popcorn — the full traditional experience. Available at $12.",
    },
    {
      question: "Do you offer takeout and delivery?",
      answer: "Yes — takeout available by phone at (703) 642-3628. Also available on Grubhub, Uber Eats, and DoorDash.",
    },
    {
      question: "Do you cater events?",
      answer: "Yes — we cater weddings, corporate lunches, graduations, and community events across Northern Virginia, DC, and Maryland. Contact us for a custom quote.",
    },
  ],

  googleReviewUrl: "https://www.google.com/maps/search/Enat+Restaurant+4709+N+Chambliss+St+Alexandria+VA",

  social: {
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com",
  },
}
