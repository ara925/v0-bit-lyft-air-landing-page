"use client"

import { useState } from "react"
import { SlidersHorizontal, Search, RefreshCw, Settings, CheckCircle2, Loader2, ArrowUp, X } from "lucide-react"

const ACTIONS = [
  { name: "Enable Microsoft 365 Audit Subscriptions", description: "Turns on management API audit logging for General, Exchange, SharePoint, and Azure AD workloads.", integration: "Microsoft", category: "IT OPS" },
  { name: "List Microsoft 365 Audit Subscriptions", description: "List management API audit logging for General, Exchange, SharePoint, and Azure AD workloads.", integration: "Microsoft", category: "IT OPS" },
  { name: "Assign User to Conditional Access Policy", description: "Add a user to an access policy", integration: "Microsoft", category: "SEC OPS" },
  { name: "List Conditional Access Policies", description: "List all access policies in the tenant", integration: "Microsoft", category: "SEC OPS" },
  { name: "Get Conditional Access Policy Details", description: "List all access policies in the tenant", integration: "Microsoft", category: "SEC OPS" },
  { name: "Ensure BitLyft MFA Conditional Access Policy", description: "Ensures the existence of a conditional access policy named BitLyft MFA Policy.", integration: "Microsoft", category: "SEC OPS" },
  { name: "List Azure Domains", description: "Lists all domains associated with the Azure tenant.", integration: "Microsoft", category: "IT OPS" },
  { name: "List SharePoint Sites", description: "List SharePoint Sites information.", integration: "Microsoft", category: "IT OPS" },
  { name: "Revoke User Sign-In Sessions", description: "Immediately revoke all active sessions for a specified user account.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Disable User Account", description: "Block sign-in for a user by setting accountEnabled to false via Graph API.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Reset User Password", description: "Force a password reset for a user and require update on next sign-in.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Remove Mailbox Forwarding Rule", description: "Delete a specific inbox rule from a user mailbox to stop unauthorized email forwarding.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Add User to Group", description: "Adds a user to a domain group.", integration: "Microsoft", category: "IT OPS" },
  { name: "Enable MFA for User", description: "Enforce multi-factor authentication for a specific user account.", integration: "Microsoft", category: "SEC OPS" },
  { name: "List Entra ID Risky Users", description: "Retrieve the list of users currently flagged as risky in Microsoft Entra ID.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Get User Sign-In Activity", description: "Retrieve recent sign-in logs for a user to support incident investigation.", integration: "Microsoft", category: "SEC OPS" },
]

interface RunState {
  status: "idle" | "running" | "done"
  output?: string
}

export default function ActionsScreen() {
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [runStates, setRunStates] = useState<Record<string, RunState>>({})
  const [modalAction, setModalAction] = useState<string | null>(null)
  const [inputValues, setInputValues] = useState<Record<string, string>>({})
  const [showFilters, setShowFilters] = useState(false)

  const filtered = ACTIONS.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
    const matchCategory = categoryFilter === "All" || a.category === categoryFilter
    return matchSearch && matchCategory
  })

  function openRun(name: string) {
    setModalAction(name)
  }

  async function executeAction(name: string) {
    setModalAction(null)
    setRunStates((prev) => ({ ...prev, [name]: { status: "running" } }))
    await new Promise((r) => setTimeout(r, 1800))
    const target = inputValues[name] || "user@contoso.com"
    const outputs: Record<string, string> = {
      "Revoke User Sign-In Sessions": `Successfully revoked 3 active sessions for ${target}`,
      "Disable User Account": `Account disabled. accountEnabled set to false for ${target}`,
      "Remove Mailbox Forwarding Rule": `Forwarding rule 'Rule-4821' deleted from ${target} mailbox`,
      "Reset User Password": `Password reset enforced. ${target} will be prompted on next login.`,
      "Enable MFA for User": `MFA policy applied. Conditional Access updated for ${target}`,
      "Assign User to Conditional Access Policy": `${target} added to BitLyft MFA Policy successfully.`,
      "List Entra ID Risky Users": "Found 2 risky users: j.morris@contoso.com (high), s.chen@contoso.com (medium)",
      "Get User Sign-In Activity": `Retrieved 12 sign-in events for ${target} from the last 7 days.`,
      "Add User to Group": `${target} added to Security-Admins group successfully.`,
      "List SharePoint Sites": "Found 8 SharePoint sites in contoso.onmicrosoft.com tenant.",
      "List Azure Domains": "Domains: contoso.com, contoso.onmicrosoft.com (2 total)",
      "List Conditional Access Policies": "Found 4 policies: BitLyft MFA Policy, Block Legacy Auth, Require Compliant Device, Terms of Use.",
      "Enable Microsoft 365 Audit Subscriptions": "Audit subscriptions enabled for: General, Exchange, SharePoint, AzureActiveDirectory.",
      "List Microsoft 365 Audit Subscriptions": "Active subscriptions: General, Exchange, SharePoint, AzureActiveDirectory.",
    }
    setRunStates((prev) => ({
      ...prev,
      [name]: {
        status: "done",
        output: outputs[name] || `Action completed successfully at ${new Date().toLocaleTimeString()}`,
      },
    }))
  }

  const state = (name: string): RunState => runStates[name] ?? { status: "idle" }

  // Determine if an action needs a user input or not
  const NEEDS_USER = ["Revoke User Sign-In Sessions", "Disable User Account", "Remove Mailbox Forwarding Rule", "Reset User Password", "Enable MFA for User", "Assign User to Conditional Access Policy", "Get User Sign-In Activity", "Add User to Group", "Get Conditional Access Policy Details"]
  const NEEDS_POLICY = ["Assign User to Conditional Access Policy", "Get Conditional Access Policy Details"]

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-white mb-1">Actions</h1>
        <p className="text-gray-500 text-sm">Individual automated actions that can be run manually or mapped to policies for automated response.</p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 mb-3">
        <button onClick={() => setShowFilters((v) => !v)} className={`flex items-center gap-2 text-sm border px-3 py-2 rounded-md transition-colors hover:bg-white/[0.04] ${showFilters ? "border-[#2261db]/50 text-[#00cfff]" : "text-gray-300 border-white/[0.10] hover:border-white/20"}`}>
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Filters
        </button>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for Integration, Name or Description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1a1a1a] border border-white/[0.10] focus:border-[#2261db]/50 text-white text-sm rounded-md pl-9 pr-4 py-2 outline-none transition-colors placeholder:text-gray-600"
          />
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="hidden sm:block">Last updated: less than a minute ago</span>
          <button className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/[0.05]">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      {showFilters && (
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {["All", "SEC OPS", "IT OPS"].map((cat) => (
            <button key={cat} onClick={() => setCategoryFilter(cat)}
              className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                categoryFilter === cat ? "bg-[#2261db]/20 border-[#2261db]/50 text-[#00cfff]" : "border-white/[0.10] text-gray-400 hover:border-white/20 hover:text-white"
              }`}>{cat}</button>
          ))}
          <span className="text-gray-600 text-xs ml-2">{filtered.length} actions</span>
        </div>
      )}

      {/* Table */}
      <div className="border border-[#2261db]/40 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid gap-4 px-5 py-3 bg-[#151515] border-b border-white/[0.07] text-xs text-gray-500 uppercase tracking-wider" style={{ gridTemplateColumns: "2fr 3fr 1fr 1fr auto" }}>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">Name <ArrowUp className="w-3 h-3" /></div>
          <div>Description</div>
          <div>Integration</div>
          <div>Category</div>
          <div />
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/[0.05] bg-[#131313]">
          {filtered.map((action) => {
            const s = state(action.name)
            return (
              <div key={action.name}>
                <div
                  className="grid gap-4 px-5 py-4 items-center hover:bg-white/[0.02] transition-colors"
                  style={{ gridTemplateColumns: "2fr 3fr 1fr 1fr auto" }}
                >
                  <span className="text-white text-sm">{action.name}</span>
                  <span className="text-gray-500 text-sm truncate">{action.description}</span>
                  <span className="text-gray-400 text-sm">{action.integration}</span>
                  <span className="text-gray-400 text-sm">{action.category}</span>
                  <div className="flex items-center gap-2">
                    {s.status === "running" ? (
                      <button disabled className="flex items-center gap-1.5 text-xs bg-[#2261db]/40 text-white px-3 py-1.5 rounded-md cursor-not-allowed">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        Running
                      </button>
                    ) : s.status === "done" ? (
                      <button
                        onClick={() => openRun(action.name)}
                        className="flex items-center gap-1.5 text-xs bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-md hover:bg-emerald-500/30 transition-colors"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        Done
                      </button>
                    ) : (
                      <button
                        onClick={() => openRun(action.name)}
                        className="text-xs bg-[#1e1e1e] border border-white/[0.12] hover:border-[#2261db]/50 hover:bg-[#2261db]/10 text-white px-3 py-1.5 rounded-md transition-colors"
                      >
                        Run
                      </button>
                    )}
                    <button className="text-gray-600 hover:text-gray-400 transition-colors p-1 rounded hover:bg-white/[0.05]">
                      <Settings className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                {/* Output row */}
                {s.status === "done" && s.output && (
                  <div className="px-5 pb-3">
                    <div className="flex items-start gap-2 bg-emerald-400/5 border border-emerald-400/15 rounded-lg px-4 py-2.5 text-xs text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      {s.output}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-gray-600 text-sm">No actions match your search.</div>
          )}
        </div>
      </div>

      {/* Run modal */}
      {modalAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setModalAction(null)}>
          <div className="bg-[#1a1a1a] border border-white/[0.10] rounded-2xl p-6 w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-1 gap-2">
              <h3 className="text-white font-semibold text-base">{modalAction}</h3>
              <button onClick={() => setModalAction(null)} className="text-gray-600 hover:text-white flex-shrink-0"><X className="w-4 h-4" /></button>
            </div>
            <p className="text-gray-500 text-sm mb-5">{ACTIONS.find((a) => a.name === modalAction)?.description}</p>
            <div className="space-y-4 mb-5">
              {NEEDS_USER.includes(modalAction) && (
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Target User (UPN or Object ID)</label>
                  <input type="text" value={inputValues[modalAction] ?? ""}
                    onChange={(e) => setInputValues((v) => ({ ...v, [modalAction]: e.target.value }))}
                    placeholder="e.g. user@contoso.com"
                    className="w-full bg-[#111] border border-white/[0.10] focus:border-[#2261db]/50 text-white text-sm rounded-md px-3 py-2 outline-none placeholder:text-gray-600"
                    autoFocus
                  />
                </div>
              )}
              {NEEDS_POLICY.includes(modalAction) && (
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Policy Name</label>
                  <select className="w-full bg-[#111] border border-white/[0.10] text-white text-sm rounded-md px-3 py-2 outline-none">
                    <option>BitLyft MFA Policy</option>
                    <option>Block Legacy Auth</option>
                    <option>Require Compliant Device</option>
                  </select>
                </div>
              )}
              {!NEEDS_USER.includes(modalAction) && !NEEDS_POLICY.includes(modalAction) && (
                <p className="text-gray-600 text-xs">This action requires no additional input. Click Run to execute immediately.</p>
              )}
            </div>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setModalAction(null)} className="text-sm text-gray-400 hover:text-white px-4 py-2 rounded-md border border-white/[0.08] hover:border-white/20 transition-colors">
                Cancel
              </button>
              <button onClick={() => executeAction(modalAction)} className="text-sm bg-[#2261db] hover:bg-[#2261db]/80 text-white px-4 py-2 rounded-md transition-colors font-medium">
                Run Action
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
