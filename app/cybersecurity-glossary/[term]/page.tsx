import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ChevronRight, Shield } from "lucide-react"
import { TERMS, getTermBySlug, getRelatedTerms } from "@/lib/glossary-terms"

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return TERMS.map((t) => ({ term: t.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>
}): Promise<Metadata> {
  const { term: slug } = await params
  const item = getTermBySlug(slug)
  if (!item) return {}
  return {
    title: `What is ${item.term}? | Cybersecurity Glossary | BitLyft AIR®`,
    description: item.definition,
    openGraph: {
      title: `What is ${item.term}?`,
      description: item.definition,
      type: "article",
    },
    alternates: {
      canonical: `https://www.bitlyftair.ai/cybersecurity-glossary/${slug}`,
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function TermPage({
  params,
}: {
  params: Promise<{ term: string }>
}) {
  const { term: slug } = await params
  const item = getTermBySlug(slug)
  if (!item) notFound()

  const related = getRelatedTerms(item.content.relatedSlugs)

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: item.term,
    description: item.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "BitLyft Cybersecurity Glossary",
      url: "https://www.bitlyftair.ai/cybersecurity-glossary",
    },
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 border-b border-border/40 bg-gradient-to-b from-[#000a0e] to-background">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/cybersecurity-glossary"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Glossary
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            {item.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-5">
            What is {item.term}?
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl">
            {item.definition}
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 py-12 flex gap-12">
        {/* Main article */}
        <article className="flex-1 min-w-0 prose-custom">
          {/* Intro paragraphs */}
          <div className="space-y-4 mb-10">
            {item.content.intro.map((para, i) => (
              <p key={i} className="text-base text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {item.content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {section.heading}
                </h2>

                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-base text-muted-foreground leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2 mt-3">
                    {section.bullets.map((bullet, k) => (
                      <li key={k} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Blog cross-link */}
          {item.blogSlug && (
            <div className="mt-12 p-5 rounded-lg border border-primary/20 bg-primary/5 flex items-start gap-4">
              <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Want the full playbook?
                </p>
                <Link
                  href={item.blogSlug}
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Read the deep-dive article
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-card p-8 text-center space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              See {item.term} stopped in real time
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              BitLyft AIR detects and responds to this threat automatically —
              no analyst required at every step.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Request a Demo <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </article>

        {/* Right sidebar */}
        <aside className="hidden lg:flex flex-col gap-8 w-64 shrink-0">
          {/* On this page */}
          {item.content.sections.length > 0 && (
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                On this page
              </p>
              <nav className="flex flex-col gap-1">
                {item.content.sections.map((section, i) => (
                  <span
                    key={i}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors py-1 leading-snug cursor-default"
                  >
                    {section.heading}
                  </span>
                ))}
              </nav>

              {/* Related terms */}
              {related.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Related Terms
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/cybersecurity-glossary/${rel.slug}`}
                        className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        <ChevronRight className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {rel.term}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </aside>
      </div>

      <Footer />
    </div>
  )
}
