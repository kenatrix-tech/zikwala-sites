"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { SiteConfig } from "@/config/types"

interface Props {
  faq: NonNullable<SiteConfig["faq"]>
}

export function FAQ({ faq }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-surface dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--color-primary)" }}>
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Everything you need to know about buying or selling a home.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map(({ question, answer }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 dark:text-white text-sm">{question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-primary transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
