"use client"

import { useState } from "react"
import { CheckCircle2, Download, FileText, Loader2 } from "lucide-react"

const MONTHLY_REPORTS = [
  { name: "May 2026", type: "Executive Summary", incidents: 14, automations: 37, status: "Ready" },
  { name: "April 2026", type: "Security Operations", incidents: 28, automations: 94, status: "Ready" },
  { name: "March 2026", type: "Identity Risk", incidents: 19, automations: 63, status: "Ready" },
  { name: "February 2026", type: "Email Security", incidents: 21, automations: 71, status: "Ready" },
]

const QUARTERLY_REPORTS = [
  { name: "Q2 2026", type: "In Progress", incidents: 42, automations: 128, status: "Draft" },
  { name: "Q1 2026", type: "Board Review", incidents: 68, automations: 203, status: "Ready" },
  { name: "Q4 2025", type: "Compliance Archive", incidents: 73, automations: 221, status: "Ready" },
]

type Report = (typeof MONTHLY_REPORTS)[number]

function ReportRow({ report, onDownload, downloading }: { report: Report; onDownload: (name: string) => void; downloading: boolean }) {
  const isDraft = report.status === "Draft"

  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#d7dce3] px-4 py-4 last:border-b-0">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-[#d7dce3] bg-[#f8fafc] text-[#2563eb]">
          <FileText className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="font-medium text-[#070707]">{report.name}</p>
          <p className="truncate text-sm text-[#5f6472]">
            {report.type} - {report.incidents} incidents - {report.automations} automations
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`rounded border px-2 py-1 text-sm ${isDraft ? "border-[#fedf89] bg-[#fffaeb] text-[#92400e]" : "border-[#b7ebc6] bg-[#ecfdf3] text-[#166534]"}`}>
          {report.status}
        </span>
        <button
          onClick={() => onDownload(report.name)}
          disabled={downloading}
          className="inline-flex h-9 items-center gap-2 rounded border border-[#d7dce3] bg-white px-3 text-sm text-[#070707] transition-colors hover:bg-[#f8fafc] disabled:cursor-not-allowed disabled:text-[#697386]"
        >
          {downloading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          {downloading ? "Preparing" : isDraft ? "Preview" : "Download"}
        </button>
      </div>
    </div>
  )
}

export default function ReportsScreen({ dark = false }: { dark?: boolean }) {
  const [downloading, setDownloading] = useState<string | null>(null)
  const [lastDownloaded, setLastDownloaded] = useState<string | null>(null)

  function download(name: string) {
    setDownloading(name)
    setLastDownloaded(null)
    window.setTimeout(() => {
      setDownloading(null)
      setLastDownloaded(name)
    }, 1100)
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="mb-3 text-[32px] font-bold leading-tight text-[#070707]">Report</h1>
        <p className="text-[15px] text-[#5f6472]">
          View reports that summarize Company #1 security activity, incidents, and automation outcomes over time.
        </p>
      </div>

      {lastDownloaded && (
        <div className="mb-4 flex items-center gap-2 rounded border border-[#b7ebc6] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]">
          <CheckCircle2 className="h-4 w-4" />
          {lastDownloaded} report prepared for download.
        </div>
      )}

      <div className="mb-5 grid grid-cols-4 gap-4">
        <div className="rounded border border-[#d7dce3] bg-white p-4">
          <p className="text-sm text-[#5f6472]">Incidents summarized</p>
          <p className="mt-1 text-2xl font-semibold text-[#070707]">110</p>
        </div>
        <div className="rounded border border-[#d7dce3] bg-white p-4">
          <p className="text-sm text-[#5f6472]">Automations captured</p>
          <p className="mt-1 text-2xl font-semibold text-[#070707]">331</p>
        </div>
        <div className="rounded border border-[#d7dce3] bg-white p-4">
          <p className="text-sm text-[#5f6472]">Avg. response time</p>
          <p className="mt-1 text-2xl font-semibold text-[#070707]">1.4s</p>
        </div>
        <div className="rounded border border-[#d7dce3] bg-white p-4">
          <p className="text-sm text-[#5f6472]">Reports ready</p>
          <p className="mt-1 text-2xl font-semibold text-[#070707]">6</p>
        </div>
      </div>

      <div className="grid max-w-[1100px] grid-cols-2 gap-4">
        <section className="overflow-hidden rounded border border-[#d7dce3] bg-white">
          <div className="border-b border-[#d7dce3] bg-[#fbfbfc] px-4 py-4">
            <h2 className="text-xl font-semibold text-[#070707]">Monthly Reports</h2>
            <p className="text-sm text-[#5f6472]">Operational detail for SOC and identity teams.</p>
          </div>
          {MONTHLY_REPORTS.map((report) => (
            <ReportRow key={report.name} report={report} onDownload={download} downloading={downloading === report.name} />
          ))}
        </section>

        <section className="overflow-hidden rounded border border-[#d7dce3] bg-white">
          <div className="border-b border-[#d7dce3] bg-[#fbfbfc] px-4 py-4">
            <h2 className="text-xl font-semibold text-[#070707]">Quarterly Reports</h2>
            <p className="text-sm text-[#5f6472]">Executive summaries and compliance archives.</p>
          </div>
          {QUARTERLY_REPORTS.map((report) => (
            <ReportRow key={report.name} report={report} onDownload={download} downloading={downloading === report.name} />
          ))}
        </section>
      </div>
    </div>
  )
}
