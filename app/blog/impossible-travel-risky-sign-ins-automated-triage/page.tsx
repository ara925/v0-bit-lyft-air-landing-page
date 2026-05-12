import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Clock, User, Calendar, CheckCircle2, AlertTriangle, Shield, Zap, MapPin, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Impossible Travel and Risky Sign-Ins: Automated Triage and Containment | BitLyft AIR",
  description:
    "Learn how to automate triage and containment for impossible travel alerts and risky sign-ins. Reduce false positives and respond to real threats in seconds.",
  keywords: [
    "impossible travel detection",
    "risky sign-ins",
    "automated triage",
    "identity protection",
    "Microsoft Entra",
    "sign-in anomalies",
    "account compromise detection",
    "SOC automation",
    "identity threat response",
  ],
  openGraph: {
    title: "Impossible Travel and Risky Sign-Ins: Automated Triage and Containment",
    description:
      "Learn how to automate triage and containment for impossible travel alerts and risky sign-ins. Reduce false positives and respond to real threats in seconds.",
    type: "article",
    publishedTime: "2026-03-18",
  },
}

export default function ImpossibleTravelRiskySignInsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-[#3CDFFF]/70 hover:text-[#3CDFFF] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#3CDFFF]/10 text-[#3CDFFF] text-sm font-medium rounded-full">
                Industry Insights
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-sm font-medium rounded-full">Article</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Impossible Travel and Risky Sign-Ins: Automated Triage and Containment
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Impossible travel alerts flood SOC queues daily. Most are false positives from VPNs, mobile networks, and
              legitimate travel. Learn how to automate triage to filter the noise and contain real threats in seconds.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>18th March, 2026</span>
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
          </div>
        </section>

        {/* Article Content */}
        <article className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              {/* Introduction */}
              <div className="bg-gradient-to-br from-[#3CDFFF]/10 to-transparent border border-[#3CDFFF]/20 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-white mt-0 mb-4">The Impossible Travel Problem</h2>
                <p className="text-white/80 mb-4">
                  Your user signed in from New York at 9:00 AM, then from London at 9:15 AM. Physically impossible.
                  Must be a compromised account, right?
                </p>
                <p className="text-white/80 mb-0">
                  Not so fast. In reality, <strong className="text-[#3CDFFF]">90%+ of impossible travel alerts are false positives</strong>.
                  VPNs, corporate proxies, mobile carrier IP changes, cloud applications, and legitimate travel with
                  cached sessions all trigger these alerts. Without automated triage, your SOC drowns in noise while
                  real threats slip through.
                </p>
              </div>

              {/* Why False Positives Happen */}
              <h2 className="text-3xl font-bold text-white mb-6">Why Impossible Travel Creates So Many False Positives</h2>

              <p className="text-white/80 mb-6">
                Understanding why false positives happen is the first step to automating them away. Here are the most
                common causes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white m-0">VPN and Proxy Traffic</h3>
                  </div>
                  <p className="text-white/70 text-sm m-0">
                    User connects to corporate VPN (shows as HQ location), disconnects, then uses local internet
                    (shows as home location). Instant "impossible travel."
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white m-0">Mobile Carrier IP Changes</h3>
                  </div>
                  <p className="text-white/70 text-sm m-0">
                    Mobile carriers route traffic through geographically distributed gateways. User's phone can appear
                    to jump cities without moving.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white m-0">Cloud App Proxies</h3>
                  </div>
                  <p className="text-white/70 text-sm m-0">
                    Services like Zscaler, Cloudflare Access, and cloud-based security tools proxy traffic through
                    global data centers, masking true location.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white m-0">Cached Sessions + Travel</h3>
                  </div>
                  <p className="text-white/70 text-sm m-0">
                    User's laptop has cached credentials from home (New York). Lands in London, opens laptop, and
                    token refresh shows "instant" location change.
                  </p>
                </div>
              </div>

              {/* Risk Signal Correlation */}
              <h2 className="text-3xl font-bold text-white mb-6">The Key: Correlating Multiple Risk Signals</h2>

              <p className="text-white/80 mb-6">
                Impossible travel alone is a weak signal. The automation magic happens when you correlate it with
                other risk indicators to separate real threats from noise.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-12">
                <div className="bg-white/10 px-6 py-4 border-b border-white/10">
                  <h3 className="text-lg font-semibold text-white m-0">Risk Signal Correlation Matrix</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="px-6 py-3 text-left text-white/70 font-medium">Impossible Travel +</th>
                        <th className="px-6 py-3 text-left text-white/70 font-medium">Risk Level</th>
                        <th className="px-6 py-3 text-left text-white/70 font-medium">Recommended Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="px-6 py-4 text-white">Known VPN/proxy IP</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Low</span>
                        </td>
                        <td className="px-6 py-4 text-white/70">Auto-dismiss, log for audit</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white">Familiar device + successful MFA</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Low</span>
                        </td>
                        <td className="px-6 py-4 text-white/70">Auto-dismiss, log for audit</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white">New device, successful MFA</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                        </td>
                        <td className="px-6 py-4 text-white/70">Monitor session, flag for review</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white">New device + MFA fatigue pattern</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">High</span>
                        </td>
                        <td className="px-6 py-4 text-white/70">Revoke session, require re-auth</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white">Failed MFA + password spray source IP</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Critical</span>
                        </td>
                        <td className="px-6 py-4 text-white/70">Block user, force password reset</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white">Tor exit node or anonymizer</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Critical</span>
                        </td>
                        <td className="px-6 py-4 text-white/70">Block session, investigate immediately</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white">Sensitive data access post sign-in</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Critical</span>
                        </td>
                        <td className="px-6 py-4 text-white/70">Revoke session, quarantine account</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Automated Triage Workflow */}
              <h2 className="text-3xl font-bold text-white mb-6">Automated Triage Workflow</h2>

              <p className="text-white/80 mb-6">
                Here's a practical workflow that filters 90%+ of false positives automatically while escalating real
                threats for immediate containment:
              </p>

              <div className="space-y-6 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3CDFFF]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[#3CDFFF] font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Ingest Alert</h3>
                      <p className="text-white/70 text-sm mb-3">
                        Receive impossible travel or risky sign-in alert from Microsoft Entra ID Protection, Okta, or
                        your IdP. Extract: user, source IPs, timestamps, device info, sign-in result.
                      </p>
                      <div className="bg-black/30 rounded-lg p-4 font-mono text-xs text-white/60">
                        <div>{"{"}</div>
                        <div className="pl-4">"user": "jane.doe@company.com",</div>
                        <div className="pl-4">"alert_type": "impossible_travel",</div>
                        <div className="pl-4">"ip_1": "203.0.113.50", "location_1": "New York",</div>
                        <div className="pl-4">"ip_2": "198.51.100.22", "location_2": "London",</div>
                        <div className="pl-4">"time_delta_minutes": 15</div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3CDFFF]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[#3CDFFF] font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Check Known Good IPs</h3>
                      <p className="text-white/70 text-sm mb-3">
                        Query your allowlist of corporate VPNs, proxies, and cloud security egress IPs. If either IP
                        matches, auto-dismiss with "known infrastructure" tag.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Corporate VPN ranges</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Zscaler egress IPs</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Cloud proxy IPs</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Branch office IPs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3CDFFF]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[#3CDFFF] font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Enrich with Threat Intelligence</h3>
                      <p className="text-white/70 text-sm mb-3">
                        Check IPs against threat feeds. Flag if either IP is a known Tor exit node, VPN anonymizer,
                        bulletproof hosting, or on a recent password spray source list.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                          <span className="text-white/70">Tor exit node = Critical</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-400" />
                          <span className="text-white/70">Commercial VPN = Medium</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                          <span className="text-white/70">Password spray source = Critical</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <span className="text-white/70">Clean residential IP = Low</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3CDFFF]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[#3CDFFF] font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Check Device Familiarity</h3>
                      <p className="text-white/70 text-sm mb-3">
                        Query sign-in history. Is this a device the user has used before? Familiar device + new
                        location is much lower risk than new device + new location.
                      </p>
                      <div className="bg-black/30 rounded-lg p-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-white/70">Familiar device (seen 5+ times)</span>
                          <span className="text-green-400">-2 risk points</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-white/70">New device (first seen)</span>
                          <span className="text-orange-400">+3 risk points</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/70">Unmanaged device + new location</span>
                          <span className="text-red-400">+5 risk points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3CDFFF]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[#3CDFFF] font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Verify MFA Status</h3>
                      <p className="text-white/70 text-sm mb-3">
                        Check how authentication succeeded. Strong MFA (FIDO2, authenticator app) is lower risk.
                        MFA fatigue pattern (multiple failed pushes then success) is high risk.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                          <div className="text-green-400 font-medium text-sm mb-1">Low Risk MFA</div>
                          <ul className="text-white/60 text-xs space-y-1">
                            <li>FIDO2 security key</li>
                            <li>Authenticator app (single prompt)</li>
                            <li>Windows Hello</li>
                          </ul>
                        </div>
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                          <div className="text-red-400 font-medium text-sm mb-1">High Risk MFA</div>
                          <ul className="text-white/60 text-xs space-y-1">
                            <li>SMS OTP (SIM swap risk)</li>
                            <li>3+ push attempts before success</li>
                            <li>MFA bypassed or not required</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3CDFFF]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[#3CDFFF] font-bold text-sm">6</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Calculate Risk Score and Act</h3>
                      <p className="text-white/70 text-sm mb-3">
                        Sum risk points from all checks. Route to automated action based on threshold:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-green-500/10 rounded-lg px-4 py-3">
                          <span className="text-white font-medium">Score 0-3: Auto-Dismiss</span>
                          <span className="text-green-400 text-sm">Log for audit, no action</span>
                        </div>
                        <div className="flex items-center justify-between bg-yellow-500/10 rounded-lg px-4 py-3">
                          <span className="text-white font-medium">Score 4-6: Monitor</span>
                          <span className="text-yellow-400 text-sm">Flag session, queue for review</span>
                        </div>
                        <div className="flex items-center justify-between bg-orange-500/10 rounded-lg px-4 py-3">
                          <span className="text-white font-medium">Score 7-9: Soft Contain</span>
                          <span className="text-orange-400 text-sm">Require re-auth, notify user</span>
                        </div>
                        <div className="flex items-center justify-between bg-red-500/10 rounded-lg px-4 py-3">
                          <span className="text-white font-medium">Score 10+: Hard Contain</span>
                          <span className="text-red-400 text-sm">Revoke sessions, block sign-in</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Containment Actions */}
              <h2 className="text-3xl font-bold text-white mb-6">Containment Actions by Severity</h2>

              <p className="text-white/80 mb-6">
                When automated triage identifies a real threat, containment must be immediate. Here are the actions
                to automate at each severity level:
              </p>

              <div className="space-y-6 mb-12">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-semibold text-white m-0">Medium Risk: Soft Containment</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Automated Actions</h4>
                      <ul className="text-white/70 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                          <span>Require step-up MFA for current session</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                          <span>Send Slack/Teams notification to user</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                          <span>Enable enhanced session logging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                          <span>Queue for analyst review within 4 hours</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">User Notification</h4>
                      <div className="bg-black/30 rounded-lg p-3 text-sm text-white/60 italic">
                        "We detected a sign-in from an unusual location. If this was you, no action needed. If not,
                        please contact security@company.com immediately."
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                    <h3 className="text-xl font-semibold text-white m-0">High Risk: Active Containment</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Automated Actions</h4>
                      <ul className="text-white/70 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                          <span>Revoke current session tokens</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                          <span>Force re-authentication with MFA</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                          <span>Temporarily restrict to known locations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                          <span>Alert SOC for immediate review</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Analyst Tasks</h4>
                      <ul className="text-white/70 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                          <span>Review sign-in logs for past 24 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                          <span>Check for mailbox rules or OAuth grants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                          <span>Verify with user via out-of-band channel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <h3 className="text-xl font-semibold text-white m-0">Critical Risk: Full Lockdown</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Automated Actions (Immediate)</h4>
                      <ul className="text-white/70 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <span>Revoke ALL active sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <span>Disable sign-in (block account)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <span>Reset refresh tokens</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <span>Revoke OAuth app consents (last 24h)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Investigation Actions</h4>
                      <ul className="text-white/70 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <span>Collect UAL logs for forensics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <span>Check for data exfiltration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <span>Review mailbox forwarding rules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          <span>Contact user via phone (not email)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Risky Sign-In Types */}
              <h2 className="text-3xl font-bold text-white mb-6">Beyond Impossible Travel: Other Risky Sign-In Types</h2>

              <p className="text-white/80 mb-6">
                Impossible travel is just one signal. Here are other risky sign-in patterns to automate triage for:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="px-6 py-4 text-left text-white font-medium">Sign-In Type</th>
                        <th className="px-6 py-4 text-left text-white font-medium">What It Indicates</th>
                        <th className="px-6 py-4 text-left text-white font-medium">Auto-Triage Check</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="px-6 py-4 text-white font-medium">Unfamiliar location</td>
                        <td className="px-6 py-4 text-white/70">First sign-in from this geo</td>
                        <td className="px-6 py-4 text-white/70">Check if user travel is scheduled (calendar)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white font-medium">Anonymous IP</td>
                        <td className="px-6 py-4 text-white/70">Tor, VPN anonymizer detected</td>
                        <td className="px-6 py-4 text-white/70">Is user in a role that requires anonymity?</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white font-medium">Leaked credentials</td>
                        <td className="px-6 py-4 text-white/70">Password found in breach dump</td>
                        <td className="px-6 py-4 text-white/70">Force password reset, revoke sessions</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white font-medium">Password spray</td>
                        <td className="px-6 py-4 text-white/70">Many accounts, few passwords</td>
                        <td className="px-6 py-4 text-white/70">Block source IP, notify all affected users</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white font-medium">Malware-linked IP</td>
                        <td className="px-6 py-4 text-white/70">IP associated with C2 traffic</td>
                        <td className="px-6 py-4 text-white/70">Block immediately, isolate device</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-white font-medium">Suspicious inbox activity</td>
                        <td className="px-6 py-4 text-white/70">Rules created post-login</td>
                        <td className="px-6 py-4 text-white/70">Correlate with risky sign-in, escalate if match</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Implementation Guide */}
              <h2 className="text-3xl font-bold text-white mb-6">Implementation Checklist</h2>

              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#3CDFFF] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Build your Known Good IP list</h4>
                    <p className="text-white/60 text-sm mt-1">
                      Document all corporate VPNs, proxies, cloud security egress, branch offices. Update quarterly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#3CDFFF] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Integrate threat intelligence feeds</h4>
                    <p className="text-white/60 text-sm mt-1">
                      Connect Tor exit node lists, commercial VPN IPs, password spray source feeds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#3CDFFF] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Define risk scoring thresholds</h4>
                    <p className="text-white/60 text-sm mt-1">
                      Start conservative (higher thresholds for containment), tune based on false positive rate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#3CDFFF] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Create VIP exception list</h4>
                    <p className="text-white/60 text-sm mt-1">
                      Executives and frequent travelers may need softer containment with human approval.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#3CDFFF] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Test containment actions in audit mode</h4>
                    <p className="text-white/60 text-sm mt-1">
                      Run for 2 weeks logging what would happen without taking action. Validate accuracy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#3CDFFF] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Build user notification templates</h4>
                    <p className="text-white/60 text-sm mt-1">
                      Clear, non-alarming messages that explain what happened and what the user should do.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-[#3CDFFF]/20 to-[#3CDFFF]/5 border border-[#3CDFFF]/30 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-white mt-0 mb-4">Automate Impossible Travel Triage with BitLyft AIR</h2>
                <p className="text-white/80 mb-6">
                  BitLyft AIR comes with pre-built impossible travel and risky sign-in playbooks that integrate with
                  Microsoft Entra ID, Okta, and other identity providers. Filter 90%+ of false positives automatically
                  and contain real threats in seconds.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#3CDFFF] text-black font-semibold rounded-lg hover:bg-[#3CDFFF]/90 transition-colors"
                  >
                    Request a Demo
                  </Link>
                  <Link
                    href="/blog/itdr-practical-guide-small-soc-teams"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Read ITDR Guide
                  </Link>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What percentage of impossible travel alerts are typically false positives?
                  </h3>
                  <p className="text-white/70 m-0">
                    In most organizations, 90-95% of impossible travel alerts are false positives caused by VPNs,
                    proxies, mobile carriers, and cloud services. This is why automated triage is essential—manual
                    review at this volume is impossible.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Should we auto-block on impossible travel, or always require human review?
                  </h3>
                  <p className="text-white/70 m-0">
                    Never auto-block on impossible travel alone. It must be correlated with other risk signals
                    (Tor exit node, MFA fatigue, new device) to justify automatic containment. Soft containment
                    (require re-auth) is safer than hard containment (block account) for medium-risk scenarios.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    How do we handle VIPs who travel frequently?
                  </h3>
                  <p className="text-white/70 m-0">
                    Create a VIP list with softer containment policies. For these users, impossible travel triggers
                    monitoring and notification rather than session revocation. Require human approval before any
                    disruptive action. Consider integrating with travel booking systems to pre-approve expected locations.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What's the difference between Microsoft Entra ID Protection and a third-party ITDR solution?
                  </h3>
                  <p className="text-white/70 m-0">
                    Entra ID Protection provides basic risk detection and Conditional Access integration, but limited
                    customization and cross-platform visibility. Third-party ITDR solutions like BitLyft AIR offer
                    deeper correlation, custom playbooks, multi-IdP support, and more granular automated response options.
                  </p>
                </div>
              </div>

              {/* Related Articles */}
              <h2 className="text-3xl font-bold text-white mb-6">Related Articles</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/blog/itdr-practical-guide-small-soc-teams"
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#3CDFFF]/50 transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3CDFFF] transition-colors">
                    ITDR: Practical Guide for Small SOC Teams
                  </h3>
                  <p className="text-white/60 text-sm m-0">
                    Complete identity threat detection and response implementation for lean security teams.
                  </p>
                </Link>

                <Link
                  href="/blog/microsoft-entra-id-account-takeover-response-playbook"
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#3CDFFF]/50 transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3CDFFF] transition-colors">
                    Microsoft Entra ID Account Takeover Playbook
                  </h3>
                  <p className="text-white/60 text-sm m-0">
                    Step-by-step response playbook for confirmed account compromise in Entra ID.
                  </p>
                </Link>

                <Link
                  href="/blog/automated-identity-based-response"
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#3CDFFF]/50 transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3CDFFF] transition-colors">
                    Automated Identity-Based Response
                  </h3>
                  <p className="text-white/60 text-sm m-0">
                    Containment actions that stop account takeover fast—from session revocation to full lockdown.
                  </p>
                </Link>

                <Link
                  href="/blog/guardrails-to-avoid-client-impact"
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#3CDFFF]/50 transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3CDFFF] transition-colors">
                    Guardrails to Avoid Client Impact
                  </h3>
                  <p className="text-white/60 text-sm m-0">
                    Approvals, rate limits, safe-mode, rollback, and blast-radius controls for safe automation.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
