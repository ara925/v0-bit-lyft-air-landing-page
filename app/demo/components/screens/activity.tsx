"use client"

import { useMemo, useState } from "react"
import { CheckCircle2, Clock3, Filter, Loader2, RefreshCw, Search, ShieldAlert } from "lucide-react"

const TABS = ["Actions", "Playbooks"] as const

const ACTION_ACTIVITY = [
  { id: "ACT-1043", name: "List Mailbox Forwarding Rules", integration: "Microsoft", description: "Scanned 142 mailboxes; found 3 forwarding rules, 1 flagged as suspicious (external-cfo-review@gmail.com).", status: "Completed", duration: "2.4s", actor: "Scheduled scan", time: "8 min ago" },
  { id: "ACT-1042", name: "Revoke User Sign-In Sessions", integration: "Microsoft", description: "Revoked 3 active sessions for alex.rivera@company1.example.", status: "Completed", duration: "1.2s", actor: "Security Admin", time: "12 min ago" },
  { id: "ACT-1041", name: "Remove Mailbox Forwarding Rule", integration: "Microsoft", description: "Removed external forwarding rule from finance@company1.example.", status: "Completed", duration: "1.8s", actor: "Policy: BEC Forwarding Rule", time: "14 min ago" },
  { id: "ACT-1040", name: "Get User Sign-In Activity", integration: "Microsoft", description: "Collected 12 sign-in events for morgan.lee@company1.example.", status: "Completed", duration: "0.9s", actor: "Security Admin", time: "33 min ago" },
  { id: "ACT-1039", name: "List Entra ID Risky Users", integration: "Microsoft", description: "Found 2 risky users with high or medium risk.", status: "Completed", duration: "0.7s", actor: "Scheduled check", time: "1h ago" },
  { id: "ACT-1038", name: "Disable User Account", integration: "Microsoft", description: "Blocked sign-in for temp.vendor@company1.example after analyst approval.", status: "Completed", duration: "1.4s", actor: "Security Admin", time: "2h ago" },
  { id: "ACT-1037", name: "List SharePoint Sites", integration: "Microsoft", description: "Indexed 11 SharePoint sites and identified 3 externally shared libraries.", status: "Completed", duration: "2.1s", actor: "Scheduled check", time: "3h ago" },
]

const PLAYBOOK_ACTIVITY = [
  { id: "PB-222", name: "Mailbox Forwarding Rule Detection", integration: "Microsoft", description: "Discovered 1 suspicious rule → removed forwarding to external-cfo-review@gmail.com, revoked user sessions, notified analyst.", status: "Completed", duration: "6.2s", actor: "Scheduled scan", time: "8 min ago" },
  { id: "PB-221", name: "Microsoft Compromised User Accounts", integration: "Microsoft", description: "Revoked sessions, reset password, enabled MFA, and opened case #4821.", status: "Completed", duration: "8.4s", actor: "Policy: Credential Stuffing Detection", time: "22 min ago" },
  { id: "PB-220", name: "Microsoft Phishing Email Containment", integration: "Microsoft", description: "Purged 26 matching messages and quarantined 2 sender domains.", status: "Completed", duration: "12.9s", actor: "Defender alert", time: "1h ago" },
  { id: "PB-219", name: "SharePoint Data Exfiltration Review", integration: "Microsoft", description: "Collected file activity and restricted sharing for Project Atlas.", status: "Completed", duration: "9.8s", actor: "Policy: Mass File Download", time: "5h ago" },
  { id: "PB-218", name: "Privileged Account Lockdown", integration: "Microsoft", description: "Revoked admin sessions and required re-authentication for 2 accounts.", status: "Completed", duration: "7.1s", actor: "Security Admin", time: "Yesterday" },
  { id: "PB-217", name: "Endpoint Isolation Request", integration: "Defender", description: "Generated endpoint isolation request and attached telemetry to case #4816.", status: "Queued", duration: "Pending", actor: "Policy: Active Malware Alert", time: "Yesterday" },
]

export default function ActivityScreen({ dark = false }: { dark?: boolean }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Actions")
  const [search, setSearch] = useState("")
  const [spinning, setSpinning] = useState(false)
  const [refreshNote, setRefreshNote] = useState("Last updated: less than a minute ago")

  const rows = tab === "Actions" ? ACTION_ACTIVITY : PLAYBOOK_ACTIVITY
  const filtered = useMemo(
    () => rows.filter((row) => `${row.id} ${row.name} ${row.integration} ${row.description} ${row.actor}`.toLowerCase().includes(search.toLowerCase())),
    [rows, search]
  )

  function refresh() {
    setSpinning(true)
    setRefreshNote("Checking for new activity...")
    window.setTimeout(() => {
      setSpinning(false)
      setRefreshNote("Last updated: just now")
    }, 900)
  }

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="mb-3 text-[32px] font-bold leading-tight text-[#070707]">Activity</h1>
        <p className="text-[15px] text-[#5f6472]">
          View previously run actions and playbooks, including execution status, duration, actor, and response details.
        </p>
      </div>

      <div className="mb-4 flex items-center gap-1">
        {TABS.map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`rounded border px-3 py-1.5 text-[15px] transition-colors ${
              tab === item ? "border-[#2563eb] bg-white text-[#070707]" : "border-transparent text-[#5f6472] hover:bg-white"
            }`}
          >
            {item}
          </button>
        ))}
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
            placeholder="Search for Integration, Name or Description"
            className="h-12 w-full rounded border border-[#d7dce3] bg-white pl-10 pr-4 text-[15px] outline-none transition-colors focus:border-[#2563eb]"
          />
        </div>
        <span className="ml-4 text-[17px] text-[#5f6472]">{refreshNote}</span>
        <button onClick={refresh} className="rounded border border-[#d7dce3] bg-white p-2 text-[#070707] hover:bg-[#f8fafc]" aria-label="Refresh activity">
          <RefreshCw className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
        </button>
      </div>

      <div className="mb-4 grid grid-cols-4 gap-4">
        <div className="rounded border border-[#d7dce3] bg-white p-4">
          <p className="text-sm text-[#5f6472]">Completed runs</p>
          <p className="mt-1 text-2xl font-semibold text-[#070707]">37</p>
        </div>
        <div className="rounded border border-[#d7dce3] bg-white p-4">
          <p className="text-sm text-[#5f6472]">Queued</p>
          <p className="mt-1 text-2xl font-semibold text-[#070707]">1</p>
        </div>
        <div className="rounded border border-[#d7dce3] bg-white p-4">
          <p className="text-sm text-[#5f6472]">Average duration</p>
          <p className="mt-1 text-2xl font-semibold text-[#070707]">3.8s</p>
        </div>
        <div className="rounded border border-[#d7dce3] bg-white p-4">
          <p className="text-sm text-[#5f6472]">Policy-triggered</p>
          <p className="mt-1 text-2xl font-semibold text-[#070707]">24</p>
        </div>
      </div>

      <div className="overflow-hidden rounded border border-[#d7dce3] bg-white">
        <div className="grid gap-4 border-b border-[#d7dce3] bg-[#fbfbfc] px-4 py-3 text-[15px] text-[#070707]" style={{ gridTemplateColumns: ".65fr 1.35fr 2fr .75fr .7fr .9fr .7fr" }}>
          <div>ID</div>
          <div>Name</div>
          <div>Description</div>
          <div>Integration</div>
          <div>Status</div>
          <div>Actor</div>
          <div>Time</div>
        </div>
        <div className="divide-y divide-[#d7dce3]">
          {filtered.map((row) => (
            <div key={row.id} className="grid items-center gap-4 px-4 py-4 text-[15px] text-[#070707] transition-colors hover:bg-[#f8fafc]" style={{ gridTemplateColumns: ".65fr 1.35fr 2fr .75fr .7fr .9fr .7fr" }}>
              <span className="font-mono text-sm text-[#697386]">{row.id}</span>
              <span className="font-medium">{row.name}</span>
              <span className="truncate text-[#5f6472]">{row.description}</span>
              <span>{row.integration}</span>
              <span className={`inline-flex w-fit items-center gap-1.5 rounded border px-2 py-1 text-sm ${
                row.status === "Completed" ? "border-[#b7ebc6] bg-[#ecfdf3] text-[#166534]" : "border-[#fedf89] bg-[#fffaeb] text-[#92400e]"
              }`}>
                {row.status === "Completed" ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock3 className="h-3.5 w-3.5" />}
                {row.status}
              </span>
              <span className="truncate text-[#5f6472]">{row.actor}</span>
              <span className="text-[#5f6472]">{row.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded border border-[#d7dce3] bg-white p-4">
        <div className="mb-2 flex items-center gap-2 text-[#070707]">
          {spinning ? <Loader2 className="h-4 w-4 animate-spin text-[#2563eb]" /> : <ShieldAlert className="h-4 w-4 text-[#2563eb]" />}
          <p className="font-medium">Latest response summary</p>
        </div>
        <p className="text-[15px] text-[#5f6472]">
          Company #1 has 5 high-priority response items in the last 24 hours. Four were completed automatically and one endpoint isolation request is queued for analyst approval.
        </p>
      </div>
    </div>
  )
}
