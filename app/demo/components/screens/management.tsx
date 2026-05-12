"use client"

import { useState } from "react"
import { Activity, CheckCircle2, ChevronRight, Edit3, Info, Plus, RefreshCw, TriangleAlert, X, Zap } from "lucide-react"

const INTEGRATIONS = [
  {
    name: "Company #1 - Microsoft",
    vendor: "Microsoft / Entra ID",
    capabilities: ["Response", "Log Ingestion"],
    status: "Healthy",
    health: "26,420 events in the last hour",
    color: "bg-[#22c55e]",
    eventsToday: 186420,
    lastSync: "less than a minute ago",
    latency: "240 ms",
    region: "East US",
    logs: [
      { time: "09:14:02", msg: "Sign-in log batch ingested (420 events)" },
      { time: "09:13:01", msg: "Conditional Access policy synced" },
      { time: "09:12:00", msg: "Risky user score updated: j.morris@..." },
      { time: "09:11:44", msg: "MFA push notification logged" },
    ],
  },
  {
    name: "Company #1 - Defender",
    vendor: "Microsoft Defender",
    capabilities: ["Endpoint", "Alert Triage"],
    status: "Healthy",
    health: "18 active alert rules",
    color: "bg-[#22c55e]",
    eventsToday: 44210,
    lastSync: "2 minutes ago",
    latency: "310 ms",
    region: "East US",
    logs: [
      { time: "09:13:55", msg: "Endpoint alert ingested: PUA detected" },
      { time: "09:11:20", msg: "Alert rule updated: Lateral movement" },
      { time: "09:10:44", msg: "Device compliance check completed" },
    ],
  },
  {
    name: "Company #1 - Sentinel",
    vendor: "Microsoft Sentinel",
    capabilities: ["SIEM", "Incident Sync"],
    status: "Degraded",
    health: "Connector latency: 9 min",
    color: "bg-[#f5b400]",
    eventsToday: 9810,
    lastSync: "9 minutes ago",
    latency: "9,200 ms",
    region: "East US",
    logs: [
      { time: "09:05:12", msg: "Incident sync delayed — connector lag" },
      { time: "09:04:01", msg: "Analytics rule fired: Brute force" },
      { time: "09:00:00", msg: "Last successful full sync" },
    ],
  },
  {
    name: "Company #1 - Okta",
    vendor: "Okta",
    capabilities: ["Identity", "Risk Signals"],
    status: "Healthy",
    health: "4,812 sign-ins today",
    color: "bg-[#22c55e]",
    eventsToday: 4812,
    lastSync: "less than a minute ago",
    latency: "190 ms",
    region: "US Cell 3",
    logs: [
      { time: "09:13:48", msg: "Sign-in event batch synced (12 events)" },
      { time: "09:12:30", msg: "User risk signal received: high" },
      { time: "09:10:15", msg: "Policy evaluation completed" },
    ],
  },
  {
    name: "Company #1 - Google Workspace",
    vendor: "Google",
    capabilities: ["Email", "Audit Logs"],
    status: "Healthy",
    health: "7 mailboxes monitored",
    color: "bg-[#22c55e]",
    eventsToday: 3201,
    lastSync: "1 minute ago",
    latency: "420 ms",
    region: "Global",
    logs: [
      { time: "09:13:10", msg: "Gmail audit log batch ingested" },
      { time: "09:11:00", msg: "Drive share event logged" },
      { time: "09:08:44", msg: "Admin activity report synced" },
    ],
  },
  {
    name: "Company #1 - Slack",
    vendor: "Slack",
    capabilities: ["Notifications", "Approvals"],
    status: "Needs Review",
    health: "Approval channel disconnected",
    color: "bg-[#ef4444]",
    eventsToday: 0,
    lastSync: "22 minutes ago",
    latency: "—",
    region: "US",
    logs: [
      { time: "08:52:00", msg: "Approval channel webhook returned 404" },
      { time: "08:51:55", msg: "Retry attempt 3/3 failed" },
      { time: "08:50:10", msg: "Notification sent successfully" },
    ],
  },
]

export default function ManagementScreen({ dark = false }: { dark?: boolean }) {
  const [selected, setSelected] = useState<(typeof INTEGRATIONS)[number] | null>(null)
  const [statuses, setStatuses] = useState<Record<string, string>>(Object.fromEntries(INTEGRATIONS.map((i) => [i.name, i.status])))
  const [spinning, setSpinning] = useState(false)
  const [lastUpdated, setLastUpdated] = useState("less than a minute ago")

  const bg      = dark ? "bg-[#0d0d0f] min-h-full"  : "bg-white min-h-full"
  const bgCard  = dark ? "bg-[#13141a]"  : "bg-white"
  const bgMuted = dark ? "bg-[#1a1b22]"  : "bg-[#f8fafc]"
  const bgHover = dark ? "hover:bg-[#1e2028]" : "hover:bg-[#f8fafc]"
  const border  = dark ? "border-[#1e2028]" : "border-[#d7dce3]"
  const txtPri  = dark ? "text-[#e8eaf0]" : "text-[#070707]"
  const txtSub  = dark ? "text-[#7c8394]" : "text-[#5f6472]"

  function refresh() {
    setSpinning(true)
    setLastUpdated("checking connector health...")
    window.setTimeout(() => { setSpinning(false); setLastUpdated("just now") }, 900)
  }

  function toggleStatus(name: string) {
    setStatuses((s) => ({ ...s, [name]: s[name] === "Healthy" || s[name] === "Degraded" ? "Disconnected" : "Healthy" }))
  }

  const StatusIcon = ({ status }: { status: string }) =>
    status === "Healthy" ? <CheckCircle2 className="h-4 w-4 text-[#22c55e]" /> :
    status === "Degraded" ? <TriangleAlert className="h-4 w-4 text-[#f5b400]" /> :
    <Info className="h-4 w-4 text-[#ef4444]" />

  const statusColor = (s: string) => s === "Healthy" ? "text-[#22c55e]" : s === "Degraded" ? "text-[#f5b400]" : "text-[#ef4444]"

  return (
    <div className={`p-6 ${bg}`}>
      <div className="mb-6">
        <h1 className={`mb-2 text-[32px] font-bold leading-tight ${txtPri}`}>Integrations</h1>
        <p className={`text-[15px] ${txtSub}`}>Connect and manage third-party services to enable log ingestion, detection, and automated response.</p>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-4">
          {[
            { label: "Connected", value: INTEGRATIONS.length, color: txtPri },
            { label: "Healthy", value: Object.values(statuses).filter((s) => s === "Healthy").length, color: "text-[#22c55e]" },
            { label: "Needs attention", value: Object.values(statuses).filter((s) => s !== "Healthy").length, color: "text-[#f5b400]" },
          ].map(({ label, value, color }) => (
            <div key={label} className={`rounded border px-5 py-3 ${bgCard} ${border}`}>
              <p className={`text-sm ${txtSub}`}>{label}</p>
              <p className={`text-2xl font-semibold ${color}`}>{value}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-sm ${txtSub}`}>Last updated: {lastUpdated}</span>
          <button onClick={refresh} className={`rounded border p-2 transition-colors ${bgCard} ${border} ${txtPri} ${bgHover}`} aria-label="Refresh integrations">
            <RefreshCw className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      <div className="flex gap-5">
        {/* Integration cards grid */}
        <div className={`grid gap-4 ${selected ? "w-80 flex-shrink-0 grid-cols-1" : "flex-1 grid-cols-3"}`}>
          {INTEGRATIONS.map((integration) => {
            const currentStatus = statuses[integration.name]
            const isSelected = selected?.name === integration.name
            return (
              <button
                key={integration.name}
                onClick={() => setSelected(isSelected ? null : integration)}
                className={`rounded border p-5 text-left transition-all ${bgCard} ${isSelected ? (dark ? "border-[#2563eb]" : "border-[#2563eb]") : border} ${bgHover}`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className={`truncate text-[15px] font-semibold leading-snug ${txtPri}`}>{integration.name}</h2>
                    <p className={`mt-0.5 text-sm ${txtSub}`}>{integration.vendor}</p>
                  </div>
                  <StatusIcon status={currentStatus} />
                </div>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {integration.capabilities.map((cap) => (
                    <span key={cap} className={`rounded border px-2 py-0.5 text-xs ${border} ${dark ? "bg-[#1a1b22] text-[#9aa3b3]" : "bg-[#f8fafc] text-[#5f6472]"}`}>{cap}</span>
                  ))}
                </div>
                <div className={`flex items-center justify-between`}>
                  <span className={`text-xs ${statusColor(currentStatus)}`}>{currentStatus}</span>
                  <ChevronRight className={`h-4 w-4 ${txtSub}`} />
                </div>
              </button>
            )
          })}

          <button className={`flex flex-col items-start justify-center rounded border border-dashed px-6 py-8 text-left transition-colors ${dark ? "border-[#2a2d3a] hover:bg-[#1a1b22]" : "border-[#c7ccd4] hover:bg-[#f8fafc]"}`}>
            <h3 className={`mb-1 flex items-center gap-2 text-[15px] font-semibold ${txtPri}`}>
              <Plus className="h-4 w-4" /> New Integration
            </h3>
            <p className={`text-sm ${txtSub}`}>Connect another data source.</p>
          </button>
        </div>

        {/* Detail panel */}
        {selected && (
          <div className={`flex-1 overflow-hidden rounded border ${border} ${bgCard}`}>
            <div className={`flex items-center justify-between border-b px-6 py-4 ${border} ${bgMuted}`}>
              <div>
                <p className={`font-semibold ${txtPri}`}>{selected.name}</p>
                <p className={`mt-0.5 text-sm ${txtSub}`}>{selected.vendor}</p>
              </div>
              <button onClick={() => setSelected(null)} className={`rounded p-1.5 ${txtSub} ${bgHover}`} aria-label="Close detail panel">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5 p-6">
              {/* Status + action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StatusIcon status={statuses[selected.name]} />
                  <span className={`text-sm font-medium ${statusColor(statuses[selected.name])}`}>{statuses[selected.name]}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toggleStatus(selected.name)} className={`rounded border px-3 py-1.5 text-sm transition-colors ${bgCard} ${border} ${txtPri} ${bgHover}`}>
                    {statuses[selected.name] === "Healthy" || statuses[selected.name] === "Degraded" ? "Disconnect" : "Reconnect"}
                  </button>
                  <button className={`rounded border px-3 py-1.5 text-sm transition-colors ${bgCard} ${border} ${txtPri} ${bgHover}`}>
                    <Edit3 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Events Today", value: selected.eventsToday.toLocaleString() },
                  { label: "Last Sync", value: selected.lastSync },
                  { label: "Avg Latency", value: selected.latency },
                  { label: "Region", value: selected.region },
                ].map(({ label, value }) => (
                  <div key={label} className={`rounded border p-3 ${bgMuted} ${border}`}>
                    <p className={`text-xs ${txtSub}`}>{label}</p>
                    <p className={`mt-0.5 text-sm font-medium ${txtPri}`}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div>
                <p className={`mb-2 text-xs uppercase tracking-wider ${txtSub}`}>Capabilities</p>
                <div className="flex flex-wrap gap-2">
                  {selected.capabilities.map((cap) => (
                    <span key={cap} className="inline-flex items-center gap-1.5 rounded border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-2.5 py-1 text-xs text-[#3b82f6]">
                      <Zap className="h-3 w-3" /> {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Health message */}
              <div className={`rounded border p-3 ${border} ${bgMuted}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Activity className={`h-3.5 w-3.5 ${txtSub}`} />
                  <p className={`text-xs font-medium ${txtSub}`}>Health Status</p>
                </div>
                <p className={`text-sm ${txtPri}`}>{selected.health}</p>
              </div>

              {/* Recent log */}
              <div>
                <p className={`mb-2 text-xs uppercase tracking-wider ${txtSub}`}>Recent Activity</p>
                <div className={`divide-y rounded border ${border} ${dark ? "divide-[#1e2028]" : "divide-[#d7dce3]"}`}>
                  {selected.logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-3 px-4 py-3">
                      <span className={`font-mono text-[11px] flex-shrink-0 mt-0.5 ${txtSub}`}>{log.time}</span>
                      <p className={`text-xs ${txtPri}`}>{log.msg}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
