"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function GTMPageView({ event }: { event: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event,
    })
  }, [event])

  return null
}
