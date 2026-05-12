import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GTMPageView } from "@/components/gtm-page-view"

export const metadata: Metadata = {
  title: "Pricing | BitLyft AIR® Security Automation Plans",
  description:
    "Simple, transparent pricing for BitLyft AIR®. Autonomous SOC automation, AI-powered threat detection, and automated incident response starting at $3/user/month.",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      description:
        "BitLyft AIR® with 90-day log retention enables all features of BitLyft AIR® for automated incident response and platform management.",
      users: "50 - 2,500",
      price: "$3.00",
      billing: "1-year subscription",
      total: "$36.00/user",
      freeTrial: false,
      features: [
        "90-day Log Retention",
        "Automated Incident Response",
        "Platform Management",
        "Monthly Executive Reports",
        "All Base Features",
      ],
    },
    {
      name: "Premium",
      description:
        "BitLyft AIR® with 365-day log retention enables all features of BitLyft AIR® with full compliance coverage. Ideal for organizations adhering to multiple higher compliance standards.",
      users: "50 - 25,000",
      price: "$3.50",
      billing: "1-year subscription",
      total: "$42.00/user",
      popular: true,
      freeTrial: true,
      features: [
        "365-day Log Retention",
        "Full Compliance Coverage",
        "Premium Reporting",
        "Monthly & Quarterly Reports",
        "Advanced Analytics",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <GTMPageView event="pricing_page_view" />
      <Header />
      <div className="min-h-screen bg-[#000a0e]">
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Choose Your <span className="text-blue-500">Plan</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                BitLyft AIR® delivers autonomous security operations that eliminate alert fatigue and accelerate your
                incident response. Starting at $36.00/user/year.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-gradient-to-b from-slate-900/50 to-slate-900/20 backdrop-blur-sm rounded-2xl border ${
                    plan.popular ? "border-blue-500 shadow-xl shadow-blue-500/20" : "border-slate-800"
                  } p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1`}
                >
                  {plan.freeTrial && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                        Free Trial
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">/user/month</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">{plan.billing}</div>
                    <div className="text-lg font-semibold text-blue-400">{plan.total}</div>
                    <div className="text-sm text-gray-500 mt-2">{plan.users} users</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="https://marketplace.microsoft.com/en-us/product/bitlyft.bitlyft_air?tab=PlansAndPrice"
                    target="_blank"
                  >
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30"
                          : "bg-slate-800 hover:bg-slate-700 text-white"
                      } transition-all duration-300`}
                    >
                      {plan.freeTrial ? "Start Your Free Trial" : "Get it now"}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-b from-slate-900/50 to-slate-900/20 backdrop-blur-sm rounded-2xl border border-slate-800 p-10 text-center hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Partner & <span className="text-cyan-400">Reseller Pricing</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Looking to offer BitLyft AIR® to your clients? We offer special pricing and benefits for partners and
                  resellers.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
                  >
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                All plans include automated incident response, threat detection, and 24/7 monitoring
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500/50 text-white hover:bg-blue-500/10 bg-transparent"
                >
                  Contact Sales for Custom Plans
                </Button>
              </Link>
            </div>

            <div className="flex justify-center mt-16 mb-4">
              <Link
                href="https://marketplace.microsoft.com/en-us/product/bitlyft.bitlyft_air?tab=PlansAndPrice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black_background_3070x906-F1wcWH3UR9KgVwManSa72CjqianxMY.png"
                  alt="Available on Microsoft Marketplace"
                  className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
