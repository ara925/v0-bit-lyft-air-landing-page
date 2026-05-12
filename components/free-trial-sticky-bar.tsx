"use client"

import Link from "next/link"
import { useState } from "react"
import { X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FreeTrialStickyBar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/30 bg-zinc-950/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/30">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <p className="text-sm text-gray-300 truncate">
              <span className="font-semibold text-white">Stop threats in milliseconds.</span>{" "}
              <span className="hidden sm:inline">See BitLyft AIR® in action with a free trial.</span>
            </p>
          </div>

          <div className="flex flex-shrink-0 items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 font-semibold"
            >
              <Link href="/contact">Start Free Trial</Link>
            </Button>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
