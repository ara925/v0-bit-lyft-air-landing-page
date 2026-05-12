import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Shield,
  Mail,
  User,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Settings,
  Network,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Microsoft Defender XDR Workflows: Automate Response Across Email and Identity | BitLyft AIR®",
  description:
    "Learn how to build automated response workflows in Microsoft Defender XDR that coordinate actions across email and identity. Practical playbooks for cross-domain incident response.",
}

export default function DefenderXDRWorkflowsBlogPost() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">Industry Insights</Badge>
              <Badge variant="outline">Article</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Microsoft Defender XDR Workflows: Automate Response Across Email and Identity
            </h1>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>24th April, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image Area */}
          <div className="relative rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 p-12">
            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-sm text-gray-400">Email</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-6 h-6 text-primary" />
                <Network className="w-8 h-8 text-primary" />
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <User className="w-8 h-8 text-purple-400" />
                </div>
                <span className="text-sm text-gray-400">Identity</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-6 h-6 text-primary" />
                <Network className="w-8 h-8 text-primary" />
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <span className="text-sm text-gray-400">Response</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Modern attacks rarely stay in one domain. A phishing email leads to credential compromise, which enables
              lateral movement across identity and endpoints. Microsoft Defender XDR provides the foundation for
              cross-domain detection, but realizing its full potential requires building automated workflows that
              coordinate response actions across email and identity simultaneously.
            </p>

            <p className="text-gray-400">
              This article provides practical guidance on building XDR workflows that connect email threats to identity
              response, reduce manual handoffs between security teams, and ensure consistent remediation regardless of
              where an attack originates.
            </p>

            {/* Understanding XDR Cross-Domain Response */}
            <div className="my-12 p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 rounded-2xl border border-zinc-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Network className="w-6 h-6 text-primary" />
                Understanding XDR Cross-Domain Response
              </h2>
              <p className="text-gray-400 mb-6">
                Microsoft Defender XDR unifies signals from Defender for Office 365 (email), Defender for Identity,
                Defender for Endpoint, and Entra ID Protection. This unified view enables detection of attack chains
                that span multiple domains—but detection alone is not enough.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                  <h3 className="text-lg font-bold mb-3 text-blue-400">Email Domain</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Phishing detection and quarantine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Malware attachment blocking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>URL detonation and rewrite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>ZAP (Zero-hour Auto Purge)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                  <h3 className="text-lg font-bold mb-3 text-purple-400">Identity Domain</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Sign-in risk evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Session token revocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>MFA enforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Account suspension</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Cross-Domain Attack Pattern</h2>
            <p className="text-gray-400">
              Understanding how attacks traverse domains is essential for designing effective workflows. The most common
              pattern follows this sequence:
            </p>

            {/* Attack Flow */}
            <div className="my-8 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <h3 className="text-lg font-bold mb-4">Typical Email-to-Identity Attack Chain</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Initial Access (Email)",
                    desc: "Phishing email delivers credential harvesting link or malicious attachment",
                    domain: "email",
                  },
                  {
                    step: "2",
                    title: "Credential Compromise (Identity)",
                    desc: "User submits credentials to attacker-controlled site or token is stolen",
                    domain: "identity",
                  },
                  {
                    step: "3",
                    title: "Account Takeover (Identity)",
                    desc: "Attacker authenticates using stolen credentials, potentially from new location",
                    domain: "identity",
                  },
                  {
                    step: "4",
                    title: "Persistence (Email + Identity)",
                    desc: "Mailbox rules created, OAuth apps consented, forwarding enabled",
                    domain: "both",
                  },
                  {
                    step: "5",
                    title: "Lateral Movement (Email)",
                    desc: "Internal phishing sent to other users leveraging trusted sender reputation",
                    domain: "email",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.domain === "email"
                          ? "bg-blue-500/20 text-blue-400"
                          : item.domain === "identity"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-primary/20 text-primary"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Workflow Architecture: Email-Triggered Identity Response</h2>
            <p className="text-gray-400 mb-6">
              The most valuable automation pattern triggers identity actions based on email detections. When a user
              clicks a phishing link or interacts with malicious content, the response should not be limited to email
              quarantine.
            </p>

            {/* Workflow 1 */}
            <div className="my-8 p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Workflow 1: Phishing Click Response
              </h3>
              <p className="text-gray-400 mb-6">
                When a user clicks a malicious URL detected by Safe Links, trigger immediate identity protection.
              </p>
              <div className="bg-zinc-900/80 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  {`TRIGGER: Safe Links click on malicious URL
  
CONDITIONS:
  - URL verdict: Malicious OR Phishing
  - User clicked through warning (if shown)
  - Time since delivery < 48 hours
  
ACTIONS (Sequential):
  1. Revoke all active sessions (Graph API)
  2. Require MFA re-authentication
  3. Block sign-in from non-compliant devices (24h)
  4. Quarantine original email + all copies
  5. Scan mailbox for related emails (same sender/campaign)
  6. Create incident linking email + identity events
  
NOTIFICATION:
  - Alert SOC with combined email + identity context
  - Notify user of required re-authentication`}
                </pre>
              </div>
            </div>

            {/* Workflow 2 */}
            <div className="my-8 p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Workflow 2: Credential Theft Detection Response
              </h3>
              <p className="text-gray-400 mb-6">
                When identity signals indicate credential compromise, extend response to email domain.
              </p>
              <div className="bg-zinc-900/80 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  {`TRIGGER: Entra ID Protection - High risk sign-in
  
CONDITIONS:
  - Risk level: High
  - Risk type: Leaked credentials OR Anomalous token OR Impossible travel
  - User is not excluded from automation
  
ACTIONS (Sequential):
  1. Revoke all refresh tokens
  2. Force password reset
  3. Audit mailbox for suspicious rules
     - External forwarding rules
     - Rules moving emails to hidden folders
     - Delegate access changes
  4. Remove any suspicious inbox rules
  5. Revoke OAuth app consents (last 7 days)
  6. Scan sent items for internal phishing
  7. If internal phishing found → expand to recipients
  
NOTIFICATION:
  - Create unified incident
  - Alert SOC with full attack timeline
  - Notify manager if VIP user`}
                </pre>
              </div>
            </div>

            {/* Workflow 3 */}
            <div className="my-8 p-8 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Workflow 3: BEC Attack Response
              </h3>
              <p className="text-gray-400 mb-6">
                Business Email Compromise requires coordinated response across both domains to prevent financial loss.
              </p>
              <div className="bg-zinc-900/80 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  {`TRIGGER: BEC detection (Defender for Office 365)
  
CONDITIONS:
  - Attack type: Impersonation OR Payment fraud
  - Confidence: Medium or higher
  - Recipient interacted with email
  
ACTIONS (Parallel where possible):
  Email Actions:
    1. Quarantine email
    2. Block sender domain (if external)
    3. Search for related campaign emails
    4. Notify recipients of other campaign emails
    
  Identity Actions:
    1. If sender is internal → immediate account suspension
    2. Revoke sender sessions
    3. Audit sender mailbox for compromise indicators
    4. Check for unusual sign-in patterns (last 30 days)
    
  Investigation Actions:
    1. Create incident with BEC tag
    2. Collect evidence package (email headers, sign-in logs)
    3. Alert finance team if payment keywords detected
  
ESCALATION:
  - If amount > $10,000 mentioned → immediate SOC call
  - If C-level impersonated → executive notification`}
                </pre>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Automation Levels by Scenario</h2>
            <p className="text-gray-400 mb-6">
              Not all cross-domain actions should be fully automated. Use this matrix to determine appropriate
              automation levels based on action impact and detection confidence.
            </p>

            {/* Automation Matrix */}
            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 font-semibold">Scenario</th>
                    <th className="text-left py-3 px-4 font-semibold">Email Action</th>
                    <th className="text-left py-3 px-4 font-semibold">Identity Action</th>
                    <th className="text-left py-3 px-4 font-semibold">Automation Level</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-400">
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Phishing click (high confidence)</td>
                    <td className="py-3 px-4">Quarantine</td>
                    <td className="py-3 px-4">Session revoke + MFA</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Full Auto</span>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Phishing click (medium confidence)</td>
                    <td className="py-3 px-4">Soft quarantine</td>
                    <td className="py-3 px-4">MFA challenge</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Full Auto</span>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Leaked credentials detected</td>
                    <td className="py-3 px-4">Audit mailbox rules</td>
                    <td className="py-3 px-4">Password reset</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">
                        Auto + Notify
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">BEC - standard user</td>
                    <td className="py-3 px-4">Quarantine + block</td>
                    <td className="py-3 px-4">Session revoke</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Full Auto</span>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">BEC - VIP/executive target</td>
                    <td className="py-3 px-4">Quarantine</td>
                    <td className="py-3 px-4">Session revoke</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">
                        Approval Required
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Impossible travel sign-in</td>
                    <td className="py-3 px-4">None initial</td>
                    <td className="py-3 px-4">MFA + risk flag</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Full Auto</span>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Account takeover confirmed</td>
                    <td className="py-3 px-4">Full mailbox audit</td>
                    <td className="py-3 px-4">Account suspension</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">
                        Auto + Notify
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Internal phishing from compromised account</td>
                    <td className="py-3 px-4">Recall + quarantine</td>
                    <td className="py-3 px-4">Account suspension</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Full Auto</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Implementation: Graph API Integration Points</h2>
            <p className="text-gray-400 mb-6">
              Building cross-domain workflows requires integration with multiple Graph API endpoints. Here are the key
              API calls for each action category.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-lg font-bold mb-4 text-blue-400">Email Actions</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">POST</code>
                    <span>/security/alerts - Create alert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">POST</code>
                    <span>/security/triggers/emailQuarantine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">GET</code>
                    <span>/users/{'{id}'}/mailFolders/inbox/messageRules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">DELETE</code>
                    <span>/users/{'{id}'}/mailFolders/.../messageRules/{'{ruleId}'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">GET</code>
                    <span>/users/{'{id}'}/messages?$filter=...</span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-lg font-bold mb-4 text-purple-400">Identity Actions</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">POST</code>
                    <span>/users/{'{id}'}/revokeSignInSessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">PATCH</code>
                    <span>/users/{'{id}'} - Update accountEnabled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">POST</code>
                    <span>/users/{'{id}'}/authentication/methods/.../resetPassword</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">GET</code>
                    <span>/users/{'{id}'}/oauth2PermissionGrants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">DELETE</code>
                    <span>/oauth2PermissionGrants/{'{id}'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Unified Incident Creation</h2>
            <p className="text-gray-400 mb-6">
              Cross-domain attacks should generate unified incidents that correlate events from both domains. This
              enables analysts to see the full attack chain in a single view.
            </p>

            <div className="my-8 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <h3 className="text-lg font-bold mb-4">Incident Correlation Strategy</h3>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">User-based correlation:</span> Link all events affecting
                    the same user within a 24-hour window
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Campaign correlation:</span> Link events matching the
                    same phishing campaign indicators (sender, URL patterns, attachment hashes)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">IP-based correlation:</span> Link sign-in events from IPs
                    associated with known malicious infrastructure
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Timeline correlation:</span> Events within 30 minutes of
                    a confirmed malicious action on the same user
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Guardrails and Safety Mechanisms</h2>
            <p className="text-gray-400 mb-6">
              Cross-domain automation amplifies both impact and risk. Implement these guardrails to prevent automation
              from causing business disruption.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {[
                {
                  icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
                  title: "VIP Protection",
                  items: [
                    "Require approval for C-level accounts",
                    "Notify executive assistant for any action",
                    "Extended grace period before suspension",
                    "Manager notification for all automated actions",
                  ],
                },
                {
                  icon: <Settings className="w-6 h-6 text-blue-400" />,
                  title: "Service Account Handling",
                  items: [
                    "Never auto-suspend service accounts",
                    "Alert only for service account anomalies",
                    "Require app owner approval for actions",
                    "Maintain service account inventory",
                  ],
                },
                {
                  icon: <Shield className="w-6 h-6 text-green-400" />,
                  title: "Rate Limiting",
                  items: [
                    "Max 10 identity actions per minute",
                    "Max 50 email quarantines per hour",
                    "Pause automation if thresholds exceeded",
                    "Alert SOC on rate limit triggers",
                  ],
                },
                {
                  icon: <Zap className="w-6 h-6 text-primary" />,
                  title: "Rollback Capability",
                  items: [
                    "Log all automated actions for audit",
                    "Maintain pre-action state snapshots",
                    "One-click rollback for sessions/rules",
                    "24-hour undo window for most actions",
                  ],
                },
              ].map((guard) => (
                <div key={guard.title} className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                  <div className="flex items-center gap-3 mb-4">
                    {guard.icon}
                    <h3 className="text-lg font-bold">{guard.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {guard.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Metrics and Monitoring</h2>
            <p className="text-gray-400 mb-6">
              Track these metrics to measure workflow effectiveness and identify areas for tuning.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 font-semibold">Metric</th>
                    <th className="text-left py-3 px-4 font-semibold">Target</th>
                    <th className="text-left py-3 px-4 font-semibold">Alert Threshold</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-400">
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Cross-domain response time</td>
                    <td className="py-3 px-4">&lt; 60 seconds</td>
                    <td className="py-3 px-4">&gt; 5 minutes</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Email-to-identity correlation rate</td>
                    <td className="py-3 px-4">&gt; 85%</td>
                    <td className="py-3 px-4">&lt; 70%</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">False positive rate (identity actions)</td>
                    <td className="py-3 px-4">&lt; 2%</td>
                    <td className="py-3 px-4">&gt; 5%</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Workflow completion rate</td>
                    <td className="py-3 px-4">&gt; 98%</td>
                    <td className="py-3 px-4">&lt; 95%</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Rollback request rate</td>
                    <td className="py-3 px-4">&lt; 1%</td>
                    <td className="py-3 px-4">&gt; 3%</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Mean time to unified incident</td>
                    <td className="py-3 px-4">&lt; 2 minutes</td>
                    <td className="py-3 px-4">&gt; 10 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Common Mistakes */}
            <div className="my-12 p-8 bg-red-500/10 border border-red-500/30 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Common Mistakes to Avoid
              </h2>
              <div className="space-y-4">
                {[
                  {
                    mistake: "Treating domains independently",
                    fix: "Always check if email events have identity implications and vice versa",
                  },
                  {
                    mistake: "Over-automating high-impact actions",
                    fix: "Account suspension should require approval except for confirmed compromise",
                  },
                  {
                    mistake: "Ignoring OAuth app consents",
                    fix: "Always audit and revoke suspicious app consents during ATO response",
                  },
                  {
                    mistake: "Missing mailbox rule cleanup",
                    fix: "Credential reset without mailbox audit leaves attacker persistence",
                  },
                  {
                    mistake: "No VIP differentiation",
                    fix: "Executive accounts need approval workflows to prevent business disruption",
                  },
                  {
                    mistake: "Single-domain incident creation",
                    fix: "Cross-domain attacks need unified incidents for complete visibility",
                  },
                ].map((item) => (
                  <div key={item.mistake} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm">✕</span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-400">{item.mistake}:</span>
                      <span className="text-gray-400 ml-2">{item.fix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="my-12 p-8 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl border border-primary/30">
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <ul className="space-y-3">
                {[
                  "Cross-domain attacks require cross-domain response — email and identity actions must be coordinated",
                  "Trigger identity actions from email detections and vice versa to close response gaps",
                  "Use automation levels based on action impact and detection confidence",
                  "Implement guardrails for VIPs, service accounts, and rate limiting",
                  "Create unified incidents that correlate events across domains for complete visibility",
                  "Always audit mailbox rules and OAuth consents during credential compromise response",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="my-12 p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 text-center">
              <h2 className="text-2xl font-bold mb-4">Automate Cross-Domain Response with BitLyft AIR®</h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                BitLyft AIR® provides pre-built XDR workflows that coordinate response across Microsoft 365 email and
                identity domains — no scripting required.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Link href="/solutions/automated-incident-response">Learn About Incident Response</Link>
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
