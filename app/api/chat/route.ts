import { NextRequest, NextResponse } from "next/server"

const MOCK_REPLIES = [
  "Thanks for reaching out! We'd be happy to help. Please call us or use the contact form for more details.",
  "Great question! Feel free to call or email us and we'll get back to you right away.",
  "We appreciate your interest! Our team is ready to assist — reach out via phone or email anytime.",
]

export async function POST(req: NextRequest) {
  const { messages } = await req.json()
  const last = messages[messages.length - 1]?.content ?? ""

  // Simple keyword responses for realistic testing
  let reply = MOCK_REPLIES[Math.floor(Math.random() * MOCK_REPLIES.length)]

  if (/price|cost|how much/i.test(last))
    reply = "Our pricing varies by service. Please call us or fill out the contact form for a free quote!"
  else if (/hour|open|close|available/i.test(last))
    reply = "We're available Monday–Friday 9am–6pm. Feel free to call or email us anytime!"
  else if (/location|address|where/i.test(last))
    reply = "You can find our address in the Contact section below. We serve the local area and surrounding cities."
  else if (/hello|hi|hey/i.test(last))
    reply = "Hi there! How can I help you today?"

  // Simulate slight delay like a real API
  await new Promise(r => setTimeout(r, 600))

  return NextResponse.json({ reply })
}
