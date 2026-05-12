import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BitLyft AIR® v1.24: Enterprise SSO and Google Workspace Enhancements",
  description:
    "BitLyft AIR® v1.24 introduces enterprise SSO connection management, automatic user provisioning, and expanded Google Workspace detection and automated phishing response.",
  openGraph: {
    title: "BitLyft AIR® v1.24: Enterprise SSO and Google Workspace Enhancements",
    description:
      "BitLyft AIR® v1.24 introduces enterprise SSO connection management, automatic user provisioning, and expanded Google Workspace detection and automated phishing response.",
    type: "article",
    publishedTime: "2026-03-24",
  },
}

export default function BitLyftAIRv124Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24">
        <article className="container mx-auto px-6 py-16 max-w-4xl">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cFFF] text-sm font-medium">
                Product Updates
              </span>
              <span className="text-gray-500 text-sm">24th March, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              BitLyft AIR® v1.24: Enterprise SSO and Google Workspace Enhancements
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              BitLyft AIR® v1.24 introduces enterprise SSO connection management and automatic user provisioning, along with expanded Google Workspace detection and response capabilities — improving onboarding, strengthening identity visibility, and enabling automated phishing response workflows.
            </p>
          </div>

          {/* Enterprise SSO */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Enterprise SSO Enhancements</h2>

            {/* SSO Connection Management */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">SSO Connection Management</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Administrators can now configure and manage SAML SSO connections directly within AIR, supporting all major identity providers including Okta, Google, Microsoft, and custom SAML configurations. Identity access configuration no longer requires a separate admin console.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  ["Domain Mapping", "Map SSO connections to specific email domains for automatic routing"],
                  ["Role Assignment", "Set default roles for users provisioned through each SSO connection"],
                  ["Centralized Config", "Manage all identity provider connections from a single location within AIR"],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#00cFFF" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="#00cFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-semibold text-white text-sm">{title}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Automatic User Provisioning */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Automatic User Provisioning</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Users are now automatically provisioned when they sign in through a configured SSO connection. If a user's email domain matches an SSO configuration, AIR creates the account, assigns the appropriate role, and requires no manual setup.
              </p>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-5 mb-4">
                <h4 className="text-sm font-semibold text-[#00cFFF] uppercase tracking-wide mb-3">How It Works</h4>
                <ol className="space-y-2">
                  {[
                    "User attempts to sign in via SSO",
                    "AIR matches email domain to an SSO connection",
                    "Account is created automatically with the configured role",
                    "User is authenticated — no manual provisioning needed",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2261db]/20 border border-[#2261db]/40 flex items-center justify-center text-[#00cFFF] text-xs font-bold">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-gray-400 text-sm">Existing users can also transition to SSO-based authentication once a connection is configured.</p>
            </div>
          </section>

          {/* Google Workspace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">New Google Workspace Security Policies</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              v1.24 adds new out-of-the-box detection coverage across Google Workspace administrative activity, application access, drive behavior, and authentication events — surfacing high-risk activity such as privilege changes, API access grants, data exfiltration patterns, and suspicious login behavior.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  category: "Administrative Activity",
                  items: ["Privilege escalation and admin role changes", "Security policy modifications", "Abnormal admin actions and potential impersonation"],
                },
                {
                  category: "Application Access",
                  items: ["OAuth application grants and API access", "Third-party app connections to Workspace data", "Suspicious application permission changes"],
                },
                {
                  category: "Drive Behavior",
                  items: ["Abnormal file sharing and external access grants", "Large-scale downloads and data exfiltration patterns", "Sensitive file exposure events"],
                },
                {
                  category: "Authentication Events",
                  items: ["Suspicious login activity and impossible travel", "Failed authentication spikes", "Account compromise indicators"],
                },
              ].map(({ category, items }) => (
                <div key={category} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide text-[#00cFFF]">{category}</h4>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg className="h-4 w-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#00cFFF" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="#00cFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Phishing Containment Playbook */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Google Workspace Phishing Containment Playbook</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                This SOC-ready automation playbook orchestrates a complete phishing response workflow in Google Workspace, reducing dwell time and standardizing response across affected accounts.
              </p>
              <div className="space-y-3">
                {[
                  ["Quarantine Emails", "Remove malicious messages from all affected inboxes org-wide"],
                  ["Remove Forwarding Rules", "Detect and delete attacker-planted forwarding configurations that exfiltrate email"],
                  ["Reset Credentials", "Force password reset and session revocation for compromised accounts"],
                ].map(([action, desc], i) => (
                  <div key={action} className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2261db]/20 border border-[#2261db]/40 flex items-center justify-center text-[#00cFFF] text-sm font-bold">{i + 1}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{action}</p>
                      <p className="text-gray-400 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Summary */}
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              BitLyft AIR® v1.24 improves identity and access management through enterprise SSO while expanding Google Workspace detection and automated response capabilities. These enhancements support faster user onboarding, stronger visibility into cloud collaboration activity, and more consistent incident response across Google environments.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-zinc-800 pt-10">
            <h3 className="text-2xl font-bold text-white mb-3">See BitLyft AIR® v1.24 in Action</h3>
            <p className="text-gray-400 mb-6">Want to see how Google Workspace detections trigger automated response workflows in real time?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all"
            >
              Schedule a 15-Minute Demo
            </Link>
            <div className="mt-6">
              <Link href="/releases" className="text-[#00cFFF] hover:underline text-sm">
                View all releases
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}
