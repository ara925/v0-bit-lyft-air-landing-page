import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Critical Infrastructure SOC Automation | Utilities Cybersecurity",
  description: "Protect critical infrastructure with BitLyft AIR®. SOC and automated incident response for utilities ensure 24/7 monitoring, rapid response, and compliance.",
}

export default function PublicUtilitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
