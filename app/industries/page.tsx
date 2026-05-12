import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Building2, Heart, Factory, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI-Powered Cybersecurity Solutions by Industry | BitLyft AIR®",
  description: "BitLyft AIR® delivers custom cybersecurity for financial sector, healthcare, manufacturing, and public utilities with AI-driven threat detection and response.",
}

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      description:
        "Protect sensitive customer data, meet strict regulatory requirements, and prevent cyberattacks through continuous monitoring and automated compliance reporting.",
      color: "cyan",
      href: "/industries/financial-services",
    },
    {
      icon: Heart,
      title: "Healthcare Sector",
      description:
        "Advanced threat detection and compliance support to secure EHRs and ensure HIPAA compliance, safeguarding institutions from ransomware and cyber threats.",
      color: "pink",
      href: "/industries/healthcare",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "AI-driven threat detection and automated security solutions that protect intellectual property and OT networks from cyberattacks.",
      color: "orange",
      href: "/industries/manufacturing",
    },
    {
      icon: Zap,
      title: "Public Utilities",
      description:
        "Continuous threat monitoring ensuring security and resilience of critical infrastructure with rapid incident response capabilities.",
      color: "purple",
      href: "/industries/public-utilities",
    },
  ]

  const colorClasses = {
    cyan: "border-cyan-500/30 hover:border-cyan-500/50",
    pink: "border-pink-500/30 hover:border-pink-500/50",
    orange: "border-orange-500/30 hover:border-orange-500/50",
    purple: "border-purple-500/30 hover:border-purple-500/50",
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Custom <span className="text-primary">Cybersecurity</span> for Every Industry
            </h1>
            <p className="text-xl text-gray-300">
              No two industries face the same security challenges. BitLyft AIR® tailors its solutions to meet the
              specific needs of different sectors.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-b from-zinc-900 to-black border rounded-xl p-8 transition-all duration-300 ${colorClasses[industry.color as keyof typeof colorClasses]}`}
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg">
                  <industry.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{industry.description}</p>
                <Button asChild variant="outline" className="border-primary/50 text-white hover:bg-primary/10 bg-transparent group/btn">
                  <Link href={industry.href} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-lg p-8">
                <div className="text-5xl font-bold text-primary mb-4">500+</div>
                <div className="text-gray-300">Organizations Protected</div>
              </div>

              <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-lg p-8">
                <div className="text-5xl font-bold text-primary mb-4">98%</div>
                <div className="text-gray-300">Threat Detection Rate</div>
              </div>

              <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-lg p-8">
                <div className="text-5xl font-bold text-primary mb-4">&lt;1s</div>
                <div className="text-gray-300">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "How does BitLyft AIR® support financial services?",
                  answer:
                    "BitLyft AIR® offers continuous monitoring, automated compliance reporting, and threat detection to protect financial institutions from cyberattacks and ensure regulatory compliance.",
                },
                {
                  question: "What are the benefits of BitLyft AIR® for healthcare institutions?",
                  answer:
                    "In healthcare, BitLyft AIR® ensures the security of patient data, protects against ransomware, and helps institutions meet HIPAA compliance requirements.",
                },
                {
                  question: "Why is BitLyft AIR® essential for public utilities?",
                  answer:
                    "BitLyft AIR® provides continuous threat monitoring and automated incident response, ensuring the security and resilience of critical infrastructure.",
                },
                {
                  question: "How does BitLyft AIR® benefit manufacturers?",
                  answer:
                    "BitLyft AIR® protects manufacturing networks from cyberattacks by identifying vulnerabilities and providing AI-driven threat detection and response solutions.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
