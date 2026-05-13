import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Aurora Integration | BitLyft AIR®",
  description:
    "BitLyft AIR® v1.25 introduces native Aurora integration with automated endpoint response, global quarantine and allowlisting, and new malware persistence and lateral movement detection policies.",
}

const CAPABILITIES = [
  { name: "Automated Malware Containment", desc: "Endpoint response actions triggered automatically on detection — no analyst intervention required to contain active threats." },
  { name: "Global Quarantine & Allowlisting", desc: "Manage endpoint trust across the entire environment from within AIR®, applying quarantine or allowlist decisions globally." },
  { name: "Endpoint Investigation", desc: "Investigate and manage endpoint policy from within the AIR® interface during active incident response." },
  { name: "Policy Management", desc: "Configure and enforce Aurora endpoint policies centrally from within the AIR® platform." },
]

const POLICIES = [
  {
    name: "Malware Persistence on Host",
    risk: "High",
    desc: "Detects malware maintaining a foothold on a host — a strong indicator that initial remediation was incomplete or that an advanced threat is actively persisting in the environment.",
    impacts: [
      "Advanced threats maintaining long-term access",
      "Credential abuse tied to the compromised endpoint",
      "Lateral movement from a host believed to be clean",
    ],
  },
  {
    name: "Malware Spread",
    risk: "Critical",
    desc: "Identifies lateral movement across multiple systems, indicating active malware propagation. Each minute of delay increases the blast radius significantly.",
    impacts: [
      "Ransomware or worm-style propagation events",
      "Mass isolation scenarios across multiple hosts",
      "Threat reaching domain controllers or critical systems",
    ],
  },
]

const INTEGRATION_STEPS = [
  { step: "Connect Aurora", desc: "Link Aurora to AIR® using the BitLyft AIR® Integration Keys system introduced in v1.25." },
  { step: "Activate Detection Policies", desc: "Enable out-of-the-box malware persistence and spread detection policies for your Aurora-protected environment." },
  { step: "Configure Response Actions", desc: "Map detection policies to automated containment, quarantine, or investigation actions." },
  { step: "Monitor & Respond", desc: "AIR® handles the response. Analysts receive case notifications with full context and actions taken." },
]

export default function AuroraIntegrationPage() {
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
            <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center bg-zinc-900 rounded-2xl border border-zinc-800 p-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aurora%20Logo-u55GR9vQCotz3mYGVAb9wuXPn1DQjE.png"
                alt="Aurora"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cfff] text-xs font-semibold uppercase tracking-wide">Active Integration</span>
                <span className="text-gray-500 text-sm">Endpoint Detection &amp; Response</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">Aurora</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Introduced in BitLyft AIR® v1.25, the native Aurora integration expands endpoint detection and response capabilities with automated malware containment, global quarantine management, and new persistence and lateral movement detection policies.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "4", label: "Response Capabilities" },
              { value: "2", label: "Detection Policies" },
              { value: "v1.25", label: "Available Since" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#00cfff] mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Native Endpoint Response via Aurora</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Aurora integration in AIR® v1.25 brings Aurora-protected endpoints into the full automated response loop. Endpoint visibility, policy management, quarantine decisions, and malware containment are all handled directly from within the AIR® platform — no platform switching required.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Two out-of-the-box detection policies — malware persistence and malware spread — provide immediate coverage for the highest-impact endpoint threat scenarios from day one.
            </p>
          </section>

          {/* Capabilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Integration Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {CAPABILITIES.map(({ name, desc }) => (
                <div key={name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-[#2261db]/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00cfff] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{name}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detection Policies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Out-of-the-Box Detection Policies</h2>
            <div className="space-y-6">
              {POLICIES.map(({ name, risk, desc, impacts }) => (
                <div key={name} className="border border-zinc-800 rounded-2xl overflow-hidden">
                  <div className="bg-zinc-900/50 px-6 py-4 flex items-center justify-between border-b border-zinc-800">
                    <h3 className="text-white font-semibold">{name}</h3>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${risk === "Critical" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-orange-500/20 text-orange-400 border border-orange-500/30"}`}>
                      {risk}
                    </span>
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

          {/* Getting Started */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
            <div className="space-y-3">
              {INTEGRATION_STEPS.map(({ step, desc }, i) => (
                <div key={step} className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2261db]/20 border border-[#2261db]/40 flex items-center justify-center text-[#00cfff] text-sm font-bold">{i + 1}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{step}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
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
              <p className="text-gray-400 text-sm mb-3">Aurora integration shipped in BitLyft AIR® v1.25 alongside expanded multitenancy and the AIR® Integration Keys system.</p>
              <Link href="/releases" className="text-[#00cfff] text-sm hover:underline">View v1.25 on the releases page</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cfff]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Extend automated response to your Aurora endpoints.</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">See how AIR® and Aurora work together to detect, contain, and respond to endpoint threats automatically.</p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cfff] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:scale-105 transition-all">
              Schedule a Demo
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}
