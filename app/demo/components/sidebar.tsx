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
  dark: boolean
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

export default function DemoSidebar({ active, onNavigate, collapsed, dark }: Props) {
  const bg       = dark ? "bg-[#13141a]"    : "bg-[#fbfbfc]"
  const border   = dark ? "border-[#1e2028]": "border-[#d7dce3]"
  const orgBg    = dark ? "bg-[#1a2a3a]"    : "bg-[#c9f3fb]"
  const orgHover = dark ? "hover:bg-[#1e3248]" : "hover:bg-[#bcecf6]"
  const txtPri   = dark ? "text-[#e8eaf0]"  : "text-[#070707]"
  const txtSub   = dark ? "text-[#7c8394]"  : "text-[#697386]"
  const txtNav   = dark ? "text-[#c4c8d4]"  : "text-[#14171f]"
  const navActive= dark ? "bg-[#1e2644] text-[#5b9cf6]" : "bg-[#f0f1f3] text-[#2563eb]"
  const navHover = dark ? "hover:bg-[#1e2028]" : "hover:bg-[#f2f4f7]"
  const iconActive = dark ? "text-[#5b9cf6]" : "text-[#2563eb]"
  const iconNav  = dark ? "text-[#9aa3b3]"  : "text-[#111827]"
  const userBg   = dark ? "bg-[#1e2028]"    : "bg-[#f3f4f6]"
  const userHover= dark ? "hover:bg-[#1e2028]" : "hover:bg-[#f2f4f7]"

  return (
    <aside
      className={`flex flex-shrink-0 flex-col rounded-lg ${bg} transition-all duration-300`}
      style={{ width: collapsed ? 64 : 240 }}
    >
      <div className="px-2 pb-4 pt-4">
        {!collapsed && <p className={`mb-2 px-2 text-[13px] ${txtSub}`}>Organization</p>}
        <button
          onClick={() => onNavigate("home")}
          className={`flex h-12 w-full items-center gap-2 rounded ${orgBg} px-2 text-left transition-colors ${orgHover}`}
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-[#2563eb] text-xs font-semibold text-white">
            C1
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className={`truncate text-sm font-semibold leading-4 ${txtPri}`}>Company #1</p>
              <p className={`truncate text-xs leading-4 ${txtSub}`}>Admin</p>
            </div>
          )}
        </button>
      </div>

      <div className={`mx-2 border-t ${border}`} />

      <nav className="flex-1 space-y-5 overflow-y-auto px-2 py-5">
        {NAV.map(({ group, items }) => (
          <div key={group}>
            {!collapsed && <p className={`mb-2 px-2 text-[13px] ${txtSub}`}>{group}</p>}
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
                      isActive ? navActive : `${txtNav} ${navHover}`
                    }`}
                  >
                    <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? iconActive : iconNav}`} />
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
            <p className={`mb-2 px-2 text-[13px] ${txtSub}`}>Other Links</p>
            <a href="https://bitlyft.atlassian.net/servicedesk/customer/portal/5/group/19" target="_blank" rel="noopener noreferrer"
              className={`flex h-8 w-full items-center gap-2 rounded px-2 text-[15px] ${txtNav} transition-colors ${navHover}`}>
              <HelpCircle className={`h-4 w-4 flex-shrink-0 ${iconNav}`} />
              <span>Support Portal</span>
            </a>
            <a href="https://bitlyft.atlassian.net/wiki/spaces/BAHD/overview?homepageId=824672628" target="_blank" rel="noopener noreferrer"
              className={`flex h-8 w-full items-center gap-2 rounded px-2 text-[15px] ${txtNav} transition-colors ${navHover}`}>
              <FileText className={`h-4 w-4 flex-shrink-0 ${iconNav}`} />
              <span>Help Docs</span>
            </a>
          </>
        )}
        <button className={`mt-3 flex h-12 w-full items-center gap-2 rounded px-2 text-left transition-colors ${userHover}`}>
          <div className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded ${userBg} text-xs font-semibold ${txtSub}`}>
            SA
            <span className="absolute -right-1 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ef2424] text-[11px] font-semibold text-white">3</span>
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm font-semibold leading-4 ${txtPri}`}>Security Admin</p>
              <p className={`truncate text-xs leading-4 ${txtSub}`}>admin@company1.example</p>
            </div>
          )}
          {!collapsed && <ChevronsUpDown className={`h-4 w-4 flex-shrink-0 ${iconNav}`} />}
        </button>
        {!collapsed && <p className={`pt-2 text-center text-xs ${txtSub}`}>v1.25.12</p>}
      </div>
    </aside>
  )
}
