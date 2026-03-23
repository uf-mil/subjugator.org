import { useState } from "react";
import { Github, Mail, Twitter, Youtube, Send, MapPin, Users } from "lucide-react";
import { Link } from "react-router";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#030d1a] pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Contact
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
          Get in Touch
        </h2>
        <p
          className="text-gray-400 max-w-xl mb-14"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
        >
          Interested in joining our team, collaborating, or sponsoring SubjuGator? We'd love to hear from you.
          Reach out and dive in.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="rounded-2xl border border-cyan-900/30 bg-[#061525] p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center">
                  <Send size={22} className="text-cyan-400" />
                </div>
                <h3
                  className="text-white"
                  style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
                  Thanks for reaching out. We'll get back to you within a couple of days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", role: "", message: "" }); }}
                  className="mt-2 text-cyan-400 text-xs underline underline-offset-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full bg-[#030d1a] border border-cyan-900/40 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-cyan-400/50 transition-colors placeholder-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@university.edu"
                    className="w-full bg-[#030d1a] border border-cyan-900/40 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-cyan-400/50 transition-colors placeholder-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Interest / Role
                  </label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full bg-[#030d1a] border border-cyan-900/40 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-cyan-400/50 transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <option value="">Select an option...</option>
                    <option>Joining the Team — Software</option>
                    <option>Joining the Team — Mechanical</option>
                    <option>Joining the Team — Electrical</option>
                    <option>Sponsorship / Partnership</option>
                    <option>Media / Press</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us a bit about yourself or your inquiry..."
                    rows={4}
                    className="w-full bg-[#030d1a] border border-cyan-900/40 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-cyan-400/50 transition-colors resize-none placeholder-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg flex items-center justify-center gap-2 text-sm tracking-wider transition-all hover:scale-[1.02]"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #00d4ff, #0066cc)",
                    color: "#030d1a",
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                  }}
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-6">
            {/* Why join */}
            <div className="rounded-2xl border border-cyan-900/30 bg-[#061525] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users size={18} className="text-cyan-400" />
                <h3
                  className="text-white"
                  style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  Why Join Us?
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Hands-on experience building a real competition robot",
                  "Work with industry-standard tools: ROS 2, CAD, PCB design",
                  "Compete internationally at AUVSI RoboSub",
                  "No prior robotics experience required — just curiosity",
                  "Build your portfolio with real engineering projects",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-cyan-900/30 bg-[#061525] p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-cyan-400" />
                <h3
                  className="text-white"
                  style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                >
                  Find Us
                </h3>
              </div>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
                Mechanical & Aerospace Engineering Building<br />
                Room 112 — AUV Lab<br />
                State University Campus
              </p>
              <p className="text-gray-500 text-xs mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Team meetings every Tuesday & Thursday, 6–8 PM
              </p>
            </div>

            {/* Social + Email */}
            <div className="rounded-2xl border border-cyan-900/30 bg-[#061525] p-6">
              <h3
                className="text-white mb-4"
                style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
              >
                Connect With Us
              </h3>
              <div className="flex gap-3 mb-4">
                {[
                  { icon: <Github size={18} />, label: "GitHub", href: "https://github.com" },
                  { icon: <Twitter size={18} />, label: "Twitter", href: "https://twitter.com" },
                  { icon: <Youtube size={18} />, label: "YouTube", href: "https://youtube.com" },
                  { icon: <Mail size={18} />, label: "Email", href: "mailto:subjugator@university.edu" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg border border-cyan-900/40 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                subjugator@university.edu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
