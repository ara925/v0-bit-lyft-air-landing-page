"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Check, X, Zap, Shield, Clock, DollarSign, Server, Users } from "lucide-react"

export default function ComparePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "detailed">("overview")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const statsHighlights = [
    { value: "75%", label: "Faster Response", icon: Clock },
    { value: "93", label: "Prebuilt Policies", icon: Shield },
    { value: "$2.50", label: "Per User/Month", icon: DollarSign },
    { value: "0", label: "Code Required", icon: Server },
  ]

  const competitors = [
    {
      name: "BitLyft AIR®",
      isBitlyft: true,
      noCodeResponse: true,
      autoResponseNoScripting: true,
      msft365Native: true,
      prebuiltPolicies: true,
      automatedContainment: true,
      agentless: true,
      multipleIdProviders: true,
      noAddOnFees: true,
      noEngineerRequired: true,
      bestFor: "Microsoft-centric orgs wanting fast, automated response",
    },
    {
      name: "Dropzone.ai",
      isBitlyft: false,
      noCodeResponse: "Sometimes",
      autoResponseNoScripting: "Sometimes",
      msft365Native: false,
      prebuiltPolicies: false,
      automatedContainment: "Sometimes",
      agentless: true,
      multipleIdProviders: true,
      noAddOnFees: "Unknown",
      noEngineerRequired: true,
      bestFor: "SOC teams needing post-alert automation",
    },
    {
      name: "Prophet Security",
      isBitlyft: false,
      noCodeResponse: "Sometimes",
      autoResponseNoScripting: true,
      msft365Native: "Sometimes",
      prebuiltPolicies: false,
      automatedContainment: "Sometimes",
      agentless: true,
      multipleIdProviders: "Sometimes",
      noAddOnFees: "Unknown",
      noEngineerRequired: true,
      bestFor: "Enterprise SOCs with high alert volumes",
    },
    {
      name: "Huntress",
      isBitlyft: false,
      noCodeResponse: false,
      autoResponseNoScripting: "Sometimes",
      msft365Native: true,
      prebuiltPolicies: false,
      automatedContainment: "Sometimes",
      agentless: false,
      multipleIdProviders: true,
      noAddOnFees: "Sometimes",
      noEngineerRequired: true,
      bestFor: "MSPs and SMBs needing managed detection",
    },
    {
      name: "Swimlane",
      isBitlyft: false,
      noCodeResponse: "Sometimes",
      autoResponseNoScripting: true,
      msft365Native: "Sometimes",
      prebuiltPolicies: true,
      automatedContainment: true,
      agentless: true,
      multipleIdProviders: true,
      noAddOnFees: "Sometimes",
      noEngineerRequired: false,
      bestFor: "Enterprise SOAR with custom workflows",
    },
    {
      name: "Torq",
      isBitlyft: false,
      noCodeResponse: "no-low code",
      autoResponseNoScripting: true,
      msft365Native: true,
      prebuiltPolicies: true,
      automatedContainment: true,
      agentless: true,
      multipleIdProviders: true,
      noAddOnFees: "Sometimes",
      noEngineerRequired: "Sometimes",
      bestFor: "Security teams needing hyperautomation",
    },
    {
      name: "Radiant Security",
      isBitlyft: false,
      noCodeResponse: "Sometimes",
      autoResponseNoScripting: true,
      msft365Native: "Sometimes",
      prebuiltPolicies: true,
      automatedContainment: true,
      agentless: true,
      multipleIdProviders: true,
      noAddOnFees: "Sometimes",
      noEngineerRequired: false,
      bestFor: "AI-driven SOC automation for enterprises",
    },
  ]

  const detailedComparisons = [
    {
      name: "Dropzone.ai",
      focus: "Post-alert automation and triage for SOC teams",
      strengths: ["100% alert coverage", "70% false positive reduction", "85+ integrations", "Transparent AI reasoning"],
      limitations: ["Sometimes requires scripting", "No prebuilt remediation policies", "Less Microsoft-native"],
      vsAir: "BitLyft AIR® offers true no-code automation and prebuilt policies while Dropzone often requires configuration.",
    },
    {
      name: "Prophet Security",
      focus: "Autonomous SOC analyst for enterprise alert management",
      strengths: ["5x efficiency improvement", "Learns from feedback", "Explainable AI", "Auto response without scripting"],
      limitations: ["No prebuilt remediation policies", "M365 integration varies", "Multi-IdP support varies"],
      vsAir: "BitLyft AIR® provides deeper M365 integration and prebuilt policies out of the box.",
    },
    {
      name: "Huntress",
      focus: "Human-led managed detection and response for SMBs/MSPs",
      strengths: ["Strong M365 support", "Multi-IdP support", "Predictable pricing", "Fast deployment"],
      limitations: ["No no-code response", "Agent-based deployment", "Less automation"],
      vsAir: "BitLyft AIR® offers true no-code, agentless automation vs. Huntress's agent-dependent model.",
    },
    {
      name: "Swimlane",
      focus: "Enterprise SOAR platform with workflow automation",
      strengths: ["Prebuilt policies", "Auto containment", "Multi-IdP support", "Agentless"],
      limitations: ["Requires internal engineer", "Add-on fees for integrations", "Complex for SMBs"],
      vsAir: "BitLyft AIR® requires no internal engineer and has no add-on fees for integrations.",
    },
    {
      name: "Torq",
      focus: "Hyperautomation platform for security teams",
      strengths: ["Strong M365 integration", "Prebuilt policies", "Auto containment", "Multi-IdP"],
      limitations: ["Low-code (not no-code)", "Sometimes requires engineer", "Add-on fees vary"],
      vsAir: "BitLyft AIR® is truly no-code with no add-on fees, while Torq is low-code with variable pricing.",
    },
    {
      name: "Radiant Security",
      focus: "AI-driven SOC automation for enterprises",
      strengths: ["Prebuilt policies", "Auto containment", "Agentless", "Multi-IdP support"],
      limitations: ["Requires internal engineer", "M365 integration varies", "Add-on fees"],
      vsAir: "BitLyft AIR® requires no internal engineer and offers deeper native M365 integration.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-[#00cFFF]/10 border border-[#00cFFF]/30 rounded-full mb-4">
              <span className="text-[#00cFFF] text-sm font-semibold">The Autonomous SOC for the 99%</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compare Security Platforms
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              See how BitLyft AIR® measures up against other autonomous SOC and AI-powered security solutions.
            </p>
            <div className="max-w-3xl mx-auto text-left bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                The cybersecurity landscape has evolved dramatically with the rise of AI-powered autonomous SOC platforms. Organizations now face a critical decision: which platform can best protect their assets while minimizing complexity and cost? BitLyft AIR® stands at the forefront of this evolution, offering an AI-powered cybersecurity platform designed specifically for automated threat detection, incident response, and continuous monitoring.
              </p>
              <p className="text-gray-400 leading-relaxed">
                What sets BitLyft AIR® apart is its strong emphasis on no-code deployment and native integration with Microsoft environments like Microsoft 365 and Azure. With 93 prebuilt security policies for immediate protection and millisecond response times via Graph API, BitLyft AIR® delivers enterprise-grade security that deploys in minutes, not months.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-zinc-800 bg-zinc-900/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800">
              {statsHighlights.map((stat, index) => (
                <div key={index} className="py-8 px-4 text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-[#00cFFF]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="container mx-auto px-6 py-8">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800"
              }`}
            >
              Quick Overview
            </button>
            <button
              onClick={() => setActiveTab("detailed")}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "detailed"
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800"
              }`}
            >
              Detailed Analysis
            </button>
          </div>
        </section>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <section className="container mx-auto px-6 py-8">
            <div className="max-w-6xl mx-auto">
              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-4 px-3 font-medium text-gray-500 whitespace-nowrap">Platform</th>
                      <th className="text-center py-4 px-2 font-medium text-gray-500 whitespace-nowrap">No-Code Response</th>
                      <th className="text-center py-4 px-2 font-medium text-gray-500 whitespace-nowrap">Auto Response</th>
                      <th className="text-center py-4 px-2 font-medium text-gray-500 whitespace-nowrap">M365 Native</th>
                      <th className="text-center py-4 px-2 font-medium text-gray-500 whitespace-nowrap">Prebuilt Policies</th>
                      <th className="text-center py-4 px-2 font-medium text-gray-500 whitespace-nowrap">Auto Containment</th>
                      <th className="text-center py-4 px-2 font-medium text-gray-500 whitespace-nowrap">Agentless</th>
                      <th className="text-center py-4 px-2 font-medium text-gray-500 whitespace-nowrap">Multi-IdP</th>
                      <th className="text-center py-4 px-2 font-medium text-gray-500 whitespace-nowrap">No Add-On Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((platform, index) => {
                      const renderCell = (value: boolean | string) => {
                        if (value === true) return <Check className="w-4 h-4 text-green-500 mx-auto" />
                        if (value === false) return <X className="w-4 h-4 text-zinc-600 mx-auto" />
                        return <span className="text-xs text-yellow-500">{value}</span>
                      }
                      return (
                        <tr
                          key={index}
                          className={`border-b border-zinc-800/50 ${
                            platform.isBitlyft ? "bg-[#00cFFF]/5" : "hover:bg-zinc-900/50"
                          }`}
                        >
                          <td className="py-4 px-3">
                            <div className="flex items-center gap-2">
                              <span className={`font-medium whitespace-nowrap ${platform.isBitlyft ? "text-[#00cFFF]" : "text-white"}`}>
                                {platform.name}
                              </span>
                              {platform.isBitlyft && (
                                <span className="text-[9px] bg-[#00cFFF]/20 text-[#00cFFF] px-1.5 py-0.5 rounded whitespace-nowrap">
                                  RECOMMENDED
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="text-center py-4 px-2">{renderCell(platform.noCodeResponse)}</td>
                          <td className="text-center py-4 px-2">{renderCell(platform.autoResponseNoScripting)}</td>
                          <td className="text-center py-4 px-2">{renderCell(platform.msft365Native)}</td>
                          <td className="text-center py-4 px-2">{renderCell(platform.prebuiltPolicies)}</td>
                          <td className="text-center py-4 px-2">{renderCell(platform.automatedContainment)}</td>
                          <td className="text-center py-4 px-2">{renderCell(platform.agentless)}</td>
                          <td className="text-center py-4 px-2">{renderCell(platform.multipleIdProviders)}</td>
                          <td className="text-center py-4 px-2">{renderCell(platform.noAddOnFees)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              
              {/* Legend */}
              <div className="mt-4 flex items-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3 text-green-500" />
                  <span>Yes</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-3 h-3 text-zinc-600" />
                  <span>No</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">Sometimes</span>
                  <span>= Partial/Varies</span>
                </div>
              </div>

              {/* Best For Cards */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-white mb-6">Best Use Cases</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {competitors.slice(0, 6).map((platform, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        platform.isBitlyft
                          ? "border-[#00cFFF]/30 bg-[#00cFFF]/5"
                          : "border-zinc-800 bg-zinc-900/30"
                      }`}
                    >
                      <div className={`font-medium mb-1 ${platform.isBitlyft ? "text-[#00cFFF]" : "text-white"}`}>
                        {platform.name}
                      </div>
                      <p className="text-sm text-gray-500">{platform.bestFor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Detailed Tab */}
        {activeTab === "detailed" && (
          <section className="container mx-auto px-6 py-8">
            <div className="max-w-4xl mx-auto space-y-6">
              {detailedComparisons.map((comp, index) => (
                <div
                  key={index}
                  className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          BitLyft AIR® vs {comp.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{comp.focus}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-xs font-medium text-green-500 uppercase tracking-wider mb-3">
                          {comp.name} Strengths
                        </h4>
                        <ul className="space-y-2">
                          {comp.strengths.map((s, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                              <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-red-400 uppercase tracking-wider mb-3">
                          {comp.name} Limitations
                        </h4>
                        <ul className="space-y-2">
                          {comp.limitations.map((l, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                              <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[#00cFFF]/5 border border-[#00cFFF]/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-[#00cFFF] mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-300">
                          <span className="text-[#00cFFF] font-medium">BitLyft AIR® Advantage:</span>{" "}
                          {comp.vsAir}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Differentiators Section */}
        <section className="container mx-auto px-6 py-12 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Why BitLyft AIR® Stands Out</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Built for Microsoft Ecosystems</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Unlike competitors that treat Microsoft integration as an afterthought, BitLyft AIR® was purpose-built for Microsoft 365 and Azure environments. This native integration enables real-time detection from M365 and identity systems, with automated response capabilities through Graph API that competitors simply cannot match.
                </p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">No-Code, Agentless Architecture</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  While platforms like Arctic Wolf and CrowdStrike require agents and complex configurations, BitLyft AIR® deploys in minutes with zero coding required. Our serverless, agentless architecture means no software to install, no infrastructure to manage, and no lengthy implementation cycles.
                </p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Millisecond Response Times</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When threats emerge, every second counts. BitLyft AIR® responds in milliseconds with automated actions like account suspension and session revocation. Compare this to human-dependent platforms like Arctic Wolf MDR that can take minutes to hours, or even Dropzone.ai's under-10-minute triage time.
                </p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Cost-Effective Automation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Starting at just $2.50 per user per month, BitLyft AIR® delivers enterprise-grade protection at a fraction of the cost of premium solutions like Darktrace or CrowdStrike. Our 93 prebuilt policies provide immediate value without expensive customization or professional services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to see BitLyft AIR® in action?
            </h2>
            <p className="text-gray-400 mb-8">
              Get a personalized demo and see why teams choose BitLyft AIR® for faster, smarter security.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8">
                  Request a Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
