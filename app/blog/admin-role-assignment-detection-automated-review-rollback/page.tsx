import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"

export const metadata: Metadata = {
  title: "New Admin Role Assignment Detection: Automate Review and Rollback Actions | BitLyft AIR®",
  description:
    "Learn how to detect new admin role assignments and automate review and rollback actions. Covers detection signals, automated response workflows, and rollback guidance for SOC teams.",
}

export default function AdminRoleAssignmentDetectionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <article className="prose prose-invert max-w-none">
          {/* Header */}
          <header className="mb-12 border-b border-zinc-800 pb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded">Industry Insights</span>
              <span>•</span>
              <time>6th April, 2026</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              New Admin Role Assignment Detection: Automate Review and Rollback Actions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Admin role assignments are among the highest-risk changes in any identity environment. Learn how to detect new assignments in real-time and automate review and rollback actions before attackers establish persistence.
            </p>
          </header>

          {/* Why Admin Role Changes Matter */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Why Admin Role Changes Are Critical</h2>
            <p className="text-muted-foreground mb-6">
              Admin role assignments represent one of the most dangerous changes an attacker can make after initial compromise. A single Global Administrator or Privileged Role Administrator assignment gives attackers complete control over your identity environment — and the ability to hide their presence indefinitely.
            </p>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">The Persistence Problem</h3>
              <div className="space-y-3">
                {[
                  ["Backdoor Accounts", "Attackers create new admin accounts that survive password resets on compromised accounts"],
                  ["Defense Evasion", "Admin access lets attackers disable security controls, audit logging, and alerting"],
                  ["Lateral Movement", "Elevated privileges enable access to any resource in the tenant"],
                  ["Data Exfiltration", "Admin roles often include access to all mailboxes, files, and applications"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-foreground font-medium">{title}:</span>
                      <span className="text-muted-foreground ml-2">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <p className="text-red-400 font-semibold mb-2">The Window Is Small</p>
              <p className="text-muted-foreground">
                Once an attacker has admin privileges, they can create additional persistence mechanisms in minutes. The average time from admin role assignment to secondary backdoor creation is under 10 minutes — making real-time detection and automated response essential.
              </p>
            </div>
          </section>

          {/* High-Risk Roles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">High-Risk Admin Roles to Monitor</h2>
            <p className="text-muted-foreground mb-6">
              Not all admin roles carry equal risk. Focus detection and automated response on assignments to these high-impact roles:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Role</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Risk Level</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Global Administrator", "Critical", "Full control over entire tenant — can do anything"],
                    ["Privileged Role Administrator", "Critical", "Can assign any role including Global Admin"],
                    ["Exchange Administrator", "High", "Full mailbox access, mail flow rules, data exfiltration"],
                    ["SharePoint Administrator", "High", "Access to all files and sites across organization"],
                    ["Security Administrator", "High", "Can modify security policies and disable protections"],
                    ["Conditional Access Administrator", "High", "Can weaken or bypass authentication policies"],
                    ["Application Administrator", "High", "Can create OAuth apps with broad permissions"],
                    ["Cloud Application Administrator", "High", "Can manage enterprise app registrations"],
                    ["Intune Administrator", "Medium", "Can push configurations to all managed devices"],
                    ["User Administrator", "Medium", "Can reset passwords and create new accounts"],
                  ].map(([role, risk, desc]) => (
                    <tr key={role} className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium text-foreground">{role}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          risk === "Critical" ? "bg-red-500/20 text-red-400" :
                          risk === "High" ? "bg-orange-500/20 text-orange-400" :
                          "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {risk}
                        </span>
                      </td>
                      <td className="py-3 px-4">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Detection Signals */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Detection Signals</h2>
            <p className="text-muted-foreground mb-6">
              Monitor these signals to detect suspicious admin role assignments in real-time:
            </p>

            <div className="space-y-4">
              {[
                {
                  signal: "Role Assignment to Non-IT User",
                  description: "Admin role assigned to user outside IT/security departments",
                  confidence: "High",
                  source: "Entra ID Audit Logs",
                },
                {
                  signal: "Role Assignment Outside Change Window",
                  description: "Admin role assigned outside approved change management hours",
                  confidence: "High",
                  source: "Entra ID Audit Logs + ITSM",
                },
                {
                  signal: "Self-Elevation Attempt",
                  description: "User assigns admin role to themselves (via compromised admin account)",
                  confidence: "Critical",
                  source: "Entra ID Audit Logs",
                },
                {
                  signal: "Role Assignment from Risky Session",
                  description: "Assignment made from session with impossible travel, new device, or risky IP",
                  confidence: "Critical",
                  source: "Entra ID + Identity Protection",
                },
                {
                  signal: "Permanent Role Assignment (No PIM)",
                  description: "Direct role assignment bypassing Privileged Identity Management",
                  confidence: "High",
                  source: "Entra ID Audit Logs",
                },
                {
                  signal: "Role Assignment to New Account",
                  description: "Admin role assigned to account created in last 7 days",
                  confidence: "High",
                  source: "Entra ID Audit Logs",
                },
                {
                  signal: "Bulk Role Assignments",
                  description: "Multiple admin role assignments in short time window",
                  confidence: "Critical",
                  source: "Entra ID Audit Logs",
                },
              ].map((item) => (
                <div key={item.signal} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.signal}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.confidence === "Critical" ? "bg-red-500/20 text-red-400" :
                      item.confidence === "High" ? "bg-orange-500/20 text-orange-400" :
                      "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {item.confidence}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                  <p className="text-xs text-zinc-500">Source: {item.source}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Automated Response Workflow */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Automated Response Workflow</h2>
            <p className="text-muted-foreground mb-6">
              When a suspicious admin role assignment is detected, execute this response workflow:
            </p>

            <div className="space-y-6">
              {/* Step 1: Immediate Verification */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">1</span>
                  <h3 className="text-lg font-semibold text-foreground">Immediate Verification (0-30 seconds)</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Check if assignment matches approved change request in ITSM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Verify assigner is authorized to grant this role</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Check if assignee is in approved admin group/department</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Validate session risk level of the assigner</span>
                  </li>
                </ul>
              </div>

              {/* Step 2: Risk Scoring */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">2</span>
                  <h3 className="text-lg font-semibold text-foreground">Risk Scoring (30-60 seconds)</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-2 px-3 text-foreground font-semibold">Risk Factor</th>
                        <th className="text-left py-2 px-3 text-foreground font-semibold">Score</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      {[
                        ["Critical role (Global Admin, Privileged Role Admin)", "+40"],
                        ["No matching change request", "+30"],
                        ["Assigner session is risky (impossible travel, new device)", "+30"],
                        ["Assignee is new account (<7 days)", "+25"],
                        ["Outside business hours", "+20"],
                        ["Direct assignment (bypassed PIM)", "+20"],
                        ["Assignee not in IT/Security department", "+15"],
                        ["Multiple assignments in 10-minute window", "+25"],
                      ].map(([factor, score]) => (
                        <tr key={factor} className="border-b border-zinc-800">
                          <td className="py-2 px-3">{factor}</td>
                          <td className="py-2 px-3 font-mono text-orange-400">{score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className="text-green-400 font-semibold">0-30: Low</p>
                    <p className="text-muted-foreground">Log and monitor</p>
                  </div>
                  <div>
                    <p className="text-yellow-400 font-semibold">31-60: Medium</p>
                    <p className="text-muted-foreground">Alert + investigation</p>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold">61+: High</p>
                    <p className="text-muted-foreground">Auto-rollback</p>
                  </div>
                </div>
              </div>

              {/* Step 3: Automated Rollback */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">3</span>
                  <h3 className="text-lg font-semibold text-foreground">Automated Rollback (High Risk)</h3>
                </div>
                <p className="text-muted-foreground mb-4">For high-risk assignments (score 61+), execute immediate rollback:</p>
                <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm mb-4">
                  <p className="text-zinc-500"># Remove the role assignment</p>
                  <p className="text-green-400">Remove-MgDirectoryRoleMember -DirectoryRoleId $roleId -DirectoryObjectId $userId</p>
                  <p className="text-zinc-500 mt-3"># Revoke all sessions for the assignee</p>
                  <p className="text-green-400">Revoke-MgUserSignInSession -UserId $userId</p>
                  <p className="text-zinc-500 mt-3"># If assigner session is compromised, contain that account too</p>
                  <p className="text-green-400">Revoke-MgUserSignInSession -UserId $assignerId</p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Remove the role assignment immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Revoke all active sessions for the assignee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>If assigner account shows signs of compromise, contain that account as well</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Create incident ticket with full audit trail</span>
                  </li>
                </ul>
              </div>

              {/* Step 4: Investigation */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">4</span>
                  <h3 className="text-lg font-semibold text-foreground">Post-Rollback Investigation</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Review all activity from the assigner account in the last 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Check for other role assignments or permission changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Review OAuth app consents granted by either account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Check for mail forwarding rules or inbox rules created</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Search for new accounts created during the compromise window</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Automation Decision Matrix */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Automation Decision Matrix</h2>
            <p className="text-muted-foreground mb-6">
              What to automate vs. what requires human review:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Action</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Automation Level</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Rationale</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Detect and alert on role assignment", "Full Auto", "Zero risk, immediate visibility required"],
                    ["Verify against change request", "Full Auto", "ITSM integration enables automated lookup"],
                    ["Risk scoring", "Full Auto", "Deterministic rules, no false positive risk"],
                    ["Rollback non-PIM critical role assignment", "Full Auto", "Direct assignments bypass controls — high risk"],
                    ["Rollback from risky session", "Full Auto", "Session compromise indicators justify immediate action"],
                    ["Rollback during business hours with change request", "Human Review", "May be legitimate even if some risk factors present"],
                    ["Contain assigner account", "Human Review", "May impact legitimate admin if false positive"],
                    ["Notify assignee and assigner", "Full Auto", "Always notify affected parties"],
                  ].map(([action, level, rationale]) => (
                    <tr key={action} className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium text-foreground">{action}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          level === "Full Auto" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {level}
                        </span>
                      </td>
                      <td className="py-3 px-4">{rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Preventive Controls */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Preventive Controls</h2>
            <p className="text-muted-foreground mb-6">
              Reduce attack surface and make suspicious assignments easier to detect:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  control: "Require PIM for All Admin Roles",
                  impact: "Critical",
                  description: "Eliminate permanent admin assignments entirely",
                },
                {
                  control: "Require Approval for Critical Roles",
                  impact: "Critical",
                  description: "Global Admin and Privileged Role Admin require second-party approval",
                },
                {
                  control: "Restrict Who Can Assign Roles",
                  impact: "High",
                  description: "Limit Privileged Role Administrator to smallest possible group",
                },
                {
                  control: "Require MFA for Role Activation",
                  impact: "High",
                  description: "Even with PIM, require fresh MFA to activate admin roles",
                },
                {
                  control: "Time-Limit All Assignments",
                  impact: "Medium",
                  description: "Maximum 8-hour activation window for just-in-time access",
                },
                {
                  control: "Alert on Any Direct Assignment",
                  impact: "High",
                  description: "Direct assignments bypassing PIM should always trigger alerts",
                },
              ].map((item) => (
                <div key={item.control} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.control}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.impact === "Critical" ? "bg-red-500/20 text-red-400" :
                      item.impact === "High" ? "bg-orange-500/20 text-orange-400" :
                      "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {item.impact}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-6">
              <p className="text-primary font-semibold mb-2">The 90% Solution</p>
              <p className="text-muted-foreground">
                Require Privileged Identity Management (PIM) with approval workflows for all critical roles. This single control eliminates most attack paths — direct assignments become instant red flags that justify automated rollback with near-zero false positive risk.
              </p>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Common Mistakes to Avoid</h2>
            <div className="space-y-4">
              {[
                {
                  mistake: "Only monitoring Global Admin",
                  problem: "Privileged Role Administrator can assign Global Admin — monitor both",
                  fix: "Monitor all critical and high-risk roles listed above",
                },
                {
                  mistake: "Alerting without automated rollback",
                  problem: "By the time an analyst reviews the alert, attacker has already created backdoors",
                  fix: "Auto-rollback high-risk assignments; investigate after containment",
                },
                {
                  mistake: "No change management integration",
                  problem: "Every assignment triggers alerts, causing alert fatigue",
                  fix: "Integrate with ITSM to auto-verify legitimate changes",
                },
                {
                  mistake: "Allowing permanent admin assignments",
                  problem: "Permanent assignments are harder to track and easier to abuse",
                  fix: "Require PIM for all admin roles — no exceptions",
                },
                {
                  mistake: "Not checking assigner session risk",
                  problem: "Compromised admin account used for privilege escalation goes undetected",
                  fix: "Cross-reference role assignments with Identity Protection risk signals",
                },
              ].map((item) => (
                <div key={item.mistake} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <h3 className="font-semibold text-red-400 mb-2">{item.mistake}</h3>
                  <p className="text-muted-foreground text-sm mb-2"><strong className="text-foreground">Problem:</strong> {item.problem}</p>
                  <p className="text-muted-foreground text-sm"><strong className="text-foreground">Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Automate Admin Role Monitoring with BitLyft AIR</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              BitLyft AIR detects admin role assignments in real-time, automatically verifies against change management, and rolls back high-risk assignments before attackers can establish persistence.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              See It In Action
            </Link>
          </section>

          {/* Related Articles */}
          <RelatedArticles currentSlug="admin-role-assignment-detection-automated-review-rollback" />
        </article>
      </main>

      <Footer />
    </div>
  )
}
