"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Building2, Shield, FileCheck, CheckCircle, Lock, AlertTriangle } from "lucide-react"

export default function FinancialServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Data Protection",
      description:
        "Safeguard sensitive customer financial data with real-time threat monitoring and automated response capabilities.",
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description:
        "Meet strict requirements including PCI-DSS, GLBA, SOX, and other financial regulations with automated compliance reporting.",
    },
    {
      icon: Lock,
      title: "Fraud Prevention",
      description: "Detect and prevent fraudulent activities with AI-powered threat detection and behavioral analysis.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description:
        "Continuous monitoring and assessment of security risks to protect against financial losses and reputational damage.",
    },
  ]

  const benefits = [
    "24/7 automated threat monitoring and incident response",
    "Compliance with PCI-DSS, GLBA, SOX, and FFIEC requirements",
    "Protection against ransomware, phishing, and insider threats",
    "Automated audit trails and compliance documentation",
    "Real-time alerts for suspicious activities",
    "Reduced response time from hours to seconds",
  ]

  const challenges = [
    {
      challenge: "Increasing Cyberattacks",
      solution: "AI-powered threat detection identifies and neutralizes threats before they cause damage",
    },
    {
      challenge: "Complex Compliance Requirements",
      solution: "Automated compliance reporting and audit trails ensure continuous regulatory adherence",
    },
    {
      challenge: "Resource Constraints",
      solution: "Autonomous security operations reduce the need for large security teams",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Financial Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Cybersecurity for</span>{" "}
              <span className="text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">Financial Institutions</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              Protect sensitive customer data, meet strict regulatory requirements, and prevent cyberattacks through
              continuous monitoring and automated compliance reporting.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#000a0e] to-black relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Comprehensive Protection</span>{" "}
              for Financial Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              BitLyft AIR® delivers enterprise-grade security tailored for banks, credit unions, and financial
              institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all border border-primary/30 shadow-lg shadow-primary/20">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
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
              Key <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Benefits</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all hover:bg-card/30"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#000a0e] to-black relative">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Addressing{" "}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Industry Challenges</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-400">Challenge</h3>
                    <p className="text-foreground">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-primary">BitLyft AIR® Solution</h3>
                    <p className="text-muted-foreground">{item.solution}</p>
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
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/40 shadow-2xl shadow-primary/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Secure Your Financial Institution Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading financial institutions that trust BitLyft AIR® to protect their critical assets and ensure
              regulatory compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
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
