import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Wathila Manakamal",
    role: "Managing Director, Hilight Events",
    quote:
      "For live events, timing and trust matter more than anything. Shutters Films understood the energy of the show, moved professionally with our crew, and delivered visuals that helped us present Hilight Events at a much higher standard.",
    initials: "WM",
  },
  {
    id: 2,
    name: "Tharindu Wadduwage",
    role: "Musician & Song Writer",
    quote:
      "They do not just record a performance; they listen to the song first. The visuals, pacing, and colour choices felt connected to the emotion of the music, which is exactly what an artist needs from a film team.",
    initials: "TW",
  },
  {
    id: 3,
    name: "Sachee Maduranga",
    role: "Musician",
    quote:
      "Working with Shutters Films was smooth from the first discussion to the final edit. They gave clear direction on set, captured natural moments, and kept the final video honest to my style as a musician.",
    initials: "SM",
  },
  {
    id: 4,
    name: "Suneera Sumanga",
    role: "Vocal Artist",
    quote:
      "A vocal performance has small expressions that can easily be missed. Shutters Films paid attention to those details and created a final video that felt intimate, polished, and true to the performance.",
    initials: "SS",
  },
  {
    id: 5,
    name: "Abhisheka Wimalaweera",
    role: "Vocal Artist",
    quote:
      "The team handled the shoot with patience, respect, and a strong eye for emotion. Their framing and editing supported the story of the song without overpowering it, which made the final output feel very personal.",
    initials: "AW",
  },
  {
    id: 6,
    name: "WTF? (Where They From?)",
    role: "Musical Band",
    quote:
      "Band shoots need a team that can capture chemistry, movement, and stage presence at the same time. Shutters Films gave us that balance, with strong live energy and clean cinematic production.",
    initials: "WTF",
  },
  {
    id: 7,
    name: "Tharindu Nirmana",
    role: "Artist & Leader of Knights Band",
    quote:
      "Shutters Films understood both the artist side and the band side of the project. They were organized on location, easy to work with, and the final visuals carried the attitude and identity we wanted.",
    initials: "TN",
  },
  {
    id: 8,
    name: "Sithum Abhishek",
    role: "Musician & Mixing Mastering Engineer",
    quote:
      "As someone who works closely with sound, I appreciate when visuals respect the rhythm and dynamics of a track. Shutters Films edited with that musical sense, and the final video felt tight, clean, and professional.",
    initials: "SA",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#0A0E1F" }}
    >
      {/* Decorative */}
      <div
        className="absolute right-0 bottom-0 opacity-10 pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "#F5A500",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
              CLIENT STORIES
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
            What Clients <span style={{ color: "#F5A500" }}>Say</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={t.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 60 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 text-center"
              style={{
                backgroundColor: "#111729",
                borderRadius: "2px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Quote size={40} color="#F5A500" className="mx-auto mb-6 opacity-60" />

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </p>

              {/* Avatar */}
              <div className="mt-8 flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#F5A500" }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "18px",
                      color: "#0D1128",
                    }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#fff",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "13px",
                    color: "#F5A500",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center transition-all hover:scale-110"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "2px",
                color: "#fff",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  style={{
                    width: i === index ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor: i === index ? "#F5A500" : "rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center transition-all hover:scale-110"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "2px",
                color: "#fff",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
