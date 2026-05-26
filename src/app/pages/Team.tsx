import { useState } from "react";
import { useNavigate } from "react-router";
import { YEAR_DATA, YearData } from "../data/TeamData";

const FOUNDING_YEAR = 1996;
const CURRENT_YEAR = 2025;
const ALL_YEARS = Array.from(
  { length: CURRENT_YEAR - FOUNDING_YEAR + 1 },
  (_, i) => CURRENT_YEAR - i
);

export function Team() {
  const [selectedYear, setSelectedYear] = useState<number>(CURRENT_YEAR);
  const navigate = useNavigate();

  const data = YEAR_DATA[selectedYear];

  return (
    <section id="team" className="bg-[#061525] pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-cyan-400" />
          <span
            className="text-cyan-400 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            The Team
          </span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-white"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              lineHeight: 1.2,
            }}
          >
            The Crew
          </h2>

          <button
            onClick={() => navigate("/members")}
            className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            View All Members
          </button>
        </div>
        <p
          className="text-gray-400 max-w-xl mb-8"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
        >
          Driven by passion for robotics and engineering, our team of students works year-round across mechanical,
          electrical, and software disciplines. SubjuGator has been competing since {FOUNDING_YEAR}.
        </p>

        {/* Year selector */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10">
          <span
            className="text-gray-400 text-sm shrink-0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Viewing year:
          </span>
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="appearance-none bg-[#030d1a] border border-cyan-900/50 text-white rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:border-cyan-400/60 cursor-pointer transition-colors hover:border-cyan-700/60"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              {ALL_YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {/* chevron */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-4 h-4 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <span
            className="text-cyan-400/60 text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {FOUNDING_YEAR}–{CURRENT_YEAR}
          </span>
        </div>

        {data ? (
          <>
            {/* Team image */}
            <div className="relative rounded-2xl overflow-hidden h-64 border border-cyan-900/30 mb-12">
              <img
                src={data.image}
                alt={`SubjuGator Team ${selectedYear}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061525] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-gray-300 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  {data.caption}
                </span>
              </div>
            </div>

            {/* Member cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {data.members.map((member) => (
                <div
                  key={member.name}
                  onClick={() =>
                    navigate(`/members/${member.name.toLowerCase().replace(/\s+/g, "-")}`)
                  }
                  className="p-5 rounded-xl border border-cyan-900/30 bg-[#030d1a] hover:border-cyan-400/25 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-sm"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 700,
                      background: `${member.color}15`,
                      color: member.color,
                      border: `1px solid ${member.color}30`,
                    }}
                  >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    member.initials
                  )}
                  </div>
                  <p
                    className="text-white mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-xs mb-1"
                    style={{ fontFamily: "Inter, sans-serif", color: member.color }}
                  >
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    {member.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Disciplines */}
            <div className="rounded-2xl border border-cyan-900/30 bg-[#030d1a] p-8">
              <h3
                className="text-white mb-6 text-center"
                style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 600, fontSize: "1rem" }}
              >
                Team Disciplines
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.disciplines.map((d) => (
                  <div key={d.label} className="text-center">
                    <div
                      className="text-2xl mb-1"
                      style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: d.color }}
                    >
                      {d.count.split(" ")[0]}
                    </div>
                    <div className="text-gray-400 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                      {d.label}
                    </div>
                    <div className="text-gray-600 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                      {d.count.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* No data placeholder */
          <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-cyan-900/20 bg-[#030d1a] text-center">
            <div
              className="text-5xl mb-4"
              style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "#00d4ff22" }}
            >
              {selectedYear}
            </div>
            <p
              className="text-gray-500 text-sm max-w-xs"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
            >
              Records for this year are still being compiled. Check back soon or{" "}
              <a href="#contact" className="text-cyan-400/70 hover:text-cyan-400 transition-colors underline underline-offset-2">
                reach out
              </a>{" "}
              if you have historical information to contribute.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export function getAllMembers(YEAR_DATA: Partial<Record<number, YearData>>) {
  const map = new Map<string, any>();

  Object.entries(YEAR_DATA).forEach(([yearStr, data]) => {
    const year = Number(yearStr);
    if (!data) return;

    data.members.forEach((m) => {
      if (!map.has(m.name)) {
        map.set(m.name, {
          id: m.name.toLowerCase().replace(/\s+/g, "-"),
          name: m.name,
          initials: m.initials,
          color: m.color,
          image: m.image,
          history: [],
        });
      }

      map.get(m.name).history.push({
        year,
        role: m.role,
        sub: m.sub,
      });
    });
  });

  return Array.from(map.values());
}