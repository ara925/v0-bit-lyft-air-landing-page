"use client"

import { useEffect, useState } from "react"
import DemoSidebar from "./components/sidebar"
import DemoTopBar from "./components/topbar"
import HomeScreen from "./components/screens/home"
import DashboardScreen from "./components/screens/dashboard"
import ActionsScreen from "./components/screens/actions"
import LogSearchScreen from "./components/screens/log-search"
import PlaybooksScreen from "./components/screens/playbooks"
import ActivityScreen from "./components/screens/activity"
import ManagementScreen from "./components/screens/management"
import ReportsScreen from "./components/screens/reports"

export type DemoScreen = "home" | "dashboard" | "log-search" | "playbooks" | "actions" | "activity" | "management" | "reports"

const SCREENS: DemoScreen[] = ["home", "dashboard", "log-search", "playbooks", "actions", "activity", "management", "reports"]

export default function DemoPage() {
  const [screen, setScreen] = useState<DemoScreen>("home")
  const [collapsed, setCollapsed] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    function applyHashScreen() {
      const hashScreen = window.location.hash.replace("#", "") as DemoScreen
      if (SCREENS.includes(hashScreen)) setScreen(hashScreen)
    }

    applyHashScreen()
    window.addEventListener("hashchange", applyHashScreen)
    return () => window.removeEventListener("hashchange", applyHashScreen)
  }, [])

  function navigate(nextScreen: DemoScreen) {
    setScreen(nextScreen)
    window.history.replaceState(null, "", `#${nextScreen}`)
  }

  const titles: Record<DemoScreen, string> = {
    home: "Home",
    dashboard: "AIR > Overview",
    "log-search": "Search",
    playbooks: "Playbooks",
    actions: "Actions",
    activity: "Activity > Actions",
    management: "Integrations",
    reports: "Report > AIR",
  }

  const shell = dark
    ? "bg-[#0d0d0f] text-[#e8eaf0]"
    : "bg-[#f6f7f9] text-[#070707]"
  const inner = dark
    ? "border-[#1e2028] bg-[#0d0d0f]"
    : "border-[#d9dde5] bg-[#f6f7f9]"

  return (
    <div
      className={`demo-product-shell flex h-screen w-screen gap-2 overflow-hidden p-2 ${shell}`}
      data-demo-theme={dark ? "dark" : "light"}
      style={{ fontFamily: "var(--font-figtree), ui-sans-serif, system-ui, sans-serif" }}
    >
      <DemoSidebar active={screen} onNavigate={navigate} collapsed={collapsed} dark={dark} />
      <div className={`flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border ${inner}`}>
        <DemoTopBar title={titles[screen]} onToggle={() => setCollapsed((v) => !v)} dark={dark} onToggleDark={() => setDark((v) => !v)} />
        <div className="demo-content-scroll flex-1 overflow-y-auto">
          {screen === "home"       && <HomeScreen onNavigate={navigate} dark={dark} />}
          {screen === "dashboard"  && <DashboardScreen dark={dark} />}
          {screen === "log-search" && <LogSearchScreen dark={dark} />}
          {screen === "playbooks"  && <PlaybooksScreen onNavigate={navigate} dark={dark} />}
          {screen === "actions"    && <ActionsScreen dark={dark} />}
          {screen === "activity"   && <ActivityScreen dark={dark} />}
          {screen === "management" && <ManagementScreen dark={dark} />}
          {screen === "reports"    && <ReportsScreen dark={dark} />}
        </div>
      </div>
    </div>
  )
}
