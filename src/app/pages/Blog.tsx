import { useNavigate } from "react-router";
import { BLOG_YEARS } from "../data/BlogData";

export function Blog() {
  const navigate = useNavigate();

  return (
    <section id="blog" className="bg-[#061525] pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            BLOG
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-white mb-4"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            lineHeight: 1.2,
          }}
        >
          Blog Archives
        </h2>

        {/* Description */}
        <p
          className="text-gray-300 max-w-2xl mb-12"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
        >
          Explore our competition journey through the years. Each year contains blog entries, photos, and updates from our submarine robotics competitions and development milestones.
        </p>

        {/* Year Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_YEARS.map((year) => (
            <div
              key={year}
              onClick={() => navigate(`/blog/${year}`)}
              className="p-8 rounded-2xl border border-cyan-900/30 bg-[#030d1a] hover:border-cyan-400/30 hover:bg-[#030d1a]/80 transition-all hover:-translate-y-1 cursor-pointer group shadow-lg shadow-black/20"
            >
              {/* Year Display */}
              <div
                className="text-5xl mb-4 text-cyan-400/80 group-hover:text-cyan-400 transition-colors"
                style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700 }}
              >
                {year}
              </div>

              {/* Card Description */}
              <p
                className="text-gray-300 text-sm group-hover:text-gray-300 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
              >
                View entries and competition updates from {year}
              </p>

              {/* Arrow Icon */}
              <div className="mt-6 flex items-center gap-2 text-cyan-400/60 group-hover:text-cyan-300 transition-colors">
                <span className="text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  Read More
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

        {/* Empty State */}
        {BLOG_YEARS.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-cyan-900/20 bg-[#030d1a] text-center">
            <div
              className="text-5xl mb-4"
              style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "#00d4ff22" }}
            >
              No Archive
            </div>
            <p
              className="text-gray-400 text-sm max-w-xs"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
            >
              Blog entries are coming soon. Check back later for updates from our competitions and development journey.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
