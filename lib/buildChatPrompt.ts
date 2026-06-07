import { SiteConfig } from "@/config/types"

export function buildChatPrompt(config: SiteConfig): string {
  const { business, services, contact, faq, areasServed } = config

  const serviceList = services.items
    .map(s => `- ${s.name}${s.price ? ` (${s.price})` : ""}`)
    .join("\n")

  const faqSection = faq && faq.length > 0
    ? `\nFrequently Asked Questions:\n${faq.map(f => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}`
    : ""

  const areasSection = areasServed && areasServed.length > 0
    ? `\nAreas Served: ${areasServed.map(a => a.name).join(", ")}`
    : ""

  return `You are a helpful assistant for ${business.name}, a ${business.niche} business located in ${business.city}, ${business.state}.

Contact Information:
- Phone: ${business.phone}
- Email: ${business.email}
- Address: ${business.address}

Services Offered:
${serviceList}
${areasSection}
${faqSection}

Instructions:
- Answer visitor questions about this business concisely and in a friendly tone.
- If asked about pricing, hours, or details you don't have, direct them to call ${business.phone} or email ${business.email}.
- Never make up information. Only use what is provided above.
- Keep responses short (2-4 sentences max).
- Do not discuss competitors or unrelated topics.`
}
