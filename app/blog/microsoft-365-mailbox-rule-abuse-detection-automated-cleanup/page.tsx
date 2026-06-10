import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Shield,
  Mail,
  Filter,
  Trash2,
  Eye,
  Forward,
  FolderOpen,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Microsoft 365 Mailbox Rule Abuse: Detection and Automated Cleanup | BitLyft AIR®",
  description:
    "Learn how attackers abuse Microsoft 365 inbox rules to hide their activity, and how to detect malicious mailbox rules and automate cleanup org-wide in seconds—not hours.",
  keywords: [
    "Microsoft 365 mailbox rule abuse",
    "malicious inbox rules",
    "inbox rule detection",
    "automated mailbox rule cleanup",
    "BEC inbox rule",
    "email forwarding rule attack",
    "hidden mailbox rules",
    "Microsoft 365 inbox rule forensics",
    "auto-forward rule detection",
    "Exchange Online rule abuse",
    "inbox rule remediation",
    "mailbox rule automation",
  ],
  openGraph: {
    title: "Microsoft 365 Mailbox Rule Abuse: Detection and Automated Cleanup",
    description:
      "Attackers use malicious inbox rules to hide their tracks after account takeover. Learn how to detect and automatically remove malicious mailbox rules across your tenant.",
    type: "article",
    publishedTime: "2026-06-10",
  },
}

const faqItems = [
  {
    question: "Why do attackers create inbox rules after compromising a Microsoft 365 account?",
    answer:
      "Attackers create malicious inbox rules to stay hidden and maintain persistence. Rules that auto-delete or move security alerts, password reset notifications, and replies from finance teams let the attacker operate undetected inside a compromised mailbox. Forwarding rules silently exfiltrate sensitive email to an external address even after the password is reset. The inbox rule is often the single most overlooked artifact in a business email compromise investigation.",
  },
  {
    question: "What are the most common signs of a malicious inbox rule?",
    answer:
      "The highest-signal indicators are: rules that forward or redirect mail to an external domain, rules that move messages to obscure folders like RSS Feeds or Conversation History, rules that permanently delete messages, rules with suspicious keyword filters (invoice, payment, password, security, phishing), and rules created shortly after a risky sign-in or from an unusual IP. Rules with blank or single-character names are also a strong tell.",
  },
  {
    question: "Can Microsoft 365 detect malicious inbox rules automatically?",
    answer:
      "Microsoft Defender for Office 365 and Microsoft Defender XDR generate alerts such as 'Suspicious inbox forwarding' and 'Suspicious inbox manipulation rule' when machine learning flags risky rule activity. However, these alerts only cover a subset of abuse patterns and still require an analyst to investigate and remediate. Full coverage requires combining these alerts with the Unified Audit Log and automated response.",
  },
  {
    question: "How do I find inbox rules across every mailbox in my tenant?",
    answer:
      "Use the Exchange Online PowerShell cmdlet Get-InboxRule iterated across every mailbox returned by Get-EXOMailbox, or query the Microsoft Graph API messageRules endpoint per user. Manually this can take hours for a large tenant. Automation platforms run this enumeration continuously and flag new or modified rules in near real time.",
  },
  {
    question: "Is it safe to automatically delete inbox rules?",
    answer:
      "Deleting a clearly malicious rule (external forwarding, auto-delete of security mail) is low-risk and reversible if you snapshot the rule first. The safest automation pattern is to disable the rule, capture a full copy of its definition for forensics, then alert an analyst before permanent deletion. Legitimate business rules should be preserved, so automated cleanup must use confidence scoring rather than blanket deletion.",
  },
]

export default function MailboxRuleAbusePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Microsoft 365 Mailbox Rule Abuse: Detection and Automated Cleanup",
    description:
      "Learn how attackers abuse Microsoft 365 inbox rules to hide their activity, and how to detect malicious mailbox rules and automate cleanup org-wide in seconds.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    author: {
      "@type": "Organization",
      name: "BitLyft",
    },
    publisher: {
      "@type": "Organization",
      name: "BitLyft",
    },
  }

  return (
    <div className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
              <span className="text-gray-500">10th June, 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Microsoft 365 Mailbox Rule Abuse: Detection and Automated Cleanup
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              After an attacker takes over a Microsoft 365 account, the very first thing they often do is create a
              malicious inbox rule — to hide security alerts, silently exfiltrate email, or quietly intercept
              financial conversations. Here is how to detect malicious mailbox rules across your entire tenant and
              automate cleanup in seconds, before the rule does its damage.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">

            {/* The Problem */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Mailbox Rules Are an Attacker&apos;s Favorite Hiding Place
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Inbox rules are a legitimate, everyday feature of Microsoft 365 — users create them to organize
                mail, forward messages to assistants, or file newsletters. That ubiquity is exactly what makes them
                so dangerous in the hands of an attacker. A single rule, created in seconds, can quietly defeat your
                detection capability and outlive a password reset. Inbox rules persist at the mailbox level, so they
                keep running even after the compromised credentials are rotated.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                In a typical business email compromise (BEC) attack, the malicious rule is the persistence mechanism
                that turns a one-time credential theft into an ongoing intrusion. These are the four rule-abuse
                patterns your team will encounter most often:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-900/50 border border-red-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Forward className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">External Forwarding / Exfiltration</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A rule that forwards or redirects all incoming mail — or only mail matching keywords like
                    <span className="font-mono text-red-300 mx-1">invoice</span> or
                    <span className="font-mono text-red-300 mx-1">wire</span> — to an external attacker-controlled
                    address. The data keeps leaking even after the account password is reset.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-orange-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Trash2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">Alert Suppression / Auto-Delete</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A rule that permanently deletes or marks-as-read messages containing terms like
                    <span className="font-mono text-orange-300 mx-1">security alert</span>,
                    <span className="font-mono text-orange-300 mx-1">sign-in</span>, or
                    <span className="font-mono text-orange-300 mx-1">password</span>, so the real user never sees
                    Microsoft&apos;s warnings that their account is compromised.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-yellow-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FolderOpen className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">Move-to-Obscure-Folder</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A rule that moves replies and notifications into rarely-checked folders like
                    <span className="font-mono text-yellow-300 mx-1">RSS Feeds</span>,
                    <span className="font-mono text-yellow-300 mx-1">Conversation History</span>, or
                    <span className="font-mono text-yellow-300 mx-1">Archive</span>. The conversation continues
                    without the legitimate user ever noticing.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-purple-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Filter className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">Conversation Hijack Filtering</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A rule targeting a specific vendor or finance contact, redirecting their replies to the
                    attacker so they can insert themselves into an active payment thread and reroute a wire
                    transfer — all while the victim sees a seemingly normal inbox.
                  </p>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  The Cost of Missing a Malicious Rule
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">70%</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Of BEC attacks involve a malicious inbox rule for persistence
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">9 sec</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Time it takes an attacker to create a forwarding rule after login
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400">30+ days</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Median time a hidden exfiltration rule runs before discovery
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                A password reset alone does not stop a malicious inbox rule. Unless the rule is found and removed,
                the attacker keeps a window into the mailbox. This is why mailbox rule review must be a mandatory,
                automated step in every account takeover and BEC response.
              </p>
            </section>

            {/* Detection Signals */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Detection Signals That Should Trigger Automated Review
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Effective detection combines Microsoft&apos;s native alerts with audit-log telemetry and rule
                content analysis. These are the highest-signal indicators that should feed your response playbook:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Defender Alert: Suspicious Inbox Forwarding / Manipulation Rule
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Microsoft Defender for Office 365 and Defender XDR raise
                        <span className="font-mono text-cyan-300 mx-1">Suspicious inbox forwarding</span> and
                        <span className="font-mono text-cyan-300 mx-1">Suspicious inbox manipulation rule</span>
                        alerts when ML detects risky rule creation. These should be a primary automated trigger.
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
                        New-InboxRule / Set-InboxRule in the Unified Audit Log
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Every rule creation and modification is logged as a
                        <span className="font-mono text-cyan-300 mx-1">New-InboxRule</span> or
                        <span className="font-mono text-cyan-300 mx-1">Set-InboxRule</span> operation in the
                        Microsoft 365 Unified Audit Log. Correlate these events with risky sign-in or
                        impossible-travel alerts on the same account to confirm malicious intent.
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
                        External Forwarding / Redirect Action
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Any rule with a <span className="font-mono text-cyan-300">ForwardTo</span>,
                        <span className="font-mono text-cyan-300 mx-1">RedirectTo</span>, or
                        <span className="font-mono text-cyan-300 mx-1">ForwardAsAttachmentTo</span> action
                        pointing to a domain outside your organization is high-risk by default and should be
                        flagged immediately, regardless of who created it.
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
                        Suspicious Keywords + Destructive Actions
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Rules that filter on security-related keywords (
                        <span className="font-mono text-cyan-300">password, security, alert, phishing, helpdesk</span>
                        ) combined with a <span className="font-mono text-cyan-300">DeleteMessage</span>,
                        <span className="font-mono text-cyan-300 mx-1">MarkAsRead</span>, or move-to-folder action
                        are almost always malicious — legitimate users rarely auto-delete security mail.
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
                        Blank-Named or Single-Character Rules
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Attackers frequently name rules <span className="font-mono text-cyan-300">&quot;.&quot;</span>,
                        <span className="font-mono text-cyan-300 mx-1">&quot;..&quot;</span>, or leave them blank to
                        make them harder to spot in Outlook&apos;s rule list. A non-descriptive rule name paired
                        with a forwarding or delete action is a reliable indicator of abuse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Automated Response Playbook */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Automated Mailbox Rule Cleanup Playbook
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                When any of the above signals fire, this playbook should execute automatically. Containment steps
                run without analyst intervention; permanent deletion is gated behind a forensic snapshot so nothing
                is lost and every action is reversible.
              </p>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  Mailbox Rule Cleanup Playbook
                </h3>

                {/* Step 1 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      1
                    </span>
                    <h4 className="text-lg font-semibold text-white">Trigger and Enumerate</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    On alert ingestion, enumerate every inbox rule on the affected mailbox (and optionally
                    tenant-wide if multiple accounts are implicated) via Microsoft Graph or Exchange Online
                    PowerShell:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-3">
                    <pre className="text-green-300">{`# Microsoft Graph API - list all rules for a mailbox
GET https://graph.microsoft.com/v1.0/users/{userId}/mailFolders/inbox/messageRules

# Exchange Online PowerShell - enumerate every mailbox
Get-EXOMailbox -ResultSize Unlimited | ForEach-Object {
  Get-InboxRule -Mailbox $_.PrimarySmtpAddress |
    Select-Object MailboxOwnerId, Name, Enabled, ForwardTo,
                  RedirectTo, DeleteMessage, MoveToFolder
}`}</pre>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      2
                    </span>
                    <h4 className="text-lg font-semibold text-white">Score Each Rule for Malicious Intent</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Apply a confidence score to every rule so legitimate business rules are preserved and only
                    high-risk rules are actioned. Weight the following signals:
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2 ml-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>External forward/redirect destination (highest weight)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Destructive action (delete / permanent delete / mark-as-read)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Security-related keyword filters in the rule conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Rule created within the alert window from a risky / unfamiliar IP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Blank or single-character rule name</span>
                    </li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      3
                    </span>
                    <h4 className="text-lg font-semibold text-white">Snapshot the Rule for Forensics</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Before any rule is disabled or deleted, capture a complete copy of its definition — name,
                    conditions, actions, destination addresses, and creation timestamp — into the incident record.
                    This preserves evidence and makes every action reversible.
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-green-300">{`Get-InboxRule -Mailbox $mailbox -Identity $ruleId |
  ConvertTo-Json -Depth 5 |
  Out-File "./forensics/$mailbox-$ruleId.json"`}</pre>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      4
                    </span>
                    <h4 className="text-lg font-semibold text-white">Disable or Remove the Malicious Rule</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    For high-confidence malicious rules, disable immediately to stop the bleeding, then remove
                    after the snapshot is stored. Disabling is instant and fully reversible:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-green-300">{`# Step 1: Disable instantly (reversible)
Disable-InboxRule -Mailbox $mailbox -Identity $ruleId

# Step 2: Remove after forensic snapshot is confirmed stored
Remove-InboxRule -Mailbox $mailbox -Identity $ruleId -Confirm:$false`}</pre>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="border-l-2 border-cyan-500/50 pl-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      5
                    </span>
                    <h4 className="text-lg font-semibold text-white">Check for Tenant-Wide Forwarding Settings</h4>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded font-medium">
                      Fully Automated
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Attackers also abuse mailbox-level forwarding (<span className="font-mono text-cyan-300">ForwardingSmtpAddress</span>)
                    which is separate from inbox rules. Audit and clear any unauthorized mailbox forwarding, and
                    confirm the tenant&apos;s outbound anti-spam policy blocks automatic external forwarding:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-green-300">{`# Find mailboxes with external forwarding configured
Get-EXOMailbox -ResultSize Unlimited |
  Where-Object { $_.ForwardingSmtpAddress -ne $null } |
  Select-Object PrimarySmtpAddress, ForwardingSmtpAddress

# Clear unauthorized forwarding
Set-Mailbox -Identity $mailbox -ForwardingSmtpAddress $null \`
  -DeliverToMailboxAndForward $false`}</pre>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="border-l-2 border-cyan-500/50 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                      6
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
                      <span>
                        Full forensic snapshot of every removed rule with conditions, actions, and destinations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Timeline: rule creation time, detection time, disable time, deletion time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>External forwarding destinations exported as IOCs for SIEM ingestion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Notification to the affected user and SOC confirming the malicious rule was removed
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
                    <p className="text-3xl font-bold text-red-400">2 - 6 hrs</p>
                    <p className="text-gray-400 text-sm mt-1">Manual: Enumerate rules → Identify → Remove</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-green-400">&lt; 60 sec</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Automated: Detection → Snapshot → Disable + Remove
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Hardening Your Posture */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Hardening Your Posture to Reduce Future Rule Abuse
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Automated response handles active abuse. Proactive hardening reduces how often attackers can create
                a working malicious rule in the first place. Build these into your post-incident hardening playbook:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Forward className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Block Automatic External Forwarding</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Set your Defender for Office 365 outbound spam policy to block automatic external forwarding
                    tenant-wide. This single setting neutralizes the most damaging class of malicious inbox rule —
                    silent data exfiltration — even if a rule is created.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Enforce Phishing-Resistant MFA</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Malicious inbox rules are a post-compromise artifact — they require a successful account
                    takeover first. Enforcing phishing-resistant MFA (FIDO2 / passkeys) via Conditional Access
                    cuts off the credential theft that makes rule abuse possible.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Continuous Rule Monitoring</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Do not wait for an alert. Continuously enumerate inbox rules across the tenant and diff against
                    a known-good baseline. Any new external-forwarding or destructive rule should generate an
                    immediate detection, independent of Microsoft&apos;s native alerting.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Enable Mailbox Auditing</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Confirm mailbox auditing is enabled tenant-wide so that
                    <span className="font-mono text-cyan-300 mx-1">New-InboxRule</span> and
                    <span className="font-mono text-cyan-300 mx-1">Set-InboxRule</span> operations are reliably
                    captured in the Unified Audit Log. Without auditing, you lose the primary telemetry for
                    detecting and investigating rule abuse.
                  </p>
                </div>
              </div>
            </section>

            {/* BitLyft AIR CTA Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  How BitLyft AIR® Automates Mailbox Rule Cleanup
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  BitLyft AIR® continuously enumerates inbox rules across your tenant and ingests Defender
                  suspicious-rule alerts, then executes this entire playbook automatically — enumerate, score,
                  snapshot, disable, remove, and clear unauthorized forwarding — in under 60 seconds. Every removed
                  rule is preserved in a forensic record and every action is reversible.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Filter className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Tenant-Wide Rule Visibility</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Continuously enumerates and baselines inbox rules across every mailbox so new malicious
                      rules surface instantly
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Trash2 className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Snapshot-Then-Remove</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Captures a full forensic copy of every rule before disabling and removing it — nothing is
                      lost and every action is reversible
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Confidence Scoring</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Preserves legitimate business rules and only actions high-confidence malicious rules,
                      avoiding disruptive false positives
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Full Audit Trail</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Complete incident documentation with rule definitions, timestamps, and SIEM-ready IOC export
                      generated automatically
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
                >
                  See Mailbox Rule Cleanup in Action
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>

              <div className="grid md:grid-cols-2 gap-6">
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
                  href="/blog/microsoft-365-risky-settings-detect-fix-automatically"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Microsoft 365 Risky Settings: Detect and Fix Automatically
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Detect and automatically remediate risky M365 configurations including mailbox forwarding and
                    delegate access.
                  </p>
                </Link>

                <Link
                  href="/blog/microsoft-entra-id-account-takeover-response-playbook"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Microsoft Entra ID Account Takeover Response Playbook
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Step-by-step containment, investigation, and remediation actions for Entra ID account takeover.
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
