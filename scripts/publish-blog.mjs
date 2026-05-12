/**
 * Publish Blog to Webhook
 * 
 * Usage:
 *   node scripts/publish-blog.mjs <blog-slug>
 * 
 * Example:
 *   node scripts/publish-blog.mjs soar-vs-security-automation-vs-autonomous-soc
 */

const API_URL = "https://v0-bit-lyft-air-landing-page.vercel.app"

const slug = process.argv[2]

if (!slug) {
  console.error("❌ Error: Blog slug is required")
  console.log("\nUsage: node scripts/publish-blog.mjs <blog-slug>")
  console.log("\nExample: node scripts/publish-blog.mjs soar-vs-security-automation-vs-autonomous-soc")
  process.exit(1)
}

console.log(`📤 Publishing blog: ${slug}`)
console.log(`🔗 API URL: ${API_URL}/api/publish-blog\n`)

try {
  const response = await fetch(`${API_URL}/api/publish-blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  })

  const data = await response.json()

  if (response.ok) {
    console.log("✅ Success! Blog published to webhook:")
    console.log(`   Title: ${data.payload.title}`)
    console.log(`   Date: ${data.payload.publishedDate}`)
    console.log(`   URL: ${data.payload.blogUrl}`)
  } else {
    console.error("❌ Error:", data.error || "Unknown error")
    if (data.details) {
      console.error("   Details:", data.details)
    }
    process.exit(1)
  }
} catch (error) {
  console.error("❌ Failed to publish blog:", error.message)
  process.exit(1)
}
