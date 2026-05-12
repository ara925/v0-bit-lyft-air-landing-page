import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Problems } from "@/components/problems"
import { Industries } from "@/components/industries"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Integrations } from "@/components/integrations"

export const metadata: Metadata = {
  title: "Autonomous Security Operations | AI SOC Platform | BitLyft AIR®",
  description: "Stop threats with BitLyft AIR®. An AI-powered security automation platform delivering AI-driven security operations and no-code incident response automation.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Integrations />
      <Problems />
      <Industries />
      <CTA />
      <Footer />
    </div>
  )
}
