import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-black to-[#000a0e]">
      <div className="absolute inset-0 opacity-15">
        <img src="/images/data-flow-network.gif" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Ready to Transform Your{" "}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">Security Operations?</span>
          </h2>

          <p className="text-xl text-gray-300 text-pretty max-w-2xl mx-auto">
            Join leading organizations across finance, healthcare, manufacturing, and public utilities who trust BitLyft
            AIR® to protect their critical infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
                Try Interactive Demo
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card/50 bg-card/30 backdrop-blur-sm shadow-lg hover:border-primary/30 transition-all text-white"
              >
                Request a Live Demo
              </Button>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2 group">
              <svg
                className="w-5 h-5 text-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="group-hover:text-gray-300 transition-colors">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 group">
              <svg
                className="w-5 h-5 text-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="group-hover:text-gray-300 transition-colors">Setup in minutes</span>
            </div>
            <div className="flex items-center gap-2 group">
              <svg
                className="w-5 h-5 text-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="group-hover:text-gray-300 transition-colors">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Cta = CTA
