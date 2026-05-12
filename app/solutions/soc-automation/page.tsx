"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Workflow, Users, Zap, Code2, Server, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function SOCAutomationPage() {
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
                Autonomous SOC Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty leading-relaxed">
                Modern security operations demand speed, accuracy, and continuous coverage—but traditional SOC models
                often struggle to keep up with alert volume and operational complexity. Autonomous SOC Automation
                transforms how organizations manage security by combining intelligent workflows, AI-driven
                decision-making, and a no-code environment to streamline operations without increasing overhead.
              </p>
              <p className="text-lg text-gray-400 mb-8 text-pretty leading-relaxed">
                Built to reduce dependency on large SOC teams, this approach enables organizations to automate
                repetitive tasks, accelerate response times, and maintain consistent security coverage. With an
                intuitive no-code automation builder, even complex workflows can be created, modified, and deployed
                without scripting or development expertise.
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

        {/* No-Code Builder */}
        <section className="py-20 border-y border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">No-Code Automation</h2>
              <p className="text-gray-400 text-center mb-4 max-w-3xl mx-auto">
                A core component of any effective SOC Automation Platform is usability. The no-code automation removes
                technical barriers, allowing teams to map alerts to actions in under a minute.
              </p>
              <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Security teams can quickly define how alerts should be handled without writing a single line of code.
                This empowers faster implementation and reduces reliance on specialized engineering resources.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-8 rounded-2xl border border-zinc-800">
                  <Code2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">No-Code Workflow Builder</h3>
                  <p className="text-gray-400 mb-4">
                    Map alerts to predefined actions instantly with a visual interface that requires no scripting or manual configuration.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Map alerts to predefined actions instantly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Eliminate scripting or manual configuration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Enable rapid updates as threats evolve</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-8 rounded-2xl border border-zinc-800">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Rapid Deployment</h3>
                  <p className="text-gray-400 mb-4">
                    Speed is critical in modern security environments. Go from setup to production in minutes with no infrastructure or complex configuration required.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Setup completed in under five minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Instant activation of automation playbooks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>No infrastructure or complex configuration required</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 text-center">SOC Ready Automation Templates</h3>
                <p className="text-gray-400 text-center text-sm max-w-2xl mx-auto">
                  Pre-built automation templates tailored for common SOC tasks reduce setup time and provide a strong
                  starting point. Use ready-made workflows for frequent security scenarios and quickly adapt to new
                  threat patterns—ensuring automation is fast to implement, consistent, and reliable across operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Autonomous SOC Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Workflow className="w-12 h-12 text-primary mb-4" />,
                  title: "Automated Workflows",
                  body: "Automation handles repetitive tasks such as password resets, account suspensions, and device isolation—freeing teams to focus on high-value investigations and strategic initiatives.",
                },
                {
                  icon: <Users className="w-12 h-12 text-primary mb-4" />,
                  title: "Reduce Alert Fatigue",
                  body: "Security teams face thousands of alerts daily. Autonomous SOC Automation filters noise by automatically handling low-priority alerts, reducing cognitive load and improving response efficiency.",
                },
                {
                  icon: <Server className="w-12 h-12 text-primary mb-4" />,
                  title: "Serverless Architecture",
                  body: "A serverless design eliminates the need for maintaining hardware, agents, or backend systems. No infrastructure overhead, automatic scalability, and reduced operational complexity.",
                },
                {
                  icon: <Zap className="w-12 h-12 text-primary mb-4" />,
                  title: "24/7 Operations",
                  body: "Threats don't follow business hours. Autonomous SOC Automation ensures always-on protection with immediate incident response and no dependency on shift-based teams.",
                },
                {
                  icon: <Code2 className="w-12 h-12 text-primary mb-4" />,
                  title: "Integration Mapping",
                  body: "Connect with existing tools including Microsoft 365, identity and access management systems, and SIEM platforms. Alerts from any source can be mapped to automated actions quickly.",
                },
                {
                  icon: <CheckCircle2 className="w-12 h-12 text-primary mb-4" />,
                  title: "Minimal Maintenance",
                  body: "A serverless, update-driven architecture means automatic updates, reduced manual intervention, and lower operational overhead—so teams can focus on improving security posture.",
                },
              ].map((cap) => (
                <div key={cap.title} className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all">
                  {cap.icon}
                  <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Benefits */}
        <section className="py-20 bg-gradient-to-b from-zinc-900/20 to-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Who Benefits from SOC Automation?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "IT and Security Teams",
                  body: "Daily operational tasks can consume significant time and resources. SOC Automation enables teams to automate routine remediation activities such as handling suspicious sign-ins, managing mailbox forwarding issues, and resetting compromised credentials—allowing them to prioritize strategic initiatives over repetitive work.",
                },
                {
                  title: "MSPs and MSSPs",
                  body: "Managed service providers can enhance their offerings by integrating Autonomous SOC Automation into client environments. Deliver scalable SOC services, support multiple clients efficiently, and reduce operational overhead—creating opportunities to provide high-value services without increasing staffing requirements.",
                },
                {
                  title: "CISOs and Security Leadership",
                  body: "Leadership teams need visibility, efficiency, and measurable outcomes. A strong SOC Automation Platform supports this by reducing Mean Time to Detect (MTTD), lowering Mean Time to Respond (MTTR), and providing audit-ready reporting to help justify investments and demonstrate clear ROI.",
                },
                {
                  title: "Mid-Sized Organizations",
                  body: "Not every organization has the resources for a full-scale SOC. SOC Automation provides enterprise-level capabilities without the associated cost or complexity—ideal for organizations with limited security staff, growing businesses needing scalable solutions, and teams looking to enhance security without expanding headcount.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-8 rounded-2xl border border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">SOC Automation Results</h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Implementing Autonomous SOC Automation delivers measurable improvements across operations.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">Lower</div>
                <p className="text-gray-400">Operating costs through reduced manual effort</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                <p className="text-gray-400">Additional analysts required for daily tasks</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-400">Coverage without shift limitations</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">Scalable</div>
                <p className="text-gray-400">Operations that grow with organizational needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl p-12 border border-primary/30 shadow-2xl shadow-primary/10">
              <h2 className="text-4xl font-bold mb-4">Build Your Autonomous SOC</h2>
              <p className="text-xl text-gray-300 mb-4">
                Security operations are evolving, and automation is no longer optional. By adopting Autonomous SOC
                Automation, organizations can streamline workflows, reduce response times, and maintain continuous
                protection without increasing complexity.
              </p>
              <p className="text-gray-400 mb-8">
                Scale your security operations with confidence and transform how your SOC operates—moving from reactive
                processes to proactive, automated defense.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Link href="/contact">Schedule a Demo</Link>
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
