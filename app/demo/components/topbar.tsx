"use client"

import { ChevronRight, Moon, PanelLeft, Sun } from "lucide-react"

interface Props {
  title: string
  onToggle: () => void
  dark: boolean
  onToggleDark: () => void
}

export default function DemoTopBar({ title, onToggle, dark, onToggleDark }: Props) {
  const crumbs = title.split(" > ")

  const border = dark ? "border-[#1e2028]" : "border-[#d7dce3]"
  const bg     = dark ? "bg-[#13141a]"    : "bg-[#fbfbfc]"
  const text   = dark ? "text-[#e8eaf0]"  : "text-[#070707]"
  const sub    = dark ? "text-[#7c8394]"  : "text-[#697386]"
  const hover  = dark ? "hover:bg-[#1e2028]" : "hover:bg-[#eef1f5]"

  return (
    <header className={`flex h-16 flex-shrink-0 items-center justify-between border-b ${border} ${bg} px-4`}>
      <div className="flex items-center gap-4">
        <button onClick={onToggle} aria-label="Toggle Sidebar" className={`rounded p-1.5 ${text} transition-colors ${hover}`}>
          <PanelLeft className="h-4 w-4" />
        </button>
        <div className={`h-4 w-px ${dark ? "bg-[#1e2028]" : "bg-[#d7dce3]"}`} />
        <nav aria-label="breadcrumb">
          <ol className="flex items-center gap-2 text-[15px]">
            {crumbs.map((crumb, index) => {
              const current = index === crumbs.length - 1
              return (
                <li key={`${crumb}-${index}`} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className={`h-3.5 w-3.5 ${sub}`} />}
                  <span className={current ? `font-medium ${text}` : sub}>{crumb}</span>
                </li>
              )
            })}
          </ol>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onToggleDark}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
            dark
              ? "border-[#1e2028] bg-[#1e2028] text-[#e8eaf0] hover:bg-[#2a2d3a]"
              : "border-[#d7dce3] bg-white text-[#070707] hover:bg-[#f2f4f7]"
          }`}
        >
          {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          {dark ? "Light mode" : "Dark mode"}
        </button>
        <div className="text-right">
          <p className={`text-sm font-semibold leading-4 ${text}`}>Company #1</p>
          <p className={`text-sm leading-4 ${sub}`}>Admin</p>
        </div>
      </div>
    </header>
  )
}
