import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, AlertTriangle, Activity, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SentinelOne Integration | BitLyft AIR®",
  description:
    "BitLyft AIR® v1.23 introduces native SentinelOne integration with automated endpoint isolation, malware containment, and new detection policies for ransomware and malware persistence.",
}

const ACTIONS = [
  { name: "Endpoint Isolation", detail: "Immediately disconnect a compromised host from the network while preserving agent communication for continued investigation." },
  { name: "Malware Containment", detail: "Quarantine malicious files and terminate active threat processes directly through the SentinelOne agent." },
  { name: "Threat Mitigation", detail: "Apply SentinelOne threat mitigation actions — remediate, rollback — as part of an automated AIR® playbook step." },
  { name: "System Recovery", detail: "Trigger agent-assisted recovery workflows to restore endpoint state following confirmed remediation." },
  { name: "Agent Status Monitoring", detail: "Continuously monitor SentinelOne agent health and flag disconnected or unhealthy agents as part of environment hygiene detection." },
]

const POLICIES = [
  {
    name: "SentinelOne Malware Persistence on Host",
    icon: AlertTriangle,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    desc: "Detects repeated observations of malicious files or processes on a single host, indicating malware persistence or incomplete remediation.",
    impacts: [
      "Advanced threats maintaining long-term access to the environment",
      "Credential abuse tied to the compromised endpoint",
      "Lateral movement originating from a host believed to be clean",
    ],
  },
  {
    name: "SentinelOne Malware Spread",
    icon: Activity,
    color: "text-red-400",
    bg: "bg-red-500/10",
    desc: "Detects malicious files or processes observed across multiple hosts within a short timeframe, indicating active lateral movement or malware propagation.",
    impacts: [
      "Active outbreak events reaching critical mass before detection",
      "Ransomware or worm-style propagation across the environment",
      "High-severity mass isolation scenarios requiring immediate action",
    ],
  },
]

export default function SentinelOneIntegrationPage() {
  return (
    <div className="min-h-screen bg-[#000a0e] text-white">
      <Header />

      <main className="pt-24">
        <article className="container mx-auto px-6 py-12 max-w-4xl">

          <Link href="/#integrations" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Integrations
          </Link>

          {/* Hero */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12 pb-12 border-b border-zinc-800">
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-zinc-900 rounded-2xl border border-zinc-800 p-4">
              <img src="/sentinelone-logo.png" alt="SentinelOne" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cfff] text-xs font-semibold uppercase tracking-wide">Active Integration</span>
                <span className="text-gray-500 text-sm">Endpoint Detection &amp; Response</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">SentinelOne</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Introduced in BitLyft AIR® v1.23, the SentinelOne integration closes the gap between detection and containment — enabling fully automated endpoint response without analyst intervention.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "5", label: "Response Actions" },
              { value: "2", label: "Detection Policies" },
              { value: "v1.23", label: "Available Since" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#00cfff] mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Native Endpoint Response — Fully Automated</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The v1.23 integration connects BitLyft AIR® directly to SentinelOne&apos;s agent management layer, giving the platform real-time visibility into endpoint telemetry, threat detections, and agent health across your entire environment — not just individual machines.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Response actions are executed natively through the SentinelOne API, meaning AIR® can act on endpoints as part of a fully automated workflow. Teams move from detection to containment in seconds rather than minutes or hours. Where previously teams had to pivot between platforms, that gap is now closed.
            </p>
          </section>

          {/* Response Actions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Automated Response Actions</h2>
            <div className="space-y-3">
              {ACTIONS.map(({ name, detail }) => (
                <div key={name} className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-[#2261db]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#00cfff] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{name}</p>
                    <p className="text-gray-400 text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detection Policies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Out-of-the-Box Detection Policies</h2>
            <div className="space-y-6">
              {POLICIES.map(({ name, icon: Icon, color, bg, desc, impacts }) => (
                <div key={name} className="border border-zinc-800 rounded-2xl overflow-hidden">
                  <div className="bg-zinc-900/50 px-6 py-4 flex items-center gap-3 border-b border-zinc-800">
                    <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${color}`} />
                    </div>
                    <h3 className="text-white font-semibold">{name}</h3>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-gray-300 leading-relaxed mb-4">{desc}</p>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-3">Security Impact</p>
                    <ul className="space-y-2">
                      {impacts.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-[#00cfff] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Release Notes */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-12 flex items-start gap-4">
            <ExternalLink className="w-5 h-5 text-[#2261db] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">See the full release notes</p>
              <p className="text-gray-400 text-sm mb-3">SentinelOne integration was shipped in BitLyft AIR® v1.23 with five response actions and two out-of-the-box detection policies.</p>
              <Link href="/blog/bitlyft-air-v1-23-sentinelone-integration" className="text-[#00cfff] text-sm hover:underline">Read the v1.23 release post</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cfff]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Running SentinelOne? Let&apos;s close the loop.</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">See how AIR® automates endpoint isolation and malware containment alongside your SentinelOne deployment.</p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cfff] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:scale-105 transition-all">
              Request a Demo
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}
