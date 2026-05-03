import type { SiteConfig } from "@/config/types"

const RADIUS_MAP = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px",
}

const FONT_MAP: Record<string, string> = {
  Inter: "'Inter', sans-serif",
  Poppins: "'Poppins', sans-serif",
  Montserrat: "'Montserrat', sans-serif",
  "Playfair Display": "'Playfair Display', serif",
  "Cormorant Garamond": "'Cormorant Garamond', serif",
}

// Cormorant Garamond has a very small x-height vs sans-serif fonts —
// it looks ~2px smaller than Inter at the same pixel size. Bumping the
// rem root to 112.5% (18px) restores visual parity without touching
// any component. Other fonts stay at the browser default 100% (16px).
const FONT_SIZE_BASE: Partial<Record<SiteConfig["theme"]["font"], string>> = {
  "Cormorant Garamond": "112.5%",
  "Playfair Display":   "106.25%",
}

/**
 * Converts a SiteConfig theme into CSS custom properties.
 * Applied inline on <html> so Tailwind rem utilities AND
 * component var(--color-*) references both pick up the right values.
 */
export function buildThemeVars(
  theme: SiteConfig["theme"]
): React.CSSProperties {
  const vars: Record<string, string> = {
    "--color-primary": theme.primary,
    "--color-secondary": theme.secondary,
    "--color-accent": theme.accent,
    "--color-surface": theme.surface,
    "--color-on-primary": theme.onPrimary,
    "--font-sans": FONT_MAP[theme.font] ?? FONT_MAP["Inter"],
    "--font-heading": FONT_MAP[theme.font] ?? FONT_MAP["Inter"],
    "--radius": RADIUS_MAP[theme.roundedLevel],
  }
  const base = FONT_SIZE_BASE[theme.font]
  if (base) vars["--font-size-base"] = base
  return vars as React.CSSProperties
}

/**
 * Returns the Google Fonts URL for the selected font.
 */
export function getFontUrl(font: SiteConfig["theme"]["font"]): string {
  const families: Record<string, string> = {
    Inter: "Inter:wght@400;500;600;700",
    Poppins: "Poppins:wght@400;500;600;700",
    Montserrat: "Montserrat:wght@400;500;600;700",
    "Playfair Display": "Playfair+Display:wght@400;600;700",
    "Cormorant Garamond": "Cormorant+Garamond:wght@300;400;500;600;700",
  }
  const family = families[font] ?? families["Inter"]
  return `https://fonts.googleapis.com/css2?family=${family}&display=swap`
}
