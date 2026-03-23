import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Vehicle", to: "/vehicle" },
  { label: "Competitions", to: "/competitions" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always solid on non-home pages
  const solid = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-12 transition-all duration-300 ${
        solid
          ? "bg-[#030d1a]/95 backdrop-blur-md shadow-lg shadow-cyan-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src="http://subjugator.org/wp-content/uploads/2012/05/Subjugator-Logo2.png"
            alt="SubjuGator"
            className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                }`
              }
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#030d1a]/98 backdrop-blur-md border-t border-cyan-900/30 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-wide py-1 text-left transition-colors ${
                  isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                }`
              }
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
