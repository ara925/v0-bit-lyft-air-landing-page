"use client"

import { useState } from "react"
import type { DemoScreen } from "../../page"
import { CheckCircle2, Circle, Play, SkipForward, ExternalLink, Zap, BookOpen, Shield } from "lucide-react"

const STEPS = [
  {
    id: "integration",
    title: "Setup Integration",
    description: "Connect BitLyft AIR® to your environment to unlock its full capabilities.",
    completedByDefault: true,
  },
  {
    id: "action",
    title: "Run an Action",
    description: "Test out individual actions in BitLyft AIR® to see how you can automate tasks or respond to specific security events in real time.",
    screen: "actions" as DemoScreen,
  },
  {
    id: "playbook",
    title: "Run a Playbook",
    description: "Execute a complete playbook to experience how BitLyft AIR® chains together multiple actions to handle complex incident response or automation scenarios.",
    screen: "playbooks" as DemoScreen,
  },
  {
    id: "policies",
    title: "Review BitLyft AIR® Policies",
    description: "Access the Policies section to view and manage detection rules, correlation logic, and security policies that drive threat detection and automated responses in BitLyft AIR®.",
    completedByDefault: true,
  },
  {
    id: "automation",
    title: "Map an Automation",
    description: "Use the intuitive UI to map triggers, conditions, and actions to build custom automated processes.",
    screen: "playbooks" as DemoScreen,
  },
  {
    id: "notifications",
    title: "Review Notifications",
    description: "Explore the Notifications Center to review alerts, system updates, and events in your environment.",
    screen: "activity" as DemoScreen,
  },
  {
    id: "team",
    title: "Invite a Team Member",
    description: "Invite colleagues to collaborate in BitLyft AIR®, enabling shared visibility and response across your team.",
  },
]

interface Props {
  onNavigate: (s: DemoScreen) => void
}

export default function HomeScreen({ onNavigate }: Props) {
  const [completed, setCompleted] = useState<string[]>(["integration", "policies"])
  const [skipped, setSkipped] = useState<string[]>([])

  const done = completed.length
  const total = STEPS.length
  const pct = Math.round((done / total) * 100)

  function markDone(id: string) {
    setCompleted((c) => c.includes(id) ? c : [...c, id])
  }

  function handleStart(step: typeof STEPS[0]) {
    markDone(step.id)
    if (step.screen) onNavigate(step.screen)
  }

  function handleSkip(id: string) {
    setSkipped((s) => s.includes(id) ? s : [...s, id])
    markDone(id)
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to your BitLyft AIR®</h1>
        <p className="text-gray-400">Your unified platform to manage and secure your entire organization effortlessly.</p>
      </div>

      {/* Quick Start card */}
      <div className="mb-6 border border-[#2261db]/50 rounded-xl overflow-hidden">
        <div className="px-6 py-5 bg-[#161616]">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-white font-semibold text-lg">Quick Start</h2>
            <span className="text-gray-500 text-sm">{done}/{total} complete</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">Use our Quick Start guide to learn about everything BitLyft AIR® can do for you</p>
          <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#2261db] to-[#00cfff] rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Get Started checklist */}
      <div className="border border-[#2261db]/50 rounded-xl overflow-hidden">
        <div className="px-6 py-5 bg-[#161616] border-b border-white/[0.07]">
          <h2 className="text-white font-semibold text-lg">Get Started</h2>
          <p className="text-gray-400 text-sm mt-0.5">Complete these steps to configure your security dashboard</p>
        </div>

        <div className="divide-y divide-white/[0.05] bg-[#131313]">
          {STEPS.map((step, i) => {
            const isDone = completed.includes(step.id)
            const isSkipped = skipped.includes(step.id)

            return (
              <div
                key={step.id}
                className={`flex items-start gap-4 px-6 py-5 transition-colors ${isDone ? "opacity-70" : "hover:bg-white/[0.02]"}`}
              >
                {/* Number / check */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border transition-all ${
                  isDone
                    ? "bg-[#2261db]/20 border-[#2261db]/40 text-[#00cfff]"
                    : "bg-white/[0.05] border-white/[0.10] text-gray-400"
                }`}>
                  {isDone ? <CheckCircle2 className="w-4 h-4 text-[#00cfff]" /> : i + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className={`text-sm font-semibold ${isDone ? "text-gray-400 line-through decoration-gray-600" : "text-white"}`}>
                      {step.title}
                    </p>
                    <ExternalLink className="w-3 h-3 text-gray-600" />
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {isDone ? (
                    <span className="text-xs text-gray-500 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-md">
                      Completed
                    </span>
                  ) : (
                    <>
                      <button
                        onClick={() => handleStart(step)}
                        className="text-xs bg-[#2261db] hover:bg-[#2261db]/80 text-white px-3 py-1.5 rounded-md transition-colors font-medium"
                      >
                        Start
                      </button>
                      <button
                        onClick={() => handleSkip(step.id)}
                        className="text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        Skip
                      </button>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick nav tiles */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[
          { icon: Zap, label: "Run an Action", sub: "Trigger a containment action manually", screen: "actions" as DemoScreen, color: "text-[#00cfff]" },
          { icon: BookOpen, label: "View Playbooks", sub: "Browse automated response workflows", screen: "playbooks" as DemoScreen, color: "text-purple-400" },
          { icon: Shield, label: "Dashboard", sub: "See live metrics and incident counts", screen: "dashboard" as DemoScreen, color: "text-emerald-400" },
        ].map(({ icon: Icon, label, sub, screen, color }) => (
          <button
            key={label}
            onClick={() => onNavigate(screen)}
            className="text-left flex items-start gap-3 p-4 rounded-xl border border-white/[0.07] bg-[#161616] hover:border-[#2261db]/40 hover:bg-[#2261db]/5 transition-all group"
          >
            <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${color}`} />
            <div>
              <p className="text-white text-sm font-medium group-hover:text-[#00cfff] transition-colors">{label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
