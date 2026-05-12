import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Zap, Activity, Globe, FileCheck, Lock } from "lucide-react"
import { Integrations } from "@/components/integrations"

export const metadata: Metadata = {
  title: "BitLyft AIR® Features | AI Security Automation and Threat Response",
  description: "Respond to threats in milliseconds with BitLyft AIR®. AI-powered automation for detection, containment, audit trails, and compliance reporting.",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "Alert Ingestion & Threat Detection",
      description:
        "Real-time alerts from Microsoft 365, Graylog, Identity systems (Okta, OneLogin, Duo), Google Workspace.",
    },
    {
      icon: Activity,
      title: "AI-Assisted Triage & Investigation",
      description:
        "Intelligent automation prioritizes and enriches alerts, analyzes context, and surfaces key insights.",
    },
    {
      icon: Zap,
      title: "Automated Containment & Remediation",
      description:
        "Executes Graph API actions, suspending accounts, revoking sessions, isolating resources — all in milliseconds.",
    },
    {
      icon: FileCheck,
      title: "Case Management & Audit Trail",
      description:
        "Full visibility into every action, automation run, and decision path. Ideal for compliance, reporting, and continuous improvement.",
    },
    {
      icon: Globe,
      title: "Scalable, Serverless Architecture",
      description: "No agents, no infrastructure to maintain, built to scale effortlessly.",
    },
    {
      icon: Lock,
      title: "Compliance Reporting",
      description: "Automated compliance reporting for regulatory requirements including HIPAA, SOC 2, and more.",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Key Features and <span className="text-primary">Benefits</span>
            </h1>
            <p className="text-xl text-gray-300">Powered by AI-driven automation for real-time threat response</p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-lg p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-6 inline-block p-3 bg-primary/10 rounded-lg">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Game Changers Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">BitLyft AIR® Changes the Game</h2>
            <p className="text-xl text-gray-300">
              Your team, your rules – Security that works as fast as you need it to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
                <Activity className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Response Lag</h3>
              <p className="text-gray-400">Cut reaction time from minutes to seconds.</p>
            </div>

            <div className="text-center">
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
                <Zap className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Task Overload</h3>
              <p className="text-gray-400">Automates the grunt work, no more repetitive tasks.</p>
            </div>

            <div className="text-center">
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tool Silos</h3>
              <p className="text-gray-400">
                Real-time visibility to keep your defenses effective against evolving threats.
              </p>
            </div>
          </div>
        </section>

        <Integrations />
      </main>

      <Footer />
    </div>
  )
}
