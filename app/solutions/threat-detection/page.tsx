"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Eye, AlertTriangle, Activity, Search } from "lucide-react"
import Link from "next/link"

export default function ThreatDetectionPage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-primary bg-clip-text text-transparent text-balance drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Intelligent Threat Detection
              </h1>
              <p className="text-xl text-gray-300 mb-6 text-pretty leading-relaxed drop-shadow-lg">
                Modern organizations face an ever-evolving threat landscape where speed, accuracy, and context are
                critical. Intelligent Threat Detection with BitLyft AIR® is designed to provide continuous visibility
                across your environment while ensuring that threats are identified, analyzed, and prioritized in real
                time.
              </p>
              <p className="text-lg text-gray-400 mb-8 text-pretty leading-relaxed">
                By combining advanced automation with contextual intelligence, this solution transforms how security
                teams detect and respond to potential risks. Unlike traditional approaches that rely on manual review
                and static rules, BitLyft AIR® introduces AI-Powered Threat Detection that dynamically adapts to new
                threats—enabling faster identification of anomalies, improved accuracy, and a significant reduction in
                alert fatigue.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href="/pricing">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 bg-transparent hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Alert Sources */}
        <section className="py-20 border-y border-zinc-800/50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative">
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Comprehensive Alert Ingestion
            </h2>
              <p className="text-gray-400 text-center mb-4 max-w-3xl mx-auto">
                BitLyft AIR® delivers Real-Time Threat Detection by integrating directly with your most important
                systems and tools. Alerts are captured, analyzed, and enriched the moment they occur, ensuring your
                team is always one step ahead.
              </p>
              <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                BitLyft AIR® ingests alerts from all critical security tools in real time, providing a centralized and
                unified view of your security posture.
              </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Microsoft 365",
                  body: "Monitor identity, mailbox, device, and collaboration alerts across your organization. Gain visibility into suspicious logins, phishing attempts, and unauthorized access.",
                },
                {
                  title: "Identity Systems",
                  body: "Integrate with platforms like Okta, OneLogin, and Duo to monitor authentication events, detect compromised credentials, and flag risky behavior.",
                },
                {
                  title: "Google Workspace",
                  body: "Track Gmail, Drive, and workspace security events to identify potential data breaches or unauthorized sharing activities.",
                },
                {
                  title: "Custom Integrations",
                  body: "Extend your detection capabilities with API-based integrations tailored to your unique security stack.",
                },
                {
                  title: "More Coming Soon",
                  body: "The integration ecosystem continues to expand, ensuring compatibility with evolving technologies and tools.",
                },
              ].map((src) => (
                <div key={src.title} className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-1 group">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{src.title}</h3>
                  <p className="text-sm text-gray-400">{src.body}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-center mt-8 max-w-3xl mx-auto text-sm">
              This seamless ingestion ensures that no alert goes unnoticed, forming the foundation for Automated Threat Detection across your entire environment.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI-Powered Detection Capabilities
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              At the core of BitLyft AIR® lies a powerful engine built for AI-Powered Threat Detection. It goes beyond
              simple alert collection to deliver actionable intelligence through automation and contextual analysis.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:-translate-y-1 group">
                <Eye className="w-12 h-12 text-primary mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4">Intelligent Triage</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  AI-driven automation prioritizes and enriches alerts instantly. Instead of overwhelming your team with
                  raw data, the platform filters, categorizes, and ranks threats based on severity and relevance.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  This Automated Threat Detection capability ensures that only the most critical alerts demand
                  attention, allowing security teams to focus on high-impact incidents and significantly reduce
                  response times.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:-translate-y-1 group">
                <Search className="w-12 h-12 text-primary mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4">Contextual Analysis</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Every alert is enriched with meaningful context, transforming isolated signals into actionable
                  insights. BitLyft AIR® analyzes user behavior patterns, historical activity, threat intelligence
                  feeds, and system interactions.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  This deep level of analysis enables Intelligent Threat Detection that identifies not just what
                  happened, but why it matters—giving teams a clearer understanding of potential risks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:-translate-y-1 group">
                <Activity className="w-12 h-12 text-primary mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4">Real-Time Monitoring</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Continuous monitoring ensures that threats are detected the moment they emerge. With Real-Time Threat
                  Detection, there are no delays between detection and awareness.
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  {["Identify threats as they occur", "Minimize dwell time", "Prevent escalation of attacks", "Enable rapid incident response"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#8250;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:-translate-y-1 group">
                <AlertTriangle className="w-12 h-12 text-primary mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4">Noise Reduction</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  One of the biggest challenges in cybersecurity is alert fatigue. Traditional systems often generate
                  excessive false positives, overwhelming security teams and causing critical threats to be overlooked.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  BitLyft AIR® addresses this with intelligent noise reduction powered by AI, identifying patterns
                  associated with false positives and suppressing them automatically—surfacing only actionable events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-zinc-900/20 to-transparent relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Detection That Actually Works
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                BitLyft AIR® is engineered to deliver measurable results through speed, accuracy, and automation.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-zinc-900/30 to-transparent rounded-2xl border border-zinc-800/30 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                  <div className="text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    Milliseconds
                  </div>
                  <p className="text-gray-400">Alerts are detected and analyzed instantly, enabling immediate action</p>
                </div>
                <div className="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-zinc-900/30 to-transparent rounded-2xl border border-zinc-800/30 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                  <div className="text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    Fewer
                  </div>
                  <p className="text-gray-400">False positives with advanced filtering that ensures only relevant alerts reach your team</p>
                </div>
                <div className="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-zinc-900/30 to-transparent rounded-2xl border border-zinc-800/30 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                  <div className="text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    More
                  </div>
                  <p className="text-gray-400">Actionable alerts with prioritized insights that help teams respond quickly and effectively</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 border border-zinc-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-4 text-center">Why Intelligent Threat Detection Matters</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 text-center">
                  As cyber threats become more sophisticated, relying on manual processes or outdated systems is no
                  longer sufficient. Intelligent Threat Detection empowers security teams by:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Reducing time spent on manual analysis",
                    "Improving accuracy in threat identification",
                    "Enhancing visibility across all systems",
                    "Enabling faster, more informed decision-making",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#8250;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl p-12 border border-primary/30 shadow-2xl shadow-primary/20 backdrop-blur-sm hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] transition-all duration-500">
              <h2 className="text-4xl font-bold mb-4 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Detect Threats Before They Strike
              </h2>
              <p className="text-xl text-gray-300 mb-4 drop-shadow-lg">
                BitLyft AIR® combines Intelligent Threat Detection, AI-Powered Threat Detection, Automated Threat
                Detection, and Real-Time Threat Detection into a unified platform designed for modern security
                challenges.
              </p>
              <p className="text-gray-400 mb-8">
                By leveraging advanced AI, continuous monitoring, and automated workflows, organizations can detect
                threats earlier, respond faster, and operate more efficiently. Experience a smarter approach to
                cybersecurity—where detection is not just fast, but truly intelligent.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href="/contact">Schedule a Demo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 bg-transparent hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5"
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
