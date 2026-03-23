import { Link } from "react-router";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1771686264311-037f008c7863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwb2NlYW4lMjB1bmRlcndhdGVyJTIwYmx1ZSUyMGJpb2x1bWluZXNjZW50fGVufDF8fHx8MTc3MjgyOTc0NXww&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #030d1a 0%, #061525cc 40%, #030d1a 100%), url(${BG_IMAGE}) center/cover no-repeat`,
      }}
    >
      {/* Animated glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
            animation: "pulseGlow 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #0066ff 0%, transparent 70%)",
            animation: "pulseGlow 8s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #00d4ff 2px, #00d4ff 3px)",
          backgroundSize: "100% 6px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Autonomous Underwater Vehicle
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-white mb-4"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            textShadow: "0 0 40px rgba(0, 212, 255, 0.4)",
          }}
        >
          SUBJU<span style={{ color: "#00d4ff" }}>GATOR</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-gray-300 max-w-2xl mx-auto mb-10"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: "1.15rem",
            lineHeight: 1.7,
          }}
        >
          An autonomous submarine vehicle engineered to manuever efficiently through the deep. Driven to deliver results that are precision-built, software-defined, and mission-ready.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/vehicle"
            className="px-8 py-3 rounded text-sm tracking-widest uppercase transition-all hover:scale-105 inline-block"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, #00d4ff, #0066cc)",
              color: "#030d1a",
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
            }}
          >
            Explore the Sub
          </Link>
          <Link
            to="/competitions"
            className="px-8 py-3 rounded border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 transition-all text-sm tracking-widest uppercase inline-block"
            style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600 }}
          >
            Our Missions
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030d1a] to-transparent" />

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.10; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.18; }
        }
      `}</style>
    </section>
  );
}
