import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autonomous SOC Automation Platform | No-Code SOC Automation",
  description: "BitLyft AIR® is an autonomous SOC automation platform with no-code workflows that reduce alert fatigue, automate remediation, and scale 24/7.",
}

export default function SOCAutomationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
