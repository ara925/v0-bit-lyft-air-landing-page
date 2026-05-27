import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, AlertTriangle, Shield, Clock, Search, Trash2, Mail, Eye, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Mailbox Forwarding Rule Detection: Automate Discovery and Removal | BitLyft AIR",
  description:
    "Learn how to detect and remove malicious mailbox forwarding rules in Microsoft 365. Automate discovery, flag suspicious external destinations, and contain BEC threats before data exfiltration.",
  keywords:
    "mailbox forwarding rules, email forwarding detection, BEC detection, Microsoft 365 security, inbox rules, mail flow rules, auto-forward detection, email exfiltration",
  openGraph: {
    title: "Mailbox Forwarding Rule Detection: Automate Discovery and Removal",
    description:
      "Detect and remove malicious mailbox forwarding rules in Microsoft 365. Automate discovery and contain BEC threats before data exfiltration.",
    type: "article",
    publishedTime: "2026-05-15",
  },
}

export default function MailboxForwardingRuleDetectionPage() {
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
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                Detection & Response
              </span>
              <span className="text-gray-500">15th May, 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Mailbox Forwarding Rule Detection: Automate Discovery and Removal
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Malicious mailbox forwarding rules are a core persistence mechanism in Business Email Compromise attacks.
              This guide shows you how to automatically discover, flag, and remove unauthorized forwarding rules across
              your Microsoft 365 tenant before data exfiltration occurs.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            {/* The Problem */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Forwarding Rules Are a Critical Threat Vector</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                When attackers compromise a Microsoft 365 account, one of their first actions is often to create a
                mailbox forwarding rule. These rules silently copy all incoming (and sometimes outgoing) email to an
                external address, giving attackers persistent access to communications even after the initial compromise
                is remediated.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  The Silent Data Exfiltration Problem
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">76%</p>
                    <p className="text-gray-400 text-sm">of BEC attacks involve malicious inbox or forwarding rules</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">21 days</p>
                    <p className="text-gray-400 text-sm">average time forwarding rules remain undetected</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">100%</p>
                    <p className="text-gray-400 text-sm">of emails copied before rule discovery</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Forwarding rules persist independently of the user's credentials. Even after you reset passwords, revoke
                sessions, and enable MFA, the forwarding rule continues copying emails to the attacker. Manual discovery
                is time-consuming and often incomplete—organizations with hundreds or thousands of mailboxes can't
                reasonably audit every inbox rule weekly.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Types of Malicious Forwarding Rules</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">SMTP Forwarding (Set-Mailbox)</p>
                      <p className="text-gray-400 text-sm">
                        Tenant-level setting that forwards all mail via SMTP. Configured via PowerShell or admin center.
                        Visible in <code className="text-cyan-400">ForwardingSmtpAddress</code> property.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Inbox Rules (New-InboxRule)</p>
                      <p className="text-gray-400 text-sm">
                        User-created rules with ForwardTo, RedirectTo, or ForwardAsAttachmentTo actions. Created via OWA,
                        Outlook, or EWS API. Most common attack vector.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Transport Rules (Mail Flow Rules)</p>
                      <p className="text-gray-400 text-sm">
                        Admin-level rules that can BCC or redirect mail org-wide. Requires admin access but provides
                        broader exfiltration capability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Detection Strategy */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Search className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Step 1: Automated Discovery</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Effective detection requires scanning all three forwarding mechanisms across every mailbox in your
                tenant. BitLyft AIR's "List Mailbox Forwarding Rules" action automates this discovery on a scheduled
                basis or on-demand during incident response.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Discovery Checklist</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">1. Scan SMTP forwarding settings</p>
                      <p className="text-gray-400 text-sm">
                        Query <code className="text-cyan-400">Get-Mailbox -ResultSize Unlimited | Where-Object
                        &#123;$_.ForwardingSmtpAddress -ne $null&#125;</code> to find mailboxes with SMTP forwarding
                        configured.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">2. Enumerate all inbox rules</p>
                      <p className="text-gray-400 text-sm">
                        Use <code className="text-cyan-400">Get-InboxRule</code> for each mailbox and filter for
                        ForwardTo, RedirectTo, ForwardAsAttachmentTo, and DeleteMessage actions.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">3. Audit transport/mail flow rules</p>
                      <p className="text-gray-400 text-sm">
                        Query <code className="text-cyan-400">Get-TransportRule</code> for rules with BlindCopyTo,
                        CopyTo, or RedirectMessageTo actions pointing to external domains.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">4. Flag external destinations</p>
                      <p className="text-gray-400 text-sm">
                        Compare forwarding addresses against your tenant's verified domains. Any external domain
                        (especially consumer email like gmail.com, outlook.com) should be flagged.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                        Automate
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">5. Check rule creation timestamps</p>
                      <p className="text-gray-400 text-sm">
                        Cross-reference rule creation times with suspicious sign-in events in Entra ID. Rules created
                        shortly after anomalous logins are high priority.
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                        Semi-Automate
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Output */}
              <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden mb-8">
                <div className="bg-zinc-800 px-4 py-2 border-b border-white/10">
                  <p className="text-sm text-gray-400 font-mono">BitLyft AIR &gt; List Mailbox Forwarding Rules</p>
                </div>
                <div className="p-4 font-mono text-sm">
                  <p className="text-green-400 mb-2">Scanning 142 mailboxes...</p>
                  <p className="text-gray-400 mb-4">Completed in 2.4s</p>
                  <div className="space-y-2">
                    <p className="text-white">Found 3 forwarding rules:</p>
                    <p className="text-red-400 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      alex.rivera@company1.example → external-cfo-review@gmail.com <span className="text-yellow-400">(SUSPICIOUS)</span>
                    </p>
                    <p className="text-gray-400">
                      morgan.lee@company1.example → backup@company1.example <span className="text-green-400">(internal)</span>
                    </p>
                    <p className="text-gray-400">
                      jordan.kim@company1.example → partner@supplier.com <span className="text-blue-400">(external - known partner)</span>
                    </p>
                    <p className="text-yellow-400 mt-4">1 rule flagged for immediate review.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Risk Classification */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Step 2: Risk Classification</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Not every forwarding rule is malicious. Legitimate use cases include backup copies to personal email,
                shared mailbox workflows, and partner integrations. Classification logic prevents false positives while
                ensuring true threats are escalated.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white font-semibold">Risk Level</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Indicators</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-sm rounded">Critical</span>
                      </td>
                      <td className="py-3 px-4">
                        External consumer email (gmail, outlook, yahoo), rule created after suspicious sign-in,
                        executive/finance mailbox, rule name obfuscated or blank
                      </td>
                      <td className="py-3 px-4">Immediate removal + session revocation + investigation</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded">High</span>
                      </td>
                      <td className="py-3 px-4">
                        External business domain not in allow-list, recently created (last 7 days),
                        user unaware of rule when contacted
                      </td>
                      <td className="py-3 px-4">Disable rule + notify user + analyst review</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded">Medium</span>
                      </td>
                      <td className="py-3 px-4">
                        External domain in partner allow-list, rule older than 30 days with no anomalous activity
                      </td>
                      <td className="py-3 px-4">Log + periodic review + user confirmation</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-sm rounded">Low</span>
                      </td>
                      <td className="py-3 px-4">
                        Internal tenant domain, documented IT workflow, shared mailbox delegation
                      </td>
                      <td className="py-3 px-4">Allow + document in baseline</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Building an Allow-List
                </h3>
                <p className="text-gray-300 mb-4">
                  To reduce false positives, maintain an allow-list of approved external forwarding destinations:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    Verified partner/vendor domains with documented business justification
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    Personal backup addresses for executives (pre-approved and documented)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    Integration addresses for CRM, ticketing, or archival systems
                  </li>
                </ul>
              </div>
            </section>

            {/* Automated Removal */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Step 3: Automated Removal</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                For critical and high-risk rules, automated removal stops data exfiltration immediately. BitLyft AIR's
                "Remove Mailbox Forwarding Rule" action handles all three forwarding types and logs the action for
                compliance.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Removal Actions by Type</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <Trash2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">SMTP Forwarding Removal</p>
                      <p className="text-gray-400 text-sm">
                        <code className="text-cyan-400">Set-Mailbox -Identity user@domain.com -ForwardingSmtpAddress $null
                        -DeliverToMailboxAndForward $false</code>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <Trash2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Inbox Rule Removal</p>
                      <p className="text-gray-400 text-sm">
                        <code className="text-cyan-400">Remove-InboxRule -Mailbox user@domain.com -Identity "Rule Name"
                        -Confirm:$false</code>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <Trash2 className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Transport Rule Removal</p>
                      <p className="text-gray-400 text-sm">
                        <code className="text-cyan-400">Remove-TransportRule -Identity "Rule Name" -Confirm:$false</code>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important: Preserve Evidence First
                </h3>
                <p className="text-gray-300">
                  Before removing a rule, BitLyft AIR automatically captures the rule configuration, creation timestamp,
                  and recent forwarded message count. This evidence is attached to the case for forensic analysis and
                  potential legal proceedings.
                </p>
              </div>
            </section>

            {/* Containment Workflow */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Step 4: Full Containment Workflow</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Removing the forwarding rule stops future exfiltration, but the account may still be compromised.
                BitLyft AIR's "Mailbox Forwarding Rule Detection" playbook chains discovery with full containment:
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Playbook: Mailbox Forwarding Rule Detection</h3>
                <p className="text-gray-400 text-sm mb-6">Trigger: Scheduled scan (daily) or new forwarding rule alert</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 bg-black/30 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm">1</div>
                    <div className="flex-1">
                      <p className="text-white font-medium">List Mailbox Forwarding Rules</p>
                      <p className="text-gray-500 text-sm">Scan all mailboxes for SMTP, inbox, and transport rules</p>
                    </div>
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">~2-3s</span>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-black/30 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm">2</div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Classify and Flag Suspicious Rules</p>
                      <p className="text-gray-500 text-sm">Apply risk scoring based on destination and context</p>
                    </div>
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">~0.5s</span>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-black/30 rounded-lg">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold text-sm">3</div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Remove Malicious Forwarding Rules</p>
                      <p className="text-gray-500 text-sm">Delete critical/high-risk rules, preserve evidence</p>
                    </div>
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">~1-2s</span>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-black/30 rounded-lg">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold text-sm">4</div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Revoke User Sign-In Sessions</p>
                      <p className="text-gray-500 text-sm">Invalidate all active sessions for affected users</p>
                    </div>
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">~1s</span>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-black/30 rounded-lg">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-sm">5</div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Create Case and Notify Analyst</p>
                      <p className="text-gray-500 text-sm">Log incident, attach evidence, alert SOC team</p>
                    </div>
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-500 text-sm">~0.5s</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-gray-400">Total Containment Time:</span>
                  <span className="text-green-400 font-bold">~6 seconds</span>
                </div>
              </div>
            </section>

            {/* Prevention */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Prevention: Block External Forwarding by Default</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                The most effective defense is preventing unauthorized external forwarding entirely. Microsoft 365
                provides tenant-level controls to block or restrict auto-forwarding.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Recommended Tenant Configuration</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Block external auto-forwarding (Anti-spam policy)</p>
                      <p className="text-gray-400 text-sm">
                        In Exchange Admin Center → Mail flow → Anti-spam policies, set "Automatic forwarding" to
                        <strong className="text-white"> Off</strong> or <strong className="text-white">Automatic - System controlled</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Create transport rule to block external forwards</p>
                      <p className="text-gray-400 text-sm">
                        Create a mail flow rule: If message type = Auto-forward AND recipient is external → Reject with explanation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Enable audit logging for rule changes</p>
                      <p className="text-gray-400 text-sm">
                        Ensure Unified Audit Log captures UpdateInboxRules, Set-Mailbox, and New-TransportRule events for
                        detection of bypass attempts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Create exception group for approved forwarding</p>
                      <p className="text-gray-400 text-sm">
                        For users with legitimate external forwarding needs, create a security group excluded from the
                        block policy. Require documented approval for membership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-8 text-center">
                <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">
                  Automate Forwarding Rule Detection with BitLyft AIR
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Stop manually auditing mailboxes. BitLyft AIR continuously monitors your Microsoft 365 tenant for
                  suspicious forwarding rules and automatically removes them before data exfiltration occurs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/demo#actions"
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Try the Interactive Demo
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
