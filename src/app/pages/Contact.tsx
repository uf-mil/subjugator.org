import { useState, useEffect, useRef } from "react";
import { Github, Mail, Twitter, Youtube, Send, MapPin, Users, Instagram, MessageSquare } from "lucide-react";
import { Link } from "react-router";
import { FaDiscord } from "react-icons/fa";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entry animations sequence
    const sequence = [
      { ref: titleRef, delay: 300 },
      { ref: subtitleRef, delay: 500 },
      { ref: contactInfoRef, delay: 800 },
      { ref: formRef, delay: 1000 },
      { ref: heroRef, delay: 100 },
    ];

    sequence.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add("opacity-100", "translate-y-0");
          ref.current.classList.remove("opacity-0", "translate-y-4");
        }
      }, delay);
    });

    // Parallax Effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="bg-[#030d1a] pt-28 pb-10 px-6 min-h-screen relative overflow-hidden">
      {/* Parallax Background Glow */}
      <div 
        ref={heroRef}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none transition-opacity duration-1000 opacity-0"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase transition-all duration-700"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Contact
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-white mb-4 opacity-0 translate-y-4 transition-all duration-700"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            lineHeight: 1.2,
          }}
        >
          Get in Touch
        </h1>
        <p
          ref={subtitleRef}
          className="text-gray-400 max-w-xl mb-14 opacity-0 translate-y-4 transition-all duration-700"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
        >
          Interested in joining our team, collaborating, or sponsoring SubjuGator? We'd love to hear from you.
          Reach out and dive in.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div 
            ref={formRef}
            className="rounded-2xl border border-cyan-900/30 bg-[#061525] p-8 opacity-0 translate-y-4 transition-all duration-700"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center animate-bounce">
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
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", role: "", message: "" }); }}
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
                    placeholder="Enter name"
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
                    placeholder="Enter email"
                    className="w-full bg-[#030d1a] border border-cyan-900/40 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-cyan-400/50 transition-colors placeholder-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Enter subject"
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
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg flex items-center justify-center gap-2 text-sm tracking-wider transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #00d4ff, #0066cc)",
                    color: "#030d1a",
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-[#030d1a]/30 border-t-[#030d1a] rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div 
            ref={contactInfoRef}
            className="flex flex-col gap-6 opacity-0 translate-y-4 transition-all duration-700"
          >
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
                Machine Intelligence Laboratory<br />
                1889 Museum Road Room 3001<br />
                Gainesville, FL 32611
              </p>
              <div className="mt-4 pt-4 border-t border-cyan-900/20">
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1" style={{ fontFamily: "Orbitron, sans-serif" }}>
                  Faculty Advisor
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Prof. Eric M. Schwartz, MIL Director</p>
              </div>
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
                  { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/uf-mil" },
                  { icon: <Twitter size={18} />, label: "Twitter", href: "https://x.com/SubjuGatorUF" },
                  { icon: <Instagram size={18} />, label: "Instagram", href: "https://www.instagram.com/ufmil" },
                  { icon: <Youtube size={18} />, label: "YouTube", href: "https://www.youtube.com/@SubjuGatorUF" },
                  { icon: <FaDiscord size={18} />, label: "Discord", href: "https://discord.com/invite/Pw3NmhCF6U" },
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
              <div className="space-y-1">
                <p className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  subjugatoruf@gmail.com
                </p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  ems@ufl.edu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-2xl border border-cyan-900/30 bg-[#061525] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.61431649733!2d-82.35033642383617!3d29.64394313743414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a3002730df97%3A0x5ad3f106749ff928!2sMalachowsky%20Hall%20for%20Data%20Science%20and%20Information%20Technology!5e0!3m2!1sen!2sus!4v1776705783412!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MIL Location Map"
          />
        </div>
      </div>
    </section>
  );
}
