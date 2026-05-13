import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Duo Security Integration | BitLyft AIR®",
  description:
    "BitLyft AIR® v1.22 introduces native Duo Security integration with detection policies for MFA abuse, identity compromise, and administrative risk — plus automated remediation actions.",
}

const POLICIES = [
  { name: "MFA Fatigue Attack", desc: "Detects repeated Duo push requests targeting a user to approve fraudulent access — a common social engineering vector." },
  { name: "Suspicious Authentication Location", desc: "Flags authentication attempts from unexpected or high-risk geographies not consistent with normal user behavior." },
  { name: "Admin Account Abuse", desc: "Identifies unusual administrative activity within the Duo administrative console." },
  { name: "Bypass Code Usage", desc: "Detects use of Duo bypass codes, which may indicate account compromise or policy circumvention." },
  { name: "Failed Authentication Spike", desc: "Surfaces high volumes of failed Duo authentication attempts targeting specific users or the environment broadly." },
]

const ACTIONS = [
  { name: "Suspend Duo User", detail: "Immediately suspend a Duo user to prevent further authentication." },
  { name: "Send Push Notification", detail: "Trigger a contextual security alert push to the user as part of a response workflow." },
  { name: "Enroll User in MFA", detail: "Initiate the Duo enrollment process for accounts that are not yet MFA-protected." },
  { name: "Retrieve Authentication Logs", detail: "Pull recent Duo authentication logs for a user to support case investigation." },
]

const AUTOMATIONS = [
  { name: "MFA Fatigue Response", desc: "Detects repeated push notifications, suspends the user in Duo, and escalates a case with full authentication context." },
  { name: "Compromised Identity Containment", desc: "On identity compromise indicators, suspends Duo access and coordinates downstream action in connected identity providers." },
]

export default function DuoSecurityIntegrationPage() {
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
              <img src="/duo-logo-green.png" alt="Duo Security" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cfff] text-xs font-semibold uppercase tracking-wide">Active Integration</span>
                <span className="text-gray-500 text-sm">Multi-Factor Authentication</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">Duo Security</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                BitLyft AIR® v1.22 introduces native Duo Security integration with new detection policies for MFA abuse, identity compromise, and administrative risk — plus automated Duo remediation actions and two out-of-the-box automation mappings.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "5", label: "Detection Policies" },
              { value: "4", label: "Response Actions" },
              { value: "v1.22", label: "Available Since" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#00cfff] mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">MFA Threat Detection — Automated</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              MFA is a critical security control, but it&apos;s also a target. Attackers use MFA fatigue, bypass codes, and social engineering to circumvent Duo protection. BitLyft AIR® v1.22 connects directly to Duo to monitor authentication events and act automatically when abuse is detected.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Response actions execute natively through the Duo API — suspending users, pulling authentication logs, and coordinating response across connected identity providers — all as part of a fully automated AIR® playbook.
            </p>
          </section>

          {/* Detection Policies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Detection Policies</h2>
            <div className="space-y-3">
              {POLICIES.map(({ name, desc }) => (
                <div key={name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-[#2261db]/40 transition-colors">
                  <p className="text-[#00cfff] text-xs font-semibold uppercase tracking-wide mb-1">{name}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
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

          {/* Automation Mappings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Out-of-the-Box Automation Mappings</h2>
            <p className="text-gray-300 text-sm mb-4">Pre-configured workflows ready to activate on day one:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {AUTOMATIONS.map(({ name, desc }) => (
                <div key={name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                  <p className="text-white font-semibold text-sm mb-2">{name}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cfff]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Stop MFA abuse before it becomes a breach.</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">See how AIR® detects Duo-based identity threats and responds automatically — no analyst required.</p>
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
