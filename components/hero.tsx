import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-[#000a0e] via-[#0a1628] to-[#000a0e]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      <div className="absolute inset-0 opacity-20">
        <img src="/images/cybersecurity-network-animation.gif" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1.5s", animationDuration: "4s" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 shadow-lg shadow-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">Autonomous Security Operations</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white drop-shadow-2xl">
            Automated Incident Response{" "}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">Without the Headache</span>
          </h1>

          <p className="text-xl text-gray-200 leading-relaxed text-pretty max-w-2xl mx-auto drop-shadow-lg">
            Stop threats in milliseconds, not minutes. Fast, accurate, no-code automation that closes security gaps and
            scales your SOC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group"
              >
                Get BitLyft AIR
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card/50 bg-card/30 backdrop-blur-sm shadow-lg hover:border-primary/30 transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Try Interactive Demo
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-400 drop-shadow-md">
            We built BitLyft AIR to be the first truly autonomous SOC layer, eliminating alert noise and delivering
            security automation, not complexity.
          </p>
        </div>
      </div>
    </section>
  )
}
