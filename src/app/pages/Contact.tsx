import { useState } from "react";
import { Github, Mail, Instagram, Youtube, Send, MapPin, Users } from "lucide-react";
import { Link } from "react-router";

// Custom Discord Icon for the footer link, since lucide-react doesn't have a built in one
function DiscordIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Form: ${form.role || "General Inquiry"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Role/Interest: ${form.role || "Not provided"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:subjugatoruf@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                Malachowsky Hall<br />
                Room 3001 — MIL Lab<br />
                University of Florida Campus
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
                  { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/uf-mil/mil2" },
                  { icon: <DiscordIcon size={18} />, label: "Discord", href: "https://discord.com/invite/Pw3NmhCF6U" },
                  { icon: <Youtube size={18} />, label: "YouTube", href: "https://www.youtube.com/@SubjuGatorUF/videos" },
                  { icon: <Instagram size={18} />, label: "Instagram", href: "https://www.instagram.com/ufmil" },
                  { icon: <Mail size={18} />, label: "Email", href: "mailto:subjugatoruf@gmail.com" },
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
