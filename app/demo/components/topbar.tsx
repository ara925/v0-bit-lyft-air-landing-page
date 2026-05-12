"use client"

import { PanelLeft, RefreshCw } from "lucide-react"
import Link from "next/link"

interface Props {
  title: string
  onToggle: () => void
}

export default function DemoTopBar({ title, onToggle }: Props) {
  return (
    <header className="flex items-center justify-between px-5 border-b border-white/[0.07] bg-[#111111] flex-shrink-0" style={{ height: 48 }}>
      <div className="flex items-center gap-3">
        <button onClick={onToggle} className="text-gray-500 hover:text-white transition-colors p-1 rounded-md hover:bg-white/[0.05]">
          <PanelLeft className="w-4 h-4" />
        </button>
        <span className="text-white/30 text-sm">|</span>
        <span className="text-gray-300 text-sm">{title}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-500 text-xs hidden sm:block">
          <span className="text-gray-600">Demo Workspace</span>
        </span>
        <div className="text-right hidden sm:block">
          <p className="text-white text-xs font-semibold leading-none">BitLyft AIR</p>
          <p className="text-gray-500 text-[10px]">Demo Workspace</p>
        </div>
        <Link
          href="/"
          className="text-[11px] text-gray-500 hover:text-white border border-white/[0.08] hover:border-white/20 px-3 py-1.5 rounded-md transition-all"
        >
          Exit Demo
        </Link>
      </div>
    </header>
  )
}
