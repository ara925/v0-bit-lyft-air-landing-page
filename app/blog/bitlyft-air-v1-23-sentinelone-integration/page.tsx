import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag, Shield, Zap, Activity, CheckCircle2, Layers, AlertTriangle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "BitLyft AIR® v1.23: SentinelOne Integration | BitLyft",
  description:
    "BitLyft AIR® v1.23 introduces native SentinelOne integration with automated endpoint detection and response, new malware persistence and spread detection policies, and expanded platform capabilities.",
  openGraph: {
    title: "BitLyft AIR® v1.23: SentinelOne Integration",
    description:
      "Native SentinelOne integration brings automated endpoint isolation, malware containment, and expanded detection policies to the AIR® platform.",
    type: "article",
    publishedTime: "2026-03-20",
  },
}

export default function V123BlogPost() {
  return (
    <div className="min-h-screen bg-[#000a0e]">
      <Header />

      <main className="pt-24">
        <article className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">

            {/* Back Link */}
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                20th March, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                4 min read
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <Tag className="w-4 h-4" />
                Product Update
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              BitLyft AIR® v1.23: SentinelOne Integration
            </h1>

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              BitLyft AIR® v1.23 introduces native integration with SentinelOne, expanding automated endpoint
              detection and response capabilities within the AIR® platform. This integration enhances endpoint
              visibility, strengthens malware detection, and enables automated remediation actions directly
              against protected SentinelOne agents.
            </p>

            {/* Hero banner */}
            <div className="bg-gradient-to-br from-primary/20 to-cyan-600/20 rounded-2xl p-10 mb-12 border border-primary/30 flex flex-col items-center justify-center text-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary/40">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-1">Release v1.23</p>
                <p className="text-2xl font-bold text-white">SentinelOne Integration Now Live</p>
                <p className="text-gray-400 mt-2">Native EDR automation — detect, contain, and recover faster than ever</p>
              </div>
            </div>

            {/* What's New */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">What's New in v1.23</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Layers, label: "Native SentinelOne Integration", desc: "Direct API connection to SentinelOne agents" },
                  { icon: AlertTriangle, label: "2 New Detection Policies", desc: "Malware persistence and spread detection" },
                  { icon: Zap, label: "Automated Response Actions", desc: "Isolate, contain, and recover endpoints automatically" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SentinelOne Integration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Native SentinelOne Integration</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The v1.23 integration connects BitLyft AIR® directly to SentinelOne's agent management layer,
                giving the platform real-time visibility into endpoint telemetry, threat detections, and agent
                health — across your entire environment, not just individual machines.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Response actions are executed natively through the SentinelOne API, meaning AIR® can now
                act on endpoints as part of a fully automated workflow without analyst intervention. Teams move
                from detection to containment in seconds rather than minutes or hours.
              </p>

              <h3 className="text-lg font-semibold text-white mb-4">Automated Response Actions</h3>
              <div className="space-y-3 mb-8">
                {[
                  { action: "Endpoint Isolation", detail: "Immediately disconnect a compromised host from the network while preserving agent communication for continued investigation." },
                  { action: "Malware Containment", detail: "Quarantine malicious files and terminate active threat processes directly through the SentinelOne agent." },
                  { action: "Threat Mitigation", detail: "Apply SentinelOne's threat mitigation actions (remediate, rollback) as part of an automated AIR® playbook step." },
                  { action: "System Recovery", detail: "Trigger agent-assisted recovery workflows to restore endpoint state following confirmed remediation." },
                  { action: "Agent Status Monitoring", detail: "Continuously monitor SentinelOne agent health and flag disconnected or unhealthy agents as part of environment hygiene detection." },
                ].map(({ action, detail }) => (
                  <div key={action} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{action}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* New Detection Policies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">New SentinelOne Detection Policies</h2>

              {/* Policy 1 */}
              <div className="border border-white/10 rounded-2xl overflow-hidden mb-6">
                <div className="bg-white/5 px-6 py-4 flex items-center gap-3 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold">SentinelOne Malware Persistence on Host</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Detects repeated observations of malicious files or processes on a single host, which may
                    indicate malware persistence or incomplete remediation.
                  </p>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-3">Security Impact</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Persistent malware activity is a strong indicator that initial remediation was incomplete or
                    that an advanced threat is actively maintaining a foothold. Left undetected, this can lead to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Advanced threats maintaining long-term access to the environment",
                      "Credential abuse tied to the compromised endpoint",
                      "Lateral movement originating from a host believed to be clean",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-400 text-sm leading-relaxed mt-4">
                    This detection helps identify compromised systems before attackers escalate activity, and
                    triggers automated re-remediation workflows within AIR®.
                  </p>
                </div>
              </div>

              {/* Policy 2 */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="bg-white/5 px-6 py-4 flex items-center gap-3 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold">SentinelOne Malware Spread</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Detects malicious files or processes observed across multiple hosts within a short timeframe,
                    indicating active lateral movement or malware propagation across the environment.
                  </p>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-3">Security Impact</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Malware spread across multiple hosts is one of the highest-severity events a SOC team can
                    face. Every minute of delay increases the blast radius. This policy is designed to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Surface active outbreak events before they reach critical mass",
                      "Trigger automated mass isolation workflows across affected hosts",
                      "Reduce dwell time during ransomware or worm-style propagation events",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-400 text-sm leading-relaxed mt-4">
                    Early detection through this policy gives teams the window needed to contain an outbreak
                    before it spreads to critical systems or reaches domain controllers.
                  </p>
                </div>
              </div>
            </section>

            {/* What it means for customers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">What This Means for AIR® Customers</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Version 1.23 brings SentinelOne-protected environments into the full AIR® automated response
                loop. Where previously teams had to pivot between platforms — detecting in AIR®, then manually
                executing containment in SentinelOne — that gap is now closed.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Workflows like endpoint isolation, malware containment, threat mitigation, and system recovery
                can now be fully automated as steps within AIR® playbooks. Detection triggers the response.
                The response executes. Analysts are notified of the outcome — not paged to perform the action.
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6">
                <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">For teams running SentinelOne</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  If your environment is protected by SentinelOne and you are an existing AIR® customer, contact
                  your BitLyft representative to enable the integration and configure your tenant policies for
                  the two new detections. New customers can request a demo to see the full SentinelOne + AIR®
                  workflow in action.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="border border-white/10 rounded-2xl p-8 text-center bg-white/5">
              <h2 className="text-2xl font-bold text-white mb-3">Ready to See It in Action?</h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                See how BitLyft AIR® v1.23 automates endpoint detection and response with SentinelOne in your environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-primary text-black font-semibold hover:bg-primary/90">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link href="/resources">Back to Resources</Link>
                </Button>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
