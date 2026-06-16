import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = ["All", "Film", "Events", "Music", "Commercial"];

const projects = [
  {
    id: 1,
    title: "Resonance",
    category: "Music",
    tag: "Music Video",
    img: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwZXZlbnQlMjBwaG90b2dyYXBoeSUyMGxpdmUlMjBwZXJmb3JtYW5jZSUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3ODk1NTMzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Behind the Lens",
    category: "Film",
    tag: "Short Film",
    img: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpYyUyMGNhbWVyYSUyMGNyZXd8ZW58MXx8fHwxNzc4OTU1MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Neon Nights",
    category: "Events",
    tag: "Event Coverage",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwZXZlbnQlMjBwaG90b2dyYXBoeSUyMGxpdmUlMjBwZXJmb3JtYW5jZSUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3ODk1NTMzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "On Set",
    category: "Film",
    tag: "BTS Documentary",
    img: "https://images.unsplash.com/photo-1632187989763-c9c620420b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpYyUyMGNhbWVyYSUyMGNyZXd8ZW58MXx8fHwxNzc4OTU1MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Live Sessions",
    category: "Events",
    tag: "Concert Film",
    img: "https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwZXZlbnQlMjBwaG90b2dyYXBoeSUyMGxpdmUlMjBwZXJmb3JtYW5jZSUyMHN0YWdlJTIwbGlnaHRzfGVufDF8fHx8MTc3ODk1NTMzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Frame by Frame",
    category: "Commercial",
    tag: "Brand Story",
    img: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpYyUyMGNhbWVyYSUyMGNyZXd8ZW58MXx8fHwxNzc4OTU1MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    title: "In Motion",
    category: "Commercial",
    tag: "Corporate Film",
    img: "https://images.unsplash.com/photo-1629756048377-09540f52caa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmlkZW9ncmFwaHklMjBmaWxtaW5nJTIwY291cGxlfGVufDF8fHx8MTc3ODk1NTMzNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    title: "The Stage",
    category: "Music",
    tag: "Live Performance",
    img: "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpYyUyMGNhbWVyYSUyMGNyZXd8ZW58MXx8fHwxNzc4OTU1MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#0D1128" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div style={{ width: "32px", height: "2px", backgroundColor: "#F5A500" }} />
            <span
              style={{
                color: "#F5A500",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.15em",
              }}
            >
              OUR WORK
            </span>
            <div style={{ width: "32px", height: "2px", backgroundColor: "#F5A500" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 58px)",
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Featured <span style={{ color: "#F5A500" }}>Projects</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 text-sm transition-all"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontSize: "14px",
                borderRadius: "2px",
                backgroundColor: active === cat ? "#F5A500" : "transparent",
                color: active === cat ? "#0D1128" : "rgba(255,255,255,0.6)",
                border: active === cat ? "1px solid #F5A500" : "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: "2px", aspectRatio: "3/4" }}
              >
                <ImageWithFallback
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
                  style={{ background: "rgba(13,17,40,0.85)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#F5A500" }}
                  >
                    <Play size={20} fill="#0D1128" color="#0D1128" />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "18px",
                      color: "#fff",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    className="mt-1"
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "12px",
                      color: "#F5A500",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {project.tag}
                  </div>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 px-2 py-1"
                  style={{
                    backgroundColor: "#F5A500",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    color: "#0D1128",
                    borderRadius: "2px",
                  }}
                >
                  {project.tag}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
