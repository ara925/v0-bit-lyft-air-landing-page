import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Okta Integration | BitLyft AIR®",
  description:
    "BitLyft AIR® v1.20 expanded Okta detections with 13 new security policies and Compromised Okta Account Automations for automated identity threat response.",
}

const POLICIES = [
  "Impossible Travel Login",
  "High-Risk IP Sign-In",
  "Brute Force Attack",
  "Credential Stuffing",
  "Account Lockout Spike",
  "New Device or Location Login",
  "Admin Role Assigned",
  "MFA Disabled for User",
  "Suspicious API Token Activity",
  "Policy Modification by Admin",
  "Application Access Anomaly",
  "Phishing-Resistant MFA Bypass Attempt",
  "Privileged Account Sign-In Anomaly",
]

const AUTOMATION_STEPS = [
  { action: "Detect Threat", desc: "A detection policy identifies a high-risk Okta event such as impossible travel or credential stuffing." },
  { action: "Enrich Context", desc: "AIR® pulls user details, device, and IP reputation data to assess the severity." },
  { action: "Contain Account", desc: "The user is suspended in Okta, active sessions are revoked, and MFA factors are cleared if compromised." },
  { action: "Notify & Document", desc: "The analyst receives a case with full context, actions taken, and recommended next steps." },
]

export default function OktaIntegrationPage() {
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
              <img src="/okta-logo-white.png" alt="Okta" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cfff] text-xs font-semibold uppercase tracking-wide">Active Integration</span>
                <span className="text-gray-500 text-sm">Identity & Access Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">Okta</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                BitLyft AIR® v1.20 expanded Okta identity protection with 13 new detection policies and Compromised Okta Account Automations — enabling automated containment the moment identity threats are detected.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "13", label: "Detection Policies" },
              { value: "1", label: "Automated Playbook" },
              { value: "v1.20", label: "Available Since" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#00cfff] mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Automated Identity Threat Response for Okta</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Okta is the front door to your applications. When an Okta identity is compromised, attackers gain access to every application protected by it. BitLyft AIR® v1.20 introduced 13 new Okta detection policies targeting the most common attack patterns — impossible travel, credential stuffing, MFA bypass, privilege abuse, and more.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Combined with the Compromised Okta Account Automation, AIR® can detect a threat, suspend the account, revoke sessions, clear MFA factors, and notify the analyst — all without manual steps.
            </p>
          </section>

          {/* Detection Policies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">13 Out-of-the-Box Detection Policies</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {POLICIES.map((policy) => (
                <div key={policy} className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 hover:border-[#2261db]/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#00cfff] flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{policy}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Automation Workflow */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Compromised Okta Account Automation</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              When a detection policy triggers on an Okta identity event, the Compromised Account Automation executes a full response workflow — from enrichment to containment to analyst notification.
            </p>
            <div className="space-y-3">
              {AUTOMATION_STEPS.map(({ action, desc }, i) => (
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

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cfff]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Protect your Okta identities automatically.</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">See how AIR® detects and responds to Okta identity threats in real time — without analyst intervention.</p>
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
