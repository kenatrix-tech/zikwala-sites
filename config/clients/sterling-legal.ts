import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Sterling Legal Group",
    tagline: "Experienced Legal Representation You Can Trust",
    phone: "+1 (202) 555-0303",
    email: "contact@sterlinglegaldc.com",
    address: "789 K Street NW, Suite 200",
    city: "Washington",
    state: "DC",
    logo: "https://cdn.zikwala.com/demo/lawfirm/logo.png",
    niche: "lawfirm",
  },
  theme: {
    primary: "#1E3A5F",
    secondary: "#152A45",
    accent: "#E8EDF3",
    surface: "#F5F7FA",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "sm",
    darkMode: false,
  },
  tier: "pro",
  isDemo: false,
  seo: {
    title: "Sterling Legal Group | Immigration & Business Law in Washington DC",
    description:
      "Trusted immigration, family, and business law services in Washington DC. Serving individuals, families, and businesses across the DMV.",
    keywords: [
      "immigration lawyer DC",
      "business law Washington DC",
      "family law DC",
      "green card lawyer Maryland",
      "attorney Washington DC",
      "law firm DMV",
    ],
    ogImage: "https://cdn.zikwala.com/demo/law-firm/legal_firm_hero.jpg",
  },
  nav: {
    links: [
      { label: "Home",           href: "/" },
      { label: "Practice Areas", href: "/services" },
      { label: "Book Now",       href: "/booking" },
      { label: "Our Team",       href: "/gallery" },
      { label: "About",          href: "/about" },
      { label: "Contact",        href: "/contact" },
    ],
    ctaLabel: "Free Consultation",
    ctaHref: "/booking",
  },
  hero: {
    variant: "bold",
    heading: "Legal Expertise You Can Rely On",
    subheading:
      "Immigration, business, and family law services tailored to the needs of DC's diverse community.",
    cta: { label: "Free Consultation", href: "/booking" },
    secondaryCta: { label: "Our Practice Areas", href: "/services" },
    image: "https://cdn.zikwala.com/demo/law-firm/legal_firm_hero.jpg",
    badge: "20+ Years of Legal Experience",
    trustPoints: ["Licensed in DC, MD & VA", "Multilingual Team", "Free Initial Consultation"],
    socialProof: { count: "1,000+", label: "cases handled across the DMV" },
  },
  services: {
    title: "Practice Areas",
    subtitle: "Comprehensive legal services across key areas of law",
    items: [
      {
        name: "Immigration Law",
        description:
          "Green cards, work visas, asylum, citizenship, and deportation defense for individuals and families.",
        icon: "Globe",
      },
      {
        name: "Business Law",
        description:
          "Business formation, contracts, compliance, and dispute resolution for entrepreneurs and companies.",
        icon: "Briefcase",
      },
      {
        name: "Family Law",
        description:
          "Divorce, child custody, adoption, and domestic relations handled with compassion and expertise.",
        icon: "Heart",
      },
      {
        name: "Real Estate Law",
        description:
          "Property transactions, title disputes, landlord-tenant issues, and contract review.",
        icon: "Home",
      },
    ],
  },
  gallery: {
    title: "Our Legal Team",
    subtitle: "Experienced attorneys dedicated to your success",
    images: [
      { src: "https://cdn.zikwala.com/demo/lawfirm/gallery1.jpg", alt: "Senior attorney" },
      { src: "https://cdn.zikwala.com/demo/lawfirm/gallery2.jpg", alt: "Legal team meeting" },
      { src: "https://cdn.zikwala.com/demo/lawfirm/gallery3.jpg", alt: "Law office DC" },
      { src: "https://cdn.zikwala.com/demo/lawfirm/gallery4.jpg", alt: "Consultation room" },
    ],
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "Trusted by hundreds of families and businesses across the DMV",
    items: [
      {
        name: "James H.",
        role: "Immigration Client, Silver Spring MD",
        text: "They handled my green card application flawlessly. Professional, responsive, and truly caring. I felt supported throughout the entire process.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/testimonial-1.jpg",
      },
      {
        name: "Sarah M.",
        role: "Business Owner, Washington DC",
        text: "Set up my LLC and drafted all my contracts. Saved me from serious legal issues down the road. Highly recommend for any business needs.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/testimonial-2.jpg",
      },
      {
        name: "David R.",
        role: "Family Law Client, Rockville MD",
        text: "Guided me through a difficult custody case with empathy and expertise. Excellent outcome — I couldn't have done it without them.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/testimonial-3.jpg",
      },
    ],
  },
  stats: {
    items: [
      { label: "Cases Won", value: "1,000+" },
      { label: "Years Experience", value: "20+" },
      { label: "Languages Spoken", value: "4" },
      { label: "Client Satisfaction", value: "97%" },
    ],
  },
  about: {
    title: "About Sterling Legal Group",
    story:
      "Founded in 2004, Sterling Legal Group has built a reputation for exceptional legal counsel in Washington DC. We serve a diverse clientele including individuals, families, entrepreneurs, and businesses across the DMV. Our multilingual team ensures every client is fully understood and represented with the highest standard of care.",
    image: "https://cdn.zikwala.com/demo/law-firm/legal_firm.jpg",
    highlights: [
      { label: "Established", value: "2004" },
      { label: "Languages", value: "English, Spanish, French" },
      { label: "Bar Licensed", value: "DC, MD, VA" },
      { label: "Practice Areas", value: "4" },
    ],
  },
  booking: {
    title: "Schedule Your Free Consultation",
    subtitle: "Choose your legal matter, pick a date and time, and we'll confirm within one business day.",
    openTime: "09:00",
    closeTime: "17:00",
    timeStep: 60,
    notesPlaceholder: "Briefly describe your legal situation — this helps us prepare for your consultation…",
    services: [
      {
        name: "Immigration Consultation",
        description: "Green cards, visas, asylum, citizenship, DACA, or deportation defense.",
        duration: "60 min",
        icon: "Globe",
      },
      {
        name: "Business Law Consultation",
        description: "Business formation, contracts, compliance, or commercial disputes.",
        duration: "60 min",
        icon: "Briefcase",
      },
      {
        name: "Family Law Consultation",
        description: "Divorce, child custody, child support, or adoption matters.",
        duration: "60 min",
        icon: "Heart",
      },
      {
        name: "Real Estate Law Consultation",
        description: "Property transactions, title disputes, or landlord-tenant issues.",
        duration: "60 min",
        icon: "Home",
      },
    ],
  },

  contact: {
    title: "Schedule a Free Consultation",
    subtitle: "Tell us about your legal matter and we'll respond within one business day.",
    mapEmbed: "https://maps.google.com/maps?q=789+K+Street+NW,+Washington,+DC&output=embed",
    formEndpoint: "mailto:contact@sterlinglegaldc.com",
    notifyEmail: "contact@sterlinglegaldc.com",
    submitLabel: "Request Consultation",
  },

  areasServed: [
    { name: "Washington, DC",    description: "Main office — all practice areas" },
    { name: "Bethesda, MD",      description: "Immigration & business law" },
    { name: "Silver Spring, MD", description: "Immigration & family law" },
    { name: "Rockville, MD",     description: "Immigration & civil matters" },
    { name: "Arlington, VA",     description: "Business law & immigration" },
    { name: "Alexandria, VA",    description: "Family law & real estate" },
  ],

  stickyContact: "phone",

  faq: [
    { question: "Do you offer free consultations?", answer: "Yes — we offer a free initial consultation for all new clients. This allows us to understand your situation and explain your legal options with no obligation." },
    { question: "What immigration services do you handle?", answer: "We handle green cards, work visas (H-1B, L-1, O-1), family petitions, asylum applications, citizenship, and deportation defense." },
    { question: "How long does an immigration case take?", answer: "Timelines vary by case type. A family green card can take 1–3 years, while an employment visa can take 6–18 months. We'll give you a realistic timeline during your consultation." },
    { question: "Can you help me start a business in DC?", answer: "Absolutely. We assist with LLC and corporation formation, operating agreements, business contracts, and regulatory compliance for DC, MD, and VA." },
    { question: "Do your attorneys speak languages other than English?", answer: "Yes. Our team speaks English, Spanish, and French, with additional interpreter services available for other languages." },
    { question: "What areas do you serve?", answer: "We are licensed in Washington DC, Maryland, and Virginia and serve clients throughout the DMV metropolitan area." },
  ],
  googleReviewUrl: "https://g.page/r/sterling-legal-group-dc/review",
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
}
