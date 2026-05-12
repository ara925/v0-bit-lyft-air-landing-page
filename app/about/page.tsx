import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About BitLyft AIR® | AI-Powered Security Operations Platform",
  description:
    "Learn about BitLyft AIR® — the team, mission, and technology behind autonomous security operations and AI-powered incident response.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000a0e] via-[#001520] to-[#000a0e]">
      <Header />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            About BitLyft AIR®
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Transforming cybersecurity operations with autonomous AI-powered threat detection and response.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                BitLyft AIR® is designed to eliminate alert fatigue and accelerate incident response for security
                operations centers worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe security teams should focus on strategic initiatives, not repetitive tasks. Our autonomous
                platform handles the grunt work, enabling your team to stay ahead of evolving threats.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Why BitLyft AIR®?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Autonomous security operations that work 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Reduce response time from minutes to seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>No-code automation for any security workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Real-time visibility across your entire security stack</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                Continuously pushing the boundaries of what's possible in automated cybersecurity.
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-gray-400">
                Every decision we make prioritizes the security and privacy of our customers.
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-3">Customer Success</h3>
              <p className="text-gray-400">
                Your success in defending against threats is our primary measure of success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your SOC?</h2>
            <p className="text-gray-300 mb-8">
              Join leading organizations using BitLyft AIR® to automate their security operations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/20"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
