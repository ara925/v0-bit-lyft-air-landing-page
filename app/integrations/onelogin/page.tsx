import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "OneLogin Integration | BitLyft AIR®",
  description:
    "BitLyft AIR® v1.21 expands identity threat detection for OneLogin with new security policies, a Compromised User Account playbook, and out-of-the-box automation mappings.",
}

const POLICIES = [
  { name: "Impossible Travel Login", desc: "Login events from geographically impossible locations within a short timeframe." },
  { name: "Brute Force Authentication", desc: "Repeated failed login attempts targeting a OneLogin user account." },
  { name: "Admin Role Modification", desc: "Unexpected changes to administrative roles or permissions within OneLogin." },
  { name: "New MFA Device Enrolled", desc: "A new device is added to MFA enrollment — a common post-compromise action." },
  { name: "Suspicious IP Access", desc: "Authentication from IP addresses flagged as high-risk or anonymized." },
  { name: "Application Access Anomaly", desc: "Unusual patterns of application access inconsistent with user history." },
]

const PLAYBOOK_STEPS = [
  { action: "Detect Threat", desc: "A OneLogin detection policy triggers on a high-risk identity event." },
  { action: "Suspend User", desc: "The account is immediately suspended in OneLogin to prevent further access." },
  { action: "Revoke Sessions", desc: "All active user sessions are terminated across OneLogin-protected applications." },
  { action: "Clear MFA Factors", desc: "Enrolled MFA devices are removed to prevent attacker persistence via registered factors." },
  { action: "Create & Escalate Case", desc: "A case is created in AIR® with full context, actions taken, and recommended follow-up." },
]

export default function OneLoginIntegrationPage() {
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
              <img src="/onelogin-logo.webp" alt="OneLogin" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cfff] text-xs font-semibold uppercase tracking-wide">Active Integration</span>
                <span className="text-gray-500 text-sm">Identity & Access Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">OneLogin</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                BitLyft AIR® v1.21 expanded identity threat detection for OneLogin with new security policies, a Compromised User Account playbook, and out-of-the-box automation mappings for immediate time-to-value.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "6+", label: "Detection Policies" },
              { value: "1", label: "Prebuilt Playbook" },
              { value: "v1.21", label: "Available Since" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#00cfff] mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Automated Identity Response for OneLogin</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              OneLogin manages access to your critical business applications. When an account is compromised, every downstream application is at risk. BitLyft AIR® v1.21 expanded OneLogin detection coverage with policies that surface the most impactful identity attack patterns — and pairs them with a full Compromised User Account playbook.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From detection to account suspension to session revocation and MFA removal, the entire response workflow executes automatically — giving analysts a complete picture with no manual steps required.
            </p>
          </section>

          {/* Detection Policies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Detection Policies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {POLICIES.map(({ name, desc }) => (
                <div key={name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-[#2261db]/40 transition-colors">
                  <p className="text-[#00cfff] text-xs font-semibold uppercase tracking-wide mb-1">{name}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Compromised User Playbook */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Compromised User Account Playbook</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              A pre-built SOC playbook that orchestrates the full account compromise response from detection through containment — automatically.
            </p>
            <div className="space-y-3">
              {PLAYBOOK_STEPS.map(({ action, desc }, i) => (
                <div key={action} className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2261db]/20 border border-[#2261db]/40 flex items-center justify-center text-[#00cfff] text-sm font-bold">{i + 1}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{action}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Automation Mappings callout */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-12">
            <p className="text-white font-semibold mb-2">Out-of-the-Box Automation Mappings</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              v1.21 ships with pre-configured automation mappings that connect OneLogin detection policies directly to response actions — ready to activate on day one with no custom configuration required.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00cfff]" />
              <span className="text-gray-300 text-sm">Compromised Account Automation</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00cfff]" />
              <span className="text-gray-300 text-sm">Suspicious Access Escalation Mapping</span>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cfff]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Close the gap in your OneLogin security.</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">See how AIR® detects and responds to OneLogin identity threats automatically — from detection to containment.</p>
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
