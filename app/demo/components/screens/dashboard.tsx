"use client"

import { useState } from "react"
import { RefreshCw, Plus, SlidersHorizontal, FileText, Search, Shield, AlertCircle, X, CheckCircle2, ChevronRight, Zap, Bell } from "lucide-react"

function MetricCard({
  label, value, period = "Last 7 days", icon: Icon, highlight = false, color = "text-white", onClick,
}: {
  label: string; value: string | number; period?: string; icon?: React.ElementType; highlight?: boolean; color?: string; onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`p-5 rounded-xl border bg-[#161616] flex flex-col gap-3 transition-all ${onClick ? "cursor-pointer" : ""} ${
        highlight ? "border-[#2261db]/50 hover:border-[#2261db]" : "border-white/[0.07] hover:border-[#2261db]/40"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm">{label}</span>
        <button className="text-gray-600 hover:text-gray-400 transition-colors" onClick={(e) => e.stopPropagation()}>
          <SlidersHorizontal className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="text-xs text-gray-600">{period}</p>
      <div className="flex items-end justify-between">
        <span className={`text-3xl font-bold ${color}`}>{value}</span>
        {Icon && <Icon className="w-6 h-6 text-gray-700" />}
      </div>
    </div>
  )
}

const ALL_CASES = [
  { id: "4821", title: "Credential Stuffing Attack", priority: "High", status: "Contained", age: "2m ago", user: "j.morris@contoso.com", source: "Entra ID", actions: ["Revoke Sessions", "Disable Account"], mttd: "0.9s", mttr: "1.2s" },
  { id: "4820", title: "Impossible Travel — J. Morris", priority: "High", status: "In Review", age: "14m ago", user: "j.morris@contoso.com", source: "Entra ID", actions: ["Revoke Sessions"], mttd: "1.1s", mttr: "—" },
  { id: "4819", title: "MFA Fatigue Attempt", priority: "Medium", status: "Contained", age: "1h ago", user: "s.chen@contoso.com", source: "Entra ID", actions: ["Suspend Account", "Alert SOC"], mttd: "0.8s", mttr: "2.0s" },
  { id: "4818", title: "Suspicious Forwarding Rule", priority: "High", status: "Contained", age: "3h ago", user: "cfo@contoso.com", source: "Microsoft 365", actions: ["Remove Forwarding Rule", "Revoke Sessions"], mttd: "1.4s", mttr: "1.8s" },
  { id: "4817", title: "User-Reported Phishing", priority: "Medium", status: "Closed", age: "5h ago", user: "user@contoso.com", source: "Defender", actions: ["Purge Email", "Block Domain"], mttd: "2.1s", mttr: "3.4s" },
]

const POLICIES = [
  { name: "Credential Stuffing Detection", trigger: "47+ failed logins / 10 min", status: "Active", actions: 2, lastFired: "2m ago" },
  { name: "Impossible Travel", trigger: "Login velocity > 500 km/h", status: "Active", actions: 1, lastFired: "14m ago" },
  { name: "MFA Fatigue", trigger: "50+ MFA pushes / 5 min", status: "Active", actions: 2, lastFired: "1h ago" },
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

const WIDGETS = ["Log Volume", "MTTD Manual", "MTTR Manual", "Total Events Processed", "MTTD Automated", "MTTR Automated", "High Priority Cases", "Medium Priority Cases", "Low Priority Cases", "Recent Cases", "Policy Fire Rate", "Integration Health"]

const TABS = ["Overview", "Case Management", "Policy Management", "Automation Settings"]

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [lastUpdated, setLastUpdated] = useState("less than a minute ago")
  const [spinning, setSpinning] = useState(false)
  const [period, setPeriod] = useState("Last 7 days")
  const [limit, setLimit] = useState("100")
  const [selectedCase, setSelectedCase] = useState<typeof ALL_CASES[0] | null>(null)
  const [showAddWidget, setShowAddWidget] = useState(false)
  const [addedWidgets, setAddedWidgets] = useState<string[]>([])
  const [automationSettings, setAutomationSettings] = useState(AUTOMATION_SETTINGS)
  const [policyStatuses, setPolicyStatuses] = useState<Record<string, string>>(
    Object.fromEntries(POLICIES.map((p) => [p.name, p.status]))
  )
  const [caseStatuses, setCaseStatuses] = useState<Record<string, string>>(
    Object.fromEntries(ALL_CASES.map((c) => [c.id, c.status]))
  )

  function refresh() {
    setSpinning(true)
    setTimeout(() => { setSpinning(false); setLastUpdated("less than a minute ago") }, 1200)
  }

  function toggleAutomation(idx: number) {
    setAutomationSettings((s) => s.map((item, i) => i === idx ? { ...item, enabled: !item.enabled } : item))
  }

  function togglePolicy(name: string) {
    setPolicyStatuses((s) => ({ ...s, [name]: s[name] === "Active" ? "Paused" : "Active" }))
  }

  function updateCaseStatus(id: string, status: string) {
    setCaseStatuses((s) => ({ ...s, [id]: status }))
    if (selectedCase?.id === id) setSelectedCase({ ...selectedCase, status })
  }

  const periodMultiplier = period === "Last 30 days" ? 4 : period === "Last 90 days" ? 12 : 1

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-white mb-4">Overview</h1>
        <div className="flex items-center gap-1 border-b border-white/[0.07]">
          {TABS.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
                activeTab === tab ? "border-[#2261db] text-white" : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >{tab}</button>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      {activeTab === "Overview" && (
        <>
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-0.5">
                <label className="text-[10px] text-gray-500 uppercase tracking-wide">Limit of entries</label>
                <select value={limit} onChange={(e) => setLimit(e.target.value)} className="bg-[#1a1a1a] border border-white/[0.10] text-white text-sm rounded-md px-3 py-1.5 focus:outline-none focus:border-[#2261db]/50">
                  <option>100</option><option>250</option><option>500</option>
                </select>
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="text-[10px] text-gray-500 uppercase tracking-wide">Period</label>
                <select value={period} onChange={(e) => setPeriod(e.target.value)} className="bg-[#1a1a1a] border border-white/[0.10] text-white text-sm rounded-md px-3 py-1.5 focus:outline-none focus:border-[#2261db]/50">
                  <option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">Last updated: {lastUpdated}</span>
              <button onClick={refresh} className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/[0.05]">
                <RefreshCw className={`w-4 h-4 ${spinning ? "animate-spin" : ""}`} />
              </button>
              <button onClick={() => setShowAddWidget(true)} className="flex items-center gap-1.5 text-sm text-white border border-white/[0.10] hover:border-[#2261db]/40 px-3 py-1.5 rounded-md transition-colors hover:bg-[#2261db]/10">
                <Plus className="w-3.5 h-3.5" /> Add Widget
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <MetricCard label="Log Volume" value={`${(101.21 * periodMultiplier).toFixed(2)} KB`} icon={FileText} highlight />
            <MetricCard label="MTTD Manual" value="0" icon={Search} />
            <MetricCard label="MTTR Manual" value="0" icon={Shield} />
            <MetricCard label="Total Events Processed" value={41 * periodMultiplier} icon={FileText} highlight onClick={() => setActiveTab("Case Management")} />
            <MetricCard label="MTTD Automated" value="0.9s" icon={Search} color="text-[#00cfff]" />
            <MetricCard label="MTTR Automated" value="1.2s" icon={Shield} color="text-emerald-400" />
          </div>
          {addedWidgets.map((w) => (
            <div key={w} className="mb-4 p-5 rounded-xl border border-[#2261db]/30 bg-[#161616] flex items-center justify-between">
              <span className="text-gray-300 text-sm font-medium">{w}</span>
              <button onClick={() => setAddedWidgets((a) => a.filter((x) => x !== w))} className="text-gray-600 hover:text-gray-400"><X className="w-4 h-4" /></button>
            </div>
          ))}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              {[
                { label: "High Priority Cases", value: 3, color: "text-red-400" },
                { label: "Medium Priority Cases", value: 2, color: "text-amber-400" },
                { label: "Low Priority Cases", value: 0, color: "text-gray-400" },
              ].map(({ label, value, color }) => (
                <div key={label} onClick={() => setActiveTab("Case Management")}
                  className="p-5 rounded-xl border border-white/[0.07] bg-[#161616] hover:border-[#2261db]/40 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-sm">{label}</span>
                    <SlidersHorizontal className="w-3.5 h-3.5 text-gray-600" />
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{period}</p>
                  <div className="flex items-end justify-between">
                    <span className={`text-3xl font-bold ${color}`}>{value}</span>
                    <AlertCircle className={`w-6 h-6 ${color} opacity-60`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 rounded-xl border border-white/[0.07] bg-[#161616] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
                <span className="text-gray-400 text-sm font-medium">Recent Cases</span>
                <button onClick={() => setActiveTab("Case Management")} className="text-xs text-[#00cfff] hover:underline">View all</button>
              </div>
              <div className="divide-y divide-white/[0.05]">
                {ALL_CASES.map((c) => (
                  <div key={c.id} onClick={() => { setSelectedCase(c); setActiveTab("Case Management") }}
                    className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                    <span className="text-gray-600 text-xs font-mono">#{c.id}</span>
                    <span className="flex-1 text-sm text-gray-200 group-hover:text-white transition-colors">{c.title}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full border ${c.priority === "High" ? "text-red-400 border-red-400/20 bg-red-400/10" : "text-amber-400 border-amber-400/20 bg-amber-400/10"}`}>{c.priority}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full border ${
                      caseStatuses[c.id] === "Contained" ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/10"
                      : caseStatuses[c.id] === "In Review" ? "text-blue-400 border-blue-400/20 bg-blue-400/10"
                      : "text-gray-500 border-gray-700 bg-white/[0.03]"}`}>{caseStatuses[c.id]}</span>
                    <span className="text-gray-600 text-xs">{c.age}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── CASE MANAGEMENT ── */}
      {activeTab === "Case Management" && (
        <div className="flex gap-5">
          {/* Case list */}
          <div className={`${selectedCase ? "w-80 flex-shrink-0" : "flex-1"} space-y-2`}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-white font-semibold">All Cases</p>
              <span className="text-xs text-gray-600">{ALL_CASES.length} total</span>
            </div>
            {ALL_CASES.map((c) => (
              <div key={c.id} onClick={() => setSelectedCase(c)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedCase?.id === c.id ? "border-[#2261db] bg-[#2261db]/10" : "border-white/[0.07] bg-[#161616] hover:border-[#2261db]/40"
                }`}>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-white text-sm font-medium leading-snug">{c.title}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border flex-shrink-0 ${
                    c.priority === "High" ? "text-red-400 border-red-400/20 bg-red-400/10" : "text-amber-400 border-amber-400/20 bg-amber-400/10"
                  }`}>{c.priority}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-xs font-mono">#{c.id}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                    caseStatuses[c.id] === "Contained" ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/10"
                    : caseStatuses[c.id] === "In Review" ? "text-blue-400 border-blue-400/20 bg-blue-400/10"
                    : "text-gray-500 border-gray-700 bg-white/[0.03]"}`}>{caseStatuses[c.id]}</span>
                  <span className="text-gray-600 text-xs ml-auto">{c.age}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Case detail */}
          {selectedCase && (
            <div className="flex-1 border border-white/[0.07] rounded-xl bg-[#161616] overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07]">
                <div>
                  <p className="text-white font-semibold">{selectedCase.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Case #{selectedCase.id} · {selectedCase.source}</p>
                </div>
                <button onClick={() => setSelectedCase(null)} className="text-gray-600 hover:text-white p-1.5 rounded-md hover:bg-white/[0.05]">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 space-y-5">
                {/* Status and actions */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs text-gray-500">Status:</span>
                  {["In Review", "Contained", "Closed"].map((s) => (
                    <button key={s} onClick={() => updateCaseStatus(selectedCase.id, s)}
                      className={`text-xs px-3 py-1.5 rounded-md border transition-all ${
                        caseStatuses[selectedCase.id] === s
                          ? s === "Contained" ? "bg-emerald-400/20 border-emerald-400/30 text-emerald-400"
                          : s === "In Review" ? "bg-blue-400/20 border-blue-400/30 text-blue-400"
                          : "bg-white/[0.10] border-white/20 text-white"
                          : "bg-transparent border-white/[0.08] text-gray-500 hover:border-white/20 hover:text-gray-300"
                      }`}>{s}</button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div><p className="text-gray-500 text-xs mb-0.5">Affected User</p><p className="text-white">{selectedCase.user}</p></div>
                    <div><p className="text-gray-500 text-xs mb-0.5">Source</p><p className="text-white">{selectedCase.source}</p></div>
                    <div><p className="text-gray-500 text-xs mb-0.5">Priority</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${selectedCase.priority === "High" ? "text-red-400 border-red-400/20 bg-red-400/10" : "text-amber-400 border-amber-400/20 bg-amber-400/10"}`}>{selectedCase.priority}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div><p className="text-gray-500 text-xs mb-0.5">MTTD</p><p className="text-[#00cfff]">{selectedCase.mttd}</p></div>
                    <div><p className="text-gray-500 text-xs mb-0.5">MTTR</p><p className="text-emerald-400">{selectedCase.mttr}</p></div>
                    <div><p className="text-gray-500 text-xs mb-0.5">Age</p><p className="text-white">{selectedCase.age}</p></div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-2">Actions Executed</p>
                  <div className="space-y-1.5">
                    {selectedCase.actions.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-white/[0.07]">
                  <button className="text-xs bg-[#2261db] hover:bg-[#2261db]/80 text-white px-3 py-2 rounded-md transition-colors">Run Playbook</button>
                  <button className="text-xs border border-white/[0.10] hover:border-white/20 text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors">Add Note</button>
                  <button onClick={() => updateCaseStatus(selectedCase.id, "Closed")} className="text-xs border border-white/[0.10] hover:border-red-400/30 text-gray-400 hover:text-red-400 px-3 py-2 rounded-md transition-colors ml-auto">Close Case</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── POLICY MANAGEMENT ── */}
      {activeTab === "Policy Management" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm">Manage detection rules and automated response policies.</p>
            <button className="flex items-center gap-1.5 text-sm bg-[#2261db] hover:bg-[#2261db]/80 text-white px-3 py-2 rounded-md transition-colors">
              <Plus className="w-3.5 h-3.5" /> New Policy
            </button>
          </div>
          <div className="border border-white/[0.07] rounded-xl overflow-hidden">
            <div className="grid px-5 py-3 bg-[#151515] border-b border-white/[0.07] text-xs text-gray-500 uppercase tracking-wider" style={{ gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr auto" }}>
              <div>Policy Name</div><div>Trigger</div><div>Actions</div><div>Last Fired</div><div>Status</div><div />
            </div>
            <div className="divide-y divide-white/[0.05] bg-[#131313]">
              {POLICIES.map((p) => (
                <div key={p.name} className="grid gap-4 px-5 py-4 items-center hover:bg-white/[0.02] transition-colors" style={{ gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr auto" }}>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#00cfff] flex-shrink-0" />
                    <span className="text-white text-sm">{p.name}</span>
                  </div>
                  <span className="text-gray-500 text-xs">{p.trigger}</span>
                  <span className="text-gray-400 text-sm">{p.actions}</span>
                  <span className="text-gray-500 text-xs">{p.lastFired}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border w-fit ${
                    policyStatuses[p.name] === "Active" ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/10" : "text-gray-500 border-gray-700 bg-white/[0.03]"
                  }`}>{policyStatuses[p.name]}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => togglePolicy(p.name)} className="text-xs border border-white/[0.10] hover:border-[#2261db]/40 text-gray-400 hover:text-white px-2.5 py-1 rounded-md transition-colors">
                      {policyStatuses[p.name] === "Active" ? "Pause" : "Enable"}
                    </button>
                    <button className="text-xs border border-white/[0.10] hover:border-[#2261db]/40 text-gray-400 hover:text-white px-2.5 py-1 rounded-md transition-colors">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── AUTOMATION SETTINGS ── */}
      {activeTab === "Automation Settings" && (
        <div className="max-w-2xl space-y-3">
          <p className="text-gray-400 text-sm mb-5">Configure how AIR handles automated containment, approvals, and notifications.</p>
          {automationSettings.map((s, i) => (
            <div key={s.label} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.07] bg-[#161616] hover:border-[#2261db]/30 transition-all">
              <div>
                <p className="text-white text-sm">{s.label}</p>
              </div>
              <button onClick={() => toggleAutomation(i)}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${s.enabled ? "bg-[#2261db]" : "bg-white/[0.10]"}`}>
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${s.enabled ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
          <div className="pt-4">
            <button className="text-sm bg-[#2261db] hover:bg-[#2261db]/80 text-white px-4 py-2 rounded-md transition-colors">Save Settings</button>
          </div>
        </div>
      )}

      {/* Add Widget Modal */}
      {showAddWidget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowAddWidget(false)}>
          <div className="bg-[#1a1a1a] border border-white/[0.10] rounded-2xl p-6 w-full max-w-sm shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Add Widget</h3>
              <button onClick={() => setShowAddWidget(false)} className="text-gray-600 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            <div className="space-y-1.5 max-h-72 overflow-y-auto">
              {WIDGETS.filter((w) => !addedWidgets.includes(w)).map((w) => (
                <button key={w} onClick={() => { setAddedWidgets((a) => [...a, w]); setShowAddWidget(false) }}
                  className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-[#2261db]/10 hover:text-white border border-transparent hover:border-[#2261db]/30 transition-all">
                  <Plus className="w-3.5 h-3.5 text-gray-600" />
                  {w}
                </button>
              ))}
              {WIDGETS.filter((w) => !addedWidgets.includes(w)).length === 0 && (
                <p className="text-gray-600 text-sm text-center py-6">All widgets added</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
