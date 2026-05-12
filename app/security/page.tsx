import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Security | BitLyft AIR® Platform Security Practices",
  description:
    "Learn how BitLyft AIR® protects your data with enterprise-grade security practices, encryption, compliance frameworks, and responsible disclosure policies.",
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000a0e] via-[#001520] to-[#000a0e]">
      <Header />

      <main className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            Security at BitLyft
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We practice what we preach. Our security-first approach protects your data with enterprise-grade measures.
          </p>
        </div>

        {/* Security Measures */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Data Encryption</h3>
              <p className="text-gray-400 mb-4">
                All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• End-to-end encryption</li>
                <li>• Secure key management</li>
                <li>• Regular encryption audits</li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <Lock className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Access Control</h3>
              <p className="text-gray-400 mb-4">
                Strict access controls and multi-factor authentication protect your account.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Role-based access control (RBAC)</li>
                <li>• Multi-factor authentication (MFA)</li>
                <li>• Session management</li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <Eye className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Monitoring & Detection</h3>
              <p className="text-gray-400 mb-4">
                24/7 security monitoring and automated threat detection protect our infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Real-time threat detection</li>
                <li>• Automated incident response</li>
                <li>• Continuous security monitoring</li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <FileCheck className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Compliance</h3>
              <p className="text-gray-400 mb-4">We maintain compliance with industry standards and regulations.</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• SOC 2 Type II certified</li>
                <li>• GDPR compliant</li>
                <li>• Regular third-party audits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Security Practices</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Vulnerability Management:</strong> We conduct regular penetration testing
                and vulnerability assessments to identify and remediate security issues.
              </p>
              <p>
                <strong className="text-white">Incident Response:</strong> Our security team follows a comprehensive
                incident response plan to quickly address any security events.
              </p>
              <p>
                <strong className="text-white">Employee Training:</strong> All BitLyft employees undergo regular
                security awareness training and background checks.
              </p>
              <p>
                <strong className="text-white">Responsible Disclosure:</strong> We welcome security researchers to
                report vulnerabilities through our responsible disclosure program at{" "}
                <a href="mailto:security@bitlyft.com" className="text-blue-400 hover:text-blue-300">
                  security@bitlyft.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
