export function Stats() {
  const stats = [
    { value: "Milliseconds", label: "Response Time", description: "Cut reaction time from minutes to seconds" },
    { value: "99.9%", label: "Automation Rate", description: "Automates the grunt work, no more repetitive tasks" },
    { value: "Real-time", label: "Visibility", description: "Keep your defenses effective against evolving threats" },
    { value: "24/7", label: "Protection", description: "Continuous monitoring and threat detection" },
  ]

  return (
    <section className="py-24 px-6 border-y border-border/50 bg-gradient-to-b from-[#0a1628] via-black to-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/data-flow-network.gif" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4 text-white">
            BitLyft AIR®{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Changes the Game</span>
          </h2>
          <p className="text-lg text-gray-300 text-pretty">
            Your team, your rules – Security that works as fast as you need it to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
