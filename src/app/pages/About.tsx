import { Cpu, Eye, Zap, Compass } from "lucide-react";

const pillars = [
  {
    icon: <Cpu size={22} className="text-cyan-400" />,
    title: "Autonomy",
    description:
      "Fully autonomous navigation and decision-making — no remote control, no human intervention during competition runs.",
  },
  {
    icon: <Eye size={22} className="text-cyan-400" />,
    title: "Computer Vision",
    description:
      "Advanced object detection and classification pipelines allow SubjuGator to identify gates, buoys, torpedoes, and more.",
  },
  {
    icon: <Zap size={22} className="text-cyan-400" />,
    title: "Real-Time Control",
    description:
      "Eight thrusters driven by low-latency control loops maintain precise 6-DOF position and attitude underwater.",
  },
  {
    icon: <Compass size={22} className="text-cyan-400" />,
    title: "Navigation",
    description:
      "Sensor fusion from DVL, IMU, and depth sensors provides accurate state estimation even in murky conditions.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-[#030d1a] pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            About
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.2,
              }}
            >
              Built to dominate the deep
            </h2>
            <p
              className="text-gray-400 mb-4"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
            >
              SubjuGator is our team's fully autonomous underwater vehicle (AUV), engineered from the ground up
              by students to compete in the annual <span className="text-cyan-300">AUVSI RoboSub Championship</span> —
              one of the most prestigious underwater robotics competitions in the world.
            </p>
            <p
              className="text-gray-400"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
            >
              Every year we design, build, and program a new generation of SubjuGator. Our interdisciplinary team
              spans mechanical engineering, electrical engineering, and computer science — all working toward a single
              mission: outmaneuver every obstacle the course throws at us.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "10+", label: "Years Competing" },
                { value: "30+", label: "Team Members" },
                { value: "Top 5", label: "Global Ranking" },
              ].map((stat) => (
                <div key={stat.label} className="border border-cyan-900/50 rounded-lg p-4 bg-cyan-900/5">
                  <div
                    className="text-cyan-400 mb-1"
                    style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: "1.6rem" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-gray-500 text-xs uppercase tracking-wider"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-5 rounded-xl border border-cyan-900/40 bg-[#061525] hover:border-cyan-400/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-3">
                  {p.icon}
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}