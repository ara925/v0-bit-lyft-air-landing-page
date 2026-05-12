import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Mail, Shield, AlertTriangle, CheckCircle2, XCircle, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Email Quarantine Automation: Policy Design That Avoids False Positives | BitLyft AIR®",
  description:
    "Learn how to design email quarantine automation policies that catch real threats while minimizing false positives. Practical guidance for SOC teams on thresholds, allowlists, and escalation workflows.",
}

export default function EmailQuarantineAutomationBlogPost() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="gap-2 text-gray-400 hover:text-white">
            <Link href="/resources">
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="text-primary border-primary/50">
                Industry Insights
              </Badge>
              <Badge variant="outline" className="text-gray-400 border-gray-700">
                Article
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Email Quarantine Automation: Policy Design That Avoids False Positives
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Effective email quarantine automation balances threat protection with business continuity. Overly aggressive policies disrupt operations; too lenient and threats slip through. Here&apos;s how to design policies that catch real threats while minimizing false positives.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>22nd April, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {/* The False Positive Problem */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
                The False Positive Problem
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Email quarantine automation is essential for managing the volume of threats targeting modern organizations. However, poorly designed policies create two significant problems:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 text-red-400">Too Aggressive</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Legitimate business emails quarantined</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Users bypass security by using personal email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>SOC overwhelmed with release requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Security team loses credibility</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 text-yellow-400">Too Lenient</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Phishing emails reach inboxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>BEC attacks succeed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Malware delivered via attachments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Credential harvesting links clicked</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">The goal:</strong> Design policies that automatically quarantine genuine threats while allowing legitimate business communications to flow with minimal friction.
                </p>
              </div>
            </section>

            {/* Quarantine Policy Tiers */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Quarantine Policy Tiers
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Not all suspicious emails should be treated equally. Design your quarantine policies in tiers based on threat confidence level and potential impact.
              </p>

              <div className="space-y-6">
                {/* Tier 1: Auto-Quarantine */}
                <div className="bg-gradient-to-br from-red-500/10 to-red-900/5 border border-red-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-400 font-bold">T1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-400">Auto-Quarantine (No User Access)</h3>
                      <p className="text-sm text-gray-500">High-confidence threats — quarantine immediately</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Triggers</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>- Known malware signatures in attachments</li>
                        <li>- High-confidence phishing URLs (blocklist match)</li>
                        <li>- Spoofed executive sender addresses</li>
                        <li>- Failed DMARC with p=reject policy</li>
                        <li>- Sender on global threat intelligence blocklist</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">User Experience</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>- User cannot see or release</li>
                        <li>- Admin review required</li>
                        <li>- Retention: 30 days then delete</li>
                        <li>- No notification to recipient</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tier 2: Quarantine with User Notification */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-900/5 border border-yellow-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 font-bold">T2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-yellow-400">Quarantine with Notification</h3>
                      <p className="text-sm text-gray-500">Medium-confidence — user aware, cannot self-release</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Triggers</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>- Suspected phishing (ML confidence 70-90%)</li>
                        <li>- Impersonation of known contacts</li>
                        <li>- Suspicious attachment types (.iso, .lnk)</li>
                        <li>- First-time sender with urgency language</li>
                        <li>- Failed SPF/DKIM but valid DMARC</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">User Experience</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>- User notified via digest email</li>
                        <li>- Can view preview (safe render)</li>
                        <li>- Must request release from SOC</li>
                        <li>- Retention: 30 days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tier 3: User Self-Release */}
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-900/5 border border-blue-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-bold">T3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-400">Quarantine with Self-Release</h3>
                      <p className="text-sm text-gray-500">Low-confidence — user can release after review</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Triggers</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>- Bulk mail from unknown sender</li>
                        <li>- Marketing emails with tracking pixels</li>
                        <li>- Newsletter with suspicious link count</li>
                        <li>- External sender to distribution list</li>
                        <li>- Password-protected attachments</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">User Experience</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>- User notified immediately</li>
                        <li>- Can preview and self-release</li>
                        <li>- Release logged for audit</li>
                        <li>- Option to report as phishing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tier 4: Deliver with Warning */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-900/5 border border-green-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 font-bold">T4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-400">Deliver with Warning Banner</h3>
                      <p className="text-sm text-gray-500">Minimal suspicion — deliver but warn</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Triggers</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>- First-time external sender</li>
                        <li>- External sender with similar display name</li>
                        <li>- Links to file-sharing services</li>
                        <li>- Reply-to differs from sender</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">User Experience</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>- Email delivered to inbox</li>
                        <li>- Warning banner displayed</li>
                        <li>- Links defanged or wrapped</li>
                        <li>- Easy report button available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Allowlist Strategy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                Allowlist Strategy
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Allowlists are the primary tool for reducing false positives, but they must be carefully managed to avoid creating security gaps.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Allowlist Type</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Use Case</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Risk Level</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Review Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">Domain Allowlist</td>
                      <td className="py-3 px-4">Trusted partner domains (verified)</td>
                      <td className="py-3 px-4"><span className="text-yellow-400">Medium</span></td>
                      <td className="py-3 px-4">Quarterly</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">Sender Allowlist</td>
                      <td className="py-3 px-4">Specific external contacts</td>
                      <td className="py-3 px-4"><span className="text-green-400">Low</span></td>
                      <td className="py-3 px-4">Monthly</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">IP Allowlist</td>
                      <td className="py-3 px-4">Known mail servers (vendors)</td>
                      <td className="py-3 px-4"><span className="text-yellow-400">Medium</span></td>
                      <td className="py-3 px-4">Quarterly</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">Attachment Type</td>
                      <td className="py-3 px-4">Allow .zip from verified senders</td>
                      <td className="py-3 px-4"><span className="text-red-400">High</span></td>
                      <td className="py-3 px-4">Monthly + audit</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">URL Pattern</td>
                      <td className="py-3 px-4">Known SaaS app domains</td>
                      <td className="py-3 px-4"><span className="text-green-400">Low</span></td>
                      <td className="py-3 px-4">Quarterly</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold mb-3 text-yellow-400">Allowlist Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Require DMARC pass for domain allowlists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Never allowlist free email providers (gmail.com)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Document business justification for each entry</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Set expiration dates on all entries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Alert on high-volume traffic from allowlisted sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Audit allowlists quarterly minimum</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Impersonation Protection */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-500" />
                Impersonation Protection
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Executive and brand impersonation are common BEC attack vectors. Configure impersonation protection carefully to avoid blocking legitimate communications.
              </p>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Protected User Configuration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Users to Protect</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>- C-suite executives (CEO, CFO, CTO, CISO)</li>
                      <li>- Finance team leads (AP/AR managers)</li>
                      <li>- HR leadership (CHRO, HR Director)</li>
                      <li>- IT administrators with privileged access</li>
                      <li>- Board members (external display names)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Trusted Senders (per protected user)</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>- Executive assistants</li>
                      <li>- Board communication platforms</li>
                      <li>- Legal counsel domains</li>
                      <li>- Known investor relations contacts</li>
                      <li>- Verified PR/communications agencies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-purple-400">Impersonation Detection Thresholds</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                    <span>Similarity threshold for display name match</span>
                    <span className="text-purple-400 font-mono">85%</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                    <span>Domain typosquat detection</span>
                    <span className="text-purple-400 font-mono">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                    <span>First contact safety tips</span>
                    <span className="text-purple-400 font-mono">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span>Action on impersonation</span>
                    <span className="text-purple-400 font-mono">Quarantine (Tier 2)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Automated Release Workflow */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                Automated Release Workflow
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                For Tier 3 quarantine (user self-release), implement intelligent automation to reduce false positives while maintaining security.
              </p>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Auto-Release Criteria</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Emails matching ALL of the following criteria can be auto-released after user request:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Sender has prior email history with recipient (30+ days)</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Sender domain passes DMARC/DKIM/SPF</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No executable attachments</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>URLs point to known safe domains</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No urgency/financial language patterns</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Recipient has not released 3+ emails from this sender recently</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold">Release Workflow Logic</h3>
                <div className="bg-zinc-800/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">
{`WHEN user requests release:
  IF email.threat_confidence < 50%
    AND sender.has_history_with_recipient(30_days)
    AND sender.dmarc_pass = TRUE
    AND email.attachments.none(is_executable)
    AND email.urls.all(in_safe_list OR sandbox_clean)
  THEN
    auto_release()
    log_event("auto_release", email, user)
    update_sender_reputation(+1)
  ELSE
    escalate_to_soc(priority: "standard")
    notify_user("Request under review")
    set_sla(response: 2_hours)`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Feedback Loop */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Feedback Loop Integration</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Use user feedback and release patterns to continuously improve detection accuracy and reduce false positives over time.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">User Reports</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>- Track "Not Junk" reports</li>
                    <li>- Monitor release request patterns</li>
                    <li>- Identify repeat false positives</li>
                    <li>- Auto-adjust sender reputation</li>
                  </ul>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">SOC Analysis</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>- Review released emails weekly</li>
                    <li>- Identify policy gaps</li>
                    <li>- Submit FP samples to Microsoft</li>
                    <li>- Tune detection thresholds</li>
                  </ul>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">Automation Tuning</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>- Adjust ML confidence thresholds</li>
                    <li>- Update allowlists automatically</li>
                    <li>- Retire stale rules</li>
                    <li>- Measure FP rate trends</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Metrics to Track */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Key Metrics</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Track these metrics to measure the effectiveness of your quarantine policies and identify areas for improvement.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Metric</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Target</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-semibold">Alert Threshold</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">False Positive Rate</td>
                      <td className="py-3 px-4 text-green-400">&lt; 0.5%</td>
                      <td className="py-3 px-4 text-red-400">&gt; 2%</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">User Release Rate (Tier 3)</td>
                      <td className="py-3 px-4 text-green-400">&lt; 20%</td>
                      <td className="py-3 px-4 text-red-400">&gt; 40%</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">SOC Release Request Volume</td>
                      <td className="py-3 px-4 text-green-400">&lt; 50/day</td>
                      <td className="py-3 px-4 text-red-400">&gt; 150/day</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">Mean Time to Release</td>
                      <td className="py-3 px-4 text-green-400">&lt; 30 min</td>
                      <td className="py-3 px-4 text-red-400">&gt; 2 hours</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-medium text-white">Phishing Click-Through (post-release)</td>
                      <td className="py-3 px-4 text-green-400">0%</td>
                      <td className="py-3 px-4 text-red-400">&gt; 0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>

              <div className="space-y-4">
                {[
                  {
                    mistake: "Allowlisting entire domains instead of specific senders",
                    fix: "Use sender-level allowlists with DMARC verification required",
                  },
                  {
                    mistake: "No expiration on allowlist entries",
                    fix: "Set 90-day max expiration with renewal workflow",
                  },
                  {
                    mistake: "Treating all quarantine tiers the same for reporting",
                    fix: "Track metrics per tier to identify specific policy issues",
                  },
                  {
                    mistake: "Ignoring user feedback patterns",
                    fix: "Auto-analyze release requests to identify false positive trends",
                  },
                  {
                    mistake: "Setting thresholds based on vendor defaults",
                    fix: "Tune thresholds based on your organization's actual traffic patterns",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">{item.mistake}</p>
                        <p className="text-sm text-gray-400 mt-1">
                          <span className="text-green-400">Fix:</span> {item.fix}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl border border-primary/30">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Automate Email Quarantine with BitLyft AIR</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  BitLyft AIR integrates with Microsoft 365 to provide intelligent email quarantine automation with built-in false positive reduction, automated release workflows, and continuous policy tuning.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Request a Demo</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Link href="/solutions/threat-detection">Learn About Threat Detection</Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}
