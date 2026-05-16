import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Abel Cleaning Services",
    tagline: "Professional Home & Office Cleaning in Dallas, TX",
    phone: "+1 (214) 555-0192",
    email: "info@abelcleaning.com",
    address: "4521 Gaston Ave",
    city: "Dallas",
    state: "TX",
    logo: "https://cdn.zikwala.com/demo/cleaning/logo.png",
    niche: "cleaning",
  },
  theme: {
    primary: "#1B7A4A",
    secondary: "#145C38",
    accent: "#E8F5EE",
    surface: "#F4FBF7",
    onPrimary: "#FFFFFF",
    font: "Poppins",
    roundedLevel: "lg",
    darkMode: false,
  },
  tier: "pro",
  isDemo: true,
  seo: {
    title: "Abel Cleaning Services | Home & Office Cleaning in Dallas, TX",
    description:
      "Trusted home and office cleaning in Dallas, TX. Eco-friendly products, reliable team, satisfaction guaranteed. Book your clean today.",
    keywords: [
      "house cleaning Dallas TX",
      "cleaning service Dallas",
      "maid service Dallas",
      "office cleaning Dallas",
      "deep cleaning Dallas TX",
      "move out cleaning Dallas",
    ],
    ogImage: "https://cdn.zikwala.com/demo/cleaning/hero.jpg",
  },
  nav: {
    links: [
      { label: "Home",     href: "/" },
      { label: "Services", href: "/services" },
      { label: "Book Now", href: "/booking" },
      { label: "Gallery",  href: "/gallery" },
      { label: "About",    href: "/about" },
      { label: "Contact",  href: "/contact" },
    ],
    ctaLabel: "Book a Clean",
    ctaHref: "/booking",
  },
  hero: {
    heading: "A Cleaner Home, A Happier Life",
    variant: "split",
    subheading:
      "Professional cleaning services for homes and offices across Dallas, TX. Eco-friendly, reliable, and satisfaction guaranteed.",
    cta: { label: "Book a Clean", href: "/booking" },
    secondaryCta: { label: "Our Services", href: "/services" },
    image: "https://cdn.zikwala.com/demo/cleaning/hero.jpg",
    badge: "Serving Dallas Since 2015",
    trustPoints: ["Eco-Friendly Products", "Insured & Bonded", "Satisfaction Guaranteed"],
    socialProof: { count: "500+", label: "homes cleaned across Dallas" },
  },
  services: {
    title: "Cleaning Services",
    subtitle: "Tailored cleaning solutions for every need",
    items: [
      {
        name: "Regular Home Cleaning",
        description:
          "Weekly, bi-weekly, or monthly recurring cleans. Dusting, vacuuming, mopping, bathrooms, and kitchen — top to bottom.",
        icon: "Home",
      },
      {
        name: "Deep Cleaning",
        description:
          "A thorough top-to-bottom clean for homes that need extra attention. Perfect for first-time cleans or spring cleaning.",
        icon: "Sparkles",
      },
      {
        name: "Move-In / Move-Out",
        description:
          "Leave your old place spotless or start fresh in your new home. We handle everything so you don't have to.",
        icon: "PackageCheck",
      },
      {
        name: "Office Cleaning",
        description:
          "Keep your workspace clean and professional. Flexible scheduling — evenings or weekends to avoid disruption.",
        icon: "Building2",
      },
    ],
  },
  gallery: {
    title: "Before & After",
    subtitle: "Real results from real Dallas homes",
    images: [
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery1.jpg", alt: "Kitchen deep clean Dallas" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery2.jpg", alt: "Bathroom cleaning Dallas" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery3.jpg", alt: "Living room cleaning" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery4.jpg", alt: "Office cleaning Dallas" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery5.jpg", alt: "Move-out cleaning Dallas" },
      { src: "https://cdn.zikwala.com/demo/cleaning/gallery6.jpg", alt: "Bedroom cleaning Dallas" },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Trusted by hundreds of Dallas families and businesses",
    items: [
      {
        name: "Sarah M.",
        role: "Homeowner, Plano TX",
        text: "Abel's team is incredible. My house has never looked this clean. They even organized my pantry without being asked!",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/cleaning/abel-cleaning/testimonial-1.jpg",
      },
      {
        name: "James T.",
        role: "Office Manager, Dallas TX",
        text: "We use them every week for our office. Always on time, thorough, and professional. Highly recommend.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/cleaning/abel-cleaning/testimonial-2.jpg",
      },
      {
        name: "Priya K.",
        role: "Renter, Irving TX",
        text: "Booked for a move-out clean and got my full deposit back. Worth every penny. Will use again.",
        rating: 5,
        avatar: "https://cdn.zikwala.com/demo/cleaning/abel-cleaning/testimonial-3.jpg",
      },
    ],
  },
  stats: {
    items: [
      { label: "Homes Cleaned", value: "500+" },
      { label: "Years in Business", value: "9+" },
      { label: "Satisfaction Rate", value: "99%" },
      { label: "5-Star Reviews", value: "120+" },
    ],
  },
  about: {
    title: "About Abel Cleaning Services",
    story:
      "Founded in 2015, Abel Cleaning Services has been keeping Dallas homes and offices spotless for nearly a decade. We use only eco-friendly, non-toxic products that are safe for kids and pets. Our team is fully insured, background-checked, and trained to deliver consistent results every visit.",
    image: "https://cdn.zikwala.com/demo/cleaning/hero.jpg",
    highlights: [
      { label: "Founded", value: "2015" },
      { label: "Team Size", value: "8 cleaners" },
      { label: "Products", value: "Eco-friendly" },
      { label: "Coverage", value: "Dallas & DFW" },
    ],
  },
  booking: {
    title: "Book Your Cleaning",
    subtitle: "Choose a service, pick your date and time, and we'll confirm within 2 hours.",
    openTime: "08:00",
    closeTime: "17:00",
    timeStep: 60,
    collectAddress: true,
    notesPlaceholder: "Tell us about your home — bedrooms, bathrooms, pets, or any special instructions…",
    services: [
      {
        name: "Regular Home Cleaning",
        description: "Weekly, bi-weekly, or monthly recurring clean — dusting, vacuuming, mopping, bathrooms & kitchen.",
        price: "From $120",
        priceAmount: 120,
        duration: "2–3 hrs",
        icon: "Home",
      },
      {
        name: "Deep Cleaning",
        description: "Top-to-bottom thorough clean. Perfect for first-time cleans, spring cleaning, or heavily soiled spaces.",
        price: "From $200",
        priceAmount: 200,
        duration: "3–5 hrs",
        icon: "Sparkles",
      },
      {
        name: "Move-In / Move-Out",
        description: "Leave your old place spotless or start fresh in your new home. Includes all surfaces, appliances & cabinets.",
        price: "From $180",
        priceAmount: 180,
        duration: "3–5 hrs",
        icon: "PackageCheck",
      },
      {
        name: "Office Cleaning",
        description: "Keep your workspace clean and professional. Flexible scheduling — evenings or weekends to avoid disruption.",
        price: "From $150",
        priceAmount: 150,
        duration: "2–4 hrs",
        icon: "Building2",
      },
    ],
  },

  contact: {
    title: "Get in Touch",
    subtitle: "Questions? We'll get back to you within 2 hours during business hours.",
    mapEmbed: "https://maps.google.com/maps?q=4521+Gaston+Ave,+Dallas,+TX&output=embed",
    formEndpoint: "mailto:info@abelcleaning.com",
    notifyEmail: "info@abelcleaning.com",
    submitLabel: "Send Message",
  },

  areasServed: [
    { name: "Dallas, TX",        description: "Full service — home, office & deep cleaning" },
    { name: "Plano, TX",         description: "Regular & deep cleaning available" },
    { name: "Irving, TX",        description: "Move-in / move-out & regular cleans" },
    { name: "Garland, TX",       description: "Home & office cleaning" },
    { name: "Mesquite, TX",      description: "Deep cleaning & move-out cleans" },
    { name: "Richardson, TX",    description: "Regular & office cleaning" },
  ],

  faq: [
    { question: "How do I book a cleaning?", answer: "Just click 'Book a Clean', choose your service, pick a date and time, and enter your address. We'll confirm within 2 hours." },
    { question: "Do I need to be home during the clean?", answer: "No — many clients provide a key or door code. We just ask that you let us know your preference when booking." },
    { question: "What's included in a regular cleaning?", answer: "Dusting all surfaces, vacuuming and mopping floors, cleaning bathrooms, wiping down kitchen counters and appliances, and emptying trash." },
    { question: "What's the difference between regular and deep cleaning?", answer: "Deep cleaning covers everything in a regular clean plus inside appliances, baseboards, window sills, light fixtures, and cabinet exteriors — ideal as a first-time clean." },
    { question: "Do you bring your own supplies?", answer: "Yes — we bring all eco-friendly, non-toxic cleaning products and equipment. If you prefer we use your products, just let us know." },
    { question: "Are you insured?", answer: "Yes — Abel Cleaning Services is fully insured and bonded. All our cleaners are background-checked and trained." },
    { question: "Do you offer recurring cleaning plans?", answer: "Yes — we offer weekly, bi-weekly, and monthly recurring plans. Regular clients also receive a discounted rate." },
    { question: "What areas do you serve?", answer: "We serve Dallas and the greater DFW area including Plano, Irving, Garland, Mesquite, and Richardson. Contact us if you're unsure about your location." },
  ],

  stickyContact: "phone",
  googleReviewUrl: "https://g.page/r/abel-cleaning-dallas/review",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
