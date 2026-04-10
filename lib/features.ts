import type { Tier } from "@/config/types"

export interface Features {
  gallery: boolean
  testimonials: boolean
  stats: boolean
  booking: boolean
  analytics: boolean
  customDesign: boolean
}

const TIER_FEATURES: Record<Tier, Features> = {
  basic: {
    gallery: false,
    testimonials: false,
    stats: false,
    booking: false,
    analytics: false,
    customDesign: false,
  },
  standard: {
    gallery: true,
    testimonials: true,
    stats: true,
    booking: false,
    analytics: false,
    customDesign: false,
  },
  pro: {
    gallery: true,
    testimonials: true,
    stats: true,
    booking: true,
    analytics: false,
    customDesign: false,
  },
  premium: {
    gallery: true,
    testimonials: true,
    stats: true,
    booking: true,
    analytics: true,
    customDesign: true,
  },
}

export function getFeatures(tier: Tier): Features {
  return TIER_FEATURES[tier]
}
