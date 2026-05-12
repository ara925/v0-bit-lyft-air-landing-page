import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "MFA Reset Social Engineering: Detect and Auto-Block Risky Requests | BitLyft AIR®",
  description:
    "Learn how to detect and automatically block social engineering attacks targeting MFA reset requests. Covers help desk attack patterns, detection signals, and automated response workflows.",
}

export default function MFAResetSocialEngineeringBlogPost() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-[#2261db]/20 text-[#00cFFF] rounded-full mb-4">
              Industry Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              MFA Reset Social Engineering: Detect and Auto-Block Risky Requests
            </h1>
            <p className="text-gray-400 text-lg">10th April, 2026</p>
          </div>

          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-6 mb-8">
            <p className="text-gray-300 m-0">
              <strong className="text-white">TL;DR:</strong> Social engineering attacks targeting help desk MFA resets have become a primary attack vector for groups like Scattered Spider and ShinyHunters. Automated detection and blocking of high-risk reset requests can stop these attacks before credentials are compromised.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why MFA Reset is the New Attack Surface</h2>
          <p className="text-gray-300 leading-relaxed">
            As organizations have hardened technical defenses, attackers have shifted to targeting the human element — specifically help desk staff processing MFA reset requests. A single successful social engineering call can bypass all your security controls, MFA included.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Recent high-profile breaches at MGM Resorts, Caesars Entertainment, and Okta customers all originated from help desk social engineering. The attack is devastatingly simple: call the help desk, impersonate an employee, request an MFA reset, and walk right in.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Help Desk Attack Chain</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Understanding how these attacks unfold reveals multiple detection opportunities:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-semibold">Stage</th>
                  <th className="px-4 py-3 text-left text-white font-semibold">Attacker Action</th>
                  <th className="px-4 py-3 text-left text-white font-semibold">Detection Opportunity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-[#00cFFF] font-medium">1. Reconnaissance</td>
                  <td className="px-4 py-3 text-gray-300">Gather employee info from LinkedIn, data breaches</td>
                  <td className="px-4 py-3 text-gray-300">Dark web monitoring for exposed credentials</td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-[#00cFFF] font-medium">2. Initial Contact</td>
                  <td className="px-4 py-3 text-gray-300">Call help desk impersonating employee</td>
                  <td className="px-4 py-3 text-gray-300">Caller ID spoofing detection, voice verification</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-[#00cFFF] font-medium">3. Social Engineering</td>
                  <td className="px-4 py-3 text-gray-300">Create urgency, bypass verification questions</td>
                  <td className="px-4 py-3 text-gray-300">Script deviation alerts, identity verification gaps</td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-[#00cFFF] font-medium">4. MFA Reset</td>
                  <td className="px-4 py-3 text-gray-300">Help desk resets MFA to attacker device</td>
                  <td className="px-4 py-3 text-gray-300">Reset request pattern analysis, risk scoring</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-[#00cFFF] font-medium">5. Account Access</td>
                  <td className="px-4 py-3 text-gray-300">Login with reset credentials from new location</td>
                  <td className="px-4 py-3 text-gray-300">Post-reset login anomaly detection</td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-[#00cFFF] font-medium">6. Persistence</td>
                  <td className="px-4 py-3 text-gray-300">Register additional MFA devices, OAuth apps</td>
                  <td className="px-4 py-3 text-gray-300">New device registration alerting</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">High-Risk Reset Request Indicators</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Not all MFA reset requests are equal. These signals indicate elevated risk:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-semibold">Risk Signal</th>
                  <th className="px-4 py-3 text-left text-white font-semibold">Why It Matters</th>
                  <th className="px-4 py-3 text-left text-white font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-gray-300">VIP/privileged account</td>
                  <td className="px-4 py-3 text-gray-300">Attackers target high-value accounts first</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">Critical</span></td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-gray-300">Recent failed login attempts</td>
                  <td className="px-4 py-3 text-gray-300">Attacker may have password but not MFA</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">Critical</span></td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-gray-300">Multiple resets in short timeframe</td>
                  <td className="px-4 py-3 text-gray-300">Indicates systematic targeting or failed attempts</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">Critical</span></td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-gray-300">Request outside business hours</td>
                  <td className="px-4 py-3 text-gray-300">Attackers often work off-hours when scrutiny is lower</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">High</span></td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-gray-300">User on PTO/leave</td>
                  <td className="px-4 py-3 text-gray-300">Legitimate user unlikely to need reset while away</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">High</span></td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-gray-300">Callback number differs from HR records</td>
                  <td className="px-4 py-3 text-gray-300">Attacker wants call on their controlled line</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">High</span></td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-gray-300">Recent password reset</td>
                  <td className="px-4 py-3 text-gray-300">Chained resets often indicate compromise</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">High</span></td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-gray-300">Urgency pressure from caller</td>
                  <td className="px-4 py-3 text-gray-300">Social engineering tactic to bypass procedures</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-medium">Medium</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Automated Detection Signals</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Build automated detection by correlating these signals from your identity provider and ITSM system:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                signal: "MFA Reset + Failed Logins (24h)",
                source: "IdP + ITSM",
                confidence: "High",
                action: "Block reset, require manager approval"
              },
              {
                signal: "MFA Reset + Privileged Role",
                source: "IdP + HR System",
                confidence: "High",
                action: "Block reset, require secondary verification"
              },
              {
                signal: "MFA Reset + User on Leave",
                source: "ITSM + HR System",
                confidence: "High",
                action: "Block reset, alert security team"
              },
              {
                signal: "Multiple MFA Resets (Same User, 7d)",
                source: "IdP Audit Logs",
                confidence: "High",
                action: "Block subsequent resets, investigate"
              },
              {
                signal: "MFA Reset + Off-Hours Request",
                source: "ITSM + Time Analysis",
                confidence: "Medium",
                action: "Require video verification callback"
              },
              {
                signal: "Post-Reset Login from New Location",
                source: "IdP Sign-in Logs",
                confidence: "High",
                action: "Force re-authentication, alert SOC"
              },
            ].map((item) => (
              <div key={item.signal} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-white font-semibold mb-1">{item.signal}</p>
                    <p className="text-gray-400 text-sm">Source: {item.source}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                    item.confidence === "High" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {item.confidence} Confidence
                  </span>
                </div>
                <p className="text-[#00cFFF] text-sm mt-2">Action: {item.action}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Automated Response Workflow</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A tiered response based on cumulative risk score:
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-[#00cFFF] font-semibold mb-2">Tier 1: Low Risk (Score 0-2)</h4>
                <p className="text-gray-400 text-sm mb-2">Standard user, business hours, no anomalies</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>- Process reset with standard verification</li>
                  <li>- Log request for audit trail</li>
                  <li>- Send confirmation to user{"'"}s manager</li>
                </ul>
              </div>

              <div className="border-t border-zinc-700 pt-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Tier 2: Medium Risk (Score 3-5)</h4>
                <p className="text-gray-400 text-sm mb-2">Some risk indicators present</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>- Require video callback verification</li>
                  <li>- Verify against secondary contact (manager, HR)</li>
                  <li>- Implement 30-minute delay before activation</li>
                  <li>- Alert SOC for monitoring</li>
                </ul>
              </div>

              <div className="border-t border-zinc-700 pt-4">
                <h4 className="text-orange-400 font-semibold mb-2">Tier 3: High Risk (Score 6-8)</h4>
                <p className="text-gray-400 text-sm mb-2">Multiple risk indicators or privileged account</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>- Block automated reset</li>
                  <li>- Require in-person verification with photo ID</li>
                  <li>- Mandatory manager approval via secure channel</li>
                  <li>- SOC review before processing</li>
                </ul>
              </div>

              <div className="border-t border-zinc-700 pt-4">
                <h4 className="text-red-400 font-semibold mb-2">Tier 4: Critical Risk (Score 9+)</h4>
                <p className="text-gray-400 text-sm mb-2">Strong attack indicators present</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>- Block reset completely</li>
                  <li>- Lock account temporarily</li>
                  <li>- Alert SOC immediately</li>
                  <li>- Initiate incident response investigation</li>
                  <li>- Require CISO/security leadership approval</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Post-Reset Monitoring</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Even legitimate resets should trigger enhanced monitoring for 72 hours:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                monitor: "Login Location",
                alert: "First login from unexpected geography"
              },
              {
                monitor: "Device Registration",
                alert: "New device or browser added"
              },
              {
                monitor: "OAuth Consent",
                alert: "New application authorizations"
              },
              {
                monitor: "Mailbox Rules",
                alert: "Forwarding rules created"
              },
              {
                monitor: "Privilege Changes",
                alert: "Role or group membership changes"
              },
              {
                monitor: "Data Access",
                alert: "Unusual file or resource access patterns"
              },
            ].map((item) => (
              <div key={item.monitor} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                <p className="text-white font-semibold">{item.monitor}</p>
                <p className="text-gray-400 text-sm mt-1">Alert on: {item.alert}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The 90% Solution: Phishing-Resistant MFA</h2>
          <p className="text-gray-300 leading-relaxed">
            The most effective defense against MFA reset social engineering is eliminating resetable MFA methods entirely. Phishing-resistant methods like FIDO2 security keys and passkeys cannot be socially engineered:
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 my-6">
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#00cFFF]">1.</span>
                <span><strong>FIDO2 Security Keys</strong> — Hardware-bound credentials that cannot be reset via help desk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cFFF]">2.</span>
                <span><strong>Passkeys</strong> — Device-bound credentials synced via secure platform mechanisms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cFFF]">3.</span>
                <span><strong>Certificate-Based Auth</strong> — PKI credentials provisioned through secure enrollment</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Automation Decision Matrix</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            What to automate versus what requires human judgment:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-semibold">Action</th>
                  <th className="px-4 py-3 text-left text-white font-semibold">Automate?</th>
                  <th className="px-4 py-3 text-left text-white font-semibold">Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-gray-300">Risk score calculation</td>
                  <td className="px-4 py-3"><span className="text-green-400 font-medium">Yes</span></td>
                  <td className="px-4 py-3 text-gray-300">Real-time scoring enables consistent decisions</td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-gray-300">Low-risk reset processing</td>
                  <td className="px-4 py-3"><span className="text-green-400 font-medium">Yes</span></td>
                  <td className="px-4 py-3 text-gray-300">Standard requests with full logging</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-gray-300">Block high-risk requests</td>
                  <td className="px-4 py-3"><span className="text-green-400 font-medium">Yes</span></td>
                  <td className="px-4 py-3 text-gray-300">Prevent processing until human review</td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-gray-300">Post-reset monitoring alerts</td>
                  <td className="px-4 py-3"><span className="text-green-400 font-medium">Yes</span></td>
                  <td className="px-4 py-3 text-gray-300">72-hour enhanced monitoring window</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-gray-300">High-risk reset approval</td>
                  <td className="px-4 py-3"><span className="text-yellow-400 font-medium">Partial</span></td>
                  <td className="px-4 py-3 text-gray-300">Route to human, automate workflow</td>
                </tr>
                <tr className="bg-zinc-900/30">
                  <td className="px-4 py-3 text-gray-300">Identity verification</td>
                  <td className="px-4 py-3"><span className="text-red-400 font-medium">No</span></td>
                  <td className="px-4 py-3 text-gray-300">Human judgment required for edge cases</td>
                </tr>
                <tr className="bg-zinc-900/50">
                  <td className="px-4 py-3 text-gray-300">Account lockout decision</td>
                  <td className="px-4 py-3"><span className="text-yellow-400 font-medium">Partial</span></td>
                  <td className="px-4 py-3 text-gray-300">Auto-lock on critical risk, human review otherwise</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                mistake: "Relying solely on knowledge-based verification",
                problem: "Attackers can easily obtain answers from social media and data breaches",
                fix: "Use out-of-band verification via secondary channels"
              },
              {
                mistake: "No risk differentiation between users",
                problem: "Executive and privileged accounts get same treatment as standard users",
                fix: "Implement tiered verification based on account privilege level"
              },
              {
                mistake: "Processing resets under pressure",
                problem: "Urgency is a core social engineering tactic",
                fix: "Mandatory cooling-off period for high-risk resets"
              },
              {
                mistake: "No post-reset monitoring",
                problem: "Compromised account acts normally until damage is done",
                fix: "72-hour enhanced monitoring window after any reset"
              },
              {
                mistake: "Help desk can bypass all controls",
                problem: "Single point of failure if help desk is compromised",
                fix: "Require dual approval for privileged account resets"
              },
            ].map((item) => (
              <div key={item.mistake} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                <p className="text-red-400 font-semibold mb-1">{item.mistake}</p>
                <p className="text-gray-400 text-sm mb-2">Problem: {item.problem}</p>
                <p className="text-[#00cFFF] text-sm">Fix: {item.fix}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Key Takeaways</h2>
          <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-6">
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#00cFFF]">•</span>
                <span>MFA reset requests are a primary attack vector for sophisticated threat actors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cFFF]">•</span>
                <span>Correlate reset requests with context signals for real-time risk scoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cFFF]">•</span>
                <span>Implement tiered response based on risk score, not one-size-fits-all</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cFFF]">•</span>
                <span>Monitor all accounts for 72 hours post-reset regardless of risk level</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00cFFF]">•</span>
                <span>Phishing-resistant MFA eliminates the reset attack surface entirely</span>
              </li>
            </ul>
          </div>
        </article>

        <RelatedArticles currentSlug="mfa-reset-social-engineering-detect-auto-block" />
      </main>

      <Footer />
    </div>
  )
}
