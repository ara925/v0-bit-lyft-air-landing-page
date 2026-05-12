"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Building2, Users, Award, TrendingUp, Shield, Headphones } from "lucide-react"
import { useEffect } from "react"

export default function ResellerPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const benefits = [
    {
      icon: TrendingUp,
      title: "Recurring Revenue",
      description:
        "Build predictable, scalable revenue streams with our subscription-based model and competitive margins.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Offer your clients best-in-class automated incident response and threat detection capabilities.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Access to our partner success team, technical resources, and comprehensive training programs.",
    },
    {
      icon: Award,
      title: "Co-Marketing Opportunities",
      description: "Joint marketing initiatives, case studies, and sales enablement materials to drive growth.",
    },
    {
      icon: Users,
      title: "Partner Portal",
      description: "Manage your clients, track deals, and access resources through our dedicated partner portal.",
    },
    {
      icon: Building2,
      title: "White-Label Options",
      description: "Deliver BitLyft AIR® under your brand with customizable options for select partners.",
    },
  ]

  const partnerTypes = [
    {
      title: "Managed Security Service Providers (MSSPs)",
      description:
        "Enhance your security offerings with automated incident response, expanding your service portfolio and increasing operational efficiency.",
      features: [
        "Multi-tenant management",
        "White-label capabilities",
        "Automated SOC operations",
        "24/7 monitoring automation",
      ],
    },
    {
      title: "Value-Added Resellers (VARs)",
      description:
        "Add BitLyft AIR® to your cybersecurity portfolio and provide clients with cutting-edge autonomous security operations.",
      features: ["Competitive margins", "Sales training", "Demo environment access", "Lead generation support"],
    },
    {
      title: "Technology Partners",
      description:
        "Integrate BitLyft AIR® with your platform to deliver comprehensive security solutions to mutual customers.",
      features: [
        "API access",
        "Technical integration support",
        "Joint solutions development",
        "Co-marketing opportunities",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#000a0e] via-[#0a1628] to-[#000a0e]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
          <div
            className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "1.5s", animationDuration: "4s" }}
          />

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance text-white drop-shadow-2xl">
                Become a{" "}
                <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">BitLyft Partner</span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed text-pretty max-w-2xl mx-auto">
                Join our growing partner ecosystem and deliver autonomous security operations to your clients. Unlock
                new revenue streams and differentiate your offerings with BitLyft AIR®.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
                  >
                    Become a Partner
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500/50 text-white hover:bg-cyan-500/10 bg-transparent backdrop-blur-sm"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Partner <span className="text-cyan-400">Benefits</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to succeed in delivering autonomous security operations to your clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-slate-900/50 to-slate-900/20 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Partner <span className="text-cyan-400">Programs</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We work with various partner types to deliver BitLyft AIR® to organizations worldwide.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-slate-900/50 to-slate-900/20 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with BitLyft?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner program today and start delivering autonomous security operations to your clients.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
