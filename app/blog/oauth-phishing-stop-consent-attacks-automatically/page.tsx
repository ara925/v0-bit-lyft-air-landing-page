import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "OAuth Phishing: How to Stop Consent-Based Attacks Automatically | BitLyft AIR®",
  description:
    "Learn how OAuth phishing attacks trick users into granting malicious app permissions and how to detect and stop consent-based attacks automatically.",
}

export default function OAuthPhishingBlogPost() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/resources" className="hover:text-primary transition-colors">
                Resources
              </Link>
              <span>/</span>
              <span>Industry Insights</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OAuth Phishing: How to Stop Consent-Based Attacks Automatically
            </h1>

            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <span>3rd April, 2026</span>
              <span>•</span>
              <span>11 min read</span>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              OAuth phishing (also called illicit consent grant or consent phishing) tricks users into granting permissions to malicious applications. Unlike credential phishing, these attacks give attackers persistent access that survives password changes and MFA. Here&apos;s how to detect and stop them automatically.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">

              {/* Why OAuth Phishing Is Different */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why OAuth Phishing Is Different</h2>
                <p className="text-gray-300 mb-6">
                  Traditional phishing steals credentials. OAuth phishing steals permissions. The difference matters because:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Factor</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Credential Phishing</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">OAuth Phishing</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">What&apos;s stolen</td>
                        <td className="py-3 px-4">Username + password</td>
                        <td className="py-3 px-4">Access tokens + refresh tokens</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">MFA bypass</td>
                        <td className="py-3 px-4">Requires AiTM proxy</td>
                        <td className="py-3 px-4">Automatic - MFA already passed</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Password reset impact</td>
                        <td className="py-3 px-4">Stops the attacker</td>
                        <td className="py-3 px-4">No impact - tokens still valid</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Access persistence</td>
                        <td className="py-3 px-4">Until password changed</td>
                        <td className="py-3 px-4">Until consent revoked (often months)</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Detection difficulty</td>
                        <td className="py-3 px-4">Moderate - login anomalies</td>
                        <td className="py-3 px-4">Hard - looks like legitimate API use</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <p className="text-red-400 font-semibold mb-2">The Persistence Problem</p>
                  <p className="text-gray-300">
                    OAuth tokens with refresh capabilities can persist for months or indefinitely. Many organizations discover OAuth compromises only after extensive data exfiltration has already occurred.
                  </p>
                </div>
              </section>

              {/* The Attack Chain */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">The OAuth Phishing Attack Chain</h2>
                <p className="text-gray-300 mb-6">
                  Understanding each step helps identify where automated detection can interrupt the attack:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Attacker Registers Malicious App",
                      description: "Creates an OAuth application (often in their own tenant) with a legitimate-sounding name like 'Microsoft Security Update' or 'IT Help Desk Portal'",
                      detection: "App registration monitoring, naming convention alerts"
                    },
                    {
                      step: "2",
                      title: "Phishing Email Sent",
                      description: "Email contains a link to the legitimate identity provider's consent screen, not a fake login page - making it harder to detect",
                      detection: "URL analysis, known malicious app IDs"
                    },
                    {
                      step: "3",
                      title: "User Clicks and Authenticates",
                      description: "User logs in via real Microsoft/Google login (if not already signed in) - attackers piggyback on legitimate authentication",
                      detection: "Limited - legitimate login flow"
                    },
                    {
                      step: "4",
                      title: "User Grants Consent",
                      description: "Consent screen shows requested permissions - users often approve without reading, especially if the app name looks legitimate",
                      detection: "Consent event monitoring, permission scope analysis"
                    },
                    {
                      step: "5",
                      title: "Attacker Receives Tokens",
                      description: "App now has access tokens and refresh tokens - persistent access that survives password changes",
                      detection: "Token issuance monitoring, app activity analysis"
                    },
                    {
                      step: "6",
                      title: "Data Access Begins",
                      description: "Attacker uses tokens to read email, access files, send messages as user - often low and slow to avoid detection",
                      detection: "API activity monitoring, data access anomalies"
                    }
                  ].map((phase) => (
                    <div key={phase.step} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2261db]/20 text-[#00cFFF] rounded-full text-sm font-bold flex-shrink-0">{phase.step}</span>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2">{phase.title}</h4>
                          <p className="text-gray-400 text-sm mb-3">{phase.description}</p>
                          <p className="text-[#00cFFF] text-sm"><strong>Detection opportunity:</strong> {phase.detection}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Detection Signals */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Detection Signals</h2>
                <p className="text-gray-300 mb-6">
                  Effective OAuth phishing detection combines multiple signals:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      signal: "Consent to Unverified App",
                      description: "User grants permissions to an app that isn't publisher-verified in your tenant",
                      confidence: "High",
                      source: "Azure AD audit logs, Google Admin alerts"
                    },
                    {
                      signal: "High-Risk Permission Scope",
                      description: "App requests Mail.ReadWrite, Files.ReadWrite.All, or full mailbox access",
                      confidence: "High",
                      source: "Consent event details, Graph API"
                    },
                    {
                      signal: "External/Multi-Tenant App",
                      description: "App registered in external tenant granted access to your environment",
                      confidence: "High",
                      source: "Service principal properties"
                    },
                    {
                      signal: "Recently Created App",
                      description: "App was registered within the last 30 days - common for phishing campaigns",
                      confidence: "Medium-High",
                      source: "App registration metadata"
                    },
                    {
                      signal: "Suspicious App Name",
                      description: "Name impersonates Microsoft, IT, Security, or known vendors",
                      confidence: "Medium",
                      source: "String matching, ML classification"
                    },
                    {
                      signal: "Bulk Consent Events",
                      description: "Multiple users consenting to same app within short timeframe",
                      confidence: "High",
                      source: "Consent event correlation"
                    },
                    {
                      signal: "Post-Consent API Activity",
                      description: "App immediately begins reading mailboxes, downloading files after consent",
                      confidence: "High",
                      source: "Graph API activity logs"
                    }
                  ].map((item) => (
                    <div key={item.signal} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-white font-semibold">{item.signal}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full flex-shrink-0 ${
                          item.confidence === "High" ? "bg-red-500/20 text-red-400" :
                          item.confidence === "Medium-High" ? "bg-orange-500/20 text-orange-400" :
                          "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {item.confidence}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                      <p className="text-gray-500 text-xs">Source: {item.source}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Automated Response */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Automated Response Workflow</h2>
                <p className="text-gray-300 mb-6">
                  When OAuth phishing is detected, automated response must act on multiple fronts simultaneously:
                </p>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-6">
                  <h4 className="text-[#00cFFF] font-semibold mb-4">Immediate Actions (Fully Automated)</h4>
                  <div className="space-y-3">
                    {[
                      "Revoke all tokens issued to the malicious application",
                      "Disable the service principal in your tenant",
                      "Block the application ID in Conditional Access",
                      "Revoke user sessions for affected accounts",
                      "Quarantine emails from the phishing campaign"
                    ].map((action) => (
                      <div key={action} className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-[#00cFFF] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-gray-300">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-6">
                  <h4 className="text-yellow-400 font-semibold mb-4">Investigation Actions (Auto-Collect)</h4>
                  <div className="space-y-3">
                    {[
                      "List all users who consented to the application",
                      "Pull API activity logs for the malicious app",
                      "Identify accessed mailboxes and downloaded files",
                      "Check for created inbox rules or forwarding",
                      "Document scope of data exposure"
                    ].map((action) => (
                      <div key={action} className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-gray-300">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <h4 className="text-orange-400 font-semibold mb-4">Remediation Actions (Human Approval)</h4>
                  <div className="space-y-3">
                    {[
                      "Notify affected users of the compromise",
                      "Reset credentials for high-risk accounts",
                      "Review and remove any attacker-created inbox rules",
                      "Assess data breach notification requirements",
                      "Update security awareness training"
                    ].map((action) => (
                      <div key={action} className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M12 9v4M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-gray-300">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Platform Commands */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Platform-Specific Response Commands</h2>

                <div className="space-y-6">
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Microsoft Entra ID / Azure AD</h4>
                    <div className="bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
{`# Revoke all tokens for malicious app
Revoke-AzureADServicePrincipalTokens -ObjectId <ServicePrincipalId>

# Disable the service principal
Set-AzureADServicePrincipal -ObjectId <ServicePrincipalId> -AccountEnabled $false

# Remove OAuth2 permission grants
Get-AzureADOAuth2PermissionGrant | Where-Object {$_.ClientId -eq "<AppId>"} | Remove-AzureADOAuth2PermissionGrant

# Revoke user consent
Remove-AzureADUserOAuth2PermissionGrant -ObjectId <UserId> -OAuth2PermissionGrantId <GrantId>`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Google Workspace</h4>
                    <div className="bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-gray-300">
{`# Revoke app access via Admin SDK
POST /admin/directory/v1/users/{userKey}/tokens/{clientId}

# Block app in Admin Console
Admin Console > Security > API Controls > App Access Control > Block App

# Remove third-party app access for user
DELETE /admin/directory/v1/users/{userKey}/tokens/{clientId}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Preventive Controls */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Preventive Controls</h2>
                <p className="text-gray-300 mb-6">
                  The best OAuth phishing defense combines user consent restrictions with proactive monitoring:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Control</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Impact</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Implementation</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Disable User Consent</td>
                        <td className="py-3 px-4">Prevents all user-initiated OAuth grants</td>
                        <td className="py-3 px-4">Entra ID &gt; Enterprise Apps &gt; Consent Settings</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Admin Consent Workflow</td>
                        <td className="py-3 px-4">Routes consent requests to admins</td>
                        <td className="py-3 px-4">Balances security with productivity</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Verified Publisher Required</td>
                        <td className="py-3 px-4">Only allow consents to verified apps</td>
                        <td className="py-3 px-4">Blocks most phishing apps automatically</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">Low-Risk Permission Only</td>
                        <td className="py-3 px-4">Allow user consent only for low-risk scopes</td>
                        <td className="py-3 px-4">Read-only profile, openid, email</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4 font-medium text-white">App Governance</td>
                        <td className="py-3 px-4">Continuous monitoring of app behavior</td>
                        <td className="py-3 px-4">Defender for Cloud Apps integration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#2261db]/10 border border-[#2261db]/30 rounded-lg p-6 mt-6">
                  <p className="text-[#00cFFF] font-semibold mb-2">The 90% Solution</p>
                  <p className="text-gray-300">
                    Requiring verified publisher + admin consent workflow blocks over 90% of OAuth phishing attempts. Most attackers won&apos;t go through the publisher verification process because it requires identity validation.
                  </p>
                </div>
              </section>

              {/* Automation Decision Matrix */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Automation Decision Matrix</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Scenario</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Action</th>
                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Automation Level</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Known malicious app ID</td>
                        <td className="py-3 px-4">Block app, revoke tokens, alert</td>
                        <td className="py-3 px-4"><span className="text-green-400">Full auto</span></td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Unverified app + high-risk permissions</td>
                        <td className="py-3 px-4">Disable app, collect evidence, alert</td>
                        <td className="py-3 px-4"><span className="text-green-400">Full auto</span></td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">External app + mail access + new registration</td>
                        <td className="py-3 px-4">Disable app, investigate, escalate</td>
                        <td className="py-3 px-4"><span className="text-green-400">Full auto</span></td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Bulk consent event (5+ users)</td>
                        <td className="py-3 px-4">Disable app, notify security team</td>
                        <td className="py-3 px-4"><span className="text-green-400">Full auto</span></td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Suspicious app name pattern</td>
                        <td className="py-3 px-4">Flag for review, monitor activity</td>
                        <td className="py-3 px-4"><span className="text-yellow-400">Auto-flag</span></td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">User notification and credential reset</td>
                        <td className="py-3 px-4">Prepare communication, await approval</td>
                        <td className="py-3 px-4"><span className="text-orange-400">Human approval</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Common Mistakes</h2>
                <div className="space-y-4">
                  {[
                    {
                      mistake: "Only revoking user tokens, not the app",
                      impact: "App retains refresh token and regains access",
                      fix: "Always disable/delete the service principal first"
                    },
                    {
                      mistake: "Missing the refresh token",
                      impact: "Attacker continues access despite session revocation",
                      fix: "Revoke OAuth2 permission grants, not just sessions"
                    },
                    {
                      mistake: "Not checking for inbox rules",
                      impact: "Attacker maintains persistence via email forwarding",
                      fix: "Audit and remove suspicious rules post-revocation"
                    },
                    {
                      mistake: "Treating as credential compromise",
                      impact: "Password reset doesn't stop token-based access",
                      fix: "Focus on app revocation, not just password changes"
                    },
                    {
                      mistake: "Not blocking the app ID tenant-wide",
                      impact: "Other users can still consent to the same malicious app",
                      fix: "Add app to blocked list in Conditional Access"
                    }
                  ].map((item) => (
                    <div key={item.mistake} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M15 9L9 15M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <div>
                          <p className="text-white font-medium">{item.mistake}</p>
                          <p className="text-red-400 text-sm mt-1">Impact: {item.impact}</p>
                          <p className="text-green-400 text-sm mt-1">Fix: {item.fix}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-r from-[#2261db]/20 to-[#00cFFF]/20 border border-[#2261db]/30 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Automate OAuth Phishing Response</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  BitLyft AIR® detects malicious OAuth consent events and automatically revokes tokens, disables apps, and collects investigation evidence — all before an analyst even sees the alert.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all"
                >
                  See It In Action
                </Link>
              </section>
            </div>

            {/* Related Articles */}
            <RelatedArticles currentSlug="oauth-phishing-stop-consent-attacks-automatically" />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
