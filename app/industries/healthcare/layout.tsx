import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autonomous Security Operations for Healthcare | Healthcare SOC",
  description: "Protect patient data with autonomous security operations for healthcare, featuring healthcare SOC automation, AI-driven threat detection, and HIPAA compliance.",
}

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
