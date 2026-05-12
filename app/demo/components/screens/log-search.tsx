"use client"

import { useState } from "react"
import { Search, Plus, ChevronDown, ChevronRight, Calendar, Loader2, X, Download } from "lucide-react"

const LOG_SOURCES = ["Microsoft Entra ID", "Microsoft 365", "Microsoft Defender", "Google Workspace", "Okta", "CrowdStrike"]
const EVENT_TYPES = ["SignInLogs", "AuditLogs", "MailboxActivity", "AlertEvents", "RiskyUsers", "InboxRules"]

const FIELD_NAMES = [
  "userPrincipalName", "ipAddress", "location", "clientAppUsed",
  "riskLevel", "resultType", "createdDateTime", "operationName",
  "objectId", "targetResources", "activityType", "eventType",
]

const SAMPLE_RESULTS: Record<string, object[]> = {
  "Microsoft Entra ID_SignInLogs": [
    { userPrincipalName: "j.morris@contoso.com", ipAddress: "185.220.101.47", location: "London, GB", clientAppUsed: "Browser", riskLevel: "high", resultType: "0", createdDateTime: "2026-04-29T14:08:22Z" },
    { userPrincipalName: "j.morris@contoso.com", ipAddress: "72.14.192.0", location: "New York, US", clientAppUsed: "MobileApp", riskLevel: "none", resultType: "0", createdDateTime: "2026-04-29T14:02:11Z" },
    { userPrincipalName: "s.chen@contoso.com", ipAddress: "185.220.101.12", location: "Amsterdam, NL", clientAppUsed: "Browser", riskLevel: "medium", resultType: "50126", createdDateTime: "2026-04-29T13:41:05Z" },
    { userPrincipalName: "admin@contoso.com", ipAddress: "10.0.0.5", location: "Chicago, US", clientAppUsed: "Desktop", riskLevel: "none", resultType: "0", createdDateTime: "2026-04-29T13:10:00Z" },
  ],
  "Microsoft Entra ID_AuditLogs": [
    { userPrincipalName: "admin@contoso.com", operationName: "Update user", objectId: "j.morris@contoso.com", activityType: "UserUpdate", createdDateTime: "2026-04-29T14:10:00Z" },
    { userPrincipalName: "admin@contoso.com", operationName: "Disable user", objectId: "j.morris@contoso.com", activityType: "UserDisable", createdDateTime: "2026-04-29T14:09:00Z" },
  ],
  "Microsoft Entra ID_RiskyUsers": [
    { userPrincipalName: "j.morris@contoso.com", riskLevel: "high", resultType: "confirmed", createdDateTime: "2026-04-29T14:08:22Z" },
    { userPrincipalName: "s.chen@contoso.com", riskLevel: "medium", resultType: "pending", createdDateTime: "2026-04-29T13:41:05Z" },
  ],
  "Microsoft 365_MailboxActivity": [
    { userPrincipalName: "cfo@contoso.com", operationName: "Create", objectId: "Rule-4821", activityType: "InboxRule", createdDateTime: "2026-04-29T12:55:00Z" },
    { userPrincipalName: "cfo@contoso.com", operationName: "Update", objectId: "Calendar", activityType: "Calendar", createdDateTime: "2026-04-29T12:40:00Z" },
    { userPrincipalName: "hr@contoso.com", operationName: "SendAs", objectId: "Message-887", activityType: "Email", createdDateTime: "2026-04-29T11:20:00Z" },
  ],
  "Microsoft 365_AuditLogs": [
    { userPrincipalName: "admin@contoso.com", operationName: "Set-MailboxAutoReplyConfiguration", objectId: "billing@contoso.com", activityType: "MailboxConfig", createdDateTime: "2026-04-29T10:05:00Z" },
  ],
  "Microsoft 365_InboxRules": [
    { userPrincipalName: "cfo@contoso.com", operationName: "Create", objectId: "Rule-4821: forward to external@gmail.com", activityType: "InboxRule", createdDateTime: "2026-04-29T12:55:00Z" },
  ],
  "Microsoft Defender_AlertEvents": [
    { eventType: "PhishingEmail", userPrincipalName: "user@contoso.com", objectId: "Alert-3291", riskLevel: "high", createdDateTime: "2026-04-29T10:30:00Z" },
    { eventType: "SuspiciousAttachment", userPrincipalName: "billing@contoso.com", objectId: "Alert-3290", riskLevel: "medium", createdDateTime: "2026-04-29T09:10:00Z" },
  ],
  "Okta_SignInLogs": [
    { userPrincipalName: "user@contoso.com", ipAddress: "192.168.1.5", location: "Chicago, US", riskLevel: "none", resultType: "SUCCESS", createdDateTime: "2026-04-29T08:00:00Z" },
  ],
  "CrowdStrike_AlertEvents": [
    { eventType: "MalwareDetected", userPrincipalName: "workstation-01", objectId: "Threat-8812", riskLevel: "high", createdDateTime: "2026-04-29T07:45:00Z" },
  ],
}

interface Criterion {
  id: string
  field: string
  operator: string
  value: string
}

function getResults(source: string, eventType: string, criteria: Criterion[], notMode: boolean, fieldFilter: string | null) {
  const keys = Object.keys(SAMPLE_RESULTS)
  let results: object[] = []
  for (const key of keys) {
    const [src, evt] = key.split("_")
    const srcMatch = !source || src === source
    const evtMatch = !eventType || evt === eventType
    if (srcMatch && evtMatch) results = [...results, ...SAMPLE_RESULTS[key]]
  }
  if (criteria.length > 0) {
    results = results.filter((row) => {
      const r = row as Record<string, string>
      const matches = criteria.every((c) => {
        const val = String(r[c.field] ?? "").toLowerCase()
        const cv = c.value.toLowerCase()
        if (c.operator === "contains") return val.includes(cv)
        if (c.operator === "equals") return val === cv
        if (c.operator === "starts with") return val.startsWith(cv)
        return true
      })
      return notMode ? !matches : matches
    })
  }
  if (fieldFilter) {
    results = results.map((row) => {
      const r = row as Record<string, string>
      return Object.fromEntries(Object.entries(r).filter(([k]) => k === fieldFilter || k === "createdDateTime" || k === "userPrincipalName"))
    })
  }
  return results
}

export default function LogSearchScreen() {
  const [logSource, setLogSource] = useState("")
  const [eventType, setEventType] = useState("")
  const [results, setResults] = useState<object[] | null>(null)
  const [searching, setSearching] = useState(false)
  const [selectedField, setSelectedField] = useState<string | null>(null)
  const [expandedRow, setExpandedRow] = useState<number | null>(null)
  const [andMode, setAndMode] = useState<"AND" | "OR">("AND")
  const [notMode, setNotMode] = useState(false)
  const [criteria, setCriteria] = useState<Criterion[]>([])
  const [fieldSearch, setFieldSearch] = useState("")
  const [searchedAt, setSearchedAt] = useState<string | null>(null)

  const now = new Date()

  function addCriterion() {
    setCriteria((c) => [...c, { id: Math.random().toString(36).slice(2), field: "userPrincipalName", operator: "contains", value: "" }])
  }

  function updateCriterion(id: string, patch: Partial<Criterion>) {
    setCriteria((c) => c.map((x) => x.id === id ? { ...x, ...patch } : x))
  }

  function removeCriterion(id: string) {
    setCriteria((c) => c.filter((x) => x.id !== id))
  }

  async function runSearch() {
    setSearching(true)
    setResults(null)
    setExpandedRow(null)
    await new Promise((r) => setTimeout(r, 1200))
    const res = getResults(logSource, eventType, criteria, notMode, selectedField)
    setResults(res)
    const t = new Date()
    setSearchedAt(`${t.toDateString()} ${t.getHours()}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`)
    setSearching(false)
  }

  const filteredFields = FIELD_NAMES.filter((f) => f.toLowerCase().includes(fieldSearch.toLowerCase()))

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-white mb-1">Search</h1>
        <p className="text-gray-500 text-sm">Search, filter, and investigate log data across your connected integrations.</p>
      </div>

      {/* Search bar */}
      <div className="border border-[#2261db]/50 rounded-xl overflow-hidden mb-5">
        <div className="grid grid-cols-3 divide-x divide-white/[0.07] bg-[#161616]">
          <div className="px-4 py-3">
            <label className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Log Source</label>
            <select value={logSource} onChange={(e) => setLogSource(e.target.value)} className="w-full bg-transparent text-white text-sm outline-none">
              <option value="">All Sources</option>
              {LOG_SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="px-4 py-3">
            <label className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Event Type</label>
            <select value={eventType} onChange={(e) => setEventType(e.target.value)} className="w-full bg-transparent text-white text-sm outline-none">
              <option value="">All Events</option>
              {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="px-4 py-3 flex items-start gap-2">
            <Calendar className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">Timeframe</label>
              <p className="text-white text-sm">Apr 29, 2026 — Now</p>
            </div>
          </div>
        </div>

        {/* Criteria builder */}
        <div className="bg-[#131313] border-t border-white/[0.07] px-4 py-3 space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={() => setAndMode((m) => m === "AND" ? "OR" : "AND")}
              className="flex items-center gap-1 text-sm text-gray-300 border border-white/[0.10] hover:border-[#2261db]/40 rounded-md px-2.5 py-1 transition-colors">
              {andMode} <ChevronDown className="w-3 h-3 ml-1" />
            </button>
            <button onClick={() => setNotMode((n) => !n)}
              className={`flex items-center gap-1.5 text-sm px-2.5 py-1 rounded-md border transition-colors ${notMode ? "text-red-400 border-red-400/30 bg-red-400/10" : "text-gray-400 border-white/[0.10] hover:border-[#2261db]/40"}`}>
              <span className={`w-3 h-3 rounded-sm border-2 flex-shrink-0 ${notMode ? "border-red-400 bg-red-400" : "border-gray-500"}`} />
              NOT
            </button>
            <button onClick={addCriterion} className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#00cfff] transition-colors">
              <Plus className="w-3.5 h-3.5" /> Add Criteria
            </button>
            <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors ml-auto" onClick={runSearch}>
              {searching ? <Loader2 className="w-4 h-4 animate-spin text-[#00cfff]" /> : <Search className="w-4 h-4 text-gray-400 hover:text-[#00cfff] transition-colors" />}
              <span className="text-sm">Search</span>
            </button>
          </div>
          {criteria.map((c) => (
            <div key={c.id} className="flex items-center gap-2 flex-wrap">
              <select value={c.field} onChange={(e) => updateCriterion(c.id, { field: e.target.value })}
                className="bg-[#1a1a1a] border border-white/[0.10] text-white text-xs rounded-md px-2 py-1.5 outline-none focus:border-[#2261db]/50">
                {FIELD_NAMES.map((f) => <option key={f}>{f}</option>)}
              </select>
              <select value={c.operator} onChange={(e) => updateCriterion(c.id, { operator: e.target.value })}
                className="bg-[#1a1a1a] border border-white/[0.10] text-white text-xs rounded-md px-2 py-1.5 outline-none focus:border-[#2261db]/50">
                <option>contains</option><option>equals</option><option>starts with</option>
              </select>
              <input type="text" value={c.value} onChange={(e) => updateCriterion(c.id, { value: e.target.value })}
                placeholder="value..."
                className="bg-[#1a1a1a] border border-white/[0.10] focus:border-[#2261db]/50 text-white text-xs rounded-md px-2 py-1.5 outline-none placeholder:text-gray-700 w-44"
              />
              <button onClick={() => removeCriterion(c.id)} className="text-gray-600 hover:text-red-400 transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex gap-4">
        {/* Field names sidebar */}
        <div className="w-48 flex-shrink-0 border border-[#2261db]/40 rounded-xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-3 py-3 bg-[#161616] border-b border-white/[0.07]">
            <span className="text-white text-sm font-medium">Field Names</span>
            {selectedField && (
              <button onClick={() => setSelectedField(null)} className="text-gray-600 hover:text-white"><X className="w-3.5 h-3.5" /></button>
            )}
          </div>
          <div className="px-3 py-2 border-b border-white/[0.07] bg-[#131313]">
            <input type="text" placeholder="Search fields" value={fieldSearch} onChange={(e) => setFieldSearch(e.target.value)}
              className="w-full bg-transparent text-gray-400 text-xs outline-none placeholder:text-gray-600"
            />
          </div>
          <div className="bg-[#131313] flex-1 overflow-y-auto">
            {filteredFields.map((f) => (
              <button key={f} onClick={() => setSelectedField(selectedField === f ? null : f)}
                className={`w-full text-left px-3 py-2 text-xs transition-colors border-b border-white/[0.04] ${
                  selectedField === f ? "text-[#00cfff] bg-[#2261db]/10" : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]"
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 border border-[#2261db]/40 rounded-xl overflow-hidden">
          {!results && !searching && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-600 text-sm gap-2">
              <Search className="w-8 h-8 opacity-30" />
              Select a log source and click Search to view results
            </div>
          )}
          {searching && (
            <div className="flex items-center justify-center gap-3 py-20 text-gray-500 text-sm">
              <Loader2 className="w-4 h-4 animate-spin" /> Searching logs...
            </div>
          )}
          {results && results.length === 0 && (
            <div className="flex items-center justify-center py-20 text-gray-600 text-sm">No results found.</div>
          )}
          {results && results.length > 0 && (
            <div className="bg-[#131313]">
              <div className="px-4 py-2.5 border-b border-white/[0.07] bg-[#161616] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">{results.length} results</span>
                  {selectedField && <span className="text-xs text-[#00cfff] bg-[#2261db]/10 border border-[#2261db]/30 px-2 py-0.5 rounded-full">Filtered: {selectedField}</span>}
                  {notMode && <span className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 px-2 py-0.5 rounded-full">NOT mode</span>}
                </div>
                <div className="flex items-center gap-3">
                  {searchedAt && <span className="text-xs text-gray-600">Searched at {searchedAt}</span>}
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-white/[0.08] hover:border-white/20 px-2.5 py-1 rounded-md transition-colors">
                    <Download className="w-3 h-3" /> Export
                  </button>
                </div>
              </div>
              <div className="divide-y divide-white/[0.05]">
                {results.map((row, i) => {
                  const r = row as Record<string, string>
                  const isExpanded = expandedRow === i
                  return (
                    <div key={i}>
                      <button className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-white/[0.02] transition-colors group"
                        onClick={() => setExpandedRow(isExpanded ? null : i)}>
                        <ChevronRight className={`w-3.5 h-3.5 text-gray-600 flex-shrink-0 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                        <div className="flex items-center gap-4 flex-1 min-w-0 flex-wrap">
                          <span className="text-[11px] text-gray-500 font-mono">{r.createdDateTime?.replace("T", " ").replace("Z", "") ?? ""}</span>
                          {r.userPrincipalName && <span className="text-sm text-white">{r.userPrincipalName}</span>}
                          {r.ipAddress && <span className="text-xs text-gray-500 font-mono">{r.ipAddress}</span>}
                          {r.location && <span className="text-xs text-gray-500">{r.location}</span>}
                          {r.riskLevel && r.riskLevel !== "none" && (
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                              r.riskLevel === "high" ? "text-red-400 border-red-400/20 bg-red-400/10" : "text-amber-400 border-amber-400/20 bg-amber-400/10"
                            }`}>{r.riskLevel}</span>
                          )}
                          {r.operationName && <span className="text-xs text-gray-400">{r.operationName}{r.objectId ? `: ${r.objectId}` : ""}</span>}
                          {r.eventType && <span className="text-xs text-amber-400">{r.eventType}</span>}
                        </div>
                      </button>
                      {isExpanded && (
                        <div className="px-10 py-4 bg-[#0f0f0f] border-t border-white/[0.05]">
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(r).map(([key, val]) => (
                              <div key={key} className="flex gap-2 text-xs">
                                <span className="text-[#00cfff] font-mono flex-shrink-0">{key}:</span>
                                <span className="text-gray-300 break-all">{String(val)}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-3 pt-3 border-t border-white/[0.07]">
                            <button className="text-xs bg-[#2261db] hover:bg-[#2261db]/80 text-white px-2.5 py-1.5 rounded-md transition-colors">Run Action on User</button>
                            <button className="text-xs border border-white/[0.10] hover:border-[#2261db]/40 text-gray-400 hover:text-white px-2.5 py-1.5 rounded-md transition-colors">Add to Case</button>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
