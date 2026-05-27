import { useNavigate } from "react-router";
import { SPONSOR_YEARS } from "../data/SponsorData";

export default function SponsorsPage() {
  const navigate = useNavigate();

  return (
    <section id="sponsors" className="bg-[#061525] pt-24 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            SPONSORS
          </span>
        </div>

        {/* Hero: image + content + primary CTA above the fold */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-cyan-900/30 bg-[#030d1a] min-h-[280px] lg:min-h-[400px]">
            <img
              src="/images/navigator.png"
              alt="NaviGator AMS"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <p className="text-cyan-300 text-xs italic" style={{ fontFamily: "Inter, sans-serif" }}>
                Powered by our partners
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between rounded-2xl border border-cyan-900/30 bg-[#030d1a] p-8 shadow-lg shadow-black/20">
            <div>
              <h1
                className="text-white mb-3"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                  lineHeight: 1.15,
                }}
              >
                Generous Support
              </h1>
              <p
                className="text-gray-300 text-sm mb-6"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
              >
                Our mission is made possible through the continued partnership of sponsors who
                power the Machine Intelligence Lab year after year.
              </p>
            </div>

            <div>
              <a
                href="/sponsorship_packet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm tracking-widest uppercase transition-all hover:scale-[1.02]"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #00d4ff, #0066cc)",
                  color: "#030d1a",
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download Sponsorship Packet
              </a>
              <p
                className="text-gray-400 text-xs text-center mt-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Tiers · Benefits · Team impact
              </p>
            </div>
          </div>
        </div>

        {/* Browse by Year */}
        <div className="flex items-end justify-between mb-6">
          <h2
            className="text-white"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            }}
          >
            Browse by Year
          </h2>
          <span
            className="text-gray-400 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {SPONSOR_YEARS.length} seasons archived
          </span>
        </div>

        {/* Year Cards Grid - Styled like Blog Archives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPONSOR_YEARS.map((sponsor) => (
            <div
              key={sponsor.year}
              onClick={() => navigate(sponsor.href)}
              className="p-8 rounded-2xl border border-cyan-900/30 bg-[#030d1a] hover:border-cyan-400/30 hover:bg-[#030d1a]/80 transition-all hover:-translate-y-1 cursor-pointer group shadow-lg shadow-black/20"
            >
              {/* Year Display */}
              <div
                className="text-4xl mb-4 text-cyan-400/80 group-hover:text-cyan-400 transition-colors"
                style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700 }}
              >
                {sponsor.year}
              </div>

              {/* Card Label */}
              <p
                className="text-gray-300 text-sm group-hover:text-gray-300 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
              >
                View sponsors and partners from the {sponsor.year} season.
              </p>

              {/* Action Link */}
              <div className="mt-6 flex items-center gap-2 text-cyan-400/60 group-hover:text-cyan-300 transition-colors">
                <span className="text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  View Details
                </span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

