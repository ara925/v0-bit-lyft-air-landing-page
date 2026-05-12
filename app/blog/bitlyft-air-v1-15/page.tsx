import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Tag, Zap, Shield, Activity, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "BitLyft AIR® v1.15 - Smarter, Simpler Security Automation | BitLyft",
  description: "Discover the latest features in BitLyft AIR® v1.15 including enhanced Microsoft 365 integration, new detection policies, and improved automation workflows.",
}

export default function V115BlogPost() {
  return (
    <div className="min-h-screen bg-[#000a0e]">
      <Header />

      <main className="pt-24">
        {/* Article Header */}
        <article className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/resources" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                January 2025
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
              <span className="flex items-center gap-1.5 text-primary">
                <Tag className="w-4 h-4" />
                Product Update
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              BitLyft AIR® v1.15: The Next Step in Smarter, Simpler Security Automation
            </h1>

            {/* Intro */}
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              We are excited to announce the release of BitLyft AIR® version 1.15, bringing significant enhancements to our autonomous security operations platform. This release focuses on expanding detection capabilities, streamlining workflows, and making security automation more accessible than ever.
            </p>

            {/* Featured Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl p-12 mb-12 border border-primary/30">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">v1.15</div>
                  <p className="text-gray-400">BitLyft AIR® Release</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">What's New in v1.15</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Version 1.15 represents a significant milestone in our mission to democratize enterprise-grade security. We have listened to feedback from our customers and partners to deliver features that address real-world security challenges faced by organizations of all sizes.
              </p>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Enhanced Microsoft 365 Detection</h3>
                  <p className="text-gray-400 text-sm">
                    Expanded coverage for SharePoint, OneDrive, and Teams security events with 15 new detection policies targeting data exfiltration and unauthorized access patterns.
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Faster Automation Engine</h3>
                  <p className="text-gray-400 text-sm">
                    Optimized response execution reduces automation latency by 40%, ensuring threats are contained even faster than before.
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <Activity className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Improved Dashboard Analytics</h3>
                  <p className="text-gray-400 text-sm">
                    New visualization tools provide deeper insights into security posture, threat trends, and automation performance metrics.
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">Streamlined Policy Management</h3>
                  <p className="text-gray-400 text-sm">
                    Simplified policy configuration interface makes it easier to customize detection rules and response actions without technical expertise.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 mt-10">Expanded Identity Protection</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Identity-based attacks continue to be the primary vector for breaches. In v1.15, we have significantly expanded our identity protection capabilities with new detections for:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Impossible travel detection</strong> - Identifies logins from geographically impossible locations within short timeframes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">MFA fatigue attacks</strong> - Detects repeated MFA push notifications that may indicate an attacker attempting to wear down a user</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Service account anomalies</strong> - Monitors service accounts for unusual activity patterns that could indicate compromise</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Privileged role changes</strong> - Alerts on unexpected modifications to administrative roles and permissions</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-10">No-Code Automation Improvements</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Our commitment to no-code security automation means that organizations without dedicated security engineering resources can still deploy sophisticated threat response. Version 1.15 introduces:
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/30 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-white mb-3">Pre-Built Response Templates</h3>
                <p className="text-gray-300 mb-4">
                  10 new response templates covering common attack scenarios including business email compromise, ransomware indicators, and data loss prevention. Each template can be activated with a single click and customized to match your organization's policies.
                </p>
                <p className="text-gray-400 text-sm">
                  Templates include: BEC Response, Ransomware Containment, Insider Threat Response, Credential Compromise, and more.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 mt-10">Performance and Reliability</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Under the hood, v1.15 includes significant improvements to platform stability and performance:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>40% reduction in automation execution latency</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Enhanced retry logic for Graph API operations ensuring reliable execution</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Improved error handling and logging for easier troubleshooting</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>99.9% platform uptime SLA</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-10">Getting Started</h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Existing BitLyft AIR® customers will be automatically upgraded to v1.15. New features are available immediately in your dashboard. For organizations evaluating BitLyft AIR®, we invite you to schedule a demo to see these capabilities in action.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl border border-primary/30">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Experience v1.15?</h3>
              <p className="text-gray-300 mb-6">
                See how BitLyft AIR® can transform your security operations with autonomous detection and response.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Schedule a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                  <Link href="/releases">View All Releases</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
