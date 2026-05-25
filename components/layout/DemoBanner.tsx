"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "15716391098"
const WHATSAPP_MESSAGE = "Hi, I'm interested in getting a website like this for my business."

interface DemoBannerProps {
  businessName: string
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function DemoBanner({ businessName }: DemoBannerProps) {
  function textUs() {
    window.open(`sms:+${WHATSAPP_NUMBER}`, "_blank")
  }

  function contactOnWhatsApp() {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank"
    )
  }

  return (
    <div className="bg-gray-900 text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center
                      justify-between gap-2 text-sm">
        <p className="text-white/70 text-center sm:text-left">
          <span className="text-white/40 mr-2">DEMO</span>
          You&apos;re viewing a preview site for{" "}
          <strong className="text-white">{businessName}</strong>
        </p>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          {/* Text Us */}
          <button
            onClick={textUs}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white
                       border border-white/20 hover:border-white/50
                       text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
            title="Text Us"
          >
            <MessageCircle size={13} />
            <span className="hidden sm:inline">Text Us</span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={contactOnWhatsApp}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white
                       border border-white/20 hover:border-white/50
                       text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
            title="WhatsApp"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

{/* More demos */}
          <a
            href="https://zikwala.com/website/demos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white
                       border border-white/20 hover:border-white/50
                       text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
          >
            More Demos
          </a>

          {/* Get this site CTA */}
          <Link
            href="/get-started"
            className="inline-flex items-center gap-1.5 bg-white text-gray-900
                       font-bold text-xs px-4 py-1.5 rounded-full shrink-0
                       hover:bg-gray-100 transition-colors"
          >
            Get this site from $399
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}
