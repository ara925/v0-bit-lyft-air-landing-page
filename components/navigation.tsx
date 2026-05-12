"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="BitLyft AIR" width={120} height={32} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/solutions/threat-detection" className="text-sm text-gray-300 hover:text-white transition-colors">
              Solutions
            </Link>
            <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
          </nav>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
