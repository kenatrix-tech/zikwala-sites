"use client"

import { useEffect, useRef, useState } from "react"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface Props {
  systemPrompt: string
  businessName: string
  apiBase: string
}

const MAX_MESSAGES = 20

export function ChatWidget({ systemPrompt, businessName, apiBase }: Props) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const updated: Message[] = [...messages, { role: "user", content: text }]
    setMessages(updated)
    setInput("")
    setLoading(true)

    try {
      const endpoint = apiBase === "mock"
        ? "/api/chat"
        : `${apiBase}/api/v1/public/ai/chat`
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemPrompt, messages: updated }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please call or email us directly." },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const atLimit = messages.length >= MAX_MESSAGES

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 sm:w-96 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-primary)]">
            <div>
              <p className="text-[var(--color-on-primary)] font-semibold text-sm">{businessName}</p>
              <p className="text-[var(--color-on-primary)] text-xs opacity-80">AI Assistant · Replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[var(--color-on-primary)] opacity-70 hover:opacity-100 text-xl leading-none"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
            {messages.length === 0 && (
              <p className="text-center text-gray-400 dark:text-gray-500 text-sm pt-6">
                Ask me anything about {businessName}!
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                  Typing…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-3 py-2 flex gap-2">
            {atLimit ? (
              <p className="text-xs text-gray-400 dark:text-gray-500 py-2 text-center w-full">
                Chat limit reached. Please contact us directly.
              </p>
            ) : (
              <>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Type a message…"
                  disabled={loading}
                  className="flex-1 text-sm bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400 disabled:opacity-50"
                />
                <button
                  onClick={send}
                  disabled={loading || !input.trim()}
                  className="text-[var(--color-primary)] disabled:opacity-30 font-semibold text-sm"
                >
                  Send
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-on-primary)] text-2xl hover:opacity-90 transition-opacity"
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  )
}
