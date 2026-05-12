import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | BitLyft AIR® Sales & Support",
  description:
    "Get in touch with the BitLyft AIR® team. Schedule a demo, ask about pricing, or reach out to our support team for help with your security operations platform.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
