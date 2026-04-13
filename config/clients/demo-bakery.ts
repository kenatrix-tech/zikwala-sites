import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Desta Sweet Bakery",
    tagline: "Custom Cakes & Fresh Pastries, Made with Love",
    phone: "+1 (301) 555-0604",
    email: "orders@destasweetbakery.com",
    address: "318 N Frederick Ave",
    city: "Gaithersburg",
    state: "MD",
    logo: "/clients/demo-bakery/logo.png",
    niche: "bakery",
  },
  theme: {
    primary: "#BE185D",
    secondary: "#9D174D",
    accent: "#FCE7F3",
    surface: "#FDF2F8",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "full",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Desta Sweet Bakery | Custom Cakes & Pastries in Gaithersburg MD",
    description:
      "Custom cakes, wedding cakes, and fresh pastries in Gaithersburg, MD. Order online or visit our bakery for daily fresh baked goods.",
    keywords: [
      "custom cakes Gaithersburg MD",
      "wedding cake Maryland",
      "bakery Gaithersburg",
      "birthday cake DMV",
      "Ethiopian bakery Maryland",
    ],
    ogImage: "/clients/demo-bakery/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Menu", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Order", href: "/contact" },
    ],
    ctaLabel: "Place an Order",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Cakes Made to Remember",
    subheading:
      "Handcrafted custom cakes and fresh pastries for every occasion. Made from scratch, delivered with joy.",
    cta: { label: "Place an Order", href: "/contact" },
    secondaryCta: { label: "See Our Cakes", href: "/gallery" },
    image: "/clients/demo-bakery/hero.jpg",
    badge: "Order 5 Days in Advance",
    trustPoints: ["100% Scratch-Made", "Halal Certified", "Custom Designs Welcome"],
    socialProof: { count: "2,000+", label: "cakes crafted and delivered" },
  },
  services: {
    title: "What We Bake",
    subtitle: "Every item made fresh, every order made with care",
    items: [
      {
        name: "Custom Birthday Cakes",
        description:
          "Fully personalized cakes in any flavor, size, and design. Photos, themes, and fondant work available.",
        price: "From $75",
        icon: "Cake",
      },
      {
        name: "Wedding Cakes",
        description:
          "Tiered wedding cakes with consultation, tasting session, and delivery to your venue.",
        price: "From $350",
        icon: "Heart",
      },
      {
        name: "Daily Fresh Pastries",
        description:
          "Croissants, muffins, cookies, and Ethiopian pastries baked fresh every morning.",
        price: "From $3",
        icon: "Coffee",
      },
      {
        name: "Bulk & Catering Orders",
        description:
          "Cupcake towers, cookie platters, and dessert tables for events and corporate orders.",
        price: "Custom Quote",
        icon: "PackageCheck",
      },
    ],
  },
  gallery: {
    title: "Our Creations",
    subtitle: "Every cake is a work of art",
    images: [
      { src: "/clients/demo-bakery/gallery/1.jpg", alt: "Custom birthday cake" },
      { src: "/clients/demo-bakery/gallery/2.jpg", alt: "Wedding cake" },
      { src: "/clients/demo-bakery/gallery/3.jpg", alt: "Cupcake tower" },
      { src: "/clients/demo-bakery/gallery/4.jpg", alt: "Pastry display" },
      { src: "/clients/demo-bakery/gallery/5.jpg", alt: "Fondant design cake" },
      { src: "/clients/demo-bakery/gallery/6.jpg", alt: "Cookie platter" },
    ],
  },
  testimonials: {
    title: "Sweet Reviews",
    subtitle: "Our customers keep coming back",
    items: [
      {
        name: "Miriam A.",
        role: "Customer, Rockville MD",
        text: "Desta made my daughter's first birthday cake and it was absolutely stunning. Tasted even better than it looked!",
        rating: 5,
      },
      {
        name: "Chris & Lena T.",
        role: "Newlyweds, Gaithersburg MD",
        text: "Our wedding cake was a dream. The tasting consultation was fun and the final cake blew our guests away.",
        rating: 5,
      },
      {
        name: "Aisha B.",
        role: "Customer, Germantown MD",
        text: "I order cupcakes for every office event now. Always fresh, always delicious, and the packaging is beautiful.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Cakes Created", value: "2,000+" },
      { label: "Years Baking", value: "8+" },
      { label: "Wedding Cakes", value: "200+" },
      { label: "Happy Customers", value: "500+" },
    ],
  },
  about: {
    title: "About Desta Sweet Bakery",
    story:
      "Desta Sweet Bakery started in a home kitchen in Gaithersburg, MD, with a simple belief: every celebration deserves a cake made with real ingredients and real love. Today we serve hundreds of families across Montgomery County and the DMV, blending traditional Ethiopian baking techniques with modern cake artistry.",
    image: "/clients/demo-bakery/about.jpg",
    highlights: [
      { label: "Halal Certified", value: "Yes" },
      { label: "Custom Designs", value: "Yes" },
      { label: "Advance Order", value: "5 Days Min" },
      { label: "Delivery", value: "DMV Area" },
    ],
  },
  contact: {
    title: "Place Your Order",
    subtitle: "Custom cakes require 5 days notice. Fill out the form or call/text us directly.",
    mapEmbed: "",
    formEndpoint: "mailto:orders@destasweetbakery.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
