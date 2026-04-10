import type { SiteConfig } from "./types"

// ── Import all client configs ──────────────────────────────
import { config as demoCleaning } from "./clients/demo-cleaning"
import { config as demoRealestate } from "./clients/demo-realestate"
import { config as demoLawfirm } from "./clients/demo-lawfirm"
import { config as demoTax } from "./clients/demo-tax"
import { config as demoDecoration } from "./clients/demo-decoration"

const configs: Record<string, SiteConfig> = {
  "demo-cleaning": demoCleaning,
  "demo-realestate": demoRealestate,
  "demo-lawfirm": demoLawfirm,
  "demo-tax": demoTax,
  "demo-decoration": demoDecoration,
  // Add real clients here:
  // "sparkle-cleaning": sparkleCleaningConfig,
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
