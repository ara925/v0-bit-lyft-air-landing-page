import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bitlyftair.ai"),
  title: {
    default: "BitLyft AIR® - Autonomous Security Operations & Automated Incident Response",
    template: "%s | BitLyft AIR®",
  },
  description:
    "Stop threats in milliseconds with BitLyft AIR®. AI-powered SOC automation, automated incident response, and real-time threat detection — no-code, no agents, 24/7.",
  keywords: [
    "cybersecurity",
    "incident response",
    "SOC automation",
    "threat detection",
    "security operations",
    "autonomous SOC",
    "Microsoft 365 security",
    "identity threat detection",
    "SOAR alternative",
    "AI security platform",
  ],
  authors: [{ name: "BitLyft" }],
  creator: "BitLyft",
  publisher: "BitLyft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bitlyftair.ai",
    siteName: "BitLyft AIR®",
    title: "BitLyft AIR® - Autonomous Security Operations & Automated Incident Response",
    description:
      "Stop threats in milliseconds with BitLyft AIR®. AI-powered SOC automation, automated incident response, and real-time threat detection — no-code, no agents, 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BitLyft AIR® - Autonomous Security Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BitLyft AIR® - Autonomous Security Operations",
    description:
      "Stop threats in milliseconds with BitLyft AIR®. AI-powered SOC automation and automated incident response.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "SApEjehn0X49tLszGR3cJHFXPlOfV-KYYBhGXT4vJb4",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: "/icon-dark-32x32.png",
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${figtree.variable} font-sans antialiased`}>
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TPDJWDXM');`,
          }}
        />
        <Script
          id="resize-observer-fix"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){window.addEventListener('error',function(e){if((e.message||'').includes('ResizeObserver')){e.stopImmediatePropagation();e.preventDefault();return false;}},true);var o=console.error;console.error=function(){var a=Array.from(arguments);if(a[0]&&a[0].toString().includes('ResizeObserver'))return;o.apply(console,a);};})();`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPDJWDXM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
