import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | BitLyft AIR®",
  description: "Read the BitLyft AIR® terms of service governing use of the platform and related services.",
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000a0e] via-[#001520] to-[#000a0e]">
      <Header />

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-12">Last updated: January 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using BitLyft AIR® services, you agree to be bound by these Terms of Service. If you do
                not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Service Description</h2>
              <p>
                BitLyft AIR® provides autonomous security operations and automated incident response services. We
                reserve the right to modify, suspend, or discontinue any aspect of the service with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate account information</li>
                <li>Maintain the security of your credentials</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Not attempt to breach security measures</li>
                <li>Not misuse or abuse the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Subscription and Payment</h2>
              <p>
                Subscriptions are billed according to the plan you select. Fees are non-refundable except as required by
                law. You may cancel your subscription at any time, effective at the end of the current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p>
                All content, software, and technology provided by BitLyft remain our exclusive property. You are granted
                a limited, non-exclusive license to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                BitLyft provides the service "as is" and makes no warranties regarding availability or performance. Our
                liability is limited to the amount paid for the service in the past 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend access to our service immediately, without prior notice, for violations of
                these Terms or for any other reason at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Information</h2>
              <p>
                For questions about these Terms, contact us at{" "}
                <a href="mailto:legal@bitlyft.com" className="text-blue-400 hover:text-blue-300">
                  legal@bitlyft.com
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
