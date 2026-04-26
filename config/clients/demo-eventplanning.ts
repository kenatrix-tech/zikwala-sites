import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Milestone Events & Planning",
    tagline: "Extraordinary Events, Flawlessly Executed",
    phone: "+1 (202) 555-1614",
    email: "hello@milestoneeventsdc.com",
    address: "1350 Connecticut Ave NW",
    city: "Washington",
    state: "DC",
    logo: "/clients/demo-eventplanning/logo.png",
    niche: "eventplanning",
  },
  theme: {
    primary: "#9333EA",
    secondary: "#7E22CE",
    accent: "#F3E8FF",
    surface: "#FAF5FF",
    onPrimary: "#FFFFFF",
    font: "Montserrat",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Milestone Events & Planning | Event Planner in Washington DC",
    description:
      "Full-service event planning in Washington DC. Weddings, corporate events, birthday parties, and social gatherings — planned and executed flawlessly.",
    keywords: [
      "event planner Washington DC",
      "wedding planner DMV",
      "corporate event planner DC",
      "party planning Maryland",
    ],
    ogImage: "/clients/demo-eventplanning/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Start Planning",
    ctaHref: "/contact",
  },
  hero: {
    variant: "magazine",
    heading: "Your Vision. Our Expertise.",
    subheading:
      "Award-winning event planning for weddings, corporate gatherings, and celebrations in Washington DC and the DMV.",
    cta: { label: "Start Planning", href: "/contact" },
    secondaryCta: { label: "View Portfolio", href: "/gallery" },
    image: "/clients/demo-eventplanning/hero.jpg",
    badge: "Full-Service Planning & Day-of Coordination",
    trustPoints: ["Full Planning & Day-of Coordination", "Vendor Network of 100+ Partners", "350+ Events Executed"],
    socialProof: { count: "350+", label: "events planned across the DMV" },
  },
  services: {
    title: "Event Planning Services",
    subtitle: "From concept to celebration — we handle every detail",
    items: [
      {
        name: "Wedding Planning",
        description:
          "Full-service wedding planning from venue scouting to vendor coordination and day-of execution.",
        price: "From $3,500",
        icon: "Heart",
      },
      {
        name: "Corporate Events",
        description:
          "Conferences, galas, team celebrations, and product launches planned and run professionally.",
        price: "Custom Quote",
        icon: "Building2",
      },
      {
        name: "Birthday & Social Parties",
        description:
          "Milestone birthdays, baby showers, graduation parties, and social celebrations.",
        price: "From $800",
        icon: "PartyPopper",
      },
      {
        name: "Day-of Coordination",
        description:
          "Already planned your event? Let us execute it. We manage vendors, timeline, and logistics on the day.",
        price: "From $900",
        icon: "CalendarCheck",
      },
    ],
  },
  gallery: {
    title: "Event Portfolio",
    subtitle: "A selection of celebrations we've brought to life",
    images: [
      { src: "/clients/demo-eventplanning/gallery/1.jpg", alt: "Wedding reception" },
      { src: "/clients/demo-eventplanning/gallery/2.jpg", alt: "Corporate gala" },
      { src: "/clients/demo-eventplanning/gallery/3.jpg", alt: "Birthday celebration" },
      { src: "/clients/demo-eventplanning/gallery/4.jpg", alt: "Floral & decor" },
      { src: "/clients/demo-eventplanning/gallery/5.jpg", alt: "Table setting" },
      { src: "/clients/demo-eventplanning/gallery/6.jpg", alt: "Outdoor event" },
    ],
  },
  testimonials: {
    title: "Client Experiences",
    subtitle: "Events that exceeded expectations",
    items: [
      {
        name: "Tsion & Robel M.",
        role: "Newlyweds, Washington DC",
        text: "Milestone made our wedding day completely stress-free. Every detail we'd imagined was perfectly executed. Our guests are still talking about it.",
        rating: 5,
      },
      {
        name: "Michelle C.",
        role: "Corporate Client, DC",
        text: "They planned our 200-person annual gala in 6 weeks. Venue, catering, entertainment — all handled beautifully. Truly impressive.",
        rating: 5,
      },
      {
        name: "Bethlehem G.",
        role: "Client, Maryland",
        text: "My mother's 60th birthday party was magical. They took my vision and made it even better. Worth every penny.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Events Planned", value: "350+" },
      { label: "Years Experience", value: "10+" },
      { label: "Vendor Network", value: "100+ Partners" },
      { label: "Client Satisfaction", value: "99%" },
    ],
  },
  about: {
    title: "About Milestone Events & Planning",
    story:
      "Milestone Events & Planning was founded in Washington DC by a passionate event designer with a background in hospitality and design. We believe every milestone deserves to be celebrated beautifully. Our team manages every detail — from initial concept and vendor sourcing to day-of coordination — so you can be fully present for the moments that matter.",
    image: "/clients/demo-eventplanning/about.jpg",
    highlights: [
      { label: "Specialization", value: "Weddings & Corporate" },
      { label: "Vendor Network", value: "100+ Trusted Partners" },
      { label: "Languages", value: "English, Amharic, French" },
      { label: "Service Area", value: "DC, MD, VA & Travel" },
    ],
  },
  packages: {
    title: "Event Planning Packages",
    subtitle: "Transparent pricing for every type of celebration",
    items: [
      {
        name: "Day-of Coordination",
        description: "You planned it — we execute it flawlessly on the day.",
        price: "From $900",
        features: [
          "Up to 10 hours day-of coverage",
          "Vendor timeline management",
          "Venue walkthrough & rehearsal",
          "On-site coordinator",
          "Emergency kit included",
        ],
      },
      {
        name: "Partial Planning",
        description: "We step in mid-way to finalize details and coordinate your vision.",
        price: "From $2,200",
        badge: "Most Popular",
        highlight: true,
        features: [
          "Everything in Day-of",
          "Vendor recommendations & booking",
          "Budget tracking",
          "3 planning consultations",
          "Month-of management",
          "Design & décor guidance",
        ],
      },
      {
        name: "Full Planning",
        description: "End-to-end planning from concept to the last dance.",
        price: "From $4,500",
        features: [
          "Everything in Partial Planning",
          "Unlimited consultations",
          "Venue scouting & negotiation",
          "Full vendor management",
          "Guest list & RSVP tracking",
          "Custom event design",
        ],
      },
    ],
  },
  contact: {
    title: "Let's Plan Something Amazing",
    subtitle: "Tell us about your event and we'll reach out within 24 hours.",
    mapEmbed: "https://maps.google.com/maps?q=1350+Connecticut+Ave+NW,+Washington,+DC&output=embed",
    formEndpoint: "mailto:hello@milestoneeventsdc.com",
  },
  faq: [
    { question: "How far in advance should I book?", answer: "We recommend booking 6–12 months in advance for weddings and large events. Corporate events and smaller gatherings can often be booked 4–8 weeks out." },
    { question: "Do you work with a preferred vendor list?", answer: "Yes — we have a network of 100+ vetted vendors including caterers, florists, photographers, and AV teams. You're always welcome to bring your own vendors too." },
    { question: "What is day-of coordination?", answer: "Day-of coordination means you handle all the planning yourself, and we take over execution on the event day — managing the timeline, vendors, and logistics so you can enjoy the moment." },
    { question: "Do you travel for destination events?", answer: "Yes. We have coordinated events across DC, Maryland, Virginia, and beyond. Travel fees may apply for events outside the DMV area." },
    { question: "What types of events do you plan?", answer: "We specialize in weddings, corporate galas, birthday parties, baby showers, graduation celebrations, and private social events." },
  ],
  googleReviewUrl: "https://g.page/r/milestone-events-dc/review",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
}
