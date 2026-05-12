import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, AlertTriangle, Shield, Clock, FileSearch, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Email Compromise Response: M365 Triage + Containment Checklist | BitLyft AIR",
  description:
    "Complete BEC response checklist for Microsoft 365. Learn the triage, analysis, and containment steps to stop business email compromise attacks before financial damage occurs.",
  keywords:
    "business email compromise response, BEC triage, BEC containment, Microsoft 365 BEC, M365 BEC response, email compromise checklist, BEC incident response",
  openGraph: {
    title: "Business Email Compromise Response: M365 Triage + Containment Checklist",
    description:
      "Complete BEC response checklist for Microsoft 365. Learn the triage, analysis, and containment steps to stop business email compromise attacks.",
    type: "article",
    publishedTime: "2026-03-11",
  },
}

export default function BECResponsePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 py-12 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">
                Incident Response
              </span>
              <span className="text-gray-500">9th March, 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Business Email Compromise Response: M365 Triage + Containment Checklist
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Business Email Compromise (BEC) attacks cost organizations an average of $137,000 per incident. This
              checklist gives you a complete triage-to-containment workflow for Microsoft 365 environments, including
              what to automate and what requires human judgment.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            {/* The BEC Problem */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why BEC Response Speed Matters</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Business Email Compromise is the most financially damaging form of cybercrime. Unlike ransomware or
                malware, BEC doesn't rely on technical exploits—it exploits trust. Attackers impersonate executives,
                vendors, or colleagues to trick employees into transferring funds or sharing sensitive data.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  The BEC Timeline Problem
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">4 hours</p>
                    <p className="text-gray-400 text-sm">Average time from account compromise to first BEC email sent</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">24 hours</p>
                    <p className="text-gray-400 text-sm">Average time for manual BEC detection without automation</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">$137K</p>
                    <p className="text-gray-400 text-sm">Average financial loss per successful BEC attack</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The gap between compromise and detection is where financial damage occurs. A structured triage and
                containment checklist—with automation where safe—closes this gap from hours to minutes.
              </p>
            </section>

            {/* Phase 1: Triage */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Phase 1: Triage (First 15 Minutes)</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Triage determines whether you're dealing with a real BEC incident or a false positive. The goal is to
                validate the threat and assess severity as quickly as possible.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">BEC Triage Checklist</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">1. Log the incident</p>
                      <p className="text-gray-400 text-sm">
                        Create a ticket with timestamp, reporter info, and initial alert details. This establishes the
                        forensic timeline.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">2. Validate the alert source</p>
                      <p className="text-gray-400 text-sm">
                        Check Microsoft Defender for Office 365 alerts, Entra ID sign-in logs, and user reports. Cross-reference
                        multiple signals.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">3. Analyze email headers</p>
                      <p className="text-gray-400 text-sm">
                        Check Reply-To mismatches, X-Originating-IP, authentication results (SPF/DKIM/DMARC), and
                        envelope vs. display name discrepancies.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        Semi-Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">4. Determine if account is compromised vs. spoofed</p>
                      <p className="text-gray-400 text-sm">
                        Internal tenant origin = compromised account. External spoof = different response. Check
                        Unified Audit Log for suspicious sign-ins.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        Semi-Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">5. Classify severity</p>
                      <p className="text-gray-400 text-sm">
                        High: Executive account, financial request sent, or evidence of lateral movement. Medium:
                        Standard user, no financial action yet. Low: Blocked or failed attempt.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">
                        Human Decision
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">6. Enable litigation hold</p>
                      <p className="text-gray-400 text-sm">
                        Preserve all mailbox data for forensic analysis. Apply via Microsoft 365 Compliance Center or
                        PowerShell immediately.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Phase 2: Analysis */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Phase 2: Analysis (15-45 Minutes)</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Once you've confirmed a BEC incident, analysis determines the scope: what did the attacker access, who
                else is affected, and what actions did they take?
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">BEC Analysis Checklist</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">1. Pull Unified Audit Log (UAL) for affected user</p>
                      <p className="text-gray-400 text-sm">
                        Filter for MailItemsAccessed, Send, UpdateInboxRules, Add-MailboxPermission. Look for activity
                        from anomalous IPs or user agents.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">2. Check for malicious inbox rules</p>
                      <p className="text-gray-400 text-sm">
                        Attackers create rules to auto-forward emails or hide replies. Search for rules with
                        DeleteMessage, MoveToFolder (RSS, Archive), or ForwardTo actions.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">3. Review OAuth app consents</p>
                      <p className="text-gray-400 text-sm">
                        Check Entra ID for suspicious OAuth apps granted Mail.Read, Mail.Send, or MailboxSettings.ReadWrite
                        permissions during the compromise window.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">4. Identify all sent BEC emails</p>
                      <p className="text-gray-400 text-sm">
                        Use Message Trace or Threat Explorer to find all emails sent from the compromised account
                        during the attack window. Collect recipients and content.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        Semi-Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">5. Assess data exposure</p>
                      <p className="text-gray-400 text-sm">
                        Review MailItemsAccessed logs to determine what emails/attachments the attacker read. Flag if
                        PII, financial data, or credentials were accessed.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        Semi-Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">6. Determine lateral movement</p>
                      <p className="text-gray-400 text-sm">
                        Check if the attacker used the compromised account to phish internal users or access SharePoint,
                        OneDrive, or Teams. Expand scope as needed.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">
                        Human Decision
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key UAL Events Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white font-semibold">UAL Event</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">What It Reveals</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">BEC Significance</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm text-cyan-400">MailItemsAccessed</td>
                      <td className="py-3 px-4">Which emails the attacker read</td>
                      <td className="py-3 px-4">Shows reconnaissance and data theft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm text-cyan-400">Send</td>
                      <td className="py-3 px-4">Emails sent from account</td>
                      <td className="py-3 px-4">Identifies fraudulent messages sent</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm text-cyan-400">UpdateInboxRules</td>
                      <td className="py-3 px-4">Inbox rule changes</td>
                      <td className="py-3 px-4">Persistence mechanism / hiding replies</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm text-cyan-400">Set-Mailbox</td>
                      <td className="py-3 px-4">Mailbox setting changes</td>
                      <td className="py-3 px-4">Forwarding rules to external address</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm text-cyan-400">Add-MailboxPermission</td>
                      <td className="py-3 px-4">Delegation changes</td>
                      <td className="py-3 px-4">Attacker granting themselves access</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm text-cyan-400">Consent to application</td>
                      <td className="py-3 px-4">OAuth app grants</td>
                      <td className="py-3 px-4">Persistent backdoor via malicious app</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Phase 3: Containment */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Phase 3: Containment (Immediate)</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Containment stops the bleeding. These actions should execute as soon as you've confirmed a BEC incident—
                don't wait for full analysis to complete. Containment and analysis can run in parallel.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">BEC Containment Checklist</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">1. Revoke all active sessions</p>
                      <p className="text-gray-400 text-sm">
                        Use Entra ID to revoke refresh tokens immediately. This kicks the attacker out of all
                        Microsoft 365 apps, Outlook, Teams, etc.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate (High Confidence)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">2. Force password reset</p>
                      <p className="text-gray-400 text-sm">
                        Reset the user's password via Entra ID or on-prem AD (if hybrid). Use a strong temporary
                        password and require change on next login.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate (High Confidence)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">3. Force MFA re-enrollment</p>
                      <p className="text-gray-400 text-sm">
                        Require the user to re-register all MFA methods. Attackers may have registered their own phone
                        or authenticator during the compromise.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate (High Confidence)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">4. Remove malicious inbox rules</p>
                      <p className="text-gray-400 text-sm">
                        Delete any inbox rules created during the compromise window, especially those with ForwardTo,
                        DeleteMessage, or MoveToFolder actions.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">5. Disable external forwarding</p>
                      <p className="text-gray-400 text-sm">
                        Remove any SMTP forwarding rules pointing to external addresses. Block external forwarding at
                        the tenant level if not already done.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">6. Revoke malicious OAuth apps</p>
                      <p className="text-gray-400 text-sm">
                        Remove any OAuth apps granted permissions during the compromise window. Review enterprise app
                        consents in Entra ID.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        Semi-Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">7. Block attacker infrastructure</p>
                      <p className="text-gray-400 text-sm">
                        Add attacker IPs to Conditional Access blocked locations. Block malicious domains in Defender
                        for Office 365 tenant allow/block list.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        Semi-Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">8. Notify BEC email recipients</p>
                      <p className="text-gray-400 text-sm">
                        Alert all recipients of fraudulent emails sent from the compromised account. Include specific
                        email subjects/dates and warn against taking requested actions.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">
                        Human Decision
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">9. Contact finance/legal if financial fraud attempted</p>
                      <p className="text-gray-400 text-sm">
                        If BEC emails requested wire transfers or payment changes, immediately notify finance and legal.
                        Initiate bank recall procedures if payment was made.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">
                        Human Decision
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Automation Decision Matrix */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">BEC Response Automation Decision Matrix</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Not everything should be automated. Use this matrix to determine which BEC response actions are safe to
                fully automate vs. those requiring human approval. See our{" "}
                <Link href="/blog/guardrails-to-avoid-client-impact" className="text-cyan-400 hover:underline">
                  guardrails guide
                </Link>{" "}
                for implementation details.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white font-semibold">Action</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Automation Level</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Session revocation</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Full Auto</span>
                      </td>
                      <td className="py-3 px-4">Reversible, minimal business impact, critical for containment</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Password reset</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Full Auto</span>
                      </td>
                      <td className="py-3 px-4">Standard response, user can self-recover via SSPR</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">MFA re-enrollment</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Full Auto</span>
                      </td>
                      <td className="py-3 px-4">Essential for removing attacker persistence</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Remove inbox rules</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Full Auto</span>
                      </td>
                      <td className="py-3 px-4">Rules created in attack window are malicious by default</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Disable forwarding</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Full Auto</span>
                      </td>
                      <td className="py-3 px-4">External forwarding should be blocked by default anyway</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Revoke OAuth apps</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Approval</span>
                      </td>
                      <td className="py-3 px-4">Could disrupt legitimate business apps; review first</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Block IPs/domains</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Approval</span>
                      </td>
                      <td className="py-3 px-4">Risk of blocking legitimate services; verify IOCs first</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Account disable</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Approval</span>
                      </td>
                      <td className="py-3 px-4">Full lockout; reserve for high-severity cases</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Recipient notification</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Manual</span>
                      </td>
                      <td className="py-3 px-4">Requires context-aware messaging; external parties involved</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Bank/legal escalation</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Manual</span>
                      </td>
                      <td className="py-3 px-4">Financial/legal decisions require human judgment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Common BEC Indicators */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Common BEC Indicators to Detect</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Effective BEC response starts with detection. Train your automation to trigger on these indicators for
                faster triage:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Sign-In Anomalies</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Impossible travel (logins from distant locations in short time)
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Login from new device + new location simultaneously
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Sign-in from anonymizing VPN/proxy services
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      MFA fatigue pattern (multiple push notifications)
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Email Behavior</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      New inbox rules created (especially with forwarding/deletion)
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Emails with payment/wire transfer keywords from exec accounts
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Reply-To address doesn't match sender domain
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      External forwarding rule added to mailbox
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">OAuth/App Activity</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Consent to app with Mail.Read or Mail.Send permissions
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      App consent from anomalous IP or following phish click
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Unknown publisher OAuth app with high-privilege scopes
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Mailbox Changes</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Mailbox delegation added (SendAs, FullAccess)
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      SMTP forwarding configured to external domain
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      Mailbox audit logging disabled
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How BitLyft AIR Helps */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">How BitLyft AIR Automates BEC Response</h2>
                </div>

                <p className="text-gray-300 mb-6">
                  BitLyft AIR integrates directly with Microsoft 365 and Entra ID to execute BEC response in seconds,
                  not hours. When a BEC indicator fires:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Instant Containment</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Auto-revoke sessions, reset password, force MFA re-enrollment within 60 seconds of detection
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSearch className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Auto-Analysis</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Pull UAL, identify malicious rules, map OAuth apps, and assess scope automatically
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Built-In Guardrails</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      VIP approval workflows, rollback capability, and audit trail for every automated action
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Analyst Handoff</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Pre-populated incident with all evidence, ready for human decisions on notifications and escalation
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-colors"
                >
                  See BEC Response in Action
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How quickly should BEC containment actions execute?
                  </h3>
                  <p className="text-gray-400">
                    Session revocation, password reset, and MFA re-enrollment should execute within 60-120 seconds of
                    confirmed BEC detection. Every minute of delay is another minute the attacker has access to the
                    compromised mailbox.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Should I disable the account or just reset the password?
                  </h3>
                  <p className="text-gray-400">
                    Password reset + session revocation + MFA re-enrollment is usually sufficient. Full account
                    disable should be reserved for high-severity cases (executive account, confirmed financial fraud
                    in progress) because it has higher business impact and requires IT to re-enable.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What if the attacker registered their own MFA device?
                  </h3>
                  <p className="text-gray-400">
                    This is why MFA re-enrollment is critical. Forcing the user to re-register all MFA methods removes
                    any authenticator app, phone number, or security key the attacker may have added. Without this
                    step, the attacker can simply re-authenticate after password reset.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How do I detect BEC if the attacker is using the legitimate account?
                  </h3>
                  <p className="text-gray-400">
                    Look for behavioral anomalies: impossible travel, new inbox rules, emails with payment keywords to
                    unusual recipients, and OAuth app consents. Microsoft Defender for Office 365 generates alerts for
                    many of these. Combine with Entra ID Protection risk signals for best coverage.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Posts */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/blog/automated-identity-based-response"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Automated Identity-Based Response: Containment Actions That Stop Account Takeover Fast
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Deep dive into identity containment actions for compromised accounts.
                  </p>
                </Link>

                <Link
                  href="/blog/phishing-response-automation-microsoft-365"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Phishing Response Automation for Microsoft 365: Remove Malicious Email Org-Wide
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How to automate org-wide email purge when phishing is detected.
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
