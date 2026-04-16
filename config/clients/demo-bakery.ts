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
    variant: "magazine",
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
  products: {
    title: "Order Online",
    subtitle: "Ready-made items available for same-day pickup or next-day delivery",
    items: [
      {
        id: "bk1",
        name: "Classic Chocolate Cake (6\")",
        description: "Rich chocolate sponge with chocolate ganache frosting. Serves 6–8.",
        price: 38,
        image: "/clients/demo-bakery/gallery/1.jpg",
        category: "Cakes",
        badge: "Best Seller",
        inStock: true,
      },
      {
        id: "bk2",
        name: "Vanilla Strawberry Cake (6\")",
        description: "Light vanilla sponge layered with fresh strawberry cream. Serves 6–8.",
        price: 36,
        image: "/clients/demo-bakery/gallery/2.jpg",
        category: "Cakes",
        inStock: true,
      },
      {
        id: "bk3",
        name: "Assorted Cookie Box (12 pcs)",
        description: "Chocolate chip, snickerdoodle, and oatmeal raisin. Beautifully boxed.",
        price: 22,
        originalPrice: 28,
        image: "/clients/demo-bakery/gallery/6.jpg",
        category: "Cookies",
        badge: "Sale",
        inStock: true,
      },
      {
        id: "bk4",
        name: "Croissant Pack (6 pcs)",
        description: "Freshly baked butter croissants. Available plain or with chocolate filling.",
        price: 14,
        image: "/clients/demo-bakery/gallery/4.jpg",
        category: "Pastries",
        badge: "New",
        inStock: true,
      },
      {
        id: "bk5",
        name: "Cupcake Box (6 pcs)",
        description: "Choose from chocolate, vanilla, red velvet, or lemon. Swirl frosting.",
        price: 24,
        image: "/clients/demo-bakery/gallery/3.jpg",
        category: "Cupcakes",
        badge: "Best Seller",
        inStock: true,
      },
      {
        id: "bk6",
        name: "Ethiopian Honey Cake",
        description: "Traditional injera honey cake with spiced butter glaze. A crowd favourite.",
        price: 32,
        image: "/clients/demo-bakery/gallery/5.jpg",
        category: "Cakes",
        inStock: true,
      },
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
