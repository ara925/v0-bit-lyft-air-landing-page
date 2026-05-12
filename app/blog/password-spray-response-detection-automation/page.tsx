import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Clock, Calendar, AlertTriangle, Shield, Zap, CheckCircle, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Password Spray Response: Detection Signals + Automation Steps | BitLyft AIR®",
  description:
    "Learn how to detect and respond to password spray attacks with automated containment. Covers detection signals, response workflows, and automation guidance for SOC teams.",
  openGraph: {
    title: "Password Spray Response: Detection Signals + Automation Steps",
    description:
      "Learn how to detect and respond to password spray attacks with automated containment. Covers detection signals, response workflows, and automation guidance for SOC teams.",
    type: "article",
    publishedTime: "2026-03-23",
  },
}

export default function PasswordSprayResponsePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cFFF] text-sm">
                Industry Insights
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="h-4 w-4" />
                23rd March, 2026
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="h-4 w-4" />
                12 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Password Spray Response: Detection Signals + Automation Steps
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Password spray attacks are designed to evade detection. They move slowly, spread across many accounts, and often fly under traditional alert thresholds. This guide covers the detection signals that matter, the response workflow that stops spray attacks before credential compromise, and how to automate containment without locking out legitimate users.
            </p>
          </div>
        </section>

        {/* What Makes Password Spray Different */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">What Makes Password Spray Different</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Unlike brute-force attacks that hammer a single account with thousands of password attempts, password spray attacks take a different approach: they try a small number of common passwords against many accounts simultaneously.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-4 px-4 text-white font-semibold">Characteristic</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Brute Force</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Password Spray</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 font-medium">Target</td>
                    <td className="py-4 px-4">Single account</td>
                    <td className="py-4 px-4">Many accounts</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 font-medium">Password attempts</td>
                    <td className="py-4 px-4">Thousands per account</td>
                    <td className="py-4 px-4">1-3 per account</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 font-medium">Speed</td>
                    <td className="py-4 px-4">Fast, aggressive</td>
                    <td className="py-4 px-4">Slow, distributed</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 font-medium">Lockout trigger</td>
                    <td className="py-4 px-4">Almost always</td>
                    <td className="py-4 px-4">Rarely (stays under threshold)</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 font-medium">Detection difficulty</td>
                    <td className="py-4 px-4">Easy</td>
                    <td className="py-4 px-4">Hard without correlation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Why This Matters</h4>
                  <p className="text-gray-300">
                    Password spray attacks are specifically designed to stay under lockout thresholds. If your detection relies on "5 failed logins in 5 minutes," spray attacks will never trigger it. You need correlation-based detection that looks across accounts, not within them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Signals */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Detection Signals That Matter</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Effective password spray detection requires correlating signals across multiple accounts and time windows. Here are the signals that reliably indicate spray activity:
            </p>

            <div className="space-y-6">
              {/* Signal 1 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">High Volume of Failed Authentications from Single IP</h3>
                    <p className="text-gray-400 mb-3">Multiple accounts receiving failed authentication attempts from the same source IP within a short window.</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-gray-300 font-mono">
                        Threshold: 10+ unique accounts with failed auth from same IP in 10 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal 2 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Identical Error Codes Across Accounts</h3>
                    <p className="text-gray-400 mb-3">Spray attacks often produce identical authentication error codes (like AADSTS50126 in Entra ID) across many accounts simultaneously.</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-gray-300 font-mono">
                        Look for: AADSTS50126 (invalid password), AADSTS50053 (locked out), AADSTS50057 (disabled account)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal 3 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Legacy Protocol Usage</h3>
                    <p className="text-gray-400 mb-3">Attackers often use legacy authentication protocols (IMAP, POP3, SMTP) that bypass MFA. Sudden spikes in legacy auth failures are a strong spray indicator.</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-gray-300 font-mono">
                        Client apps to monitor: Exchange ActiveSync, IMAP4, POP3, SMTP AUTH, Other clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal 4 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Suspicious User Agent Strings</h3>
                    <p className="text-gray-400 mb-3">Spray tools often use distinctive or outdated user agent strings. Watch for unusual patterns that don't match your normal traffic.</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-gray-300 font-mono">
                        Red flags: Python-urllib, curl, empty user agents, very old browser versions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal 5 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Geographic Anomalies</h3>
                    <p className="text-gray-400 mb-3">Failed authentications from unusual geographies, especially combined with other signals, indicate spray activity from external threat actors.</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-gray-300 font-mono">
                        Correlate: Source country + failed auth volume + time of day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal 6 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Sudden Success After Pattern of Failures</h3>
                    <p className="text-gray-400 mb-3">The most critical signal: a successful authentication immediately following the spray pattern indicates a compromised account.</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <p className="text-sm text-gray-300 font-mono">
                        CRITICAL: Success from spray IP/pattern = immediate containment required
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Matrix */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Detection Confidence Matrix</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Individual signals have varying confidence levels. Combining multiple signals increases detection accuracy and reduces false positives.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-4 px-4 text-white font-semibold">Signal Combination</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Confidence</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Recommended Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">High failed auth volume from single IP</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm">Medium</span></td>
                    <td className="py-4 px-4">Monitor, enrich with threat intel</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">+ Legacy protocol usage</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-sm">High</span></td>
                    <td className="py-4 px-4">Block IP, alert SOC</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">+ Suspicious user agent</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-sm">High</span></td>
                    <td className="py-4 px-4">Block IP, alert SOC</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">+ Geographic anomaly</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-sm">Very High</span></td>
                    <td className="py-4 px-4">Block IP, force MFA on targeted accounts</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">+ Successful auth in pattern</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-sm">Critical</span></td>
                    <td className="py-4 px-4">Immediate account containment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Response Workflow */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Automated Response Workflow</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Password spray response has two distinct tracks: blocking the attack source and containing any compromised accounts. Both should run in parallel.
            </p>

            {/* Track 1: Attack Source */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00cFFF]" />
                Track 1: Block Attack Source
              </h3>
              <div className="space-y-4">
                {[
                  { step: "1", action: "Identify source IP(s)", detail: "Extract all IPs associated with the spray pattern", auto: true },
                  { step: "2", action: "Enrich with threat intelligence", detail: "Check IP reputation, ASN, known malicious indicators", auto: true },
                  { step: "3", action: "Add to Conditional Access block list", detail: "Block IP at identity layer (Entra ID Named Locations)", auto: true },
                  { step: "4", action: "Block at network perimeter", detail: "Add to firewall/WAF blocklist if applicable", auto: true },
                  { step: "5", action: "Document IOCs", detail: "Log IPs, user agents, timing patterns for future correlation", auto: true },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 bg-zinc-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-[#2261db]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00cFFF] font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium">{item.action}</span>
                        {item.auto && (
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">Auto</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2: Compromised Accounts */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#00cFFF]" />
                Track 2: Contain Compromised Accounts
              </h3>
              <p className="text-gray-400 mb-4">Only triggered if successful authentication is detected within the spray pattern.</p>
              <div className="space-y-4">
                {[
                  { step: "1", action: "Revoke all sessions", detail: "Invalidate refresh tokens and active sessions immediately", auto: true },
                  { step: "2", action: "Force password reset", detail: "Require password change on next sign-in", auto: true },
                  { step: "3", action: "Require MFA re-registration", detail: "Clear existing MFA methods, force re-enrollment", auto: false, reason: "May need human approval" },
                  { step: "4", action: "Review recent activity", detail: "Check for inbox rules, OAuth apps, mailbox forwarding", auto: true },
                  { step: "5", action: "Remove suspicious artifacts", detail: "Delete malicious inbox rules, revoke OAuth grants", auto: false, reason: "Requires investigation" },
                  { step: "6", action: "Notify user and manager", detail: "Inform user of compromise and required actions", auto: true },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 bg-zinc-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-[#2261db]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00cFFF] font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium">{item.action}</span>
                        {item.auto ? (
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">Auto</span>
                        ) : (
                          <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">Human</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{item.detail}</p>
                      {item.reason && <p className="text-yellow-400 text-xs mt-1">{item.reason}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Automation Decision Guide */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">What to Automate vs. Human Review</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Not every password spray response action should be fully automated. Here's guidance on where automation adds value without creating risk.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Safe to Automate */}
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Safe to Fully Automate
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Block source IP at identity layer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Revoke sessions for compromised accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Force password reset</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Enrich IPs with threat intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Notify user and SOC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Log and document IOCs</span>
                  </li>
                </ul>
              </div>

              {/* Requires Human Review */}
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Requires Human Approval
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Force MFA re-registration (disrupts user)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Disable account entirely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Remove OAuth app consents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Delete inbox rules (may be legitimate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Block IP ranges (may affect legitimate users)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Escalate to executive accounts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Microsoft-Specific Signals */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Microsoft Entra ID Detection Reference</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              For organizations using Microsoft Entra ID (Azure AD), these are the specific log sources and detection signals to monitor.
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Sign-in Logs to Monitor</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00cFFF]">•</span>
                    <span><strong>Non-interactive sign-ins</strong> - Where most spray attempts appear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00cFFF]">•</span>
                    <span><strong>Service principal sign-ins</strong> - Application-based spray attempts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00cFFF]">•</span>
                    <span><strong>Risky sign-ins report</strong> - Built-in Identity Protection signals</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Key Error Codes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-2 px-3 text-white font-semibold">Code</th>
                        <th className="text-left py-2 px-3 text-white font-semibold">Meaning</th>
                        <th className="text-left py-2 px-3 text-white font-semibold">Spray Indicator</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 px-3 font-mono">AADSTS50126</td>
                        <td className="py-2 px-3">Invalid username or password</td>
                        <td className="py-2 px-3"><span className="text-red-400">Primary spray signal</span></td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 px-3 font-mono">AADSTS50053</td>
                        <td className="py-2 px-3">Account locked</td>
                        <td className="py-2 px-3">Spray exceeded lockout threshold</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 px-3 font-mono">AADSTS50057</td>
                        <td className="py-2 px-3">Disabled account</td>
                        <td className="py-2 px-3">Spray hitting disabled accounts</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 px-3 font-mono">AADSTS50034</td>
                        <td className="py-2 px-3">User doesn't exist</td>
                        <td className="py-2 px-3">Spray with enumerated usernames</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 px-3 font-mono">AADSTS50076</td>
                        <td className="py-2 px-3">MFA required</td>
                        <td className="py-2 px-3">Password correct, MFA blocked</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Entra ID Identity Protection Risk Detections</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00cFFF]">•</span>
                    <span><strong>Password spray</strong> - Built-in detection (medium confidence)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00cFFF]">•</span>
                    <span><strong>Unfamiliar sign-in properties</strong> - Anomalous login characteristics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00cFFF]">•</span>
                    <span><strong>Anonymous IP address</strong> - Sign-in from VPN/Tor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00cFFF]">•</span>
                    <span><strong>Atypical travel</strong> - Impossible travel correlation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Common Detection Mistakes</h2>

            <div className="space-y-4">
              {[
                {
                  mistake: "Relying only on per-account failed login thresholds",
                  problem: "Spray attacks stay under per-account limits by design",
                  fix: "Correlate failed logins across accounts from the same source"
                },
                {
                  mistake: "Ignoring non-interactive sign-in logs",
                  problem: "Most spray attacks target non-interactive endpoints",
                  fix: "Monitor all sign-in log types, not just interactive"
                },
                {
                  mistake: "Blocking entire IP ranges reactively",
                  problem: "May block legitimate users on shared infrastructure",
                  fix: "Block specific IPs, use Conditional Access for broader controls"
                },
                {
                  mistake: "Not checking for successful auth in spray pattern",
                  problem: "Missing the actual compromise among the noise",
                  fix: "Always check for successful auth from spray source IPs"
                },
                {
                  mistake: "Treating all spray detections equally",
                  problem: "Wasting time on low-confidence detections",
                  fix: "Use signal correlation to prioritize high-confidence detections"
                },
              ].map((item, index) => (
                <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-400" />
                    {item.mistake}
                  </h3>
                  <p className="text-gray-400 mb-2"><strong>Problem:</strong> {item.problem}</p>
                  <p className="text-gray-300"><strong>Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Automate Password Spray Response with BitLyft AIR</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                BitLyft AIR correlates password spray signals across your identity infrastructure and executes containment automatically—blocking attack sources and containing compromised accounts in seconds.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all"
              >
                See Automated Spray Response in Action
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/impossible-travel-risky-sign-ins-automated-triage"
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#2261db]/50 transition-all group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00cFFF] transition-colors mb-2">
                  Impossible Travel and Risky Sign-Ins: Automated Triage
                </h3>
                <p className="text-gray-400 text-sm">
                  Reduce false positives by 90%+ and respond to real identity threats in seconds.
                </p>
              </Link>
              <Link
                href="/blog/microsoft-entra-id-account-takeover-response-playbook"
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#2261db]/50 transition-all group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00cFFF] transition-colors mb-2">
                  Microsoft Entra ID Account Takeover Response Playbook
                </h3>
                <p className="text-gray-400 text-sm">
                  Complete playbook for containing and remediating compromised Entra ID accounts.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
