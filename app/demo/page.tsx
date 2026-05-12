"use client"

import { useState } from "react"
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

export default function DemoPage() {
  const [screen, setScreen] = useState<DemoScreen>("home")
  const [collapsed, setCollapsed] = useState(false)

  const titles: Record<DemoScreen, string> = {
    home: "Home",
    dashboard: "Dashboard",
    "log-search": "Log Search",
    playbooks: "Playbooks",
    actions: "Actions",
    activity: "Activity",
    management: "Management",
    reports: "Reports",
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0d0d0d] text-white" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <DemoSidebar active={screen} onNavigate={setScreen} collapsed={collapsed} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <DemoTopBar title={titles[screen]} onToggle={() => setCollapsed((v) => !v)} />
        <div className="flex-1 overflow-y-auto">
          {screen === "home"       && <HomeScreen onNavigate={setScreen} />}
          {screen === "dashboard"  && <DashboardScreen />}
          {screen === "log-search" && <LogSearchScreen />}
          {screen === "playbooks"  && <PlaybooksScreen onNavigate={setScreen} />}
          {screen === "actions"    && <ActionsScreen />}
          {screen === "activity"   && <ActivityScreen />}
          {screen === "management" && <ManagementScreen />}
          {screen === "reports"    && <ReportsScreen />}
        </div>
      </div>
    </div>
  )
}
