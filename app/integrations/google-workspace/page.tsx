import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google Workspace Integration | BitLyft AIR®",
  description:
    "BitLyft AIR® v1.24 adds Google Workspace detection policies across admin activity, application access, drive behavior, and authentication — plus a phishing containment playbook.",
}

const CATEGORIES = [
  {
    name: "Administrative Activity",
    items: ["Privilege escalation and admin role changes", "Security policy modifications", "Abnormal admin actions and potential impersonation"],
  },
  {
    name: "Application Access",
    items: ["OAuth application grants and API access", "Third-party app connections to Workspace data", "Suspicious application permission changes"],
  },
  {
    name: "Drive Behavior",
    items: ["Abnormal file sharing and external access grants", "Large-scale downloads and data exfiltration patterns", "Sensitive file exposure events"],
  },
  {
    name: "Authentication Events",
    items: ["Suspicious login activity and impossible travel", "Failed authentication spikes", "Account compromise indicators"],
  },
]

const PLAYBOOK_STEPS = [
  { action: "Quarantine Emails", desc: "Remove malicious messages from all affected inboxes org-wide." },
  { action: "Remove Forwarding Rules", desc: "Detect and delete attacker-planted forwarding configurations that exfiltrate email." },
  { action: "Reset Credentials", desc: "Force password reset and session revocation for compromised accounts." },
]

export default function GoogleWorkspaceIntegrationPage() {
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
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg"
                alt="Google Workspace"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cfff] text-xs font-semibold uppercase tracking-wide">Active Integration</span>
                <span className="text-gray-500 text-sm">Cloud Productivity</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">Google Workspace</h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Introduced in BitLyft AIR® v1.24, the Google Workspace integration brings comprehensive detection coverage and automated phishing response to Google-native environments.
              </p>
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "12+", label: "Detection Policies" },
              { value: "1", label: "Prebuilt Playbook" },
              { value: "v1.24", label: "Available Since" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#00cfff] mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Comprehensive Coverage Across Google Workspace</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The v1.24 Google Workspace integration adds out-of-the-box detection coverage across administrative activity, application access, Drive behavior, and authentication events — surfacing high-risk activity such as privilege changes, OAuth grants, data exfiltration patterns, and suspicious login behavior.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Combined with an automated phishing containment playbook, AIR® can now respond to threats in Google environments with the same speed and consistency as Microsoft 365 environments.
            </p>
          </section>

          {/* Detection Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Detection Policy Categories</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {CATEGORIES.map(({ name, items }) => (
                <div key={name} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-[#2261db]/40 transition-colors">
                  <h3 className="text-[#00cfff] text-xs font-semibold uppercase tracking-wide mb-3">{name}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#00cfff] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Phishing Playbook */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Google Workspace Phishing Containment Playbook</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              This SOC-ready automation playbook orchestrates a complete phishing response workflow in Google Workspace, reducing dwell time and standardizing response across affected accounts — activated automatically when a phishing indicator is detected.
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

          {/* SSO callout */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-12">
            <p className="text-white font-semibold mb-2">Enterprise SSO with Google</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              v1.24 also introduced SSO connection management supporting Google as an identity provider. Users authenticating via Google SSO are automatically provisioned in AIR® with the configured role — no manual setup required.
            </p>
          </div>

          {/* Release notes */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-12 flex items-start gap-4">
            <ExternalLink className="w-5 h-5 text-[#2261db] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">See the full release notes</p>
              <p className="text-gray-400 text-sm mb-3">Google Workspace detection and the phishing containment playbook shipped in BitLyft AIR® v1.24.</p>
              <Link href="/blog/bitlyft-air-v1-24-sso-google-workspace" className="text-[#00cfff] text-sm hover:underline">Read the v1.24 release post</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cfff]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Protect your Google Workspace environment automatically.</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">See how AIR® detects threats and triggers automated phishing response across Google Workspace in real time.</p>
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
