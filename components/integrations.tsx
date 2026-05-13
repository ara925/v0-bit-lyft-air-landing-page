import Link from "next/link"

const integrations = [
  {
    name: "Microsoft 365",
    logo: "/microsoft365.png",
    size: "max-h-16",
    href: "/integrations/microsoft-365",
  },
  {
    name: "Okta",
    logo: "/okta-logo-white.png",
    size: "max-h-16",
    href: "/integrations/okta",
  },
  {
    name: "Duo Security",
    logo: "/duo-logo-green.png",
    size: "max-h-16",
    href: "/integrations/duo-security",
  },
  {
    name: "OneLogin",
    logo: "/onelogin-logo.webp",
    size: "max-h-18",
    className: "brightness-0 invert",
    href: "/integrations/onelogin",
  },
  {
    name: "Google Workspace",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg",
    size: "max-h-16",
    href: "/integrations/google-workspace",
  },
  {
    name: "Graylog",
    logo: "https://logo.svgcdn.com/l/graylog.png",
    size: "max-h-16",
    href: "/integrations/graylog",
  },
  {
    name: "SentinelOne",
    logo: "/sentinelone-logo.png",
    size: "max-h-10",
    className: "brightness-0 invert",
    href: "/integrations/sentinelone",
  },
  {
    name: "Aurora",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aurora%20Logo-u55GR9vQCotz3mYGVAb9wuXPn1DQjE.png",
    size: "max-h-12",
    href: "/integrations/aurora",
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="py-20 px-6 bg-gradient-to-b from-[#000a0e] via-black to-[#000a0e] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4 text-white">
            Seamless <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">Integrations</span>
          </h2>
          <p className="text-lg text-gray-300 text-pretty max-w-2xl mx-auto">
            BitLyft AIR® connects with your existing security stack for comprehensive automated incident response.
          </p>
        </div>

        {/* Active Integrations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto items-center mb-16">
          {integrations.map((integration, index) => (
            <Link
              key={index}
              href={integration.href}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-transparent hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 hover:scale-105"
            >
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                className={`w-full h-auto ${integration.size} object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,97,219,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(34,97,219,0.5)] ${integration.className || ""}`}
              />
              <span className="mt-3 text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                {integration.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Coming Soon</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* CrowdStrike */}
            <div className="relative flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-800/60 bg-zinc-900/20 opacity-60">
              <div className="absolute -top-2.5 right-3">
                <span className="px-2 py-0.5 bg-[#2261db]/20 border border-[#2261db]/30 rounded-full text-[#00cfff] text-[10px] font-semibold uppercase tracking-wide">
                  Coming Soon
                </span>
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crowdstrike-logo%20%281%29-HoAgAikCXtUUtwaYWltIfj4jlQ2Fki.png"
                alt="CrowdStrike"
                className="w-full h-auto max-h-10 object-contain brightness-0 invert opacity-50"
              />
              <span className="mt-3 text-xs text-gray-600 font-medium">CrowdStrike</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            And many more integrations available.{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            to learn about custom integrations.
          </p>
        </div>
      </div>
    </section>
  )
}
