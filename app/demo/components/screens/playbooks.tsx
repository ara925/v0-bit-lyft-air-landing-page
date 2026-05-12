"use client"

import { useState } from "react"
import type { DemoScreen } from "../../page"
import { Play, CheckCircle2, Loader2, ChevronRight, Clock, Shield, Mail, Lock, AlertTriangle, Globe } from "lucide-react"

const PLAYBOOKS = [
  {
    id: "credential-stuffing",
    name: "Credential Stuffing Response",
    description: "Detect and contain credential stuffing attacks via Entra ID. Revokes sessions, blocks sign-in, and opens a case.",
    trigger: "47+ failed logins in 10 min",
    integration: "Microsoft Entra ID",
    icon: Lock,
    steps: [
      "Ingest Entra ID sign-in alert",
      "Correlate IPs against threat intelligence",
      "Revoke all active user sessions",
      "Block sign-in (accountEnabled: false)",
      "Create incident case + notify analyst",
    ],
  },
  {
    id: "phishing-response",
    name: "Phishing Email Containment",
    description: "Full-org phishing response — purges malicious emails from all mailboxes and blocks the sender domain.",
    trigger: "User reports phishing email",
    integration: "Microsoft Defender",
    icon: Mail,
    steps: [
      "Receive user-reported phishing submission",
      "Analyze email headers, URLs, and attachments",
      "Identify all recipients in the organization",
      "Purge email from all affected mailboxes",
      "Block sender domain at tenant level",
    ],
  },
  {
    id: "impossible-travel",
    name: "Impossible Travel Detection",
    description: "Detects physically impossible login patterns and immediately revokes the suspicious session.",
    trigger: "Login velocity > 500 km/h",
    integration: "Microsoft Entra ID",
    icon: Globe,
    steps: [
      "Detect login from two geolocations",
      "Calculate travel velocity between logins",
      "Flag as impossible travel if > 500 km/h",
      "Revoke suspicious session",
      "Enforce re-authentication + open case",
    ],
  },
  {
    id: "mfa-fatigue",
    name: "MFA Fatigue Attack Response",
    description: "Identifies MFA push bombing and terminates the session even after the user approves.",
    trigger: "50+ MFA pushes in 5 min",
    integration: "Entra ID / Okta",
    icon: AlertTriangle,
    steps: [
      "Count MFA push requests per user per minute",
      "Flag as fatigue if threshold exceeded",
      "Terminate session on approval anomaly",
      "Suspend account pending review",
      "Alert SOC analyst with full push log",
    ],
  },
  {
    id: "forwarding-rule",
    name: "BEC Forwarding Rule Removal",
    description: "Detects and removes unauthorized mailbox forwarding rules, a key BEC tactic.",
    trigger: "External forwarding rule created",
    integration: "Microsoft 365",
    icon: Shield,
    steps: [
      "Poll Exchange audit logs for new inbox rules",
      "Identify external forwarding destination",
      "Assess mailbox sensitivity (exec/finance)",
      "Delete forwarding rule via Graph API",
      "Revoke sessions + open BEC investigation",
    ],
  },
]

interface RunState {
  status: "idle" | "running" | "done"
  currentStep: number
}

interface Props {
  onNavigate: (s: DemoScreen) => void
}

export default function PlaybooksScreen({ onNavigate }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [runs, setRuns] = useState<Record<string, RunState>>({})

  const selectedPlaybook = PLAYBOOKS.find((p) => p.id === selected)
  const run = selected ? (runs[selected] ?? { status: "idle", currentStep: -1 }) : null

  async function executePlaybook(id: string, steps: string[]) {
    setRuns((r) => ({ ...r, [id]: { status: "running", currentStep: 0 } }))
    for (let i = 0; i < steps.length; i++) {
      await new Promise((r) => setTimeout(r, 1400))
      setRuns((r) => ({ ...r, [id]: { status: i === steps.length - 1 ? "done" : "running", currentStep: i + 1 } }))
    }
  }

  return (
    <div className="flex h-full">
      {/* List */}
      <div className="w-80 flex-shrink-0 border-r border-white/[0.07] flex flex-col">
        <div className="px-5 py-4 border-b border-white/[0.07]">
          <h1 className="text-xl font-bold text-white mb-0.5">Playbooks</h1>
          <p className="text-gray-500 text-xs">Automated response workflows</p>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-white/[0.05]">
          {PLAYBOOKS.map((p) => {
            const Icon = p.icon
            const r = runs[p.id]
            const isActive = selected === p.id
            return (
              <button
                key={p.id}
                onClick={() => setSelected(p.id)}
                className={`w-full text-left px-5 py-4 transition-colors ${isActive ? "bg-[#2261db]/10 border-r-2 border-[#2261db]" : "hover:bg-white/[0.02]"}`}
              >
                <div className="flex items-start gap-3">
                  <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isActive ? "text-[#00cfff]" : "text-gray-500"}`} />
                  <div className="min-w-0">
                    <p className={`text-sm font-medium leading-snug ${isActive ? "text-white" : "text-gray-300"}`}>{p.name}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{p.integration}</p>
                    {r?.status === "done" && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Completed
                      </span>
                    )}
                    {r?.status === "running" && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-[#00cfff] mt-1">
                        <Loader2 className="w-3 h-3 animate-spin" /> Running...
                      </span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Detail */}
      <div className="flex-1 overflow-y-auto p-6">
        {!selectedPlaybook ? (
          <div className="flex items-center justify-center h-full text-gray-600 text-sm">
            Select a playbook to view and run it
          </div>
        ) : (
          <div className="max-w-2xl">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">{selectedPlaybook.name}</h2>
                <p className="text-gray-400 text-sm mb-3">{selectedPlaybook.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Trigger: {selectedPlaybook.trigger}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    {selectedPlaybook.integration}
                  </span>
                </div>
              </div>
              {run?.status !== "running" && (
                <button
                  onClick={() => executePlaybook(selectedPlaybook.id, selectedPlaybook.steps)}
                  className="flex items-center gap-2 text-sm bg-[#2261db] hover:bg-[#2261db]/80 text-white px-4 py-2.5 rounded-lg transition-colors font-medium flex-shrink-0"
                >
                  <Play className="w-4 h-4" />
                  {run?.status === "done" ? "Run Again" : "Run Playbook"}
                </button>
              )}
              {run?.status === "running" && (
                <button disabled className="flex items-center gap-2 text-sm bg-[#2261db]/40 text-white/60 px-4 py-2.5 rounded-lg cursor-not-allowed flex-shrink-0">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Running...
                </button>
              )}
            </div>

            {/* Steps */}
            <div className="border border-white/[0.07] rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-[#161616] border-b border-white/[0.07]">
                <p className="text-sm font-medium text-white">Automation Steps</p>
              </div>
              <div className="bg-[#131313] divide-y divide-white/[0.05]">
                {selectedPlaybook.steps.map((step, i) => {
                  const isDone = run ? i < run.currentStep : false
                  const isActive = run?.status === "running" && i === run.currentStep - 1
                  const isPending = !isDone && !isActive

                  return (
                    <div key={i} className={`flex items-center gap-4 px-5 py-3.5 transition-all ${isActive ? "bg-[#2261db]/5" : ""}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border text-xs font-semibold transition-all ${
                        isDone ? "bg-emerald-400/15 border-emerald-400/30 text-emerald-400"
                        : isActive ? "bg-[#2261db]/20 border-[#2261db]/40 text-[#00cfff]"
                        : "bg-white/[0.04] border-white/[0.10] text-gray-600"
                      }`}>
                        {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : isActive ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : i + 1}
                      </div>
                      <span className={`text-sm ${isDone ? "text-gray-400" : isActive ? "text-white" : "text-gray-600"}`}>
                        {step}
                      </span>
                      {isActive && (
                        <span className="ml-auto flex gap-1">
                          {[0,1,2].map((d) => (
                            <span key={d} className="w-1.5 h-1.5 rounded-full bg-[#2261db] animate-bounce" style={{ animationDelay: `${d * 120}ms` }} />
                          ))}
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {run?.status === "done" && (
              <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-emerald-400/5 border border-emerald-400/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-emerald-400 text-sm font-semibold">Playbook completed successfully</p>
                  <p className="text-gray-500 text-xs mt-0.5">Incident case created and all containment actions executed.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
