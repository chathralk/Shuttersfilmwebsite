import { motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Film Production",
  "Corporate Videos",
  "Event Coverage",
  "Music Videos",
  "Documentaries",
  "Commercial Ads",
];

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#070B1A" }}>
      {/* CTA Banner */}
      <div
        className="py-16 text-center px-4"
        style={{
          background: "linear-gradient(135deg, rgba(245,165,0,0.15) 0%, rgba(13,17,40,0.5) 100%)",
          borderTop: "1px solid rgba(245,165,0,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 54px)",
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          Ready to Create Something <span style={{ color: "#F5A500" }}>Extraordinary?</span>
        </h2>
        <p
          className="mt-4 mb-8 max-w-lg mx-auto"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'Barlow', sans-serif",
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          Let's collaborate and turn your vision into a cinematic reality.
        </p>
        <button
          onClick={() => handleNavClick("#contact")}
          className="px-10 py-4 transition-all hover:scale-105"
          style={{
            backgroundColor: "#F5A500",
            color: "#0D1128",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            letterSpacing: "0.08em",
            borderRadius: "2px",
          }}
        >
          START YOUR PROJECT
        </button>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div
              className="relative inline-flex items-center mb-6"
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
                    right: "-10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 0,
                  }}
                />
                <div className="relative z-10 pr-3">
                  <div style={{ color: "#fff", fontSize: "17px", fontWeight: 900, lineHeight: 1 }}>
                    SHUTTERS
                  </div>
                  <div style={{ color: "#fff", fontSize: "17px", fontWeight: 900, lineHeight: 1 }}>
                    FILMS<span style={{ color: "#F5A500" }}>.</span>
                  </div>
                </div>
              </div>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                lineHeight: 1.8,
                maxWidth: "260px",
              }}
            >
              A creative film and video production house crafting compelling
              visual stories from Sri Lanka to the world.
            </p>

            <div
              className="mt-4"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "13px",
              }}
            >
              www.shutters.lk
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.12em",
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-2 group transition-colors"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    <span
                      style={{
                        width: "16px",
                        height: "1px",
                        backgroundColor: "#F5A500",
                        display: "inline-block",
                        transition: "width 0.2s",
                      }}
                      className="group-hover:w-6"
                    />
                    <span className="group-hover:text-white transition-colors">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.12em",
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Services
            </div>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li
                  key={svc}
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.12em",
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Contact
            </div>
            <div className="space-y-3">
              {[
                { label: "Location", val: "Colombo, Sri Lanka" },
                { label: "Email", val: "hello@shutters.lk" },
                { label: "Phone", val: "+94 77 000 0000" },
              ].map((c) => (
                <div key={c.label}>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      color: "#F5A500",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "14px",
                      marginTop: "2px",
                    }}
                  >
                    {c.val}
                  </div>
                </div>
              ))}

              {/* Social icons */}
              <div className="flex gap-2 mt-4">
                {["f", "t", "in", "▶"].map((s) => (
                  <div
                    key={s}
                    className="w-9 h-9 flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                    style={{
                      backgroundColor: "rgba(245,165,0,0.12)",
                      borderRadius: "2px",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#F5A500",
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-6 px-4"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "'Barlow', sans-serif",
              fontSize: "13px",
            }}
          >
            © {new Date().getFullYear()} Shutters Films. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'Barlow', sans-serif",
              fontSize: "13px",
            }}
          >
            Crafting stories, one frame at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
