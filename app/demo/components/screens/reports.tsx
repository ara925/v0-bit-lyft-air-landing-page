"use client"

import { useState } from "react"
import { Download, FileText, RefreshCw, Plus, Calendar, BarChart2, Shield, Zap } from "lucide-react"

const REPORTS = [
  { id: "r1", name: "Weekly Security Summary", type: "Summary", generated: "Apr 28, 2026", size: "142 KB", status: "Ready", icon: BarChart2 },
  { id: "r2", name: "Incident Response Report — Apr 2026", type: "Incident", generated: "Apr 27, 2026", size: "88 KB", status: "Ready", icon: Shield },
  { id: "r3", name: "Automation Efficiency Report — Q1 2026", type: "Automation", generated: "Apr 1, 2026", size: "230 KB", status: "Ready", icon: Zap },
  { id: "r4", name: "User Risk Analysis — Apr 2026", type: "Risk", generated: "Apr 14, 2026", size: "104 KB", status: "Ready", icon: FileText },
  { id: "r5", name: "Compliance Audit Trail — Apr 2026", type: "Compliance", generated: "Apr 28, 2026", size: "312 KB", status: "Ready", icon: FileText },
]

const REPORT_TYPES = ["Summary", "Incident", "Automation", "Risk", "Compliance"]

export default function ReportsScreen() {
  const [reports, setReports] = useState(REPORTS)
  const [generating, setGenerating] = useState<string | null>(null)
  const [showNew, setShowNew] = useState(false)
  const [newName, setNewName] = useState("")
  const [newType, setNewType] = useState("Summary")
  const [downloadedIds, setDownloadedIds] = useState<string[]>([])

  function generateReport() {
    if (!newName) return
    const id = `r-${Date.now()}`
    const newReport = { id, name: newName, type: newType, generated: "Generating...", size: "—", status: "Generating" as const, icon: FileText }
    setReports((r) => [newReport, ...r])
    setGenerating(id)
    setShowNew(false)
    setNewName("")
    setTimeout(() => {
      setReports((r) => r.map((rep) => rep.id === id ? { ...rep, generated: "Just now", size: `${Math.floor(Math.random() * 200 + 50)} KB`, status: "Ready" } : rep))
      setGenerating(null)
    }, 2500)
  }

  function downloadReport(id: string) {
    setDownloadedIds((d) => [...d, id])
    setTimeout(() => setDownloadedIds((d) => d.filter((x) => x !== id)), 2000)
  }

  function deleteReport(id: string) {
    setReports((r) => r.filter((rep) => rep.id !== id))
  }

  const TABS = ["All Reports", "Scheduled", "Templates"]
  const [tab, setTab] = useState("All Reports")

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-white mb-4">Reports</h1>
        <div className="flex items-center gap-1 border-b border-white/[0.07]">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
                tab === t ? "border-[#2261db] text-white" : "border-transparent text-gray-500 hover:text-gray-300"
              }`}>{t}</button>
          ))}
        </div>
      </div>

      {tab === "All Reports" && (
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400 text-sm">{reports.length} reports available</p>
            <button onClick={() => setShowNew(true)}
              className="flex items-center gap-1.5 text-sm bg-[#2261db] hover:bg-[#2261db]/80 text-white px-3 py-2 rounded-md transition-colors">
              <Plus className="w-3.5 h-3.5" /> Generate Report
            </button>
          </div>
          <div className="border border-white/[0.07] rounded-xl overflow-hidden">
            <div className="grid px-5 py-3 bg-[#151515] border-b border-white/[0.07] text-xs text-gray-500 uppercase tracking-wider" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr auto" }}>
              <div>Report Name</div><div>Type</div><div>Generated</div><div>Size</div><div>Status</div><div />
            </div>
            <div className="divide-y divide-white/[0.05] bg-[#131313]">
              {reports.map((r) => {
                const Icon = r.icon
                const isDownloaded = downloadedIds.includes(r.id)
                const isGenerating = generating === r.id
                return (
                  <div key={r.id} className="grid gap-4 px-5 py-4 items-center hover:bg-white/[0.02] transition-colors" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr auto" }}>
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-[#2261db] flex-shrink-0" />
                      <span className="text-white text-sm">{r.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{r.type}</span>
                    <span className="text-gray-500 text-sm">{r.generated}</span>
                    <span className="text-gray-500 text-sm">{r.size}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full border w-fit ${
                      isGenerating ? "text-amber-400 border-amber-400/20 bg-amber-400/10"
                      : r.status === "Ready" ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/10"
                      : "text-gray-500 border-gray-700"
                    }`}>
                      {isGenerating ? "Generating..." : r.status}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {!isGenerating && (
                        <>
                          <button onClick={() => downloadReport(r.id)}
                            className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-md border transition-all ${
                              isDownloaded
                                ? "border-emerald-400/30 text-emerald-400 bg-emerald-400/10"
                                : "border-white/[0.10] text-gray-400 hover:text-white hover:border-[#2261db]/40"
                            }`}>
                            <Download className="w-3 h-3" />
                            {isDownloaded ? "Downloaded" : "Download"}
                          </button>
                          <button onClick={() => deleteReport(r.id)} className="text-gray-600 hover:text-red-400 transition-colors p-1 rounded hover:bg-white/[0.05]">
                            ×
                          </button>
                        </>
                      )}
                      {isGenerating && <RefreshCw className="w-4 h-4 text-amber-400 animate-spin" />}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}

      {tab === "Scheduled" && (
        <div className="space-y-3">
          <p className="text-gray-400 text-sm mb-4">Configure automatically generated reports on a recurring schedule.</p>
          {[
            { name: "Weekly Security Summary", schedule: "Every Monday 8:00 AM", next: "May 4, 2026", enabled: true },
            { name: "Monthly Incident Report", schedule: "1st of every month", next: "May 1, 2026", enabled: true },
            { name: "Quarterly Compliance Audit", schedule: "Every 3 months", next: "Jul 1, 2026", enabled: false },
          ].map((s, i) => (
            <div key={i} className="border border-white/[0.07] bg-[#161616] rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">{s.name}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {s.schedule}</span>
                  <span>Next: {s.next}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className={`relative w-11 h-6 rounded-full transition-colors ${s.enabled ? "bg-[#2261db]" : "bg-white/[0.10]"}`}>
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${s.enabled ? "translate-x-5" : "translate-x-0.5"}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "Templates" && (
        <div className="grid grid-cols-2 gap-4">
          {REPORT_TYPES.map((type) => (
            <button key={type} onClick={() => { setNewType(type); setShowNew(true) }}
              className="text-left p-5 border border-white/[0.07] bg-[#161616] rounded-xl hover:border-[#2261db]/40 hover:bg-[#2261db]/5 transition-all group">
              <FileText className="w-5 h-5 text-[#2261db] mb-3" />
              <p className="text-white text-sm font-medium group-hover:text-[#00cfff] transition-colors">{type} Report</p>
              <p className="text-gray-500 text-xs mt-1">Generate a {type.toLowerCase()} report for your workspace.</p>
            </button>
          ))}
        </div>
      )}

      {showNew && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowNew(false)}>
          <div className="bg-[#1a1a1a] border border-white/[0.10] rounded-2xl p-6 w-full max-w-sm shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-white font-semibold mb-4">Generate New Report</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Report Name</label>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. April Incident Summary"
                  className="w-full bg-[#111] border border-white/[0.10] focus:border-[#2261db]/50 text-white text-sm rounded-md px-3 py-2 outline-none placeholder:text-gray-600"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Report Type</label>
                <select value={newType} onChange={(e) => setNewType(e.target.value)}
                  className="w-full bg-[#111] border border-white/[0.10] text-white text-sm rounded-md px-3 py-2 outline-none">
                  {REPORT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="flex gap-2 justify-end pt-1">
                <button onClick={() => setShowNew(false)} className="text-sm text-gray-400 hover:text-white px-4 py-2 rounded-md border border-white/[0.08] hover:border-white/20 transition-colors">Cancel</button>
                <button onClick={generateReport} className="text-sm bg-[#2261db] hover:bg-[#2261db]/80 text-white px-4 py-2 rounded-md transition-colors font-medium">Generate</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
