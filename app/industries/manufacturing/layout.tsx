import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autonomous Security Operations for Manufacturing | BitLyft AIR®",
  description: "Defend manufacturing environments from ransomware, IP theft, and supply chain attacks with Manufacturing SOC Automation from BitLyft AIR®.",
}

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
