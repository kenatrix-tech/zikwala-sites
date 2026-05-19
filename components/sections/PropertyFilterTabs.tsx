"use client"

import { useRouter, useSearchParams } from "next/navigation"

type Purpose = "all" | "sale" | "rent"

const TABS: { value: Purpose; label: string }[] = [
  { value: "all",  label: "All Listings" },
  { value: "sale", label: "For Sale" },
  { value: "rent", label: "For Rent" },
]

export function PropertyFilterTabs() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const current = (searchParams.get("purpose") as Purpose | null) ?? "all"

  const go = (value: Purpose) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all") {
      params.delete("purpose")
    } else {
      params.set("purpose", value)
    }
    const qs = params.toString()
    router.push(`/properties${qs ? "?" + qs : ""}`, { scroll: false })
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="inline-flex rounded-full border border-gray-200 bg-white shadow-sm p-1 gap-1">
        {TABS.map(tab => (
          <button
            key={tab.value}
            onClick={() => go(tab.value)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              current === tab.value
                ? "bg-primary text-white shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
