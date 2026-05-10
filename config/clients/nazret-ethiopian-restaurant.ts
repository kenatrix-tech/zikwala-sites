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
    primary: "#C0452A",      // terracotta red (berbere spice)
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
      "Ethiopian fasting food Northern Virginia",
    ],
    ogImage: "https://cdn.zikwala.com/demo/restaurant/hero_nazeret.jpg",
  },

  nav: {
    links: [
      { label: "Home",     href: "/" },
      { label: "Menu",     href: "/products" },
      { label: "Catering", href: "/catering" },
      { label: "Gallery",  href: "/gallery" },
      { label: "About",    href: "/about" },
      { label: "Contact",  href: "/contact" },
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
    badge: "Skyline, Falls Church VA · Ethiopian Cuisine",
    trustPoints: [
      "100% Authentic Recipes",
      "Orthodox Fasting Menu",
      "Traditional Coffee Ceremony",
    ],
    socialProof: { count: "4.9★", label: "from 1,343 Google reviews" },
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
        price: "Ask your server",
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

      // ── Entrée ────────────────────────────────────────────────
      {
        id: "derek-tibs",
        name: "Derek Tibs",
        description: "Sautéed beef strips with onions, bell peppers, and tomatoes, served with rolled flatbread and a side of sauce.",
        price: 20.99,
        category: "Entrée",
        badge: "Popular",
      },
      {
        id: "awaze-tibs",
        name: "Awaze Tibs",
        description: "Tender beef sautéed with onions, jalapeños, and Ethiopian spices, accompanied by soft injera bread.",
        price: 20.99,
        category: "Entrée",
        badge: "Popular",
      },
      {
        id: "doro-awaze-tibs",
        name: "Doro Awaze Tibs",
        description: "Chicken tibs sautéed with awaze sauce, a traditional Ethiopian chili paste.",
        price: 16.99,
        category: "Entrée",
      },
      {
        id: "tibs-firfir",
        name: "Tibs Firfir",
        description: "Sautéed beef pieces mixed with injera, seasoned with onions, tomatoes, and spices.",
        price: 17.99,
        category: "Entrée",
      },
      {
        id: "shint-tibs",
        name: "Shint Tibs",
        description: "Tender beef pieces sautéed with onions, garlic, and green peppers in a savory sauce.",
        price: 20.99,
        category: "Entrée",
      },
      {
        id: "dullet",
        name: "Dullet",
        description: "Finely minced tripe, liver, and beef sautéed with onions and green peppers, seasoned with Ethiopian spices.",
        price: 20.99,
        category: "Entrée",
      },
      {
        id: "yebeg-kikil",
        name: "Yebeg Kikil",
        description: "Tender lamb stew simmered with split peas, seasoned with Ethiopian spices, and garnished with sliced green peppers.",
        price: 20.99,
        category: "Entrée",
      },
      {
        id: "bozena-shiro",
        name: "Bozena Shiro",
        description: "Tender beef pieces cooked with seasoned chickpea flour stew, served with soft injera flatbread.",
        price: 17.99,
        category: "Entrée",
      },
      {
        id: "fish-goulash",
        name: "Fish Goulash",
        description: "Tender fish goulash in a savory Ethiopian sauce, seasoned with traditional spices.",
        price: 20.99,
        category: "Entrée",
      },
      {
        id: "pan-fried-fish",
        name: "Pan Fried Fish",
        description: "Pan-fried fish fillets topped with a savory sauce, accompanied by seasoned rice with colorful bell peppers and fresh herbs, garnished with a lemon wedge.",
        price: 22.99,
        category: "Entrée",
      },

      // ── Kitfo/Nazret/Combo ────────────────────────────────────
      {
        id: "regular-platter",
        name: "Regular Platter",
        description: "Finely chopped raw beef seasoned with spiced butter and mitmita, served with collard greens, yellow split peas, red lentils, and stewed cabbage on injera.",
        price: 39.99,
        category: "Kitfo/Nazret/Combo",
        badge: "Popular",
      },
      {
        id: "kitfo-special",
        name: "Kitfo Special",
        description: "Minced beef seasoned with mitmita and niter kibbeh, accompanied by ayib cheese, collard greens, and injera.",
        price: 18.99,
        category: "Kitfo/Nazret/Combo",
      },
      {
        id: "ethiopian-injera-side",
        name: "Ethiopian Injera",
        description: "Freshly made Ethiopian injera served with collard greens, lentil stew, cabbage and carrots, and a fresh salad.",
        price: 4.00,
        category: "Kitfo/Nazret/Combo",
        badge: "Popular",
      },

      // ── Platter and Combo ─────────────────────────────────────
      {
        id: "platter-lamb",
        name: "Regular Platter with Lamb",
        description: "Regular Ethiopian platter highlighting lamb, seasoned with traditional Ethiopian spices, served family-style on injera.",
        price: 36.99,
        category: "Platter and Combo",
      },
      {
        id: "platter-awaze-tibs",
        name: "Regular Platter with Awaze Tibs",
        description: "Regular platter with awaze tibs — meat tips in a traditional Ethiopian chili sauce, served family-style on injera.",
        price: 38.91,
        category: "Platter and Combo",
      },

      // ── Vegetarian ────────────────────────────────────────────
      {
        id: "special-veggie-combo",
        name: "Special Veggie Combo",
        description: "Assorted vegetarian Ethiopian dishes combined into one combo platter.",
        price: 18.99,
        category: "Vegetarian",
        badge: "Popular",
      },
      {
        id: "missir-wot",
        name: "Missir Wot",
        description: "Rich lentil stew seasoned with berbere spice, featuring tender lentils and chunks of green vegetables.",
        price: 15.99,
        category: "Vegetarian",
        badge: "Vegan",
      },
      {
        id: "shiro-wot",
        name: "Shiro Wot",
        description: "Creamy chickpea stew paired with a vibrant mix of sautéed greens, spiced lentils, and a fresh vegetable salad.",
        price: 15.99,
        category: "Vegetarian",
        badge: "Vegan",
      },

      // ── Yetom Firfir (Fasting) ────────────────────────────────
      {
        id: "yesome-firfir",
        name: "Yesome Firfir",
        description: "Injera pieces mixed with a savory sauce and Ethiopian spices in the classic firfir style — a beloved fasting dish.",
        price: 15.99,
        category: "Yetom Firfir",
        badge: "Vegan",
      },

      // ── Fish Dulet ────────────────────────────────────────────
      {
        id: "tire-sega",
        name: "Tire Sega",
        description: "Classic Ethiopian style raw beef, hand cut, and served fresh with awaze, mitmita, and spiced clarified butter (niter kibbeh).",
        price: 22.99,
        category: "Fish Dulet",
      },
      {
        id: "kitfo",
        name: "Kitfo",
        description: "Finely minced lean beef seasoned with mitmita and niter kibbeh. Served raw or lightly warmed (leb-leb) with homemade cheese and greens.",
        price: 20.99,
        category: "Fish Dulet",
      },
      {
        id: "gored-gored",
        name: "Gored Gored",
        description: "Cubes of raw or lightly seared beef seasoned with awaze, spices, and a touch of niter kibbeh. Bold, tender, and traditionally served.",
        price: 20.99,
        category: "Fish Dulet",
      },
      {
        id: "derk-tibs",
        name: "Derk Tibs",
        description: "Tender beef tips pan seared with onions, garlic, jalapeños, and house spices. Balanced flavor with a savory and satisfying finish.",
        price: 20.99,
        category: "Fish Dulet",
      },
      {
        id: "shinte-tibs",
        name: "Shinte Tibs",
        description: "Beef tips sautéed with onions, peppers, and mild Ethiopian spices.",
        price: 20.99,
        category: "Fish Dulet",
      },
      {
        id: "kuwait-firfir",
        name: "Kuwait Firfir",
        description: "Spicy firfir tossed with berbere, clarified butter, onions, and peppers.",
        price: 22.99,
        category: "Fish Dulet",
        badge: "Spicy",
      },
      {
        id: "veggie-combo",
        name: "Veggie Combo",
        description: "A colorful selection of traditional vegan dishes including lentils, split peas, greens, cabbage, and seasonal vegetables. Served with your choice of Ethiopian or local injera.",
        price: 20.99,
        category: "Fish Dulet",
        badge: "Vegan",
      },
      {
        id: "shtro",
        name: "Shtro",
        description: "Slow-cooked toasted chickpea stew simmered with garlic, onions, and warm Ethiopian spices. Creamy and full of authentic flavor.",
        price: 15.99,
        category: "Fish Dulet",
        badge: "Vegan",
      },
      {
        id: "misir-wot-spicy",
        name: "Misir Wot",
        description: "Red split lentil simmered in a rich berbere-based sauce with garlic, onions, and Ethiopian herbs.",
        price: 20.99,
        category: "Fish Dulet",
        badge: "Spicy",
      },
      {
        id: "tibs-firfir-dulet",
        name: "Tibs Firfir",
        description: "Shredded injera mixed with seasoned sautéed beef tibs, berbere, onions, and spices. Served with your choice of Ethiopian or local injera.",
        price: 19.99,
        category: "Fish Dulet",
      },
      {
        id: "ethiopian-injera-pieces",
        name: "Ethiopian Injera (A pieces)",
        description: "Freshly baked soft Ethiopian injera. Perfect for sharing.",
        price: 12.99,
        category: "Fish Dulet",
      },
      {
        id: "local-injera",
        name: "Local Injera",
        description: "Soft, fresh locally made injera with traditional Ethiopian flavor.",
        price: 10.99,
        category: "Fish Dulet",
      },

      // ── Beverage ──────────────────────────────────────────────
      {
        id: "ethiopian-coffee-ceremony",
        name: "Ethiopian Coffee Ceremony",
        description: "Three rounds of freshly roasted and brewed buna, served with incense and popcorn — the full Ethiopian experience.",
        price: 12,
        category: "Beverage",
        badge: "Signature",
      },
      {
        id: "can-soda",
        name: "Can Soda",
        description: "Crisp, chilled can of refreshing soda.",
        price: 3.75,
        category: "Beverage",
      },
      {
        id: "club-soda",
        name: "Club Soda",
        description: "Effervescent club soda — crisp, refreshing, perfectly carbonated.",
        price: 4.50,
        category: "Beverage",
      },
      {
        id: "bottle-soda",
        name: "Bottle Soda",
        description: "Chilled bottled soda.",
        price: 3.99,
        category: "Beverage",
      },
    ],
  },

  gallery: {
    title: "Food, Culture & Community",
    subtitle: "Every plate tells a story from back home",
    images: [
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_ribs.jpg", alt: "Special Godin Tibs  " },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_tiresiga.jpg", alt: "Ethiopian Traditional Dish" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_kitifo.jpg", alt: "Group dining family-style" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_tibs.jpg", alt: "Group dining family-style" },
      { src: "https://cdn.zikwala.com/demo/restaurant/shiro.jpg", alt: "Shiro" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu-special.jpeg", alt: "Nazert Special" },
      { src: "https://cdn.zikwala.com/demo/restaurant/menu_beyainet.jpg", alt: "Vegi" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery2.jpg", alt: "Group dining family-style",       badge: "Family Style" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery3.jpg", alt: "Salad" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery4.jpeg", alt: "Specail Salad",       badge: "Coffee Ceremony" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery5.jpeg", alt: "Tibs" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery6.jpg", alt: "Asambusa",    badge: "Authentic Spices" },
      { src: "https://cdn.zikwala.com/demo/restaurant/gallery7.jpg", alt: "Tibs" },
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
      { label: "Google Rating",    value: "4.9★"  },
      { label: "Google Reviews",   value: "1,343" },
      { label: "Years Serving DC", value: "15+"   },
      { label: "Menu Items",       value: "35+"   },
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
      { label: "Dietary",      value: "Fasting · Vegan · GF"    },
      { label: "Location",     value: "Skyline, Falls Church VA" },
    ],
  },

  contact: {
    title: "Find Us & Get In Touch",
    subtitle:
      "Open daily 11AM – 10PM · 3821 S George Mason Dr, Unit D, Falls Church, VA 22041 (Skyline). Walk-ins welcome — reservations recommended on weekends.",
    mapEmbed: "https://maps.google.com/maps?q=3821+S+George+Mason+Dr,+Falls+Church,+VA+22041&t=&z=16&ie=UTF8&iwloc=&output=embed",
    formEndpoint: "mailto:info@nazretrestaurant.com",
    notifyEmail: "info@nazretrestaurant.com",
    whatsappMessage: "Hi, I'd like to reserve a table at Nazret Restaurant. Can you help me?",
    submitLabel: "Request a Reservation",
    bookingFields: {
      date: true,
      time: true,
      timeStep: 15,
      guests: true,
      maxGuests: 20,
      placeholder: "Special requests or dietary needs (optional)",
    },
  },

  deliveryLinks: [
    { name: "Uber Eats",  url: "https://www.ubereats.com/store/nazret-ethiopian-restaurant" },
    { name: "Postmates",  url: "https://postmates.com/store/nazret-ethiopian-restaurant" },
  ],

  stickyContact: "both",

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
          "Vegetarian & fasting options clearly labeled",
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

  areasServed: [
    { name: "Falls Church, VA",      description: "Our home — walk-ins welcome daily" },
    { name: "Arlington, VA",         description: "Dine-in & catering delivery" },
    { name: "Alexandria, VA",        description: "Dine-in & catering delivery" },
    { name: "Washington, DC",        description: "Catering & private events" },
    { name: "Fairfax, VA",           description: "Catering & private events" },
    { name: "Silver Spring, MD",     description: "Catering & private events" },
  ],

  faq: [
    {
      question: "What are your hours?",
      answer: "We are open daily from 11AM to 10PM, including weekends and holidays. Walk-ins are always welcome — we recommend reservations on Friday and Saturday evenings.",
    },
    {
      question: "Do you take reservations?",
      answer: "Yes. You can reserve a table by calling us, sending a WhatsApp message, or using the contact form on this page. We recommend booking at least a day in advance for groups of 5 or more.",
    },
    {
      question: "What is injera?",
      answer: "Injera is a soft, spongy flatbread made from fermented teff flour — it is both the plate and the utensil in Ethiopian dining. Stews and salads are served on top, and you tear pieces of injera to scoop them up. It is naturally gluten-friendly and vegan.",
    },
    {
      question: "Do you have vegetarian and vegan options?",
      answer: "Yes — we have a full vegetarian and vegan fasting menu available every day. Dishes include Misir Wat, Shiro, Gomen, Atkilt, Fosolia, and our Beyaynetu veggie platter. Everything is made without meat, dairy, or eggs.",
    },
    {
      question: "What is the Ethiopian Orthodox fasting menu?",
      answer: "Ethiopian Orthodox Christians fast on Wednesdays, Fridays, and during major fasting seasons like Lent (Tsom). Fasting dishes are fully vegan — no meat, no dairy, no eggs. We serve our complete fasting menu every day, not just on fasting days.",
    },
    {
      question: "Do you offer takeout and delivery?",
      answer: "Yes — we offer takeout directly from the restaurant. For delivery, we are available on major delivery platforms. Call us or send a WhatsApp message to place a takeout order ahead of time.",
    },
    {
      question: "What is the Ethiopian coffee ceremony?",
      answer: "The coffee ceremony (Buna) is a traditional Ethiopian ritual — beans are roasted fresh at your table, brewed three times, and served with incense and popcorn. It takes about 30–45 minutes and is a deeply cultural experience. Available at $12 per person.",
    },
    {
      question: "Do you cater events outside the restaurant?",
      answer: "Yes — we cater weddings, Timket celebrations, graduations, corporate lunches, and community events across DC, Maryland, and Virginia. Packages start from $18/person. Contact us for a custom quote.",
    },
    {
      question: "Is there parking available?",
      answer: "Yes — we are located in the Skyline complex at 3821 S George Mason Dr, Unit D, Falls Church, VA. Free parking is available in the Skyline parking lot directly in front of the restaurant.",
    },
    {
      question: "Do you accommodate large groups?",
      answer: "Yes — we can accommodate large groups and family gatherings. For parties of 10 or more, we ask that you call ahead so we can prepare the best seating arrangement for you.",
    },
  ],

  googleReviewUrl: "https://maps.app.goo.gl/Yh5zng2pqyqoaBxY7",

  social: {
    instagram: "https://www.instagram.com/nazretrestaurant/", // TODO: confirm real handle with client
    facebook:  "https://www.facebook.com/endalkachew.mekonnen.98",
  },
}
