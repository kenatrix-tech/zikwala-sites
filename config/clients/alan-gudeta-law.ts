import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "The Law Office of Alan Gudeta",
    tagline: "Immigration & Family Law in Silver Spring, MD",
    phone: "+1 (301) 920-6161",
    email: "alangudeta@gmail.com",
    address: "817 Silver Spring Ave, Suite 204",
    city: "Silver Spring",
    state: "MD",
    logo: "/clients/law-firm/alan_gudeta.jpg",
    niche: "lawfirm",
  },

  theme: {
    primary: "#6B1F2A",       // deep burgundy — prestigious & distinctive
    secondary: "#4E1620",
    accent: "#F5EAEC",
    surface: "#FBF6F7",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "sm",
    darkMode: false,
  },

  tier: "pro",
  isDemo: false,

  seo: {
    title: "Law Office of Alan B. Gudeta | Immigration & Family Law — Silver Spring, MD",
    description:
      "Trusted immigration and family law services in Silver Spring, MD. Attorney Alan B. Gudeta — serving the DMV community since 2013. Free consultation available.",
    keywords: [
      "immigration lawyer Silver Spring MD",
      "family law attorney Silver Spring",
      "immigration attorney Maryland",
      "green card lawyer Maryland",
      "Ethiopian lawyer Maryland",
      "family law Maryland DMV",
      "Alan Gudeta attorney",
      "immigration attorney Montgomery County",
    ],
    ogImage: "/clients/law-firm/alan_gudeta.jpg",
  },

  nav: {
    links: [
      { label: "Home",           href: "/" },
      { label: "Practice Areas", href: "/services" },
      { label: "Book Now",       href: "/booking" },
      { label: "About",          href: "/about" },
      { label: "Contact",        href: "/contact" },
    ],
    ctaLabel: "Free Consultation",
    ctaHref: "/booking",
  },

  hero: {
    variant: "bold",
    heading: "Immigration & Family Law You Can Count On",
    subheading:
      "Attorney Alan B. Gudeta brings focused, compassionate legal representation to immigration and family matters across Maryland and the DMV area.",
    cta:          { label: "Free Consultation", href: "/booking" },
    secondaryCta: { label: "Practice Areas",    href: "/services" },
    image: "https://cdn.zikwala.com/demo/law-firm/legal_firm_hero.jpg",
    badge: "Serving the DMV Since 2013",
    trustPoints: [
      "Licensed in Maryland",
      "Free Initial Consultation",
      "Immigration & Family Law Focus",
    ],
    socialProof: { count: "10+", label: "years serving the DMV community" },
  },

  services: {
    title: "Practice Areas",
    subtitle: "Focused legal representation in immigration and family law",
    items: [
      {
        name: "Family-Based Immigration",
        description:
          "Petitions for spouses, children, parents, and siblings. We guide families through every step — from filing to the interview and beyond.",
        icon: "Heart",
      },
      {
        name: "Asylum & Refugee Status",
        description:
          "Comprehensive asylum representation for individuals fleeing persecution. We build strong cases and advocate fiercely on your behalf.",
        icon: "Shield",
      },
      {
        name: "Work Visas & Green Cards",
        description:
          "H-1B, O-1, EB-1, EB-2, and employment-based green card petitions for professionals and skilled workers.",
        icon: "Briefcase",
      },
      {
        name: "Citizenship & Naturalization",
        description:
          "Guidance through the naturalization process — eligibility assessment, application preparation, and interview coaching.",
        icon: "Star",
      },
      {
        name: "Family Law",
        description:
          "Divorce, legal separation, child custody and support, and domestic relations matters handled with care and professionalism.",
        icon: "Home",
      },
      {
        name: "Deportation Defense",
        description:
          "Removal defense, bond hearings, appeals, and DACA renewals. We fight to protect your right to remain in the United States.",
        icon: "FileText",
      },
    ],
  },

  testimonials: {
    title: "Client Testimonials",
    subtitle: "Trusted by families across Maryland and the DMV",
    items: [
      {
        name: "Tigist B.",
        role: "Immigration Client, Silver Spring MD",
        text: "Attorney Gudeta helped my whole family through the green card process. He was patient, thorough, and always available to answer our questions. We are so grateful.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-1.jpg",
      },
      {
        name: "Samuel W.",
        role: "Asylum Client, Rockville MD",
        text: "I came to him with a very difficult asylum case and he never gave up. His preparation was exceptional and we won. I highly recommend his office to anyone in need.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-2.jpg",
      },
      {
        name: "Liya M.",
        role: "Family Law Client, Hyattsville MD",
        text: "He handled my custody case with such professionalism and compassion. The outcome was exactly what I needed. I always felt like he genuinely cared about my family.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-3.jpg",
      },
    ],
  },

  stats: {
    items: [
      { label: "Established",       value: "2013"   },
      { label: "Practice Areas",    value: "2"      },
      { label: "Office Hours",      value: "Mon–Fri" },
      { label: "Consultation",      value: "Free"   },
    ],
  },

  about: {
    title: "About Attorney Alan B. Gudeta",
    story:
      "The Law Office of Alan B. Gudeta, LLC has been serving the Silver Spring and greater Maryland community since 2013. Attorney Gudeta focuses exclusively on immigration and family law — allowing him to provide deep, specialized expertise in the areas that matter most to immigrant families. His office is conveniently located in Silver Spring, MD, at the heart of the DMV's vibrant immigrant community. Attorney Gudeta is known for his personal, attentive approach — he takes the time to listen, explain your options clearly, and build a legal strategy that fits your specific situation.",
    image: "/clients/law-firm/alan_gudeta.jpg",
    highlights: [
      { label: "Established",  value: "2013"           },
      { label: "Location",     value: "Silver Spring, MD" },
      { label: "Focus",        value: "Immigration & Family Law" },
      { label: "Hours",        value: "Mon–Fri, 9AM–5PM" },
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
        description: "Family petitions, asylum, work visas, green cards, citizenship, or deportation defense.",
        duration: "60 min",
        icon: "Globe",
      },
      {
        name: "Asylum Consultation",
        description: "Asylum applications, refugee status, and protection from removal.",
        duration: "60 min",
        icon: "Shield",
      },
      {
        name: "Family Law Consultation",
        description: "Divorce, legal separation, child custody, or child support matters.",
        duration: "60 min",
        icon: "Heart",
      },
      {
        name: "Deportation Defense",
        description: "Removal proceedings, bond hearings, appeals, and DACA renewals.",
        duration: "60 min",
        icon: "FileText",
      },
    ],
  },

  contact: {
    title: "Schedule a Free Consultation",
    subtitle: "Reach out today — we respond within one business day.",
    mapEmbed: "https://maps.google.com/maps?q=817+Silver+Spring+Ave+Suite+204+Silver+Spring+MD+20910&output=embed",
    formEndpoint: "mailto:alangudeta@gmail.com",
    notifyEmail: "alangudeta@gmail.com",
    submitLabel: "Request Consultation",
  },

  areasServed: [
    { name: "Silver Spring, MD",   description: "Main office — immigration & family law" },
    { name: "Rockville, MD",       description: "Immigration & asylum representation" },
    { name: "Hyattsville, MD",     description: "Family law & immigration" },
    { name: "Gaithersburg, MD",    description: "Immigration filings & consultations" },
    { name: "Bethesda, MD",        description: "Family law & civil matters" },
    { name: "Washington, DC",      description: "Immigration court representation" },
  ],

  faq: [
    { question: "Is the initial consultation free?", answer: "Yes — we offer a free initial consultation. Contact us by phone or through the form to schedule a time that works for you." },
    { question: "What immigration services do you offer?", answer: "We handle family-based petitions, asylum, work visas, green cards, citizenship and naturalization, DACA, and deportation defense." },
    { question: "Do you handle family law cases?", answer: "Yes — in addition to immigration, we handle divorce, legal separation, child custody, and child support matters in Maryland." },
    { question: "Where is your office located?", answer: "We are located at 817 Silver Spring Ave, Suite 204, Silver Spring, MD 20910 — easily accessible from across the DMV." },
    { question: "What are your office hours?", answer: "Our office is open Monday through Friday, 9AM to 5PM. Contact us to schedule a consultation within or outside regular hours." },
    { question: "Can you represent me in immigration court?", answer: "Yes — Attorney Gudeta provides deportation defense, removal proceedings representation, and bond hearings before immigration courts." },
    { question: "How do I get started?", answer: "Call us at (301) 920-6161 or fill out the contact form on this page. We'll schedule a free consultation to review your situation." },
  ],

  stickyContact: "phone",
  googleReviewUrl: "https://g.page/r/alan-gudeta-law/review",

  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
}
