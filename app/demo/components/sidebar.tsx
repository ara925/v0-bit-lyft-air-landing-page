"use client"

import type { DemoScreen } from "../page"
import {
  Activity,
  BookOpen,
  ChevronsUpDown,
  FileText,
  HelpCircle,
  Home,
  LayoutDashboard,
  Play,
  Search,
  Settings,
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
    items: [{ id: "management" as DemoScreen, label: "Management", icon: Settings }],
  },
  {
    group: "Reports",
    items: [{ id: "reports" as DemoScreen, label: "Reports", icon: FileText }],
  },
]

export default function DemoSidebar({ active, onNavigate, collapsed }: Props) {
  return (
    <aside
      className="flex flex-shrink-0 flex-col rounded-lg bg-[#fbfbfc] text-[#101828] transition-all duration-300"
      style={{ width: collapsed ? 64 : 240 }}
    >
      <div className="px-2 pb-4 pt-4">
        {!collapsed && <p className="mb-2 px-2 text-[13px] text-[#5f6472]">Organization</p>}
        <button
          onClick={() => onNavigate("home")}
          className="flex h-12 w-full items-center gap-2 rounded bg-[#c9f3fb] px-2 text-left transition-colors hover:bg-[#bcecf6]"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-[#2563eb] text-xs font-semibold text-[#fff]">
            C1
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold leading-4 text-[#070707]">Company #1</p>
              <p className="truncate text-xs leading-4 text-[#344054]">Admin</p>
            </div>
          )}
        </button>
      </div>

      <div className="mx-2 border-t border-[#d7dce3]" />

      <nav className="flex-1 space-y-5 overflow-y-auto px-2 py-5">
        {NAV.map(({ group, items }) => (
          <div key={group}>
            {!collapsed && <p className="mb-2 px-2 text-[13px] text-[#697386]">{group}</p>}
            <div className="space-y-1">
              {items.map(({ id, label, icon: Icon }) => {
                const isActive = active === id
                return (
                  <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    title={collapsed ? label : undefined}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex h-8 w-full items-center gap-2 rounded px-2 text-[15px] transition-colors ${
                      isActive ? "bg-[#f0f1f3] text-[#2563eb]" : "text-[#14171f] hover:bg-[#f2f4f7]"
                    }`}
                  >
                    <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? "text-[#2563eb]" : "text-[#111827]"}`} />
                    {!collapsed && <span className="truncate">{label}</span>}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="space-y-1 px-2 pb-4 pt-2">
        {!collapsed && (
          <>
            <p className="mb-2 px-2 text-[13px] text-[#697386]">Other Links</p>
            <a
              href="https://bitlyft.atlassian.net/servicedesk/customer/portal/5/group/19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-full items-center gap-2 rounded px-2 text-[15px] text-[#14171f] transition-colors hover:bg-[#f2f4f7]"
            >
              <HelpCircle className="h-4 w-4 flex-shrink-0" />
              <span>Support Portal</span>
            </a>
            <a
              href="https://bitlyft.atlassian.net/wiki/spaces/BAHD/overview?homepageId=824672628"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-full items-center gap-2 rounded px-2 text-[15px] text-[#14171f] transition-colors hover:bg-[#f2f4f7]"
            >
              <FileText className="h-4 w-4 flex-shrink-0" />
              <span>Help Docs</span>
            </a>
          </>
        )}

        <button className="mt-3 flex h-12 w-full items-center gap-2 rounded px-2 text-left transition-colors hover:bg-[#f2f4f7]">
          <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-[#f3f4f6] text-xs font-semibold text-[#344054]">
            SA
            <span className="absolute -right-1 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ef2424] text-[11px] font-semibold text-[#fff]">
              3
            </span>
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold leading-4 text-[#070707]">Security Admin</p>
              <p className="truncate text-xs leading-4 text-[#344054]">admin@company1.example</p>
            </div>
          )}
          {!collapsed && <ChevronsUpDown className="h-4 w-4 flex-shrink-0 text-[#14171f]" />}
        </button>
        {!collapsed && <p className="pt-2 text-center text-xs text-[#14171f]">v1.25.12</p>}
      </div>
    </aside>
  )
}
