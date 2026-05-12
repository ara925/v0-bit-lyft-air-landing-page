"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ReleasesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Product{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2261db] to-[#00cFFF]">
                Releases
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Stay up to date with the latest features, improvements, and security enhancements in BitLyft AIR®.
            </p>
          </div>
        </section>

        {/* Latest Release - v1.25 */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-800">
                <div>
                  <div className="inline-block px-4 py-1 bg-[#2261db]/10 border border-[#2261db]/30 rounded-full mb-3">
                    <span className="text-[#00cFFF] text-sm font-semibold">LATEST RELEASE</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-2">BitLyft AIR® v1.25</h2>
                  <p className="text-gray-400">Multitenancy and Integration Enhancements</p>
                </div>
                <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="shieldGradient125" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2261db" />
                      <stop offset="100%" stopColor="#00cFFF" />
                    </linearGradient>
                  </defs>
                  <path d="M32 4L8 14V28C8 42 18 54 32 60C46 54 56 42 56 28V14L32 4Z" stroke="url(#shieldGradient125)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 30L28 36L42 22" stroke="url(#shieldGradient125)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">Centralized Multitenancy. Expanded Endpoint Response.</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  BitLyft AIR® v1.25 expands multitenancy capabilities and integration extensibility, enabling centralized security operations across multiple tenants and environments. This release also introduces BitLyft AIR® Integration Keys and a new Aurora integration to extend automated endpoint response.
                </p>
              </div>

              <div className="space-y-8 mb-12">

                {/* Multitenancy Enhancements */}
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 backdrop-blur-sm hover:border-[#2261db]/30 transition-all">
                  <div className="flex items-start gap-4">
                    <svg className="h-10 w-10 flex-shrink-0 mt-1" viewBox="0 0 64 64" fill="none">
                      <defs><linearGradient id="multiGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2261db" /><stop offset="100%" stopColor="#00cFFF" /></linearGradient></defs>
                      <rect x="6" y="6" width="22" height="22" rx="3" stroke="url(#multiGrad)" strokeWidth="3" fill="none" />
                      <rect x="36" y="6" width="22" height="22" rx="3" stroke="url(#multiGrad)" strokeWidth="3" fill="none" />
                      <rect x="6" y="36" width="22" height="22" rx="3" stroke="url(#multiGrad)" strokeWidth="3" fill="none" />
                      <rect x="36" y="36" width="22" height="22" rx="3" stroke="url(#multiGrad)" strokeWidth="3" fill="none" />
                      <circle cx="32" cy="32" r="4" fill="url(#multiGrad)" />
                    </svg>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Multitenancy Enhancements</h4>
                      <p className="text-gray-400 mb-4">Expanded multitenant management capabilities for centralized security operations across customer environments or business units.</p>
                      <ul className="space-y-2 text-gray-300">
                        {[
                          "Manage cases across multiple tenants from a single interface",
                          "Apply policies and automation settings across environments",
                          "Centrally manage users, roles, and access control",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#00cFFF" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="#00cFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Integration Keys */}
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 backdrop-blur-sm hover:border-[#2261db]/30 transition-all">
                  <div className="flex items-start gap-4">
                    <svg className="h-10 w-10 flex-shrink-0 mt-1" viewBox="0 0 64 64" fill="none">
                      <defs><linearGradient id="keyGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2261db" /><stop offset="100%" stopColor="#00cFFF" /></linearGradient></defs>
                      <circle cx="24" cy="28" r="14" stroke="url(#keyGrad)" strokeWidth="3" fill="none" />
                      <path d="M34 38L56 56" stroke="url(#keyGrad)" strokeWidth="3" strokeLinecap="round" />
                      <path d="M44 46L50 40" stroke="url(#keyGrad)" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">BitLyft AIR® Integration Keys</h4>
                      <p className="text-gray-400 mb-4">A new Integration Keys system enabling third-party platform connections, starting with Liongard support and forming the foundation for an expanding AIR integration ecosystem.</p>
                      <ul className="space-y-2 text-gray-300">
                        {[
                          "Liongard integration support out of the box",
                          "Foundation for expanding the AIR integration ecosystem",
                          "Secure, scoped API key management for third-party connections",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#00cFFF" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="#00cFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Aurora Integration */}
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 backdrop-blur-sm hover:border-[#2261db]/30 transition-all">
                  <div className="flex items-start gap-4">
                    <svg className="h-10 w-10 flex-shrink-0 mt-1" viewBox="0 0 64 64" fill="none">
                      <defs><linearGradient id="auroraGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2261db" /><stop offset="100%" stopColor="#00cFFF" /></linearGradient></defs>
                      <path d="M32 8C18 8 8 18 8 32C8 46 18 56 32 56C46 56 56 46 56 32C56 18 46 8 32 8Z" stroke="url(#auroraGrad)" strokeWidth="3" fill="none" />
                      <path d="M20 32C20 25 25 20 32 20C39 20 44 25 44 32" stroke="url(#auroraGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                      <circle cx="32" cy="32" r="5" fill="url(#auroraGrad)" />
                    </svg>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Aurora Integration</h4>
                      <p className="text-gray-400 mb-4">Native Aurora integration expands endpoint detection and response capabilities within the platform, including new malware persistence and lateral movement detection policies.</p>
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        {[
                          ["Automated Malware Containment", "Endpoint response actions triggered automatically on detection"],
                          ["Global Quarantine & Allowlisting", "Manage endpoint trust across the entire environment"],
                          ["Endpoint Investigation", "Investigate and manage endpoint policy from within AIR"],
                          ["Policy Management", "Configure and enforce Aurora policies centrally"],
                        ].map(([title, desc]) => (
                          <div key={title} className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                            <p className="text-[#00cFFF] text-xs font-semibold uppercase tracking-wide mb-1">{title}</p>
                            <p className="text-gray-400 text-sm">{desc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                        <p className="text-white text-sm font-semibold mb-2">New Aurora Detection Policies</p>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li className="flex items-start gap-2">
                            <svg className="h-4 w-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#00cFFF" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="#00cFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span><strong className="text-gray-300">Malware Persistence</strong> — detects malware maintaining a foothold on a host</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="h-4 w-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#00cFFF" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="#00cFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span><strong className="text-gray-300">Malware Spread</strong> — identifies lateral movement across multiple systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-gradient-to-r from-[#2261db]/10 to-[#00cFFF]/10 border border-[#2261db]/30 rounded-xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-white mb-4">Summary</h4>
                <p className="text-gray-300 leading-relaxed">
                  BitLyft AIR® v1.25 strengthens centralized security operations through multitenancy while expanding endpoint response capabilities and integration flexibility. These enhancements support scalable management, consistent policy enforcement, and automated response across environments.
                </p>
              </div>

              <div className="text-center pt-6 border-t border-zinc-800">
                <h4 className="text-xl font-bold text-white mb-4">See BitLyft AIR® v1.25 in Action</h4>
                <p className="text-gray-400 mb-6">Want to see how multitenancy and Aurora endpoint response work together in a live environment?</p>
                <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#2261db] to-[#00cFFF] text-white font-semibold rounded-lg shadow-lg shadow-[#2261db]/30 hover:shadow-[#00cFFF]/50 hover:scale-105 transition-all">
                  Schedule a 15-Minute Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Previous Releases */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Previous Releases</h2>
            <div className="space-y-4">

              {/* v1.24 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">BitLyft AIR® v1.24</h3>
                    <p className="text-gray-400 text-sm">Enterprise SSO and Google Workspace Enhancements</p>
                  </div>
                  <span className="text-gray-500 text-sm">April 2026</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Enterprise SSO connection management and automatic user provisioning, alongside expanded Google Workspace detection policies and a phishing containment playbook for automated response in Google environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">SSO Management</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Auto Provisioning</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Google Workspace</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Phishing Playbook</span>
                </div>
              </div>

              {/* v1.23 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">BitLyft AIR® v1.23</h3>
                    <p className="text-gray-400 text-sm">SentinelOne Integration</p>
                  </div>
                  <span className="text-gray-500 text-sm">March 2026</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Native SentinelOne integration with five new automated response actions, two out-of-the-box detection policies for ransomware and malware persistence, and prebuilt automation mappings for immediate time-to-value.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">SentinelOne Integration</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Endpoint Isolation</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Ransomware Detection</span>
                </div>
              </div>

              {/* v1.22 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">BitLyft AIR® v1.22</h3>
                    <p className="text-gray-400 text-sm">Expands Identity Protection with Native Duo Security Integration</p>
                  </div>
                  <span className="text-gray-500 text-sm">February 2026</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Native Duo Security integration with new detection policies for MFA abuse, identity compromise, and administrative risk. Includes Duo remediation actions and two out-of-the-box automation mappings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Duo Security Integration</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">MFA Abuse Detection</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Automation Mappings</span>
                </div>
              </div>

              {/* v1.21 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">BitLyft AIR® v1.21</h3>
                    <p className="text-gray-400 text-sm">Expanded OneLogin Detections & Automated Identity Response</p>
                  </div>
                  <span className="text-gray-500 text-sm">February 2026</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Expanded identity threat detection for OneLogin with new security policies, a Compromised User Account playbook, and out-of-the-box automation mappings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">OneLogin Detections</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Compromised User Playbook</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Automation Mappings</span>
                </div>
              </div>

              {/* v1.20 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">BitLyft AIR® v1.20</h3>
                    <p className="text-gray-400 text-sm">Okta Identity Security & Automated Response</p>
                  </div>
                  <span className="text-gray-500 text-sm">February 2026</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Expanded Okta detections with 13 new security policies and introduced Compromised Okta Account Automations for automated identity threat response.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">13 New Okta Detections</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Automated Response</span>
                  <span className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full">Identity Security</span>
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
