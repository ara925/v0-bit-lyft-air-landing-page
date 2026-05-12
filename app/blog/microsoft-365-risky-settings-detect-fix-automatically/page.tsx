import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, AlertTriangle, Shield, CheckCircle2, XCircle, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Microsoft 365 Risky Settings: Detect and Fix Automatically | BitLyft AIR®",
  description:
    "Learn how to detect and automatically remediate risky Microsoft 365 configurations including mailbox forwarding, OAuth consent, delegate access, and external sharing settings.",
}

export default function MicrosoftRiskySettingsBlogPost() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <article className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">Industry Insights</Badge>
              <Badge variant="outline">Article</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Microsoft 365 Risky Settings: Detect and Fix Automatically
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>20th April, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Microsoft 365 misconfigurations are one of the most common attack vectors in cloud environments. From
              mailbox forwarding rules to external sharing settings, attackers exploit configuration drift to
              exfiltrate data and maintain persistence. This guide covers how to detect risky M365 settings and
              automatically remediate them before they become breaches.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Why M365 Settings Matter for Security
            </h2>

            <p>
              Microsoft 365 is the backbone of most enterprise environments, handling email, file storage,
              collaboration, and identity. A single misconfiguration can expose sensitive data, enable account
              takeover, or create persistence mechanisms for attackers.
            </p>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
              <h3 className="text-lg font-bold text-red-400 mb-3">The Configuration Drift Problem</h3>
              <p className="text-muted-foreground mb-0">
                Settings change over time—users create forwarding rules, admins enable features for convenience,
                third-party apps request permissions. Without continuous monitoring, your secure baseline erodes
                silently. By the time you discover the drift, attackers may have already exploited it.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6 text-primary" />
              High-Risk M365 Settings to Monitor
            </h2>

            <p>Not all settings carry equal risk. Focus detection and automation on these critical areas:</p>

            {/* Risk Tier 1 - Critical */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-8">
              <h3 className="text-lg font-bold mb-4 text-red-400">Critical Risk Settings</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold">External Mailbox Forwarding</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Auto-forwarding to external addresses is the #1 indicator of BEC and data exfiltration.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">Set-Mailbox ForwardingAddress</Badge>
                    <Badge variant="outline" className="text-xs">Set-Mailbox ForwardingSMTPAddress</Badge>
                    <Badge variant="outline" className="text-xs">Inbox Rules with Forward</Badge>
                  </div>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold">Delegate Access to Mailboxes</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Full access or send-as permissions granted to unexpected users often indicates compromise.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">Add-MailboxPermission</Badge>
                    <Badge variant="outline" className="text-xs">Add-RecipientPermission</Badge>
                  </div>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold">OAuth App Consent (High Privilege)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Illicit consent grants give attackers persistent access through malicious applications.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">Mail.Read</Badge>
                    <Badge variant="outline" className="text-xs">Mail.ReadWrite</Badge>
                    <Badge variant="outline" className="text-xs">Files.ReadWrite.All</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Tier 2 - High */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-8">
              <h3 className="text-lg font-bold mb-4 text-orange-400">High Risk Settings</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold">External Sharing in SharePoint/OneDrive</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Anonymous links or sharing with external domains can expose sensitive documents.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold">Disabled Audit Logging</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Attackers disable logging to cover tracks. Missing logs = missing visibility.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold">Transport Rules Bypassing Security</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Rules that whitelist domains, skip spam filtering, or redirect mail to external addresses.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold">Legacy Authentication Enabled</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Protocols like IMAP, POP3, and SMTP AUTH bypass MFA and are prime targets for password spray.
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Tier 3 - Medium */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-8">
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Medium Risk Settings</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold">Guest User Access</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Stale guest accounts or overly permissive guest policies expand the attack surface.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold">Teams External Access</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Open federation allows any external user to message your employees directly.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold">PowerShell Remoting Enabled</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Unrestricted PowerShell access can be used for reconnaissance and lateral movement.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Detection Signals and Data Sources
            </h2>

            <p>
              Effective detection requires the right data sources. Here is where to look for each setting category:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 font-semibold">Setting Category</th>
                    <th className="text-left py-3 px-4 font-semibold">Data Source</th>
                    <th className="text-left py-3 px-4 font-semibold">Key Operations</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Mailbox Forwarding</td>
                    <td className="py-3 px-4 text-muted-foreground">Exchange Admin Audit</td>
                    <td className="py-3 px-4 font-mono text-xs">Set-Mailbox, New-InboxRule</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Delegate Access</td>
                    <td className="py-3 px-4 text-muted-foreground">Exchange Admin Audit</td>
                    <td className="py-3 px-4 font-mono text-xs">Add-MailboxPermission</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">OAuth Consent</td>
                    <td className="py-3 px-4 text-muted-foreground">Azure AD Audit Logs</td>
                    <td className="py-3 px-4 font-mono text-xs">Consent to application</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Sharing Settings</td>
                    <td className="py-3 px-4 text-muted-foreground">SharePoint Audit</td>
                    <td className="py-3 px-4 font-mono text-xs">SharingSet, AnonymousLink</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Transport Rules</td>
                    <td className="py-3 px-4 text-muted-foreground">Exchange Admin Audit</td>
                    <td className="py-3 px-4 font-mono text-xs">New-TransportRule, Set-TransportRule</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Audit Logging</td>
                    <td className="py-3 px-4 text-muted-foreground">Unified Audit Log</td>
                    <td className="py-3 px-4 font-mono text-xs">Set-AdminAuditLogConfig</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Automated Detection Logic</h2>

            <p>
              Build detection rules that trigger on risky configuration changes. Here are examples for critical
              settings:
            </p>

            <div className="bg-zinc-900 rounded-xl p-6 my-8 font-mono text-sm overflow-x-auto">
              <div className="text-muted-foreground mb-2"># External Forwarding Detection</div>
              <div className="text-green-400">
                Operation: Set-Mailbox
                <br />
                Parameters contains: ForwardingAddress OR ForwardingSMTPAddress
                <br />
                Value: External domain (not in allowed list)
                <br />
                <span className="text-red-400">→ ALERT: High severity</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 my-8 font-mono text-sm overflow-x-auto">
              <div className="text-muted-foreground mb-2"># Suspicious Inbox Rule</div>
              <div className="text-green-400">
                Operation: New-InboxRule OR Set-InboxRule
                <br />
                Parameters contains: ForwardTo OR RedirectTo OR DeleteMessage
                <br />
                Target: External address OR all messages
                <br />
                <span className="text-red-400">→ ALERT: Critical severity</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 my-8 font-mono text-sm overflow-x-auto">
              <div className="text-muted-foreground mb-2"># High-Risk OAuth Consent</div>
              <div className="text-green-400">
                Operation: Consent to application
                <br />
                Permissions contains: Mail.Read OR Mail.ReadWrite OR Files.ReadWrite.All
                <br />
                Publisher: Not verified OR unknown
                <br />
                <span className="text-red-400">→ ALERT: Critical severity</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Automated Remediation Actions</h2>

            <p>
              Once a risky setting is detected, automation can fix it immediately. Match each detection to the
              appropriate remediation:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 font-semibold">Detection</th>
                    <th className="text-left py-3 px-4 font-semibold">Auto-Remediation</th>
                    <th className="text-left py-3 px-4 font-semibold">Approval</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">External forwarding enabled</td>
                    <td className="py-3 px-4 text-muted-foreground">Remove forwarding address</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Auto-approve</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Suspicious inbox rule</td>
                    <td className="py-3 px-4 text-muted-foreground">Disable rule + alert user</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Auto-approve</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Risky OAuth app consent</td>
                    <td className="py-3 px-4 text-muted-foreground">Revoke consent + block app</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Notify</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Unexpected delegate access</td>
                    <td className="py-3 px-4 text-muted-foreground">Remove permission</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Notify</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Audit logging disabled</td>
                    <td className="py-3 px-4 text-muted-foreground">Re-enable logging</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Auto-approve</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Anonymous sharing link</td>
                    <td className="py-3 px-4 text-muted-foreground">Expire link + notify owner</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Notify</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4">Legacy auth protocol used</td>
                    <td className="py-3 px-4 text-muted-foreground">Block protocol + force modern auth</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Review</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Graph API Remediation Commands</h2>

            <p>
              BitLyft AIR executes these remediations via Microsoft Graph API. Here are the key endpoints:
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Remove Mailbox Forwarding</div>
                <code className="text-primary text-sm">
                  PATCH /users/{`{userId}`}/mailboxSettings<br/>
                  {`{ "forwardingSmtpAddress": null }`}
                </code>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Disable Inbox Rule</div>
                <code className="text-primary text-sm">
                  PATCH /users/{`{userId}`}/mailFolders/inbox/messageRules/{`{ruleId}`}<br/>
                  {`{ "isEnabled": false }`}
                </code>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Revoke OAuth App Consent</div>
                <code className="text-primary text-sm">
                  DELETE /servicePrincipals/{`{appId}`}/oauth2PermissionGrants/{`{grantId}`}
                </code>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-sm text-muted-foreground mb-1">Remove Mailbox Permissions</div>
                <code className="text-primary text-sm">
                  DELETE /users/{`{userId}`}/mailboxPermissions/{`{permissionId}`}
                </code>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Automation Workflow</h2>

            <p>The end-to-end workflow for detecting and fixing risky settings:</p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Continuous Monitoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Ingest M365 audit logs in real-time. Monitor for configuration changes across Exchange, SharePoint,
                      Azure AD, and Teams.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Risk Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluate each change against risk criteria. Is the target external? Is the user high-value? Is
                      this a known attack pattern?
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Automated Response</h4>
                    <p className="text-sm text-muted-foreground">
                      Execute remediation via Graph API. Remove forwarding, disable rules, revoke permissions—all
                      within milliseconds of detection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Notification and Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Alert the SOC, notify the affected user (if appropriate), and log all actions for compliance
                      and audit purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Best Practices</h2>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-green-500 mb-3" />
                <h4 className="font-bold mb-2">Establish Baselines</h4>
                <p className="text-sm text-muted-foreground">
                  Know what normal looks like. Document approved forwarding addresses, authorized apps, and expected
                  sharing policies before enabling automation.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-green-500 mb-3" />
                <h4 className="font-bold mb-2">Use Allowlists</h4>
                <p className="text-sm text-muted-foreground">
                  Maintain allowlists for legitimate external domains, approved OAuth apps, and authorized delegates
                  to reduce false positives.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-green-500 mb-3" />
                <h4 className="font-bold mb-2">Protect VIPs</h4>
                <p className="text-sm text-muted-foreground">
                  Apply stricter policies to executives and privileged users. Any configuration change on these
                  accounts should trigger immediate review.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-green-500 mb-3" />
                <h4 className="font-bold mb-2">Schedule Drift Checks</h4>
                <p className="text-sm text-muted-foreground">
                  Run periodic configuration audits to catch drift that event-based detection might miss. Compare
                  current state against your secure baseline weekly.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Common Mistakes</h2>

            <div className="space-y-4 my-8">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Blocking all external forwarding without exceptions.</span>
                  <span className="text-muted-foreground">
                    {" "}Some forwarding is legitimate (legal, compliance, business partners). Build allowlists first.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Ignoring user-created inbox rules.</span>
                  <span className="text-muted-foreground">
                    {" "}Admin-configured forwarding gets attention, but attackers prefer inbox rules—they are
                    harder to detect and often overlooked.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Not monitoring OAuth consent.</span>
                  <span className="text-muted-foreground">
                    {" "}Illicit consent grants are a primary persistence mechanism in BEC attacks. Monitor all
                    application consent events.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Remediating without notifying the user.</span>
                  <span className="text-muted-foreground">
                    {" "}Users need to know when their settings are changed. Silent remediation causes confusion and
                    may mask ongoing attacks.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Only checking settings at deployment.</span>
                  <span className="text-muted-foreground">
                    {" "}Configuration drift happens daily. Continuous monitoring is essential—point-in-time audits
                    are not enough.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl p-8 my-12 border border-primary/30">
              <h3 className="text-2xl font-bold mb-4">Automate M365 Security with BitLyft AIR</h3>
              <p className="text-muted-foreground mb-6">
                BitLyft AIR continuously monitors your Microsoft 365 environment for risky configurations and
                automatically remediates them in milliseconds. Stop configuration drift before it becomes a breach.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Schedule a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Link href="/solutions/automated-incident-response">Learn About Automated Response</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}
