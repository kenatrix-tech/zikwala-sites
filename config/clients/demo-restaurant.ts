import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Ember & Oak",
    tagline: "Wood-Fired. Farm-Fresh. Unforgettable.",
    phone: "+1 (512) 555-0811",
    email: "reservations@emberandoak.com",
    address: "312 West 6th Street",
    city: "Austin",
    state: "TX",
    logo: "/clients/demo-restaurant/logo.png",
    niche: "restaurant",
  },

  theme: {
    primary: "#111827",      // deep charcoal — modern & upscale
    secondary: "#D4A853",    // warm gold
    accent: "#FEF9EE",       // warm cream
    surface: "#FDFAF5",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "lg",
    darkMode: false,
  },

  tier: "pro",
  isDemo: true,

  seo: {
    title: "Ember & Oak | Modern American Bistro in Austin, TX",
    description:
      "Wood-fired, farm-fresh cuisine in the heart of Austin. Open for dinner Mon–Sat and brunch Sat–Sun. Reservations recommended.",
    keywords: [
      "restaurant Austin TX",
      "farm to table Austin",
      "wood fired restaurant Austin",
      "best dinner Austin",
      "modern American bistro",
      "private dining Austin",
    ],
    ogImage: "/clients/demo-restaurant/og.png",
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
    heading: "Where Fire Meets Farm-Fresh Flavor",
    subheading:
      "Handcrafted dishes from local farms, cooked over an open oak-wood fire in the heart of Austin.",
    cta:          { label: "Reserve a Table", href: "/contact" },
    secondaryCta: { label: "View Our Menu",   href: "/products" },
    image: "/clients/demo-restaurant/hero.jpg",
    badge: "Open Since 2016 · Austin, TX",
    trustPoints: [
      "Wood-Fired Open Kitchen",
      "95% Local Ingredients",
      "Full Bar & Wine Program",
    ],
    socialProof: { count: "4.9★", label: "from 1,200+ Google reviews" },
  },

  services: {
    title: "Dining Experiences",
    subtitle: "From intimate dinners to unforgettable private celebrations",
    items: [
      {
        name: "Dinner Service",
        description:
          "Intimate, candlelit dining with a seasonal menu that changes weekly. Reservations strongly recommended.",
        price: "Mon – Sat, 5PM – 10PM",
        icon: "UtensilsCrossed",
      },
      {
        name: "Weekend Brunch",
        description:
          "Slow mornings done right — savory plates, fresh pastries, and bottomless mimosas available.",
        price: "Sat & Sun, 10AM – 2PM",
        icon: "Coffee",
      },
      {
        name: "Happy Hour",
        description:
          "Craft cocktails and wood-fired small plates at special prices every weekday. Walk-ins welcome.",
        price: "Mon – Fri, 4PM – 6PM",
        icon: "Wine",
      },
      {
        name: "Private Dining",
        description:
          "Exclusive room for up to 20 guests — custom menus available for birthdays, anniversaries, and corporate events.",
        price: "By Reservation",
        icon: "Users",
      },
    ],
  },

  products: {
    title: "Our Menu",
    subtitle: "Seasonal ingredients, wood-fired technique, handcrafted with care",
    items: [
      // ── Starters ──────────────────────────────────────────────
      {
        id: "smoked-beet-salad",
        name: "Smoked Beet Salad",
        description: "Seasonal beets, whipped goat cheese, candied walnuts, citrus vinaigrette",
        price: 14,
        image: "/clients/demo-restaurant/menu/beet-salad.jpg",
        category: "Starters",
        badge: "Chef's Pick",
      },
      {
        id: "oak-grilled-shrimp",
        name: "Oak-Grilled Shrimp",
        description: "Wood-fired jumbo shrimp, roasted garlic butter, charred lemon, sourdough crostini",
        price: 18,
        image: "/clients/demo-restaurant/menu/shrimp.jpg",
        category: "Starters",
      },
      {
        id: "burrata",
        name: "Burrata & Heirloom Tomato",
        description: "House burrata, heirloom tomatoes, aged balsamic, fresh basil, cold-pressed olive oil",
        price: 16,
        image: "/clients/demo-restaurant/menu/burrata.jpg",
        category: "Starters",
        badge: "New",
      },

      // ── Mains ─────────────────────────────────────────────────
      {
        id: "ribeye",
        name: "12oz Dry-Aged Ribeye",
        description: "Oak-fired, bone marrow butter, roasted fingerling potatoes, chimichurri",
        price: 52,
        image: "/clients/demo-restaurant/menu/ribeye.jpg",
        category: "Mains",
        badge: "Best Seller",
      },
      {
        id: "salmon",
        name: "Wild-Caught Cedar Salmon",
        description: "Cedar plank salmon, lemon caper sauce, roasted asparagus, herbed farro",
        price: 36,
        image: "/clients/demo-restaurant/menu/salmon.jpg",
        category: "Mains",
      },
      {
        id: "mushroom-risotto",
        name: "Wild Mushroom Risotto",
        description: "Foraged mushrooms, truffle oil, aged parmesan, fresh thyme — vegetarian",
        price: 28,
        image: "/clients/demo-restaurant/menu/risotto.jpg",
        category: "Mains",
      },
      {
        id: "roasted-chicken",
        name: "Oak-Roasted Half Chicken",
        description: "Free-range chicken, herb jus, roasted root vegetables, whipped potato",
        price: 34,
        image: "/clients/demo-restaurant/menu/chicken.jpg",
        category: "Mains",
      },

      // ── Desserts ──────────────────────────────────────────────
      {
        id: "lava-cake",
        name: "Dark Chocolate Lava Cake",
        description: "Warm chocolate center, vanilla bean ice cream, raspberry coulis",
        price: 14,
        image: "/clients/demo-restaurant/menu/lava-cake.jpg",
        category: "Desserts",
        badge: "Best Seller",
      },
      {
        id: "creme-brulee",
        name: "Vanilla Crème Brûlée",
        description: "Classic French custard, Madagascar vanilla bean, fresh seasonal berries",
        price: 12,
        image: "/clients/demo-restaurant/menu/brulee.jpg",
        category: "Desserts",
      },

      // ── Drinks ────────────────────────────────────────────────
      {
        id: "old-fashioned",
        name: "Ember Old Fashioned",
        description: "House-smoked bourbon, demerara syrup, aromatic bitters, orange peel",
        price: 18,
        image: "/clients/demo-restaurant/menu/old-fashioned.jpg",
        category: "Drinks",
        badge: "Signature",
      },
      {
        id: "garden-fizz",
        name: "Garden Fizz (Mocktail)",
        description: "Cucumber, elderflower, fresh mint, lime, sparkling water — zero proof",
        price: 9,
        image: "/clients/demo-restaurant/menu/mocktail.jpg",
        category: "Drinks",
      },
    ],
  },

  gallery: {
    title: "A Feast for the Eyes",
    subtitle: "Every plate tells a story",
    images: [
      { src: "/clients/demo-restaurant/gallery/1.jpg", alt: "Oak-fired ribeye plating",     badge: "Signature Dish" },
      { src: "/clients/demo-restaurant/gallery/2.jpg", alt: "Restaurant interior at night" },
      { src: "/clients/demo-restaurant/gallery/3.jpg", alt: "Chef at the wood-fire hearth", badge: "Open Kitchen" },
      { src: "/clients/demo-restaurant/gallery/4.jpg", alt: "Weekend brunch spread" },
      { src: "/clients/demo-restaurant/gallery/5.jpg", alt: "Craft cocktails at the bar",   badge: "Full Bar" },
      { src: "/clients/demo-restaurant/gallery/6.jpg", alt: "Private dining table setup",   badge: "Private Dining" },
    ],
  },

  testimonials: {
    title: "What Our Guests Say",
    subtitle: "Moments worth coming back for",
    items: [
      {
        name: "Melissa R.",
        role: "Austin, TX",
        text: "The ribeye alone is worth the trip. Everything is cooked over real wood fire — you can taste the difference. Best dinner I've had in Austin, no contest.",
        rating: 5,
      },
      {
        name: "Jordan K.",
        role: "Anniversary Regular",
        text: "We come here for every anniversary. The private dining room is perfect, the staff remembers our preferences, and the seasonal menu always surprises us.",
        rating: 5,
      },
      {
        name: "Priya N.",
        role: "Food Blogger, Austin",
        text: "The wild mushroom risotto is the best I've had outside of Italy. The truffle aroma hits you the moment it arrives. Absolutely stunning.",
        rating: 5,
      },
    ],
  },

  stats: {
    items: [
      { label: "Google Rating",    value: "4.9★" },
      { label: "Years in Austin",  value: "8+"   },
      { label: "Local Ingredients", value: "95%" },
      { label: "Happy Guests",     value: "50k+" },
    ],
  },

  about: {
    title: "About Ember & Oak",
    story:
      "Ember & Oak was born from a simple belief: the best food starts with the best ingredients, cooked with fire and intention. Founded in 2016 in Austin's vibrant 6th Street corridor, we partner with over 20 local farms to bring seasonal, honest food to your table every night. Our open kitchen centers around a custom oak-wood hearth — every dish carries the warmth and character of real fire cooking. We're not just a restaurant. We're a gathering place.",
    image: "/clients/demo-restaurant/about.jpg",
    highlights: [
      { label: "Founded",   value: "2016, Austin TX"     },
      { label: "Cuisine",   value: "Modern American"     },
      { label: "Sourcing",  value: "20+ Local Farms"     },
      { label: "Capacity",  value: "Seats 85 Guests"     },
    ],
  },

  contact: {
    title: "Reservations & Inquiries",
    subtitle:
      "Dinner Mon–Sat 5–10PM · Brunch Sat–Sun 10AM–2PM · Happy Hour Mon–Fri 4–6PM. Walk-ins welcome based on availability.",
    mapEmbed: "",
    formEndpoint: "mailto:reservations@emberandoak.com",
  },

  catering: {
    title: "Catering by Ember & Oak",
    subtitle:
      "Wood-fired flavors and farm-fresh ingredients — brought to your event anywhere in Austin.",
    serviceArea: "Austin, TX & surrounding areas",
    minimumNotice: "72 hours advance notice required",
    eventTypes: [
      "Corporate Lunches & Dinners",
      "Wedding Receptions",
      "Birthday & Anniversary Parties",
      "Holiday & Office Parties",
      "Baby & Bridal Showers",
      "Graduation Celebrations",
    ],
    packages: [
      {
        name: "Drop-Off",
        description:
          "Packaged meals and family-style trays delivered hot and ready to serve — no staff included.",
        priceFrom: "From $18/person",
        minimumGuests: 15,
        features: [
          "Choice of 2 mains + 2 sides",
          "Bread & condiments included",
          "Eco-friendly packaging",
          "On-time delivery guaranteed",
        ],
      },
      {
        name: "Buffet Service",
        description:
          "Full buffet setup with chafing dishes, serving utensils, and a dedicated server for the event.",
        priceFrom: "From $32/person",
        minimumGuests: 25,
        highlight: true,
        badge: "Most Popular",
        features: [
          "Choice of 3 mains + 3 sides",
          "Full setup & breakdown",
          "Dedicated on-site server",
          "Dessert table available",
          "Rentals included",
        ],
      },
      {
        name: "Corporate",
        description:
          "Recurring corporate lunch programs, boardroom breakfasts, and office meeting packages.",
        priceFrom: "From $22/person",
        minimumGuests: 10,
        features: [
          "Weekly or monthly scheduling",
          "Invoicing for businesses",
          "Dietary labels on all dishes",
          "Customizable menus",
        ],
      },
      {
        name: "Premium Event",
        description:
          "Full white-glove service with a dedicated chef, custom menu design, and full event staffing.",
        features: [
          "Custom menu consultation",
          "Dedicated chef on-site",
          "Full staff & service team",
          "Plated or buffet style",
          "Wine & cocktail pairing",
          "Post-event cleanup",
        ],
        badge: "Custom",
      },
    ],
  },

  googleReviewUrl: "https://g.page/r/ember-oak-austin/review",

  social: {
    instagram: "https://instagram.com",
    facebook:  "https://facebook.com",
  },
}
