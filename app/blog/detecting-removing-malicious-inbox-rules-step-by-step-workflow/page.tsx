import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Mail,
  Filter,
  Trash2,
  Eye,
  Forward,
  Search,
  Camera,
  ClipboardCheck,
  Zap,
  Terminal,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Detecting and Removing Malicious Inbox Rules: Step-by-Step Workflow | BitLyft AIR®",
  description:
    "A complete step-by-step workflow for detecting and removing malicious Microsoft 365 inbox rules—from alert trigger to forensic snapshot, removal, verification, and post-incident review.",
  keywords: [
    "detect malicious inbox rules",
    "remove malicious inbox rules",
    "inbox rule investigation workflow",
    "malicious mailbox rule removal",
    "Get-InboxRule PowerShell",
    "Remove-InboxRule",
    "inbox rule incident response",
    "Microsoft 365 inbox rule runbook",
    "BEC inbox rule remediation",
    "inbox rule forensics",
    "auto-forward rule investigation",
    "Exchange Online rule cleanup steps",
  ],
  openGraph: {
    title: "Detecting and Removing Malicious Inbox Rules: Step-by-Step Workflow",
    description:
      "The exact step-by-step runbook to detect, snapshot, remove, and verify malicious Microsoft 365 inbox rules during an account takeover or BEC investigation.",
    type: "article",
    publishedTime: "2026-07-01",
  },
}

const faqItems = [
  {
    question: "What is the first step when I suspect a malicious inbox rule?",
    answer:
      "Before touching the rule, scope the compromise and capture evidence. Identify the affected mailbox, pull its sign-in and audit history, then snapshot every existing inbox rule with Get-InboxRule so you have a forensic copy of the rule definition. Removing a rule before capturing it destroys evidence you will need for the investigation, insurance, or legal review. Only after the snapshot should you disable and remove the malicious rule.",
  },
  {
    question: "How do I list all inbox rules for a compromised mailbox?",
    answer:
      "Connect to Exchange Online PowerShell and run Get-InboxRule -Mailbox user@domain.com | Format-List to see every rule and its full definition, including ForwardTo, RedirectTo, DeleteMessage, and MoveToFolder actions. For tenant-wide review, iterate Get-InboxRule across every mailbox returned by Get-EXOMailbox, or query the Microsoft Graph API messageRules endpoint per user.",
  },
  {
    question: "How do I remove a malicious inbox rule?",
    answer:
      "Use Remove-InboxRule -Mailbox user@domain.com -Identity 'RuleName' in Exchange Online PowerShell, or DELETE the rule via the Microsoft Graph messageRules endpoint. Always disable the rule first with Disable-InboxRule and capture a full copy of its definition before deleting, so the action is reversible and the evidence is preserved.",
  },
  {
    question: "How do I verify the rule is actually gone across the tenant?",
    answer:
      "Re-run Get-InboxRule for the affected mailbox and confirm the rule no longer appears, then check the Unified Audit Log for the Remove-InboxRule operation to confirm it committed. Also verify no tenant-level or transport forwarding remains by checking ForwardingSMTPAddress and ForwardingAddress on the mailbox and reviewing outbound spam and transport rules.",
  },
  {
    question: "Can this entire workflow be automated?",
    answer:
      "Yes. A security automation platform can trigger on a Defender suspicious-rule alert or a New-InboxRule audit event, automatically enumerate and score the rule, snapshot it for forensics, disable and remove high-confidence malicious rules, clear unauthorized forwarding, and verify removal—completing the entire runbook in under a minute while preserving a full audit trail and leaving legitimate business rules untouched.",
  },
]

export default function InboxRuleWorkflowPage() {
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
    headline: "Detecting and Removing Malicious Inbox Rules: Step-by-Step Workflow",
    description:
      "A complete step-by-step workflow for detecting and removing malicious Microsoft 365 inbox rules—from alert trigger to forensic snapshot, removal, verification, and post-incident review.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: {
      "@type": "Organization",
      name: "BitLyft",
    },
    publisher: {
      "@type": "Organization",
      name: "BitLyft",
    },
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Detect and Remove Malicious Inbox Rules in Microsoft 365",
    description:
      "A seven-step workflow to detect, capture, remove, and verify malicious inbox rules during a Microsoft 365 account takeover or business email compromise investigation.",
    step: [
      { "@type": "HowToStep", name: "Confirm the trigger and scope the mailbox", position: 1 },
      { "@type": "HowToStep", name: "Preserve evidence and snapshot every rule", position: 2 },
      { "@type": "HowToStep", name: "Analyze each rule against malicious indicators", position: 3 },
      { "@type": "HowToStep", name: "Disable the malicious rule immediately", position: 4 },
      { "@type": "HowToStep", name: "Remove the rule and clear unauthorized forwarding", position: 5 },
      { "@type": "HowToStep", name: "Verify removal across the tenant", position: 6 },
      { "@type": "HowToStep", name: "Document, hunt, and harden", position: 7 },
    ],
  }

  return (
    <div className="min-h-screen bg-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
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
              <span className="text-gray-500">1st July, 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Detecting and Removing Malicious Inbox Rules: Step-by-Step Workflow
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              When an inbox rule alert fires, the order of your next actions matters. Capture evidence before you
              delete, remove the rule before it does more damage, and verify the tenant is clean before you close
              the ticket. This is the exact seven-step runbook — with the PowerShell and Microsoft Graph commands
              for each step — to detect and remove malicious Microsoft 365 inbox rules without destroying the
              forensic trail.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            {/* Intro / context */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Before You Start: Get the Order Right</h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Malicious inbox rules are the most common persistence mechanism in business email compromise. For a
                deeper breakdown of <em>why</em> attackers use them and the abuse patterns to watch for, see our
                companion guide on{" "}
                <Link
                  href="/blog/microsoft-365-mailbox-rule-abuse-detection-automated-cleanup"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  Microsoft 365 mailbox rule abuse
                </Link>
                . This article is the hands-on runbook: the precise sequence of actions to take once you suspect a
                rule is malicious.
              </p>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  The One Mistake That Ruins the Investigation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Do not delete the rule first. The single most common error responders make is spotting a
                  forwarding rule and immediately removing it. That destroys the rule definition — the exact
                  keywords, external address, and actions — which is the evidence you need to understand what was
                  exfiltrated, notify affected parties, and satisfy cyber-insurance and legal requirements.
                  <span className="text-white font-medium"> Snapshot first, then remove.</span>
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The workflow below assumes you are connected to Exchange Online PowerShell (
                <span className="font-mono text-cyan-300">Connect-ExchangeOnline</span>) with an account that holds
                the appropriate eDiscovery or security-admin role, or that you are calling the Microsoft Graph API
                with <span className="font-mono text-cyan-300">MailboxSettings.ReadWrite</span> permission.
              </p>
            </section>

            {/* Step 1 */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-400 text-sm font-medium">Step 1</p>
                  <h2 className="text-2xl font-bold text-white">Confirm the Trigger and Scope the Mailbox</h2>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Every investigation starts with a trigger — a Defender{" "}
                <span className="font-mono text-cyan-300">Suspicious inbox forwarding</span> alert, a{" "}
                <span className="font-mono text-cyan-300">New-InboxRule</span> event in the Unified Audit Log, or a
                user report. Before touching rules, confirm the mailbox is actually compromised by correlating the
                rule activity with sign-in telemetry.
              </p>

              <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400 text-sm font-medium">Check recent risky sign-ins for the user</span>
                </div>
                <pre className="text-sm text-cyan-100 overflow-x-auto">
                  <code>{`# Microsoft Graph PowerShell
Get-MgAuditLogSignIn -Filter "userPrincipalName eq 'user@domain.com'" |
  Select-Object CreatedDateTime, IpAddress, `+"`"+`
    @{n='Risk';e={$_.RiskLevelDuringSignIn}}, `+"`"+`
    @{n='City';e={$_.Location.City}} |
  Sort-Object CreatedDateTime -Descending | Select-Object -First 20`}</code>
                </pre>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Note the timestamp of the suspicious sign-in. Any inbox rule created or modified shortly after a
                risky or impossible-travel login is your prime suspect. Record the affected UPN, the attacker IP,
                and the rule creation time — you will need these for the audit trail in Step 7.
              </p>
            </section>

            {/* Step 2 */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-400 text-sm font-medium">Step 2</p>
                  <h2 className="text-2xl font-bold text-white">Preserve Evidence and Snapshot Every Rule</h2>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Capture a full copy of every inbox rule on the mailbox <em>before</em> making any changes. Export
                the complete definition so the forwarding address, keyword filters, and actions are preserved for
                forensics.
              </p>

              <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400 text-sm font-medium">Snapshot all rules to a forensic file</span>
                </div>
                <pre className="text-sm text-cyan-100 overflow-x-auto">
                  <code>{`# Exchange Online PowerShell
$mbx = "user@domain.com"
Get-InboxRule -Mailbox $mbx |
  Select-Object Name, Enabled, Priority, From, SubjectContainsWords,
    BodyContainsWords, ForwardTo, RedirectTo, ForwardAsAttachmentTo,
    MoveToFolder, DeleteMessage, MarkAsRead, StopProcessingRules |
  Export-Clixml "./evidence/$($mbx)_inboxrules_$(Get-Date -f yyyyMMdd_HHmm).xml"`}</code>
                </pre>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Use <span className="font-mono text-cyan-300">Export-Clixml</span> (not CSV) so nested action
                objects are preserved exactly. Store the file in a controlled evidence location. This snapshot is
                what makes every subsequent action reversible — if you remove a legitimate rule by mistake, you can
                recreate it precisely from this export.
              </p>
            </section>

            {/* Step 3 */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Filter className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-400 text-sm font-medium">Step 3</p>
                  <h2 className="text-2xl font-bold text-white">Analyze Each Rule Against Malicious Indicators</h2>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                With the snapshot safe, inspect each rule. Score it against the high-confidence indicators below —
                the more that match, the more certain the rule is malicious.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 bg-zinc-900/50 border border-red-500/20 rounded-lg p-4">
                  <Forward className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-medium">External forward/redirect:</span> any{" "}
                    <span className="font-mono text-red-300">ForwardTo</span>,{" "}
                    <span className="font-mono text-red-300">RedirectTo</span>, or{" "}
                    <span className="font-mono text-red-300">ForwardAsAttachmentTo</span> pointing to a domain
                    outside your tenant.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-zinc-900/50 border border-orange-500/20 rounded-lg p-4">
                  <Trash2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-medium">Destructive action + security keywords:</span>{" "}
                    <span className="font-mono text-orange-300">DeleteMessage</span> or{" "}
                    <span className="font-mono text-orange-300">MarkAsRead</span> combined with filters on{" "}
                    <span className="font-mono text-orange-300">password, security, sign-in, phishing</span>.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-zinc-900/50 border border-yellow-500/20 rounded-lg p-4">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-medium">Move-to-obscure-folder:</span>{" "}
                    <span className="font-mono text-yellow-300">MoveToFolder</span> targeting RSS Feeds,
                    Conversation History, or Archive to hide replies.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-zinc-900/50 border border-purple-500/20 rounded-lg p-4">
                  <Eye className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-medium">Blank or junk name:</span> rules named{" "}
                    <span className="font-mono text-purple-300">&quot;.&quot;</span>,{" "}
                    <span className="font-mono text-purple-300">&quot;,&quot;</span>, or a single character,
                    created around the suspicious sign-in time.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Preserve legitimate rules. A user forwarding newsletters to a personal folder is not an incident.
                The goal is to action high-confidence malicious rules while leaving normal business rules intact —
                blanket deletion causes its own outage.
              </p>
            </section>

            {/* Step 4 */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-400 text-sm font-medium">Step 4</p>
                  <h2 className="text-2xl font-bold text-white">Disable the Malicious Rule Immediately</h2>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Disabling stops the rule from running instantly while keeping it intact for any final review.
                Do this the moment you confirm intent — every minute a forwarding rule stays active is more data
                leaving your tenant.
              </p>

              <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400 text-sm font-medium">Disable a specific rule</span>
                </div>
                <pre className="text-sm text-cyan-100 overflow-x-auto">
                  <code>{`# Exchange Online PowerShell
Disable-InboxRule -Mailbox "user@domain.com" -Identity "RuleName"

# Confirm it is now disabled
Get-InboxRule -Mailbox "user@domain.com" -Identity "RuleName" |
  Select-Object Name, Enabled`}</code>
                </pre>
              </div>

              <p className="text-gray-300 leading-relaxed">
                In parallel, contain the account itself — revoke sessions and reset credentials — so the attacker
                cannot simply recreate the rule. See our{" "}
                <Link
                  href="/blog/microsoft-entra-id-account-takeover-response-playbook"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  Entra ID account takeover playbook
                </Link>{" "}
                for the full containment sequence.
              </p>
            </section>

            {/* Step 5 */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trash2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-400 text-sm font-medium">Step 5</p>
                  <h2 className="text-2xl font-bold text-white">Remove the Rule and Clear Unauthorized Forwarding</h2>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Once contained and captured, remove the rule. Then check for the forwarding attackers set at the{" "}
                <em>mailbox</em> level, which inbox-rule enumeration alone will miss.
              </p>

              <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400 text-sm font-medium">Remove the rule + clear mailbox forwarding</span>
                </div>
                <pre className="text-sm text-cyan-100 overflow-x-auto">
                  <code>{`# Remove the malicious inbox rule
Remove-InboxRule -Mailbox "user@domain.com" -Identity "RuleName" -Confirm:$false

# Clear mailbox-level forwarding (a separate attacker technique)
Set-Mailbox -Identity "user@domain.com" `+"`"+`
  -ForwardingSMTPAddress $null -ForwardingAddress $null `+"`"+`
  -DeliverToMailboxAndForward $false`}</code>
                </pre>
              </div>

              <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400 text-sm font-medium">
                    Equivalent via Microsoft Graph API
                  </span>
                </div>
                <pre className="text-sm text-cyan-100 overflow-x-auto">
                  <code>{`DELETE https://graph.microsoft.com/v1.0/users/{id}/mailFolders/inbox/messageRules/{ruleId}
Authorization: Bearer <token>   # requires MailboxSettings.ReadWrite`}</code>
                </pre>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Attackers frequently set both an inbox rule <em>and</em> mailbox-level forwarding so that removing
                one leaves the other running. Always clear both.
              </p>
            </section>

            {/* Step 6 */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-400 text-sm font-medium">Step 6</p>
                  <h2 className="text-2xl font-bold text-white">Verify Removal Across the Tenant</h2>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Never close the ticket on assumption. Confirm the rule is gone, the removal committed to the audit
                log, and no forwarding remains anywhere in the tenant.
              </p>

              <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400 text-sm font-medium">Verify removal and hunt tenant-wide</span>
                </div>
                <pre className="text-sm text-cyan-100 overflow-x-auto">
                  <code>{`# 1. Confirm the rule is gone for the mailbox
Get-InboxRule -Mailbox "user@domain.com"

# 2. Confirm the removal committed in the Unified Audit Log
Search-UnifiedAuditLog -Operations "Remove-InboxRule" `+"`"+`
  -StartDate (Get-Date).AddDays(-1) -EndDate (Get-Date)

# 3. Hunt every mailbox for remaining external forwarding
Get-EXOMailbox -ResultSize Unlimited |
  ForEach-Object {
    Get-InboxRule -Mailbox $_.PrimarySmtpAddress |
      Where-Object { $_.ForwardTo -or $_.RedirectTo -or $_.ForwardAsAttachmentTo } |
      Select-Object @{n='Mailbox';e={$_.MailboxOwnerId}}, Name, ForwardTo, RedirectTo
  }`}</code>
                </pre>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The tenant-wide sweep in step 3 above catches the common case where the same attacker planted rules
                in multiple mailboxes. If you find others, run this same workflow for each one.
              </p>
            </section>

            {/* Step 7 */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-400 text-sm font-medium">Step 7</p>
                  <h2 className="text-2xl font-bold text-white">Document, Hunt, and Harden</h2>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Close the loop with a record and a hardening action so the same rule cannot reappear:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="text-white font-medium">Document</span> the rule definition, external address,
                    creation time, attacker IP, and every action taken — pulled from your Step 2 snapshot and Step 1
                    telemetry.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="text-white font-medium">Notify</span> anyone whose data may have been
                    exfiltrated through the forwarding rule, and flag any in-flight financial threads for
                    verification.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="text-white font-medium">Harden</span> by blocking automatic external
                    forwarding tenant-wide in the Defender outbound spam policy, enforcing phishing-resistant MFA,
                    and enabling continuous inbox-rule monitoring against a known-good baseline.
                  </span>
                </li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                For the full set of preventive controls, see our guide on{" "}
                <Link
                  href="/blog/microsoft-365-risky-settings-detect-fix-automatically"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  detecting and fixing risky Microsoft 365 settings automatically
                </Link>
                .
              </p>
            </section>

            {/* BitLyft AIR CTA Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  Run This Entire Workflow Automatically with BitLyft AIR®
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Every step above — trigger, scope, snapshot, analyze, disable, remove, verify, and document — can
                  be executed by BitLyft AIR® in under a minute. It triggers on Defender suspicious-rule alerts and{" "}
                  <span className="font-mono text-cyan-300">New-InboxRule</span> audit events, preserves a forensic
                  copy of every rule before acting, removes only high-confidence malicious rules, clears mailbox
                  forwarding, and verifies the tenant is clean — all while leaving legitimate business rules
                  untouched.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Snapshot-Then-Remove</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Captures a full forensic copy of every rule before disabling and removing it — every action is
                      reversible
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Filter className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Confidence Scoring</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Actions only high-confidence malicious rules and preserves legitimate business rules to avoid
                      disruption
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Tenant-Wide Verification</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Sweeps every mailbox for remaining forwarding and confirms removal in the Unified Audit Log
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ClipboardCheck className="w-5 h-5 text-cyan-400" />
                      <p className="text-white font-medium">Automatic Documentation</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Generates complete incident records with rule definitions, timestamps, and SIEM-ready IOC
                      export
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
                >
                  See Automated Inbox Rule Removal in Action
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
                  href="/blog/microsoft-365-mailbox-rule-abuse-detection-automated-cleanup"
                  className="block bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Microsoft 365 Mailbox Rule Abuse: Detection and Automated Cleanup
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Why attackers abuse inbox rules and how to detect and automate cleanup org-wide.
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
