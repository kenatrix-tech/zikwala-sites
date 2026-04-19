import type { Tier } from "@/config/types"

export interface Features {
  // ─── Standard+ ────────────────────────────────────────────
  gallery:          boolean   // photo gallery section
  testimonials:     boolean   // client reviews section
  stats:            boolean   // stats / highlights bar
  propertyListings: boolean   // static property listings (config-driven)
  productListings:  boolean   // static product / menu listings (config-driven)
  vehicleListings:  boolean   // static vehicle inventory (config-driven)

  // ─── Pro+ ─────────────────────────────────────────────────
  booking:          boolean   // online appointment / reservation
  analytics:        boolean   // Google Analytics / tracking
  whatsappInquiry:  boolean   // contact form opens WhatsApp with inquiry pre-filled

  // ─── Premium only ─────────────────────────────────────────
  auth:             boolean   // login / signup for users
  userDashboard:    boolean   // client manages their own content
  dynamicListings:  boolean   // listings from database (not config)
  rentalApplications: boolean // tenants apply online (realestate)
  onlineBooking:    boolean   // full booking system with calendar
  blog:             boolean   // blog / news section with CMS
  customDesign:     boolean   // custom colors / fonts beyond defaults
}

const TIER_FEATURES: Record<Tier, Features> = {
  basic: {
    // landing page + credibility — hero, services, about, contact, gallery, testimonials, stats
    gallery:             true,   // static past work / sold gallery
    testimonials:        true,   // client reviews + Google Review link
    stats:               true,   // achievements bar
    propertyListings:    false,
    productListings:     false,
    vehicleListings:     false,
    booking:             false,
    analytics:           false,
    whatsappInquiry:     false,
    auth:                false,
    userDashboard:       false,
    dynamicListings:     false,
    rentalApplications:  false,
    onlineBooking:       false,
    blog:                false,
    customDesign:        false,
  },
  standard: {
    // full site + static listings
    gallery:             true,
    testimonials:        true,
    stats:               true,
    propertyListings:    true,
    productListings:     true,
    vehicleListings:     true,
    booking:             false,
    analytics:           false,
    whatsappInquiry:     false,
    auth:                false,
    userDashboard:       false,
    dynamicListings:     false,
    rentalApplications:  false,
    onlineBooking:       false,
    blog:                false,
    customDesign:        false,
  },
  pro: {
    // standard + booking, analytics, whatsapp inquiry
    gallery:             true,
    testimonials:        true,
    stats:               true,
    propertyListings:    true,
    productListings:     true,
    vehicleListings:     true,
    booking:             true,
    analytics:           true,
    whatsappInquiry:     true,
    auth:                false,
    userDashboard:       false,
    dynamicListings:     false,
    rentalApplications:  false,
    onlineBooking:       false,
    blog:                false,
    customDesign:        false,
  },
  premium: {
    // pro + auth, dashboard, dynamic listings, blog, custom design
    gallery:             true,
    testimonials:        true,
    stats:               true,
    propertyListings:    true,
    productListings:     true,
    vehicleListings:     true,
    booking:             true,
    analytics:           true,
    whatsappInquiry:     true,
    auth:                true,
    userDashboard:       true,
    dynamicListings:     true,
    rentalApplications:  true,
    onlineBooking:       true,
    blog:                true,
    customDesign:        true,
  },
}

export function getFeatures(tier: Tier): Features {
  return TIER_FEATURES[tier]
}
