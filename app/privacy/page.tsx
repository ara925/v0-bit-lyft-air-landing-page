import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | BitLyft AIR®",
  description: "Read the BitLyft AIR® privacy policy to understand how we collect, use, and protect your data.",
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000a0e] via-[#001520] to-[#000a0e]">
      <Header />

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-12">Last updated: January 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                BitLyft collects information necessary to provide our cybersecurity services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, company details)</li>
                <li>Security event data and logs from your systems</li>
                <li>Usage data and analytics</li>
                <li>Communication preferences and history</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our security services</li>
                <li>Detect and respond to security threats</li>
                <li>Send service updates and security alerts</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
              <p>
                We implement industry-leading security measures to protect your data, including encryption at rest and
                in transit, access controls, regular security audits, and compliance with SOC 2 Type II standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing</h2>
              <p>
                We do not sell your data. We may share information only with your consent, with service providers under
                strict confidentiality agreements, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p>
                For privacy-related questions or requests, please contact us at{" "}
                <a href="mailto:privacy@bitlyft.com" className="text-blue-400 hover:text-blue-300">
                  privacy@bitlyft.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
