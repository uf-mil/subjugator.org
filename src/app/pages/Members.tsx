import { useState } from "react";
import { useNavigate } from "react-router";
import { YEAR_DATA, getAllMembers } from "./Team";

export function Members() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const ALL_MEMBERS = getAllMembers(YEAR_DATA);

  const filtered = ALL_MEMBERS
    .filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="bg-[#061525] min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-white text-3xl">All Members</h1>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search members..."
            className="bg-[#030d1a] border border-cyan-900/50 text-white px-4 py-2 rounded-lg text-sm focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((m) => (
            <div
              key={m.id}
              onClick={() => navigate(`/members/${m.id}`)}
              className="p-5 rounded-xl border border-cyan-900/30 bg-[#030d1a] cursor-pointer hover:border-cyan-400/25"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{
                  background: `${m.color}15`,
                  color: m.color,
                }}
              >
                {m.initials}
              </div>

              <p className="text-white text-sm">{m.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}