"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Shield, FileText, CheckCircle, Database, Activity } from "lucide-react"

export default function HealthcarePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: Database,
      title: "EHR Protection",
      description:
        "Secure electronic health records with real-time monitoring and advanced threat detection to prevent unauthorized access.",
    },
    {
      icon: FileText,
      title: "HIPAA Compliance",
      description:
        "Ensure continuous HIPAA compliance with automated audit trails, incident documentation, and regulatory reporting.",
    },
    {
      icon: Shield,
      title: "Ransomware Defense",
      description:
        "Protect patient data from ransomware attacks with AI-powered threat detection and automated incident response.",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description:
        "24/7 surveillance of healthcare systems to detect and respond to threats before they impact patient care.",
    },
  ]

  const benefits = [
    "HIPAA-compliant security operations and reporting",
    "Protection of patient health information (PHI)",
    "Automated threat detection and response",
    "Reduced risk of costly data breaches",
    "Compliance documentation for audits",
    "Integration with existing healthcare IT systems",
  ]

  const stats = [
    { value: "10M+", label: "Patient Records Protected" },
    { value: "99.9%", label: "Threat Detection Rate" },
    { value: "<30s", label: "Average Response Time" },
    { value: "100%", label: "HIPAA Compliant" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-400 font-medium">Healthcare Sector</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">HIPAA-Compliant</span>{" "}
              <span className="text-pink-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">Healthcare Security</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              Advanced threat detection and compliance support to secure EHRs and ensure HIPAA compliance, safeguarding
              institutions from ransomware and cyber threats.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-500/30 hover:bg-pink-500/10 hover:border-pink-500 bg-transparent"
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
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]">
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
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-pink-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]">Specialized Healthcare</span>{" "}
              Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Protecting patient data and ensuring compliance with healthcare-specific security requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-pink-500/10 transition-all border border-pink-500/30 shadow-lg shadow-pink-500/20">
                    <Icon className="w-7 h-7 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
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
              Healthcare <span className="text-pink-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]">Benefits</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/20 backdrop-blur-sm border border-border/50 hover:border-pink-500/30 transition-all hover:bg-card/30"
                >
                  <CheckCircle className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#000a0e] to-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-pink-500/20 via-pink-500/10 to-transparent border border-pink-500/40 shadow-2xl shadow-pink-500/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]">
              Protect Your Healthcare Organization
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join healthcare providers nationwide who trust BitLyft AIR® to safeguard patient data and maintain HIPAA
              compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/40 hover:shadow-pink-500/60 transition-all"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-500/30 hover:bg-pink-500/10 hover:border-pink-500 bg-transparent"
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
