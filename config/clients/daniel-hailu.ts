// Client: Daniel Hailu | Plan: Basic | Setup: $399 | Monthly: $19/mo (discounted from $29)
import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Daniel Hailu – Real Estate Agent",
    tagline: "Your Trusted Real Estate Partner in the DMV Area",
    phone: "+1 (202) 500-5095",
    email: "danielhailu2721@gmail.com",
    address: "8701 Georgia Ave",
    city: "Washington",
    state: "DC",
    logo: "https://cdn.zikwala.com/demo/realestate/daniel-hailu/daniel-hailu-logo.jpg",
    niche: "realestate",
  },
  theme: {
    primary: "#1A3C5E",
    secondary: "#C9A84C",
    accent: "#FBF5E6",
    surface: "#FDFAF5",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "basic",
  isDemo: false,
  isActive: true,
  seo: {
    title: "Daniel Hailu | Real Estate Agent in the DMV Area",
    description:
      "Buy, sell, or rent property across Maryland, Washington, D.C., and Virginia with a trusted local agent. Licensed in MD, DC & VA. Specializing in residential, commercial, and investment real estate.",
    keywords: [
      "real estate agent Maryland",
      "DMV realtor",
      "Maryland real estate agent",
      "buy home Maryland",
      "sell home Maryland",
      "Ethiopian realtor DMV",
      "homes for sale Maryland",
      "homes for sale Washington DC",
      "homes for sale Virginia",
    ],
    ogImage: "https://cdn.zikwala.com/client/daniel-hailu/daniel_hailu_hero.jpg",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Calculator", href: "/mortgage-calculator" },
      { label: "About", href: "/about" },
    ],
    ctaLabel: "Free Consultation",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Your DMV Home Journey Starts Here",
    variant: "magazine",
    subheading:
      "Trusted real estate expert serving Maryland, Washington D.C., and Virginia. Fluent in English & Amharic.",
    cta: { label: "Free Consultation", href: "/contact" },
    secondaryCta: { label: "View Sold Homes", href: "/sold" },
    image: "https://cdn.zikwala.com/client/daniel-hailu/daniel_hailu_hero.jpg",
    imagePosition: "right",
    badge: "PGAR Platinum Award · Licensed in MD, DC & VA",
    trustPoints: ["90+ Closed Sales · $51.3M", "Licensed in MD, DC & VA", "7 Industry Awards Since 2018"],
    socialProof: { count: "90+", label: "closed sales totaling $51.3M across the DMV" },
  },
  services: {
    title: "Real Estate Services",
    subtitle: "Expert guidance at every step of your journey",
    items: [
      {
        name: "Home Buying",
        description:
          "From pre-approval to closing, we guide first-time and experienced buyers through every step.",
        icon: "Home",
      },
      {
        name: "Home Selling",
        description:
          "Strategic pricing, professional staging, and marketing to sell your home fast and at top dollar.",
        icon: "TrendingUp",
      },
      {
        name: "Rental & Investment",
        description:
          "Find income-producing properties or quality rentals in prime DMV locations.",
        icon: "Building2",
      },
      {
        name: "Relocation Services",
        description:
          "Moving to the DMV area? We make your transition seamless with local expertise.",
        icon: "MapPin",
      },
    ],
  },
  soldListings: {
    title: "Recently Sold",
    subtitle: "A track record of results across the DMV — homes sold fast and above asking",
    items: [
      {
        image: "https://cdn.zikwala.com/demo/realestate/property1.jpg",
        address: "412 Sligo Ave",
        city: "Silver Spring, MD",
        price: 635000,
        type: "Townhouse",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1850,
        soldYear: 2024,
      },
      {
        image: "https://cdn.zikwala.com/demo/realestate/property2.jpg",
        address: "1425 Rhode Island Ave NW",
        city: "Washington, D.C.",
        price: 748000,
        type: "Condo",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1100,
        soldYear: 2024,
      },
      {
        image: "https://cdn.zikwala.com/demo/realestate/property3.jpg",
        address: "3900 University Dr",
        city: "Fairfax, VA",
        price: 875000,
        type: "House",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2400,
        soldYear: 2023,
      },
      {
        image: "https://cdn.zikwala.com/demo/realestate/property4.jpg",
        address: "7800 Old Georgetown Rd",
        city: "Bethesda, MD",
        price: 820000,
        type: "House",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2800,
        soldYear: 2023,
      },
      {
        image: "https://cdn.zikwala.com/demo/realestate/property5.jpg",
        address: "6500 Belcrest Rd",
        city: "Hyattsville, MD",
        price: 580000,
        type: "House",
        bedrooms: 3,
        bathrooms: 1,
        sqft: 1400,
        soldYear: 2024,
      },
      {
        image: "https://cdn.zikwala.com/demo/realestate/property6.jpg",
        address: "3605 N Glebe Rd",
        city: "Arlington, VA",
        price: 695000,
        type: "Condo",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1050,
        soldYear: 2024,
      },
    ],
  },
  // testimonials: hidden until Daniel collects real reviews
  stats: {
    items: [
      { label: "Closed Sales", value: "90+" },
      { label: "Total Value", value: "$51.3M" },
      { label: "Industry Awards", value: "7" },
      { label: "Years Experience", value: "7+" },
    ],
  },
  about: {
    title: "About Daniel Hailu",
    sections: [
      {
        heading: "Meet Daniel Hailu",
        body: "Daniel Hailu is a licensed real estate agent in Maryland, Washington D.C., and Virginia with 7+ years of experience in the DMV market. He specializes in residential real estate, commercial properties, and real estate investments — working with first-time homebuyers and seasoned investors alike.\n\nDaniel is passionate about guiding clients through every step of the process, ensuring smooth and successful transactions. Whether you're buying your first home, selling a property, or looking for a profitable investment, his goal is to help you achieve the American dream of homeownership.",
        image: "https://cdn.zikwala.com/client/daniel-hailu/daniel_hailu_hero.jpg",
        highlights: [
          { label: "Licensed in", value: "MD, DC & VA" },
          { label: "Experience", value: "7+ Years" },
          { label: "Languages", value: "English & Amharic" },
          { label: "Closed Sales", value: "90+ · $51.3M" },
        ],
      },
      {
        heading: "Awards & Recognition",
        body: "Daniel's consistent performance over the years has earned him recognition from multiple organizations across the DMV real estate industry — a track record that speaks for itself.",
        image: "https://cdn.zikwala.com/client/daniel-hailu/daniel_hailu_award.jpg",
        imagePosition: "top",
        highlights: [
          { label: "Total Awards", value: "7" },
          { label: "PGAR Awards", value: "Platinum & Gold" },
          { label: "Active Since", value: "2018" },
          { label: "Latest Award", value: "2025" },
        ],
        awards: [
          { title: "PGAR Platinum Award", org: "Prince George's County Association of Realtors", year: 2025, icon: "Crown", color: "#64748b" },
          { title: "Sales Person of the Year", org: "Taylor Properties", year: 2025, icon: "Star", color: "#f59e0b" },
          { title: "PGAR Platinum Award", org: "Prince George's County Association of Realtors", year: 2022, icon: "Crown", color: "#64748b" },
          { title: "PGAR Gold Award", org: "Prince George's County Association of Realtors", year: 2021, icon: "Award", color: "#d97706" },
          { title: "Top Gross Production Volume & Unit", org: "Exit Realty Enterprises", year: 2019, icon: "TrendingUp", color: "#059669" },
          { title: "Million Dollar Club", org: "Exit Realty Enterprises", year: 2019, icon: "DollarSign", color: "#7c3aed" },
          { title: "Top Sales Award", org: "Exit Realty Enterprises", year: 2018, icon: "Target", color: "#dc2626" },
        ],
      },
    ],
  },
  mortgageCalculator: true,
  homeValuation: true,
  howItWorks: true,

  areasServed: [
    { name: "Silver Spring, MD", description: "Home base — deep knowledge of neighborhoods, schools, and market trends." },
    { name: "Bethesda, MD", description: "Luxury homes, condos, and investment properties in one of MD's top markets." },
    { name: "Rockville, MD", description: "Family-friendly communities with strong resale value and great schools." },
    { name: "Washington, D.C.", description: "Condos, row houses, and multi-unit investments in all major DC neighborhoods." },
    { name: "Arlington, VA", description: "High-demand properties close to Metro lines and Amazon HQ2." },
    { name: "Fairfax, VA", description: "Spacious single-family homes and townhouses for growing families." },
  ],

  faq: [
    { question: "How do I start the home buying process?", answer: "The first step is a free consultation where we discuss your goals, budget, and timeline. We'll connect you with a trusted lender for pre-approval so you can shop with confidence." },
    { question: "How long does it take to buy a home in the DMV?", answer: "Typically 30–60 days from offer to closing, though it depends on financing, inspection, and market conditions. We'll keep you informed at every step." },
    { question: "What does it cost to work with you as a buyer?", answer: "Nothing — as a buyer, our services are free to you. The seller pays the agent commissions. You get full representation at no cost." },
    { question: "How do you determine the right listing price for my home?", answer: "We run a detailed Comparative Market Analysis (CMA) looking at recent sales, active listings, and market trends in your neighborhood to price your home competitively." },
    { question: "Do you work with first-time homebuyers?", answer: "Absolutely. Daniel has a proven track record working with first-time buyers and guides them through every step — from pre-approval to closing — in English and Amharic." },
    { question: "What areas do you cover?", answer: "Daniel is licensed in Maryland, Washington D.C., and Virginia — serving the entire DMV area including Silver Spring, Bethesda, Rockville, Hyattsville, Arlington, Fairfax, and Alexandria." },
  ],

  contact: {
    title: "Let's Talk Real Estate",
    subtitle: "Schedule your free consultation today — available in English and Amharic.",
    mapEmbed: "https://maps.google.com/maps?q=8701+Georgia+Ave,+Silver+Spring,+MD&output=embed",
    formEndpoint: "mailto:danielhailu2721@gmail.com",
  },
  stickyContact: "phone",
  // googleReviewUrl: hidden until Daniel has a real Google review link
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
}
