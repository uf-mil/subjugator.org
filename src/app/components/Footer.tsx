import { Github, Instagram, Mail, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router";
import subjugatorLogo from "../media/subjugator_logo.png";

// Custom Discord Icon for the footer link, since lucide-react doesn't have a built in one
function DiscordIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Vehicle", to: "/vehicle" },
  { label: "Competitions", to: "/competitions" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: <Github size={16} />, label: "GitHub", href: "https://github.com/uf-mil/mil2" },
  { icon: <DiscordIcon size={16} />, label: "Discord", href: "https://discord.com/invite/Pw3NmhCF6U" },
  { icon: <Youtube size={16} />, label: "YouTube", href: "https://www.youtube.com/@SubjuGatorUF/videos" },
  { icon: <Instagram size={16} />, label: "Instagram", href: "https://www.instagram.com/ufmil" },
  { icon: <Mail size={16} />, label: "Email", href: "mailto:subjugatoruf@gmail.com" },
];

const footerBrandImage = subjugatorLogo;

export function Footer() {
  return (
    <footer className="bg-[#030d1a] border-t border-cyan-900/20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <Link to="/" className="group shrink-0">
          <img
            src={footerBrandImage}
            alt="SubjuGator"
            className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs tracking-wide transition-colors ${isActive ? "text-cyan-400" : "text-gray-600 hover:text-gray-400"}`
              }
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Social + copyright */}
        <div className="flex flex-col items-center sm:items-end gap-3">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-7 h-7 rounded flex items-center justify-center text-gray-600 hover:text-cyan-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2025 SubjuGator AUV Team
          </p>
        </div>
      </div>
    </footer>
  );
}
