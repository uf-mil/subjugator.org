import { useState } from "react";
import {
  Target,
  History,
  GraduationCap,
  Code,
  Zap,
  Settings
} from "lucide-react";

const tabs = [
  { id: 'mission', label: 'Our Mission', icon: <Target size={18} /> },
  { id: 'history', label: 'Our Journey', icon: <History size={18} /> },
  { id: 'departments', label: 'Departments', icon: <Settings size={18} /> },
  { id: 'advisors', label: 'Leadership', icon: <GraduationCap size={18} /> },
];

const timeline = [
  { year: "1997", title: "Team Formation", description: "SubjuGator established at the UF Machine Intelligence Laboratory." },
  { year: "2005", title: "First Win", description: "Earned 1st place at AUVSI RoboSub with SubjuGator 3." },
  { year: "2012", title: "Evolution", description: "Transitioned to ROS architecture, revolutionizing the software stack." },
  { year: "2019", title: "Advanced AI", description: "Implemented deep learning-based object detection and acoustic localization." },
  { year: "2025", title: "SubjuGator 9", description: "Developing next-gen adaptive control systems and enhanced autonomy." },
];

const departments = [
  {
    name: "Mechanical",
    icon: <Settings size={20} className="text-orange-500" />,
    description: "Responsible for vehicle design, hull fabrication, thruster integration, and pressure testing. Works with CAD software and advanced manufacturing techniques.",
    skills: ["SolidWorks & CAD Design", "CNC Machining", "3D Printing & Prototyping", "Waterproofing & Pressure Testing"]
  },
  {
    name: "Electrical",
    icon: <Zap size={20} className="text-cyan-400" />,
    description: "Handles power distribution, sensor integration, custom PCB design, and embedded systems. Ensures reliable operation in underwater environments.",
    skills: ["PCB Design & Fabrication", "Embedded Systems Programming", "Power Management", "Sensor Interfacing & Integration"]
  },
  {
    name: "Software",
    icon: <Code size={20} className="text-purple-400" />,
    description: "Develops navigation algorithms, computer vision systems, controls, and autonomous decision-making capabilities using ROS architecture.",
    skills: ["ROS Development", "State Estimation & Control", "Computer Vision & Deep Learning", "Simulation & Testing"]
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section id="about" className="bg-[#061525] pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            About
          </span>
        </div>

        <h1 className="font-orbitron text-4xl md:text-5xl text-white mb-12">
          SubjuGator <span className="text-cyan-400">UF</span>
        </h1>

        {/* Featured Team Photo */}
        <div className="mb-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl overflow-hidden border border-cyan-900/30 bg-[#030d1a] p-2 shadow-2xl">
            <img
              src="/images/team-photo.jpg"
              alt="SubjuGator Team"
              className="w-full h-auto md:max-h-[500px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-[#030d1a]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-400/20">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-orbitron text-[10px] tracking-[0.2em] uppercase">
                SubjuGator Crew
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Side Navigation */}
          <div className="w-full md:w-64 shrink-0 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-orbitron text-xs tracking-widest uppercase transition-all border whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-cyan-400 text-[#030d1a] border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]' 
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-cyan-400/30'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-[#030d1a] border border-cyan-900/20 rounded-3xl p-8 md:p-12 shadow-2xl relative min-h-[500px]">
            {/* Tab: Mission */}
            {activeTab === 'mission' && (
              <div className="animate-fadeIn space-y-8">
                <h2 className="font-orbitron text-2xl text-white">Innovation & Education</h2>
                <p className="text-gray-300 font-inter leading-relaxed text-lg">
                  SubjuGator is an autonomous underwater vehicle engineered from the ground up by students at the University of Florida. 
                  Our mission focuses on advancing marine robotics through novel sensor fusion, adaptive control, and cross-disciplinary collaboration.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-cyan-400 font-orbitron text-sm mb-3 uppercase">Research</h4>
                    <p className="text-gray-400 text-sm">Pushing the boundaries of autonomous navigation and underwater perception using cutting-edge sensors.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-cyan-400 font-orbitron text-sm mb-3 uppercase">Excellence</h4>
                    <p className="text-gray-400 text-sm">Representing UF at international competitions, maintaining a legacy as 7x RoboSub Champions.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: History */}
            {activeTab === 'history' && (
              <div className="animate-fadeIn space-y-10">
                <h2 className="font-orbitron text-2xl text-white">Project Timeline</h2>
                <div className="relative border-l border-cyan-900/50 ml-4 space-y-12">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                      <span className="font-orbitron text-cyan-400 text-sm font-bold">{item.year}</span>
                      <h3 className="text-white font-orbitron text-lg mt-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm font-inter mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Departments */}
            {activeTab === 'departments' && (
              <div className="animate-fadeIn space-y-8">
                <h2 className="font-orbitron text-2xl text-white">Multidisciplinary Crew</h2>
                <div className="space-y-4">
                  {departments.map((dept, i) => (
                    <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/20 transition-all flex flex-col sm:flex-row sm:items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#061525] flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                        {dept.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-white font-orbitron text-lg mb-2">{dept.name}</h3>
                        <p className="text-gray-400 text-sm font-inter mb-4 leading-relaxed">{dept.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {dept.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px] font-orbitron tracking-widest uppercase">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Advisors */}
            {activeTab === 'advisors' && (
              <div className="animate-fadeIn space-y-8">
                <h2 className="font-orbitron text-2xl text-white">Expert Guidance</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-8 rounded-3xl bg-[#061525] border border-white/5 shadow-inner">
                    <h3 className="text-white font-orbitron text-xl mb-1">Dr. Eric M. Schwartz</h3>
                    <p className="text-cyan-400 text-xs font-orbitron uppercase tracking-widest mb-6">Director, Machine Intelligence Lab</p>
                    <div className="space-y-4 border-t border-white/5 pt-6">
                      <p className="text-gray-400 text-sm font-inter">Expertise: Embedded Systems, Robotics Education, Digital Design.</p>
                    </div>
                  </div>
                  <div className="p-8 rounded-3xl bg-[#061525] border border-white/5 shadow-inner">
                    <h3 className="text-white font-orbitron text-xl mb-1">Dr. Carl Crane</h3>
                    <p className="text-cyan-400 text-xs font-orbitron uppercase tracking-widest mb-6">Professor, Mechanical & Aerospace Engineering</p>
                    <div className="space-y-4 border-t border-white/5 pt-6">
                      <p className="text-gray-400 text-sm font-inter">Expertise: Autonomous Systems, Vehicle Robotics, Navigation Technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-20 relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-[#061525] to-[#030d1a] p-12 text-center group">
          <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-orbitron text-3xl text-white mb-4">Join the Next Generation</h2>
            <p className="text-gray-300 font-inter max-w-xl mx-auto mb-10 leading-relaxed">
              We are always looking for passionate students from all backgrounds. No prior experience is required — only curiosity and the drive to innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-10 py-4 rounded-xl bg-cyan-400 text-[#030d1a] font-orbitron font-bold text-sm tracking-widest uppercase transition-all hover:scale-105"
              >
                Apply Now
              </a>
              <a 
                href="mailto:subjugator@ufl.edu"
                className="px-10 py-4 rounded-xl border border-white/10 text-white font-orbitron text-sm tracking-widest uppercase hover:bg-white/5 transition-all"
              >
                Email Inquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}