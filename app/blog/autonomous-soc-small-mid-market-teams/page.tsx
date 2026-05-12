import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag, CheckCircle2, Users, Shield, Zap, LayoutGrid, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Autonomous SOC for Small/Mid-Market Teams: Operating Model, Roles, and Day 1 Playbooks | BitLyft",
  description: "Learn how small and mid-market security teams can operationalize an autonomous SOC from day one. Covers the operating model, team roles, and starter playbooks for immediate protection.",
  keywords: "autonomous SOC, small team SOC, mid-market cybersecurity, SOC operating model, security team roles, day 1 playbooks, SOC automation, managed SOC, security operations center, MSP security operations",
}

export default function AutonomousSocSmallMidMarketBlogPost() {
  return (
    <div className="min-h-screen bg-[#000a0e]">
      <Header />

      <main className="pt-24">
        <article className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">

            {/* Back Link */}
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                25th February, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                14 min read
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <Tag className="w-4 h-4" />
                Industry Insights
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Autonomous SOC for Small/Mid-Market Teams: Operating Model, Roles, and {"\""}Day 1{"\""}  Playbooks
            </h1>

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              You don{"'"}t need a 20-person security operations center to run enterprise-grade threat detection and response. The autonomous SOC model was built for the reality most organizations face:{" "}
              <strong className="text-white">small teams, limited budgets, and threats that don{"'"}t care about your headcount</strong>. Whether you{"'"}re a mid-market company with a lean IT security function or a security-focused MSP managing multiple client environments, this guide walks through the operating model, the roles that matter, and the playbooks you can activate on day one.
            </p>

            <div className="prose prose-invert prose-lg max-w-none">

              {/* Section 1: The Problem */}
              <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800 mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-bold text-white m-0">The Problem: Enterprise Threats, Non-Enterprise Resources</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Attackers don{"'"}t filter by company size. Ransomware campaigns, identity-based attacks, and supply-chain compromises hit 200-person companies just as hard as Fortune 500 enterprises. The difference is the Fortune 500 has a 24/7 SOC with dozens of analysts. Mid-market teams typically have:
                </p>
                <ul className="space-y-3 text-gray-300 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">1 to 5 security-focused staff</strong> (often wearing multiple hats across IT and security)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">No overnight or weekend coverage</strong> - alerts that fire at 2 AM sit untouched until Monday morning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Tool sprawl with no integration</strong> - SIEM, endpoint, firewall, and identity platforms that don{"'"}t talk to each other</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Compliance pressure</strong> that demands documented response processes and audit trails</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  The autonomous SOC model closes this gap — not by hiring more people, but by combining AI-driven detection, automated response, and human oversight into a single operational framework that works at any team size.
                </p>
              </div>

              {/* Section 2: What Is an Autonomous SOC */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Is an Autonomous SOC?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                An <strong className="text-white">autonomous SOC</strong> is a security operations model where AI and automation handle the bulk of detection, triage, and initial response, while human analysts focus on high-judgment decisions, threat hunting, and strategic improvement. It{"'"}s not about removing people from the equation. It{"'"}s about removing the repetitive, time-sensitive work that burns analysts out and creates coverage gaps.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                For small and mid-market teams, this means you can achieve <strong className="text-white">24/7 coverage, sub-minute response times, and consistent playbook execution</strong> without a headcount that matches the threat landscape.
              </p>

              {/* Section 3: The Operating Model */}
              <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-8 mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <LayoutGrid className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-bold text-white m-0">The Autonomous SOC Operating Model</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The model breaks down into three tiers. Not tiers of analysts like a traditional SOC, but tiers of <strong className="text-white">decision authority</strong>:
                </p>

                {/* Tier 1 */}
                <div className="bg-black/30 rounded-lg p-6 mb-4 border border-zinc-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Tier 1: Fully Automated (No Human in the Loop)</h3>
                  <p className="text-gray-300 mb-3">
                    These are high-confidence, low-risk actions the platform executes instantly. They cover 70-80% of daily alert volume.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Isolating a known-malicious endpoint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Disabling a compromised user account after confirmed credential abuse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Blocking IPs associated with active brute-force attacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Enriching alerts with threat intelligence and closing known false positives</span>
                    </li>
                  </ul>
                </div>

                {/* Tier 2 */}
                <div className="bg-black/30 rounded-lg p-6 mb-4 border border-zinc-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Tier 2: Automated with Human Approval</h3>
                  <p className="text-gray-300 mb-3">
                    These are medium-risk actions where the platform does the investigation and recommends an action, but a human approves before execution. Covers 15-20% of alerts.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Quarantining a server that{"'"}s showing lateral movement indicators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Revoking admin privileges after anomalous privilege escalation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Modifying firewall rules in response to suspected data exfiltration</span>
                    </li>
                  </ul>
                </div>

                {/* Tier 3 */}
                <div className="bg-black/30 rounded-lg p-6 border border-zinc-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">Tier 3: Human-Led (Platform-Assisted)</h3>
                  <p className="text-gray-300 mb-3">
                    These are high-complexity investigations and strategic decisions. The platform provides context, correlation, and recommendations. Covers 5-10% of alerts.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Investigating potential insider threats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Coordinating response to active ransomware deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Post-incident forensics and root-cause analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-[#00cFFF] flex-shrink-0 mt-0.5" />
                      <span>Tuning detection logic and adjusting automation thresholds</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Roles */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Roles in an Autonomous SOC (You Don{"'"}t Need a Full Team)</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                In a traditional SOC, you need Tier 1 analysts, Tier 2 analysts, Tier 3 engineers, a SOC manager, and threat hunters. In an autonomous SOC, you need far fewer people because the platform handles the repetitive work. Here{"'"}s how a lean team maps out:
              </p>

              {/* Roles Table */}
              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-4 px-4 text-white font-semibold">Role</th>
                      <th className="text-left py-4 px-4 text-white font-semibold">Responsibility</th>
                      <th className="text-left py-4 px-4 text-white font-semibold">Who Fills It</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 font-semibold text-white">Security Lead</td>
                      <td className="py-4 px-4">Owns the security program, sets automation policies, approves Tier 2 actions, reports to leadership</td>
                      <td className="py-4 px-4">CISO, Director of IT, or senior security engineer</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 font-semibold text-white">Automation Operator</td>
                      <td className="py-4 px-4">Monitors the platform, reviews escalations, tunes playbooks, manages integrations</td>
                      <td className="py-4 px-4">Security analyst or senior sysadmin</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 font-semibold text-white">On-Call Responder</td>
                      <td className="py-4 px-4">Handles Tier 2 approvals after hours, responds to critical escalations</td>
                      <td className="py-4 px-4">Rotating duty across IT/security staff</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 font-semibold text-white">Compliance Contact</td>
                      <td className="py-4 px-4">Pulls audit reports, validates that playbooks meet regulatory requirements</td>
                      <td className="py-4 px-4">GRC analyst, IT manager, or external auditor</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-12">
                <p className="text-gray-300 leading-relaxed mb-0">
                  <strong className="text-white">For MSPs:</strong> This same model scales across client environments. The Security Lead maps to your SOC lead, the Automation Operator maps to your per-client analyst, and the On-Call Responder is your NOC or after-hours team. One platform instance can manage detection and response for dozens of clients simultaneously.
                </p>
              </div>

              {/* Section 5: Day 1 Playbooks */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">{"\""}Day 1{"\""}  Playbooks: What to Automate First</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You don{"'"}t need 50 playbooks to get started. You need five that cover the highest-frequency, highest-impact attack patterns. Here are the day 1 playbooks every small/mid-market team should activate immediately:
              </p>

              {/* Playbook 1 */}
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-white m-0">Playbook 1: Compromised Credential Response</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">Trigger: Multiple failed authentication attempts followed by a successful login from an anomalous location</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Automated (Tier 1):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Force MFA re-authentication</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Kill active sessions</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Enrich with threat intel (IP reputation, geo-location)</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Human Approval (Tier 2):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Disable user account</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Force password reset</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Notify the user{"'"}s manager</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Playbook 2 */}
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-white m-0">Playbook 2: Endpoint Malware Containment</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">Trigger: EDR detects malicious process execution or known malware signature</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Automated (Tier 1):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Isolate endpoint from the network</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Kill malicious processes</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Capture forensic snapshot (memory dump, process tree)</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Human Approval (Tier 2):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Wipe and reimage the device</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Scan all endpoints for same IOCs</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Escalate to incident response if lateral movement detected</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Playbook 3 */}
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-white m-0">Playbook 3: MFA Fatigue / Push Bombing</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">Trigger: Excessive MFA push notifications to a single user in a short window</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Automated (Tier 1):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Block further MFA push requests</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Lock the account temporarily</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Alert security team with full context</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Human Approval (Tier 2):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Reset MFA devices for the user</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Investigate source of push requests</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Check if credentials were leaked in a breach</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Playbook 4 */}
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-white m-0">Playbook 4: Privilege Escalation Detection</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">Trigger: Unexpected admin role assignment, service account creation, or group policy change</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Automated (Tier 1):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Log the change with full audit trail</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Cross-reference against approved change requests</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Flag for immediate review if no matching ticket</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Human Approval (Tier 2):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Revert the privilege change</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Disable the account that made the change</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Initiate full investigation</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Playbook 5 */}
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-white m-0">Playbook 5: Suspicious Data Exfiltration</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">Trigger: Abnormal outbound data volume, unusual cloud storage uploads, or connections to known C2 infrastructure</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Automated (Tier 1):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Throttle outbound traffic from the source</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Block connection to known C2 domains</span></li>
                      <li className="flex items-start gap-2"><Zap className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Capture packet samples for forensic review</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-semibold mb-2">Human Approval (Tier 2):</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Isolate the source system</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Revoke cloud storage tokens</span></li>
                      <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-[#00cFFF] flex-shrink-0 mt-0.5" /><span>Begin breach assessment process</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6: How to Get Started */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Getting Started: A 4-Week Rollout</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You don{"'"}t need a 6-month implementation. Here{"'"}s a realistic timeline for a small or mid-market team going from zero to operational autonomous SOC:
              </p>

              <div className="space-y-4 mb-12">
                <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
                  <h4 className="text-lg font-bold text-white mb-2">Week 1: Integration and Baseline</h4>
                  <p className="text-gray-300 text-sm">Connect your core tools (identity provider, endpoint protection, email gateway, firewall/NGFW). Establish baseline detection policies. Deploy in monitor-only mode.</p>
                </div>
                <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
                  <h4 className="text-lg font-bold text-white mb-2">Week 2: Activate Tier 1 Playbooks</h4>
                  <p className="text-gray-300 text-sm">Enable the five day 1 playbooks with Tier 1 automation turned on. Monitor results. Tune false positive thresholds based on your environment.</p>
                </div>
                <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
                  <h4 className="text-lg font-bold text-white mb-2">Week 3: Enable Tier 2 Approvals</h4>
                  <p className="text-gray-300 text-sm">Turn on human-in-the-loop approval workflows. Set up on-call rotation. Test escalation paths including after-hours notifications.</p>
                </div>
                <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
                  <h4 className="text-lg font-bold text-white mb-2">Week 4: Review, Report, Refine</h4>
                  <p className="text-gray-300 text-sm">Pull the first monthly report. Review automation accuracy. Adjust playbook parameters. Document the operating model for compliance audits.</p>
                </div>
              </div>

              {/* Section 7: MSP Specific */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">For Security-Focused MSPs: Scaling Across Clients</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The autonomous SOC model is especially powerful for MSPs because the same playbooks, detection logic, and automation rules can be <strong className="text-white">templated and deployed across every client environment</strong>. Instead of building custom runbooks per client:
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Standardize playbooks</strong> across clients with per-tenant customization for thresholds and notification preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Centralize visibility</strong> with a single dashboard showing alert status, automation activity, and SLA compliance across all clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Scale without hiring linearly</strong> - each new client adds incremental load, not a new analyst seat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Demonstrate value</strong> with client-facing reports showing exactly how many threats were detected, contained, and resolved automatically</span>
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6 mb-12">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-lg font-bold text-white mb-2">How many people do I need to run an autonomous SOC?</h3>
                  <p className="text-gray-300">
                    Most small-to-midmarket teams operate effectively with 2-4 people: a security lead, one or two automation operators, and a rotating on-call responder. The platform handles the 24/7 coverage and Tier 1 workload.
                  </p>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-lg font-bold text-white mb-2">Is this the same as outsourcing to an MSSP?</h3>
                  <p className="text-gray-300">
                    No. An autonomous SOC keeps you in control. You set the policies, approve the playbooks, and own the data. An MSSP manages everything externally. The autonomous model gives you MSSP-level coverage with in-house ownership.
                  </p>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-lg font-bold text-white mb-2">Can I start with just one playbook?</h3>
                  <p className="text-gray-300">
                    Absolutely. Start with Playbook 1 (Compromised Credential Response) since identity attacks are the most common entry point. Add more playbooks as your team gets comfortable with the model.
                  </p>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                  <h3 className="text-lg font-bold text-white mb-2">What tools do I need to integrate?</h3>
                  <p className="text-gray-300">
                    At minimum: your identity provider (Okta, Azure AD, OneLogin, Duo), endpoint protection platform, and email gateway. Firewall and cloud infrastructure integrations add deeper coverage but aren{"'"}t required on day 1.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Operationalize Your SOC?</h2>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                  See how BitLyft AIR{"\u00AE"} gives small and mid-market teams autonomous detection and response from day one. No massive headcount required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-[#2261db]/30 transition-all">
                    <Link href="/contact" className="flex items-center gap-2">
                      Schedule a Demo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-primary/50 text-white hover:bg-primary/10 bg-transparent px-8 py-3">
                    <Link href="/blog/soar-vs-security-automation-vs-autonomous-soc">
                      Read: SOAR vs Autonomous SOC
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
