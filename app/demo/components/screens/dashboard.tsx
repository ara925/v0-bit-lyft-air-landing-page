"use client"

import { useState } from "react"
import { AlertCircle, Bell, CheckCircle2, ChevronRight, FileText, Loader2, Plus, RefreshCw, Search, Shield, SlidersHorizontal, X, Zap } from "lucide-react"

const TABS = ["Overview", "Case Management", "Policy Management", "Automation Settings"] as const

const CASES = [
  { id: "4821", title: "Credential Stuffing Attack", priority: "High", status: "Contained", age: "2m ago", user: "alex.rivera@company1.example", source: "Entra ID", actions: ["Revoke Sessions", "Disable Account", "Enable MFA"], mttd: "0.9s", mttr: "1.2s" },
  { id: "4820", title: "Impossible Travel - Executive Account", priority: "High", status: "In Review", age: "14m ago", user: "morgan.lee@company1.example", source: "Entra ID", actions: ["Revoke Sessions", "Collect Sign-ins"], mttd: "1.1s", mttr: "Pending" },
  { id: "4819", title: "MFA Fatigue Attempt", priority: "Medium", status: "Contained", age: "1h ago", user: "casey.nguyen@company1.example", source: "Entra ID", actions: ["Suspend Account", "Alert SOC"], mttd: "0.8s", mttr: "2.0s" },
  { id: "4818", title: "Suspicious Forwarding Rule", priority: "High", status: "Contained", age: "3h ago", user: "finance@company1.example", source: "Microsoft 365", actions: ["Remove Forwarding Rule", "Revoke Sessions"], mttd: "1.4s", mttr: "1.8s" },
  { id: "4817", title: "User-Reported Phishing", priority: "Medium", status: "Closed", age: "5h ago", user: "ops.team@company1.example", source: "Defender", actions: ["Purge Email", "Block Domain"], mttd: "2.1s", mttr: "3.4s" },
]

const POLICIES = [
  { name: "Credential Stuffing Detection", trigger: "47+ failed logins / 10 min", status: "Active", actions: 3, lastFired: "2m ago" },
  { name: "Impossible Travel", trigger: "Login velocity > 500 km/h", status: "Active", actions: 2, lastFired: "14m ago" },
  { name: "MFA Fatigue", trigger: "12+ MFA denies / 5 min", status: "Active", actions: 2, lastFired: "1h ago" },
  { name: "BEC Forwarding Rule", trigger: "External inbox rule created", status: "Active", actions: 2, lastFired: "3h ago" },
  { name: "Phishing Email Detection", trigger: "User report or Defender alert", status: "Active", actions: 2, lastFired: "5h ago" },
  { name: "Risky User Baseline", trigger: "Entra risk score > 70", status: "Paused", actions: 1, lastFired: "2d ago" },
]

const AUTOMATION_SETTINGS = [
  { label: "Auto-contain High Priority Cases", enabled: true },
  { label: "Auto-contain Medium Priority Cases", enabled: false },
  { label: "Notify analyst on every action", enabled: true },
  { label: "Require approval for account disable", enabled: true },
  { label: "Require approval for password reset", enabled: false },
  { label: "Send weekly digest email", enabled: true },
]

const WIDGETS = ["Log Volume", "MTTD Manual", "MTTR Manual", "Total Events Processed", "MTTD Automated", "MTTR Automated", "High Priority Cases", "Medium Priority Cases", "Policy Fire Rate", "Integration Health"]

function MetricCard({
  label,
  value,
  period = "Last 7 days",
  tone = "neutral",
  onClick,
}: {
  label: string
  value: string | number
  period?: string
  tone?: "neutral" | "blue" | "green" | "red" | "amber"
  onClick?: () => void
}) {
  const toneClass = {
    neutral: "text-[#070707]",
    blue: "text-[#2563eb]",
    green: "text-[#166534]",
    red: "text-[#b42318]",
    amber: "text-[#92400e]",
  }[tone]

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded border border-[#d7dce3] bg-white p-5 text-left transition-colors ${onClick ? "hover:bg-[#f8fafc]" : "cursor-default"}`}
    >
      <div className="mb-2 flex min-w-0 items-center justify-between gap-2">
        <span className="truncate text-[15px] text-[#5f6472]">{label}</span>
        <SlidersHorizontal className="h-4 w-4 flex-shrink-0 text-[#697386]" />
      </div>
      <p className="mb-3 text-xs text-[#697386]">{period}</p>
      <span className={`text-3xl font-bold ${toneClass}`}>{value}</span>
    </button>
  )
}

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Overview")
  const [lastUpdated, setLastUpdated] = useState("less than a minute ago")
  const [spinning, setSpinning] = useState(false)
  const [period, setPeriod] = useState("Last 7 days")
  const [limit, setLimit] = useState("100")
  const [selectedCase, setSelectedCase] = useState<(typeof CASES)[number] | null>(null)
  const [showAddWidget, setShowAddWidget] = useState(false)
  const [addedWidgets, setAddedWidgets] = useState<string[]>([])
  const [automationSettings, setAutomationSettings] = useState(AUTOMATION_SETTINGS)
  const [policyStatuses, setPolicyStatuses] = useState<Record<string, string>>(Object.fromEntries(POLICIES.map((policy) => [policy.name, policy.status])))
  const [caseStatuses, setCaseStatuses] = useState<Record<string, string>>(Object.fromEntries(CASES.map((item) => [item.id, item.status])))
  const [playbookRun, setPlaybookRun] = useState<"idle" | "running" | "done">("idle")

  function refresh() {
    setSpinning(true)
    setLastUpdated("checking for new events...")
    window.setTimeout(() => {
      setSpinning(false)
      setLastUpdated("less than a minute ago")
    }, 1000)
  }

  function toggleAutomation(index: number) {
    setAutomationSettings((settings) => settings.map((item, itemIndex) => (itemIndex === index ? { ...item, enabled: !item.enabled } : item)))
  }

  function togglePolicy(name: string) {
    setPolicyStatuses((statuses) => ({ ...statuses, [name]: statuses[name] === "Active" ? "Paused" : "Active" }))
  }

  function updateCaseStatus(id: string, status: string) {
    setCaseStatuses((statuses) => ({ ...statuses, [id]: status }))
  }

  function runCasePlaybook() {
    setPlaybookRun("running")
    window.setTimeout(() => {
      setPlaybookRun("done")
      if (selectedCase) updateCaseStatus(selectedCase.id, "Contained")
    }, 1400)
  }

  const periodMultiplier = period === "Last 30 days" ? 4 : period === "Last 90 days" ? 12 : 1

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="mb-4 text-[32px] font-bold leading-tight text-[#070707]">Overview</h1>
        <div className="flex items-center gap-1 border-b border-[#d7dce3]">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`-mb-px border-b-2 px-4 py-2 text-[15px] font-medium transition-colors ${
                activeTab === tab ? "border-[#2563eb] text-[#070707]" : "border-transparent text-[#5f6472] hover:text-[#070707]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Overview" && (
        <>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <label className="text-sm text-[#5f6472]">
                Limit
                <select value={limit} onChange={(event) => setLimit(event.target.value)} className="ml-2 h-9 rounded border border-[#d7dce3] bg-white px-3 text-[#070707] outline-none focus:border-[#2563eb]">
                  <option>100</option>
                  <option>250</option>
                  <option>500</option>
                </select>
              </label>
              <label className="text-sm text-[#5f6472]">
                Period
                <select value={period} onChange={(event) => setPeriod(event.target.value)} className="ml-2 h-9 rounded border border-[#d7dce3] bg-white px-3 text-[#070707] outline-none focus:border-[#2563eb]">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </label>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[15px] text-[#5f6472]">Last updated: {lastUpdated}</span>
              <button onClick={refresh} className="rounded border border-[#d7dce3] bg-white p-2 text-[#070707] hover:bg-[#f8fafc]" aria-label="Refresh dashboard">
                <RefreshCw className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
              </button>
              <button onClick={() => setShowAddWidget(true)} className="inline-flex h-9 items-center gap-1.5 rounded border border-[#d7dce3] bg-white px-3 text-sm text-[#070707] transition-colors hover:bg-[#f8fafc]">
                <Plus className="h-4 w-4" />
                Add Widget
              </button>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-4">
            <MetricCard label="Log Volume" value={`${(101.21 * periodMultiplier).toFixed(2)} KB`} />
            <MetricCard label="MTTD Manual" value="0" />
            <MetricCard label="MTTR Manual" value="0" />
            <MetricCard label="Total Events Processed" value={41 * periodMultiplier} tone="blue" onClick={() => setActiveTab("Case Management")} />
            <MetricCard label="MTTD Automated" value="0.9s" tone="blue" />
            <MetricCard label="MTTR Automated" value="1.2s" tone="green" />
          </div>

          {addedWidgets.map((widget) => (
            <div key={widget} className="mb-4 flex items-center justify-between rounded border border-[#d7dce3] bg-white p-5">
              <span className="text-[15px] font-medium text-[#070707]">{widget}</span>
              <button onClick={() => setAddedWidgets((items) => items.filter((item) => item !== widget))} className="rounded p-1 text-[#697386] hover:bg-[#f2f4f7]" aria-label={`Remove ${widget}`}>
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              <MetricCard label="High Priority Cases" value={3} tone="red" onClick={() => setActiveTab("Case Management")} />
              <MetricCard label="Medium Priority Cases" value={2} tone="amber" onClick={() => setActiveTab("Case Management")} />
              <MetricCard label="Low Priority Cases" value={0} onClick={() => setActiveTab("Case Management")} />
            </div>
            <div className="col-span-2 overflow-hidden rounded border border-[#d7dce3] bg-white">
              <div className="flex items-center justify-between border-b border-[#d7dce3] bg-[#fbfbfc] px-5 py-4">
                <span className="text-[15px] font-medium text-[#070707]">Recent Cases</span>
                <button onClick={() => setActiveTab("Case Management")} className="text-sm text-[#2563eb] hover:underline">View all</button>
              </div>
              <div className="divide-y divide-[#d7dce3]">
                {CASES.map((item) => (
                  <button key={item.id} onClick={() => { setSelectedCase(item); setActiveTab("Case Management") }} className="grid w-full items-center gap-4 px-5 py-3.5 text-left transition-colors hover:bg-[#f8fafc]" style={{ gridTemplateColumns: ".5fr 1.5fr .6fr .75fr .6fr" }}>
                    <span className="font-mono text-sm text-[#697386]">#{item.id}</span>
                    <span className="truncate text-[15px] text-[#070707]">{item.title}</span>
                    <span className={`w-fit rounded border px-2 py-0.5 text-xs ${item.priority === "High" ? "border-[#fecdca] bg-[#fef3f2] text-[#b42318]" : "border-[#fedf89] bg-[#fffaeb] text-[#92400e]"}`}>{item.priority}</span>
                    <span className="w-fit rounded border border-[#d7dce3] bg-[#f7f8fa] px-2 py-0.5 text-xs text-[#5f6472]">{caseStatuses[item.id]}</span>
                    <span className="text-xs text-[#697386]">{item.age}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "Case Management" && (
        <div className="flex gap-5">
          <div className={`${selectedCase ? "w-80 flex-shrink-0" : "flex-1"} space-y-2`}>
            <div className="mb-3 flex items-center justify-between">
              <p className="font-semibold text-[#070707]">All Cases</p>
              <span className="text-sm text-[#697386]">{CASES.length} total</span>
            </div>
            {CASES.map((item) => (
              <button key={item.id} onClick={() => { setSelectedCase(item); setPlaybookRun("idle") }} className={`w-full rounded border p-4 text-left transition-colors ${selectedCase?.id === item.id ? "border-[#2563eb] bg-[#eff6ff]" : "border-[#d7dce3] bg-white hover:bg-[#f8fafc]"}`}>
                <div className="mb-2 flex items-start justify-between gap-2">
                  <p className="text-sm font-medium leading-snug text-[#070707]">{item.title}</p>
                  <span className={`flex-shrink-0 rounded border px-2 py-0.5 text-xs ${item.priority === "High" ? "border-[#fecdca] bg-[#fef3f2] text-[#b42318]" : "border-[#fedf89] bg-[#fffaeb] text-[#92400e]"}`}>{item.priority}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#697386]">#{item.id}</span>
                  <span className="rounded border border-[#d7dce3] bg-[#f7f8fa] px-2 py-0.5 text-xs text-[#5f6472]">{caseStatuses[item.id]}</span>
                  <span className="ml-auto text-xs text-[#697386]">{item.age}</span>
                </div>
              </button>
            ))}
          </div>

          {selectedCase ? (
            <div className="flex-1 overflow-hidden rounded border border-[#d7dce3] bg-white">
              <div className="flex items-center justify-between border-b border-[#d7dce3] bg-[#fbfbfc] px-6 py-4">
                <div>
                  <p className="font-semibold text-[#070707]">{selectedCase.title}</p>
                  <p className="mt-0.5 text-sm text-[#5f6472]">Case #{selectedCase.id} - {selectedCase.source}</p>
                </div>
                <button onClick={() => setSelectedCase(null)} className="rounded p-1.5 text-[#697386] hover:bg-[#f2f4f7]" aria-label="Close case details">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-5 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-[#5f6472]">Status:</span>
                  {["In Review", "Contained", "Closed"].map((status) => (
                    <button key={status} onClick={() => updateCaseStatus(selectedCase.id, status)} className={`rounded border px-3 py-1.5 text-sm transition-colors ${caseStatuses[selectedCase.id] === status ? "border-[#2563eb] bg-[#eff6ff] text-[#070707]" : "border-[#d7dce3] bg-white text-[#5f6472] hover:bg-[#f8fafc]"}`}>
                      {status}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-[15px]">
                  <div className="rounded border border-[#d7dce3] bg-[#f8fafc] p-4">
                    <p className="mb-1 text-sm text-[#5f6472]">Affected User</p>
                    <p className="text-[#070707]">{selectedCase.user}</p>
                  </div>
                  <div className="rounded border border-[#d7dce3] bg-[#f8fafc] p-4">
                    <p className="mb-1 text-sm text-[#5f6472]">Priority</p>
                    <p className="text-[#070707]">{selectedCase.priority}</p>
                  </div>
                  <div className="rounded border border-[#d7dce3] bg-[#f8fafc] p-4">
                    <p className="mb-1 text-sm text-[#5f6472]">MTTD</p>
                    <p className="text-[#2563eb]">{selectedCase.mttd}</p>
                  </div>
                  <div className="rounded border border-[#d7dce3] bg-[#f8fafc] p-4">
                    <p className="mb-1 text-sm text-[#5f6472]">MTTR</p>
                    <p className="text-[#166534]">{selectedCase.mttr}</p>
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-sm text-[#5f6472]">Actions Executed</p>
                  <div className="space-y-2">
                    {selectedCase.actions.map((action) => (
                      <div key={action} className="flex items-center gap-2 text-[15px] text-[#070707]">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#166534]" />
                        {action}
                      </div>
                    ))}
                  </div>
                </div>

                {playbookRun === "done" && (
                  <div className="rounded border border-[#b7ebc6] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]">
                    Playbook simulation completed. Case status was updated, response actions were logged, and analyst notification was queued.
                  </div>
                )}

                <div className="flex gap-2 border-t border-[#d7dce3] pt-4">
                  <button onClick={runCasePlaybook} disabled={playbookRun === "running"} className="inline-flex items-center gap-2 rounded bg-[#2563eb] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:bg-[#93b7f5]">
                    {playbookRun === "running" && <Loader2 className="h-4 w-4 animate-spin" />}
                    {playbookRun === "running" ? "Running" : "Run Playbook"}
                  </button>
                  <button className="rounded border border-[#d7dce3] bg-white px-3 py-2 text-sm text-[#070707] transition-colors hover:bg-[#f8fafc]">Add Note</button>
                  <button onClick={() => updateCaseStatus(selectedCase.id, "Closed")} className="ml-auto rounded border border-[#d7dce3] bg-white px-3 py-2 text-sm text-[#b42318] transition-colors hover:bg-[#fef3f2]">Close Case</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center rounded border border-[#d7dce3] bg-white p-10 text-[#5f6472]">
              Select a case to view response details.
            </div>
          )}
        </div>
      )}

      {activeTab === "Policy Management" && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[15px] text-[#5f6472]">Manage detection rules and automated response policies.</p>
            <button className="inline-flex items-center gap-1.5 rounded bg-[#2563eb] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8]">
              <Plus className="h-4 w-4" />
              New Policy
            </button>
          </div>
          <div className="overflow-hidden rounded border border-[#d7dce3] bg-white">
            <div className="grid gap-4 border-b border-[#d7dce3] bg-[#fbfbfc] px-5 py-3 text-sm text-[#070707]" style={{ gridTemplateColumns: "1.5fr 1.5fr .6fr .7fr .7fr auto" }}>
              <div>Policy Name</div>
              <div>Trigger</div>
              <div>Actions</div>
              <div>Last Fired</div>
              <div>Status</div>
              <div />
            </div>
            <div className="divide-y divide-[#d7dce3]">
              {POLICIES.map((policy) => (
                <div key={policy.name} className="grid items-center gap-4 px-5 py-4 transition-colors hover:bg-[#f8fafc]" style={{ gridTemplateColumns: "1.5fr 1.5fr .6fr .7fr .7fr auto" }}>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 flex-shrink-0 text-[#2563eb]" />
                    <span className="text-[15px] font-medium text-[#070707]">{policy.name}</span>
                  </div>
                  <span className="text-sm text-[#5f6472]">{policy.trigger}</span>
                  <span className="text-[15px] text-[#070707]">{policy.actions}</span>
                  <span className="text-sm text-[#5f6472]">{policy.lastFired}</span>
                  <span className={`w-fit rounded border px-2 py-1 text-sm ${policyStatuses[policy.name] === "Active" ? "border-[#b7ebc6] bg-[#ecfdf3] text-[#166534]" : "border-[#d7dce3] bg-[#f7f8fa] text-[#5f6472]"}`}>{policyStatuses[policy.name]}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => togglePolicy(policy.name)} className="rounded border border-[#d7dce3] bg-white px-2.5 py-1 text-sm text-[#070707] transition-colors hover:bg-[#f8fafc]">
                      {policyStatuses[policy.name] === "Active" ? "Pause" : "Enable"}
                    </button>
                    <button className="rounded border border-[#d7dce3] bg-white px-2.5 py-1 text-sm text-[#070707] transition-colors hover:bg-[#f8fafc]">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "Automation Settings" && (
        <div className="max-w-2xl space-y-3">
          <p className="mb-5 text-[15px] text-[#5f6472]">Configure how AIR handles automated containment, approvals, and notifications.</p>
          {automationSettings.map((setting, index) => (
            <div key={setting.label} className="flex items-center justify-between rounded border border-[#d7dce3] bg-white p-4 transition-colors hover:bg-[#f8fafc]">
              <div className="flex items-center gap-3">
                {setting.label.includes("Notify") ? <Bell className="h-4 w-4 text-[#2563eb]" /> : setting.label.includes("approval") ? <Shield className="h-4 w-4 text-[#2563eb]" /> : <AlertCircle className="h-4 w-4 text-[#2563eb]" />}
                <p className="text-[15px] text-[#070707]">{setting.label}</p>
              </div>
              <button onClick={() => toggleAutomation(index)} className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors ${setting.enabled ? "bg-[#2563eb]" : "bg-[#d7dce3]"}`} aria-pressed={setting.enabled}>
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${setting.enabled ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
          <div className="pt-4">
            <button className="rounded bg-[#2563eb] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8]">Save Settings</button>
          </div>
        </div>
      )}

      {showAddWidget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/40 px-4" onClick={() => setShowAddWidget(false)}>
          <div className="w-full max-w-sm rounded border border-[#d7dce3] bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#070707]">Add Widget</h3>
              <button onClick={() => setShowAddWidget(false)} className="rounded p-1 text-[#697386] hover:bg-[#f2f4f7]" aria-label="Close add widget">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-72 space-y-1.5 overflow-y-auto">
              {WIDGETS.filter((widget) => !addedWidgets.includes(widget)).map((widget) => (
                <button key={widget} onClick={() => { setAddedWidgets((items) => [...items, widget]); setShowAddWidget(false) }} className="flex w-full items-center justify-between rounded border border-transparent px-3 py-2.5 text-left text-sm text-[#070707] transition-colors hover:border-[#d7dce3] hover:bg-[#f8fafc]">
                  {widget}
                  <ChevronRight className="h-4 w-4 text-[#697386]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
