"use client"

import { ChevronRight, PanelLeft } from "lucide-react"

interface Props {
  title: string
  onToggle: () => void
}

export default function DemoTopBar({ title, onToggle }: Props) {
  const crumbs = title.split(" > ")

  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-[#d7dce3] bg-[#fbfbfc] px-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggle}
          aria-label="Toggle Sidebar"
          className="rounded p-1.5 text-[#111827] transition-colors hover:bg-[#eef1f5]"
        >
          <PanelLeft className="h-4 w-4" />
        </button>
        <div className="h-4 w-px bg-[#d7dce3]" />
        <nav aria-label="breadcrumb">
          <ol className="flex items-center gap-2 text-[15px]">
            {crumbs.map((crumb, index) => {
              const current = index === crumbs.length - 1
              return (
                <li key={`${crumb}-${index}`} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-[#697386]" />}
                  <span className={current ? "font-medium text-[#070707]" : "text-[#697386]"}>{crumb}</span>
                </li>
              )
            })}
          </ol>
        </nav>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold leading-4 text-[#070707]">Company #1</p>
        <p className="text-sm leading-4 text-[#070707]">Admin</p>
      </div>
    </header>
  )
}
