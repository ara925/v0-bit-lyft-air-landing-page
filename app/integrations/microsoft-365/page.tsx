import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Shield, Zap, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Microsoft 365 Integration | BitLyft AIR®",
  description:
    "BitLyft AIR® natively integrates with Microsoft 365 and Entra ID to deliver automated incident response across identity, email, SharePoint, Teams, and OneDrive.",
}

const ACTIONS = [
  { name: "Revoke User Sign-In Sessions", detail: "Immediately terminate all active sessions for a compromised user account." },
  { name: "Disable User Account", detail: "Set accountEnabled to false in Entra ID to prevent further access." },
  { name: "Reset User Password", detail: "Force a password reset, prompting the user on next login." },
  { name: "Enable MFA for User", detail: "Apply a Conditional Access MFA policy to a targeted user." },
  { name: "Assign User to Conditional Access Policy", detail: "Add a user to an existing policy scope automatically." },
  { name: "Remove Mailbox Forwarding Rule", detail: "Delete attacker-planted forwarding configurations that exfiltrate email." },
  { name: "List Entra ID Risky Users", detail: "Retrieve users flagged as risky by Microsoft Identity Protection." },
  { name: "Get User Sign-In Activity", detail: "Pull recent sign-in logs for a specific user for investigation." },
]

const POLICIES = [
  { name: "Impossible Travel", desc: "Sign-ins from geographically impossible locations within a short timeframe." },
  { name: "MFA Fatigue Attack", desc: "Repeated MFA push requests targeting a user to approve fraudulent access." },
  { name: "Credential Stuffing", desc: "High-volume failed login attempts across multiple accounts." },
  { name: "Admin Role Change", desc: "Unexpected modifications to privileged roles or permissions." },
  { name: "Mailbox Forwarding Rule Created", desc: "Forwarding rules added to a mailbox — a common BEC indicator." },
  { name: "Suspicious OAuth App Consent", desc: "OAuth application granted excessive permissions by a user." },
  { name: "SharePoint Data Exfiltration", desc: "Abnormal volume of SharePoint or OneDrive file downloads." },
  { name: "Service Account Anomaly", desc: "Service account exhibiting unusual access patterns." },
]

export default function Microsoft365IntegrationPage() {
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
              <img src="/microsoft365.png" alt="Microsoft 365" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cfff] text-xs font-semibold uppercase tracking-wide">Active Integration</span>
                <span className="text-gray-500 text-sm">Identity & Productivity</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">Microsoft 365</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                BitLyft AIR® connects directly to Microsoft 365 and Entra ID via the Microsoft Graph API, enabling automated detection and response across identity, email, SharePoint, Teams, and OneDrive — your entire Microsoft environment in a single automated loop.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "15+", label: "Detection Policies" },
              { value: "8", label: "Response Actions" },
              { value: "< 1s", label: "Avg. Response Time" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#00cfff] mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* What AIR Does */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">What BitLyft AIR® Does with Microsoft 365</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Microsoft 365 integration is the core of the AIR® platform. Using the Microsoft Graph API, AIR® ingests audit logs from Entra ID, Exchange Online, SharePoint, OneDrive, and Teams — correlating events across all workloads to detect identity compromise, data loss, and administrative abuse in real time.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              When a threat is detected, AIR® executes response actions directly against Microsoft 365 — revoking sessions, disabling accounts, removing forwarding rules, and enforcing MFA — without requiring analyst intervention. Detection triggers response. Response executes. Analysts are notified of the outcome.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Identity Protection", desc: "Entra ID sign-in risk, MFA fatigue, credential stuffing, impossible travel, admin role abuse." },
                { icon: Zap, title: "Email Security", desc: "Phishing containment, forwarding rule removal, mailbox audit log monitoring." },
                { icon: CheckCircle2, title: "Data Loss Prevention", desc: "SharePoint and OneDrive exfiltration detection, file sharing anomalies, Teams data leakage." },
                { icon: Shield, title: "Conditional Access", desc: "Automated policy assignment and enforcement as part of containment workflows." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2261db]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#2261db]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">{title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
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

          {/* Detection Policies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Out-of-the-Box Detection Policies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {POLICIES.map(({ name, desc }) => (
                <div key={name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-[#2261db]/40 transition-colors">
                  <p className="text-[#00cfff] text-xs font-semibold uppercase tracking-wide mb-1">{name}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Release Notes callout */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-12 flex items-start gap-4">
            <ExternalLink className="w-5 h-5 text-[#2261db] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">See the release notes</p>
              <p className="text-gray-400 text-sm mb-3">Microsoft 365 coverage was significantly expanded in v1.15 with 15 new detection policies, faster Graph API execution, and improved identity protection.</p>
              <Link href="/blog/bitlyft-air-v1-15" className="text-[#00cfff] text-sm hover:underline">Read the v1.15 release post</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cfff]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to automate your Microsoft 365 security?</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">See how AIR® detects and responds to threats across your entire Microsoft environment — automatically.</p>
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
