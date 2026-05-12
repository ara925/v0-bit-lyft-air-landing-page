"use client"

import type { DemoScreen } from "../page"
import {
  Home,
  LayoutDashboard,
  Search,
  BookOpen,
  Play,
  Activity,
  Settings,
  FileText,
  HelpCircle,
  ExternalLink,
} from "lucide-react"

interface Props {
  active: DemoScreen
  onNavigate: (s: DemoScreen) => void
  collapsed: boolean
}

const NAV = [
  {
    group: "Onboarding",
    items: [{ id: "home" as DemoScreen, label: "Home", icon: Home }],
  },
  {
    group: "Application",
    items: [
      { id: "dashboard" as DemoScreen, label: "Dashboard", icon: LayoutDashboard },
      { id: "log-search" as DemoScreen, label: "Log Search", icon: Search },
    ],
  },
  {
    group: "Automation Response",
    items: [
      { id: "playbooks" as DemoScreen, label: "Playbooks", icon: BookOpen },
      { id: "actions" as DemoScreen, label: "Actions", icon: Play },
      { id: "activity" as DemoScreen, label: "Activity", icon: Activity },
    ],
  },
  {
    group: "Integrations",
    items: [
      { id: "management" as DemoScreen, label: "Management", icon: Settings },
    ],
  },
  {
    group: "Reports",
    items: [
      { id: "reports" as DemoScreen, label: "Reports", icon: FileText },
    ],
  },
]

export default function DemoSidebar({ active, onNavigate, collapsed }: Props) {
  return (
    <aside
      className="flex flex-col border-r border-white/[0.07] bg-[#111111] transition-all duration-300 flex-shrink-0"
      style={{ width: collapsed ? 60 : 220 }}
    >
      {/* Org header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-white/[0.07]" style={{ minHeight: 64 }}>
        <div className="w-8 h-8 rounded-md bg-[#2261db] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          BA
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate">BitLyft AIR</p>
            <p className="text-gray-500 text-[11px] truncate">Demo Workspace</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-5">
        {NAV.map(({ group, items }) => (
          <div key={group}>
            {!collapsed && (
              <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium px-4 mb-1.5">{group}</p>
            )}
            <div className="space-y-0.5 px-2">
              {items.map(({ id, label, icon: Icon }) => {
                const isActive = active === id
                return (
                  <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    title={collapsed ? label : undefined}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                      isActive
                        ? "bg-[#2261db]/20 text-white border border-[#2261db]/40"
                        : "text-gray-400 hover:bg-white/[0.05] hover:text-white border border-transparent"
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-[#00cfff]" : ""}`} />
                    {!collapsed && <span className="truncate">{label}</span>}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-white/[0.07] px-2 py-3 space-y-0.5">
        {!collapsed && (
          <>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium px-3 mb-1.5">Other Links</p>
            <a
              href="https://bitlyft.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/[0.05] hover:text-white transition-all"
            >
              <HelpCircle className="w-4 h-4 flex-shrink-0" />
              <span>Support Portal</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </a>
            <a
              href="https://bitlyft.com/resources"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/[0.05] hover:text-white transition-all"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span>Help Docs</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </a>
          </>
        )}

        {/* User */}
        <div className="flex items-center gap-3 px-3 py-2 mt-1">
          <div className="w-7 h-7 rounded-full bg-[#2261db]/40 border border-[#2261db]/50 flex items-center justify-center text-[10px] font-bold text-[#00cfff] flex-shrink-0">
            SA
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-white text-xs font-medium truncate">Security Admin</p>
              <p className="text-gray-500 text-[10px] truncate">demo@bitlyftair.ai</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <p className="text-center text-[10px] text-gray-700 pt-1">v1.25.12</p>
        )}
      </div>
    </aside>
  )
}
