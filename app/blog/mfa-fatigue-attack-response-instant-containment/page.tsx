import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "MFA Fatigue Attack Response: Instant Containment Steps for Identity-First SOCs | BitLyft AIR®",
  description:
    "Learn how to detect and respond to MFA fatigue (push bombing) attacks with instant containment. Covers detection signals, automated response workflows, and identity hardening for SOC teams.",
  openGraph: {
    title: "MFA Fatigue Attack Response: Instant Containment Steps for Identity-First SOCs",
    description:
      "Learn how to detect and respond to MFA fatigue (push bombing) attacks with instant containment. Covers detection signals, automated response workflows, and identity hardening for SOC teams.",
    type: "article",
    publishedTime: "2026-03-27",
  },
}

export default function MFAFatigueResponsePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-32 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full text-[#00cFFF] text-sm font-medium">
                Industry Insights
              </span>
              <span className="text-gray-500 text-sm">27th March, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              MFA Fatigue Attack Response: Instant Containment Steps for Identity-First SOCs
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              MFA fatigue attacks exploit human behavior, not technical vulnerabilities. Learn how identity-first SOCs detect push bombing in real time and contain compromised accounts in seconds.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">

              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">The Human Vulnerability MFA Can&apos;t Fix</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  MFA fatigue — also called push bombing or MFA bombing — is a social engineering attack where adversaries flood a user with authentication prompts until they approve one out of frustration, confusion, or exhaustion. The attacker already has the password. They just need the victim to tap &quot;Approve.&quot;
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  High-profile breaches at Uber, Cisco, and Microsoft have all involved MFA fatigue as the initial access vector. The attack works because it exploits human behavior, not technical flaws — and traditional MFA implementations have no built-in protection against it.
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-8">
                  <p className="text-[#00cFFF] font-semibold mb-2">Key Insight</p>
                  <p className="text-gray-300">
                    MFA fatigue attacks succeed because they target the user, not the system. Identity-first SOCs must detect the behavioral pattern and contain the account before the user makes a mistake.
                  </p>
                </div>
              </section>

              {/* How the Attack Works */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">How MFA Fatigue Attacks Work</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The attack follows a predictable sequence that SOC teams can detect at multiple stages:
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-6">
                  <div className="space-y-4">
                    {[
                      ["1. Credential Theft", "Attacker obtains valid username and password via phishing, credential stuffing, or dark web purchase"],
                      ["2. Authentication Attempt", "Attacker initiates login, triggering MFA prompt to the legitimate user's device"],
                      ["3. Push Flood", "Attacker repeats login attempts rapidly, sending dozens or hundreds of push notifications"],
                      ["4. User Fatigue", "Victim approves a prompt to stop the notifications — often late at night or during a busy period"],
                      ["5. Account Takeover", "Attacker gains access, establishes persistence, and begins lateral movement"],
                    ].map(([step, desc]) => (
                      <div key={step} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#00cFFF] mt-2.5 flex-shrink-0" />
                        <div>
                          <p className="text-white font-semibold">{step}</p>
                          <p className="text-gray-400 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  The entire attack can complete in minutes. Response must be faster.
                </p>
              </section>

              {/* Detection Signals */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Detection Signals for MFA Fatigue</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Identity-first SOCs detect MFA fatigue by correlating multiple signals from authentication logs, MFA provider telemetry, and user behavior analytics.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-white font-semibold">Signal</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Detection Threshold</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {[
                        ["Rapid push denials", "3+ denied prompts in 5 minutes", "High"],
                        ["Push flood volume", "5+ prompts in 10 minutes", "High"],
                        ["Off-hours authentication", "Prompts between 10pm-6am user local time", "Medium"],
                        ["Unusual source IP/location", "Authentication from new geography or ASN", "Medium"],
                        ["Approval after denials", "Approval following 2+ denials in same session", "Critical"],
                        ["User-reported concern", "User contacts IT about unexpected prompts", "Critical"],
                      ].map(([signal, threshold, confidence]) => (
                        <tr key={signal} className="border-b border-zinc-800/50">
                          <td className="py-3 px-4 font-medium text-white">{signal}</td>
                          <td className="py-3 px-4">{threshold}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              confidence === "Critical" ? "bg-red-500/20 text-red-400" :
                              confidence === "High" ? "bg-orange-500/20 text-orange-400" :
                              "bg-yellow-500/20 text-yellow-400"
                            }`}>
                              {confidence}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <p className="text-[#00cFFF] font-semibold mb-2">Signal Correlation</p>
                  <p className="text-gray-300 mb-4">
                    Single signals may indicate legitimate user behavior. Combining signals increases confidence:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">Critical:</span>
                      <span>Push flood + unusual IP + approval after denials = Confirmed attack, immediate lockdown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">High:</span>
                      <span>Push flood + off-hours = Likely attack, suspend MFA and investigate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">Medium:</span>
                      <span>Rapid denials alone = Possible attack, monitor and alert user</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Instant Containment */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Instant Containment: The First 60 Seconds</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  MFA fatigue response must be faster than the user&apos;s decision-making. The goal is to break the attack chain before approval — or contain damage immediately if approval occurred.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">If Attack is In Progress (No Approval Yet)</h3>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-6">
                  <div className="space-y-4">
                    {[
                      ["Suspend MFA prompts", "Temporarily disable push notifications for the targeted account to stop the flood"],
                      ["Block source IP/ASN", "Add the attacking IP range to conditional access deny list"],
                      ["Alert the user", "Send out-of-band notification (SMS, call, Slack) warning the user not to approve"],
                      ["Notify SOC", "Create high-priority incident for immediate analyst review"],
                    ].map(([action, desc]) => (
                      <div key={action} className="flex items-start gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                          <p className="text-white font-semibold">{action}</p>
                          <p className="text-gray-400 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">If Approval Occurred (Account Compromised)</h3>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                  <p className="text-red-400 font-semibold mb-4">Immediate Actions (Automated)</p>
                  <div className="space-y-4">
                    {[
                      ["Revoke all sessions", "Terminate every active session for the compromised account immediately"],
                      ["Reset credentials", "Force password reset and invalidate existing password"],
                      ["Disable MFA device", "Remove the potentially compromised authenticator from the account"],
                      ["Block sign-ins", "Temporarily disable the account pending investigation"],
                      ["Preserve evidence", "Capture authentication logs, session data, and MFA telemetry"],
                    ].map(([action, desc]) => (
                      <div key={action} className="flex items-start gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                          <p className="text-white font-semibold">{action}</p>
                          <p className="text-gray-400 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Post-Incident Investigation */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Post-Incident Investigation Checklist</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  After containment, investigate to determine blast radius and identify persistence mechanisms.
                </p>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-6">
                  <div className="space-y-4">
                    {[
                      ["Review session activity", "What actions occurred after the approved MFA prompt? Look for mailbox access, file downloads, OAuth grants."],
                      ["Check for persistence", "Did the attacker register new MFA devices, create mail rules, or add OAuth apps?"],
                      ["Identify credential source", "How did the attacker obtain the password? Phishing, credential stuffing, or dark web leak?"],
                      ["Assess lateral movement", "Did the attacker access other accounts, shared mailboxes, or sensitive resources?"],
                      ["Review similar accounts", "Are other accounts showing early-stage MFA fatigue signals?"],
                    ].map(([task, desc]) => (
                      <div key={task} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#00cFFF] text-xs font-bold">?</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">{task}</p>
                          <p className="text-gray-400 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Identity Hardening */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Identity Hardening: Preventing Future Attacks</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  MFA fatigue attacks succeed because basic push MFA has no defense against approval coercion. Hardening the identity layer eliminates the vulnerability.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-white font-semibold">Hardening Step</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Impact</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Priority</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {[
                        ["Enable number matching", "User must enter a number from the login screen — eliminates blind approvals", "Critical"],
                        ["Require phishing-resistant MFA", "FIDO2/WebAuthn keys cannot be approved remotely — attack becomes impossible", "Critical"],
                        ["Set push rate limits", "Limit prompts to 3 per 15 minutes — prevents flooding", "High"],
                        ["Enable location context", "Show IP/location in push prompt — user can identify suspicious requests", "High"],
                        ["Implement anomaly-based MFA step-up", "Require additional verification for unusual sign-in patterns", "High"],
                        ["Deploy passwordless authentication", "Remove passwords entirely — no credential to steal", "Medium"],
                        ["Train users on push security", "Educate on never approving unexpected prompts", "Medium"],
                      ].map(([step, impact, priority]) => (
                        <tr key={step} className="border-b border-zinc-800/50">
                          <td className="py-3 px-4 font-medium text-white">{step}</td>
                          <td className="py-3 px-4">{impact}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              priority === "Critical" ? "bg-red-500/20 text-red-400" :
                              priority === "High" ? "bg-orange-500/20 text-orange-400" :
                              "bg-yellow-500/20 text-yellow-400"
                            }`}>
                              {priority}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-6">
                  <p className="text-[#00cFFF] font-semibold mb-2">The 90% Solution</p>
                  <p className="text-gray-300">
                    Enabling number matching alone stops 90%+ of MFA fatigue attacks. Users cannot approve prompts without seeing the login screen — which the attacker controls, not the victim. This single change should be deployed to all users immediately.
                  </p>
                </div>
              </section>

              {/* Automation Decision Matrix */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Automation Decision Matrix</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Not all MFA fatigue response should be fully automated. Use this matrix to determine what runs without human approval.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 px-4 text-white font-semibold">Action</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Automate?</th>
                        <th className="text-left py-3 px-4 text-white font-semibold">Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {[
                        ["Suspend MFA prompts (in-progress attack)", "Yes", "Stops attack immediately, low user impact, easily reversed"],
                        ["Alert user via out-of-band channel", "Yes", "Informational only, no destructive action"],
                        ["Block attacking IP", "Yes", "Targeted, low blast radius, reversible"],
                        ["Revoke sessions (confirmed compromise)", "Yes", "Critical containment, time-sensitive"],
                        ["Force password reset", "Yes", "Standard containment, user can self-service recovery"],
                        ["Disable account", "Human approval", "High impact, may be false positive"],
                        ["Remove MFA device", "Human approval", "Could lock out legitimate user permanently"],
                        ["Report to management/legal", "Human approval", "Requires context and judgment"],
                      ].map(([action, automate, rationale]) => (
                        <tr key={action} className="border-b border-zinc-800/50">
                          <td className="py-3 px-4 font-medium text-white">{action}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              automate === "Yes" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                            }`}>
                              {automate}
                            </span>
                          </td>
                          <td className="py-3 px-4">{rationale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Platform-Specific Guidance */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Platform-Specific Detection</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  MFA fatigue signals appear differently depending on your identity provider.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      platform: "Microsoft Entra ID / Authenticator",
                      signals: [
                        "Sign-in logs with ResultType 50074 (MFA required)",
                        "Multiple AuthenticationRequirement events",
                        "Repeated 'StrongAuthenticationRequirementNotSatisfied'",
                        "Defender for Identity: Suspicious MFA activity alert",
                      ],
                    },
                    {
                      platform: "Okta",
                      signals: [
                        "system.push.send_factor_verify_push events in rapid succession",
                        "user.authentication.auth_via_mfa with FAILURE outcomes",
                        "Push challenge timeouts",
                        "Okta ThreatInsight: MFA fatigue detection",
                      ],
                    },
                    {
                      platform: "Duo Security",
                      signals: [
                        "Authentication log: result=FRAUD or result=DENY",
                        "Multiple push events per user in short window",
                        "User-reported fraud via Duo Push 'Report Fraud' button",
                        "Admin logs showing rapid authentication attempts",
                      ],
                    },
                    {
                      platform: "Google Workspace",
                      signals: [
                        "Login audit: login_failure with 2-step verification",
                        "Repeated login_challenge events",
                        "User-reported suspicious activity",
                        "Workspace Alert Center: Suspicious login activity",
                      ],
                    },
                  ].map((item) => (
                    <div key={item.platform} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                      <h4 className="text-lg font-bold text-white mb-3">{item.platform}</h4>
                      <ul className="space-y-2">
                        {item.signals.map((signal) => (
                          <li key={signal} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="text-[#00cFFF] mt-1">•</span>
                            <span>{signal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Common MFA Fatigue Response Mistakes</h2>
                <div className="space-y-4">
                  {[
                    {
                      mistake: "Waiting for user to report the attack",
                      problem: "By the time users report, they've often already approved a prompt",
                      fix: "Detect push floods automatically and intervene before approval",
                    },
                    {
                      mistake: "Only alerting, not containing",
                      problem: "Alerts without automated action give attackers time to succeed",
                      fix: "Auto-suspend MFA prompts when push flood is detected",
                    },
                    {
                      mistake: "Resetting password but not revoking sessions",
                      problem: "Attacker may already have an active session that persists",
                      fix: "Always revoke all sessions as part of containment",
                    },
                    {
                      mistake: "Not checking for persistence after approval",
                      problem: "Attackers register new MFA devices and OAuth apps within minutes",
                      fix: "Audit registered devices, mail rules, and OAuth grants post-incident",
                    },
                    {
                      mistake: "Relying on user training alone",
                      problem: "Fatigue attacks specifically exploit moments when users aren't thinking clearly",
                      fix: "Implement technical controls (number matching, rate limits) that don't rely on user judgment",
                    },
                  ].map((item) => (
                    <div key={item.mistake} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <div>
                          <p className="text-white font-semibold mb-1">{item.mistake}</p>
                          <p className="text-gray-400 text-sm mb-2"><strong>Problem:</strong> {item.problem}</p>
                          <p className="text-gray-300 text-sm"><strong>Fix:</strong> {item.fix}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Summary */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>MFA fatigue attacks exploit human behavior — response must be faster than user decision-making</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Detect push floods automatically and suspend MFA prompts before approval occurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>If approval occurred, immediately revoke sessions, reset credentials, and check for persistence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Enable number matching immediately — it stops 90%+ of attacks with zero user friction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Long-term: migrate to phishing-resistant MFA (FIDO2/WebAuthn) to eliminate the vulnerability entirely</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <section className="mt-16 text-center">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Stop MFA Fatigue Attacks Before They Succeed
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    BitLyft AIR® detects push bombing in real time and automatically suspends MFA prompts before users can approve. See how identity-first automation protects your organization.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all"
                  >
                    See a Live Demo
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
