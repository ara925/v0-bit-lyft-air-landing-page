import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-registry"

export const metadata: Metadata = {
  title: "Cybersecurity Resources and Insights | AI Security Operations",
  description: "Explore BitLyft AIR® resources, product updates, guides, and insights on autonomous security operations, SOC automation, and AI-driven cybersecurity.",
}

export default function ResourcesPage() {
  // Parse ordinal dates like "18th March, 2026" into sortable values
  function parseDisplayDate(date: string): number {
    const cleaned = date.replace(/(\d+)(st|nd|rd|th)/, "$1")
    return new Date(cleaned).getTime()
  }

  const industryInsights = blogPosts
    .filter((p) => p.category === "Industry Insights")
    .sort((a, b) => parseDisplayDate(b.displayDate) - parseDisplayDate(a.displayDate))
    .map((p) => ({ title: p.title, description: p.description, date: p.displayDate, type: p.type, href: `/blog/${p.slug}` }))

  const resources = [
    {
      category: "Industry Insights",
      icon: BookOpen,
      items: industryInsights,
    },
    {
      category: "Technical Documentation",
      icon: Download,
      items: [
        {
          title: "Integration Guide: Graylog",
          description: "Step-by-step guide to integrate BitLyft AIR® with Graylog for enhanced threat detection",
          date: "2025",
          type: "PDF Guide",
          href: "/contact",
        },
        {
          title: "Microsoft 365 Integration",
          description: "Complete documentation for connecting BitLyft AIR® with Microsoft 365 environments",
          date: "2025",
          type: "Documentation",
          href: "/contact",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resources & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-gray-300">
              Stay informed with the latest updates, guides, and insights on autonomous security operations
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto space-y-16">
            {resources.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">{item.type}</span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>

                      <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0">
                        <Link href={item.href}>Read More →</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to receive the latest updates, security insights, and product announcements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-8">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
