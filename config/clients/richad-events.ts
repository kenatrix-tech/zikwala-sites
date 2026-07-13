import type { SiteConfig } from "../types"

export const config: SiteConfig = {
  business: {
    name: "Richad Events & Decor",
    tagline: "Making Every Celebration Unforgettable",
    phone: "+1 (240) 555-0143",
    email: "info@richadevents.com",
    address: "8720 Georgia Ave",
    city: "DMV Area",
    state: "MD, DC & VA",
    logo: "/clients/richad-events/logo.png",
    niche: "decoration",
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
  isDemo: false,
  isLive: false,
  seo: {
    title: "Richad Events & Decor | Event Decoration in DMV Area",
    description:
      "Professional event decoration and coordination for birthdays, weddings, graduations, baby showers, and bridal showers across Maryland, Washington DC, and Northern Virginia. Custom themes, balloon arches, backdrop styling, and full setup.",
    keywords: [
      "event decoration DMV",
      "event decorator DMV",
      "birthday decoration DMV",
      "wedding decoration DMV",
      "graduation decoration DMV",
      "baby shower decoration Maryland",
      "bridal shower decoration DMV",
      "balloon arch DMV",
      "party decoration Maryland",
      "event decoration Northern Virginia",
      "event decoration Washington DC",
    ],
    ogImage: "https://cdn.zikwala.com/demo/event-panner/event_panning_hero.jpg",
  },
  nav: {
    links: [
      { label: "Home",     href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery",  href: "/gallery" },
      { label: "Packages", href: "/packages" },
      { label: "About",    href: "/about" },
      { label: "Contact",  href: "/contact" },
    ],
    ctaLabel: "Book Your Event",
    ctaHref: "/booking",
  },
  hero: {
    variant: "magazine",
    heading: "Your Vision. Our Decoration.",
    subheading:
      "Stunning event decoration for birthdays, weddings, graduations, baby showers, and bridal showers across the DMV. We set up — you celebrate.",
    cta: { label: "Book Your Event", href: "/booking" },
    secondaryCta: { label: "View Gallery", href: "/gallery" },
    image: "https://cdn.zikwala.com/demo/event-panner/event_panning_hero.jpg",
    badge: "Custom Themes & Full Setup",
    trustPoints: ["Custom Themes", "Full Setup & Teardown", "DMV Area", "Same-Week Booking Available"],
    socialProof: { count: "150+", label: "events decorated across the DMV" },
  },
  services: {
    title: "Event Decoration Services",
    subtitle: "Every celebration deserves a stunning setup — we make it happen",
    items: [
      {
        name: "Birthday Decoration",
        description:
          "From intimate home birthdays to large venue parties — balloon arches, backdrops, table setups, and custom themes for kids and adults.",
        price: "Get a Quote",
        icon: "Cake",
      },
      {
        name: "Wedding Decoration",
        description:
          "Elegant ceremony and reception decor including floral arrangements, backdrops, centerpieces, aisle styling, and lighting.",
        price: "Get a Quote",
        icon: "Heart",
      },
      {
        name: "Graduation Decoration",
        description:
          "Celebrate the big achievement with custom grad-themed setups — photo walls, balloon columns, table decor, and personalized banners.",
        price: "Get a Quote",
        icon: "GraduationCap",
      },
      {
        name: "Baby Shower Decoration",
        description:
          "Sweet and stylish baby shower setups with gender-reveal options, dessert table styling, balloon garlands, and welcome signs.",
        price: "Get a Quote",
        icon: "Baby",
      },
      {
        name: "Bridal Shower Decoration",
        description:
          "Chic and romantic bridal shower decor — floral backdrops, bride-to-be banners, elegant table settings, and custom balloon displays.",
        price: "Get a Quote",
        icon: "Sparkles",
      },
      {
        name: "Baptism Decoration",
        description:
          "Elegant and meaningful baptism setups — floral arrangements, personalized banners, backdrop styling, and table decor for this special milestone.",
        price: "Get a Quote",
        icon: "Cross",
      },
      {
        name: "Event Coordination",
        description:
          "Need someone to manage your event day? We handle vendor timelines, setup logistics, and on-site coordination so you can enjoy every moment.",
        price: "Get a Quote",
        icon: "CalendarCheck",
      },
    ],
  },
  gallery: {
    title: "Our Work",
    subtitle: "A glimpse of celebrations we've brought to life",
    images: [
      { src: "https://cdn.zikwala.com/service/9475410c-9395-4007-ad73-af5d3b76da46.webp", alt: "Bridal shower decoration DMV" },
      { src: "https://cdn.zikwala.com/service/94bc4b2f-e392-4dd8-9fac-810c0dad90f8.webp", alt: "Baby shower decor setup DMV" },
      { src: "https://cdn.zikwala.com/service/68fddaee-3dd9-4d0c-8eed-8f246e756fd9.webp", alt: "Baptism decoration DMV" },
      { src: "https://cdn.zikwala.com/demo/decoration/gallery1.jpg", alt: "Wedding shower backdrop and table styling" },
      { src: "https://cdn.zikwala.com/demo/decoration/gallery4.jpg", alt: "Graduation party decoration DMV" },
      { src: "https://cdn.zikwala.com/demo/decoration/gallery6.jpg", alt: "Birthday balloon arch setup DMV" },
    ],
  },
  testimonials: {
    title: "Happy Clients",
    subtitle: "Celebrations remembered for a lifetime",
    items: [
      {
        name: "Hana M.",
        role: "Birthday Party, DMV Area",
        text: "Richad Events turned my daughter's 5th birthday into an absolute dream. The balloon arch and backdrop were gorgeous — every guest was amazed. Will definitely book again!",
        rating: 5,
      },
      {
        name: "Yonas & Sara T.",
        role: "Wedding, Rockville MD",
        text: "Our wedding reception looked like something out of a magazine. The team handled everything from setup to teardown — we didn't have to worry about a thing.",
        rating: 5,
      },
      {
        name: "Meron B.",
        role: "Baby Shower, Hyattsville MD",
        text: "The baby shower setup was beyond what I imagined. The dessert table styling and balloon garland were perfect. So many compliments from our guests!",
        rating: 5,
      },
    ],
  },
  stats: {
    items: [
      { label: "Events Decorated", value: "150+" },
      { label: "Years Experience", value: "5+" },
      { label: "5-Star Reviews",   value: "80+" },
      { label: "Happy Clients",    value: "130+" },
    ],
  },
  about: {
    title: "About Richad Events & Decor",
    story:
      "Richad Events & Decor was built on a simple belief: every milestone deserves to look extraordinary. We serve families and individuals across Maryland, Washington DC, and Northern Virginia — bringing creative, personalized event decoration to every celebration. From intimate baby showers to grand wedding receptions, we handle every setup detail so you can be fully present for the moments that matter most.",
    image: "https://cdn.zikwala.com/demo/decoration/decoration.jpg",
    highlights: [
      { label: "Service Area",   value: "MD, DC & VA" },
      { label: "Events Done",    value: "150+" },
      { label: "Specialization", value: "Celebrations & Milestones" },
      { label: "Coverage",       value: "Full DMV" },
    ],
  },
  packages: {
    title: "Decoration Packages",
    subtitle: "Every package is custom-quoted based on your event — contact us for a free estimate",
    items: [
      {
        name: "Essential",
        description: "Perfect for intimate gatherings and smaller celebrations.",
        price: "Get a Quote",
        features: [
          "Balloon garland or arch",
          "1 custom backdrop",
          "Table setup (up to 5 tables)",
          "Welcome sign",
          "Setup & teardown included",
        ],
        cta: { label: "Book Essential", href: "/contact?package=Essential" },
      },
      {
        name: "Premium",
        description: "Our most popular package — full-room transformation.",
        price: "Get a Quote",
        badge: "Most Popular",
        highlight: true,
        features: [
          "Everything in Essential",
          "Balloon columns & centerpieces",
          "Custom color theme",
          "Dessert table styling",
          "Personalized banners",
          "Up to 10 tables",
          "Priority booking",
        ],
        cta: { label: "Book Premium", href: "/contact?package=Premium" },
      },
      {
        name: "Luxury",
        description: "All-inclusive experience for large events and weddings.",
        price: "Get a Quote",
        features: [
          "Everything in Premium",
          "Floral arrangements",
          "Lighting & draping",
          "Venue walk-through included",
          "Unlimited table setups",
          "Day-of coordination",
          "Full cleanup",
        ],
        cta: { label: "Book Luxury", href: "/contact?package=Luxury" },
      },
    ],
  },
  booking: {
    title: "Book Your Event",
    subtitle: "Pick a service, choose your date — no payment needed, we'll confirm within 24 hours.",
    services: [
      {
        name: "Birthday Decoration",
        description: "Balloon arches, backdrops, table setups, and custom themes for kids and adults.",
        price: "Get a Quote",

        duration: "2–4 hrs setup",
        icon: "Cake",
      },
      {
        name: "Wedding Decoration",
        description: "Ceremony and reception decor — floral arrangements, backdrops, centerpieces, and lighting.",
        price: "Get a Quote",

        duration: "4–8 hrs setup",
        icon: "Heart",
      },
      {
        name: "Graduation Decoration",
        description: "Grad-themed setups — photo walls, balloon columns, table decor, and personalized banners.",
        price: "Get a Quote",

        duration: "2–4 hrs setup",
        icon: "GraduationCap",
      },
      {
        name: "Baby Shower Decoration",
        description: "Gender-reveal options, dessert table styling, balloon garlands, and welcome signs.",
        price: "Get a Quote",

        duration: "2–3 hrs setup",
        icon: "Baby",
      },
      {
        name: "Bridal Shower Decoration",
        description: "Floral backdrops, bride-to-be banners, elegant table settings, and balloon displays.",
        price: "Get a Quote",

        duration: "2–3 hrs setup",
        icon: "Sparkles",
      },
      {
        name: "Baptism Decoration",
        description: "Floral arrangements, personalized banners, backdrop styling, and table decor for baptism celebrations.",
        price: "Get a Quote",
        duration: "2–3 hrs setup",
        icon: "Cross",
      },
      {
        name: "Event Coordination",
        description: "Day-of coordination — vendor timelines, setup logistics, and on-site management.",
        price: "Get a Quote",
        duration: "Full event day",
        icon: "CalendarCheck",
      },
    ],
  },
  contact: {
    title: "Let's Plan Your Celebration",
    subtitle: "Tell us about your event and we'll get back to you within 24 hours.",
    mapEmbed: "",
    formEndpoint: "mailto:info@richadevents.com",
  },
  faq: [
    { question: "How far in advance should I book?", answer: "We recommend booking at least 2–3 weeks in advance, especially for weekends. That said, we do accept same-week bookings based on availability — contact us and we'll do our best." },
    { question: "What areas do you serve?", answer: "We serve the entire DMV area — Maryland, Washington DC, and Northern Virginia, including Silver Spring, Bethesda, Rockville, Hyattsville, Alexandria, Arlington, Fairfax, Woodbridge, and more. Contact us to confirm availability for your location." },
    { question: "Do you set up and take down the decorations?", answer: "Yes, every package includes full setup before your event and teardown after. You don't have to lift a finger." },
    { question: "Can I customize the colors and theme?", answer: "Absolutely. All packages are fully customizable. We work with your chosen color palette, theme, and any specific items or personalization you want." },
    { question: "Do you do outdoor events?", answer: "Yes, we do outdoor setups for gardens, backyards, and outdoor venues. We'll advise on balloon and decor options that hold up well outdoors." },
    { question: "What events do you decorate?", answer: "We specialize in birthdays, weddings, graduations, baby showers, and bridal showers. We also do anniversaries, gender reveals, and corporate events." },
  ],
  areasServed: [
    // Main cities — shown by default
    { name: "Silver Spring, MD",  description: "Serving Silver Spring and the surrounding DMV community with same-week availability." },
    { name: "Washington, DC",     description: "Decoration services for venues and private events across the District." },
    { name: "Alexandria, VA",     description: "Decoration services for events and private venues across Alexandria." },
    { name: "Bethesda, MD",       description: "Upscale event setups for weddings, showers, and celebrations in Bethesda." },
    { name: "Arlington, VA",      description: "Full decoration services for events and venues across Arlington." },
    { name: "Rockville, MD",      description: "Full decoration services for events and venues across Rockville and Montgomery County." },
    // Maryland
    { name: "Gaithersburg, MD",   description: "Serving Gaithersburg and surrounding Montgomery County communities." },
    { name: "Germantown, MD",     description: "Custom decoration for birthdays, weddings, and celebrations in Germantown." },
    { name: "Hyattsville, MD",    description: "Serving Prince George's County — birthdays, baby showers, and more." },
    { name: "College Park, MD",   description: "Event decoration for celebrations and milestone events in College Park." },
    { name: "Greenbelt, MD",      description: "Full setup and teardown for events across Greenbelt and nearby areas." },
    { name: "Bowie, MD",          description: "Covering Bowie and central Prince George's County for all event types." },
    { name: "Laurel, MD",         description: "Decoration services for gatherings and milestone events in Laurel." },
    { name: "Oxon Hill, MD",      description: "Serving Oxon Hill and southern Prince George's County communities." },
    { name: "Waldorf, MD",        description: "Custom event setups for celebrations across Waldorf and Charles County." },
    { name: "Takoma Park, MD",    description: "Event decoration for birthdays, showers, and celebrations in Takoma Park." },
    // Northern Virginia
    { name: "Fairfax, VA",        description: "Covering Fairfax County for weddings, graduations, and milestone celebrations." },
    { name: "McLean, VA",         description: "Upscale event decoration for weddings and celebrations in McLean and Tysons." },
    { name: "Reston, VA",         description: "Custom themes and full setup for events across Reston." },
    { name: "Herndon, VA",        description: "Serving Herndon and the Route 28 corridor for all event types." },
    { name: "Chantilly, VA",      description: "Custom event setups for gatherings and celebrations in Chantilly." },
    { name: "Centreville, VA",    description: "Decoration services for birthdays, weddings, and showers in Centreville." },
    { name: "Annandale, VA",      description: "Full event decoration for milestone celebrations across Annandale." },
    { name: "Springfield, VA",    description: "Covering Springfield and the I-95 corridor for all event decoration needs." },
    { name: "Woodbridge, VA",     description: "Serving Prince William County — birthdays, weddings, and milestone celebrations." },
    { name: "Manassas, VA",       description: "Event decoration for celebrations and gatherings across Manassas." },
    { name: "Ashburn, VA",        description: "Custom setups for events and milestone celebrations in Ashburn and Loudoun County." },
    { name: "Sterling, VA",       description: "Serving Sterling and the Dulles corridor for all event types." },
    { name: "Leesburg, VA",       description: "Full event decoration for weddings, birthdays, and celebrations in Leesburg." },
  ],
  googleReviewUrl: "https://g.page/r/richad-events-silverspring/review",
  social: {
    facebook:  "https://facebook.com",
    instagram: "https://instagram.com",
  },
}
