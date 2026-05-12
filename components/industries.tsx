import { Building2, Heart, Factory, Power } from "lucide-react"

export function Industries() {
  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      description:
        "Protect sensitive customer data, meet strict regulatory requirements, and prevent cyberattacks through continuous monitoring and automated compliance reporting.",
    },
    {
      icon: Heart,
      title: "Healthcare Sector",
      description:
        "Advanced threat detection and compliance support to secure EHRs and ensure HIPAA compliance, safeguarding institutions from ransomware and cyber threats.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "AI-driven threat detection and automated security solutions that protect intellectual property and OT networks from cyberattacks.",
    },
    {
      icon: Power,
      title: "Public Utilities",
      description:
        "Continuous threat monitoring ensuring security and resilience of critical infrastructure with rapid incident response capabilities.",
    },
  ]

  return (
    <section
      id="industries"
      className="py-24 px-6 bg-gradient-to-b from-black via-[#000a0e] to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <img src="/images/shield-protection.gif" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Custom Cybersecurity</span> for
            Every Industry
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            No two industries face the same security challenges. BitLyft AIR® tailors its solutions to meet the specific
            needs of different sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 group"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 transition-all border border-primary/20 shadow-lg shadow-primary/10 group-hover:shadow-primary/20">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 shadow-2xl shadow-primary/10 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground font-semibold mb-2 text-primary">Did You Know?</p>
            <p className="text-muted-foreground">
              The healthcare sector experiences the highest average cost of data breaches among industries. BitLyft
              AIR®'s real-time monitoring helps prevent these costly incidents.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
