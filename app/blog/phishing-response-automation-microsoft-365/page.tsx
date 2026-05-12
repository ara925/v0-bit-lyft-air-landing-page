import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, AlertTriangle, Clock, Shield, Mail, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Phishing Response Automation for Microsoft 365: Remove Malicious Email Org-Wide | BitLyft AIR®",
  description:
    "Learn how to automate phishing response in Microsoft 365 to remove malicious emails org-wide in seconds. Covers ZAP, Threat Explorer, Graph API purge, and automated playbooks.",
  keywords: [
    "phishing response automation",
    "Microsoft 365 phishing",
    "remove malicious email",
    "org-wide email purge",
    "M365 security automation",
    "Defender for Office 365",
    "email threat remediation",
    "automated phishing response",
  ],
  openGraph: {
    title: "Phishing Response Automation for Microsoft 365: Remove Malicious Email Org-Wide",
    description:
      "Automate phishing response in Microsoft 365 to remove malicious emails org-wide in seconds instead of hours.",
    type: "article",
    publishedTime: "2026-03-11",
  },
}

export default function PhishingResponseAutomationMicrosoft365Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16 md:py-24">
        <article className="container max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Article</span>
              <span className="text-sm text-muted-foreground">6th March, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Phishing Response Automation for Microsoft 365: Remove Malicious Email Org-Wide
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A single phishing email can compromise your entire organization in minutes. Manual investigation and
              removal takes hours. Here&apos;s how to automate phishing response to purge malicious emails org-wide in
              seconds.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {/* The Problem */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                The Phishing Response Time Problem
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When a phishing campaign targets your organization, the same malicious email often lands in dozens or
                hundreds of mailboxes simultaneously. The manual response workflow looks like this:
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-destructive" />
                  Typical Manual Phishing Response Timeline
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">T+0</span>
                    <span>User reports suspicious email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">T+15m</span>
                    <span>SOC analyst reviews the report</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">T+30m</span>
                    <span>Analyst confirms malicious intent, opens Threat Explorer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">T+45m</span>
                    <span>Analyst searches for all recipients of the email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">T+60m</span>
                    <span>Analyst initiates soft delete across all mailboxes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">T+90m</span>
                    <span>Analyst blocks sender/URL at the tenant level</span>
                  </li>
                </ul>
                <p className="text-destructive font-semibold mt-4">
                  Total time: 90+ minutes. By then, 10-15% of users may have already clicked.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Research shows the median time for a user to click a phishing link is under 60 seconds after opening the
                email. If your response takes 90 minutes, you&apos;ve already lost the race.
              </p>
            </section>

            {/* Microsoft 365 Native Options */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Microsoft 365 Native Phishing Response Options
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Microsoft Defender for Office 365 provides several built-in capabilities for phishing response. Here's
                what each does and where it falls short:
              </p>

              {/* ZAP */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Zero-Hour Auto Purge (ZAP)
                </h3>
                <p className="text-muted-foreground mb-4">
                  ZAP automatically removes emails from mailboxes after delivery if Microsoft's filters later determine
                  the message is malicious.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Strengths</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Fully automatic, no analyst action needed</li>
                      <li>• Works retroactively on delivered mail</li>
                      <li>• Covers spam, phishing, and malware</li>
                    </ul>
                  </div>
                  <div className="bg-destructive/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Limitations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Only triggers when Microsoft updates verdicts</li>
                      <li>• Delays can range from minutes to hours</li>
                      <li>• Won't catch zero-day or targeted attacks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Threat Explorer */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Threat Explorer Manual Purge
                </h3>
                <p className="text-muted-foreground mb-4">
                  Threat Explorer allows analysts to search for emails by sender, subject, URL, or attachment hash and
                  take bulk remediation actions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Strengths</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Flexible search across all mailboxes</li>
                      <li>• Bulk delete up to 200K messages</li>
                      <li>• Can block sender/URL/file at tenant level</li>
                    </ul>
                  </div>
                  <div className="bg-destructive/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Limitations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Requires manual analyst intervention</li>
                      <li>• Search and select process is slow</li>
                      <li>• No API automation out-of-the-box</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AIR */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Automated Investigation and Response (AIR)
                </h3>
                <p className="text-muted-foreground mb-4">
                  AIR automatically investigates alerts and can take remediation actions, including email purge, based
                  on its findings.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Strengths</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Investigates alerts automatically</li>
                      <li>• Can auto-remediate with approval or without</li>
                      <li>• Built into Defender for Office 365 Plan 2</li>
                    </ul>
                  </div>
                  <div className="bg-destructive/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Limitations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Limited to Microsoft's detection triggers</li>
                      <li>• Can't incorporate external threat intel</li>
                      <li>• Approval workflow adds delay</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Automated Playbook */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                The Automated Phishing Response Playbook
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To achieve sub-minute phishing response, you need to orchestrate multiple Microsoft 365 APIs into a
                single automated workflow. Here's the complete playbook:
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Org-Wide Phishing Purge Playbook
                </h3>

                {/* Step 1 */}
                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Step 1: Trigger Detection</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    The playbook can be triggered by multiple sources:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• User-reported phishing via Outlook add-in</li>
                    <li>• Microsoft Defender alert (high confidence phishing)</li>
                    <li>• External threat intelligence feed match</li>
                    <li>• SOC analyst manual trigger with IOCs</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Step 2: Extract Indicators of Compromise</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Automatically extract searchable IOCs from the reported email:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Sender address and sending infrastructure</li>
                    <li>• Subject line (exact and fuzzy match)</li>
                    <li>• URLs in body and attachments</li>
                    <li>• Attachment hashes (SHA256)</li>
                    <li>• Message-ID and Internet headers</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Step 3: Scope the Blast Radius</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Query Microsoft Graph to find all affected mailboxes:
                  </p>
                  <div className="bg-muted rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre>{`POST /security/threatSubmission/emailThreats
{
  "category": "phishing",
  "recipientEmailAddress": "*",
  "senderEmailAddress": "attacker@malicious.com",
  "subject": "Urgent: Invoice Payment Required"
}`}</pre>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3">
                    This returns a count and list of all mailboxes containing matching messages.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Step 4: Execute Org-Wide Purge</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Use the Microsoft Graph Security API to soft-delete all matching emails:
                  </p>
                  <div className="bg-muted rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre>{`POST /security/collaboration/emailPurge
{
  "query": {
    "senderAddress": "attacker@malicious.com",
    "subject": "Urgent: Invoice Payment Required"
  },
  "purgeType": "softDelete",
  "purgeAreas": ["mailboxes", "teamsMessages"]
}`}</pre>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3">
                    Soft delete moves emails to Recoverable Items (reversible for 14 days). Use hard delete only for
                    confirmed malware.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="border-l-2 border-primary pl-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Step 5: Block Future Delivery</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Prevent the same attack from recurring:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Add sender domain to Tenant Block List</li>
                    <li>• Add malicious URLs to URL Block List</li>
                    <li>• Add attachment hashes to File Block List</li>
                    <li>• Submit IOCs to Microsoft for global protection</li>
                  </ul>
                </div>

                {/* Step 6 */}
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-semibold text-foreground mb-2">Step 6: Notify and Document</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Close the loop with affected users and stakeholders:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Send automated notification to affected users</li>
                    <li>• Log all actions to SIEM with timestamps</li>
                    <li>• Create incident ticket with full timeline</li>
                    <li>• Flag any users who clicked for additional monitoring</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Automated Response Time
                </h4>
                <p className="text-muted-foreground">
                  With full automation, this entire playbook executes in <strong>30-60 seconds</strong> from trigger to
                  complete purge. Compare that to 90+ minutes for manual response.
                </p>
              </div>
            </section>

            {/* Decision Matrix */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Automation vs. Approval: Decision Matrix
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Not every phishing email should trigger fully automated purge. Use this matrix to decide when to
                auto-execute vs. require human approval:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-foreground">Scenario</th>
                      <th className="border border-border p-3 text-left text-foreground">Confidence</th>
                      <th className="border border-border p-3 text-left text-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">
                        Microsoft Defender high-confidence phishing + known bad URL
                      </td>
                      <td className="border border-border p-3 text-primary font-semibold">Very High</td>
                      <td className="border border-border p-3 text-muted-foreground">Full auto-purge</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">
                        External threat intel match (known campaign IOCs)
                      </td>
                      <td className="border border-border p-3 text-primary font-semibold">High</td>
                      <td className="border border-border p-3 text-muted-foreground">Full auto-purge</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">
                        Multiple user reports of same email (3+)
                      </td>
                      <td className="border border-border p-3 text-primary font-semibold">High</td>
                      <td className="border border-border p-3 text-muted-foreground">Full auto-purge</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">
                        Single user report, no matching threat intel
                      </td>
                      <td className="border border-border p-3 text-yellow-500 font-semibold">Medium</td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Auto-quarantine, require approval for purge
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">
                        Defender medium-confidence, internal sender spoofed
                      </td>
                      <td className="border border-border p-3 text-yellow-500 font-semibold">Medium</td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Auto-quarantine, require approval for purge
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">
                        Newly registered domain, no threat intel
                      </td>
                      <td className="border border-border p-3 text-destructive font-semibold">Low</td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Flag for analyst review only
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Guardrails */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Guardrails for Automated Email Purge
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Automated email deletion is powerful but risky. Implement these{" "}
                <Link href="/blog/guardrails-to-avoid-client-impact" className="text-primary hover:underline">
                  guardrails
                </Link>{" "}
                to prevent accidental business disruption:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Scope Limits
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Max 500 mailboxes per auto-purge action</li>
                    <li>• Above 500: require human approval</li>
                    <li>• Never auto-purge executive mailboxes</li>
                    <li>• Exclude shared/service mailboxes by default</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Rate Limits
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Max 3 org-wide purges per hour</li>
                    <li>• Cooldown period between purges: 10 min</li>
                    <li>• Daily cap: 10 total auto-purge operations</li>
                    <li>• Alert SOC if limits approached</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Trash2 className="w-5 h-5 text-destructive" />
                    Soft Delete First
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Always use soft delete for phishing</li>
                    <li>• Hard delete only for confirmed malware</li>
                    <li>• Maintain 14-day recovery window</li>
                    <li>• Log all purge actions for audit</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Validation Checks
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Verify sender isn&apos;t on trusted list</li>
                    <li>• Check domain age (new = higher risk)</li>
                    <li>• Cross-reference with user's recent contacts</li>
                    <li>• Require 2+ IOC matches for auto-action</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Measuring Success */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Measuring Phishing Response Success
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Track these metrics to demonstrate ROI and continuously improve your automated phishing response:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Speed Metrics</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>
                      <strong>Time to Detect:</strong> Report/alert to triage start
                    </li>
                    <li>
                      <strong>Time to Contain:</strong> Triage start to purge complete
                    </li>
                    <li>
                      <strong>Time to Block:</strong> Purge to tenant block in place
                    </li>
                    <li>
                      <strong>Total MTTR:</strong> End-to-end response time
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Effectiveness Metrics</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>
                      <strong>Click Rate:</strong> % of recipients who clicked before purge
                    </li>
                    <li>
                      <strong>Credential Exposure:</strong> Users who entered creds
                    </li>
                    <li>
                      <strong>False Positive Rate:</strong> Legitimate emails purged
                    </li>
                    <li>
                      <strong>Coverage:</strong> % of phishing caught by automation
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How BitLyft AIR Helps */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                How BitLyft AIR® Automates Phishing Response
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                BitLyft AIR® integrates directly with Microsoft 365 to provide turnkey phishing response automation:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">One-Click Org-Wide Purge:</strong>
                    <span className="text-muted-foreground">
                      {" "}
                      Pre-built playbook searches all mailboxes and executes purge via Graph API in under 60 seconds
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Multi-Source Triggers:</strong>
                    <span className="text-muted-foreground">
                      {" "}
                      Triggers from Defender alerts, user reports, or external threat intel feeds
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Built-In Guardrails:</strong>
                    <span className="text-muted-foreground">
                      {" "}
                      Configurable scope limits, rate limits, VIP exclusions, and approval workflows
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Automatic Blocking:</strong>
                    <span className="text-muted-foreground">
                      {" "}
                      Adds sender, URL, and file hashes to Tenant Block Lists automatically
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">User Notification:</strong>
                    <span className="text-muted-foreground">
                      {" "}
                      Sends customizable notifications to affected users explaining the removed threat
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Can automated purge delete legitimate emails by mistake?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, which is why guardrails are critical. Always use soft delete (recoverable for 14 days), set
                    scope limits, and require approval for large-scale purges. Monitor false positive rates and tune
                    detection thresholds accordingly.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    What Microsoft 365 license is required for automated purge?
                  </h3>
                  <p className="text-muted-foreground">
                    Full automation via Graph API requires Microsoft Defender for Office 365 Plan 2 (included in
                    Microsoft 365 E5) or the standalone add-on. Plan 1 provides manual Threat Explorer but lacks API
                    access for automation.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    How do we handle phishing in Microsoft Teams messages?
                  </h3>
                  <p className="text-muted-foreground">
                    The same Graph API purge endpoint supports Teams messages. Set &quot;purgeAreas&quot; to include
                    &quot;teamsMessages&quot; to remove malicious links from both email and Teams simultaneously.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Should we notify users when we remove a phishing email?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes. User notification serves two purposes: it explains why an expected email disappeared, and it
                    reinforces security awareness by showing the system protected them. Keep notifications brief and
                    non-alarming.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stop Phishing in Seconds, Not Hours
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                See how BitLyft AIR® automates phishing response for Microsoft 365 environments with built-in guardrails
                and one-click org-wide purge.
              </p>
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
