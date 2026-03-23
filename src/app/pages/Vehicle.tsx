const SUB_IMAGE = "https://subjugator-org.vercel.app/assets/subjugator_9.1-CmH4JUZ1.png";
const ELECTRONICS_IMAGE = "https://images.unsplash.com/photo-1563770660941-20978e870e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBlbGVjdHJvbmljcyUyMGhhcmR3YXJlJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzcyODI5NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080";

const specs = [
  { label: "Compute", value: "NVIDIA Jetson AGX Orin", category: "Software" },
  { label: "OS", value: "Ubuntu 22.04 + ROS 2 Humble", category: "Software" },
  { label: "Vision", value: "Stereo + Down-Facing Cameras", category: "Software" },
  { label: "Navigation", value: "DVL + 9-DOF IMU + Depth", category: "Software" },
  { label: "Thrusters", value: "8× Blue Robotics T200", category: "Hardware" },
  { label: "Depth Rating", value: "5 meters", category: "Hardware" },
  { label: "Power", value: "28V LiPo Battery Pack", category: "Hardware" },
  { label: "Weight", value: "~38 kg in air", category: "Hardware" },
];

const subsystems = [
  {
    name: "Mechanical",
    color: "#00d4ff",
    items: ["Acrylic pressure housing", "Custom aluminum frame", "Pneumatic torpedo launchers", "Gripper manipulator"],
  },
  {
    name: "Electrical",
    color: "#4ade80",
    items: ["Custom power distribution PCB", "ESC motor drivers", "Waterproof connectors", "Tether kill switch"],
  },
  {
    name: "Software",
    color: "#a78bfa",
    items: ["ROS 2 mission planner", "EKF state estimation", "YOLO v8 object detection", "PID + MPC controllers"],
  },
];

export function Vehicle() {
  return (
    <section id="vehicle" className="bg-[#061525] pt-28 pb-24 px-6 relative overflow-hidden min-h-screen">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            The Vehicle
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
          SubjuGator 9
        </h2>
        <p
          className="text-gray-400 max-w-xl mb-12"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
        >
          Our ninth-generation AUV — the most capable vehicle we've ever built. Designed for speed,
          reliability, and full autonomy across all RoboSub tasks.
        </p>

        {/* Main image + specs */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Vehicle Image */}
          <div className="relative rounded-2xl overflow-hidden border border-cyan-900/40 group">
            <img
              src={SUB_IMAGE}
              alt="SubjuGator AUV"
              className="w-full h-72 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a] via-transparent to-transparent" />
            {/* Overlay label */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#030d1a]/80 backdrop-blur-sm border border-cyan-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  System Online — Competition Ready
                </span>
              </div>
            </div>
          </div>

          {/* Specs Table */}
          <div>
            <div className="mb-6">
              <h3
                className="text-gray-300 text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between py-3 border-b border-cyan-900/30"
                  >
                    <span
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {spec.label}
                    </span>
                    <span
                      className="text-gray-200 text-sm text-right max-w-[60%]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subsystems */}
        <h3
          className="text-white mb-6"
          style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
        >
          Subsystems
        </h3>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {subsystems.map((sub) => (
            <div
              key={sub.name}
              className="rounded-xl border border-cyan-900/30 bg-[#030d1a] p-6 hover:border-cyan-400/30 transition-colors"
            >
              <div
                className="text-sm uppercase tracking-widest mb-4"
                style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: sub.color }}
              >
                {sub.name}
              </div>
              <ul className="space-y-2">
                {sub.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-gray-400 text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span style={{ color: sub.color }} className="mt-1 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Electronics image banner */}
        <div className="relative rounded-2xl overflow-hidden h-48 border border-cyan-900/30">
          <img
            src={ELECTRONICS_IMAGE}
            alt="Electronics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030d1a] via-[#030d1a]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8">
            <p
              className="text-cyan-400 text-xs uppercase tracking-widest mb-2"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Electronics Stack
            </p>
            <p
              className="text-white max-w-sm"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
            >
              Custom-designed PCBs, waterproofed connectors, and redundant kill-switch systems — every
              component engineered for reliability at depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}