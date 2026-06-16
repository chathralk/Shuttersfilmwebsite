import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlights = [
  "Professional-grade cinema equipment",
  "Experienced creative team of storytellers",
  "End-to-end production services",
  "Serving clients across Sri Lanka & globally",
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#0D1128" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619099619226-f96e319e3732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpYyUyMGNhbWVyYSUyMGNyZXd8ZW58MXx8fHwxNzc4OTU1MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional camera"
                className="w-full h-full object-cover"
              />
              {/* Overlay tint */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(245,165,0,0.15) 0%, transparent 60%)" }}
              />
            </div>

            {/* Floating accent box */}
            <div
              className="absolute -bottom-6 -right-6 w-36 h-36"
              style={{ backgroundColor: "#F5A500", zIndex: -1 }}
            />
            <div
              className="absolute -top-4 -left-4 w-24 h-24 border-2"
              style={{ borderColor: "#F5A500", zIndex: -1 }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section tag */}
            <div className="flex items-center gap-3 mb-5">
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
                WHO WE ARE
              </span>
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
              Turning Ideas Into
              <br />
              <span style={{ color: "#F5A500" }}>Visual</span> Masterpieces
            </h2>

            <p
              className="mt-6"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Shutters Films is a creative film and video production house based in
              Sri Lanka. We specialize in bringing your vision to life through the
              art of visual storytelling — whether it's a cinematic brand film,
              a high-energy music video, or a documentary that leaves a lasting impact.
            </p>
            <p
              className="mt-4"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Our team of passionate filmmakers, cinematographers, and editors work
              collaboratively to deliver content that doesn't just look good — it
              connects, resonates, and moves people.
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} color="#F5A500" />
                  <span
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 px-8 py-4 inline-flex items-center gap-2 transition-all hover:scale-105"
              style={{
                backgroundColor: "#F5A500",
                color: "#0D1128",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.08em",
                borderRadius: "2px",
              }}
            >
              LET'S CREATE TOGETHER
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
