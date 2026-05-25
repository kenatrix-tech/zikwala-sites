"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { WebsiteOrderForm } from "@/components/WebsiteOrderForm"

interface OrderFormModalProps {
  endpoint: string
  plan: string
  onClose: () => void
}

function OrderFormModal({ endpoint, plan, onClose }: OrderFormModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  function handleBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose()
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdrop}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-lg font-black text-gray-900">Place Your Order</h2>
            <p className="text-xs text-gray-400 mt-0.5">No payment now — we'll contact you within 24 hours</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center
                       text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-6 py-6">
          <WebsiteOrderForm endpoint={endpoint} initialPlan={plan} />
        </div>
      </div>
    </div>,
    document.body
  )
}

interface OrderButtonProps {
  plan: string
  endpoint: string
  label: string
  className?: string
}

export function OrderButton({ plan, endpoint, label, className }: OrderButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      {open && (
        <OrderFormModal
          endpoint={endpoint}
          plan={plan}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
