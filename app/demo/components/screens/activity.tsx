"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle, Info, RefreshCw, ChevronRight, Download, X } from "lucide-react"

const INITIAL_EVENTS = [
  { id: 1, type: "success", title: "Playbook completed: Credential Stuffing Response", detail: "Session revoked, account disabled, case #4821 created.", time: "2 min ago", user: "AIR Automation", source: "Entra ID", caseId: "4821", actions: ["Revoke User Sign-In Sessions", "Disable User Account"], duration: "1.2s" },
  { id: 2, type: "success", title: "Action executed: Revoke User Sign-In Sessions", detail: "3 sessions revoked for j.morris@contoso.com via Graph API.", time: "14 min ago", user: "AIR Automation", source: "Entra ID", caseId: "4820", actions: ["Revoke User Sign-In Sessions"], duration: "0.9s" },
  { id: 3, type: "alert", title: "Alert triggered: Impossible Travel Detected", detail: "User j.morris@contoso.com logged in from NYC then London 6 minutes apart.", time: "15 min ago", user: "Entra ID", source: "Entra ID", caseId: "4820", actions: [], duration: "—" },
  { id: 4, type: "success", title: "Action executed: Remove Mailbox Forwarding Rule", detail: "Rule-4821 deleted from cfo@contoso.com mailbox.", time: "3 hr ago", user: "AIR Automation", source: "Microsoft 365", caseId: "4818", actions: ["Remove Mailbox Forwarding Rule"], duration: "1.4s" },
  { id: 5, type: "alert", title: "Alert triggered: Suspicious Forwarding Rule", detail: "New inbox rule forwarding all mail to external@gmail.com detected on CFO mailbox.", time: "3 hr ago", user: "Microsoft 365", source: "Microsoft 365", caseId: "4818", actions: [], duration: "—" },
  { id: 6, type: "info", title: "Policy updated: Credential Stuffing Detection", detail: "Threshold updated from 30 to 47 failed logins per 10 min window.", time: "5 hr ago", user: "Security Admin", source: "System", caseId: null, actions: [], duration: "—" },
  { id: 7, type: "success", title: "Playbook completed: Phishing Email Containment", detail: "Email purged from 4 mailboxes, domain blocked at tenant level.", time: "5 hr ago", user: "AIR Automation", source: "Defender", caseId: "4817", actions: ["Purge Email", "Block Sender Domain"], duration: "3.4s" },
  { id: 8, type: "alert", title: "Alert triggered: User-Reported Phishing", detail: "user@contoso.com reported a phishing email from noreply@contoso-secure.net.", time: "5 hr ago", user: "Microsoft Defender", source: "Defender", caseId: "4817", actions: [], duration: "—" },
  { id: 9, type: "info", title: "Integration connected: Microsoft Defender", detail: "Microsoft Defender for Endpoint successfully connected and ingesting alerts.", time: "1 day ago", user: "Security Admin", source: "System", caseId: null, actions: [], duration: "—" },
  { id: 10, type: "info", title: "New user invited: analyst@contoso.com", detail: "SOC Analyst role assigned. Onboarding email sent.", time: "2 days ago", user: "Security Admin", source: "System", caseId: null, actions: [], duration: "—" },
]

const FILTERS = ["All", "Alerts", "Actions", "Info"]

export default function ActivityScreen() {
  const [filter, setFilter] = useState("All")
  const [spinning, setSpinning] = useState(false)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [dismissed, setDismissed] = useState<number[]>([])
  const [events, setEvents] = useState(INITIAL_EVENTS)

  function refresh() {
    setSpinning(true)
    setTimeout(() => {
      setSpinning(false)
      // Simulate a new event
      const newEvent = {
        id: Date.now(),
        type: "success" as const,
        title: "Action executed: List Entra ID Risky Users",
        detail: "Retrieved 2 risky users: j.morris@contoso.com (high), s.chen@contoso.com (medium).",
        time: "just now",
        user: "AIR Automation",
        source: "Entra ID",
        caseId: null,
        actions: ["List Entra ID Risky Users"],
        duration: "0.6s",
      }
      setEvents((e) => [newEvent, ...e])
    }, 1000)
  }

  function dismiss(id: number) {
    setDismissed((d) => [...d, id])
  }

  const filtered = events.filter((e) => {
    if (dismissed.includes(e.id)) return false
    if (filter === "All") return true
    if (filter === "Alerts") return e.type === "alert"
    if (filter === "Actions") return e.type === "success"
    if (filter === "Info") return e.type === "info"
    return true
  })

  return (
    <div className="p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Activity</h1>
          <p className="text-gray-500 text-sm">A live audit trail of all automated actions, alerts, and system events.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-white/[0.08] hover:border-white/20 px-2.5 py-1.5 rounded-md transition-colors">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button onClick={refresh} className="text-gray-500 hover:text-white transition-colors p-2 rounded-md hover:bg-white/[0.05]">
            <RefreshCw className={`w-4 h-4 ${spinning ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-1 border-b border-white/[0.07] mb-5">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
              filter === f ? "border-[#2261db] text-white" : "border-transparent text-gray-500 hover:text-gray-300"
            }`}>
            {f}
            <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full bg-white/[0.06] text-gray-500">
              {events.filter((e) => !dismissed.includes(e.id) && (f === "All" || (f === "Alerts" && e.type === "alert") || (f === "Actions" && e.type === "success") || (f === "Info" && e.type === "info"))).length}
            </span>
          </button>
        ))}
      </div>

      {/* Event list */}
      <div className="border border-white/[0.07] rounded-xl overflow-hidden">
        <div className="divide-y divide-white/[0.05] bg-[#131313]">
          {filtered.length === 0 && (
            <div className="py-12 text-center text-gray-600 text-sm">No events to display.</div>
          )}
          {filtered.map((event) => {
            const Icon = event.type === "success" ? CheckCircle2 : event.type === "alert" ? AlertCircle : Info
            const iconColor = event.type === "success" ? "text-emerald-400" : event.type === "alert" ? "text-amber-400" : "text-blue-400"
            const bgColor = event.type === "success" ? "bg-emerald-400/5" : event.type === "alert" ? "bg-amber-400/5" : "bg-blue-400/5"
            const isExpanded = expandedId === event.id

            return (
              <div key={event.id}>
                <div className="flex items-start gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors group">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${bgColor}`}>
                    <Icon className={`w-4 h-4 ${iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium leading-snug">{event.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{event.detail}</p>
                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                      <span className="text-gray-600 text-[11px]">{event.time}</span>
                      <span className="text-gray-700 text-[10px]">•</span>
                      <span className="text-gray-600 text-[11px]">{event.user}</span>
                      {event.caseId && (
                        <>
                          <span className="text-gray-700 text-[10px]">•</span>
                          <span className="text-[11px] text-[#00cfff]">Case #{event.caseId}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setExpandedId(isExpanded ? null : event.id)}
                      className="text-gray-500 hover:text-white p-1 rounded hover:bg-white/[0.05] transition-colors">
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </button>
                    <button onClick={() => dismiss(event.id)} className="text-gray-600 hover:text-red-400 p-1 rounded hover:bg-white/[0.05] transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-17 py-4 bg-[#0f0f0f] border-t border-white/[0.05] pl-[76px]">
                    <div className="grid grid-cols-3 gap-4 text-xs mb-3">
                      <div><p className="text-gray-600 mb-0.5">Source</p><p className="text-gray-300">{event.source}</p></div>
                      <div><p className="text-gray-600 mb-0.5">Duration</p><p className="text-[#00cfff]">{event.duration}</p></div>
                      <div><p className="text-gray-600 mb-0.5">Triggered by</p><p className="text-gray-300">{event.user}</p></div>
                    </div>
                    {event.actions.length > 0 && (
                      <div className="mb-3">
                        <p className="text-gray-600 text-xs mb-1.5">Actions executed:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {event.actions.map((a) => (
                            <span key={a} className="text-[10px] px-2 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">{a}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {event.caseId && (
                      <button className="text-xs text-[#00cfff] hover:underline">View Case #{event.caseId} →</button>
                    )}
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
