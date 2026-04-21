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
    logo: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/logo.png",
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
    ogImage: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/og.png",
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
    image: "/clients/tadesse-law/hero.jpg",
    badge: "20+ Years of Legal Experience",
    trustPoints: ["Licensed in DC, MD & VA", "Amharic & French Speaking", "Free Initial Consultation"],
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
      { src: "https://cdn.zikwala.com/demo/lawfirm/gallery1.jpg", alt: "Attorney Tadesse" },
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
        name: "Biruk H.",
        role: "Immigration Client, Silver Spring MD",
        text: "They handled my green card application flawlessly. Professional, responsive, and truly caring. I felt supported throughout the entire process.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-1.jpg",
      },
      {
        name: "Selam G.",
        role: "Business Owner, Washington DC",
        text: "Set up my LLC and drafted all my contracts. Saved me from serious legal issues down the road. Highly recommend for any business needs.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-2.jpg",
      },
      {
        name: "Yonas M.",
        role: "Family Law Client, Rockville MD",
        text: "Guided me through a difficult custody case with empathy and expertise. Excellent outcome — I couldn't have done it without them.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/testimonial-3.jpg",
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
    title: "About Tadesse & Associates",
    story:
      "Founded in 2004, Tadesse & Associates has built a reputation for exceptional legal counsel in Washington DC. We serve a diverse clientele with a focus on the Ethiopian, African, and immigrant communities in the DMV area. Our attorneys speak English, Amharic, French, and Arabic — ensuring every client is fully understood and represented.",
    image: "https://cdn.zikwala.com/demo/lawfirm/tadesse-law/owner.jpg",
    highlights: [
      { label: "Established", value: "2004" },
      { label: "Languages", value: "English, Amharic, French" },
      { label: "Bar Licensed", value: "DC, MD, VA" },
      { label: "Practice Areas", value: "4" },
    ],
  },
  contact: {
    title: "Schedule a Free Consultation",
    subtitle: "Tell us about your legal matter and we'll respond within one business day.",
    mapEmbed: "https://maps.google.com/maps?q=789+K+Street+NW,+Washington,+DC&output=embed",
    formEndpoint: "mailto:contact@tadesslaw.com",
  },
  googleReviewUrl: "https://g.page/r/tadesse-associates-law-dc/review",
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
}
