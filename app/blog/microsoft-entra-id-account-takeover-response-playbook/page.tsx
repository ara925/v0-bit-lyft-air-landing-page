import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, Clock, Users, Key, Lock, Activity } from "lucide-react"

export const metadata: Metadata = {
  title: "Microsoft Entra ID Account Takeover Response Playbook | BitLyft AIR",
  description:
    "Complete response playbook for Microsoft Entra ID account takeover incidents. Step-by-step containment, investigation, and remediation actions with automation guidance.",
  keywords: [
    "Microsoft Entra ID",
    "account takeover response",
    "Azure AD security",
    "identity protection playbook",
    "ATO response",
    "Entra ID compromised account",
    "token theft response",
    "identity threat detection",
  ],
  openGraph: {
    title: "Microsoft Entra ID Account Takeover Response Playbook",
    description:
      "Complete response playbook for Microsoft Entra ID account takeover incidents with automation guidance.",
    type: "article",
  },
}

export default function MicrosoftEntraIdAccountTakeoverPlaybookPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              <span>Security Playbook</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Microsoft Entra ID Account Takeover Response Playbook
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A complete, step-by-step playbook for detecting, containing, and remediating account takeover incidents in
              Microsoft Entra ID. Includes automation recommendations for each phase.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>11th March, 2026</span>
              <span className="text-border">|</span>
              <span>18 min read</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="bg-card border border-border rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">In This Playbook</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#attack-timeline" className="hover:text-primary transition-colors">
                  1. Understanding the ATO Attack Timeline
                </a>
              </li>
              <li>
                <a href="#detection-triggers" className="hover:text-primary transition-colors">
                  2. Detection Triggers and Alert Sources
                </a>
              </li>
              <li>
                <a href="#immediate-containment" className="hover:text-primary transition-colors">
                  3. Immediate Containment Actions (First 5 Minutes)
                </a>
              </li>
              <li>
                <a href="#investigation" className="hover:text-primary transition-colors">
                  4. Investigation and Scope Assessment
                </a>
              </li>
              <li>
                <a href="#remediation" className="hover:text-primary transition-colors">
                  5. Full Remediation Checklist
                </a>
              </li>
              <li>
                <a href="#recovery" className="hover:text-primary transition-colors">
                  6. Recovery and User Communication
                </a>
              </li>
              <li>
                <a href="#automation-matrix" className="hover:text-primary transition-colors">
                  7. Automation Decision Matrix
                </a>
              </li>
              <li>
                <a href="#token-theft" className="hover:text-primary transition-colors">
                  8. Special Case: Token Theft Response
                </a>
              </li>
            </ul>
          </nav>

          {/* Introduction */}
          <section className="prose prose-lg prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Account takeover (ATO) in Microsoft Entra ID is one of the most damaging identity-based attacks an
              organization can face. Once an attacker gains access to a legitimate user account, they can move laterally,
              exfiltrate data, establish persistence, and even escalate to admin-level access—all while appearing as a
              trusted insider.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The average time to detect an account takeover is{" "}
              <strong className="text-foreground">207 days</strong>. The average cost of a breach involving compromised
              credentials is <strong className="text-foreground">$4.5 million</strong>. This playbook is designed to
              compress your detection-to-containment time from hours to minutes.
            </p>
          </section>

          {/* Attack Timeline */}
          <section id="attack-timeline" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">1. Understanding the ATO Attack Timeline</h2>
            <p className="text-muted-foreground mb-6">
              Before diving into response actions, you need to understand how attackers operate once they have
              credentials. This informs which containment actions matter most.
            </p>

            <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
              <div className="bg-destructive/10 border-b border-border px-6 py-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-destructive" />
                  Typical ATO Attack Progression
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-sm font-mono text-primary">0-2 min</div>
                    <div>
                      <p className="text-foreground font-medium">Initial Access</p>
                      <p className="text-muted-foreground text-sm">
                        Attacker logs in with stolen credentials (phishing, credential stuffing, infostealer malware)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-sm font-mono text-primary">2-5 min</div>
                    <div>
                      <p className="text-foreground font-medium">Reconnaissance</p>
                      <p className="text-muted-foreground text-sm">
                        Enumerate mailbox, OneDrive, SharePoint access. Check admin roles and group memberships.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-sm font-mono text-primary">5-15 min</div>
                    <div>
                      <p className="text-foreground font-medium">Persistence</p>
                      <p className="text-muted-foreground text-sm">
                        Register MFA device, create inbox rules, add OAuth app consent, generate app passwords
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-sm font-mono text-primary">15-60 min</div>
                    <div>
                      <p className="text-foreground font-medium">Lateral Movement / Data Access</p>
                      <p className="text-muted-foreground text-sm">
                        Access sensitive files, email financial targets, attempt privilege escalation
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-sm font-mono text-primary">60+ min</div>
                    <div>
                      <p className="text-foreground font-medium">Impact</p>
                      <p className="text-muted-foreground text-sm">
                        BEC fraud, data exfiltration, ransomware deployment, vendor/customer compromise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-foreground font-medium mb-2">Key Insight</p>
              <p className="text-muted-foreground">
                Persistence happens within the first 15 minutes. If you only revoke the session but miss the OAuth app
                or new MFA device, the attacker is back in within hours. Your playbook must address all persistence
                mechanisms.
              </p>
            </div>
          </section>

          {/* Detection Triggers */}
          <section id="detection-triggers" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">2. Detection Triggers and Alert Sources</h2>
            <p className="text-muted-foreground mb-6">
              ATO incidents can surface through multiple detection channels. Understanding where alerts originate helps
              you triage faster.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Entra ID Protection Signals
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Unfamiliar sign-in properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Atypical travel (impossible travel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Anomalous token / token issuer anomaly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Password spray detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Leaked credentials (dark web monitoring)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Suspicious inbox forwarding rule</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Behavioral / SIEM Signals
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>New MFA device registered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>OAuth app consent granted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Mass file download from SharePoint/OneDrive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Mailbox delegation added</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>User-reported phishing (clicked link)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sentinel / Defender XDR multi-stage incident</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Risk Level Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 text-foreground font-semibold border-b border-border">Signal</th>
                    <th className="text-left p-4 text-foreground font-semibold border-b border-border">Risk Level</th>
                    <th className="text-left p-4 text-foreground font-semibold border-b border-border">Auto-Trigger?</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-4">Impossible travel + new MFA device</td>
                    <td className="p-4"><span className="text-destructive font-medium">Critical</span></td>
                    <td className="p-4">Yes - immediate containment</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Leaked credentials (confirmed breach)</td>
                    <td className="p-4"><span className="text-destructive font-medium">Critical</span></td>
                    <td className="p-4">Yes - force password reset</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Anomalous token detection</td>
                    <td className="p-4"><span className="text-orange-500 font-medium">High</span></td>
                    <td className="p-4">Yes - revoke sessions</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">OAuth app with mail/files scope</td>
                    <td className="p-4"><span className="text-orange-500 font-medium">High</span></td>
                    <td className="p-4">Semi - notify + queue revoke</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Unfamiliar sign-in (new device/location)</td>
                    <td className="p-4"><span className="text-yellow-500 font-medium">Medium</span></td>
                    <td className="p-4">No - enrich + investigate</td>
                  </tr>
                  <tr>
                    <td className="p-4">Inbox rule created</td>
                    <td className="p-4"><span className="text-yellow-500 font-medium">Medium</span></td>
                    <td className="p-4">Semi - alert + auto-disable rule</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Immediate Containment */}
          <section id="immediate-containment" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              3. Immediate Containment Actions (First 5 Minutes)
            </h2>
            <p className="text-muted-foreground mb-6">
              When a high-confidence ATO alert fires, these actions should execute immediately—ideally automated with
              human notification.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: 1,
                  action: "Revoke All Active Sessions",
                  detail: "Invalidate all refresh tokens and sign-out from all devices",
                  method: "Graph API: revokeSignInSessions",
                  automation: "Full Auto",
                  icon: Lock,
                },
                {
                  step: 2,
                  action: "Block Sign-In (Temporary)",
                  detail: "Set accountEnabled to false or apply block CA policy",
                  method: "Graph API: Update user or Conditional Access",
                  automation: "Full Auto",
                  icon: Shield,
                },
                {
                  step: 3,
                  action: "Mark User as Compromised",
                  detail: "Elevate risk level in Entra ID Protection to High",
                  method: "Graph API: confirmCompromised",
                  automation: "Full Auto",
                  icon: AlertTriangle,
                },
                {
                  step: 4,
                  action: "Notify SOC / On-Call",
                  detail: "Page analyst with user details, alert source, and risk score",
                  method: "Webhook to PagerDuty/Slack/Teams",
                  automation: "Full Auto",
                  icon: Users,
                },
                {
                  step: 5,
                  action: "Capture Forensic Snapshot",
                  detail: "Pull recent sign-in logs, audit logs, MFA methods, OAuth apps",
                  method: "Graph API batch query",
                  automation: "Full Auto",
                  icon: Activity,
                },
              ].map((item) => (
                <div key={item.step} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-primary" />
                          {item.action}
                        </h3>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                          {item.automation}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{item.detail}</p>
                      <p className="text-xs text-muted-foreground font-mono bg-muted/30 px-2 py-1 rounded inline-block">
                        {item.method}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <p className="text-foreground font-medium mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Critical Warning
              </p>
              <p className="text-muted-foreground">
                Do NOT skip step 2 (block sign-in). Session revocation alone is insufficient—the attacker can
                re-authenticate immediately if they still have credentials. Block first, then proceed with credential
                reset.
              </p>
            </div>
          </section>

          {/* Investigation */}
          <section id="investigation" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">4. Investigation and Scope Assessment</h2>
            <p className="text-muted-foreground mb-6">
              With the account contained, the next phase is understanding what the attacker accessed and whether they
              established persistence.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">Investigation Checklist</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-primary mb-3">Access Analysis</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Review sign-in logs (past 30 days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Identify all IPs and locations used</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Check applications accessed (Graph, Exchange, SharePoint)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Review mailbox activity (emails sent, read, forwarded)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Check OneDrive/SharePoint file access and downloads</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-primary mb-3">Persistence Analysis</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>List all MFA methods (look for new devices)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Review OAuth app consents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Check inbox rules (forwarding, delete rules)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Review mailbox delegates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" disabled />
                      <span>Check for app passwords created</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UAL Events Table */}
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Unified Audit Log (UAL) Events</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 text-foreground font-semibold border-b border-border">Operation</th>
                    <th className="text-left p-3 text-foreground font-semibold border-b border-border">Indicates</th>
                    <th className="text-left p-3 text-foreground font-semibold border-b border-border">Risk</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-3 font-mono text-xs">Add registered owner to device</td>
                    <td className="p-3">New MFA device added</td>
                    <td className="p-3"><span className="text-destructive">Critical</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-mono text-xs">Consent to application</td>
                    <td className="p-3">OAuth app granted access</td>
                    <td className="p-3"><span className="text-destructive">Critical</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-mono text-xs">New-InboxRule</td>
                    <td className="p-3">Mail forwarding/hiding rule</td>
                    <td className="p-3"><span className="text-orange-500">High</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-mono text-xs">Set-Mailbox (ForwardingSmtpAddress)</td>
                    <td className="p-3">External mail forwarding</td>
                    <td className="p-3"><span className="text-destructive">Critical</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-mono text-xs">Add-MailboxPermission</td>
                    <td className="p-3">Mailbox delegation added</td>
                    <td className="p-3"><span className="text-orange-500">High</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs">FileDownloaded (bulk)</td>
                    <td className="p-3">Mass file exfiltration</td>
                    <td className="p-3"><span className="text-destructive">Critical</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Remediation Checklist */}
          <section id="remediation" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">5. Full Remediation Checklist</h2>
            <p className="text-muted-foreground mb-6">
              After investigation, execute these remediation actions to fully evict the attacker and prevent re-entry.
            </p>

            <div className="space-y-4">
              {[
                {
                  category: "Credential Reset",
                  items: [
                    { action: "Force password reset (require change at next sign-in)", auto: "Full Auto" },
                    { action: "Revoke all refresh tokens (again, post-password reset)", auto: "Full Auto" },
                    { action: "Delete any app passwords", auto: "Full Auto" },
                  ],
                },
                {
                  category: "MFA Cleanup",
                  items: [
                    { action: "Remove all MFA methods registered during attack window", auto: "Semi-Auto" },
                    { action: "Re-register user MFA with verified device", auto: "Human Required" },
                    { action: "Enable phishing-resistant MFA (passkeys/FIDO2)", auto: "Human Required" },
                  ],
                },
                {
                  category: "OAuth / App Access",
                  items: [
                    { action: "Revoke suspicious OAuth app consents", auto: "Semi-Auto" },
                    { action: "Block app from tenant if malicious", auto: "Human Decision" },
                    { action: "Review service principal permissions", auto: "Human Required" },
                  ],
                },
                {
                  category: "Email Cleanup",
                  items: [
                    { action: "Delete malicious inbox rules", auto: "Full Auto" },
                    { action: "Remove external forwarding", auto: "Full Auto" },
                    { action: "Remove mailbox delegates added during attack", auto: "Semi-Auto" },
                    { action: "Search and purge sent phishing emails", auto: "Semi-Auto" },
                  ],
                },
                {
                  category: "Access Restoration",
                  items: [
                    { action: "Unblock user account (set accountEnabled = true)", auto: "Human Approval" },
                    { action: "Dismiss user risk in Entra ID Protection", auto: "Human Approval" },
                    { action: "Monitor for 48 hours post-restoration", auto: "Full Auto" },
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="bg-muted/50 px-6 py-3 border-b border-border">
                    <h3 className="font-semibold text-foreground">{section.category}</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center justify-between">
                          <span className="text-muted-foreground text-sm">{item.action}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              item.auto === "Full Auto"
                                ? "bg-green-500/20 text-green-400"
                                : item.auto === "Semi-Auto"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-orange-500/20 text-orange-400"
                            }`}
                          >
                            {item.auto}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recovery */}
          <section id="recovery" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">6. Recovery and User Communication</h2>
            <p className="text-muted-foreground mb-6">
              Once remediation is complete, restore access and communicate clearly with the affected user.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Key className="h-5 w-5 text-primary" />
                User Communication Template
              </h3>
              <div className="bg-muted/30 rounded-lg p-4 text-sm text-muted-foreground font-mono">
                <p className="mb-2">Subject: Action Required - Your Account Security</p>
                <p className="mb-4">---</p>
                <p className="mb-2">Hi [Name],</p>
                <p className="mb-2">
                  Our security team detected suspicious activity on your account and took immediate action to protect
                  you.
                </p>
                <p className="mb-2">What happened: Unauthorized access was detected from [Location/IP].</p>
                <p className="mb-2">What we did: We secured your account by resetting your session and credentials.</p>
                <p className="mb-2">What you need to do:</p>
                <p className="mb-2">1. Reset your password using this link: [Link]</p>
                <p className="mb-2">2. Re-register your MFA device</p>
                <p className="mb-2">3. Report any emails you may have clicked on recently</p>
                <p className="mb-4">
                  If you have questions, contact the security team at [email] or [phone].
                </p>
                <p>Security Team</p>
              </div>
            </div>
          </section>

          {/* Automation Matrix */}
          <section id="automation-matrix" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">7. Automation Decision Matrix</h2>
            <p className="text-muted-foreground mb-6">
              Not every action should be fully automated. Use this matrix to decide what runs autonomously vs. requires
              human approval.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 text-foreground font-semibold border-b border-border">Action</th>
                    <th className="text-left p-4 text-foreground font-semibold border-b border-border">Reversible?</th>
                    <th className="text-left p-4 text-foreground font-semibold border-b border-border">User Impact</th>
                    <th className="text-left p-4 text-foreground font-semibold border-b border-border">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-4">Revoke sessions</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">Low (re-login)</td>
                    <td className="p-4"><span className="text-green-400 font-medium">Full Auto</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Block sign-in</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">High (locked out)</td>
                    <td className="p-4"><span className="text-green-400 font-medium">Full Auto</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Force password reset</td>
                    <td className="p-4">No</td>
                    <td className="p-4">Medium</td>
                    <td className="p-4"><span className="text-green-400 font-medium">Full Auto</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Remove MFA device</td>
                    <td className="p-4">No</td>
                    <td className="p-4">High</td>
                    <td className="p-4"><span className="text-yellow-400 font-medium">Semi-Auto</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Revoke OAuth app</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">Medium</td>
                    <td className="p-4"><span className="text-yellow-400 font-medium">Semi-Auto</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Delete inbox rules</td>
                    <td className="p-4">No</td>
                    <td className="p-4">Low</td>
                    <td className="p-4"><span className="text-green-400 font-medium">Full Auto</span></td>
                  </tr>
                  <tr>
                    <td className="p-4">Unblock user</td>
                    <td className="p-4">Yes</td>
                    <td className="p-4">N/A</td>
                    <td className="p-4"><span className="text-orange-400 font-medium">Human Approval</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Token Theft Special Case */}
          <section id="token-theft" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">8. Special Case: Token Theft Response</h2>
            <p className="text-muted-foreground mb-6">
              Token theft (AiTM attacks, session hijacking) bypasses password and MFA entirely. The attacker has a valid
              refresh token and can access resources without re-authenticating.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Token Theft Indicators
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Entra ID Protection: "Anomalous Token" or "Token Issuer Anomaly" detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Sign-in from new IP immediately after successful MFA from different IP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Multiple concurrent sessions from geographically impossible locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Session cookie replay detected (same session ID, different source IP)</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Token Theft Response Actions</h3>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>
                    <strong className="text-foreground">Revoke all sessions immediately</strong> - Standard containment,
                    but critical for token theft
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>
                    <strong className="text-foreground">Enable Continuous Access Evaluation (CAE)</strong> - Ensures
                    token revocation propagates in near real-time
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>
                    <strong className="text-foreground">Require token binding (if available)</strong> - Binds tokens to
                    specific devices/browsers
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-bold">
                    4
                  </span>
                  <span>
                    <strong className="text-foreground">Deploy phishing-resistant MFA</strong> - Passkeys/FIDO2 prevent
                    AiTM token theft
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-bold">
                    5
                  </span>
                  <span>
                    <strong className="text-foreground">Reduce token lifetime</strong> - Shorter refresh token validity
                    limits attacker window
                  </span>
                </li>
              </ol>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Automate Your Entra ID ATO Response
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              BitLyft AIR automates the entire ATO response playbook—from detection to containment to remediation—in
              seconds instead of hours. See how we protect Microsoft 365 environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="/blog/guardrails-to-avoid-client-impact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Learn About Our Guardrails
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How quickly should ATO containment happen?",
                  a: "Ideally within 5 minutes of detection. Attackers establish persistence within 15 minutes, so speed is critical. Automated containment is the only way to consistently hit this target.",
                },
                {
                  q: "Should I block the user or just revoke sessions?",
                  a: "Both. Session revocation stops the current session, but the attacker can re-authenticate if they have credentials. Blocking prevents any sign-in until remediation is complete.",
                },
                {
                  q: "How do I handle VIP/executive accounts?",
                  a: "Same playbook, but with immediate escalation to leadership. Consider having a separate 'white glove' process for credential reset and device re-enrollment with executive assistants.",
                },
                {
                  q: "What if the attacker registered their own MFA device?",
                  a: "This is why MFA cleanup is critical. During investigation, identify all devices registered during the attack window and remove them before allowing the user to re-authenticate.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Playbooks</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/automated-identity-based-response"
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Automated Identity-Based Response
                </h3>
                <p className="text-muted-foreground text-sm">
                  Containment actions that stop account takeover fast across identity providers.
                </p>
              </Link>
              <Link
                href="/blog/bec-response-microsoft-365-triage-containment"
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  BEC Response: M365 Triage + Containment
                </h3>
                <p className="text-muted-foreground text-sm">
                  Complete checklist for business email compromise incidents in Microsoft 365.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
