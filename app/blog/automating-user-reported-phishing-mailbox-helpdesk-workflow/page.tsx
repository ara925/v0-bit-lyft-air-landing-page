import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Mail,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Users,
  Zap,
  ArrowRight,
  MessageSquare,
  FileText,
  Search,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Automating User-Reported Phishing: Mailbox + Helpdesk Workflow | BitLyft AIR®",
  description:
    "Learn how to automate user-reported phishing workflows that integrate mailbox analysis with helpdesk ticketing. Reduce analyst workload while improving response times.",
}

export default function UserReportedPhishingBlogPost() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Back Navigation */}
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="border-primary/50 text-primary">
                Industry Insights
              </Badge>
              <Badge variant="outline" className="border-zinc-700 text-gray-400">
                Article
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Automating User-Reported Phishing: Mailbox + Helpdesk Workflow
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Build an end-to-end automation that turns user phishing reports into analyzed, triaged, and resolved
              incidents — without analyst intervention for the majority of cases.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>26th April, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
          </header>

          {/* Introduction */}
          <section className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              User-reported phishing is one of the most valuable — and most overwhelming — sources of threat
              intelligence for security teams. Employees who click the &quot;Report Phishing&quot; button provide
              real-time signals about threats that bypassed email filters. But without automation, each report creates
              manual work: retrieve the email, analyze headers, check URLs, look up sender reputation, determine if
              it&apos;s malicious, respond to the user, and close the ticket.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Most SOC teams receive hundreds of phishing reports weekly. The majority are false positives (legitimate
              emails users found suspicious), but buried in the noise are real threats that demand immediate action.
              This guide shows how to build an automated workflow that handles the entire lifecycle — from user report
              to resolution — while escalating only the cases that truly need human review.
            </p>
          </section>

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Manual Phishing Triage Problem</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-4">Typical Manual Workflow</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-white">Steps Per Report</h4>
                  <ol className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-mono">1.</span>
                      <span>Helpdesk receives ticket from user</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-mono">2.</span>
                      <span>Analyst retrieves reported email from mailbox</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-mono">3.</span>
                      <span>Analyst extracts headers, URLs, attachments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-mono">4.</span>
                      <span>Analyst checks URLs against threat intel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-mono">5.</span>
                      <span>Analyst verifies sender domain/SPF/DKIM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-mono">6.</span>
                      <span>Analyst determines verdict (malicious/safe)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-mono">7.</span>
                      <span>Analyst responds to user with result</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-mono">8.</span>
                      <span>Analyst closes helpdesk ticket</span>
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-white">Time and Cost Impact</h4>
                  <div className="space-y-4">
                    <div className="bg-zinc-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400">8-15 min</div>
                      <div className="text-sm text-gray-400">Per report (manual)</div>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400">500+</div>
                      <div className="text-sm text-gray-400">Reports per week (typical org)</div>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400">65-125 hrs</div>
                      <div className="text-sm text-gray-400">Weekly analyst time</div>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400">70-85%</div>
                      <div className="text-sm text-gray-400">False positive rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Automated Workflow Architecture */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Automated Workflow Architecture</h2>
            <p className="text-gray-400 mb-8">
              The automated workflow connects three systems: the phishing report mailbox, threat analysis engines, and
              the helpdesk platform. Each reported email flows through analysis stages with automated decisions at each
              step.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-center">End-to-End Workflow Flow</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { icon: <Mail className="w-6 h-6" />, label: "Report Received", desc: "User clicks Report Phishing" },
                  { icon: <Search className="w-6 h-6" />, label: "Email Retrieved", desc: "Fetch from report mailbox" },
                  { icon: <Shield className="w-6 h-6" />, label: "Analysis Run", desc: "URLs, headers, attachments" },
                  {
                    icon: <CheckCircle2 className="w-6 h-6" />,
                    label: "Verdict Assigned",
                    desc: "Malicious/Suspicious/Safe",
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    label: "Resolution",
                    desc: "User notified, ticket closed",
                  },
                ].map((step, i) => (
                  <div key={step.label} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-3">
                      {step.icon}
                    </div>
                    <div className="text-sm font-semibold mb-1">{step.label}</div>
                    <div className="text-xs text-gray-500">{step.desc}</div>
                    {i < 4 && (
                      <ArrowRight className="w-4 h-4 text-gray-600 mx-auto mt-3 hidden md:block rotate-0 md:rotate-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Trigger Sources
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Outlook Report Message add-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Microsoft Defender user submissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Shared mailbox (phishing@company.com)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Helpdesk ticket with attachment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Analysis Components
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>URL reputation (VirusTotal, URLhaus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sender domain validation (SPF/DKIM/DMARC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Attachment sandboxing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Header anomaly detection</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Analysis Logic */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Automated Analysis Logic</h2>
            <p className="text-gray-400 mb-8">
              The analysis engine scores each email across multiple indicators. The combined score determines the
              automated action and whether human review is required.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Indicator</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Weight</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Detection Method</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Score Impact</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Known malicious URL</td>
                    <td className="py-3 px-4">Critical</td>
                    <td className="py-3 px-4">Threat intel lookup</td>
                    <td className="py-3 px-4 text-red-400">+100 (auto-malicious)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Malicious attachment</td>
                    <td className="py-3 px-4">Critical</td>
                    <td className="py-3 px-4">Sandbox detonation</td>
                    <td className="py-3 px-4 text-red-400">+100 (auto-malicious)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">DMARC fail + external</td>
                    <td className="py-3 px-4">High</td>
                    <td className="py-3 px-4">Header analysis</td>
                    <td className="py-3 px-4 text-orange-400">+40</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Lookalike domain</td>
                    <td className="py-3 px-4">High</td>
                    <td className="py-3 px-4">Domain similarity check</td>
                    <td className="py-3 px-4 text-orange-400">+35</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Credential harvesting keywords</td>
                    <td className="py-3 px-4">Medium</td>
                    <td className="py-3 px-4">NLP content analysis</td>
                    <td className="py-3 px-4 text-yellow-400">+25</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Urgency language</td>
                    <td className="py-3 px-4">Medium</td>
                    <td className="py-3 px-4">Pattern matching</td>
                    <td className="py-3 px-4 text-yellow-400">+15</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">First-time sender</td>
                    <td className="py-3 px-4">Low</td>
                    <td className="py-3 px-4">Communication history</td>
                    <td className="py-3 px-4 text-blue-400">+10</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Known sender (verified)</td>
                    <td className="py-3 px-4">Negative</td>
                    <td className="py-3 px-4">Allowlist + history</td>
                    <td className="py-3 px-4 text-green-400">-30</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <div className="text-2xl font-bold text-red-400 mb-2">Score 70+</div>
                <div className="font-semibold mb-2">Malicious</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Auto-quarantine similar emails</li>
                  <li>Block sender domain</li>
                  <li>Notify user: threat confirmed</li>
                  <li>Create incident for tracking</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Score 40-69</div>
                <div className="font-semibold mb-2">Suspicious</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Escalate to analyst queue</li>
                  <li>Pre-populate analysis data</li>
                  <li>Notify user: under review</li>
                  <li>Priority based on score</li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="text-2xl font-bold text-green-400 mb-2">Score &lt;40</div>
                <div className="font-semibold mb-2">Safe</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Auto-close ticket</li>
                  <li>Thank user for reporting</li>
                  <li>No further action</li>
                  <li>Log for metrics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Helpdesk Integration */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Helpdesk Integration Patterns</h2>
            <p className="text-gray-400 mb-8">
              The workflow must integrate bidirectionally with helpdesk systems — creating tickets when needed,
              updating status throughout analysis, and closing with appropriate resolution codes.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Ticket Lifecycle Automation</h3>
              <div className="space-y-4">
                {[
                  {
                    stage: "Creation",
                    trigger: "User reports email (if ticket doesn't exist)",
                    actions: "Create ticket, assign category 'Phishing Report', link to original email",
                    status: "Open",
                  },
                  {
                    stage: "Analysis Start",
                    trigger: "Automation picks up report",
                    actions: "Update ticket: 'Automated analysis in progress', add internal note with analysis ID",
                    status: "In Progress",
                  },
                  {
                    stage: "Verdict: Safe",
                    trigger: "Score < 40",
                    actions:
                      "Update ticket with analysis summary, send user response, close ticket with resolution 'False Positive'",
                    status: "Resolved",
                  },
                  {
                    stage: "Verdict: Malicious",
                    trigger: "Score >= 70",
                    actions:
                      "Update ticket with threat details, send user warning, link to incident, close with resolution 'Threat Confirmed'",
                    status: "Resolved",
                  },
                  {
                    stage: "Verdict: Suspicious",
                    trigger: "Score 40-69",
                    actions:
                      "Update ticket with analysis data, assign to SOC queue, send user 'Under Review' response",
                    status: "Escalated",
                  },
                ].map((item) => (
                  <div key={item.stage} className="flex items-start gap-4 p-4 bg-zinc-800/30 rounded-lg">
                    <div className="w-24 flex-shrink-0">
                      <div className="text-sm font-semibold text-primary">{item.stage}</div>
                    </div>
                    <div className="flex-1 grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Trigger</div>
                        <div className="text-gray-300">{item.trigger}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Actions</div>
                        <div className="text-gray-300">{item.actions}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Status</div>
                        <Badge
                          variant="outline"
                          className={
                            item.status === "Resolved"
                              ? "border-green-500/50 text-green-400"
                              : item.status === "Escalated"
                                ? "border-yellow-500/50 text-yellow-400"
                                : "border-blue-500/50 text-blue-400"
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Supported Platforms
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    ServiceNow (REST API)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Jira Service Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Zendesk
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Freshservice
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    ConnectWise (PSA)
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  User Communication Templates
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    &quot;Thank you - email verified safe&quot;
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    &quot;Under review by security team&quot;
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400" />
                    &quot;Threat confirmed - do not interact&quot;
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    &quot;Similar threats blocked org-wide&quot;
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Response Actions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Automated Response Actions</h2>
            <p className="text-gray-400 mb-8">
              When a reported email is confirmed malicious, the workflow can trigger additional containment actions
              beyond just closing the ticket.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Action</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Trigger Condition</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Scope</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Approval</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Delete from reporter&apos;s mailbox</td>
                    <td className="py-3 px-4">Confirmed malicious</td>
                    <td className="py-3 px-4">Single user</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="border-green-500/50 text-green-400">
                        Auto
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Search &amp; purge org-wide</td>
                    <td className="py-3 px-4">Same sender + subject pattern</td>
                    <td className="py-3 px-4">All mailboxes</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                        Review
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Block sender domain</td>
                    <td className="py-3 px-4">Confirmed phishing domain</td>
                    <td className="py-3 px-4">Transport rule</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="border-green-500/50 text-green-400">
                        Auto
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Add URL to blocklist</td>
                    <td className="py-3 px-4">Malicious URL detected</td>
                    <td className="py-3 px-4">Defender tenant</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="border-green-500/50 text-green-400">
                        Auto
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Reset user password</td>
                    <td className="py-3 px-4">User clicked link + credential page</td>
                    <td className="py-3 px-4">Reporting user</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                        Review
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Revoke user sessions</td>
                    <td className="py-3 px-4">Credential compromise suspected</td>
                    <td className="py-3 px-4">Reporting user</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="border-green-500/50 text-green-400">
                        Auto
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Cascade Detection
              </h4>
              <p className="text-sm text-gray-400">
                When a reported email is confirmed malicious, automatically search all mailboxes for the same message
                (by Message-ID or sender + subject hash). If found in other mailboxes, trigger remediation for all
                affected users — not just the reporter. This transforms a single user report into org-wide protection.
              </p>
            </div>
          </section>

          {/* User Feedback Loop */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">User Feedback Loop</h2>
            <p className="text-gray-400 mb-8">
              A key benefit of user-reported phishing workflows is the feedback loop — users learn whether their
              reports were accurate, which improves future reporting quality.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-bold mb-4">Positive Reinforcement</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">True Positive:</strong> &quot;Great catch! This was a confirmed
                      phishing attempt. We&apos;ve blocked the sender and removed similar emails from all
                      mailboxes.&quot;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">False Positive:</strong> &quot;Thank you for reporting. We verified
                      this email is safe. It&apos;s from [Company] regarding [Topic]. No action needed.&quot;
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h4 className="font-bold mb-4">Reporting Metrics (Per User)</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Total reports submitted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>True positive rate (accuracy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>Missed phishing (clicked before reporting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>First reporter bonus (org-wide threat)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 border border-zinc-800 rounded-xl p-6">
              <h4 className="font-bold mb-3">Gamification (Optional)</h4>
              <p className="text-sm text-gray-400 mb-4">
                Some organizations implement recognition programs for users who report confirmed threats. This
                encourages a security-conscious culture.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-2xl mb-1">5</div>
                  <div className="text-xs text-gray-500">True positives = &quot;Phishing Spotter&quot;</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-2xl mb-1">1</div>
                  <div className="text-xs text-gray-500">First reporter = &quot;Early Warning&quot;</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="text-2xl mb-1">10</div>
                  <div className="text-xs text-gray-500">Reports (any) = &quot;Security Aware&quot;</div>
                </div>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Metrics and Targets</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Metric</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Target</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Alert Threshold</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Measurement</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Auto-resolution rate</td>
                    <td className="py-3 px-4 text-green-400">&gt;75%</td>
                    <td className="py-3 px-4 text-red-400">&lt;60%</td>
                    <td className="py-3 px-4">Reports closed without analyst</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Time to user response</td>
                    <td className="py-3 px-4 text-green-400">&lt;5 min</td>
                    <td className="py-3 px-4 text-red-400">&gt;30 min</td>
                    <td className="py-3 px-4">Report received → user notified</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">False negative rate</td>
                    <td className="py-3 px-4 text-green-400">&lt;2%</td>
                    <td className="py-3 px-4 text-red-400">&gt;5%</td>
                    <td className="py-3 px-4">Malicious marked safe (weekly audit)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">Analyst time per escalation</td>
                    <td className="py-3 px-4 text-green-400">&lt;3 min</td>
                    <td className="py-3 px-4 text-red-400">&gt;8 min</td>
                    <td className="py-3 px-4">Pre-populated analysis data</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-medium">User report volume</td>
                    <td className="py-3 px-4 text-green-400">Trending up</td>
                    <td className="py-3 px-4 text-yellow-400">Declining</td>
                    <td className="py-3 px-4">Healthy security culture</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  mistake: "Auto-closing without user notification",
                  problem: "Users stop reporting because they never hear back",
                  fix: "Always send response — even for false positives",
                },
                {
                  mistake: "Org-wide purge without review",
                  problem: "False positive purges legitimate business emails",
                  fix: "Require approval for purges affecting >10 users",
                },
                {
                  mistake: "Ignoring attachment analysis",
                  problem: "Malicious documents slip through URL-only checks",
                  fix: "Always sandbox attachments before verdict",
                },
                {
                  mistake: "No feedback loop on verdicts",
                  problem: "Model doesn't learn from analyst corrections",
                  fix: "Track analyst overrides, adjust scoring weights",
                },
                {
                  mistake: "Same response for all false positives",
                  problem: "Users don't understand why email was safe",
                  fix: "Include specific reason (known sender, verified domain)",
                },
                {
                  mistake: "Not tracking 'clicked then reported'",
                  problem: "Miss users who may be compromised",
                  fix: "Check click logs before closing ticket",
                },
              ].map((item) => (
                <div key={item.mistake} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div className="font-semibold text-red-400">{item.mistake}</div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    <strong className="text-gray-300">Problem:</strong> {item.problem}
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong className="text-green-400">Fix:</strong> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* BitLyft CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl p-8 border border-primary/30">
              <h2 className="text-2xl font-bold mb-4">Automate Phishing Triage with BitLyft AIR</h2>
              <p className="text-gray-300 mb-6">
                BitLyft AIR integrates with Microsoft 365, major helpdesk platforms, and threat intelligence feeds to
                fully automate user-reported phishing workflows. Achieve 80%+ auto-resolution while maintaining analyst
                oversight for edge cases.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">See It in Action</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Link href="/solutions/threat-detection">Learn About Threat Detection</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/email-quarantine-automation-policy-design-false-positives"
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-bold mb-2">Email Quarantine Automation</h3>
                <p className="text-sm text-gray-400">Policy design that avoids false positives</p>
              </Link>
              <Link
                href="/blog/bec-response-microsoft-365-triage-containment"
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-bold mb-2">BEC Response in Microsoft 365</h3>
                <p className="text-sm text-gray-400">Triage and containment playbook</p>
              </Link>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}
