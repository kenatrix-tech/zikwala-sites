import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Law Offices of Seife Lemma",
    tagline: "Trusted Legal Counsel in Washington DC & Virginia",
    phone: "+1 (703) 565-4771",
    email: "info@seifelемmalaw.com",
    address: "1628 11th St. NW, Suite 408",
    city: "Washington",
    state: "DC",
    logo: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/logo.png",
    niche: "lawfirm",
  },

  theme: {
    primary: "#1C3557",       // deep navy — authority & trust
    secondary: "#142741",
    accent: "#EAF0F7",
    surface: "#F6F8FB",
    onPrimary: "#FFFFFF",
    font: "Playfair Display",
    roundedLevel: "sm",
    darkMode: false,
  },

  tier: "pro",
  isDemo: false,

  seo: {
    title: "Law Offices of Seife Lemma | Immigration & Civil Law — Washington DC & Virginia",
    description:
      "Experienced legal representation in Washington DC and Virginia. Attorney Seifeselassie K. Lemma — licensed in DC and Virginia. Immigration, family, and civil law. Free consultation.",
    keywords: [
      "immigration lawyer Washington DC",
      "Virginia immigration attorney",
      "criminal defense attorney Northern Virginia",
      "Ethiopian lawyer DC",
      "immigration attorney Arlington VA",
      "family law attorney DC",
      "criminal lawyer Fairfax VA",
      "civil litigation DC Virginia",
      "Seife Lemma attorney",
      "DMV immigration lawyer",
      "criminal defense lawyer Falls Church VA",
    ],
    ogImage: "https://cdn.zikwala.com/demo/law-firm/legal_firm_hero.jpg",
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
    heading: "Experienced Legal Counsel for DC & Virginia",
    subheading:
      "Attorney Seifeselassie K. Lemma brings dedicated, personalized representation to immigration, family, and civil matters across the DC metro area.",
    cta:          { label: "Free Consultation", href: "/booking" },
    secondaryCta: { label: "Practice Areas",    href: "/services" },
    image: "https://cdn.zikwala.com/demo/law-firm/legal_firm_hero.jpg",
    badge: "Licensed in DC & Virginia",
    trustPoints: [
      "Licensed in DC & Virginia",
      "Free Initial Consultation",
      "Amharic Speaking",
    ],
    socialProof: { count: "17+", label: "years of legal experience" },
  },

  services: {
    title: "Practice Areas",
    subtitle: "Dedicated legal representation across key areas of law",
    items: [
      {
        name: "Immigration Law",
        description:
          "Green cards, family-based petitions, work visas, asylum, citizenship, DACA, and deportation defense. We guide you through every step of the process.",
        icon: "Globe",
      },
      {
        name: "Family Law",
        description:
          "Divorce, legal separation, child custody and support, adoption, and domestic relations — handled with professionalism and compassion.",
        icon: "Heart",
      },
      {
        name: "Civil Litigation",
        description:
          "Representation in civil disputes including contract disagreements, personal injury claims, and business conflicts in DC and Virginia courts.",
        icon: "FileText",
      },
      {
        name: "Criminal Defense",
        description:
          "Aggressive representation for misdemeanor and felony charges in Virginia and DC courts — DUI, assault, theft, drug offenses, and more. Your rights matter.",
        icon: "Shield",
      },
      {
        name: "Business Law",
        description:
          "Business formation, operating agreements, contract drafting and review, and compliance guidance for entrepreneurs and small businesses.",
        icon: "Briefcase",
      },
    ],
  },

  testimonials: {
    title: "Client Testimonials",
    subtitle: "Trusted by families and individuals across the DC metro area",
    items: [
      {
        name: "Mekdes A.",
        role: "Immigration Client, Arlington VA",
        text: "Attorney Lemma handled my green card case with such care and precision. He kept me informed at every step and the outcome exceeded my expectations. I truly felt in safe hands.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-1.jpg",
      },
      {
        name: "Daniel T.",
        role: "Business Client, Washington DC",
        text: "He helped me structure my business properly and drafted solid contracts. Very knowledgeable and responsive. I refer everyone I know to his office.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-2.jpg",
      },
      {
        name: "Hiwot G.",
        role: "Family Law Client, Gaithersburg MD",
        text: "Going through a custody case is stressful, but Attorney Lemma made the process manageable. His advice was always clear and he fought hard for the right outcome.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-3.jpg",
      },
    ],
  },

  stats: {
    items: [
      { label: "Years in Practice", value: "17+"    },
      { label: "Bar Admissions",   value: "DC & VA" },
      { label: "Practice Areas",   value: "5"      },
      { label: "Consultation",     value: "Free"   },
    ],
  },

  about: {
    title: "About Attorney Seife Lemma",
    story:
      "Seifeselassie Kidane Lemma is a licensed attorney admitted to practice in the District of Columbia and the Commonwealth of Virginia (Virginia Bar No. 923667404, admitted 2008). His office serves clients from Washington DC, Arlington, and the greater DMV area with a focus on immigration, family, and civil law. Attorney Lemma is known for his personalized approach — taking time to understand each client's unique situation and building a clear strategy tailored to their needs. He offers consultations in both English and Amharic.",
    image: "https://cdn.zikwala.com/demo/law-firm/legal_firm_hero.jpg",
    highlights: [
      { label: "VA Bar No.",  value: "923667404"   },
      { label: "Admitted",   value: "DC & Virginia" },
      { label: "Languages",  value: "English & Amharic" },
      { label: "Offices",    value: "DC & Arlington, VA" },
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
        name: "Family Law Consultation",
        description: "Divorce, child custody, child support, or adoption matters.",
        duration: "60 min",
        icon: "Heart",
      },
      {
        name: "Business Law Consultation",
        description: "Business formation, contracts, compliance, or commercial disputes.",
        duration: "60 min",
        icon: "Briefcase",
      },
      {
        name: "Criminal Defense Consultation",
        description: "DUI, assault, theft, drug charges, or other misdemeanor and felony matters.",
        duration: "60 min",
        icon: "Shield",
      },
      {
        name: "Civil Litigation Consultation",
        description: "Contract disputes, personal injury claims, or other civil matters.",
        duration: "60 min",
        icon: "FileText",
      },
    ],
  },

  contact: {
    title: "Schedule a Free Consultation",
    subtitle: "Tell us about your legal matter — we'll respond within one business day.",
    mapEmbed: "https://maps.google.com/maps?q=1628+11th+St+NW+Suite+408+Washington+DC&output=embed",
    formEndpoint: "mailto:info@seifelемmalaw.com",
    notifyEmail: "info@seifelемmalaw.com",
    submitLabel: "Request Consultation",
  },

  areasServed: [
    { name: "Washington, DC",      description: "Main office — all practice areas" },
    { name: "Arlington, VA",       description: "Second office — all practice areas" },
    { name: "Fairfax, VA",         description: "Criminal defense, immigration & family law" },
    { name: "Alexandria, VA",      description: "Criminal defense & civil litigation" },
    { name: "Falls Church, VA",    description: "Criminal defense & immigration" },
    { name: "McLean, VA",          description: "Business law & civil litigation" },
    { name: "Reston, VA",          description: "Immigration & family law" },
    { name: "Herndon, VA",         description: "Immigration & criminal defense" },
    { name: "Manassas, VA",        description: "Criminal defense & family law" },
    { name: "Gaithersburg, MD",    description: "Immigration & family law" },
    { name: "Silver Spring, MD",   description: "Immigration & family law" },
    { name: "Rockville, MD",       description: "Immigration & civil matters" },
  ],

  faq: [
    { question: "Is the initial consultation free?", answer: "Yes — we offer a free initial consultation to discuss your legal matter and determine how we can help. Contact us to schedule." },
    { question: "What languages does Attorney Lemma speak?", answer: "Attorney Lemma consults in both English and Amharic, making him accessible to the Ethiopian and East African community in the DMV." },
    { question: "Where are your offices located?", answer: "Our main office is at 1628 11th St. NW, Suite 408, Washington DC. We also serve clients at our Arlington, VA location at 2007 15th St N, Arlington, VA 22201." },
    { question: "What immigration services do you offer?", answer: "We handle green card petitions, family-based immigration, work visas, asylum, DACA, citizenship applications, and deportation defense." },
    { question: "Are you licensed to practice in Virginia?", answer: "Yes — Attorney Lemma holds Virginia Bar License No. 923667404 and is also licensed in the District of Columbia." },
    { question: "Can you help with family law matters?", answer: "Yes — we handle divorce, legal separation, child custody and support, and adoption proceedings in DC and Virginia." },
    { question: "Do you handle criminal defense cases?", answer: "Yes — we represent clients facing misdemeanor and felony charges in Virginia and DC courts, including DUI, assault, theft, drug offenses, and more. Contact us immediately if you or a family member has been charged." },
    { question: "What Northern Virginia areas do you serve?", answer: "We serve clients across Northern Virginia including Arlington, Fairfax, Alexandria, Falls Church, McLean, Reston, Herndon, and Manassas — in addition to Washington DC and Maryland." },
    { question: "How do I get started?", answer: "Simply call us at (703) 565-4771 or fill out our contact form. We'll schedule a free consultation to review your situation." },
  ],

  stickyContact: "phone",
  googleReviewUrl: "https://g.page/r/seife-lemma-law/review",

  social: {
    facebook:  "https://facebook.com",
    linkedin:  "https://linkedin.com",
  },
}
