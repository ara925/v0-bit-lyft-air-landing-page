import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "When to Isolate Devices vs Only Contain Identity: Decision Framework | BitLyft AIR®",
  description:
    "Learn when to isolate endpoints vs contain identity only. A practical decision framework for SOC teams to choose the right containment action based on threat type and impact.",
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium bg-[#2261db]/10 text-[#00cFFF] px-3 py-1 rounded-full border border-[#2261db]/30">
                Industry Insights
              </span>
              <span className="text-sm text-gray-400">15th April, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              When to Isolate Devices vs Only Contain Identity: Decision Framework
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Device isolation and identity containment are both valid response actions — but they have very different impacts on users and operations. This framework helps SOC teams choose the right action based on what they actually know about the threat.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Core Tradeoff</h2>
            <p className="text-gray-300 mb-6">
              Every containment decision balances <strong>security certainty</strong> against <strong>operational impact</strong>. Getting this wrong in either direction creates problems:
            </p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">Over-contain:</span>
                <span>Isolate devices for every suspicious login — users can&apos;t work, IT drowns in restore requests, security loses credibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">Under-contain:</span>
                <span>Only revoke sessions when malware is actively spreading — attacker maintains foothold, lateral movement continues</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Understanding the Two Actions</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border border-zinc-800 rounded-lg overflow-hidden">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Aspect</th>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Identity Containment</th>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Device Isolation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3 font-medium">What it does</td>
                    <td className="px-4 py-3">Revokes tokens, blocks sign-in, forces re-auth</td>
                    <td className="px-4 py-3">Cuts network access, quarantines endpoint</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3 font-medium">User impact</td>
                    <td className="px-4 py-3">Must re-authenticate (minutes)</td>
                    <td className="px-4 py-3">Cannot work until restored (hours to days)</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3 font-medium">IT overhead</td>
                    <td className="px-4 py-3">Low — self-service re-auth often works</td>
                    <td className="px-4 py-3">High — manual review and restore required</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3 font-medium">Stops</td>
                    <td className="px-4 py-3">Credential abuse, session hijacking, OAuth abuse</td>
                    <td className="px-4 py-3">Malware execution, lateral movement, data exfil</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3 font-medium">Doesn&apos;t stop</td>
                    <td className="px-4 py-3">Malware already on device, persistence mechanisms</td>
                    <td className="px-4 py-3">Cloud-only attacks, OAuth app abuse</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Reversibility</td>
                    <td className="px-4 py-3">Instant — user re-authenticates</td>
                    <td className="px-4 py-3">Manual — requires IT intervention</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Decision Framework</h2>
            <p className="text-gray-300 mb-6">
              The key question: <strong>Is the threat identity-only or has it reached the endpoint?</strong>
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Identity Containment Only — When to Use</h3>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-6">
              <p className="text-emerald-400 font-semibold mb-3">Use when the compromise is limited to credentials or cloud sessions</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Impossible travel or risky sign-in detected</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Credential stuffing or password spray success</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>MFA fatigue attack (push accepted)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Session token theft (AiTM phishing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Malicious OAuth app consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Suspicious mailbox rule creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>No endpoint telemetry indicating compromise</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Device Isolation Required — When to Use</h3>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
              <p className="text-red-400 font-semibold mb-3">Use when threat has reached or originated from the endpoint</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>EDR detects malware execution or persistence</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Ransomware activity detected</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Infostealer identified (credentials already exfiltrated)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Lateral movement detected (RDP, SMB, WMI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>C2 beaconing or suspicious outbound traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Data exfiltration in progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Credential dumping tools detected (Mimikatz, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Device used in attack on other systems</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Both Actions — When to Use</h3>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-6">
              <p className="text-amber-400 font-semibold mb-3">Use when identity is compromised AND endpoint shows indicators</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Phishing click followed by malware download</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Credential theft + persistence mechanism</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Identity compromise from infostealer on device</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>BEC attack with potential endpoint access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>Attacker has both cloud access and local foothold</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Decision Tree</h2>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
              <div className="space-y-4 font-mono text-sm">
                <p className="text-gray-300">1. Is there EDR/endpoint evidence of malware, persistence, or lateral movement?</p>
                <p className="text-gray-400 pl-6">→ YES: <span className="text-red-400 font-semibold">Isolate device</span> + contain identity</p>
                <p className="text-gray-400 pl-6">→ NO: Continue to step 2</p>
                <p className="text-gray-300 mt-4">2. Is the threat purely identity/cloud-based (credential abuse, OAuth, session theft)?</p>
                <p className="text-gray-400 pl-6">→ YES: <span className="text-emerald-400 font-semibold">Identity containment only</span></p>
                <p className="text-gray-400 pl-6">→ NO/UNSURE: Continue to step 3</p>
                <p className="text-gray-300 mt-4">3. Is the user accessing sensitive systems or data?</p>
                <p className="text-gray-400 pl-6">→ YES: <span className="text-amber-400 font-semibold">Isolate device</span> (err on side of caution)</p>
                <p className="text-gray-400 pl-6">→ NO: <span className="text-emerald-400 font-semibold">Identity containment</span> + enhanced monitoring</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Scenario-Based Decision Matrix</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border border-zinc-800 rounded-lg overflow-hidden">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Scenario</th>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Action</th>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Rationale</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">Impossible travel alert, no endpoint signals</td>
                    <td className="px-4 py-3"><span className="text-emerald-400">Identity only</span></td>
                    <td className="px-4 py-3">Likely credential abuse, endpoint clean</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">Phishing click, EDR shows PowerShell execution</td>
                    <td className="px-4 py-3"><span className="text-red-400">Both</span></td>
                    <td className="px-4 py-3">Payload delivered, full containment needed</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">OAuth app granted Mail.Read permissions</td>
                    <td className="px-4 py-3"><span className="text-emerald-400">Identity only</span></td>
                    <td className="px-4 py-3">Cloud-only attack, revoke consent</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">EDR detects Cobalt Strike beacon</td>
                    <td className="px-4 py-3"><span className="text-red-400">Device isolation</span></td>
                    <td className="px-4 py-3">Active C2, stop lateral movement</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">MFA fatigue success, clean endpoint</td>
                    <td className="px-4 py-3"><span className="text-emerald-400">Identity only</span></td>
                    <td className="px-4 py-3">Attacker doesn&apos;t have endpoint access</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">Credential theft + shadow file copied</td>
                    <td className="px-4 py-3"><span className="text-red-400">Both</span></td>
                    <td className="px-4 py-3">Local credential dump, full containment</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">Mailbox rule forwarding to external</td>
                    <td className="px-4 py-3"><span className="text-emerald-400">Identity only</span></td>
                    <td className="px-4 py-3">BEC indicator, cloud-only action</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Ransomware encryption started</td>
                    <td className="px-4 py-3"><span className="text-red-400">Device isolation</span></td>
                    <td className="px-4 py-3">Stop spread immediately</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Automation Guidance</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border border-zinc-800 rounded-lg overflow-hidden">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Action</th>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Auto-Execute?</th>
                    <th className="px-4 py-3 text-white font-semibold border-b border-zinc-800">Criteria</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">Session revocation</td>
                    <td className="px-4 py-3"><span className="text-emerald-400">Yes</span></td>
                    <td className="px-4 py-3">Low impact, easily reversible</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">Force password reset</td>
                    <td className="px-4 py-3"><span className="text-emerald-400">Yes</span></td>
                    <td className="px-4 py-3">On confirmed credential compromise</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">OAuth consent revocation</td>
                    <td className="px-4 py-3"><span className="text-emerald-400">Yes</span></td>
                    <td className="px-4 py-3">For unverified publishers + risky scopes</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">Account suspension</td>
                    <td className="px-4 py-3"><span className="text-amber-400">Conditional</span></td>
                    <td className="px-4 py-3">Auto for non-privileged on high-confidence</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="px-4 py-3">Device isolation (non-critical)</td>
                    <td className="px-4 py-3"><span className="text-amber-400">Conditional</span></td>
                    <td className="px-4 py-3">Auto for confirmed malware/ransomware</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Device isolation (critical systems)</td>
                    <td className="px-4 py-3"><span className="text-red-400">No</span></td>
                    <td className="px-4 py-3">Human approval always required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Layered Response Pattern</h2>
            <p className="text-gray-300 mb-6">
              For uncertain situations, use a layered approach that starts with lower-impact actions and escalates based on investigation findings:
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-mono">Step 1</span>
                  <span className="font-semibold text-white">Immediate — Identity Containment</span>
                </div>
                <p className="text-gray-400 text-sm">Revoke sessions, force re-auth. Takes seconds, minimal disruption.</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-mono">Step 2</span>
                  <span className="font-semibold text-white">Parallel — Enhanced Monitoring</span>
                </div>
                <p className="text-gray-400 text-sm">Increase logging, enable real-time alerts on the user and device.</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-mono">Step 3</span>
                  <span className="font-semibold text-white">Investigation — EDR Query</span>
                </div>
                <p className="text-gray-400 text-sm">Check endpoint telemetry for malware, persistence, lateral movement.</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-mono">Step 4</span>
                  <span className="font-semibold text-white">Escalate — Device Isolation</span>
                </div>
                <p className="text-gray-400 text-sm">If endpoint compromise confirmed, isolate device for remediation.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Common Mistakes</h2>
            <div className="space-y-4 mb-8">
              {[
                ["Isolating on every phishing click", "Most phishing doesn't deliver payloads — identity containment + monitoring is usually sufficient until confirmed"],
                ["Not isolating on EDR alerts", "If your EDR says malware is running, isolate first. Don't wait for investigation."],
                ["Forgetting cloud-only attacks exist", "OAuth abuse, BEC, session hijacking don't touch endpoints — device isolation won't help"],
                ["Treating all users the same", "VIP/executive devices may need manual approval; standard users can be auto-contained"],
                ["No escalation path defined", "If identity containment isn't working, when do you escalate to device isolation? Define the criteria."],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <div>
                    <p className="text-white font-medium">{title}</p>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Key Takeaways</h2>
            <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span><strong>Start with identity containment</strong> — it&apos;s fast, low-impact, and handles most credential-based attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span><strong>Isolate on endpoint evidence</strong> — if EDR shows malware, persistence, or lateral movement, isolate immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span><strong>Use both for combined attacks</strong> — when identity and endpoint are both compromised, contain both</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#00cFFF]" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span><strong>Automate based on confidence</strong> — high-confidence signals can trigger auto-containment; uncertain situations need human judgment</span>
                </li>
              </ul>
            </div>

          </div>
        </article>

        <RelatedArticles currentSlug="device-isolation-vs-identity-containment-decision-framework" />

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all"
          >
            See How BitLyft AIR Automates Containment Decisions
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
