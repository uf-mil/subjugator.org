import { lazy, Suspense } from "react";
import { Cog, Zap, Code2 } from "lucide-react";

const ModelViewer = lazy(() =>
  import("../components/ModelViewer").then((m) => ({ default: m.ModelViewer }))
);

function ModelViewerFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mb-3" />
      <p
        className="text-cyan-300 text-xs tracking-widest uppercase"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Loading viewer
      </p>
    </div>
  );
}

const specs = [
  {
    icon: Cog,
    title: "Mechanical Systems",
    description:
      "SubjuGator features precision-engineered mechanical systems, including servo-actuated mechanisms and a carbon fiber frame.",
    items: [
      "Servo-actuated gripper with serrated jaws",
      "Dual torpedo launchers with rack and pinion actuators",
      "Ball dropper with rotational mechanism",
      "Eight-thruster configuration for robust motion control",
      "Carbon fiber and aluminum space-frame chassis",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description:
      "Custom-designed electrical infrastructure provides reliable power, communications, and sensor integration.",
    items: [
      "Battery monitoring system with voltage and current tracking",
      "Custom thruster/kill board for safety and control",
      "Multi-level power regulation for various subsystems",
    ],
  },
  {
    icon: Code2,
    title: "Software Architecture",
    description:
      "Built on ROS 2 Jazzy, SubjuGator's software enables advanced autonomy and perception.",
    items: [
      "State estimation with an Unscented Kalman filter",
      "Trajectory generation and control system",
      "Computer vision with deep neural networks (YOLO)",
      "Behavior-tree-based mission planning infrastructure",
      "Open-source codebase with 60+ ROS packages",
    ],
  },
];

export function AUV() {
  return (
    <section
      id="auv"
      className="bg-[#061525] pt-24 pb-20 px-6 min-h-screen relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            AUV Technology
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-white mb-3"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            lineHeight: 1.15,
          }}
        >
          Explore the AUV
        </h1>
        <p
          className="text-gray-300 max-w-2xl mb-8"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
        >
          A look at the innovation behind SubjuGator — drag to rotate the model below and dive
          into the mechanical, electrical, and software systems that make it autonomous.
        </p>

        {/* 3D Viewer */}
        <div className="rounded-2xl overflow-hidden border border-cyan-900/40 bg-[#030d1a] h-[28rem] lg:h-[34rem] relative mb-12">
          <Suspense fallback={<ModelViewerFallback />}>
            <ModelViewer />
          </Suspense>
          <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded bg-[#030d1a]/80 backdrop-blur-sm border border-cyan-400/20 pointer-events-none z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span
              className="text-cyan-300 text-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SubjuGator 9 — Interactive Model
            </span>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="text-center mb-8">
          <h2
            className="text-white mb-3 inline-block"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              lineHeight: 1.2,
            }}
          >
            Technical Specifications
          </h2>
          <div className="h-px w-16 bg-cyan-400 mx-auto mb-4" />
          <p
            className="text-gray-300 text-sm max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
          >
            Cutting-edge systems powering autonomous underwater exploration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.title}
                className="rounded-2xl border border-cyan-900/30 bg-[#030d1a] p-6 hover:border-cyan-400/30 transition-colors flex flex-col"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "#00d4ff15",
                    border: "1px solid #00d4ff30",
                  }}
                >
                  <Icon size={20} style={{ color: "#00d4ff" }} />
                </div>
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  {spec.title}
                </h3>
                <p
                  className="text-gray-300 text-sm mb-5"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
                >
                  {spec.description}
                </p>
                <ul className="space-y-2.5 mt-auto">
                  {spec.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                      style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
                    >
                      <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
