import type { Tier } from "@/config/types"

export interface Features {
  gallery: boolean
  testimonials: boolean
  stats: boolean
  booking: boolean
  analytics: boolean
  customDesign: boolean
  vehicleListings: boolean
  propertyListings: boolean
}

const TIER_FEATURES: Record<Tier, Features> = {
  basic: {
    gallery: false,
    testimonials: false,
    stats: false,
    booking: false,
    analytics: false,
    customDesign: false,
    vehicleListings: false,
    propertyListings: false,
  },
  standard: {
    gallery: true,
    testimonials: true,
    stats: true,
    booking: false,
    analytics: false,
    customDesign: false,
    vehicleListings: true,
    propertyListings: true,
  },
  pro: {
    gallery: true,
    testimonials: true,
    stats: true,
    booking: true,
    analytics: true,
    customDesign: false,
    vehicleListings: true,
    propertyListings: true,
  },
  premium: {
    gallery: true,
    testimonials: true,
    stats: true,
    booking: true,
    analytics: true,
    customDesign: true,
    vehicleListings: true,
    propertyListings: true,
  },
}

export function getFeatures(tier: Tier): Features {
  return TIER_FEATURES[tier]
}
