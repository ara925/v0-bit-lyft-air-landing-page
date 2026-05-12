"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Power, Shield, Zap, CheckCircle, Server, AlertCircle, Eye } from "lucide-react"

export default function PublicUtilitiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: Server,
      title: "Critical Infrastructure Protection",
      description: "Safeguard essential power, water, and energy systems from nation-state attacks and cybercriminals.",
    },
    {
      icon: Eye,
      title: "24/7 Threat Monitoring",
      description: "Continuous surveillance of SCADA, ICS, and operational technology systems for anomalous activity.",
    },
    {
      icon: Zap,
      title: "Rapid Incident Response",
      description: "Automated response capabilities that neutralize threats in seconds to prevent service disruptions.",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description:
        "Meet NERC CIP, TSA, and other critical infrastructure security requirements with automated reporting.",
    },
  ]

  const benefits = [
    "Protection of critical infrastructure and essential services",
    "NERC CIP and TSA security compliance",
    "Real-time monitoring of SCADA and ICS systems",
    "Automated threat response to prevent outages",
    "Integration with existing utility management systems",
    "Resilience against nation-state cyber threats",
  ]

  const stats = [
    { value: "99.99%", label: "System Uptime" },
    { value: "<15s", label: "Threat Response Time" },
    { value: "24/7", label: "Monitoring Coverage" },
    { value: "100%", label: "Compliance Rate" },
  ]

  const risks = [
    {
      risk: "Nation-State Attacks",
      description: "Sophisticated APT groups targeting critical infrastructure",
      mitigation: "Advanced threat detection identifies state-sponsored attack patterns",
    },
    {
      risk: "Ransomware",
      description: "Attacks designed to disrupt essential services and extort payment",
      mitigation: "Automated response prevents encryption and system compromise",
    },
    {
      risk: "Insider Threats",
      description: "Malicious or negligent employees with system access",
      mitigation: "Behavioral analytics detect unusual access patterns and activities",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Power className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Public Utilities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Protecting</span>{" "}
              <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">Critical Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              Continuous threat monitoring ensuring security and resilience of critical infrastructure with rapid
              incident response capabilities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 bg-transparent"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-[#000a0e]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#000a0e] to-black relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                Enterprise-Grade Security
              </span>{" "}
              for Utilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection for power grids, water systems, and energy infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-5 group-hover:from-cyan-500/30 group-hover:to-cyan-500/10 transition-all border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-black relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Utility <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">Benefits</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30 transition-all hover:bg-card/30"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#000a0e] to-black relative">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">Threat Landscape</span> &
              Mitigation
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {risks.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-red-400">{item.risk}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">
                        <span className="font-semibold text-cyan-400">Mitigation:</span> {item.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              Secure Critical Infrastructure Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join utility providers nationwide who rely on BitLyft AIR® to protect essential services and maintain
              operational resilience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
