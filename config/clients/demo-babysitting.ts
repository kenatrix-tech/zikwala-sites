import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Little Stars Childcare",
    tagline: "Safe, Loving Care for Your Little Ones",
    phone: "+1 (301) 555-1513",
    email: "info@littlestarschildcare.com",
    address: "1400 Veirs Mill Rd",
    city: "Rockville",
    state: "MD",
    logo: "/clients/demo-babysitting/logo.png",
    niche: "babysitting",
  },
  theme: {
    primary: "#C026D3",
    secondary: "#A21CAF",
    accent: "#FAE8FF",
    surface: "#FDF4FF",
    onPrimary: "#FFFFFF",
    font: "Poppins",
    roundedLevel: "full",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Little Stars Childcare | Babysitting & Childcare in Rockville MD",
    description:
      "Trusted in-home babysitting and childcare in Rockville, MD. CPR-certified, background-checked caregivers for infants through school age.",
    keywords: [
      "babysitter Rockville MD",
      "childcare Montgomery County MD",
      "in-home babysitting DMV",
      "after school care Rockville",
      "newborn care Maryland",
    ],
    ogImage: "/clients/demo-babysitting/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Reviews", href: "/gallery" },
      { label: "Book", href: "/contact" },
    ],
    ctaLabel: "Book a Sitter",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Childcare You Can Truly Trust",
    subheading:
      "Background-checked, CPR-certified caregivers in Rockville, MD. Your child's safety and happiness is our only priority.",
    cta: { label: "Book a Sitter", href: "/contact" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "/clients/demo-babysitting/hero.jpg",
    badge: "Background Checked & CPR Certified",
    trustPoints: ["Background Checked & References Verified", "CPR & First Aid Certified", "Flexible Scheduling — Days, Evenings & Weekends"],
    socialProof: { count: "200+", label: "children cared for in Rockville & Montgomery County" },
  },
  services: {
    title: "Childcare Services",
    subtitle: "Flexible, loving care that fits your schedule",
    items: [
      {
        name: "In-Home Babysitting",
        description:
          "Reliable babysitting at your home for children from 6 weeks to 12 years. Structured activities and meals included.",
        price: "From $18/hr",
        icon: "Home",
      },
      {
        name: "After School Care",
        description:
          "Pickup from school, homework help, snacks, and activities until parents are home.",
        price: "From $20/hr",
        icon: "BookOpen",
      },
      {
        name: "Date Night & Weekend Sitting",
        description:
          "Last-minute and scheduled evening and weekend availability so you can have peace of mind.",
        price: "From $20/hr",
        icon: "Calendar",
      },
      {
        name: "Newborn & Infant Care",
        description:
          "Experienced infant caregivers for babies 0-12 months. Day and overnight care available.",
        price: "From $22/hr",
        icon: "Baby",
      },
    ],
  },
  gallery: {
    title: "Moments of Joy",
    subtitle: "Happy children, happy families",
    images: [
      { src: "/clients/demo-babysitting/gallery/1.jpg", alt: "Reading with children" },
      { src: "/clients/demo-babysitting/gallery/2.jpg", alt: "Arts and crafts" },
      { src: "/clients/demo-babysitting/gallery/3.jpg", alt: "Outdoor play" },
      { src: "/clients/demo-babysitting/gallery/4.jpg", alt: "Homework help" },
      { src: "/clients/demo-babysitting/gallery/5.jpg", alt: "Snack time" },
      { src: "/clients/demo-babysitting/gallery/6.jpg", alt: "Infant care" },
    ],
  },
  testimonials: {
    title: "Parent Reviews",
    subtitle: "Trusted by families across Rockville and Montgomery County",
    items: [
      {
        name: "Sofia & James R.",
        role: "Parents, Rockville MD",
        text: "We've used Little Stars every Friday night for 6 months. Our kids absolutely love their sitter and we feel completely comfortable leaving them.",
        rating: 5,
      },
      {
        name: "Hana B.",
        role: "Parent, Germantown MD",
        text: "They found us a wonderful caregiver for our newborn when I went back to work. Incredibly professional and the baby has thrived.",
        rating: 5,
      },
      {
        name: "Michael T.",
        role: "Single Dad, Gaithersburg MD",
        text: "After school pickup and care for both my kids. Homework done, dinner started, and everyone is happy when I get home. Game changer.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Children Cared For", value: "200+" },
      { label: "Years Experience", value: "6+" },
      { label: "Background Checked", value: "Every Caregiver" },
      { label: "CPR Certified", value: "Yes" },
    ],
  },
  about: {
    title: "About Little Stars Childcare",
    story:
      "Little Stars Childcare was founded by a mother and early childhood educator in Rockville, MD. We carefully screen and train every caregiver we place, verifying references, background checks, and certifications before matching families. We understand that leaving your child is an act of trust, and we take that responsibility seriously.",
    image: "/clients/demo-babysitting/about.jpg",
    highlights: [
      { label: "Caregiver Screening", value: "Full Background Check" },
      { label: "Certifications", value: "CPR & First Aid" },
      { label: "Age Range", value: "Newborn to 12 Years" },
      { label: "Availability", value: "Days, Evenings & Weekends" },
    ],
  },
  contact: {
    title: "Book a Caregiver",
    subtitle: "Tell us about your child and schedule. We'll match you with the right caregiver.",
    mapEmbed: "",
    formEndpoint: "mailto:info@littlestarschildcare.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
