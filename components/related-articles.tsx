import Link from "next/link"
import { blogPosts } from "@/lib/blog-registry"

interface RelatedArticlesProps {
  currentSlug: string
  maxArticles?: number
}

export function RelatedArticles({ currentSlug, maxArticles = 3 }: RelatedArticlesProps) {
  // Get related articles from the same category, excluding the current one
  const currentPost = blogPosts.find((p) => p.slug === currentSlug)
  
  if (!currentPost) return null

  // Find articles in the same category, then fill with other recent articles if needed
  const sameCategoryArticles = blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === currentPost.category)
    .slice(0, maxArticles)

  const relatedArticles = sameCategoryArticles.length >= maxArticles
    ? sameCategoryArticles
    : [
        ...sameCategoryArticles,
        ...blogPosts
          .filter((p) => p.slug !== currentSlug && p.category !== currentPost.category)
          .slice(0, maxArticles - sameCategoryArticles.length),
      ]

  if (relatedArticles.length === 0) return null

  return (
    <section className="py-16 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#2261db]/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-[#2261db]/10 text-[#00cFFF] rounded">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#00cFFF] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
