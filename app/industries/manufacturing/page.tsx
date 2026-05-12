"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Factory, Shield, Network, Lock, CheckCircle, Cpu, Settings, AlertTriangle } from "lucide-react"

export default function ManufacturingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: Network,
      title: "OT Network Security",
      description:
        "Protect operational technology networks and industrial control systems from sophisticated cyber threats.",
    },
    {
      icon: Lock,
      title: "IP Protection",
      description:
        "Safeguard intellectual property, trade secrets, and proprietary manufacturing processes from theft and espionage.",
    },
    {
      icon: Cpu,
      title: "IoT Device Security",
      description:
        "Secure connected manufacturing devices and equipment with real-time monitoring and threat detection.",
    },
    {
      icon: Settings,
      title: "Production Continuity",
      description: "Ensure uninterrupted manufacturing operations with automated threat response and minimal downtime.",
    },
  ]

  const benefits = [
    "Protection of intellectual property and trade secrets",
    "OT and IT network security integration",
    "Real-time threat detection for industrial systems",
    "Automated response to minimize production downtime",
    "Compliance with industry security standards",
    "Supply chain risk management",
  ]

  const threats = [
    {
      threat: "Ransomware Attacks",
      impact: "Production shutdowns costing millions in lost revenue",
      solution: "AI-powered detection stops ransomware before it encrypts critical systems",
    },
    {
      threat: "IP Theft",
      impact: "Loss of competitive advantage and proprietary designs",
      solution: "Continuous monitoring detects unauthorized access to sensitive data",
    },
    {
      threat: "Supply Chain Attacks",
      impact: "Compromised vendors threatening entire production network",
      solution: "Extended detection and response across supply chain partners",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
              <Factory className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Manufacturing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Industrial-Grade</span>{" "}
              <span className="text-orange-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]">Cybersecurity</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              AI-driven threat detection and automated security solutions that protect intellectual property and OT
              networks from cyberattacks.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500/30 hover:bg-orange-500/10 hover:border-orange-500 bg-transparent"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#000a0e] to-black relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                Comprehensive Protection
              </span>{" "}
              for Manufacturing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure your entire manufacturing ecosystem from shop floor to enterprise systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center mb-5 group-hover:from-orange-500/30 group-hover:to-orange-500/10 transition-all border border-orange-500/30 shadow-lg shadow-orange-500/20">
                    <Icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
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
              Manufacturing{" "}
              <span className="text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.4)]">Benefits</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all hover:bg-card/30"
                >
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#000a0e] to-black relative">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[130px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.4)]">Manufacturing Threats</span>{" "}
              & Solutions
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {threats.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-red-400">{item.threat}</h3>
                    <p className="text-muted-foreground mb-4">{item.impact}</p>
                    <div className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">
                        <span className="font-semibold text-orange-400">Solution:</span> {item.solution}
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
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent border border-orange-500/40 shadow-2xl shadow-orange-500/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[0_0_30px_rgba(251,146,60,0.3)]">
              Secure Your Manufacturing Operations
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Protect your intellectual property, ensure production continuity, and defend against evolving cyber
              threats with BitLyft AIR®.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 transition-all"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500/30 hover:bg-orange-500/10 hover:border-orange-500 bg-transparent"
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
