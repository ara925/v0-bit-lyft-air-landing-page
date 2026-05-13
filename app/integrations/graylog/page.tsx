import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Graylog Integration | BitLyft AIR®",
  description:
    "BitLyft AIR® integrates with Graylog to ingest, correlate, and act on security log data — turning raw log streams into automated incident response.",
}

const CAPABILITIES = [
  { name: "Log Ingestion & Correlation", desc: "AIR® ingests Graylog streams and correlates events across data sources to surface threats that individual log entries miss." },
  { name: "Alert-Driven Automation", desc: "Graylog alerts trigger AIR® playbooks directly, enabling automated response the moment a detection threshold is crossed." },
  { name: "Cross-Source Investigation", desc: "Combine Graylog log data with identity, endpoint, and email context inside a single AIR® case for comprehensive investigation." },
  { name: "Log Search Integration", desc: "AIR® investigators can run targeted log searches against Graylog from within the platform during active incident response." },
]

const USE_CASES = [
  { scenario: "Network Anomaly Detection", desc: "Correlate network traffic logs from Graylog with identity events to detect lateral movement or data exfiltration." },
  { scenario: "Authentication Log Monitoring", desc: "Ingest authentication logs from Graylog to power impossible travel, brute force, and credential abuse detections." },
  { scenario: "Application Error Correlation", desc: "Surface application-layer errors and anomalies from Graylog logs as part of a broader incident investigation." },
  { scenario: "Alert Triage Automation", desc: "Route Graylog alerts directly into AIR® cases for automated enrichment, prioritization, and response." },
]

export default function GraylogIntegrationPage() {
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
              <img
                src="https://logo.svgcdn.com/l/graylog.png"
                alt="Graylog"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cfff] text-xs font-semibold uppercase tracking-wide">Active Integration</span>
                <span className="text-gray-500 text-sm">Log Management & SIEM</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">Graylog</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                BitLyft AIR® integrates with Graylog to ingest, correlate, and act on security log data — turning raw log streams into automated incident response workflows with no manual handoff.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "Real-time", label: "Log Ingestion" },
              { value: "Full", label: "Alert Integration" },
              { value: "Native", label: "Log Search" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-[#00cfff] mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">From Log Data to Automated Response</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Graylog is a powerful log management and SIEM platform. BitLyft AIR® extends Graylog&apos;s capabilities by connecting its alert and log stream outputs to the AIR® automation engine — enabling automated response without requiring manual analyst triage.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When Graylog surfaces an alert, AIR® picks it up, enriches it with context from connected integrations, and executes the appropriate response playbook. Log data that would normally require hours of analyst time becomes an automated action in seconds.
            </p>
          </section>

          {/* Capabilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Integration Capabilities</h2>
            <div className="space-y-3">
              {CAPABILITIES.map(({ name, desc }) => (
                <div key={name} className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-[#2261db]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#00cfff] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{name}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Common Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {USE_CASES.map(({ scenario, desc }) => (
                <div key={scenario} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-[#2261db]/40 transition-colors">
                  <p className="text-[#00cfff] text-xs font-semibold uppercase tracking-wide mb-2">{scenario}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How it fits */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-12">
            <p className="text-white font-semibold mb-2">Where Graylog Fits in the AIR® Stack</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Graylog serves as a centralized log aggregation and alerting layer. AIR® sits on top, consuming Graylog alerts and log data alongside signals from identity providers, endpoints, and email — providing a unified automated response layer across your entire security stack.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cfff]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Turn your Graylog alerts into automated response.</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">See how AIR® connects to Graylog to deliver automated incident response on top of your existing log infrastructure.</p>
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
