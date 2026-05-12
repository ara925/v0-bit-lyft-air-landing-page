import { Gauge, Shield, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Gauge,
      title: "Response Lag",
      description: "Cut reaction time from minutes to seconds.",
    },
    {
      icon: Zap,
      title: "Task Overload",
      description: "Automates the grunt work, no more repetitive tasks.",
    },
    {
      icon: Shield,
      title: "Tool Silos",
      description: "Real-time visibility to keep your defenses effective against evolving threats.",
    },
  ]

  return (
    <section
      id="features"
      className="py-24 px-6 bg-gradient-to-b from-black via-[#000a0e] to-black relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4 text-white">Key Benefits</h2>
          <p className="text-lg text-gray-300 text-pretty max-w-2xl mx-auto">
            BitLyft AIR® delivers autonomous security operations that eliminate alert fatigue and accelerate your
            incident response.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative z-10">
                  <div className="mb-6 inline-block">
                    <Icon className="w-12 h-12 text-blue-400 group-hover:text-primary transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
