import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automated Threat Detection | Real-Time Threat Detection",
  description: "BitLyft AIR® provides AI-powered threat detection with AI-powered triage, contextual analysis, and intelligent threat detection across your security stack.",
}

export default function ThreatDetectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
