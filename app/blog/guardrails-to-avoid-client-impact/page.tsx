import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag, CheckCircle2, Shield, AlertTriangle, RotateCcw, Gauge, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Guardrails to Avoid Client Impact: Approvals, Rate Limits, Safe-Mode, Rollback, Blast-Radius Controls | BitLyft",
  description: "Learn the five essential guardrails every security automation platform needs to prevent client impact: human approvals, rate limits, safe-mode, rollback, and blast-radius controls.",
  keywords: "security automation guardrails, approval workflows, rate limiting SOC, safe mode automation, rollback security actions, blast radius controls, autonomous SOC safety, security automation risks, SOAR guardrails, automated remediation safety",
}

export default function GuardrailsBlogPost() {
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
                27th February, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                13 min read
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <Tag className="w-4 h-4" />
                Industry Insights
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Guardrails to Avoid Client Impact: Approvals, Rate Limits, Safe-Mode, Rollback, Blast-Radius Controls
            </h1>

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Automation is only as good as the controls that surround it. Without proper guardrails, a single misconfigured playbook can disable the wrong user, block legitimate traffic, or cascade across every endpoint in your environment. This article breaks down the five essential guardrails every security team needs before letting automation run in production.
            </p>

            <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-6 mb-10">
              <p className="text-gray-200 font-semibold mb-2">Key Takeaway</p>
              <p className="text-gray-300">
                Speed without safety creates more incidents than it resolves. The five guardrails below are non-negotiable for any team automating detection, response, or remediation at scale.
              </p>
            </div>

            {/* Why Guardrails Matter */}
            <h2 className="text-3xl font-bold text-white mb-4">Why Guardrails Matter More Than Speed</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Every security vendor talks about speed: mean time to detect, mean time to respond, mean time to remediate. And speed matters. But speed without control is how you accidentally lock out an entire department, quarantine a production server, or trigger a compliance violation at 2 AM with nobody watching.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Guardrails are the policy-driven constraints that let your automation move fast while staying safe. They are the difference between an autonomous SOC that your team trusts and one that keeps everyone awake at night.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              There are five categories of guardrails that every security automation platform needs. Let{"'"}s walk through each one with practical examples.
            </p>

            {/* Guardrail 1: Approval Workflows */}
            <div className="border-l-4 border-[#2261db] pl-6 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2261db]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#00cFFF]" />
                </div>
                <h2 className="text-3xl font-bold text-white">1. Human Approval Workflows</h2>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">What They Do</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Approval workflows insert a human decision point before high-risk automated actions execute. Instead of firing immediately, the action pauses, sends a notification to the appropriate approver, and waits for explicit confirmation before proceeding.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">When to Use Them</h3>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" />
                  <span><strong>Disabling a user account</strong> - A compromised account detection triggers a disable action. But what if the {"\""}compromised{"\""}  user is the CEO logging in from a new device during travel? Approval catches false positives before they become incidents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" />
                  <span><strong>Quarantining a server</strong> - Isolating an endpoint from the network stops lateral movement, but it also stops business operations. Approval ensures a human evaluates the business impact before isolation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" />
                  <span><strong>Modifying firewall rules</strong> - Blocking an IP or port at the network level can disrupt partner integrations, VPN tunnels, or SaaS applications. Always require sign-off.</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">How to Implement</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Tier your actions by risk level. Low-risk actions (enrichment, alerting, logging) run fully automated. Medium-risk actions (password resets, session kills) require one approver. High-risk actions (account disable, network isolation, data wipe) require two approvers with a time-bound window - if nobody approves within 15 minutes, the action either escalates or falls back to a safer alternative.
              </p>

              <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
                <p className="text-gray-400 text-sm italic">
                  BitLyft AIR automatically classifies actions into approval tiers so teams can configure who approves what, without building custom workflows from scratch.
                </p>
              </div>
            </div>

            {/* Guardrail 2: Rate Limits */}
            <div className="border-l-4 border-[#00cFFF] pl-6 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00cFFF]/10 flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-[#00cFFF]" />
                </div>
                <h2 className="text-3xl font-bold text-white">2. Rate Limits</h2>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">What They Do</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Rate limits cap the number of automated actions that can execute within a given time window. They prevent runaway automation from doing more damage than the original threat.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Why They Are Critical</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Consider this scenario: a noisy detection rule fires 200 times in 10 minutes due to a misconfigured log source. Without rate limits, your automation might disable 200 user accounts, block 200 IPs, or send 200 quarantine commands. The automation did exactly what it was told to do, and it caused a company-wide outage.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Practical Rate Limit Thresholds</h3>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-zinc-900 text-gray-300">
                      <th className="text-left p-3 border-b border-zinc-800 font-semibold">Action Type</th>
                      <th className="text-left p-3 border-b border-zinc-800 font-semibold">Recommended Limit</th>
                      <th className="text-left p-3 border-b border-zinc-800 font-semibold">Breach Behavior</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="p-3 text-gray-300">User account disable</td>
                      <td className="p-3 text-gray-300">5 per hour</td>
                      <td className="p-3 text-gray-300">Pause + alert SOC lead</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-3 text-gray-300">Endpoint isolation</td>
                      <td className="p-3 text-gray-300">3 per hour</td>
                      <td className="p-3 text-gray-300">Pause + require manual approval</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-3 text-gray-300">Firewall rule changes</td>
                      <td className="p-3 text-gray-300">10 per hour</td>
                      <td className="p-3 text-gray-300">Pause + escalate</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-3 text-gray-300">Password resets</td>
                      <td className="p-3 text-gray-300">20 per hour</td>
                      <td className="p-3 text-gray-300">Queue remaining + notify</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-300">Enrichment lookups</td>
                      <td className="p-3 text-gray-300">500 per hour</td>
                      <td className="p-3 text-gray-300">Throttle, no pause</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                The key principle: when a rate limit is breached, automation should pause and escalate, not silently drop actions. Dropped actions create gaps. Paused actions create visibility.
              </p>
            </div>

            {/* Guardrail 3: Safe-Mode */}
            <div className="border-l-4 border-[#2261db] pl-6 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2261db]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#00cFFF]" />
                </div>
                <h2 className="text-3xl font-bold text-white">3. Safe-Mode</h2>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">What It Is</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Safe-mode is a global or per-playbook switch that downgrades all automated actions to observe-and-recommend instead of execute. The automation still runs, still correlates, still generates the action plan, but it stops short of executing. Everything gets logged and presented to the analyst for manual execution.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">When to Use Safe-Mode</h3>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" />
                  <span><strong>Onboarding a new integration</strong> - When you first connect Duo, Okta, or any identity provider, run in safe-mode for 1-2 weeks. Let the system learn your environment{"'"}s baseline before it starts taking action.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" />
                  <span><strong>During change windows</strong> - Deploying a new application, migrating servers, or onboarding a batch of new employees? Flip to safe-mode. Abnormal activity during change windows generates false positives that automation should not act on.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" />
                  <span><strong>After a false-positive incident</strong> - If automation caused an unintended action, switch to safe-mode while the team investigates and tunes the detection rule. Resume full automation only after the root cause is resolved.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" />
                  <span><strong>New playbook rollout</strong> - Every new playbook should start in safe-mode. Let it shadow real activity for at least a week before granting execution privileges.</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-4">
                <p className="text-gray-200 font-semibold mb-1">Think of it like this:</p>
                <p className="text-gray-300">
                  Safe-mode is the {"\""}shadow mode{"\""}  for your SOC. It proves the automation works before you give it the keys.
                </p>
              </div>
            </div>

            {/* Guardrail 4: Rollback */}
            <div className="border-l-4 border-[#00cFFF] pl-6 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00cFFF]/10 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-[#00cFFF]" />
                </div>
                <h2 className="text-3xl font-bold text-white">4. Rollback Capabilities</h2>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">What They Do</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Rollback capabilities allow automated actions to be reversed, either manually by an analyst or automatically when certain conditions are met. Every action the system takes should have a corresponding undo path.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Rollback Examples</h3>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-zinc-900 text-gray-300">
                      <th className="text-left p-3 border-b border-zinc-800 font-semibold">Automated Action</th>
                      <th className="text-left p-3 border-b border-zinc-800 font-semibold">Rollback Action</th>
                      <th className="text-left p-3 border-b border-zinc-800 font-semibold">Auto-Rollback Trigger</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="p-3 text-gray-300">Disable user account</td>
                      <td className="p-3 text-gray-300">Re-enable account</td>
                      <td className="p-3 text-gray-300">Alert reclassified as false positive</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-3 text-gray-300">Isolate endpoint</td>
                      <td className="p-3 text-gray-300">Rejoin to network</td>
                      <td className="p-3 text-gray-300">Scan completes clean</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-3 text-gray-300">Block IP on firewall</td>
                      <td className="p-3 text-gray-300">Remove block rule</td>
                      <td className="p-3 text-gray-300">TTL expires (e.g. 24 hours)</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-3 text-gray-300">Force password reset</td>
                      <td className="p-3 text-gray-300">N/A (non-reversible)</td>
                      <td className="p-3 text-gray-300">Requires approval tier instead</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-300">Kill active sessions</td>
                      <td className="p-3 text-gray-300">N/A (user re-authenticates)</td>
                      <td className="p-3 text-gray-300">Low impact, no rollback needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Non-Reversible Actions Need Extra Guardrails</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Not every action can be rolled back. Deleting a user, wiping a device, or purging logs are destructive and permanent. These actions should never be fully automated. They should always require multi-person approval, have extended approval windows, and be logged with full audit trails.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The rule of thumb: if you cannot undo it, do not automate it without human confirmation.
              </p>
            </div>

            {/* Guardrail 5: Blast-Radius Controls */}
            <div className="border-l-4 border-[#2261db] pl-6 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2261db]/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[#00cFFF]" />
                </div>
                <h2 className="text-3xl font-bold text-white">5. Blast-Radius Controls</h2>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">What They Do</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Blast-radius controls limit the scope of what any single automated action or playbook run can affect. Even if the automation makes the right decision, constraining its reach prevents a correct decision from having outsized consequences.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Types of Blast-Radius Controls</h3>
              <ul className="space-y-4 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <Lock className="w-5 h-5 flex-shrink-0 mt-1 text-[#00cFFF]" />
                  <div>
                    <strong className="text-white">Scope boundaries</strong>
                    <p className="text-gray-400 mt-1">Limit automation to specific user groups, OUs, subnets, or asset tags. A playbook designed for the engineering team should never touch finance accounts, even if the detection logic matches.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-5 h-5 flex-shrink-0 mt-1 text-[#00cFFF]" />
                  <div>
                    <strong className="text-white">VIP and protected-asset lists</strong>
                    <p className="text-gray-400 mt-1">Maintain a list of accounts, endpoints, and services that automation can never touch without explicit approval. This typically includes executive accounts, domain controllers, production databases, and shared service accounts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-5 h-5 flex-shrink-0 mt-1 text-[#00cFFF]" />
                  <div>
                    <strong className="text-white">Concurrent action caps</strong>
                    <p className="text-gray-400 mt-1">Limit the number of targets a single playbook execution can affect simultaneously. If a detection fires across 50 endpoints, process the first 5, evaluate results, then proceed in batches.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-5 h-5 flex-shrink-0 mt-1 text-[#00cFFF]" />
                  <div>
                    <strong className="text-white">Environment segmentation</strong>
                    <p className="text-gray-400 mt-1">Separate automation policies by environment. Production infrastructure should have stricter guardrails than staging or development environments. Never apply the same automation aggressiveness across all environments equally.</p>
                  </div>
                </li>
              </ul>

              <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
                <p className="text-gray-400 text-sm italic">
                  BitLyft AIR{"'"}s automation engine supports scope-based targeting and protected-asset exclusion lists out of the box, so teams can define their blast radius in minutes rather than building custom logic.
                </p>
              </div>
            </div>

            {/* Putting It All Together */}
            <h2 className="text-3xl font-bold text-white mb-4">Putting It All Together: The Guardrail Stack</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              These five guardrails are not independent. They layer on top of each other to form a defense-in-depth model for your automation itself.
            </p>

            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2261db]/20 flex items-center justify-center text-[#00cFFF] font-bold text-sm">1</span>
                  <div>
                    <p className="text-white font-semibold">Blast-radius controls</p>
                    <p className="text-gray-400 text-sm">Define WHAT automation can touch</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2261db]/20 flex items-center justify-center text-[#00cFFF] font-bold text-sm">2</span>
                  <div>
                    <p className="text-white font-semibold">Rate limits</p>
                    <p className="text-gray-400 text-sm">Define HOW MUCH automation can do</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2261db]/20 flex items-center justify-center text-[#00cFFF] font-bold text-sm">3</span>
                  <div>
                    <p className="text-white font-semibold">Approval workflows</p>
                    <p className="text-gray-400 text-sm">Define WHO must agree before high-risk actions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2261db]/20 flex items-center justify-center text-[#00cFFF] font-bold text-sm">4</span>
                  <div>
                    <p className="text-white font-semibold">Safe-mode</p>
                    <p className="text-gray-400 text-sm">Define WHEN automation is allowed to execute vs. recommend</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2261db]/20 flex items-center justify-center text-[#00cFFF] font-bold text-sm">5</span>
                  <div>
                    <p className="text-white font-semibold">Rollback</p>
                    <p className="text-gray-400 text-sm">Define HOW to undo when something goes wrong</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              Together, these guardrails create an automation environment where your team can trust the system to act quickly without worrying about unintended consequences. Trust is what separates an autonomous SOC that scales from one that gets turned off after the first bad incident.
            </p>

            {/* Common Mistakes */}
            <h2 className="text-3xl font-bold text-white mb-4">Common Mistakes Teams Make</h2>

            <div className="space-y-4 mb-12">
              <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
                <p className="text-white font-semibold mb-2">Treating guardrails as optional</p>
                <p className="text-gray-400">{"\""}We will add guardrails later once we have more playbooks.{"\""} No. Guardrails come first. Every playbook should inherit default guardrails from day one, and teams should tighten or loosen them per playbook as needed.</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
                <p className="text-white font-semibold mb-2">Setting rate limits too high</p>
                <p className="text-gray-400">A rate limit of 100 endpoint isolations per hour is not a guardrail. It is a formality. Start low, monitor for a month, and adjust upward only when you have data showing it is too restrictive.</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
                <p className="text-white font-semibold mb-2">Skipping safe-mode for {"\""}simple{"\""} playbooks</p>
                <p className="text-gray-400">Simple playbooks cause the most damage because teams assume they are harmless. A {"\""}simple{"\""} playbook that resets passwords triggered by failed logins can lock out hundreds of users during a brute-force attack where none of the targeted accounts were actually compromised.</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-5 border border-zinc-800">
                <p className="text-white font-semibold mb-2">No protected-asset list</p>
                <p className="text-gray-400">If your automation can disable the CEO{"'"}s account or quarantine a domain controller with the same ease as a standard workstation, your blast-radius controls are incomplete.</p>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-2">Do guardrails slow down automation?</h3>
                <p className="text-gray-300">
                  Not meaningfully. Low-risk actions still execute instantly. Guardrails only add latency to high-risk actions that should be reviewed anyway. A 2-minute approval delay on an account disable is negligible compared to the hours it takes to recover from an accidental lockout of 50 users.
                </p>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-2">Can I customize guardrails per playbook?</h3>
                <p className="text-gray-300">
                  Yes, and you should. An MFA fatigue detection playbook might need lower rate limits and stricter approval tiers than a log enrichment playbook. Default guardrails provide a baseline, but per-playbook tuning is where the real value comes from.
                </p>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-2">What happens when a guardrail is breached?</h3>
                <p className="text-gray-300">
                  The automation should pause, not fail silently. Breached guardrails trigger alerts to the SOC lead, log the event for audit, and queue remaining actions for manual review. The worst thing a guardrail can do is fail quietly.
                </p>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-2">How does BitLyft AIR handle guardrails?</h3>
                <p className="text-gray-300">
                  BitLyft AIR includes built-in approval workflows, rate limiting, safe-mode toggling, rollback actions, and scope-based targeting. Teams configure their guardrail policies during onboarding and can adjust them at any time without modifying playbook logic. Read more about how the <Link href="/blog/automated-response-vs-automated-remediation" className="text-[#00cFFF] hover:underline">automation tiers work in practice</Link>.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Want to See These Guardrails in Action?</h2>
              <p className="text-gray-300 mb-6">
                BitLyft AIR includes all five guardrail categories out of the box. See how approval workflows, rate limits, safe-mode, rollback, and blast-radius controls work together in a live demo.
              </p>
              <Button asChild className="bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all">
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule a 15-Minute Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
