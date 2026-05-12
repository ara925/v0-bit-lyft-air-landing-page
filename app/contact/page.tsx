"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import Script from "next/script"

function initHubSpotForm() {
  let attempts = 0
  const interval = setInterval(() => {
    attempts++
    if ((window as any).hbspt) {
      clearInterval(interval)
      ;(window as any).hbspt.forms.create({
        portalId: "6764014",
        formId: "b26ea572-95ee-4c14-82c5-3a7d2887f2a8",
        region: "na1",
        target: "#hubspot-form-container",
        onFormSubmitted: () => {
          window.location.href = "/contact/thank-you"
        },
      })
    } else if (attempts >= 20) {
      clearInterval(interval)
    }
  }, 100)
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={initHubSpotForm}
      />
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Started with <span className="text-primary">BitLyft AIR®</span>
            </h1>
            <p className="text-xl text-gray-300">
              Request a demo and see how autonomous security operations can transform your threat response
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Request a Demo</h2>
              <div id="hubspot-form-container" className="min-h-[400px]" />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Why BitLyft AIR®?</h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Respond to threats in milliseconds, not minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>No-code automation that scales your SOC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Seamless integration with Microsoft 365, Graylog, and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Serverless architecture with zero maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="space-y-1">
                      <a
                        href="mailto:info@bitlyft.com"
                        className="text-white hover:text-primary transition-colors block"
                      >
                        info@bitlyft.com
                      </a>
                      <a
                        href="mailto:sales@bitlyft.com"
                        className="text-white hover:text-primary transition-colors block"
                      >
                        sales@bitlyft.com
                      </a>
                      <a
                        href="mailto:support@bitlyft.com"
                        className="text-white hover:text-primary transition-colors block"
                      >
                        support@bitlyft.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <a href="tel:+1-517-220-0990" className="text-white hover:text-primary transition-colors">
                      517-220-0990
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="text-sm text-gray-400">Visit Us</div>
                    <p className="text-white">
                      107 N. Clinton Ave.
                      <br />
                      St. Johns, MI 48879
                    </p>
                  </div>
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
