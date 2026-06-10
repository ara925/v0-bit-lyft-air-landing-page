"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [showSolutions, setShowSolutions] = useState(false)
  const [showIndustries, setShowIndustries] = useState(false)
  const [showResources, setShowResources] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-gradient-to-r from-[#000a0e]/95 via-[#001419]/95 to-[#000a0e]/95 backdrop-blur-xl shadow-lg shadow-black/30">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/bitlyft-logo.webp"
            alt="BitLyft Cybersecurity"
            className="h-11 w-auto drop-shadow-[0_0_8px_rgba(34,97,219,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(34,97,219,0.8)] transition-all duration-300"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setShowSolutions(true)}
            onMouseLeave={() => setShowSolutions(false)}
          >
            <button className="text-sm text-gray-300 hover:text-primary transition-colors relative group flex items-center gap-1 py-2">
              Solutions
              <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
            </button>

            {showSolutions && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-64 bg-[#000a0e]/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl shadow-black/40 py-2">
                  <Link
                    href="/solutions/automated-incident-response"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Automated Incident Response
                  </Link>
                  <Link
                    href="/solutions/threat-detection"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Threat Detection
                  </Link>
                  <Link
                    href="/solutions/soc-automation"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    SOC Automation
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* End of change */}

          <Link href="/features" className="text-sm text-gray-300 hover:text-primary transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowIndustries(true)}
            onMouseLeave={() => setShowIndustries(false)}
          >
            <button className="text-sm text-gray-300 hover:text-primary transition-colors relative group flex items-center gap-1 py-2">
              Industries
              <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
            </button>

            {showIndustries && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-64 bg-[#000a0e]/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl shadow-black/40 py-2">
                  <Link
                    href="/industries"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border/30"
                  >
                    All Industries
                  </Link>
                  <Link
                    href="/industries/financial-services"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Financial Services
                  </Link>
                  <Link
                    href="/industries/healthcare"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Healthcare
                  </Link>
                  <Link
                    href="/industries/manufacturing"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Manufacturing
                  </Link>
                  <Link
                    href="/industries/public-utilities"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Public Utilities
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button className="text-sm text-gray-300 hover:text-primary transition-colors relative group flex items-center gap-1 py-2">
              Resources
              <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
            </button>
            {showResources && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-64 bg-[#000a0e]/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl shadow-black/40 py-2">
                  <Link
                    href="/resources"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border/30"
                  >
                    All Resources
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/cybersecurity-glossary"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Cybersecurity Glossary
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/demo" className="text-sm text-gray-300 hover:text-primary transition-colors relative group flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Demo
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
          </Link>
          <Link href="/pricing">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-white hover:bg-primary/10 bg-transparent shadow-md hover:shadow-primary/20 transition-all"
            >
              Pricing
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all"
            >
              Request a Demo
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
