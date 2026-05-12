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

  return (
    <div
      className="demo-product-shell flex h-screen w-screen gap-2 overflow-hidden bg-[#0d0d0d] p-2 text-[#f8fafc]"
      style={{ fontFamily: "var(--font-figtree), ui-sans-serif, system-ui, sans-serif" }}
    >
      <DemoSidebar active={screen} onNavigate={navigate} collapsed={collapsed} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-[#d7dce3] bg-[#0d0d0d]">
        <DemoTopBar title={titles[screen]} onToggle={() => setCollapsed((v) => !v)} />
        <div className="demo-content-scroll flex-1 overflow-y-auto">
          {screen === "home"       && <HomeScreen onNavigate={navigate} />}
          {screen === "dashboard"  && <DashboardScreen />}
          {screen === "log-search" && <LogSearchScreen />}
          {screen === "playbooks"  && <PlaybooksScreen onNavigate={navigate} />}
          {screen === "actions"    && <ActionsScreen />}
          {screen === "activity"   && <ActivityScreen />}
          {screen === "management" && <ManagementScreen />}
          {screen === "reports"    && <ReportsScreen />}
        </div>
      </div>
    </div>
  )
}
