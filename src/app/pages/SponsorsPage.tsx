import { useNavigate } from "react-router";
import { SPONSOR_YEARS } from "../data/SponsorData";

export default function SponsorsPage() {
  const navigate = useNavigate();

  return (
    <section id="sponsors" className="bg-[#061525] pt-28 pb-24 px-6 min-h-screen">
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

        {/* Heading */}
        <h1
          className="text-white mb-4"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            lineHeight: 1.2,
          }}
        >
          Generous Support
        </h1>

        {/* Description */}
        <p
          className="text-gray-400 max-w-2xl mb-12"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
        >
          Select from the list below to view a specific year’s generous sponsors of the Machine Intelligence Lab. Our mission is made possible through their continued partnership and support.
        </p>

        {/* Featured Header Image - Styled like BlogYear */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-cyan-900/30 bg-[#030d1a] p-4 shadow-xl">
          <img
            src="/images/Sub.png"
            alt="SubjuGator Vehicle"
            className="w-full h-70 md:h-165 object-cover rounded-lg"
          />
          <div className="mt-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-cyan-300 font-inter text-sm italic">
              SubjuGator: Powered by our partners
            </p>
          </div>
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
                className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors"
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

