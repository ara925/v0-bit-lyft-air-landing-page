"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, ChevronRight } from "lucide-react"
import { CATEGORIES, TERMS } from "@/lib/glossary-terms"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getLetters(): string[] {
  const set = new Set(TERMS.map((t) => t.term[0].toUpperCase()))
  return Array.from(set).sort()
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GlossaryPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const letterRefs = useRef<Record<string, HTMLElement | null>>({})
  const letters = getLetters()

  const filtered = TERMS.filter((t) => {
    const matchesSearch =
      search === "" ||
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      activeCategory === "All" || t.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const grouped = letters.reduce<Record<string, typeof filtered>>(
    (acc, letter) => {
      const items = filtered.filter(
        (t) => t.term[0].toUpperCase() === letter
      )
      if (items.length) acc[letter] = items
      return acc
    },
    {}
  )

  const visibleLetters = Object.keys(grouped).sort()

  function scrollTo(letter: string) {
    letterRefs.current[letter]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-14 px-6 border-b border-border/40 bg-gradient-to-b from-[#000a0e] to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            Cybersecurity Reference
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Cybersecurity Glossary
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Plain-language definitions of the attack techniques, security
            controls, and SOC concepts that matter most to modern security
            teams — each linked to a deeper explanation.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto mt-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary text-sm"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 py-12 flex gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col gap-8 w-56 shrink-0">
          {/* Category filters */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Categories
            </p>
            <nav className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left text-sm px-3 py-2 rounded-md transition-colors ${
                    activeCategory === cat
                      ? "bg-primary/15 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          {/* Letter jump */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Jump to
            </p>
            <div className="flex flex-wrap gap-1.5">
              {letters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => scrollTo(letter)}
                  disabled={!visibleLetters.includes(letter)}
                  className={`w-7 h-7 text-xs font-mono rounded transition-colors ${
                    visibleLetters.includes(letter)
                      ? "text-primary hover:bg-primary/15 border border-primary/30"
                      : "text-muted-foreground/30 border border-border/30 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {visibleLetters.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">
              No terms match your search.
            </div>
          ) : (
            <div className="space-y-14">
              {visibleLetters.map((letter) => (
                <section
                  key={letter}
                  ref={(el) => {
                    letterRefs.current[letter] = el
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-bold text-primary leading-none">
                      {letter}
                    </span>
                    <div className="h-px flex-1 bg-border/40" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {grouped[letter].map((item) => (
                      <Link
                        key={item.slug}
                        href={`/cybersecurity-glossary/${item.slug}`}
                        className="group block p-5 rounded-lg border border-border/40 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                            {item.term}
                          </h2>
                          <ChevronRight className="w-4 h-4 shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors mt-0.5" />
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {item.definition}
                        </p>
                        <span className="inline-block mt-3 text-[10px] font-medium px-2 py-0.5 rounded-full border border-primary/20 text-primary/70 bg-primary/5">
                          {item.category}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-card p-8 text-center space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              See these threats stopped automatically
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              BitLyft AIR detects and responds to every attack type in this
              glossary — in seconds, not hours.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Request a Demo <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
