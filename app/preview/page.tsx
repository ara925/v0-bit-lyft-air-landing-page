"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function PreviewHeader() {
  const [showSolutions, setShowSolutions] = useState(false)
  const [showIndustries, setShowIndustries] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#000a0e]/95 via-[#001419]/95 to-[#000a0e]/95 backdrop-blur-xl shadow-lg shadow-black/30">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <div className="text-white font-bold text-xl tracking-tight">
            Bit<span className="text-blue-500">Lyft</span> AIR<span className="text-blue-400 text-sm align-super">®</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => setShowSolutions(true)} onMouseLeave={() => setShowSolutions(false)}>
            <button className="text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 py-2">
              Solutions <ChevronDown className="w-4 h-4" />
            </button>
            {showSolutions && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-64 bg-[#000a0e]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl py-2">
                  {["Automated Incident Response", "Threat Detection", "SOC Automation"].map((item) => (
                    <div key={item} className="block px-4 py-3 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/5 transition-colors cursor-pointer">{item}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {["Features", "Resources"].map((item) => (
            <span key={item} className="text-sm text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">{item}</span>
          ))}
          <div className="relative" onMouseEnter={() => setShowIndustries(true)} onMouseLeave={() => setShowIndustries(false)}>
            <button className="text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1 py-2">
              Industries <ChevronDown className="w-4 h-4" />
            </button>
            {showIndustries && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-[#000a0e]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl py-2">
                  {["Financial Services", "Healthcare", "Manufacturing", "Public Utilities"].map((item) => (
                    <div key={item} className="block px-4 py-3 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/5 transition-colors cursor-pointer">{item}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-blue-400 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Demo
          </button>
          <Button variant="outline" size="sm" className="border-blue-500/50 text-white hover:bg-blue-500/10 bg-transparent">Pricing</Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/30">Request a Demo</Button>
        </div>
      </nav>
    </header>
  )
}

function PreviewHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-[#000a0e] via-[#0a1628] to-[#000a0e]">
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s", animationDuration: "4s" }} />
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 shadow-lg shadow-blue-500/20">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-semibold">Autonomous Security Operations</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white drop-shadow-2xl">
            Automated Incident Response{" "}
            <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">Without the Headache</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed text-pretty max-w-2xl mx-auto">
            Stop threats in milliseconds, not minutes. Fast, accurate, no-code automation that closes security gaps and scales your SOC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 group">
              Get BitLyft AIR <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 bg-white/5 backdrop-blur-sm text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Try Interactive Demo
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            We built BitLyft AIR to be the first truly autonomous SOC layer, eliminating alert noise and delivering security automation, not complexity.
          </p>
        </div>
      </div>
    </section>
  )
}

function PreviewStats() {
  const stats = [
    { value: "99.9%", label: "Threat Detection Rate" },
    { value: "<1ms", label: "Response Time" },
    { value: "10x", label: "SOC Efficiency Gain" },
    { value: "500+", label: "Integrations" },
  ]
  return (
    <section className="py-16 px-6 bg-[#000a0e] border-y border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function SitePreview() {
  return (
    <div className="min-h-screen bg-[#000a0e] font-sans">
      <PreviewHeader />
      <PreviewHero />
      <PreviewStats />
      <div className="py-12 text-center text-xs text-gray-600 border-t border-white/5">
        Temporary preview page — safe to delete
      </div>
    </div>
  )
}
