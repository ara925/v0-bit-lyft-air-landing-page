import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Clock, User, Calendar, CheckCircle2, AlertTriangle, Shield, Target, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Identity Threat Detection & Response (ITDR): Practical Guide for Small SOC Teams | BitLyft AIR",
  description:
    "A practical ITDR implementation guide for small SOC teams. Learn how to detect and respond to identity-based threats without enterprise-level resources or dedicated identity security staff.",
  keywords: [
    "ITDR",
    "identity threat detection and response",
    "small SOC team",
    "identity security",
    "credential theft detection",
    "account takeover prevention",
    "identity-based attacks",
    "SOC automation",
    "BitLyft AIR",
  ],
  openGraph: {
    title: "Identity Threat Detection & Response (ITDR): Practical Guide for Small SOC Teams",
    description:
      "A practical ITDR implementation guide for small SOC teams. Learn how to detect and respond to identity-based threats without enterprise resources.",
    type: "article",
    publishedTime: "2026-03-16",
  },
}

export default function ITDRPracticalGuidePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00E599] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#00E599]/10 text-[#00E599] text-sm font-medium rounded-full">
                Industry Insights
              </span>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm font-medium rounded-full">Article</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Identity Threat Detection & Response (ITDR): Practical Guide for Small SOC Teams
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              80% of breaches now involve compromised credentials. Here is how small security teams can implement effective identity threat detection and response without enterprise budgets or dedicated identity security staff.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>16th March, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>BitLyft Security Team</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-gray-300 text-lg leading-relaxed">
              Identity Threat Detection and Response (ITDR) has become the most critical capability gap for security teams in 2026. Attackers have realized that stealing credentials is far easier than exploiting vulnerabilities - and most organizations are not equipped to detect identity-based attacks until it is too late.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              But here is the challenge: most ITDR guidance assumes you have a dedicated identity security team, enterprise-grade tooling, and unlimited budget. Small SOC teams - the ones who actually need ITDR the most - are left wondering how to implement these capabilities with limited resources.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              This guide provides a practical, prioritized approach to ITDR that works for teams of 2-10 security practitioners.
            </p>

            {/* Why ITDR Matters */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">Why ITDR Matters More Than Ever</h2>

            <p className="text-gray-300 leading-relaxed">
              Traditional security focused on protecting the network perimeter. But in a world of cloud services, remote work, and SaaS applications, identity has become the new perimeter - and attackers know it.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">The Identity Attack Reality</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">80%+ of breaches</strong> involve stolen or misused credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Average dwell time</strong> for identity-based attacks is 277 days before detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">MFA bypass techniques</strong> like adversary-in-the-middle and MFA fatigue are now commodity attacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Token theft</strong> allows attackers to bypass authentication entirely</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Your existing tools - IAM, MFA, even SIEM - were not designed to detect sophisticated identity attacks. IAM controls access but does not detect misuse. MFA prevents some attacks but can be bypassed. SIEM collects logs but lacks identity-specific detection logic.
            </p>

            {/* ITDR vs Other Tools */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">ITDR vs. Your Existing Security Stack</h2>

            <p className="text-gray-300 leading-relaxed">
              ITDR is not meant to replace your existing tools - it fills the gaps between them:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-4 text-white font-semibold">Tool</th>
                    <th className="py-4 px-4 text-white font-semibold">What It Does</th>
                    <th className="py-4 px-4 text-white font-semibold">Identity Gap</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">IAM</td>
                    <td className="py-4 px-4">Manages who can access what</td>
                    <td className="py-4 px-4">Does not detect credential misuse after access is granted</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">MFA</td>
                    <td className="py-4 px-4">Adds authentication factors</td>
                    <td className="py-4 px-4">Bypassable via AitM, fatigue attacks, token theft</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">PAM</td>
                    <td className="py-4 px-4">Secures privileged accounts</td>
                    <td className="py-4 px-4">Limited to privileged accounts, misses standard user compromise</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">SIEM</td>
                    <td className="py-4 px-4">Collects and correlates logs</td>
                    <td className="py-4 px-4">Lacks identity-specific behavioral baselines and detection rules</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">XDR/EDR</td>
                    <td className="py-4 px-4">Endpoint and cross-domain detection</td>
                    <td className="py-4 px-4">Focused on malware and endpoint threats, limited identity context</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-[#00E599]">ITDR</td>
                    <td className="py-4 px-4">Identity-specific threat detection and response</td>
                    <td className="py-4 px-4 text-[#00E599]">Purpose-built for identity attack patterns</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Core ITDR Capabilities */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">Core ITDR Capabilities You Need</h2>

            <p className="text-gray-300 leading-relaxed">
              Effective ITDR combines four core capabilities. Here is what each one means for a small team:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">1. Identity Visibility</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">Know every identity, every access path, every privilege</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>- Inventory all human and non-human identities</li>
                  <li>- Map access across cloud, SaaS, and on-prem</li>
                  <li>- Track privilege levels and dormant accounts</li>
                  <li>- Identify shadow IT and unmanaged identities</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">2. Behavioral Detection</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">Detect anomalies that indicate compromise</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>- Baseline normal behavior per identity</li>
                  <li>- Detect impossible travel and location anomalies</li>
                  <li>- Flag unusual access patterns and timing</li>
                  <li>- Identify privilege escalation attempts</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">3. Threat Detection</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">Identify known attack techniques targeting identities</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>- Password spray and credential stuffing</li>
                  <li>- MFA fatigue and bypass attempts</li>
                  <li>- Token theft and session hijacking</li>
                  <li>- OAuth consent phishing</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00E599]/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#00E599]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">4. Automated Response</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">Contain identity threats before damage spreads</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>- Revoke sessions and tokens instantly</li>
                  <li>- Force MFA re-authentication</li>
                  <li>- Disable compromised accounts</li>
                  <li>- Block suspicious sign-in attempts</li>
                </ul>
              </div>
            </div>

            {/* Priority Detection Use Cases */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">Priority Detection Use Cases for Small Teams</h2>

            <p className="text-gray-300 leading-relaxed">
              You cannot detect everything on day one. Here are the highest-ROI identity threats to focus on first, ordered by frequency and impact:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">1. Impossible Travel</h3>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">Critical Priority</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">User authenticates from two geographically distant locations faster than physically possible.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-2">Detection Logic:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Two sign-ins &gt;500 miles apart within 1 hour</li>
                      <li>- Exclude VPN and corporate proxy IPs</li>
                      <li>- Weight by risk: new device + impossible travel = high</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Response Actions:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Revoke all active sessions</li>
                      <li>- Force MFA re-enrollment</li>
                      <li>- Alert user via out-of-band channel</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">2. MFA Fatigue Attack</h3>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">Critical Priority</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">Attacker with stolen password repeatedly triggers MFA prompts until user approves out of frustration.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-2">Detection Logic:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- 5+ MFA prompts in 10 minutes</li>
                      <li>- Multiple denied prompts followed by approval</li>
                      <li>- Prompts from unusual IP or device</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Response Actions:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Block authentication temporarily</li>
                      <li>- Require password reset</li>
                      <li>- Investigate all recent approvals</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">3. Inbox Rule Manipulation</h3>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">High Priority</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">Attacker creates mail rules to hide evidence and intercept communications (common in BEC).</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-2">Detection Logic:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Rules forwarding to external addresses</li>
                      <li>- Rules deleting emails matching keywords</li>
                      <li>- Rules moving emails to hidden folders</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Response Actions:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Remove malicious rules immediately</li>
                      <li>- Audit all mailbox rules for user</li>
                      <li>- Check for email forwarding configurations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">4. OAuth Consent Grant</h3>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">High Priority</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">User grants excessive permissions to malicious application, giving attacker persistent access.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-2">Detection Logic:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Consent to unverified publisher apps</li>
                      <li>- High-risk permissions (Mail.Read, Files.ReadWrite)</li>
                      <li>- Consent from risky sign-in context</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Response Actions:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Revoke OAuth consent immediately</li>
                      <li>- Disable app in tenant (if malicious)</li>
                      <li>- Audit all consents by affected user</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">5. Privilege Escalation</h3>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">High Priority</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">Attacker elevates privileges to gain broader access after initial compromise.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-2">Detection Logic:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Role assignment to Global Admin or similar</li>
                      <li>- Self-assignment of privileged roles</li>
                      <li>- Role assignment outside change windows</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Response Actions:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>- Remove unauthorized role assignment</li>
                      <li>- Disable source account pending investigation</li>
                      <li>- Audit all role changes in past 24 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Roadmap */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">4-Week ITDR Implementation Roadmap</h2>

            <p className="text-gray-300 leading-relaxed">
              Here is a realistic timeline for small teams to stand up foundational ITDR capabilities:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#00E599]/20 flex items-center justify-center text-[#00E599] font-bold text-sm">1</div>
                  <h3 className="text-lg font-semibold text-white">Week 1: Identity Inventory</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Export all users from Entra ID / Okta / Google Workspace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Identify privileged accounts (Global Admins, service accounts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Flag dormant accounts (no sign-in &gt;90 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Document all OAuth apps with user consent</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#00E599]/20 flex items-center justify-center text-[#00E599] font-bold text-sm">2</div>
                  <h3 className="text-lg font-semibold text-white">Week 2: Detection Rules</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Enable impossible travel detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Configure MFA fatigue alerting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Set up inbox rule monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Tune thresholds based on baseline (expect false positives)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#00E599]/20 flex items-center justify-center text-[#00E599] font-bold text-sm">3</div>
                  <h3 className="text-lg font-semibold text-white">Week 3: Response Playbooks</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Build session revocation automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Create forced MFA re-enrollment workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Document manual investigation steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Test playbooks with tabletop exercises</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#00E599]/20 flex items-center justify-center text-[#00E599] font-bold text-sm">4</div>
                  <h3 className="text-lg font-semibold text-white">Week 4: Automation + Tuning</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Enable auto-response for high-confidence detections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Add VIP list exclusions to prevent executive lockouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Review false positive rate and adjust thresholds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] mt-1 flex-shrink-0" />
                    <span>Document runbooks for on-call rotation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Automation Decision Matrix */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">What to Automate vs. What Needs Human Review</h2>

            <p className="text-gray-300 leading-relaxed">
              Not every identity threat should trigger automated response. Here is how to decide:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-4 text-white font-semibold">Detection</th>
                    <th className="py-4 px-4 text-white font-semibold">Auto Response</th>
                    <th className="py-4 px-4 text-white font-semibold">Human Review</th>
                    <th className="py-4 px-4 text-white font-semibold">Rationale</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">Impossible travel (high confidence)</td>
                    <td className="py-4 px-4 text-[#00E599]">Revoke sessions</td>
                    <td className="py-4 px-4">Investigate source</td>
                    <td className="py-4 px-4">Low false positive, high impact</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">MFA fatigue (5+ prompts)</td>
                    <td className="py-4 px-4 text-[#00E599]">Block auth + alert</td>
                    <td className="py-4 px-4">Verify with user</td>
                    <td className="py-4 px-4">Clear attack pattern</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">Malicious inbox rule</td>
                    <td className="py-4 px-4 text-[#00E599]">Delete rule</td>
                    <td className="py-4 px-4">Full BEC investigation</td>
                    <td className="py-4 px-4">Rules are reversible</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">OAuth consent (risky app)</td>
                    <td className="py-4 px-4 text-amber-400">Alert only</td>
                    <td className="py-4 px-4">Review app + revoke if malicious</td>
                    <td className="py-4 px-4">May be legitimate business app</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">Privilege escalation</td>
                    <td className="py-4 px-4 text-amber-400">Alert only</td>
                    <td className="py-4 px-4">Verify change approval</td>
                    <td className="py-4 px-4">Could be authorized change</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-4 font-medium text-white">VIP account anomaly</td>
                    <td className="py-4 px-4 text-red-400">Never auto-respond</td>
                    <td className="py-4 px-4">Manual verification required</td>
                    <td className="py-4 px-4">Business disruption risk too high</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Common Mistakes */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">Common ITDR Mistakes Small Teams Make</h2>

            <div className="space-y-4 my-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">1. Starting with too many detection rules</h3>
                <p className="text-gray-400">Alert fatigue kills ITDR programs. Start with 3-5 high-confidence detections and expand only after tuning.</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">2. Automating response without guardrails</h3>
                <p className="text-gray-400">Auto-disabling the CEO account during a board meeting is a career-limiting move. Always have VIP exclusions and approval workflows for high-impact actions.</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">3. Ignoring service accounts</h3>
                <p className="text-gray-400">Non-human identities are often more privileged and less monitored than users. Include them in your ITDR scope from day one.</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">4. No baseline period before alerting</h3>
                <p className="text-gray-400">Behavioral detection requires learning normal patterns. Run in observation mode for 2-4 weeks before enabling alerts.</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">5. Treating ITDR as a one-time project</h3>
                <p className="text-gray-400">Identity threats evolve constantly. Schedule monthly reviews of detection effectiveness and emerging attack techniques.</p>
              </div>
            </div>

            {/* How BitLyft AIR Helps */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">How BitLyft AIR Enables ITDR for Small Teams</h2>

            <p className="text-gray-300 leading-relaxed">
              BitLyft AIR was built specifically for teams that need enterprise-grade security without enterprise complexity. For ITDR, this means:
            </p>

            <div className="bg-gradient-to-br from-[#00E599]/10 to-transparent border border-[#00E599]/30 rounded-xl p-8 my-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E599] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Pre-built identity detections</strong> - Impossible travel, MFA fatigue, inbox rules, OAuth abuse, and more out of the box</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E599] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Native Microsoft integration</strong> - Deep visibility into Entra ID, Microsoft 365, and Defender without complex configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E599] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Automated response with guardrails</strong> - Session revocation, MFA reset, account disable with built-in VIP protection and approval workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E599] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Behavioral baselines</strong> - Automatic learning of normal identity behavior without manual configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E599] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Investigation context</strong> - When alerts fire, you get full identity timeline, not just the triggering event</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to implement ITDR for your team?</h3>
              <p className="text-gray-400 mb-6">
                See how BitLyft AIR can give your small team enterprise-grade identity threat detection and response.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#00E599] text-black font-semibold rounded-lg hover:bg-[#00E599]/90 transition-colors"
              >
                Request a Demo
              </Link>
            </div>

            {/* Related Articles */}
            <h2 className="text-2xl font-bold text-white mt-16 mb-6">Related Articles</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/automated-identity-based-response"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#00E599]/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Automated Identity-Based Response</h3>
                <p className="text-gray-400 text-sm">Containment actions that stop account takeover fast.</p>
              </Link>

              <Link
                href="/blog/microsoft-entra-id-account-takeover-response-playbook"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#00E599]/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Microsoft Entra ID Account Takeover Response Playbook</h3>
                <p className="text-gray-400 text-sm">Complete response playbook for Entra ID account takeover incidents.</p>
              </Link>

              <Link
                href="/blog/guardrails-to-avoid-client-impact"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#00E599]/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Guardrails to Avoid Client Impact</h3>
                <p className="text-gray-400 text-sm">Approvals, rate limits, safe-mode, rollback, and blast-radius controls.</p>
              </Link>

              <Link
                href="/blog/autonomous-soc-small-mid-market-teams"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#00E599]/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Autonomous SOC for Small/Mid-Market Teams</h3>
                <p className="text-gray-400 text-sm">Operating model, roles, and day 1 playbooks.</p>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
