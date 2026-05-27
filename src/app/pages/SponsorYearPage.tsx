import { useParams, useNavigate } from "react-router";
import { SPONSOR_DATA, SPONSOR_YEARS } from "../data/SponsorData";
import { useEffect } from "react";

export function SponsorYearPage() {
  const { year } = useParams<{ year: string }>();
  const navigate = useNavigate();
  const selectedYear = year ? parseInt(year, 10) : 0;
  const data = SPONSOR_DATA[selectedYear];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [year]);

  if (!data) {
    return (
      <div className="bg-[#061525] min-h-screen pt-28 pb-24 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-orbitron text-3xl text-white mb-4">Data Not Found</h1>
          <button 
            onClick={() => navigate("/sponsors")}
            className="text-cyan-400 hover:underline font-inter"
          >
            Return to Sponsors Overview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#061525] min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/sponsors")}
            className="text-cyan-400/60 hover:text-cyan-400 text-xs tracking-widest uppercase font-orbitron transition-colors flex items-center gap-2"
          >
            ← Back to All Sponsors
          </button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-cyan-400" />
            <span className="text-cyan-400 text-xs tracking-widest uppercase font-orbitron">
              SPONSOR ARCHIVE
            </span>
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl text-white mb-6">
            {data.title}
          </h1>
          <p className="text-gray-300 font-inter leading-relaxed text-lg italic border-l-2 border-cyan-900/50 pl-6">
            {data.intro}
          </p>
        </div>

        {/* Sponsors List */}
        <div className="space-y-12">
          {data.sponsors?.map((sponsor, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center p-8 rounded-2xl border border-cyan-900/20 bg-[#030d1a] shadow-xl ${
                sponsor.imageAlign === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Logo Container */}
              <div className="w-full md:w-1/3 flex justify-center shrink-0">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-colors">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    style={{ width: sponsor.width || 'auto' }}
                    className="max-w-full h-auto object-contain filter brightness-110"
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex-1">
                <h3 className="font-orbitron text-xl text-cyan-400 mb-3 uppercase tracking-wider">
                  {sponsor.name}
                </h3>
                <p className="text-gray-300 font-inter leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tiered Sponsors */}
        {data.tiers && (
          <div className="space-y-16">
            {data.tiers.map((tier, tIndex) => (
              <div key={tIndex}>
                <h2 className="font-orbitron text-2xl text-white text-center mb-10 tracking-widest uppercase bg-cyan-900/10 py-4 rounded-lg border border-cyan-900/20">
                  {tier.name}
                </h2>
                
                <div className="flex flex-wrap justify-center gap-6">
                  {tier.sponsors.map((sponsor, sIndex) => (
                    <div 
                      key={sIndex}
                      className="flex flex-col items-center text-center p-6 rounded-xl border border-cyan-900/10 bg-[#030d1a]/50 hover:bg-[#030d1a] transition-all group w-full md:w-[350px]"
                    >
                      <div className="h-32 flex items-center justify-center mb-4">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          style={{ width: sponsor.width ? sponsor.width / 1.5 : 'auto' }}
                          className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-500"
                        />
                      </div>
                      <h4 className="font-orbitron text-sm text-cyan-400 mb-2 uppercase tracking-wide">
                        {sponsor.name}
                      </h4>
                      {sponsor.description && (
                        <p className="text-gray-400 font-inter text-xs leading-relaxed">
                          {sponsor.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Contact */}
        <div className="mt-20 p-8 rounded-2xl border border-dashed border-cyan-400/30 text-center">
          <p className="text-gray-300 font-inter mb-4">
            Interested in helping our team? Please contact our faculty advisor:
          </p>
          <a 
            href="mailto:ems@mil.ufl.edu?subject=SubjuGator Donation"
            className="font-orbitron text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
          >
            Dr. Eric M. Schwartz (ems@mil.ufl.edu)
          </a>
        </div>
      </div>
    </div>
  );
}