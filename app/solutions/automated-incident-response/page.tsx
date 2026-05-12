"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Clock, CheckCircle2, XCircle, ArrowRight, TrendingUp, RefreshCw, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function AutomatedIncidentResponsePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div className="min-h-screen bg-[#000a0e]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-primary bg-clip-text text-transparent text-balance">
                Automated Incident Response
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty leading-relaxed">
                Cyber threats move faster than traditional security processes can handle. Manual investigation and
                response workflows often introduce delays that allow attacks to spread, escalate, and cause significant
                damage. Automated Incident Response eliminates these delays by enabling instant, intelligent action.
              </p>
              <p className="text-lg text-gray-400 mb-8 text-pretty leading-relaxed">
                BitLyft AIR® transforms how organizations manage security incidents by executing Graph API
                actions—such as suspending accounts, revoking sessions, and isolating devices—in milliseconds. Instead
                of reacting after the fact, businesses can contain and remediate threats in real time.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Link href="/pricing">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 border-y border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Why Automated Incident Response Matters</h2>
              <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Modern attacks are rapid and complex, often targeting identities, endpoints, and cloud environments
                simultaneously. Relying on manual processes creates gaps that attackers exploit.
              </p>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-12">
                <h3 className="text-xl font-bold mb-6 text-center">With Incident Response Automation, organizations can:</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Respond to threats instantly",
                    "Reduce mean time to respond (MTTR)",
                    "Eliminate human delays in critical workflows",
                    "Maintain 24/7 protection without manual effort",
                    "Minimize the impact of security incidents",
                    "Focus security teams on strategy while automation handles time-sensitive actions",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6">Response Time Comparison</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-2xl">
                  <XCircle className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-red-400">Traditional Response</h3>
                  <p className="text-4xl font-bold text-red-500 mb-4">Minutes</p>
                  <p className="text-gray-400">
                    Manual triage, investigation, and remediation take time. During these delays, attackers can move
                    laterally, escalate privileges, or deploy malware—turning small incidents into major breaches.
                  </p>
                </div>
                <div className="bg-primary/10 border border-primary/30 p-8 rounded-2xl">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-primary">BitLyft AIR®</h3>
                  <p className="text-4xl font-bold text-primary mb-4">Milliseconds</p>
                  <p className="text-gray-400">
                    With BitLyft AIR®, Automated Incident Response executes containment actions instantly. Alerts
                    trigger SOC-ready Automations that stop threats before they spread, significantly reducing risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">How Automated Incident Response Works</h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              BitLyft AIR® delivers a complete workflow through an advanced Incident Response Platform
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Alert Ingestion",
                  body: "Real-time alerts from Microsoft 365, SentinelOne, Okta, OneLogin, Duo, and Google Workspace are centralized into a single system for complete visibility.",
                },
                {
                  step: "2",
                  title: "AI-Assisted Triage",
                  body: "Automation analyzes alerts, prioritizes risks, and enriches data with context. This removes the need for manual triage and accelerates decision-making.",
                },
                {
                  step: "3",
                  title: "Automated Containment",
                  body: "The platform executes over 20 Graph API actions in milliseconds—suspending compromised accounts, revoking active sessions, and isolating infected devices.",
                },
                {
                  step: "4",
                  title: "Automated Remediation",
                  body: "Beyond containment, the system initiates remediation steps such as password resets, access removal, and endpoint cleanup—ensuring full recovery and compliance.",
                },
              ].map((item, i, arr) => (
                <div key={item.step} className="relative">
                  <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/50 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20 bg-gradient-to-b from-zinc-900/20 to-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Automated Response Capabilities</h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto -mt-8">
              BitLyft AIR® offers a range of powerful capabilities within its Incident Response Services. These ensure threats are contained quickly and consistently.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Zap className="w-10 h-10 text-primary mb-4" />,
                  title: "Account Suspension",
                  body: "Instantly blocks unauthorized access by suspending compromised accounts.",
                },
                {
                  icon: <Shield className="w-10 h-10 text-primary mb-4" />,
                  title: "Session Revocation",
                  body: "Terminates active sessions immediately to stop attackers in their tracks.",
                },
                {
                  icon: <Clock className="w-10 h-10 text-primary mb-4" />,
                  title: "Device Isolation",
                  body: "Prevents malware from spreading across networks by quarantining infected endpoints.",
                },
                {
                  icon: <CheckCircle2 className="w-10 h-10 text-primary mb-4" />,
                  title: "Password Resets",
                  body: "Secures compromised credentials automatically with forced password changes.",
                },
                {
                  icon: <RefreshCw className="w-10 h-10 text-primary mb-4" />,
                  title: "Access Control Enforcement",
                  body: "Adjusts permissions in real time to contain and limit attacker movement.",
                },
              ].map((cap) => (
                <div key={cap.title} className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800">
                  {cap.icon}
                  <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-400">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Real Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">75%</div>
                  <p className="text-gray-400">Reduction in response times (customer reported)</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-gray-400">Continuous protection without human intervention</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">20+</div>
                  <p className="text-gray-400">Graph API remediation actions included</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 border-y border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Benefits of Incident Response Automation</h2>
              <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Adopting Incident Response Automation delivers clear advantages for security teams and the business.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: <Zap className="w-8 h-8 text-primary mb-3" />, title: "Speed", body: "Immediate action reduces the risk of escalation. Threats are contained before they spread." },
                  { icon: <CheckCircle2 className="w-8 h-8 text-primary mb-3" />, title: "Consistency", body: "SOC-ready automations ensure accurate and repeatable responses every time." },
                  { icon: <BarChart3 className="w-8 h-8 text-primary mb-3" />, title: "Scalability", body: "Handles large volumes of alerts without increasing headcount or workload." },
                  { icon: <TrendingUp className="w-8 h-8 text-primary mb-3" />, title: "Cost Efficiency", body: "Reduces reliance on manual processes and operational overhead significantly." },
                  { icon: <Shield className="w-8 h-8 text-primary mb-3" />, title: "Stronger Security", body: "Stops threats earlier in the attack chain, limiting potential damage." },
                  { icon: <RefreshCw className="w-8 h-8 text-primary mb-3" />, title: "Continuous Protection", body: "Real-time threat visibility and faster decision-making across all systems, 24/7." },
                ].map((b) => (
                  <div key={b.title} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-primary/30 transition-all">
                    {b.icon}
                    <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                    <p className="text-sm text-gray-400">{b.body}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">A Smarter Approach to Incident Response</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Traditional Incident Response Services are reactive, addressing threats after they occur. In contrast, automation enables a proactive approach by identifying and neutralizing threats instantly.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  By using an integrated Incident Response Platform, organizations gain real-time threat visibility, faster decision-making, and continuous protection across systems — essential for keeping up with today&apos;s evolving threat landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl p-12 border border-primary/30 shadow-2xl shadow-primary/10">
              <h2 className="text-4xl font-bold mb-4">Stop Threats in Milliseconds</h2>
              <p className="text-xl text-gray-300 mb-4">
                The difference between containment and compromise often comes down to speed. BitLyft AIR® combines
                AI-driven insights with powerful Automated Incident Response capabilities to stop threats before they
                cause damage.
              </p>
              <p className="text-gray-400 mb-8">
                Upgrade your security operations with advanced Incident Response Automation. BitLyft AIR® delivers the
                speed, intelligence, and reliability needed to protect modern environments.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
