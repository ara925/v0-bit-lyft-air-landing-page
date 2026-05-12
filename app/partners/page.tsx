"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import { useEffect } from "react"

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000a0e] via-[#001520] to-[#000a0e]">
      <Header />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            Partners & Integrations
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            BitLyft AIR® integrates seamlessly with your existing security stack to provide comprehensive automated
            protection.
          </p>
        </div>

        {/* Partner Benefits */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Partner with BitLyft</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Seamless Integration</h3>
              <p className="text-gray-400">
                Our platform integrates with leading security tools and platforms, enabling unified threat detection and
                response.
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Enhanced Value</h3>
              <p className="text-gray-400">
                Add autonomous capabilities to your existing security investments without replacing your current
                infrastructure.
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">API-First Architecture</h3>
              <p className="text-gray-400">
                Built with an API-first approach, making it easy to connect with any security tool or custom
                application.
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-400">
                Our partnership team provides comprehensive technical support and training for successful integration.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Categories */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Integration Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">SIEM & Log Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Splunk</li>
                <li>• Microsoft Sentinel</li>
                <li>• Elastic</li>
                <li>• Sumo Logic</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Endpoint Security</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CrowdStrike</li>
                <li>• Microsoft Defender</li>
                <li>• SentinelOne</li>
                <li>• Carbon Black</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Security</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS Security Hub</li>
                <li>• Azure Security Center</li>
                <li>• Google Cloud Security</li>
                <li>• Cloudflare</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Partnering?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can work together to deliver better security outcomes.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
