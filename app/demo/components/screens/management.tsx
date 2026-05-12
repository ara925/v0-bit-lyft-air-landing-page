"use client"

import { useState } from "react"
import { Plus, X, CheckCircle2, Settings, Wifi, WifiOff, RefreshCw } from "lucide-react"

const INTEGRATIONS_DATA = [
  { id: "entra", name: "Microsoft Entra ID", desc: "Identity & access management, sign-in logs, risky users.", status: "Connected", lastSync: "1 min ago", events: 2841, logo: "MS" },
  { id: "m365", name: "Microsoft 365", desc: "Exchange, SharePoint, Teams audit logs and mailbox events.", status: "Connected", lastSync: "3 min ago", events: 1204, logo: "M3" },
  { id: "defender", name: "Microsoft Defender", desc: "Endpoint and email threat detection alerts.", status: "Connected", lastSync: "5 min ago", events: 388, logo: "MD" },
  { id: "okta", name: "Okta", desc: "Identity provider — SSO, MFA, and user lifecycle events.", status: "Disconnected", lastSync: "—", events: 0, logo: "OK" },
  { id: "crowdstrike", name: "CrowdStrike Falcon", desc: "Endpoint detection and response (EDR) alerts.", status: "Disconnected", lastSync: "—", events: 0, logo: "CS" },
  { id: "gworkspace", name: "Google Workspace", desc: "Gmail, Drive, Admin audit logs.", status: "Disconnected", lastSync: "—", events: 0, logo: "GW" },
]

const TEAM_MEMBERS = [
  { name: "Security Admin", email: "admin@contoso.com", role: "Admin", status: "Active" },
  { name: "SOC Analyst", email: "analyst@contoso.com", role: "Analyst", status: "Active" },
]

export default function ManagementScreen() {
  const [tab, setTab] = useState("Integrations")
  const [integrations, setIntegrations] = useState(INTEGRATIONS_DATA)
  const [members, setMembers] = useState(TEAM_MEMBERS)
  const [showInvite, setShowInvite] = useState(false)
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteRole, setInviteRole] = useState("Analyst")
  const [syncing, setSyncing] = useState<string | null>(null)
  const [configuring, setConfiguring] = useState<string | null>(null)

  function toggleIntegration(id: string) {
    setIntegrations((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, status: i.status === "Connected" ? "Disconnected" : "Connected", lastSync: i.status === "Disconnected" ? "just now" : "—", events: i.status === "Disconnected" ? Math.floor(Math.random() * 500 + 100) : 0 }
          : i
      )
    )
    setConfiguring(null)
  }

  function syncIntegration(id: string) {
    setSyncing(id)
    setTimeout(() => {
      setSyncing(null)
      setIntegrations((prev) => prev.map((i) => i.id === id ? { ...i, lastSync: "just now" } : i))
    }, 1500)
  }

  function sendInvite() {
    if (!inviteEmail) return
    setMembers((m) => [...m, { name: inviteEmail.split("@")[0], email: inviteEmail, role: inviteRole, status: "Pending" }])
    setInviteEmail("")
    setShowInvite(false)
  }

  function removeIntegration(id: string) {
    setIntegrations((prev) => prev.map((i) => i.id === id ? { ...i, status: "Disconnected", lastSync: "—", events: 0 } : i))
    setConfiguring(null)
  }

  const TABS = ["Integrations", "Team Members", "API Keys"]

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-white mb-4">Management</h1>
        <div className="flex items-center gap-1 border-b border-white/[0.07]">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
                tab === t ? "border-[#2261db] text-white" : "border-transparent text-gray-500 hover:text-gray-300"
              }`}>{t}</button>
          ))}
        </div>
      </div>

      {/* ── INTEGRATIONS ── */}
      {tab === "Integrations" && (
        <div className="space-y-3">
          <p className="text-gray-400 text-sm mb-4">Connect your security tools to BitLyft AIR to enable automated ingestion and response.</p>
          {integrations.map((int) => (
            <div key={int.id} className="border border-white/[0.07] bg-[#161616] rounded-xl p-5 hover:border-[#2261db]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2261db]/20 border border-[#2261db]/30 flex items-center justify-center text-xs font-bold text-[#00cfff] flex-shrink-0">
                  {int.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5">
                    <p className="text-white font-medium text-sm">{int.name}</p>
                    <span className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border ${
                      int.status === "Connected" ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/10" : "text-gray-500 border-gray-700 bg-white/[0.03]"
                    }`}>
                      {int.status === "Connected" ? <Wifi className="w-2.5 h-2.5" /> : <WifiOff className="w-2.5 h-2.5" />}
                      {int.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">{int.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    {int.status === "Connected" && (
                      <>
                        <span>Last sync: {int.lastSync}</span>
                        <span>{int.events.toLocaleString()} events</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {int.status === "Connected" && (
                    <button onClick={() => syncIntegration(int.id)}
                      className="text-gray-500 hover:text-white p-1.5 rounded-md hover:bg-white/[0.05] transition-colors">
                      <RefreshCw className={`w-3.5 h-3.5 ${syncing === int.id ? "animate-spin" : ""}`} />
                    </button>
                  )}
                  <button onClick={() => setConfiguring(configuring === int.id ? null : int.id)}
                    className="text-gray-500 hover:text-white p-1.5 rounded-md hover:bg-white/[0.05] transition-colors">
                    <Settings className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => toggleIntegration(int.id)}
                    className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                      int.status === "Connected"
                        ? "border-red-400/20 text-red-400 hover:bg-red-400/10"
                        : "border-[#2261db]/40 text-[#00cfff] bg-[#2261db]/10 hover:bg-[#2261db]/20"
                    }`}>
                    {int.status === "Connected" ? "Disconnect" : "Connect"}
                  </button>
                </div>
              </div>
              {configuring === int.id && (
                <div className="mt-4 pt-4 border-t border-white/[0.07] space-y-3">
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Configuration</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Tenant / Org ID</label>
                      <input defaultValue="contoso.onmicrosoft.com" className="w-full bg-[#111] border border-white/[0.10] focus:border-[#2261db]/50 text-white text-sm rounded-md px-3 py-2 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">API Scope</label>
                      <select className="w-full bg-[#111] border border-white/[0.10] text-white text-sm rounded-md px-3 py-2 outline-none">
                        <option>Read + Write</option><option>Read Only</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setConfiguring(null)} className="text-xs bg-[#2261db] hover:bg-[#2261db]/80 text-white px-3 py-1.5 rounded-md transition-colors">Save</button>
                    <button onClick={() => removeIntegration(int.id)} className="text-xs border border-red-400/20 text-red-400 hover:bg-red-400/10 px-3 py-1.5 rounded-md transition-colors">Remove</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── TEAM MEMBERS ── */}
      {tab === "Team Members" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm">{members.length} member{members.length !== 1 ? "s" : ""} in Demo Workspace</p>
            <button onClick={() => setShowInvite(true)}
              className="flex items-center gap-1.5 text-sm bg-[#2261db] hover:bg-[#2261db]/80 text-white px-3 py-2 rounded-md transition-colors">
              <Plus className="w-3.5 h-3.5" /> Invite Member
            </button>
          </div>
          <div className="border border-white/[0.07] rounded-xl overflow-hidden">
            <div className="grid px-5 py-3 bg-[#151515] border-b border-white/[0.07] text-xs text-gray-500 uppercase tracking-wider" style={{ gridTemplateColumns: "1fr 2fr 1fr 1fr auto" }}>
              <div>Name</div><div>Email</div><div>Role</div><div>Status</div><div />
            </div>
            <div className="divide-y divide-white/[0.05] bg-[#131313]">
              {members.map((m, i) => (
                <div key={i} className="grid gap-4 px-5 py-4 items-center hover:bg-white/[0.02] transition-colors" style={{ gridTemplateColumns: "1fr 2fr 1fr 1fr auto" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#2261db]/30 border border-[#2261db]/40 flex items-center justify-center text-[10px] font-bold text-[#00cfff] flex-shrink-0">
                      {m.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-white text-sm truncate">{m.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm truncate">{m.email}</span>
                  <span className="text-gray-400 text-sm">{m.role}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border w-fit ${
                    m.status === "Active" ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/10"
                    : "text-amber-400 border-amber-400/20 bg-amber-400/10"
                  }`}>{m.status}</span>
                  <button onClick={() => setMembers((ms) => ms.filter((_, j) => j !== i))}
                    className="text-gray-600 hover:text-red-400 transition-colors p-1 rounded hover:bg-white/[0.05]">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── API KEYS ── */}
      {tab === "API Keys" && (
        <div className="space-y-3">
          <p className="text-gray-400 text-sm mb-4">Use API keys to integrate BitLyft AIR with external systems or automation scripts.</p>
          {[
            { name: "Production Key", key: "air_prod_••••••••••••Kx9z", created: "Mar 1, 2026", lastUsed: "2 min ago" },
            { name: "CI Pipeline Key", key: "air_ci_••••••••••••4Lmn", created: "Jan 15, 2026", lastUsed: "5 days ago" },
          ].map((k) => (
            <div key={k.name} className="border border-white/[0.07] bg-[#161616] rounded-xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">{k.name}</p>
                  <p className="text-gray-600 text-xs font-mono mt-1">{k.key}</p>
                  <p className="text-gray-600 text-xs mt-1">Created {k.created} · Last used {k.lastUsed}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs border border-white/[0.10] hover:border-[#2261db]/40 text-gray-400 hover:text-white px-3 py-1.5 rounded-md transition-colors">Reveal</button>
                  <button className="text-xs border border-red-400/20 text-red-400 hover:bg-red-400/10 px-3 py-1.5 rounded-md transition-colors">Revoke</button>
                </div>
              </div>
            </div>
          ))}
          <button className="flex items-center gap-1.5 text-sm border border-[#2261db]/40 text-[#00cfff] hover:bg-[#2261db]/10 px-3 py-2 rounded-md transition-colors">
            <Plus className="w-3.5 h-3.5" /> Generate New Key
          </button>
        </div>
      )}

      {/* Invite modal */}
      {showInvite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowInvite(false)}>
          <div className="bg-[#1a1a1a] border border-white/[0.10] rounded-2xl p-6 w-full max-w-sm shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Invite Team Member</h3>
              <button onClick={() => setShowInvite(false)} className="text-gray-600 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Email address</label>
                <input type="email" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="colleague@company.com"
                  className="w-full bg-[#111] border border-white/[0.10] focus:border-[#2261db]/50 text-white text-sm rounded-md px-3 py-2 outline-none placeholder:text-gray-600"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Role</label>
                <select value={inviteRole} onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full bg-[#111] border border-white/[0.10] text-white text-sm rounded-md px-3 py-2 outline-none">
                  <option>Admin</option><option>Analyst</option><option>Read Only</option>
                </select>
              </div>
              <div className="flex gap-2 justify-end pt-1">
                <button onClick={() => setShowInvite(false)} className="text-sm text-gray-400 hover:text-white px-4 py-2 rounded-md border border-white/[0.08] hover:border-white/20 transition-colors">Cancel</button>
                <button onClick={sendInvite} className="text-sm bg-[#2261db] hover:bg-[#2261db]/80 text-white px-4 py-2 rounded-md transition-colors font-medium">Send Invite</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
