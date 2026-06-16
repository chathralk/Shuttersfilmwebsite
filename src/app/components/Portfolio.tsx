import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = ["All", "Music Videos", "Live Sessions", "Events"];

const projects = [
  {
    id: 1,
    title: "Music Video 01",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=lhdVCGHgEl8",
    img: "https://i.ytimg.com/vi/lhdVCGHgEl8/hqdefault.jpg",
  },
  {
    id: 2,
    title: "Music Video 02",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=gLQonL-UsV8",
    img: "https://i.ytimg.com/vi/gLQonL-UsV8/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Music Video 03",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=WiMahEL-guE",
    img: "https://i.ytimg.com/vi/WiMahEL-guE/hqdefault.jpg",
  },
  {
    id: 4,
    title: "Music Video 04",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=mqz-0KJ73sY",
    img: "https://i.ytimg.com/vi/mqz-0KJ73sY/hqdefault.jpg",
  },
  {
    id: 5,
    title: "Music Video 05",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=O0Qy1guUUks",
    img: "https://i.ytimg.com/vi/O0Qy1guUUks/hqdefault.jpg",
  },
  {
    id: 6,
    title: "Music Video 06",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=Jah9F0Scz6o",
    img: "https://i.ytimg.com/vi/Jah9F0Scz6o/hqdefault.jpg",
  },
  {
    id: 7,
    title: "Music Video 07",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=N4mcobl1c0E",
    img: "https://i.ytimg.com/vi/N4mcobl1c0E/hqdefault.jpg",
  },
  {
    id: 8,
    title: "Music Video 08",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=267Muebhvqk",
    img: "https://i.ytimg.com/vi/267Muebhvqk/hqdefault.jpg",
  },
  {
    id: 9,
    title: "Music Video 09",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=KXCvE1EG2EM",
    img: "https://i.ytimg.com/vi/KXCvE1EG2EM/hqdefault.jpg",
  },
  {
    id: 10,
    title: "Music Video 10",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=Dm8zMF_e0SM",
    img: "https://i.ytimg.com/vi/Dm8zMF_e0SM/hqdefault.jpg",
  },
  {
    id: 11,
    title: "Music Video 11",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=E7KGvAVdlZ8",
    img: "https://i.ytimg.com/vi/E7KGvAVdlZ8/hqdefault.jpg",
  },
  {
    id: 12,
    title: "Music Video 12",
    category: "Music Videos",
    tag: "Music Video",
    url: "https://www.youtube.com/watch?v=DZJsomBpcBI",
    img: "https://i.ytimg.com/vi/DZJsomBpcBI/hqdefault.jpg",
  },
  {
    id: 13,
    title: "Live Sessions 01",
    category: "Live Sessions",
    tag: "Playlist",
    url: "https://www.youtube.com/playlist?list=PLXTyIKabLaztaTeI-O4ihytqiSjmEkjiq",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 14,
    title: "Live Sessions 02",
    category: "Live Sessions",
    tag: "Playlist",
    url: "https://www.youtube.com/playlist?list=PLpaYN9p0v1NqUVDbb0khEP6McWMUNVWZT",
    img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 15,
    title: "Live Sessions 03",
    category: "Live Sessions",
    tag: "Playlist",
    url: "https://www.youtube.com/playlist?list=PLIQDowoy-A6v2-VF204HVgqiHyxz_faMi",
    img: "https://images.unsplash.com/photo-1501612780327-45045538702b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 16,
    title: "Aalakatha",
    category: "Events",
    tag: "Event",
    url: "https://aalakatha.lk/",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function Portfolio() {
  const [active, setActive] = useState(categories[0]);

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
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden cursor-pointer block"
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
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
