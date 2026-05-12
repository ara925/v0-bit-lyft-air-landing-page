import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reseller Program | BitLyft AIR® Security Resellers",
  description:
    "Become a BitLyft AIR® reseller. Offer AI-powered security automation and autonomous SOC capabilities to your clients with competitive margins and full support.",
}

export default function ResellerLayout({ children }: { children: React.ReactNode }) {
  return children
}
