import { useParams, useNavigate } from "react-router";
import { getAllMembers } from "./Team";
import { YEAR_DATA } from "../data/TeamData";
import { useEffect } from "react";

export function MemberPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ALL_MEMBERS = getAllMembers(YEAR_DATA);
  const member = ALL_MEMBERS.find((m) => m.id === id);

  if (!member) return <div className="text-white p-20">Not found</div>;

  return (
    <section className="bg-[#061525] min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <button onClick={() => navigate(-1)} className="mb-6 text-cyan-400">
          ← Back
        </button>

        <div className="flex items-center gap-6 mb-8">
          <div
            className="w-32 h-32 rounded-xl flex items-center justify-center text-3xl shrink-0"
            style={{
              background: `${member.color}15`,
              color: member.color,
            }}
          >
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-full h-full rounded-xl object-cover" />
            ) : (
              member.initials
            )}
          </div>

          <h1 className="text-white text-3xl">{member.name}</h1>
        </div>

        <div className="space-y-4">
          {member.history
            .sort((a: any, b: any) => b.year - a.year)
            .map((h: any, i: number) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-cyan-900/30 bg-[#030d1a]"
              >
                <p className="text-cyan-400 text-sm">{h.year}</p>
                <p className="text-white">{h.role}</p>
                <p className="text-gray-400 text-sm">{h.sub}</p>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}