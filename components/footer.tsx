import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/bitlyft-logo.webp" alt="BitLyft Cybersecurity" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-400">
              Autonomous security operations and automated incident response for the modern enterprise.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/solutions/automated-incident-response" className="hover:text-primary transition-colors">
                  Automated Incident Response
                </Link>
              </li>
              <li>
                <Link href="/solutions/threat-detection" className="hover:text-primary transition-colors">
                  Threat Detection
                </Link>
              </li>
              <li>
                <Link href="/solutions/soc-automation" className="hover:text-primary transition-colors">
                  SOC Automation
                </Link>
              </li>
              <li>
                <Link href="/alternatives" className="hover:text-primary transition-colors">
                  Alternatives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/industries/financial-services" className="hover:text-primary transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="hover:text-primary transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="hover:text-primary transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries/public-utilities" className="hover:text-primary transition-colors">
                  Public Utilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/releases" className="hover:text-primary transition-colors">
                  Product Releases
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="hover:text-primary transition-colors">
                  Become a Reseller
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2026 BitLyft. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-primary transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
