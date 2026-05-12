"use client"

import { useState } from "react"
import { CheckCircle2, Edit3, Info, Plus, RefreshCw, TriangleAlert } from "lucide-react"

const INTEGRATIONS = [
  {
    name: "Company #1 - Microsoft",
    vendor: "Microsoft",
    capabilities: ["Response", "Log Ingestion"],
    status: "Healthy",
    health: "26,420 events in the last hour",
    color: "bg-[#22c55e]",
  },
  {
    name: "Company #1 - Defender",
    vendor: "Microsoft Defender",
    capabilities: ["Endpoint", "Alert Triage"],
    status: "Healthy",
    health: "18 active alert rules",
    color: "bg-[#22c55e]",
  },
  {
    name: "Company #1 - Sentinel",
    vendor: "Microsoft Sentinel",
    capabilities: ["SIEM", "Incident Sync"],
    status: "Degraded",
    health: "Connector latency: 9 min",
    color: "bg-[#f5b400]",
  },
  {
    name: "Company #1 - Okta",
    vendor: "Okta",
    capabilities: ["Identity", "Risk Signals"],
    status: "Healthy",
    health: "4,812 sign-ins today",
    color: "bg-[#22c55e]",
  },
  {
    name: "Company #1 - Google Workspace",
    vendor: "Google",
    capabilities: ["Email", "Audit Logs"],
    status: "Healthy",
    health: "7 mailboxes monitored",
    color: "bg-[#22c55e]",
  },
  {
    name: "Company #1 - Slack",
    vendor: "Slack",
    capabilities: ["Notifications", "Approvals"],
    status: "Needs Review",
    health: "Approval channel disconnected",
    color: "bg-[#ef4444]",
  },
]

const CONNECTOR_EVENTS = [
  { source: "Microsoft", detail: "Audit subscription renewed", time: "4 min ago", status: "Healthy" },
  { source: "Sentinel", detail: "Ingestion latency above target", time: "18 min ago", status: "Degraded" },
  { source: "Slack", detail: "Approval channel needs reconnect", time: "42 min ago", status: "Needs Review" },
  { source: "Okta", detail: "Risk signals synced", time: "1h ago", status: "Healthy" },
]

const DATA_COVERAGE = [
  { label: "Identity events", value: "34,812" },
  { label: "Email events", value: "18,406" },
  { label: "Endpoint alerts", value: "271" },
  { label: "Approval actions", value: "16" },
]

export default function ManagementScreen() {
  const [spinning, setSpinning] = useState(false)
  const [lastUpdated, setLastUpdated] = useState("less than a minute ago")

  function refresh() {
    setSpinning(true)
    setLastUpdated("checking connector health...")
    window.setTimeout(() => {
      setSpinning(false)
      setLastUpdated("just now")
    }, 900)
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="mb-3 text-[32px] font-bold leading-tight text-[#070707]">Integrations</h1>
        <p className="text-[15px] text-[#5f6472]">
          Connect and manage third-party services to enable log ingestion, detection, and automated response.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded border border-[#d7dce3] bg-white px-4 py-3">
            <p className="text-sm text-[#5f6472]">Connected</p>
            <p className="text-2xl font-semibold text-[#070707]">6</p>
          </div>
          <div className="rounded border border-[#d7dce3] bg-white px-4 py-3">
            <p className="text-sm text-[#5f6472]">Healthy</p>
            <p className="text-2xl font-semibold text-[#166534]">4</p>
          </div>
          <div className="rounded border border-[#d7dce3] bg-white px-4 py-3">
            <p className="text-sm text-[#5f6472]">Needs attention</p>
            <p className="text-2xl font-semibold text-[#92400e]">2</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[17px] text-[#5f6472]">Last updated: {lastUpdated}</span>
          <button onClick={refresh} className="rounded border border-[#d7dce3] bg-white p-2 text-[#070707] hover:bg-[#f8fafc]" aria-label="Refresh integrations">
            <RefreshCw className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="grid grid-cols-2 gap-4 2xl:grid-cols-3">
          {INTEGRATIONS.map((integration) => (
            <div key={integration.name} className="h-64 rounded border border-[#d7dce3] bg-white p-5">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="truncate text-[22px] font-bold leading-7 text-[#070707]">{integration.name}</h2>
                  <p className="mt-1 text-[15px] text-[#5f6472]">{integration.vendor}</p>
                </div>
                <button className="rounded p-1 text-[#697386] hover:bg-[#f2f4f7]" aria-label={`Edit ${integration.name}`}>
                  <Edit3 className="h-4 w-4" />
                </button>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {integration.capabilities.map((capability) => (
                  <span key={capability} className="inline-flex items-center gap-2 rounded border border-[#d7dce3] bg-white px-2 py-1 text-[15px]">
                    <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                    {capability}
                  </span>
                ))}
              </div>

              <div className="mb-5 rounded border border-[#d7dce3] bg-[#f8fafc] px-3 py-2">
                <p className="text-sm text-[#5f6472]">{integration.health}</p>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded bg-[#f7f8fa] px-2 py-1 text-[15px] text-[#697386]">
                  <span className={`h-3 w-3 rounded-full ${integration.color}`} />
                  {integration.status}
                </span>
                {integration.status === "Healthy" ? <CheckCircle2 className="h-5 w-5 text-[#166534]" /> : integration.status === "Degraded" ? <TriangleAlert className="h-5 w-5 text-[#92400e]" /> : <Info className="h-5 w-5 text-[#b42318]" />}
                <button className="rounded border border-[#d7dce3] bg-white px-4 py-1.5 text-sm text-[#070707] hover:bg-[#f8fafc]">
                  Manage
                </button>
              </div>
            </div>
          ))}

          <button className="flex h-64 flex-col items-start justify-center rounded border border-dashed border-[#c7ccd4] bg-white px-8 text-left transition-colors hover:bg-[#f8fafc]">
            <h3 className="mb-3 flex items-center gap-3 text-[24px] font-bold leading-8 text-[#070707]">
              <Plus className="h-6 w-6" />
              New Integration
            </h3>
            <p className="text-[15px] text-[#5f6472]">Connect another data source or response provider.</p>
          </button>
        </div>

        <aside className="space-y-4">
          <section className="rounded border border-[#d7dce3] bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#070707]">Connector Events</h2>
                <p className="text-sm text-[#5f6472]">Latest sync and health updates.</p>
              </div>
              <span className="rounded border border-[#d7dce3] bg-[#f7f8fa] px-2 py-1 text-sm text-[#697386]">Live</span>
            </div>
            <div className="space-y-3">
              {CONNECTOR_EVENTS.map((event) => (
                <div key={`${event.source}-${event.time}`} className="rounded border border-[#d7dce3] bg-[#f8fafc] p-3">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <p className="font-medium text-[#070707]">{event.source}</p>
                    <span className={`text-xs ${event.status === "Healthy" ? "text-[#166534]" : event.status === "Degraded" ? "text-[#92400e]" : "text-[#b42318]"}`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#5f6472]">{event.detail}</p>
                  <p className="mt-2 text-xs text-[#697386]">{event.time}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded border border-[#d7dce3] bg-white p-5">
            <h2 className="mb-1 text-xl font-semibold text-[#070707]">Data Coverage</h2>
            <p className="mb-4 text-sm text-[#5f6472]">Events normalized in the last 24 hours.</p>
            <div className="grid grid-cols-2 gap-3">
              {DATA_COVERAGE.map((item) => (
                <div key={item.label} className="rounded border border-[#d7dce3] bg-[#f8fafc] p-3">
                  <p className="text-sm text-[#5f6472]">{item.label}</p>
                  <p className="mt-1 text-xl font-semibold text-[#070707]">{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
