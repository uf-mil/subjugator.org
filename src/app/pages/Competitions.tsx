import { Trophy, Medal, Star } from "lucide-react";

const POOL_IMAGE = "https://images.unsplash.com/photo-1580482462274-87b3e442fc5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwcG9vbCUyMHJvYm90aWNzJTIwY29tcGV0aXRpb24lMjB0ZXN0aW5nfGVufDF8fHx8MTc3MjgyOTc0N3ww&ixlib=rb-4.1.0&q=80&w=1080";

const results = [
  {
    year: "2025",
    event: "AUVSI RoboSub Championship",
    location: "Transdec Pool, San Diego, CA",
    placement: "3rd Place",
    placementNum: 3,
    notes: "Successfully completed buoy manipulation, torpedo, and path tasks.",
    icon: <Medal size={18} />,
    color: "#cd7f32",
  },
  {
    year: "2024",
    event: "AUVSI RoboSub Championship",
    location: "Transdec Pool, San Diego, CA",
    placement: "2nd Place",
    placementNum: 2,
    notes: "Best score in semi-final run. Silver finish after technical delay in finals.",
    icon: <Medal size={18} />,
    color: "#c0c0c0",
  },
  {
    year: "2023",
    event: "AUVSI RoboSub Championship",
    location: "Transdec Pool, San Diego, CA",
    placement: "1st Place",
    placementNum: 1,
    notes: "First time winning the overall championship. Perfect path following performance.",
    icon: <Trophy size={18} />,
    color: "#ffd700",
  },
  {
    year: "2022",
    event: "AUVSI RoboSub Championship",
    location: "Transdec Pool, San Diego, CA",
    placement: "4th Place",
    placementNum: 4,
    notes: "Strong performance in navigation tasks. Vision system redesigned mid-season.",
    icon: <Star size={18} />,
    color: "#00d4ff",
  },
];

const tasks = [
  { name: "Gate Navigation", description: "Drive through an underwater gate, optionally with a style challenge." },
  { name: "Buoy Interaction", description: "Circle or touch floating colored buoys at varying depths." },
  { name: "Torpedo Launch", description: "Fire pneumatic torpedoes at targets on an underwater board." },
  { name: "Bin Drop", description: "Identify and drop markers into bins marked with symbols." },
  { name: "Octagon Surface", description: "Surface inside a marked octagon to complete the run." },
  { name: "Path Following", description: "Follow orange paths on the pool floor between tasks." },
];

export function Competitions() {
  return (
    <section id="competitions" className="bg-[#030d1a] pt-28 pb-24 px-6 relative overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Competition
          </span>
        </div>

        <h2
          className="text-white mb-4"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            lineHeight: 1.2,
          }}
        >
          Mission Log
        </h2>
        <p
          className="text-gray-400 max-w-xl mb-12"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
        >
          Each year we push our vehicle further in the{" "}
          <span className="text-cyan-300">AUVSI RoboSub Championship</span> — the world's premier
          autonomous underwater vehicle competition, featuring over 40 international university teams.
        </p>

        {/* Pool image banner */}
        <div className="relative rounded-2xl overflow-hidden h-52 border border-cyan-900/30 mb-12">
          <img
            src={POOL_IMAGE}
            alt="Competition pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030d1a] via-[#030d1a]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <p
                className="text-cyan-400 text-xs uppercase tracking-widest mb-2"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                AUVSI RoboSub
              </p>
              <p
                className="text-white"
                style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: "1.4rem" }}
              >
                Transdec Underwater Test Facility
              </p>
              <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                San Diego, California · Annually in July
              </p>
            </div>
          </div>
        </div>

        {/* Results Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Results */}
          <div>
            <h3
              className="text-gray-300 text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Recent Results
            </h3>
            <div className="space-y-4">
              {results.map((result) => (
                <div
                  key={result.year}
                  className="flex gap-4 p-5 rounded-xl border border-cyan-900/30 bg-[#061525] hover:border-cyan-400/20 transition-colors"
                >
                  {/* Icon / placement */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${result.color}15`, color: result.color }}
                  >
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-white"
                        style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: "0.85rem" }}
                      >
                        {result.year} — {result.placement}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full border"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: result.color,
                          borderColor: `${result.color}40`,
                          background: `${result.color}10`,
                        }}
                      >
                        #{result.placementNum}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                      {result.location}
                    </p>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}>
                      {result.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: RoboSub Tasks */}
          <div>
            <h3
              className="text-gray-300 text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Competition Tasks
            </h3>
            <div className="space-y-3">
              {tasks.map((task, i) => (
                <div
                  key={task.name}
                  className="flex gap-3 p-4 rounded-lg border border-cyan-900/20 bg-[#061525]"
                >
                  <span
                    className="text-cyan-400/50 shrink-0 mt-0.5"
                    style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.75rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="text-gray-200 text-sm mb-1"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                    >
                      {task.name}
                    </p>
                    <p className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}>
                      {task.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}