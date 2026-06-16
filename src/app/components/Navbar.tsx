import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "rgba(13,17,40,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-0 relative"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <div className="relative">
              <div
                className="absolute"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#F5A500",
                  right: "-12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 pr-3">
                <div style={{ color: "#fff", fontSize: "15px", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  SHUTTERS
                </div>
                <div style={{ color: "#fff", fontSize: "15px", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  FILMS<span style={{ color: "#F5A500" }}>.</span>
                </div>
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-white transition-colors text-sm tracking-wide"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 text-sm transition-all hover:scale-105"
              style={{
                backgroundColor: "#F5A500",
                color: "#0D1128",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "2px",
              }}
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#0D1128" }}
          className="md:hidden border-t border-white/10"
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-white py-3 text-left border-b border-white/5 transition-colors"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-4 py-3 text-center"
              style={{
                backgroundColor: "#F5A500",
                color: "#0D1128",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                borderRadius: "2px",
              }}
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
