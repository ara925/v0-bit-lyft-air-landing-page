"use client"

import { useState } from "react"
import type { DemoScreen } from "../../page"
import { ExternalLink } from "lucide-react"

const STEPS = [
  {
    id: "integration",
    title: "Setup Integration",
    description: "Connect BitLyft AIR to your environment to unlock its full capabilities.",
    completedByDefault: true,
  },
  {
    id: "action",
    title: "Run an Action",
    description: "Test out individual actions in BitLyft AIR to see how you can automate tasks or respond to specific security events in real time.",
    screen: "actions" as DemoScreen,
  },
  {
    id: "playbook",
    title: "Run a Playbook",
    description: "Execute a complete playbook to experience how BitLyft AIR chains together multiple actions to handle complex incident response or automation scenarios.",
    screen: "playbooks" as DemoScreen,
  },
  {
    id: "policies",
    title: "Review BitLyft AIR Policies",
    description: "Access the Policies section to view and manage detection rules, correlation logic, and security policies that drive threat detection and automated responses in BitLyft AIR.",
    completedByDefault: true,
  },
  {
    id: "automation",
    title: "Map an Automation",
    description: "Use the intuitive UI to map triggers, conditions, and actions to build custom automated workflows that fit your unique security processes.",
    screen: "playbooks" as DemoScreen,
  },
  {
    id: "notifications",
    title: "Review Notifications",
    description: "Explore the Notifications Center to review alerts, system updates, and actionable insights that keep you informed of critical events in your environment.",
    screen: "activity" as DemoScreen,
  },
  {
    id: "team",
    title: "Invite a Team Member",
    description: "Invite colleagues to collaborate in BitLyft AIR, enabling shared visibility, task management, and efficient incident response across your team.",
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
    setCompleted((c) => (c.includes(id) ? c : [...c, id]))
  }

  function handleStart(step: (typeof STEPS)[0]) {
    markDone(step.id)
    if (step.screen) onNavigate(step.screen)
  }

  function handleSkip(id: string) {
    setSkipped((s) => (s.includes(id) ? s : [...s, id]))
    markDone(id)
  }

  return (
    <div className="p-6">
      <div className="mb-12">
        <h1 className="mb-3 text-[32px] font-bold leading-tight text-[#070707]">Welcome to your BitLyft AIR</h1>
        <p className="text-[15px] text-[#5f6472]">Your unified platform to manage and secure your entire organization effortlessly.</p>
      </div>

      <div className="mb-8 overflow-hidden rounded border border-[#d7dce3] bg-white">
        <div className="px-4 py-5">
          <h2 className="text-[22px] font-semibold leading-7 text-[#070707]">Quick Start</h2>
          <p className="mb-4 text-[15px] text-[#5f6472]">Use our Quick Start guide to learn about everything BitLyft AIR can do for you</p>
          <div className="h-1 w-full overflow-hidden rounded-full bg-[#edf0f3]">
            <div className="h-full rounded-full bg-[#2563eb] transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded border border-[#d7dce3] bg-white">
        <div className="px-4 py-5">
          <h2 className="text-[22px] font-semibold leading-7 text-[#070707]">Get Started</h2>
          <p className="text-[15px] text-[#5f6472]">Complete these steps to configure your security dashboard</p>
        </div>

        <div className="divide-y divide-[#d7dce3]">
          {STEPS.map((step, i) => {
            const isDone = completed.includes(step.id)

            return (
              <div key={step.id} className="home-step-row flex items-center gap-4 px-4 py-4 transition-colors hover:bg-[#f8fafc]">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#202124] text-sm font-semibold text-[#fff]">
                  {i + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center gap-2">
                    <p className="text-[17px] font-medium leading-6 text-[#070707]">{step.title}</p>
                    <ExternalLink className="h-4 w-4 text-[#14171f]" />
                  </div>
                  <p className="text-[15px] leading-5 text-[#5f6472]">{step.description}</p>
                </div>

                <div className="home-step-actions flex flex-shrink-0 items-center gap-2">
                  {isDone ? (
                    <span className="rounded border border-[#d7dce3] bg-white px-3 py-1.5 text-sm text-[#697386]">
                      Completed
                    </span>
                  ) : (
                    <>
                      <button
                        onClick={() => handleStart(step)}
                        className="rounded bg-[#2563eb] px-3 py-1.5 text-sm font-medium text-[#fff] transition-colors hover:bg-[#1d4ed8]"
                      >
                        Start
                      </button>
                      <button
                        onClick={() => handleSkip(step.id)}
                        className="px-2 py-1.5 text-sm text-[#070707] transition-colors hover:text-[#2563eb]"
                      >
                        {skipped.includes(step.id) ? "Skipped" : "Skip"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
