import type { SiteConfig } from "./types"

// ── Existing demo configs ──────────────────────────────────
import { config as demoCleaning } from "./clients/demo-cleaning"
import { config as demoRealestate } from "./clients/demo-realestate"
import { config as demoLawfirm } from "./clients/demo-lawfirm"
import { config as demoTax } from "./clients/demo-tax"
import { config as demoDecoration } from "./clients/demo-decoration"

// ── New demo configs ───────────────────────────────────────
import { config as demoAutorepair } from "./clients/demo-autorepair"
import { config as demoPainting } from "./clients/demo-painting"
import { config as demoCatering } from "./clients/demo-catering"
import { config as demoBakery } from "./clients/demo-bakery"
import { config as demoHvac } from "./clients/demo-hvac"
import { config as demoElectrical } from "./clients/demo-electrical"
import { config as demoPlumbing } from "./clients/demo-plumbing"
import { config as demoHandyman } from "./clients/demo-handyman"
import { config as demoBeauty } from "./clients/demo-beauty"
import { config as demoPhotography } from "./clients/demo-photography"
import { config as demoTutor } from "./clients/demo-tutor"
import { config as demoInsurance } from "./clients/demo-insurance"
import { config as demoBabysitting } from "./clients/demo-babysitting"
import { config as demoEventplanning } from "./clients/demo-eventplanning"
import { config as demoCardealership } from "./clients/demo-cardealership"
import { config as debelaMengesha } from "./clients/debela-mengesha"

// ── Production client configs (add real clients here) ────────────
// import { config as sparkleCleaningConfig } from "./clients/sparkle-cleaning" 
const configs: Record<string, SiteConfig> = {
  // ── Existing demos ────────────────────────────────────────
  "demo-cleaning": demoCleaning,
  "demo-realestate": demoRealestate,
  "demo-lawfirm": demoLawfirm,
  "demo-tax": demoTax,
  "demo-decoration": demoDecoration,

  // ── New demos ─────────────────────────────────────────────
  "demo-autorepair": demoAutorepair,
  "demo-painting": demoPainting,
  "demo-catering": demoCatering,
  "demo-bakery": demoBakery,
  "demo-hvac": demoHvac,
  "demo-electrical": demoElectrical,
  "demo-plumbing": demoPlumbing,
  "demo-handyman": demoHandyman,
  "demo-beauty": demoBeauty,
  "demo-photography": demoPhotography,
  "demo-tutor": demoTutor,
  "demo-insurance": demoInsurance,
  "demo-babysitting": demoBabysitting,
  "demo-eventplanning": demoEventplanning,
  "demo-cardealership": demoCardealership,

  // ── Production clients (add real clients here) ────────────
  // "sparkle-cleaning": sparkleCleaningConfig,
  "debela-mengesha": debelaMengesha,
}

/**
 * Returns the active site config.
 * Set NEXT_PUBLIC_CLIENT_ID in .env.local per client build.
 * Falls back to "demo-cleaning" for development.
 */
export function getConfig(): SiteConfig {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID ?? "demo-cleaning"
  const config = configs[clientId]

  if (!config) {
    throw new Error(
      `No config found for client "${clientId}". ` +
      `Available: ${Object.keys(configs).join(", ")}`
    )
  }

  return config
}
