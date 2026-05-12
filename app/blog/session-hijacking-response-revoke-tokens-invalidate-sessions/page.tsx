import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RelatedArticles } from "@/components/related-articles"

export const metadata: Metadata = {
  title: "Session Hijacking Response: Revoke Tokens and Invalidate Sessions Automatically | BitLyft AIR®",
  description:
    "Learn how to detect and respond to session hijacking attacks with automated token revocation and session invalidation. Covers detection signals, response workflows, and automation guidance.",
}

export default function SessionHijackingResponsePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2261db]/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/resources">
              <Button variant="ghost" className="mb-6 text-gray-400 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Button>
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cFFF] text-sm">
                Industry Insights
              </span>
              <span className="text-gray-500 text-sm">30th March, 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Session Hijacking Response: Revoke Tokens and Invalidate Sessions Automatically
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Session hijacking bypasses authentication entirely. Learn how to detect stolen sessions and respond with automated token revocation and session invalidation in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-white mt-0 mb-4">Why Session Hijacking Is Different</h2>
                <p className="text-gray-300 mb-4">
                  Unlike credential-based attacks that target the authentication process, session hijacking attacks target what happens after authentication. The attacker doesn&apos;t need your password — they need your session token.
                </p>
                <p className="text-gray-300 mb-4">
                  Once an attacker has a valid session token, they bypass MFA, SSO, and every other authentication control you have in place. The token itself proves they&apos;re authenticated.
                </p>
                <p className="text-gray-300 mb-0">
                  This makes detection harder and response more urgent. Every second a hijacked session remains active is a second the attacker has full access to the victim&apos;s resources.
                </p>
              </div>

              {/* How Attackers Steal Sessions */}
              <h2 className="text-2xl font-bold text-white mb-6">How Attackers Steal Sessions</h2>
              <p className="text-gray-300 mb-6">
                Understanding the attack vectors helps you build better detection. Session tokens are stolen through:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  {
                    method: "Infostealer Malware",
                    description: "Malware that harvests browser cookies, including session tokens, from infected endpoints",
                    prevalence: "Most common",
                  },
                  {
                    method: "Adversary-in-the-Middle (AiTM)",
                    description: "Phishing proxies that intercept tokens during legitimate authentication flows",
                    prevalence: "Rising fast",
                  },
                  {
                    method: "Cross-Site Scripting (XSS)",
                    description: "Web vulnerabilities that let attackers extract cookies from victim browsers",
                    prevalence: "Common",
                  },
                  {
                    method: "Token Theft from Logs",
                    description: "Tokens accidentally logged in application logs, error messages, or URLs",
                    prevalence: "Occasional",
                  },
                ].map((vector) => (
                  <div key={vector.method} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">{vector.method}</h4>
                      <span className="text-xs px-2 py-1 bg-zinc-800 text-gray-400 rounded">{vector.prevalence}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-0">{vector.description}</p>
                  </div>
                ))}
              </div>

              {/* Detection Signals */}
              <h2 className="text-2xl font-bold text-white mb-6">Detection Signals for Session Hijacking</h2>
              <p className="text-gray-300 mb-6">
                Session hijacking leaves distinctive patterns. The challenge is correlating signals to separate real attacks from legitimate user behavior.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-3 px-4 text-white font-semibold">Signal</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">What It Looks Like</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Confidence</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {[
                      {
                        signal: "Concurrent Session Anomaly",
                        indicator: "Same token used from two different IPs/devices simultaneously",
                        confidence: "High",
                      },
                      {
                        signal: "Device Fingerprint Mismatch",
                        indicator: "Token presented with different browser, OS, or device than original auth",
                        confidence: "High",
                      },
                      {
                        signal: "Impossible Travel",
                        indicator: "Token used from geographically impossible locations within short timeframe",
                        confidence: "Medium-High",
                      },
                      {
                        signal: "IP Reputation Change",
                        indicator: "Token suddenly used from known malicious IP, VPN exit node, or hosting provider",
                        confidence: "Medium",
                      },
                      {
                        signal: "Session Age Anomaly",
                        indicator: "Very old token suddenly becomes active after long dormancy",
                        confidence: "Medium",
                      },
                      {
                        signal: "Behavioral Deviation",
                        indicator: "Session exhibits actions inconsistent with user&apos;s normal patterns",
                        confidence: "Medium",
                      },
                    ].map((row) => (
                      <tr key={row.signal} className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">{row.signal}</td>
                        <td className="py-3 px-4">{row.indicator}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            row.confidence === "High" ? "bg-red-500/20 text-red-400" :
                            row.confidence === "Medium-High" ? "bg-orange-500/20 text-orange-400" :
                            "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {row.confidence}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Signal Correlation */}
              <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-white mt-0 mb-4">Signal Correlation Matrix</h3>
                <p className="text-gray-300 mb-4">
                  Single signals can produce false positives. Correlated signals confirm attacks:
                </p>
                <div className="space-y-3">
                  {[
                    { signals: "Concurrent session + Device mismatch", action: "Auto-revoke immediately", severity: "Critical" },
                    { signals: "Impossible travel + IP reputation change", action: "Auto-revoke immediately", severity: "Critical" },
                    { signals: "Device mismatch + Behavioral deviation", action: "Auto-revoke + investigate", severity: "High" },
                    { signals: "Single high-confidence signal", action: "Step-up auth or revoke", severity: "High" },
                    { signals: "Single medium-confidence signal", action: "Monitor + alert analyst", severity: "Medium" },
                  ].map((combo) => (
                    <div key={combo.signals} className="flex items-center justify-between bg-zinc-900/50 rounded-lg p-3">
                      <span className="text-gray-300 text-sm">{combo.signals}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm">{combo.action}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          combo.severity === "Critical" ? "bg-red-500/20 text-red-400" :
                          combo.severity === "High" ? "bg-orange-500/20 text-orange-400" :
                          "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {combo.severity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automated Response Workflow */}
              <h2 className="text-2xl font-bold text-white mb-6">Automated Response Workflow</h2>
              <p className="text-gray-300 mb-6">
                Session hijacking response has one goal: cut off the attacker&apos;s access before they can do damage. This requires a multi-layer approach.
              </p>

              <div className="space-y-6 mb-12">
                {/* Step 1 */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#2261db] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <h3 className="text-xl font-bold text-white m-0">Immediate Token Revocation</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Revoke all active tokens for the affected user. Not just the suspicious one — all of them.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Revoke OAuth access tokens",
                      "Revoke refresh tokens",
                      "Invalidate session cookies",
                      "Clear cached credentials",
                    ].map((action) => (
                      <div key={action} className="flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
                        <svg className="h-4 w-4 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-gray-300 text-sm">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#2261db] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <h3 className="text-xl font-bold text-white m-0">Force Re-Authentication</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    After revoking tokens, force the user to re-authenticate through a trusted channel.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Trigger MFA re-enrollment if compromised",
                      "Require password reset for high-severity",
                      "Use step-up authentication",
                      "Verify identity through secondary channel",
                    ].map((action) => (
                      <div key={action} className="flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
                        <svg className="h-4 w-4 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-gray-300 text-sm">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#2261db] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <h3 className="text-xl font-bold text-white m-0">Block Attacker Infrastructure</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Prevent the attacker from continuing to use the stolen token or attempting new attacks.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Block source IP at firewall/WAF",
                      "Add to conditional access block list",
                      "Flag device fingerprint as untrusted",
                      "Update threat intelligence feeds",
                    ].map((action) => (
                      <div key={action} className="flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
                        <svg className="h-4 w-4 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-gray-300 text-sm">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#2261db] rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <h3 className="text-xl font-bold text-white m-0">Assess Damage and Scope</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Determine what the attacker accessed and whether other accounts are affected.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Audit all actions during hijacked session",
                      "Check for data access or exfiltration",
                      "Review OAuth app consents granted",
                      "Scan for persistence mechanisms",
                    ].map((action) => (
                      <div key={action} className="flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
                        <svg className="h-4 w-4 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-gray-300 text-sm">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platform-Specific Commands */}
              <h2 className="text-2xl font-bold text-white mb-6">Platform-Specific Token Revocation</h2>
              <p className="text-gray-300 mb-6">
                Each identity platform has different APIs for session and token revocation:
              </p>

              <div className="space-y-4 mb-12">
                {[
                  {
                    platform: "Microsoft Entra ID",
                    actions: [
                      "Revoke-AzureADUserAllRefreshToken",
                      "Invalidate all refresh tokens via Graph API",
                      "Revoke sign-in sessions",
                      "Enable Continuous Access Evaluation (CAE)",
                    ],
                  },
                  {
                    platform: "Okta",
                    actions: [
                      "Clear user sessions via /api/v1/users/{userId}/sessions",
                      "Revoke all tokens via /api/v1/users/{userId}/credentials/reset",
                      "Remove trusted devices",
                      "Force re-enrollment",
                    ],
                  },
                  {
                    platform: "Google Workspace",
                    actions: [
                      "Revoke all OAuth tokens via Admin SDK",
                      "Sign out user from all sessions",
                      "Invalidate backup/recovery codes",
                      "Reset sign-in cookies",
                    ],
                  },
                ].map((platform) => (
                  <div key={platform.platform} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">{platform.platform}</h4>
                    <ul className="space-y-2 mb-0">
                      {platform.actions.map((action) => (
                        <li key={action} className="flex items-start gap-2 text-gray-300 text-sm">
                          <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <code className="text-gray-400">{action}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Automation Decision Matrix */}
              <h2 className="text-2xl font-bold text-white mb-6">What to Automate vs. Human Review</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-green-400 font-bold mb-4 mt-0">Safe to Automate</h3>
                  <ul className="space-y-2 mb-0">
                    {[
                      "Revoke tokens on correlated high-confidence signals",
                      "Force re-authentication for suspicious sessions",
                      "Block known-malicious IPs",
                      "Alert user via secondary channel",
                      "Collect forensic data for investigation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-400" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                  <h3 className="text-yellow-400 font-bold mb-4 mt-0">Requires Human Review</h3>
                  <ul className="space-y-2 mb-0">
                    {[
                      "Account lockout decisions for executives/VIPs",
                      "Password reset mandates for single signals",
                      "Revoking third-party app access",
                      "Notifying external parties of potential breach",
                      "Escalation to legal or compliance teams",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-yellow-400" viewBox="0 0 24 24" fill="none">
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Preventive Controls */}
              <h2 className="text-2xl font-bold text-white mb-6">Preventive Controls to Reduce Risk</h2>
              <p className="text-gray-300 mb-6">
                Response is necessary, but prevention reduces your attack surface:
              </p>

              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-3 px-4 text-white font-semibold">Control</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">What It Does</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Effectiveness</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {[
                      {
                        control: "Token Binding / PoP",
                        description: "Binds tokens to specific devices, making stolen tokens unusable elsewhere",
                        effectiveness: "Very High",
                      },
                      {
                        control: "Continuous Access Evaluation",
                        description: "Revokes access in near-real-time when risk conditions change",
                        effectiveness: "High",
                      },
                      {
                        control: "Short Token Lifetimes",
                        description: "Reduces window of opportunity for token reuse",
                        effectiveness: "Medium-High",
                      },
                      {
                        control: "Device Trust Requirements",
                        description: "Only allows sessions from managed/compliant devices",
                        effectiveness: "High",
                      },
                      {
                        control: "Conditional Access Policies",
                        description: "Blocks sign-ins from risky locations, IPs, or device states",
                        effectiveness: "Medium-High",
                      },
                    ].map((row) => (
                      <tr key={row.control} className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">{row.control}</td>
                        <td className="py-3 px-4">{row.description}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            row.effectiveness === "Very High" ? "bg-green-500/20 text-green-400" :
                            row.effectiveness === "High" ? "bg-blue-500/20 text-blue-400" :
                            "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {row.effectiveness}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Common Mistakes */}
              <h2 className="text-2xl font-bold text-white mb-6">Common Mistakes in Session Hijacking Response</h2>

              <div className="space-y-4 mb-12">
                {[
                  {
                    mistake: "Only revoking the suspicious token",
                    problem: "Attacker may have multiple tokens or can generate new ones from refresh token",
                    fix: "Revoke ALL tokens and sessions for the affected user",
                  },
                  {
                    mistake: "Relying on token expiration",
                    problem: "Tokens may be valid for hours or days — too long to wait",
                    fix: "Actively revoke, don't wait for expiration",
                  },
                  {
                    mistake: "Not checking for persistence",
                    problem: "Attacker may have planted OAuth apps, mail rules, or other backdoors",
                    fix: "Full audit of consents, rules, and delegated access",
                  },
                  {
                    mistake: "Treating impossible travel as definitive",
                    problem: "VPNs, mobile carriers, and cloud proxies create legitimate impossible travel",
                    fix: "Correlate with other signals before automated revocation",
                  },
                  {
                    mistake: "No user notification",
                    problem: "User doesn't know their session was compromised, can't report related activity",
                    fix: "Alert user through secondary channel after containment",
                  },
                ].map((item) => (
                  <div key={item.mistake} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold mb-2">{item.mistake}</h4>
                    <p className="text-gray-400 text-sm mb-2"><strong>Problem:</strong> {item.problem}</p>
                    <p className="text-gray-300 text-sm mb-0"><strong>Fix:</strong> {item.fix}</p>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-white mt-0 mb-4">Key Takeaways</h2>
                <ul className="space-y-3 mb-0">
                  {[
                    "Session hijacking bypasses authentication — the token IS the credential",
                    "Correlate signals (device mismatch + concurrent use + IP change) for high-confidence detection",
                    "Revoke ALL tokens, not just the suspicious one — attackers often have multiple",
                    "Enable Continuous Access Evaluation (CAE) for near-real-time revocation",
                    "Token binding (PoP) is the most effective preventive control for stopping token replay",
                    "Always audit for persistence mechanisms after containment",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-300">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mt-0 mb-4">Automate Session Hijacking Response with BitLyft AIR</h2>
                <p className="text-gray-400 mb-6">
                  BitLyft AIR detects session hijacking signals, correlates them automatically, and revokes tokens and sessions in seconds — not hours.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all"
                >
                  See Automated Response in Action
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles currentSlug="session-hijacking-response-revoke-tokens-invalidate-sessions" />
    </main>
  )
}
