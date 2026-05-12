import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cybersecurity for Banks | Financial Services SOC Automation",
  description: "Secure banks and credit unions with BitLyft AIR®. We offer AI-powered cybersecurity for Banks, with automated incident response, and compliance reporting.",
}

export default function FinancialServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
