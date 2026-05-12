import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "Malicious OAuth App Consent: Automated Investigation and Revocation | BitLyft AIR®",
  description:
    "Learn how to detect and respond to malicious OAuth app consent attacks with automated investigation and revocation. Covers detection signals, response workflows, and automation guidance.",
}

export default function MaliciousOAuthConsentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/resources" className="hover:text-primary transition-colors">
                Resources
              </Link>
              <span>/</span>
              <span>Industry Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Malicious OAuth App Consent: Automated Investigation and Revocation
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>1st April, 2026</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            {/* Introduction */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Malicious OAuth app consent attacks are one of the stealthiest persistence mechanisms in cloud environments. 
              Unlike credential theft, a malicious app with granted permissions maintains access even after password resets and MFA re-enrollment. 
              This guide covers how to detect consent phishing, automate investigation workflows, and revoke malicious app access before data exfiltration occurs.
            </p>

            {/* Why OAuth Attacks Are Dangerous */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Why OAuth App Consent Attacks Are Dangerous</h2>
            
            <p>
              OAuth consent attacks exploit a fundamental feature of cloud identity: delegated permissions. When a user consents to an application, 
              they grant that app access to their data and actions — often without fully understanding what they&apos;re approving. Attackers weaponize 
              this by creating malicious apps disguised as legitimate business tools.
            </p>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
              <h4 className="text-xl font-bold text-red-400 mb-4">What Makes These Attacks So Effective</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Bypass MFA entirely</strong> — App tokens work independently of authentication controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Survive credential resets</strong> — Changing passwords doesn&apos;t revoke app permissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Legitimate-looking consent screens</strong> — Users see familiar Microsoft/Google OAuth prompts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Low detection rates</strong> — Most security tools don&apos;t monitor app consent grants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Persistent access</strong> — App tokens can remain valid for months without activity</span>
                </li>
              </ul>
            </div>

            {/* Attack Chain */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">The OAuth Consent Attack Chain</h2>

            <div className="bg-zinc-900 rounded-xl p-6 my-8 border border-zinc-800">
              <div className="space-y-6">
                {[
                  { step: "1", title: "Phishing Delivery", desc: "Attacker sends email with OAuth consent link disguised as legitimate app request" },
                  { step: "2", title: "Consent Screen", desc: "User clicks link, sees legitimate-looking Microsoft/Google OAuth prompt" },
                  { step: "3", title: "Permission Grant", desc: "User approves without reviewing scope — grants mail.read, files.read, etc." },
                  { step: "4", title: "Token Harvested", desc: "Malicious app receives access token with granted permissions" },
                  { step: "5", title: "Data Exfiltration", desc: "Attacker uses token to read email, download files, send messages" },
                  { step: "6", title: "Persistence", desc: "Access persists until app is explicitly revoked — survives password changes" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2261db] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detection Signals */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Detection Signals</h2>
            
            <p>
              Detecting malicious OAuth consent requires monitoring app registration, consent grants, and subsequent API activity. 
              No single signal is definitive — correlation across multiple signals increases detection confidence.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Signal</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Indicator</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { signal: "New app consent from phishing email", indicator: "Consent within 5 min of email click", confidence: "High" },
                    { signal: "Suspicious app publisher", indicator: "Unverified publisher, newly created tenant", confidence: "High" },
                    { signal: "Excessive permission scope", indicator: "Mail.ReadWrite, Files.ReadWrite.All, User.ReadWrite.All", confidence: "High" },
                    { signal: "App name impersonation", indicator: "Names like 'Microsoft Support', 'Office365 Admin'", confidence: "High" },
                    { signal: "Consent from risky sign-in", indicator: "Impossible travel, new device, or VPN during consent", confidence: "Medium" },
                    { signal: "Bulk consent activity", indicator: "Multiple users consent to same app within short window", confidence: "High" },
                    { signal: "API activity after consent", indicator: "Immediate Graph API calls for mail/files after consent", confidence: "Medium" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-white">{row.signal}</td>
                      <td className="py-3 px-4 text-gray-400">{row.indicator}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          row.confidence === "High" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {row.confidence}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* High-Risk Permission Scopes */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">High-Risk Permission Scopes to Monitor</h2>

            <p>
              Not all OAuth permissions are equally dangerous. Focus detection and automated response on apps requesting these high-impact scopes:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                { category: "Email Access", scopes: ["Mail.Read", "Mail.ReadWrite", "Mail.Send", "MailboxSettings.ReadWrite"] },
                { category: "File Access", scopes: ["Files.Read.All", "Files.ReadWrite.All", "Sites.Read.All", "Sites.ReadWrite.All"] },
                { category: "Identity Access", scopes: ["User.Read.All", "User.ReadWrite.All", "Directory.Read.All", "Directory.ReadWrite.All"] },
                { category: "Full Access", scopes: ["full_access_as_user", ".default (with admin consent)", "offline_access + any of above"] },
              ].map((group) => (
                <div key={group.category} className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
                  <h4 className="text-[#00cFFF] text-sm font-semibold uppercase tracking-wide mb-3">{group.category}</h4>
                  <ul className="space-y-1">
                    {group.scopes.map((scope) => (
                      <li key={scope} className="text-gray-300 text-sm font-mono">{scope}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Automated Investigation Workflow */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Automated Investigation Workflow</h2>

            <p>
              When a suspicious consent event is detected, automated investigation should gather context before escalating or taking containment actions.
            </p>

            <div className="space-y-4 my-8">
              {[
                { 
                  step: "1. Enrich App Details", 
                  actions: [
                    "Query app registration details (publisher, creation date, verified status)",
                    "Check if app is from verified publisher or known SaaS vendor",
                    "Compare app name against known legitimate apps and impersonation patterns"
                  ]
                },
                { 
                  step: "2. Analyze Consent Context", 
                  actions: [
                    "Correlate consent timestamp with email delivery and click events",
                    "Check sign-in risk level at time of consent",
                    "Identify device/location used during consent"
                  ]
                },
                { 
                  step: "3. Review Granted Permissions", 
                  actions: [
                    "List all delegated and application permissions granted",
                    "Flag high-risk scopes (Mail, Files, Directory access)",
                    "Compare against user's typical app consent history"
                  ]
                },
                { 
                  step: "4. Check Post-Consent Activity", 
                  actions: [
                    "Query Graph Activity Log for API calls using the app's token",
                    "Look for mail access, file downloads, message sending",
                    "Identify data accessed or exfiltrated"
                  ]
                },
                { 
                  step: "5. Assess Blast Radius", 
                  actions: [
                    "Count total users who consented to this app",
                    "Identify if admin consent was granted (tenant-wide access)",
                    "Map all resources the app has accessed"
                  ]
                },
              ].map((item) => (
                <div key={item.step} className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
                  <h4 className="text-white font-bold mb-3">{item.step}</h4>
                  <ul className="space-y-2">
                    {item.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Automated Revocation Workflow */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Automated Revocation Workflow</h2>

            <p>
              Once investigation confirms a malicious app, automated revocation should execute immediately. The goal is to cut off 
              attacker access before more data is exfiltrated.
            </p>

            <div className="bg-zinc-900 rounded-xl p-6 my-8 border border-zinc-800">
              <h4 className="text-xl font-bold text-white mb-6">Revocation Actions (Execute in Order)</h4>
              <div className="space-y-6">
                {[
                  { 
                    action: "Revoke User Consent", 
                    desc: "Remove the user's delegated permissions for this app",
                    platform: "Entra: Remove-MgUserAppRoleAssignment | Google: directory.users.aliases.delete"
                  },
                  { 
                    action: "Revoke App Tokens", 
                    desc: "Invalidate all active tokens issued to this app for this user",
                    platform: "Entra: Revoke-MgUserSignInSession | Invalidate refresh tokens"
                  },
                  { 
                    action: "Block App Tenant-Wide", 
                    desc: "Disable the app's service principal to prevent further consents",
                    platform: "Entra: Update-MgServicePrincipal -AccountEnabled:$false"
                  },
                  { 
                    action: "Remove Admin Consent (if granted)", 
                    desc: "Revoke tenant-wide permissions if admin consent was used",
                    platform: "Entra: Remove-MgServicePrincipalAppRoleAssignment"
                  },
                  { 
                    action: "Reset User Credentials", 
                    desc: "Force password reset as precaution if consent came from compromised session",
                    platform: "Entra: Update-MgUser -PasswordProfile | Revoke all sessions"
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">{item.action}</h5>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                      <p className="text-gray-500 text-xs font-mono mt-2">{item.platform}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Decision Matrix */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Automation Decision Matrix</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Scenario</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Auto-Revoke?</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: "Unverified publisher + high-risk scopes", auto: "Yes", rationale: "Clear malicious indicators, low false positive risk" },
                    { scenario: "Consent from phishing email click", auto: "Yes", rationale: "Attack chain confirmed, immediate revocation needed" },
                    { scenario: "Multiple users consent to same unknown app", auto: "Yes", rationale: "Campaign pattern, fast response prevents spread" },
                    { scenario: "Admin consent to unverified app", auto: "Yes + Alert", rationale: "Tenant-wide impact requires immediate action" },
                    { scenario: "Known SaaS app with unusual timing", auto: "No — Investigate", rationale: "Could be legitimate, needs context before action" },
                    { scenario: "Verified publisher app with excessive scopes", auto: "No — Review", rationale: "May be legitimate app misconfigured, human review needed" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-white">{row.scenario}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          row.auto.startsWith("Yes") ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {row.auto}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-400">{row.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Preventive Controls */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Preventive Controls</h2>

            <p>
              The best response to OAuth consent attacks is prevention. These controls significantly reduce attack surface:
            </p>

            <div className="space-y-4 my-8">
              {[
                { 
                  control: "Require Admin Consent for High-Risk Scopes", 
                  desc: "Users cannot grant permissions like Mail.ReadWrite or Files.ReadWrite.All without admin approval",
                  priority: "Critical"
                },
                { 
                  control: "Block Unverified Publishers", 
                  desc: "Only allow apps from verified publishers to request consent",
                  priority: "Critical"
                },
                { 
                  control: "Implement App Governance Policies", 
                  desc: "Use Microsoft Defender for Cloud Apps or similar to monitor and control app access",
                  priority: "High"
                },
                { 
                  control: "Enable Consent Request Workflow", 
                  desc: "Route all app consent requests through admin approval workflow",
                  priority: "High"
                },
                { 
                  control: "Regular App Audit", 
                  desc: "Quarterly review of all consented apps, revoke unused or suspicious apps",
                  priority: "Medium"
                },
                { 
                  control: "User Training", 
                  desc: "Train users to recognize consent phishing and report suspicious app requests",
                  priority: "Medium"
                },
              ].map((item) => (
                <div key={item.control} className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 flex items-start gap-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                    item.priority === "Critical" ? "bg-red-500/20 text-red-400" : 
                    item.priority === "High" ? "bg-orange-500/20 text-orange-400" : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {item.priority}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold">{item.control}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Mistakes */}
            <h2 className="text-3xl font-bold text-foreground mt-16 mb-6">Common Response Mistakes</h2>

            <div className="space-y-4 my-8">
              {[
                { 
                  mistake: "Only resetting password", 
                  problem: "OAuth tokens remain valid after password reset — app retains access",
                  fix: "Must explicitly revoke app consent and invalidate tokens"
                },
                { 
                  mistake: "Removing app from one user only", 
                  problem: "Other users may have also consented during same campaign",
                  fix: "Query all users who consented to app, revoke all instances"
                },
                { 
                  mistake: "Not blocking app tenant-wide", 
                  problem: "App can still request consent from other users",
                  fix: "Disable service principal to prevent future consents"
                },
                { 
                  mistake: "Missing data exfiltration assessment", 
                  problem: "Don't know what data was accessed before revocation",
                  fix: "Review Graph Activity Log for all API calls made with app token"
                },
                { 
                  mistake: "No preventive controls after incident", 
                  problem: "Same attack vector remains open for future campaigns",
                  fix: "Implement admin consent requirements and unverified publisher blocks"
                },
              ].map((item) => (
                <div key={item.mistake} className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">
                  <h4 className="text-red-400 font-semibold mb-2">{item.mistake}</h4>
                  <p className="text-gray-400 text-sm mb-2"><strong className="text-gray-300">Problem:</strong> {item.problem}</p>
                  <p className="text-gray-400 text-sm"><strong className="text-green-400">Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Automate OAuth Consent Investigation and Revocation</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                BitLyft AIR® detects malicious OAuth consent in real time, automatically investigates app permissions and activity, 
                and revokes access before data exfiltration — all without manual intervention.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all"
              >
                See It In Action
              </Link>
            </div>

          </div>
        </article>

        {/* Related Articles */}
        <RelatedArticles currentSlug="malicious-oauth-app-consent-investigation-revocation" />
      </main>
      <Footer />
    </div>
  )
}
