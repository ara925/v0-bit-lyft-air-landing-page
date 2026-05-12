"use client"

import { useState } from "react"
import { ArrowUp, CheckCircle2, Loader2, Play, RefreshCw, Search, Settings, SlidersHorizontal, X } from "lucide-react"

const ACTIONS = [
  { name: "Enable Microsoft 365 Audit Subscriptions", description: "Turns on management API audit logging for General, Exchange, SharePoint, and Entra ID workloads.", integration: "Microsoft", category: "IT OPS" },
  { name: "List Microsoft 365 Audit Subscriptions", description: "Lists active management API audit subscriptions and workload status.", integration: "Microsoft", category: "IT OPS" },
  { name: "Assign User to Conditional Access Policy", description: "Adds a user to a conditional access policy used for containment.", integration: "Microsoft", category: "SEC OPS" },
  { name: "List Conditional Access Policies", description: "Lists active, report-only, and disabled access policies in the tenant.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Get Conditional Access Policy Details", description: "Retrieves controls, assignments, exclusions, and enforcement status.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Ensure BitLyft MFA Conditional Access Policy", description: "Creates or updates the BitLyft MFA policy if required.", integration: "Microsoft", category: "SEC OPS" },
  { name: "List Azure Domains", description: "Lists verified and managed domains associated with the tenant.", integration: "Microsoft", category: "IT OPS" },
  { name: "List SharePoint Sites", description: "Lists SharePoint sites with storage, owner, and sharing posture details.", integration: "Microsoft", category: "IT OPS" },
  { name: "Revoke User Sign-In Sessions", description: "Immediately revokes active refresh tokens for a user account.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Disable User Account", description: "Blocks sign-in for a user by setting accountEnabled to false.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Reset User Password", description: "Forces a password reset and requires update on next sign-in.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Remove Mailbox Forwarding Rule", description: "Deletes a suspicious inbox forwarding rule from a user mailbox.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Add User to Group", description: "Adds a user to a delegated security or operations group.", integration: "Microsoft", category: "IT OPS" },
  { name: "Enable MFA for User", description: "Enforces MFA controls for a specific user account.", integration: "Microsoft", category: "SEC OPS" },
  { name: "List Entra ID Risky Users", description: "Retrieves users currently flagged as risky in Microsoft Entra ID.", integration: "Microsoft", category: "SEC OPS" },
  { name: "Get User Sign-In Activity", description: "Retrieves recent successful, failed, and interrupted sign-in events.", integration: "Microsoft", category: "SEC OPS" },
]

interface RunState {
  status: "idle" | "running" | "done"
  output?: string
  ranAt?: string
}

const NEEDS_USER = [
  "Revoke User Sign-In Sessions",
  "Disable User Account",
  "Remove Mailbox Forwarding Rule",
  "Reset User Password",
  "Enable MFA for User",
  "Assign User to Conditional Access Policy",
  "Get User Sign-In Activity",
  "Add User to Group",
  "Get Conditional Access Policy Details",
]

const NEEDS_POLICY = ["Assign User to Conditional Access Policy", "Get Conditional Access Policy Details"]

export default function ActionsScreen() {
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [runStates, setRunStates] = useState<Record<string, RunState>>({})
  const [modalAction, setModalAction] = useState<string | null>(null)
  const [inputValues, setInputValues] = useState<Record<string, string>>({})
  const [showFilters, setShowFilters] = useState(false)
  const [spinning, setSpinning] = useState(false)

  const filtered = ACTIONS.filter((action) => {
    const haystack = `${action.name} ${action.description} ${action.integration} ${action.category}`.toLowerCase()
    const matchSearch = haystack.includes(search.toLowerCase())
    const matchCategory = categoryFilter === "All" || action.category === categoryFilter
    return matchSearch && matchCategory
  })

  function refresh() {
    setSpinning(true)
    window.setTimeout(() => setSpinning(false), 900)
  }

  async function executeAction(name: string) {
    setModalAction(null)
    setRunStates((previous) => ({ ...previous, [name]: { status: "running" } }))
    await new Promise((resolve) => window.setTimeout(resolve, 1500))

    const target = inputValues[name] || "alex.rivera@company1.example"
    const outputs: Record<string, string> = {
      "Revoke User Sign-In Sessions": `Successfully revoked 3 active sessions for ${target}.`,
      "Disable User Account": `Account disabled for ${target}; sign-in blocked in Entra ID.`,
      "Remove Mailbox Forwarding Rule": `Forwarding rule "External CFO Review" deleted from ${target}.`,
      "Reset User Password": `Password reset enforced for ${target}; next sign-in requires an update.`,
      "Enable MFA for User": `MFA controls applied to ${target}; Conditional Access assignment updated.`,
      "Assign User to Conditional Access Policy": `${target} added to BitLyft MFA Policy successfully.`,
      "List Entra ID Risky Users": "Found 2 risky users: alex.rivera@company1.example (high), morgan.lee@company1.example (medium).",
      "Get User Sign-In Activity": `Retrieved 12 sign-in events for ${target} from the last 7 days.`,
      "Add User to Group": `${target} added to Security-Responders group successfully.`,
      "List SharePoint Sites": "Found 11 SharePoint sites in the company1.onmicrosoft.com tenant.",
      "List Azure Domains": "Domains: company1.example, company1.onmicrosoft.com, air.company1.example (3 total).",
      "List Conditional Access Policies": "Found 5 policies: BitLyft MFA Policy, Block Legacy Auth, Require Compliant Device, Restrict Admin Portals, Terms of Use.",
      "Enable Microsoft 365 Audit Subscriptions": "Audit subscriptions enabled for General, Exchange, SharePoint, and AzureActiveDirectory.",
      "List Microsoft 365 Audit Subscriptions": "Active subscriptions: General, Exchange, SharePoint, AzureActiveDirectory.",
      "Get Conditional Access Policy Details": "BitLyft MFA Policy: 1,842 included users, 18 excluded service principals, enforced.",
      "Ensure BitLyft MFA Conditional Access Policy": "BitLyft MFA Policy is present, enabled, and aligned with the expected configuration.",
    }

    setRunStates((previous) => ({
      ...previous,
      [name]: {
        status: "done",
        output: outputs[name] || `Action completed successfully at ${new Date().toLocaleTimeString()}.`,
        ranAt: "just now",
      },
    }))
  }

  const state = (name: string): RunState => runStates[name] ?? { status: "idle" }

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="mb-3 text-[32px] font-bold leading-tight text-[#070707]">Actions</h1>
        <p className="text-[15px] text-[#5f6472]">
          Individual automated actions that can be run manually or mapped to policies for automated response.
        </p>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <button
          onClick={() => setShowFilters((value) => !value)}
          className={`flex h-12 items-center gap-2 rounded border px-3 text-[15px] transition-colors ${
            showFilters ? "border-[#2563eb] bg-[#eff6ff] text-[#070707]" : "border-[#d7dce3] bg-white text-[#070707] hover:bg-[#f8fafc]"
          }`}
        >
          <SlidersHorizontal className="h-4 w-4" />
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
        <span className="ml-4 text-[17px] text-[#5f6472]">Last updated: less than a minute ago</span>
        <button onClick={refresh} className="rounded border border-[#d7dce3] bg-white p-2 text-[#070707] hover:bg-[#f8fafc]" aria-label="Refresh actions">
          <RefreshCw className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
        </button>
      </div>

      {showFilters && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {["All", "SEC OPS", "IT OPS"].map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`rounded border px-3 py-1.5 text-sm transition-colors ${
                categoryFilter === category ? "border-[#2563eb] bg-[#eff6ff] text-[#070707]" : "border-[#d7dce3] bg-white text-[#5f6472] hover:bg-[#f8fafc]"
              }`}
            >
              {category}
            </button>
          ))}
          <span className="text-sm text-[#697386]">{filtered.length} actions</span>
        </div>
      )}

      <div className="overflow-hidden rounded border border-[#d7dce3] bg-white">
        <div className="grid gap-4 border-b border-[#d7dce3] bg-[#fbfbfc] px-4 py-3 text-[15px] text-[#070707]" style={{ gridTemplateColumns: "1.5fr 2fr .7fr .6fr auto" }}>
          <div className="flex items-center gap-1">Name <ArrowUp className="h-3.5 w-3.5" /></div>
          <div>Description</div>
          <div>Integration</div>
          <div>Category</div>
          <div />
        </div>

        <div className="divide-y divide-[#d7dce3]">
          {filtered.map((action) => {
            const actionState = state(action.name)
            return (
              <div key={action.name}>
                <div className="grid items-center gap-4 px-4 py-4 text-[15px] text-[#070707] transition-colors hover:bg-[#f8fafc]" style={{ gridTemplateColumns: "1.5fr 2fr .7fr .6fr auto" }}>
                  <span className="font-medium">{action.name}</span>
                  <span className="truncate text-[#5f6472]">{action.description}</span>
                  <span>{action.integration}</span>
                  <span className="inline-flex w-fit rounded border border-[#d7dce3] bg-[#f7f8fa] px-2 py-1 text-sm text-[#5f6472]">{action.category}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalAction(action.name)}
                      disabled={actionState.status === "running"}
                      className={`inline-flex h-8 items-center gap-1.5 rounded border px-3 text-sm transition-colors disabled:cursor-not-allowed ${
                        actionState.status === "done"
                          ? "border-[#b7ebc6] bg-[#ecfdf3] text-[#166534]"
                          : "border-[#d7dce3] bg-white text-[#070707] hover:bg-[#f8fafc]"
                      }`}
                    >
                      {actionState.status === "running" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : actionState.status === "done" ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                      {actionState.status === "running" ? "Running" : actionState.status === "done" ? "Run again" : "Run"}
                    </button>
                    <button className="rounded border border-[#d7dce3] bg-white p-2 text-[#070707] hover:bg-[#f8fafc]" aria-label={`Settings for ${action.name}`}>
                      <Settings className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                {actionState.status === "done" && actionState.output && (
                  <div className="px-4 pb-4">
                    <div className="flex items-start gap-2 rounded border border-[#b7ebc6] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Completed {actionState.ranAt}</p>
                        <p>{actionState.output}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {modalAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/40 px-4" onClick={() => setModalAction(null)}>
          <div className="w-full max-w-md rounded border border-[#d7dce3] bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-[#070707]">{modalAction}</h3>
              <button onClick={() => setModalAction(null)} className="rounded p-1 text-[#697386] hover:bg-[#f2f4f7]" aria-label="Close run action modal">
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mb-5 text-[15px] text-[#5f6472]">{ACTIONS.find((action) => action.name === modalAction)?.description}</p>

            <div className="mb-5 space-y-4">
              {NEEDS_USER.includes(modalAction) && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#344054]">Target User (UPN or Object ID)</label>
                  <input
                    type="text"
                    value={inputValues[modalAction] ?? ""}
                    onChange={(event) => setInputValues((values) => ({ ...values, [modalAction]: event.target.value }))}
                    placeholder="e.g. alex.rivera@company1.example"
                    className="h-10 w-full rounded border border-[#d7dce3] bg-white px-3 text-[15px] outline-none transition-colors focus:border-[#2563eb]"
                    autoFocus
                  />
                </div>
              )}
              {NEEDS_POLICY.includes(modalAction) && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#344054]">Policy Name</label>
                  <select className="h-10 w-full rounded border border-[#d7dce3] bg-white px-3 text-[15px] outline-none transition-colors focus:border-[#2563eb]">
                    <option>BitLyft MFA Policy</option>
                    <option>Block Legacy Auth</option>
                    <option>Require Compliant Device</option>
                    <option>Restrict Admin Portals</option>
                  </select>
                </div>
              )}
              {!NEEDS_USER.includes(modalAction) && !NEEDS_POLICY.includes(modalAction) && (
                <p className="rounded border border-[#d7dce3] bg-[#f8fafc] px-3 py-2 text-sm text-[#5f6472]">
                  This action requires no additional input. Click Run Action to execute the simulation.
                </p>
              )}
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={() => setModalAction(null)} className="rounded border border-[#d7dce3] bg-white px-4 py-2 text-sm text-[#070707] transition-colors hover:bg-[#f8fafc]">
                Cancel
              </button>
              <button onClick={() => executeAction(modalAction)} className="rounded bg-[#2563eb] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8]">
                Run Action
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
