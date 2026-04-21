import { useNavigate } from 'react-router';

interface BlogPostCardProps {
  id: string;
  title: string;
  date: string;
  image: string;
  year: number;
}

export function BlogPostCard({ id, title, date, image, year }: BlogPostCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${year}/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-6 rounded-2xl border border-cyan-900/30 bg-[#030d1a] hover:border-cyan-400/30 hover:bg-[#030d1a]/80 transition-all hover:-translate-y-1 cursor-pointer group shadow-lg shadow-black/20"
    >
      {/* Featured Image */}
      {image && (
        <div className="mb-4 overflow-hidden rounded h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="font-orbitron text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>

      {/* Date */}
      <p className="text-cyan-400 font-inter text-sm mb-4">{date}</p>

      {/* Read More Arrow */}
      <div className="flex items-center gap-2 text-cyan-400/60 group-hover:text-cyan-300 transition-colors">
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
  );
}
