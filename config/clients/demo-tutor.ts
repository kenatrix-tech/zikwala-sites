import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Bright Path Tutoring",
    tagline: "Academic Excellence, One Student at a Time",
    phone: "+1 (301) 555-1311",
    email: "info@brightpathtutoring.com",
    address: "7600 Baltimore Ave",
    city: "College Park",
    state: "MD",
    logo: "/clients/demo-tutor/logo.png",
    niche: "tutor",
  },
  theme: {
    primary: "#4338CA",
    secondary: "#3730A3",
    accent: "#E0E7FF",
    surface: "#EEF2FF",
    onPrimary: "#FFFFFF",
    font: "Poppins",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "standard",
  isDemo: true,
  seo: {
    title: "Bright Path Tutoring | Academic Tutoring in College Park MD",
    description:
      "Expert tutoring for K-12 and college students in College Park, MD. Math, science, SAT prep, and writing. In-person and online sessions available.",
    keywords: [
      "tutoring College Park MD",
      "SAT prep Maryland",
      "math tutor DMV",
      "after school tutoring Prince George County",
    ],
    ogImage: "/clients/demo-tutor/og.png",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Testimonials", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Book Free Trial",
    ctaHref: "/contact",
  },
  hero: {
    heading: "Unlock Your Child's Full Potential",
    subheading:
      "Personalized tutoring for K-12 and college students. Better grades, stronger confidence, and real results.",
    cta: { label: "Book Free Trial Session", href: "/contact" },
    secondaryCta: { label: "Our Programs", href: "/services" },
    image: "/clients/demo-tutor/hero.jpg",
    badge: "In-Person & Online Sessions",
    trustPoints: ["Certified & Degreed Tutors", "Free First Session", "In-Person & Online Available"],
    socialProof: { count: "300+", label: "students helped across Prince George's County" },
  },
  services: {
    title: "Tutoring Programs",
    subtitle: "Personalized academic support for every level",
    items: [
      {
        name: "Math & Science Tutoring",
        description:
          "Algebra, geometry, calculus, biology, chemistry, and physics for middle, high school, and college students.",
        price: "From $50/hr",
        icon: "Calculator",
      },
      {
        name: "SAT & ACT Prep",
        description:
          "Structured test prep programs with practice tests, strategy coaching, and score improvement guarantee.",
        price: "From $60/hr",
        icon: "GraduationCap",
      },
      {
        name: "Language Arts & Writing",
        description:
          "Essay writing, reading comprehension, grammar, and English language support for all grades.",
        price: "From $50/hr",
        icon: "BookOpen",
      },
      {
        name: "College Application Coaching",
        description:
          "Personal statement editing, application strategy, and interview prep for college-bound seniors.",
        price: "From $80/hr",
        icon: "FileText",
      },
    ],
  },
  gallery: {
    title: "Student Success Stories",
    subtitle: "Results our students and parents share",
    images: [
      { src: "/clients/demo-tutor/gallery/1.jpg", alt: "One-on-one tutoring session" },
      { src: "/clients/demo-tutor/gallery/2.jpg", alt: "Group study" },
      { src: "/clients/demo-tutor/gallery/3.jpg", alt: "SAT prep" },
      { src: "/clients/demo-tutor/gallery/4.jpg", alt: "Online session" },
      { src: "/clients/demo-tutor/gallery/5.jpg", alt: "Math tutoring" },
      { src: "/clients/demo-tutor/gallery/6.jpg", alt: "Student achievement" },
    ],
  },
  testimonials: {
    title: "Parent & Student Reviews",
    subtitle: "Real results, real families",
    items: [
      {
        name: "Mekdes T.",
        role: "Parent, College Park MD",
        text: "My son went from a C to an A in Algebra in just 6 weeks. The tutor was patient, encouraging, and really knew how to explain things differently.",
        rating: 5,
      },
      {
        name: "Alyssa R.",
        role: "Student, Hyattsville MD",
        text: "Bright Path helped me raise my SAT score by 180 points. I got into my first-choice school! Forever grateful.",
        rating: 5,
      },
      {
        name: "James & Patricia O.",
        role: "Parents, Bowie MD",
        text: "Both our kids are now with Bright Path. The consistency and the curriculum made a huge difference in their confidence and grades.",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Students Helped", value: "300+" },
      { label: "Years Experience", value: "8+" },
      { label: "Avg Grade Improvement", value: "1 Letter" },
      { label: "SAT Score Boost", value: "150+ pts" },
    ],
  },
  about: {
    title: "About Bright Path Tutoring",
    story:
      "Bright Path Tutoring was founded in College Park by a team of educators with a shared belief: every student can succeed with the right support. Our tutors are degree-holding professionals with classroom experience who tailor their approach to each student's learning style. We measure success not just in grades, but in confidence and love of learning.",
    image: "/clients/demo-tutor/about.jpg",
    highlights: [
      { label: "Tutors", value: "Degreed & Certified" },
      { label: "Grades Served", value: "K-12 & College" },
      { label: "Modality", value: "In-Person & Online" },
      { label: "First Session", value: "Free Trial" },
    ],
  },
  contact: {
    title: "Book a Free Trial Session",
    subtitle: "Tell us your student's grade, subject, and goals. We'll match you with the right tutor.",
    mapEmbed: "",
    formEndpoint: "mailto:info@brightpathtutoring.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
