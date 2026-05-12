"use client"

import { useState } from "react"
import type { DemoScreen } from "../../page"
import { CheckCircle2, Filter, Loader2, Play, RefreshCw, Search, Settings } from "lucide-react"

const PLAYBOOKS = [
  {
    name: "Microsoft Compromised User Accounts",
    description: "Respond to suspected account compromise by revoking sessions, resetting credentials, and enforcing MFA.",
    integration: "Microsoft",
    actions: 6,
    trigger: "Risky user or impossible travel",
    lastRun: "12 min ago",
  },
  {
    name: "Microsoft Conditional Access and Compliance",
    description: "Validate conditional access coverage and apply compliance controls to risky users.",
    integration: "Microsoft",
    actions: 4,
    trigger: "Policy drift detected",
    lastRun: "48 min ago",
  },
  {
    name: "Microsoft Phishing Email Containment",
    description: "Investigate reported phishing, remove matching messages, and contain affected mailboxes.",
    integration: "Microsoft",
    actions: 7,
    trigger: "Defender phishing alert",
    lastRun: "1h ago",
  },
  {
    name: "Privileged Account Lockdown",
    description: "Lock down admin accounts after high-risk sign-in events and notify the response team.",
    integration: "Microsoft",
    actions: 5,
    trigger: "High-risk admin login",
    lastRun: "3h ago",
  },
  {
    name: "SharePoint Data Exfiltration Review",
    description: "Collects file activity, identifies mass downloads, and restricts external sharing.",
    integration: "Microsoft",
    actions: 5,
    trigger: "Mass file download",
    lastRun: "5h ago",
  },
  {
    name: "Endpoint Isolation Request",
    description: "Creates an endpoint isolation request, records analyst approval, and opens an activity trail.",
    integration: "Defender",
    actions: 3,
    trigger: "Active malware alert",
    lastRun: "Yesterday",
  },
]

interface Props {
  onNavigate: (s: DemoScreen) => void
}

interface RunState {
  status: "idle" | "running" | "done"
  note?: string
}

export default function PlaybooksScreen({ onNavigate, dark = false }: Props & { dark?: boolean }) {
  const [search, setSearch] = useState("")
  const [spinning, setSpinning] = useState(false)
  const [runStates, setRunStates] = useState<Record<string, RunState>>({})

  const filtered = PLAYBOOKS.filter((playbook) =>
    `${playbook.name} ${playbook.description} ${playbook.integration} ${playbook.trigger}`.toLowerCase().includes(search.toLowerCase())
  )

  function refresh() {
    setSpinning(true)
    window.setTimeout(() => setSpinning(false), 900)
  }

  function runPlaybook(name: string) {
    setRunStates((previous) => ({ ...previous, [name]: { status: "running" } }))
    window.setTimeout(() => {
      setRunStates((previous) => ({
        ...previous,
        [name]: {
          status: "done",
          note: "Simulation completed: actions executed, activity record created, and analyst notification queued.",
        },
      }))
    }, 1500)
  }

  const state = (name: string): RunState => runStates[name] ?? { status: "idle" }

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="mb-3 text-[32px] font-bold leading-tight text-[#070707]">Playbooks</h1>
        <p className="text-[15px] text-[#5f6472]">
          Predefined workflows made up of multiple automated actions. Playbooks can run manually or trigger from mapped policies.
        </p>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <button className="flex h-12 items-center gap-2 rounded border border-[#d7dce3] bg-white px-3 text-[15px] text-[#070707] transition-colors hover:bg-[#f8fafc]">
          <Filter className="h-4 w-4" />
          Filters
        </button>
        <div className="relative min-w-0 flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697386]" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for Playbook Name, Trigger or Description"
            className="h-12 w-full rounded border border-[#d7dce3] bg-white pl-10 pr-4 text-[15px] outline-none transition-colors focus:border-[#2563eb]"
          />
        </div>
        <span className="ml-4 text-[17px] text-[#5f6472]">Last updated: less than a minute ago</span>
        <button onClick={refresh} className="rounded border border-[#d7dce3] bg-white p-2 text-[#070707] hover:bg-[#f8fafc]" aria-label="Refresh playbooks">
          <RefreshCw className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
        </button>
      </div>

      <div className="overflow-hidden rounded border border-[#d7dce3] bg-white">
        <div className="grid gap-4 border-b border-[#d7dce3] bg-[#fbfbfc] px-4 py-3 text-[15px] text-[#070707]" style={{ gridTemplateColumns: "1.2fr 1.7fr .7fr .8fr .45fr auto" }}>
          <div>Name</div>
          <div>Description</div>
          <div>Integration</div>
          <div>Trigger</div>
          <div>Actions</div>
          <div />
        </div>
        <div className="divide-y divide-[#d7dce3]">
          {filtered.map((playbook) => {
            const runState = state(playbook.name)
            return (
              <div key={playbook.name}>
                <div className="grid items-center gap-4 px-4 py-4 text-[15px] text-[#070707] transition-colors hover:bg-[#f8fafc]" style={{ gridTemplateColumns: "1.2fr 1.7fr .7fr .8fr .45fr auto" }}>
                  <div>
                    <p className="font-medium">{playbook.name}</p>
                    <p className="text-sm text-[#697386]">Last run: {runState.status === "done" ? "just now" : playbook.lastRun}</p>
                  </div>
                  <div className="truncate text-[#5f6472]">{playbook.description}</div>
                  <div>{playbook.integration}</div>
                  <div className="text-[#5f6472]">{playbook.trigger}</div>
                  <div>
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded border border-[#d7dce3] bg-white px-2">
                      {playbook.actions}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => runPlaybook(playbook.name)}
                      disabled={runState.status === "running"}
                      className={`inline-flex h-8 items-center gap-1.5 rounded border px-3 text-sm transition-colors disabled:cursor-not-allowed ${
                        runState.status === "done"
                          ? "border-[#b7ebc6] bg-[#ecfdf3] text-[#166534]"
                          : "border-[#d7dce3] bg-white text-[#070707] hover:bg-[#f8fafc]"
                      }`}
                    >
                      {runState.status === "running" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : runState.status === "done" ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                      {runState.status === "running" ? "Running" : runState.status === "done" ? "Run again" : "Run"}
                    </button>
                    <button className="rounded border border-[#d7dce3] bg-white p-2 text-[#070707] hover:bg-[#f8fafc]" aria-label={`Settings for ${playbook.name}`}>
                      <Settings className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                {runState.status === "done" && runState.note && (
                  <div className="px-4 pb-4">
                    <div className="flex items-center justify-between gap-4 rounded border border-[#b7ebc6] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]">
                      <span>{runState.note}</span>
                      <button onClick={() => onNavigate("activity")} className="flex-shrink-0 rounded border border-[#b7ebc6] bg-white px-3 py-1.5 text-sm font-medium text-[#166534] hover:bg-[#ecfdf3]">
                        View activity
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
