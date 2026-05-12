"use client"

import { useState } from "react"
import { Calendar, ChevronDown, ChevronLeft, Database, Download, Loader2, Plus, Save, Search, X } from "lucide-react"

const FIELD_GROUPS = ["SharepointLog", "ExchangeLog", "AzureAdLog", "GeneralLog", "DlpLog", "AuditLog", "SigninLog", "SecurityLog"]

const RESULTS = [
  { time: "2026-05-12 09:41:22", user: "alex.rivera@company1.example", source: "AzureAdLog", event: "Risky sign-in", severity: "High", ip: "185.220.101.47" },
  { time: "2026-05-12 09:39:05", user: "finance@company1.example", source: "ExchangeLog", event: "Inbox rule created", severity: "High", ip: "40.92.12.18" },
  { time: "2026-05-12 09:36:44", user: "morgan.lee@company1.example", source: "SigninLog", event: "MFA challenge denied", severity: "Medium", ip: "72.14.192.0" },
  { time: "2026-05-12 09:28:17", user: "svc-backup@company1.example", source: "AuditLog", event: "Privilege assignment", severity: "Medium", ip: "10.1.4.22" },
  { time: "2026-05-12 09:11:50", user: "ops.team@company1.example", source: "SharepointLog", event: "Mass file download", severity: "Low", ip: "10.2.8.91" },
]

export default function LogSearchScreen({ dark = false }: { dark?: boolean }) {
  const [eventTypes, setEventTypes] = useState(["sharepoint", "exchange", "azure_ad"])
  const [notMode, setNotMode] = useState(false)
  const [searching, setSearching] = useState(false)
  const [lastSearch, setLastSearch] = useState("less than a minute ago")

  function runSearch() {
    setSearching(true)
    window.setTimeout(() => {
      setSearching(false)
      setLastSearch("just now")
    }, 900)
  }

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="mb-3 text-[32px] font-bold leading-tight text-[#070707]">Search</h1>
        <p className="text-[15px] text-[#5f6472]">
          Search, filter, and investigate log data across your connected integrations to quickly identify suspicious activity and security events.
        </p>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#070707]">Log Source</label>
          <button className="flex h-10 w-full items-center justify-between rounded border border-[#d7dce3] bg-white px-2 text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#202124] px-3 py-1 text-sm font-semibold text-[#fff]">
              Microsoft
              <X className="h-3 w-3" />
            </span>
            <ChevronDown className="h-4 w-4 text-[#697386]" />
          </button>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#070707]">Event Type</label>
          <button className="flex min-h-10 w-full items-center justify-between rounded border border-[#d7dce3] bg-white px-2 text-left">
            <span className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <span key={type} className="inline-flex items-center gap-2 rounded-full bg-[#202124] px-3 py-1 text-sm font-semibold text-[#fff]">
                  {type}
                  <X
                    className="h-3 w-3"
                    onClick={(event) => {
                      event.stopPropagation()
                      setEventTypes((items) => items.filter((item) => item !== type))
                    }}
                  />
                </span>
              ))}
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d7dce3] bg-white px-3 py-1 text-sm text-[#070707]">+ 8 more</span>
            </span>
            <ChevronDown className="h-4 w-4 flex-shrink-0 text-[#697386]" />
          </button>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#070707]">Timeframe</label>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded border border-[#d7dce3] bg-white">
              <Calendar className="h-4 w-4" />
            </button>
            <button className="flex h-10 flex-1 items-center gap-2 rounded border border-[#d7dce3] bg-white px-3 text-left text-sm">
              <Calendar className="h-4 w-4" />
              May 12, 2026 08:45:00 - May 12, 2026 09:45:00
            </button>
          </div>
        </div>
      </div>

      <div className="mb-10 flex items-center gap-2">
        <button className="flex h-8 w-8 items-center justify-center rounded border border-[#d7dce3] bg-white" aria-label="Saved searches">
          <Save className="h-4 w-4" />
        </button>
        <div className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded border border-[#d7dce3] bg-white px-2">
          <button className="inline-flex h-8 items-center gap-2 rounded border border-[#d7dce3] px-3">
            AND
            <ChevronDown className="h-3 w-3" />
          </button>
          <button onClick={() => setNotMode((value) => !value)} className="inline-flex items-center gap-2 text-[15px] text-[#070707]">
            <span className={`h-5 w-9 rounded-full border transition-colors ${notMode ? "border-[#2563eb] bg-[#2563eb]" : "border-[#d7dce3] bg-[#eef1f5]"}`} />
            Not
          </button>
          <button className="inline-flex items-center gap-2 text-[15px]">
            <Plus className="h-4 w-4" />
            Search Criteria
          </button>
          <button className="inline-flex items-center gap-2 text-[15px]">
            <Plus className="h-4 w-4" />
            Search Group
          </button>
        </div>
        <button onClick={runSearch} className="flex h-8 w-8 items-center justify-center rounded border border-[#d7dce3] bg-white" aria-label="Search">
          {searching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex gap-8">
        <aside className="w-72 flex-shrink-0 border-r border-[#d7dce3] pr-2">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#070707]">Field Names</h2>
            <ChevronLeft className="h-4 w-4 text-[#070707]" />
          </div>
          <input className="mb-5 h-10 w-full rounded border border-[#d7dce3] bg-white px-3 text-[15px]" placeholder="Search" />
          <div className="space-y-5 border-t border-[#d7dce3] pt-5">
            {FIELD_GROUPS.slice(0, 7).map((field) => (
              <button key={field} className="flex w-full items-center justify-between px-1 text-left text-[16px] text-[#070707]">
                {field}
                <ChevronDown className="h-4 w-4 text-[#697386]" />
              </button>
            ))}
          </div>
        </aside>

        <div className="min-w-0 flex-1 overflow-hidden rounded border border-[#d7dce3] bg-white">
          <div className="flex items-center justify-between border-b border-[#d7dce3] px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-[#5f6472]">
              <Database className="h-4 w-4" />
              {searching ? "Searching logs..." : `${RESULTS.length} results - Last search: ${lastSearch}`}
            </div>
            <button className="inline-flex items-center gap-2 rounded border border-[#d7dce3] px-3 py-1.5 text-sm">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>

          <div className="grid border-b border-[#d7dce3] bg-[#f8fafc] px-4 py-3 text-xs uppercase tracking-wide text-[#5f6472]" style={{ gridTemplateColumns: "1.1fr 1.5fr .8fr 1fr .7fr .8fr" }}>
            <div>Time</div>
            <div>User</div>
            <div>Source</div>
            <div>Event</div>
            <div>Severity</div>
            <div>IP</div>
          </div>

          <div className="divide-y divide-[#d7dce3]">
            {RESULTS.map((row) => (
              <div key={`${row.time}-${row.user}`} className="grid items-center px-4 py-3 text-sm" style={{ gridTemplateColumns: "1.1fr 1.5fr .8fr 1fr .7fr .8fr" }}>
                <div className="font-mono text-xs text-[#5f6472]">{row.time}</div>
                <div className="truncate text-[#070707]">{row.user}</div>
                <div>{row.source}</div>
                <div>{row.event}</div>
                <div>
                  <span className={`rounded-full px-2 py-0.5 text-xs ${row.severity === "High" ? "bg-red-50 text-red-600" : row.severity === "Medium" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>
                    {row.severity}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#5f6472]">{row.ip}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
