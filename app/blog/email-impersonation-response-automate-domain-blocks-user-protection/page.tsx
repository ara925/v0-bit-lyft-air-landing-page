import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Shield,
  Mail,
  Ban,
  UserX,
  Globe,
  Lock,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Email Impersonation Response: Automate Domain Blocks and User Protection Steps | BitLyft AIR®",
  description:
    "Learn how to automate email impersonation response by blocking lookalike domains, adding sender to block lists, and walking affected users through protection steps in seconds—not hours.",
  keywords: [
    "email impersonation response",
    "domain impersonation attack",
    "automate domain blocks",
    "lookalike domain block",
    "email spoofing response",
    "sender impersonation detection",
    "Microsoft 365 impersonation protection",
    "automated email security response",
    "executive impersonation attack",
    "brand impersonation email",
    "DMARC impersonation block",
    "impersonation playbook",
  ],
  openGraph: {
    title: "Email Impersonation Response: Automate Domain Blocks and User Protection Steps",
    description:
      "Stop email impersonation attacks fast. Learn how to automate domain blocks, sender quarantine, and user protection steps before financial or reputational damage occurs.",
    type: "article",
    publishedTime: "2026-05-1",
  },
}

export default function EmailImpersonationResponsePage() {
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
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">
                Incident Response
              </span>
              <span className="text-gray-500">1st May, 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Email Impersonation Response: Automate Domain Blocks and User Protection Steps
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Email impersonation attacks — where attackers register lookalike domains or spoof trusted senders to
              deceive your users — are among the most financially damaging threats facing organizations today. Here
              is how to automate your response so that domain blocks, sender quarantine, and user protection steps
              execute in seconds, not after the wire transfer has already left.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">

            {/* The Problem */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Email Impersonation Is Uniquely Dangerous</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Unlike phishing attacks that rely on weaponized links or malicious attachments, email impersonation
                attacks exploit human trust directly. The malicious email looks like it came from your CEO, your
                bank, or a trusted vendor. There is no link to click, no attachment to scan — just a convincing
                request that bypasses every technical filter you have because the social engineering is the
                payload.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                There are two primary variants your team will encounter:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-900/50 border border-orange-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">Lookalike Domain Impersonation</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Attackers register a domain visually similar to yours or a trusted partner — for example,
                    <span className="font-mono text-orange-300 mx-1">acme-corp.com</span> instead of
                    <span className="font-mono text-cyan-300 mx-1">acmecorp.com</span> — and send email from it.
                    DMARC passes because the attacker controls their domain&apos;s DNS records.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Unicode homograph substitutions (rn → m)</li>
                    <li>• Hyphen/dot insertions (acme-corp, acme.corp)</li>
                    <li>• TLD swaps (.co, .net, .io, .us)</li>
                    <li>• Subdomain abuse (mail.acmecorp.attacker.com)</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 border border-red-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <UserX className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">Display Name Spoofing</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    The attacker uses a completely unrelated sending domain but sets the display name to
                    <span className="font-mono text-red-300 mx-1">&quot;John Smith — CEO&quot;</span>. Most mail
                    clients show only the display name by default. Users who do not expand the sender details
                    never see the actual sending address.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Executive name spoofing (CEO fraud)</li>
                    <li>• Vendor / partner impersonation</li>
                    <li>• IT helpdesk impersonation</li>
                    <li>• HR and payroll impersonation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  The Cost of Slow Response
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">$137K</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Average financial loss per successful BEC / impersonation incident
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">26 sec</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Median time for a user to interact with an impersonation email after opening
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">4.2 hrs</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Average manual time-to-block for a newly detected impersonation domain
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The attack window is measured in minutes. Your response must be measured in seconds. That gap is
                only closable with automation.
              </p>
            </section>

            {/* Detection Signals */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Detection Signals That Should Trigger Automated Response
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Before you can automate the response, your platform needs to detect the impersonation event.
                These are the highest-signal indicators that should feed your response playbook:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Microsoft Defender Impersonation Alert
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Defender for Office 365 Plan 2 includes anti-impersonation policies that flag emails where
                        the sender matches a protected user or domain on your watch list. Alert categories include
                        <span className="font-mono text-cyan-300 mx-1">UserImpersonation</span> and
                        <span className="font-mono text-cyan-300 mx-1">DomainImpersonation</span>. These alerts
                        should be the primary automated trigger.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Display Name / From-Address Mismatch
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Email headers where the RFC 5322 &quot;From&quot; display name matches an internal executive
                        or VIP but the actual sending domain is external and not on any approved sender list. This
                        can be detected via mail flow rules or a SIEM query against mail logs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Lookalike Domain Registration Intelligence
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Proactive threat intelligence feeds (e.g., DomainTools Iris, DNSDB, or a threat intel
                        platform) can alert you when a new domain is registered that is visually similar to your
                        brand. This enables pre-emptive blocking before the first malicious email is sent.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        User-Reported Suspicious Email
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        A user submitting an email via the Microsoft Report Message add-in, or a forwarded email to
                        a designated phishing mailbox. User reports are high-value signals because users often
                        notice impersonation attempts that automated filters miss.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        DMARC Failure on Your Own Domain
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Aggregate DMARC reports showing unauthorized sending sources claiming to be your domain.
                        If you receive DMARC failure reports from IPs you do not own, someone is spoofing your
                        domain. Tools like Valimail, Dmarcian, or PowerDMARC surface these in real time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Automated Response Playbook */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Automated Email Impersonation Response Playbook
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                When any of the above signals fire, the following playbook should execute automatically — no
                analyst intervention required for the containment steps. Human review is reserved for decisions
                that carry business risk.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  Impersonation Response Playbook
                </h3>

                {/* Step 1 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      1
                    </span>
                    <h4 className="text-lg font-semibold text-white">Trigger and Enrich</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    The playbook fires on alert ingestion. Within seconds it enriches the event with:
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2 ml-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Full email header analysis — From, Reply-To, Return-Path, X-Originating-IP,
                        SPF/DKIM/DMARC pass/fail results
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Sender domain WHOIS and registration age — domains registered within the last 30 days
                        receive an automatic high-risk score
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Levenshtein distance comparison against your protected domain list — flags visually
                        similar domains with a similarity score
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Threat intelligence lookups — VirusTotal, URLScan.io, and your internal IOC database
                        for known-bad infrastructure
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Recipient list from Microsoft Graph — how many mailboxes received the impersonation
                        email
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      2
                    </span>
                    <h4 className="text-lg font-semibold text-white">Block the Impersonating Domain at the Tenant</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Add the impersonating domain to your Microsoft 365 Tenant Block List via the Security API so
                    no further emails from that domain can reach any user in your organization:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-3">
                    <pre className="text-green-300">{`POST https://graph.microsoft.com/v1.0/security/tiIndicators
{
  "action": "block",
  "targetProduct": "Microsoft Defender ATP",
  "threatType": "EmailImpersonation",
  "emailSenderAddress": "*@lookalike-domain.com",
  "emailSourceDomain": "lookalike-domain.com",
  "confidence": 85,
  "description": "Lookalike domain impersonating acmecorp.com",
  "expirationDateTime": "2026-12-31T00:00:00Z"
}`}</pre>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    For Microsoft Defender for Office 365, also add to the Tenant Block List under
                    <span className="font-mono text-cyan-300 mx-1">Security &gt; Policies &gt; Tenant Allow/Block Lists &gt; Domains &amp; Addresses</span>
                    via the Exchange Online Protection API:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-xs overflow-x-auto mt-3">
                    <pre className="text-green-300">{`# PowerShell via Exchange Online
New-TenantAllowBlockListItems \`
  -ListType Sender \`
  -Block \`
  -Entries "lookalike-domain.com" \`
  -Notes "Impersonation of acmecorp.com - Auto-blocked by AIR"`}</pre>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      3
                    </span>
                    <h4 className="text-lg font-semibold text-white">Quarantine or Soft-Delete All Delivered Instances</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Block the domain for future delivery, then purge every instance already in inboxes
                    org-wide. Use the Microsoft Graph Security email purge endpoint:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-3">
                    <pre className="text-green-300">{`POST /security/collaboration/emailPurge
{
  "query": {
    "emailSourceDomain": "lookalike-domain.com"
  },
  "purgeType": "softDelete",
  "purgeAreas": ["mailboxes"]
}`}</pre>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-3">
                    <p className="text-yellow-300 text-sm">
                      <strong>Best Practice:</strong> Use <span className="font-mono">softDelete</span> by default.
                      Emails move to Recoverable Items and can be restored for 14 days. Reserve
                      <span className="font-mono mx-1">hardDelete</span> for confirmed malware attachments only.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      4
                    </span>
                    <h4 className="text-lg font-semibold text-white">Identify Users Who Interacted</h4>
                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded font-medium">
                      Semi-Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Query the Microsoft 365 Unified Audit Log (UAL) to identify which recipients opened,
                    replied to, clicked a link in, or forwarded the impersonation email. This scopes the
                    human protection steps to only the users who need them:
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2 ml-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-mono text-cyan-300">MailItemsAccessed</span> — confirms the
                        email was opened by the recipient
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-mono text-cyan-300">Send</span> — user replied to the
                        impersonation email (high risk: may have shared sensitive data)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-mono text-cyan-300">UrlClickEvents</span> in Defender — user
                        clicked a link in the email (possible credential entry or download)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Entra ID sign-in logs — check for suspicious sign-in immediately following the click
                        event, especially from new IPs or devices
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Step 5 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      5
                    </span>
                    <h4 className="text-lg font-semibold text-white">Execute Tiered User Protection Steps</h4>
                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded font-medium">
                      Semi-Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Not all recipients need the same response. Tier the protection actions based on what the
                    UAL shows:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-3 px-4 text-white font-semibold">User Action</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Risk Level</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Automated Protection Steps</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">Email delivered, not opened</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-medium">
                              Low
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">
                            Soft-delete only. No user action required.
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">Email opened, no link click</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">
                              Medium
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">
                            Soft-delete + awareness notification email to user.
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">Replied to sender</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded text-xs font-medium">
                              High
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">
                            Soft-delete + user notification + analyst alert + review sent content.
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">Clicked link in email</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs font-medium">
                              Critical
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">
                            Soft-delete + session revocation + force MFA re-enrollment + analyst escalation.
                          </td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4">Clicked link + new sign-in detected</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs font-medium">
                              Critical
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">
                            All above + account disable pending investigation + immediate human escalation.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      6
                    </span>
                    <h4 className="text-lg font-semibold text-white">Harden Anti-Impersonation Policy</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    After blocking the specific domain, automatically add all identified variants to your
                    Defender for Office 365 anti-phishing policy. This ensures similar lookalike permutations
                    are caught immediately:
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2 ml-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Add all Levenshtein-similar domains (score &lt; 3) to the protected domains list in the
                        anti-phishing policy
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Update the impersonation protection sender list with any display names confirmed as
                        spoofed executives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Submit the sender domain to Microsoft JMRS (Junk Mail Reporting Service) to feed
                        global threat intelligence
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Step 7 */}
                <div className="border-l-2 border-cyan-500/50 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      7
                    </span>
                    <h4 className="text-lg font-semibold text-white">Document, Notify, and Close</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Automatically generate a complete incident record with:
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2 ml-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Full timeline: detection time, domain block time, purge completion time, user notifications sent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Recipient breakdown: total delivered, opened, replied, clicked — with per-user
                        containment actions logged
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>IOC export for SIEM ingestion and threat intel sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        User awareness notification to all recipients — non-alarming, explaining that a
                        suspicious email was automatically removed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Response time callout */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-white">Automated vs. Manual Response Time</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-black/30 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-red-400">4.2 hrs</p>
                    <p className="text-gray-400 text-sm mt-1">Manual: Detection → Domain Blocked</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-green-400">&lt; 90 sec</p>
                    <p className="text-gray-400 text-sm mt-1">Automated: Detection → Domain Blocked + Purge Complete</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hardening Your Posture */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Hardening Your Posture to Reduce Future Impersonation Risk
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Automated response handles active attacks. Proactive hardening reduces the number of attacks
                that get through in the first place. The following steps should be part of your post-incident
                automated hardening playbook:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">DMARC Enforcement</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    If your DMARC policy is still at <span className="font-mono text-yellow-300">p=none</span>,
                    move it to <span className="font-mono text-green-300">p=quarantine</span> immediately and
                    to <span className="font-mono text-green-300">p=reject</span> after validating all
                    legitimate sending sources. This prevents anyone from spoofing your exact domain.
                  </p>
                  <div className="bg-black/30 rounded-lg p-3 font-mono text-xs text-green-300">
                    {`_dmarc.yourdomain.com TXT "v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com; pct=100"`}
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Ban className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Anti-Impersonation Policy Tuning</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Ensure your Defender for Office 365 anti-phishing policy has all executives, board
                    members, and high-value vendors listed in the impersonation protection user list. Set the
                    action to <span className="font-mono text-orange-300">Quarantine</span> rather than Junk
                    for maximum protection with analyst review capability.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Add all C-suite and senior leadership</li>
                    <li>• Include key finance and IT contacts</li>
                    <li>• Add top 10 vendor/partner email domains</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Defensive Domain Registration</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Register the most common lookalike variations of your primary domain proactively:
                    common typos, hyphenated versions, and the top 5 TLD variants. Configure them all to
                    redirect to your main domain or return an MX record that drops incoming mail. This
                    removes attack surface before it can be weaponized.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">External Email Warning Banners</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Enable external email warning banners in Microsoft 365 to automatically prepend a
                    visible notice on all emails originating from outside your organization. This gives
                    users a visual cue before they interact with any message from an unknown sender,
                    including impersonation attempts.
                  </p>
                </div>
              </div>
            </section>

            {/* BitLyft AIR CTA Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  How BitLyft AIR® Automates Email Impersonation Response
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  BitLyft AIR® ingests Defender for Office 365 impersonation alerts and executes this entire
                  playbook automatically — domain block, org-wide purge, tiered user protection, and
                  hardening policy update — in under 90 seconds. The incident record is pre-populated and
                  ready for analyst review with every action logged and reversible.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Ban className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Instant Domain Block</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Automatically blocks the impersonating domain across the entire tenant within seconds
                      of alert ingestion
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <UserX className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Tiered User Protection</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Automatically escalates containment steps based on whether users opened, replied to,
                      or clicked links in the impersonation email
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Built-In Guardrails</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      VIP approval workflows and rollback capability on every automated action — no
                      irreversible steps without analyst sign-off
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Full Audit Trail</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Complete incident documentation with timestamps, actions taken, and SIEM-ready IOC
                      export generated automatically
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
                >
                  See Impersonation Response in Action
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What is the difference between email spoofing and email impersonation?
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Email spoofing means the attacker forges the From header to show your exact domain (e.g.,
                    ceo@yourdomain.com) — a DMARC reject policy stops this. Email impersonation uses a
                    lookalike domain (e.g., ceo@y0urdomain.com) or display name tricks — DMARC does not
                    stop these because the attacker&apos;s domain passes its own authentication. Both require
                    different technical controls to prevent.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Can DMARC alone stop email impersonation attacks?
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    No. DMARC with <span className="font-mono">p=reject</span> stops exact-domain spoofing
                    effectively. But lookalike domain impersonation and display name spoofing bypass DMARC
                    entirely because the attacker controls the sending domain. You need Defender for Office
                    365 anti-impersonation policies, anti-phishing protection, and automated response on top
                    of DMARC enforcement.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How do I block a lookalike domain before any emails are sent?
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Subscribe to a lookalike domain monitoring service (e.g., DomainTools Iris, Pulsedive,
                    or a threat intel platform with domain alerting). When a newly registered domain is
                    flagged as similar to yours, automatically add it to your Tenant Block List before any
                    emails are sent. This proactive approach eliminates the attack window entirely.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What should I do if a user replied to an impersonation email and may have sent sensitive data?
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Immediately review the content of the reply via the Microsoft 365 Unified Audit Log
                    (MailItemsAccessed + Send events). If PII, financial data, credentials, or internal
                    documents were shared, escalate to a full data disclosure investigation. Notify legal
                    and compliance teams and preserve all mailbox data under litigation hold. The automated
                    playbook should flag this scenario for mandatory human review.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Should users be notified when an impersonation email is automatically removed?
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Yes, always. User notification serves two purposes: it explains why an email
                    disappeared from their inbox (reducing helpdesk calls), and it reinforces security
                    awareness by confirming the platform is actively protecting them. Keep the notification
                    brief, non-alarming, and actionable — tell users what happened, that they are protected,
                    and who to contact if they already interacted with the email.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/blog/phishing-response-automation-microsoft-365"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Phishing Response Automation for Microsoft 365: Remove Malicious Email Org-Wide
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How to automate org-wide phishing email purge in seconds using Microsoft Graph API.
                  </p>
                </Link>

                <Link
                  href="/blog/bec-response-microsoft-365-triage-containment"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Business Email Compromise Response: M365 Triage + Containment Checklist
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Complete BEC triage-to-containment workflow for Microsoft 365 environments.
                  </p>
                </Link>

                <Link
                  href="/blog/automated-identity-based-response"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Automated Identity-Based Response: Containment Actions That Stop Account Takeover Fast
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Deep dive into identity containment actions including session revocation and forced MFA
                    re-enrollment.
                  </p>
                </Link>

                <Link
                  href="/blog/email-quarantine-automation-policy-design-false-positives"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email Quarantine Automation: Policy Design That Avoids False Positives
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How to design email quarantine automation policies that catch real threats while
                    minimizing false positives.
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
