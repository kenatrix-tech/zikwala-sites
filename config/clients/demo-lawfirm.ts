import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Tadesse & Associates Law",
    tagline: "Experienced Legal Representation You Can Trust",
    phone: "+1 (202) 555-0303",
    email: "contact@tadesslaw.com",
    address: "789 K Street NW, Suite 200",
    city: "Washington",
    state: "DC",
    logo: "/clients/demo-lawfirm/logo.png",
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
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Tadesse & Associates | Immigration & Business Law in Washington DC",
    description:
      "Trusted immigration, family, and business law services in Washington DC. Serving the Ethiopian and African community in the DMV.",
    keywords: [
      "immigration lawyer DC",
      "business law Washington DC",
      "Ethiopian attorney DMV",
      "family law DC",
      "green card lawyer Maryland",
    ],
    ogImage: "/clients/demo-lawfirm/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Practice Areas", href: "/services" },
      { label: "Our Team", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Free Consultation",
    ctaHref: "/contact",
  },
  hero: {
    variant: "bold",
    heading: "Legal Expertise You Can Rely On",
    subheading:
      "Immigration, business, and family law services tailored to the needs of DC's diverse community.",
    cta: { label: "Free Consultation", href: "/contact" },
    secondaryCta: { label: "Our Practice Areas", href: "/services" },
    image: "/clients/demo-lawfirm/hero.jpg",
    badge: "20+ Years of Legal Experience",
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
      { src: "/clients/demo-lawfirm/gallery/1.jpg", alt: "Attorney Tadesse" },
      { src: "/clients/demo-lawfirm/gallery/2.jpg", alt: "Legal team" },
      { src: "/clients/demo-lawfirm/gallery/3.jpg", alt: "Office" },
      { src: "/clients/demo-lawfirm/gallery/4.jpg", alt: "Consultation room" },
    ],
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "Trusted by hundreds of families and businesses",
    items: [
      {
        name: "Biruk H.",
        role: "Immigration Client",
        text: "They handled my green card application flawlessly. Professional, responsive, and truly caring.",
        rating: 5,
      },
      {
        name: "Selam G.",
        role: "Business Owner, DC",
        text: "Set up my LLC and drafted all my contracts. Saved me from serious legal issues down the road.",
        rating: 5,
      },
      {
        name: "Yonas M.",
        role: "Family Law Client",
        text: "Guided me through a difficult custody case with empathy and expertise. Excellent outcome.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Cases Won", value: "1,000+" },
      { label: "Years Experience", value: "20+" },
      { label: "Languages", value: "4" },
      { label: "Client Satisfaction", value: "97%" },
    ],
  },
  about: {
    title: "About Tadesse & Associates",
    story:
      "Founded in 2004, Tadesse & Associates has built a reputation for exceptional legal counsel in Washington DC. We serve a diverse clientele with a focus on the Ethiopian, African, and immigrant communities in the DMV area. Our attorneys speak English, Amharic, French, and Arabic.",
    image: "/clients/demo-lawfirm/about.jpg",
    highlights: [
      { label: "Established", value: "2004" },
      { label: "Languages", value: "English, Amharic, French" },
      { label: "Bar Licensed", value: "DC, MD, VA" },
      { label: "Practice Areas", value: "4" },
    ],
  },
  contact: {
    title: "Schedule a Free Consultation",
    subtitle:
      "Tell us about your legal matter and we'll respond within one business day.",
    mapEmbed: "",
    formEndpoint: "mailto:contact@tadesslaw.com",
  },
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
}
