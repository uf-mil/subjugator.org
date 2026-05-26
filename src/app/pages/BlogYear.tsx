import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { BLOG_DATA, BLOG_YEARS } from '../data/BlogData';
import { BlogPostCard } from '../components/BlogPostCard';

export function BlogYear() {
  const { year, id } = useParams<{ year: string; id?: string }>();
  const navigate = useNavigate();
  const selectedYear = year ? parseInt(year, 10) : new Date().getFullYear();
  
  const yearData = BLOG_DATA[selectedYear as keyof typeof BLOG_DATA];

  const specificEntry = id ? yearData?.entries.find((e) => e.id === id) : null;
  const showGrid = !id && yearData?.entries.some((e) => e.title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, year]);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = e.target.value;
    navigate(`/blog/${newYear}`);
  };

  return (
    <div className="bg-[#061525] min-h-screen pt-28 pb-24 px-6">
      {/* Section Label */}
      <div className="max-w-6xl mx-auto mb-12">
        <p className="text-cyan-400 text-sm font-bold tracking-widest mb-4">
          BLOG
        </p>
        
        {/* Year Heading */}
        <h1 className="font-orbitron text-4xl md:text-5xl text-white mb-8">
          {selectedYear}
        </h1>

        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          {/* Back Button */}
          <button
            onClick={() => id ? navigate(`/blog/${year}`) : navigate('/blog')}
            className="px-6 py-2 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 font-orbitron text-xs tracking-widest uppercase transition-all rounded"
          >
            {id ? '← Back to Year' : '← Back to Archives'}
          </button>

          {/* Year Selector Dropdown */}
          <div className="relative">
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="appearance-none bg-[#030d1a] border border-cyan-900/50 text-white rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:border-cyan-400/60 cursor-pointer transition-colors hover:border-cyan-700/60"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              {BLOG_YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
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
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto">
        {yearData ? (
          <div>
            {/* Header Image */}
            {!id && !showGrid && yearData.image && (
              <div className="mb-12 rounded-2xl overflow-hidden border border-cyan-900/30 bg-[#030d1a] p-4">
                <img
                  src={yearData.image}
                  alt={`${selectedYear} blog header`}
                  className="w-full h-64 object-contain mb-4"
                />
                {yearData.imageCaption && (
                  <p className="text-cyan-300 font-inter text-sm italic">
                    {yearData.imageCaption}
                  </p>
                )}
              </div>
            )}

            {/* Grid View for years with titles (2011) */}
            {showGrid ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yearData.entries.map((entry, index) => (
                  <BlogPostCard
                    key={entry.id || index}
                    id={entry.id || String(index)}
                    title={entry.title || `Entry ${entry.date}`}
                    date={entry.date}
                    image={entry.featuredImage || ''}
                    year={selectedYear}
                  />
                ))}
              </div>
            ) : (
              /* Standard List View or Single Entry View */
              <div className="space-y-8">
                {(specificEntry ? [specificEntry] : yearData.entries).map((entry, index) => (
                  <div
                    key={entry.id || index}
                    className="border border-cyan-900/30 bg-[#030d1a] p-8 rounded-2xl space-y-6 shadow-xl shadow-black/20"
                  >
                    {/* Entry Title if available */}
                    {entry.title && (
                      <h2 className="font-orbitron text-2xl text-white mb-2">{entry.title}</h2>
                    )}

                    {/* Entry Date */}
                    <p className="font-orbitron text-cyan-400 font-bold text-sm">
                      {entry.date}
                    </p>

                    {/* Featured Image - Displayed as a banner between metadata and content */}
                    {entry.featuredImage && (
                      <div className="pt-2">
                        <img 
                          src={entry.featuredImage} 
                          alt={entry.title || "Post featured image"} 
                          className="w-full h-auto border border-cyan-900/50 rounded-lg max-h-[700px] object-cover" 
                        />
                      </div>
                    )}

                    {/* Video - Displayed if available */}
                    {entry.videoUrl && (
                      <div className="aspect-video w-full mb-6">
                        <iframe
                          src={entry.videoUrl}
                          className="w-full h-full rounded-lg border border-cyan-900/50 shadow-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={entry.title || "Blog video"}
                        ></iframe>
                      </div>
                    )}

                    {/* Entry Content */}
                    <div className="text-white font-inter text-base leading-relaxed">
                      {typeof entry.content === 'string' ? (
                        <p className="whitespace-pre-line">{entry.content}</p>
                      ) : Array.isArray(entry.content) ? (
                        <div className="space-y-4">
                          {entry.content.map((line, i) => (
                            <p key={i} className="whitespace-pre-line">
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p>{entry.content}</p>
                      )}
                    </div>

                    {/* Entry Images */}
                    {entry.images && entry.images.length > 0 && (
                      <div className="pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {entry.images.map((image, i) => (
                            <div key={i} className="flex flex-col">
                              <img
                                src={image.src}
                                alt={image.alt || 'Entry image'}
                                className="w-full h-auto max-h-48 object-contain border border-cyan-300"
                              />
                              {image.caption && (
                                <p className="text-cyan-300 font-inter text-sm italic mt-2 text-center">
                                  {image.caption}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-white font-inter text-lg">
              Records for this year are not available yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
