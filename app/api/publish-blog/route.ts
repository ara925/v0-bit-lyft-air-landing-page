import { NextResponse } from "next/server"
import { blogPosts } from "@/lib/blog-registry"

const WEBHOOK_URL = "https://tlgmarketing.app.n8n.cloud/webhook/8fee7b7b-57a6-4392-9c56-68c63c6b96a9"
const STAGING_URL = "https://v0-bit-lyft-air-landing-page.vercel.app"

export async function POST(request: Request) {
  try {
    const { slug } = await request.json()

    if (!slug) {
      return NextResponse.json({ error: "Blog slug is required" }, { status: 400 })
    }

    // Find the blog post in the registry
    const blogPost = blogPosts.find((post) => post.slug === slug)

    if (!blogPost) {
      return NextResponse.json({ error: `Blog post with slug "${slug}" not found` }, { status: 404 })
    }

    // Prepare webhook payload
    const payload = {
      title: blogPost.title,
      publishedDate: blogPost.displayDate,
      blogUrl: `${STAGING_URL}/blog/${blogPost.slug}`,
    }

    // Send to webhook
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Webhook returned status ${response.status}`)
    }

    return NextResponse.json({
      success: true,
      message: `Blog "${blogPost.title}" published to webhook`,
      payload,
    })
  } catch (error) {
    console.error("Error sending to webhook:", error)
    return NextResponse.json(
      { error: "Failed to send to webhook", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
