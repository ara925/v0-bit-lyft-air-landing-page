import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"

export default function AccountSuspensionVsSessionRevocationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2261db]/10 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/resources" className="hover:text-[#00cFFF]">Resources</Link>
              <span>/</span>
              <span>Industry Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Account Suspension vs Session Revocation: Which Action to Use When
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Both actions stop attackers — but choosing wrong can either leave gaps or cause unnecessary disruption. Here&apos;s how to decide.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>April 13, 2026</span>
              <span>•</span>
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Decision Point Every SOC Faces</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                An identity alert fires — suspicious sign-in, impossible travel, or MFA fatigue detected. You need to act fast. Your SOAR platform offers two primary response actions: <strong>suspend the account</strong> or <strong>revoke active sessions</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Choose wrong and you either leave the attacker with persistence (revocation when suspension was needed) or cause major business disruption for what turns out to be a false positive (suspension when revocation was sufficient).
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                This guide provides a clear decision framework for when to use each action, what each actually does under the hood, and how to automate the right choice based on signal confidence.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Each Action Actually Does</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Before deciding which to use, you need to understand what happens technically when you execute each action.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-3 px-4 text-white font-semibold">Aspect</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Session Revocation</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Account Suspension</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["What happens", "All active tokens/sessions invalidated", "Account disabled, sign-in blocked completely"],
                      ["New sign-ins", "Allowed (user can re-authenticate)", "Blocked until account re-enabled"],
                      ["Existing sessions", "Terminated within token lifetime", "Terminated immediately"],
                      ["Business impact", "Low — user just needs to sign in again", "High — user locked out until IT intervenes"],
                      ["Reversibility", "Automatic — user self-recovers", "Manual — admin must re-enable"],
                      ["Attacker persistence", "Broken if only session-based", "Broken completely (credentials unusable)"],
                      ["Service accounts", "Safe — will re-authenticate automatically", "Dangerous — can break production"],
                    ].map(([aspect, revocation, suspension]) => (
                      <tr key={aspect} className="border-b border-zinc-800">
                        <td className="py-3 px-4 text-gray-300 font-medium">{aspect}</td>
                        <td className="py-3 px-4 text-gray-400">{revocation}</td>
                        <td className="py-3 px-4 text-gray-400">{suspension}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Session Revocation: The Surgical Option</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Session revocation invalidates all active refresh tokens and forces re-authentication. It&apos;s designed to disrupt an attacker who has stolen a session token without permanently locking out a legitimate user.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">When to Use Session Revocation</h3>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Suspicious activity detected but account compromise not confirmed",
                    "Token theft indicators (session hijacking, AiTM phishing)",
                    "User reports device loss or theft",
                    "Impossible travel alert — likely VPN or legitimate travel",
                    "First-stage response while investigation continues",
                    "Service accounts where suspension would break production",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">What Session Revocation Does NOT Stop</h3>
              <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Attacker who knows the password — they can simply re-authenticate",
                    "Compromised MFA device — attacker completes MFA challenge again",
                    "Persistent OAuth app grants — malicious app retains access",
                    "Inbox rules or forwarding — already configured persistence",
                    "Stolen service principal credentials — separate credential set",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Account Suspension: The Nuclear Option</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Account suspension disables the account entirely — no sign-ins, no token refreshes, no access whatsoever. It&apos;s the definitive containment action when you&apos;re certain an account is compromised.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">When to Use Account Suspension</h3>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Confirmed account compromise (attacker has credentials)",
                    "Active attacker persistence observed (mailbox rules, OAuth apps)",
                    "Ransomware or destructive activity in progress",
                    "High-value target with multiple compromise indicators",
                    "Password confirmed exposed in breach database",
                    "User confirmed they did not perform observed actions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Suspension Risks to Consider</h3>
              <div className="bg-amber-900/20 border border-amber-800/50 rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-gray-300">
                  {[
                    ["Service accounts", "Suspending a service account can break production applications, APIs, and automated workflows"],
                    ["Shared mailboxes", "May impact multiple users and business processes"],
                    ["Executive accounts", "Business continuity concerns — ensure backup access exists"],
                    ["False positive impact", "User is completely locked out until manual intervention"],
                  ].map(([risk, desc]) => (
                    <li key={risk} className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span><strong>{risk}</strong> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Decision Framework: Which Action When</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Use this matrix to map alert types and confidence levels to the appropriate response action.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-3 px-4 text-white font-semibold">Scenario</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Confidence</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Action</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Impossible travel alert", "Low", "Revoke sessions", "Likely VPN/travel — disrupt without lockout"],
                      ["MFA fatigue (< 5 pushes)", "Medium", "Revoke sessions", "May be accidental — monitor for escalation"],
                      ["MFA fatigue (5+ pushes)", "High", "Suspend account", "Active attack — full containment needed"],
                      ["Successful auth from TOR", "High", "Suspend account", "Strong compromise indicator"],
                      ["Token theft / AiTM detected", "High", "Revoke + password reset", "Session stolen — credentials may be safe"],
                      ["Password in breach DB", "Confirmed", "Suspend + password reset", "Credentials definitely compromised"],
                      ["Malicious OAuth app granted", "Confirmed", "Revoke + remove app", "App has persistent access — revoke both"],
                      ["Suspicious mailbox rules", "Confirmed", "Suspend account", "Attacker has established persistence"],
                      ["Service account anomaly", "Any", "Revoke sessions first", "Avoid production impact — investigate"],
                    ].map(([scenario, confidence, action, rationale]) => (
                      <tr key={scenario} className="border-b border-zinc-800">
                        <td className="py-3 px-4 text-gray-300">{scenario}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            confidence === "Low" ? "bg-blue-900/50 text-blue-300" :
                            confidence === "Medium" ? "bg-yellow-900/50 text-yellow-300" :
                            confidence === "High" ? "bg-orange-900/50 text-orange-300" :
                            "bg-red-900/50 text-red-300"
                          }`}>
                            {confidence}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[#00cFFF] font-medium">{action}</td>
                        <td className="py-3 px-4 text-gray-400 text-sm">{rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Layered Response Pattern</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                For most identity incidents, the optimal pattern is a layered response that escalates based on findings.
              </p>

              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Immediate: Revoke Sessions",
                      desc: "Disrupt attacker persistence while preserving user access capability",
                      actions: ["Revoke all refresh tokens", "Force re-authentication", "Log the action for audit"]
                    },
                    {
                      step: "2",
                      title: "Investigate: Assess Compromise Depth",
                      desc: "Determine if credentials are compromised or just the session",
                      actions: ["Check for malicious OAuth apps", "Review mailbox rules", "Analyze sign-in logs for password usage"]
                    },
                    {
                      step: "3",
                      title: "Escalate if Needed: Suspend Account",
                      desc: "If investigation reveals credential compromise, escalate to full suspension",
                      actions: ["Disable account", "Reset password", "Remove persistent access"]
                    },
                    {
                      step: "4",
                      title: "Remediate: Clean and Restore",
                      desc: "Remove all attacker persistence before restoring access",
                      actions: ["Remove malicious apps", "Delete inbox rules", "Re-enable with new credentials"]
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#2261db] to-[#00cFFF] rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                        <ul className="space-y-1">
                          {item.actions.map((action) => (
                            <li key={action} className="text-gray-500 text-sm flex items-center gap-2">
                              <span className="w-1 h-1 bg-[#00cFFF] rounded-full" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Automation Decision Matrix</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Not all response actions should be automated. Here&apos;s guidance on what to automate vs. require human approval.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-3 px-4 text-white font-semibold">Action</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Automate?</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Session revocation (standard users)", "Yes", "Low impact, easy recovery, good first response"],
                      ["Session revocation (VIPs/executives)", "With approval", "May need coordination with EA/chief of staff"],
                      ["Session revocation (service accounts)", "With approval", "Risk of production impact"],
                      ["Account suspension (confirmed compromise)", "Yes", "Clear threat — speed matters"],
                      ["Account suspension (medium confidence)", "With approval", "False positive risk too high"],
                      ["Account suspension (service accounts)", "Never auto", "Production impact requires human judgment"],
                      ["Password reset", "With approval", "User coordination usually required"],
                    ].map(([action, automate, rationale]) => (
                      <tr key={action} className="border-b border-zinc-800">
                        <td className="py-3 px-4 text-gray-300">{action}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            automate === "Yes" ? "bg-green-900/50 text-green-300" :
                            automate === "Never auto" ? "bg-red-900/50 text-red-300" :
                            "bg-yellow-900/50 text-yellow-300"
                          }`}>
                            {automate}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-400">{rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Platform-Specific Commands</h2>
              
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Microsoft Entra ID</h3>
              <div className="bg-zinc-900 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`# Revoke sessions
Revoke-AzureADUserAllRefreshToken -ObjectId <user-id>

# Suspend account
Set-AzureADUser -ObjectId <user-id> -AccountEnabled $false

# Both actions
Revoke-AzureADUserAllRefreshToken -ObjectId <user-id>
Set-AzureADUser -ObjectId <user-id> -AccountEnabled $false`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Google Workspace</h3>
              <div className="bg-zinc-900 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`# Revoke sessions (sign out all devices)
gam user <email> signout

# Suspend account
gam update user <email> suspended on

# Both actions
gam user <email> signout
gam update user <email> suspended on`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Okta</h3>
              <div className="bg-zinc-900 rounded-lg p-4 mb-6 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`# Revoke sessions
DELETE /api/v1/users/{userId}/sessions

# Suspend account
POST /api/v1/users/{userId}/lifecycle/suspend

# Both actions
DELETE /api/v1/users/{userId}/sessions
POST /api/v1/users/{userId}/lifecycle/suspend`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Mistakes</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    mistake: "Suspending service accounts automatically",
                    problem: "Can cause cascading production failures",
                    fix: "Always require human approval for service account suspension"
                  },
                  {
                    mistake: "Only revoking sessions when credentials are compromised",
                    problem: "Attacker simply re-authenticates with known password",
                    fix: "Suspend + password reset when credential compromise confirmed"
                  },
                  {
                    mistake: "Suspending on every impossible travel alert",
                    problem: "High false positive rate causes user frustration and alert fatigue",
                    fix: "Revoke sessions first — escalate only if confirmed malicious"
                  },
                  {
                    mistake: "Not checking for persistence before re-enabling",
                    problem: "Attacker retains access through OAuth apps or mailbox rules",
                    fix: "Full persistence cleanup before account restoration"
                  },
                  {
                    mistake: "Same response for all account types",
                    problem: "VIPs and service accounts need different handling",
                    fix: "Segment response policies by account classification"
                  },
                ].map((item) => (
                  <div key={item.mistake} className="bg-zinc-900/50 rounded-xl p-5 border border-zinc-800">
                    <h4 className="text-red-400 font-semibold mb-2">{item.mistake}</h4>
                    <p className="text-gray-400 text-sm mb-2"><strong>Problem:</strong> {item.problem}</p>
                    <p className="text-gray-300 text-sm"><strong>Fix:</strong> {item.fix}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Takeaways</h2>
              <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-6 mb-8">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00cFFF] font-bold">1.</span>
                    <span><strong>Session revocation</strong> is the low-impact first response — use when confidence is low or medium</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00cFFF] font-bold">2.</span>
                    <span><strong>Account suspension</strong> is the definitive containment — use when compromise is confirmed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00cFFF] font-bold">3.</span>
                    <span><strong>Layered response</strong> is the optimal pattern — revoke first, investigate, escalate if needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00cFFF] font-bold">4.</span>
                    <span><strong>Service accounts</strong> require special handling — never auto-suspend production identities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00cFFF] font-bold">5.</span>
                    <span><strong>Always clean persistence</strong> before restoring access — revocation alone doesn&apos;t remove OAuth apps or rules</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">Automate Identity Response with BitLyft AIR®</h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  BitLyft AIR® automatically selects the right response action based on signal confidence and account type — session revocation for low-confidence alerts, full suspension for confirmed compromise.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all"
                >
                  See It In Action
                </Link>
              </div>
            </div>

            <RelatedArticles currentSlug="account-suspension-vs-session-revocation-when-to-use" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
