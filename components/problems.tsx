import { AlertCircle, TrendingDown, Clock, Layers } from "lucide-react"

export function Problems() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Alert overload & manual fatigue",
      description: "Security teams drown in thousands of alerts daily; human triage can't keep pace.",
    },
    {
      icon: TrendingDown,
      title: "Skills gap / talent shortage",
      description: "Many organizations lack the expertise to build or maintain complex SOAR systems.",
    },
    {
      icon: Clock,
      title: "Slow reaction times",
      description: "When response lags, attackers have time to propagate laterally.",
    },
    {
      icon: Layers,
      title: "Fragmented tooling",
      description: "Disparate tools and siloed workflows hinder holistic incident response.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-[#0a1628] to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/cyber-threat-visualization.gif" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Why Traditional SOCs Are{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Failing</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Enter BitLyft AIR®: the next-gen automated incident response platform designed for the modern environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all shadow-lg shadow-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
