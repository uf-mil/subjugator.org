import { useState } from "react";
import { Link } from "react-router";
import {
  Trophy,
  Lightbulb,
  Cog,
  Cpu,
  Code2,
  Target,
  Zap,
  Shield,
  Network,
  Eye,
  Compass,
  ListChecks,
} from "lucide-react";

const SUB_IMAGE = "/images/sub9_cherry_1.png";
const ROBOSUB_GROUP_IMAGE = "/images/robosub-2024-group.jpg";
const ELECTRONICS_IMAGE = "/images/sub9_pcb.png";
const SIM_IMAGE = "/images/simulation_environment.png";
const MECHANICAL_IMAGE = "/images/sub9_development.jpg";

type TabId =
  | "robosub"
  | "vehicle"
  | "mechanical"
  | "electrical"
  | "software"
  | "strategy";

const TABS: { id: TabId; label: string }[] = [
  { id: "robosub", label: "RoboSub" },
  { id: "vehicle", label: "SubjuGator 9" },
  { id: "mechanical", label: "Mechanical" },
  { id: "electrical", label: "Electrical" },
  { id: "software", label: "Software" },
  { id: "strategy", label: "Strategy" },
];

const sectionLabelStyle = { fontFamily: "Orbitron, sans-serif" } as const;
const headingStyle = {
  fontFamily: "Orbitron, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
  lineHeight: 1.2,
} as const;
const bodyStyle = { fontFamily: "Inter, sans-serif", lineHeight: 1.7 } as const;

function TabHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-10 bg-cyan-400" />
        <span
          className="text-cyan-400 text-xs tracking-widest uppercase"
          style={sectionLabelStyle}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className="text-white mb-2" style={headingStyle}>
        {title}
      </h2>
      <p className="text-gray-300 text-sm" style={bodyStyle}>
        {subtitle}
      </p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  color = "#00d4ff",
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
  color?: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-900/30 bg-[#030d1a] p-5 hover:border-cyan-400/30 transition-colors h-full">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          <Icon size={16} style={{ color }} />
        </div>
        <h4
          className="text-white"
          style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
        >
          {title}
        </h4>
      </div>
      <p className="text-gray-300 text-sm" style={bodyStyle}>
        {body}
      </p>
    </div>
  );
}

function RoboSubTab() {
  return (
    <div>
      <TabHeader
        eyebrow="The Competition"
        title="What is RoboSub?"
        subtitle="An international underwater robotics competition"
      />
      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-cyan-900/30 relative h-56 lg:h-auto">
          <img
            src={ROBOSUB_GROUP_IMAGE}
            alt="SubjuGator team at RoboSub 2024"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a]/80 via-transparent to-transparent" />
          <p
            className="absolute bottom-3 left-4 text-gray-200 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            SubjuGator team at RoboSub 2024
          </p>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-4">
          <InfoCard
            icon={Trophy}
            title="The Competition"
            body="RoboSub is an annual competition organized by RoboNation that challenges student teams to design and build autonomous underwater vehicles (AUVs) capable of navigating through a series of obstacles and completing complex tasks without human intervention."
          />
          <InfoCard
            icon={Lightbulb}
            title="The Challenge"
            body="Teams must create vehicles that can independently identify and classify objects using computer vision, detect and localize acoustic pingers, deploy torpedoes, drop markers, and manipulate underwater structures — all while navigating in a 3D aquatic environment."
          />
        </div>
      </div>
    </div>
  );
}

function VehicleTab() {
  const specs = [
    { label: "Propulsion", value: "8× Blue Robotics T200 Thrusters" },
    { label: "Computing", value: "NVIDIA Jetson Orin NX" },
    { label: "Power", value: "14.8V LiPo Batteries" },
    { label: "Framework", value: "ROS 2 Jazzy" },
  ];
  return (
    <div>
      <TabHeader
        eyebrow="Competition Vehicle"
        title="SubjuGator 9"
        subtitle="Meet our flagship autonomous underwater vehicle"
      />
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-cyan-900/40 group">
          <img
            src={SUB_IMAGE}
            alt="SubjuGator 9"
            className="w-full h-72 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#030d1a]/80 backdrop-blur-sm border border-cyan-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-green-400 text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                System Online — Competition Ready
              </span>
            </div>
            <span
              className="text-gray-300 text-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SubjuGator 9 — First Swim
            </span>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col">
          <p className="text-gray-300 text-sm mb-4" style={bodyStyle}>
            SubjuGator 9 represents the culmination of years of research and competition
            experience. With a completely redesigned aluminum chassis and electronics hull, this
            next-generation AUV pushes the boundaries of what's possible in autonomous underwater
            robotics.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {specs.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-cyan-900/30 bg-[#030d1a] p-3"
              >
                <p
                  className="text-cyan-400 text-[0.65rem] uppercase tracking-widest mb-1"
                  style={sectionLabelStyle}
                >
                  {s.label}
                </p>
                <p
                  className="text-gray-200 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MechanicalTab() {
  const items = [
    {
      icon: Cog,
      title: "Mechanisms",
      body: "Three independently operated electronic servo mechanisms: a gripper, torpedo launcher, and a ball dropper.",
    },
    {
      icon: Shield,
      title: "Durable Frame",
      body: "Carbon fiber tubes and aluminum sheet sections provide protection for delicate components while enabling modularity.",
    },
    {
      icon: Cpu,
      title: "Advanced Manufacturing",
      body: "CNC milled and abrasive water-jetted aluminum components replaced many previously 3D printed parts for improved durability.",
    },
    {
      icon: Compass,
      title: "Thruster Configuration",
      body: "Eight thrusters provide full six degrees of freedom control with built-in redundancy for mission reliability.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <div>
      <TabHeader
        eyebrow="The Hardware"
        title="Mechanical System"
        subtitle="Precision-engineered for underwater performance"
      />
      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-cyan-900/30 relative h-64 lg:h-auto">
          <img
            src={MECHANICAL_IMAGE}
            alt="SubjuGator 9 development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a]/80 via-transparent to-transparent" />
          <p
            className="absolute bottom-3 left-4 text-gray-200 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            SubjuGator 9 — in development
          </p>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-2">
          {items.map((i, idx) => {
            const isOpen = open === idx;
            const Icon = i.icon;
            return (
              <button
                key={i.title}
                onClick={() => setOpen(idx)}
                className={`text-left rounded-xl border bg-[#030d1a] transition-all overflow-hidden ${
                  isOpen
                    ? "border-cyan-400/40"
                    : "border-cyan-900/30 hover:border-cyan-700/40"
                }`}
              >
                <div className="flex items-center gap-3 p-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: isOpen ? "#00d4ff20" : "#00d4ff10",
                      border: `1px solid ${isOpen ? "#00d4ff50" : "#00d4ff20"}`,
                    }}
                  >
                    <Icon size={16} className={isOpen ? "text-cyan-300" : "text-cyan-500"} />
                  </div>
                  <h4
                    className={`flex-1 ${isOpen ? "text-white" : "text-gray-300"}`}
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    {i.title}
                  </h4>
                  <span
                    className={`text-cyan-400 text-xs transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    ▸
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 text-sm px-4 pb-4 pl-16" style={bodyStyle}>
                      {i.body}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ElectricalTab() {
  const items = [
    {
      icon: Zap,
      title: "Battery Monitoring",
      body: "Custom-designed boards provide voltage and current data via CAN bus to enable sophisticated power management.",
    },
    {
      icon: Shield,
      title: "Safety Features",
      body: "Hall-effect-based manual shut-off allows immediate power cutoff to thrusters for safety during testing and competition.",
    },
    {
      icon: Network,
      title: "Open Architecture",
      body: "Onboard computers and sensors are linked via a gigabit Ethernet switch — adding or removing systems is as simple as plugging in.",
    },
  ];
  return (
    <div>
      <TabHeader
        eyebrow="The Electronics"
        title="Electrical Architecture"
        subtitle="Power and communication systems designed for reliability"
      />
      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-cyan-900/30 h-48 lg:h-auto relative">
          <img
            src={ELECTRONICS_IMAGE}
            alt="Electronics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a]/80 via-transparent to-transparent" />
          <p
            className="absolute bottom-3 left-4 text-gray-200 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Custom embedded boards & comms
          </p>
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-1 gap-3">
          {items.map((i) => (
            <InfoCard key={i.title} icon={i.icon} title={i.title} body={i.body} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SoftwareTab() {
  const items = [
    {
      icon: Compass,
      title: "State Estimation",
      body: "An Unscented Kalman filter operating on manifolds provides efficient handling of attitude singularities, fusing data from IMU, DVL, and other sensors.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      body: "Deep neural networks (YOLO architecture) assist traditional computer vision techniques for object detection and classification underwater.",
    },
    {
      icon: ListChecks,
      title: "Mission Planning",
      body: "A behavior tree drives the mission planner, enabling quick modularization, integration, and easy editing of mission logic.",
    },
  ];
  return (
    <div>
      <TabHeader
        eyebrow="The Brains"
        title="Software Architecture"
        subtitle="Intelligent systems for autonomous operation"
      />
      <p className="text-gray-300 text-sm mb-5 max-w-3xl" style={bodyStyle}>
        SubjuGator 9's software stack is built on the Jazzy version of ROS 2. Our stack has grown
        to over 60 ROS packages, all open-source, allowing other teams to share the benefits of
        our work.
      </p>
      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 grid sm:grid-cols-1 gap-3">
          {items.map((i) => (
            <InfoCard key={i.title} icon={i.icon} title={i.title} body={i.body} />
          ))}
        </div>
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-cyan-900/30 h-48 lg:h-auto relative">
          <img
            src={SIM_IMAGE}
            alt="Simulation environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a]/80 via-transparent to-transparent" />
          <p
            className="absolute bottom-3 left-4 text-gray-200 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Simulated competition environment
          </p>
        </div>
      </div>
    </div>
  );
}

function StrategyTab() {
  const steps = [
    {
      n: "01",
      title: "Focused Task Selection",
      body: "We prioritize mastering a select number of feasible tasks while maximizing test time, ensuring reliable performance during competition runs.",
    },
    {
      n: "02",
      title: "Iterative Testing",
      body: "Extensive testing in both simulated and physical environments ensures that all mechanical, electrical, and software systems function as expected under competition conditions.",
    },
    {
      n: "03",
      title: "Knowledge Transfer",
      body: "With many new members each year, we emphasize knowledge sharing and documentation to build on the infrastructure left by previous teams.",
    },
  ];
  return (
    <div>
      <TabHeader
        eyebrow="The Approach"
        title="Competition Strategy"
        subtitle="Our approach to the RoboSub competition"
      />
      <p className="text-gray-300 text-sm mb-5 max-w-3xl" style={bodyStyle}>
        Leveraging 29 years of autonomous underwater vehicle development at the University of
        Florida, the SubjuGator team has refined its approach to RoboSub, focusing on reliability
        and consistent performance.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mb-5">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-xl border border-cyan-900/30 bg-[#030d1a] p-5 hover:border-cyan-400/30 transition-colors"
          >
            <div
              className="text-cyan-400 mb-2"
              style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: "1.5rem" }}
            >
              {s.n}
            </div>
            <h4
              className="text-white mb-2"
              style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
            >
              {s.title}
            </h4>
            <p className="text-gray-300 text-sm" style={bodyStyle}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
      <blockquote
        className="border-l-2 border-cyan-400 pl-4 italic text-gray-300 text-sm max-w-3xl"
        style={bodyStyle}
      >
        This balanced approach has resulted in multiple competition milestones and consistent
        performance in the challenging underwater environment of RoboSub.
      </blockquote>
    </div>
  );
}

export function Vehicle() {
  const [active, setActive] = useState<TabId>("robosub");

  return (
    <section
      id="vehicle"
      className="bg-[#061525] pt-24 pb-16 px-6 relative overflow-hidden min-h-screen"
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Tab bar */}
        <div className="flex gap-1 mb-8 border-b border-cyan-900/30 overflow-x-auto">
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-4 py-3 text-sm whitespace-nowrap transition-colors relative ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600 }}
              >
                {t.label}
                {isActive && (
                  <span className="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-cyan-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="min-h-[420px]">
          {active === "robosub" && <RoboSubTab />}
          {active === "vehicle" && <VehicleTab />}
          {active === "mechanical" && <MechanicalTab />}
          {active === "electrical" && <ElectricalTab />}
          {active === "software" && <SoftwareTab />}
          {active === "strategy" && <StrategyTab />}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-10 rounded-2xl border border-cyan-900/30 bg-[#030d1a] p-6 text-center">
          <h3
            className="text-white mb-2"
            style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, fontSize: "1.4rem" }}
          >
            Join Our Team
          </h3>
          <p className="text-gray-300 text-sm mb-5 max-w-md mx-auto" style={bodyStyle}>
            We're always looking for passionate students interested in underwater robotics.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded text-sm tracking-widest uppercase transition-all hover:scale-105"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, #00d4ff, #0066cc)",
              color: "#030d1a",
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
