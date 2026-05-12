export function Integrations() {
  const integrations = [
    {
      name: "Microsoft 365",
      logo: "/microsoft365.png",
      size: "max-h-16",
    },
    {
      name: "Okta",
      logo: "/okta-logo-white.png",
      size: "max-h-16",
    },
    {
      name: "Duo Security",
      logo: "/duo-logo-green.png",
      size: "max-h-16",
    },
    {
      name: "OneLogin",
      logo: "/onelogin-logo.webp",
      size: "max-h-18",
      className: "brightness-0 invert",
    },
    {
      name: "Google Workspace",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg",
      size: "max-h-16",
    },
    { name: "Graylog", logo: "https://logo.svgcdn.com/l/graylog.png", size: "max-h-16" },
    {
      name: "SentinelOne",
      logo: "/sentinelone-logo.png",
      size: "max-h-10",
      className: "brightness-0 invert",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#000a0e] via-black to-[#000a0e] relative overflow-hidden">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-6 hover:scale-110 transition-all duration-300"
            >
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                className={`w-full h-auto ${integration.size} object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,97,219,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(34,97,219,0.5)] ${integration.className || ""}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            And many more integrations available. Contact us to learn about custom integrations.
          </p>
        </div>
      </div>
    </section>
  )
}
