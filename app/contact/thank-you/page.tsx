"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: "demo_conversion_thank_you" })
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24">
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-12 text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Thank You for Your Interest!</h1>

              {/* Message */}
              <p className="text-xl text-gray-300 mb-8">
                We've received your demo request and a member of our team will be in touch with you shortly.
              </p>

              {/* What's Next Section */}
              <div className="bg-zinc-900/50 rounded-xl p-8 mb-8 text-left">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">We'll Review Your Request</h3>
                      <p className="text-gray-400">
                        Our team will review your information and prepare a personalized demo.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Schedule Your Demo</h3>
                      <p className="text-gray-400">
                        We'll reach out within 24 hours to schedule a time that works for you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Experience BitLyft AIR®</h3>
                      <p className="text-gray-400">
                        See firsthand how autonomous security operations can transform your threat response.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                >
                  Return to Homepage
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Explore Resources
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-zinc-800">
                <p className="text-gray-400 mb-4">Have questions in the meantime?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a href="mailto:sales@bitlyft.com" className="text-primary hover:text-primary/80 transition-colors">
                    sales@bitlyft.com
                  </a>
                  <span className="hidden sm:inline text-gray-600">|</span>
                  <a href="tel:+1-517-220-0990" className="text-primary hover:text-primary/80 transition-colors">
                    517-220-0990
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
