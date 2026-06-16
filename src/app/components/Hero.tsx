import { motion } from "motion/react";
import { Play, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToWork = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0D1128" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpYyUyMGNhbWVyYSUyMGNyZXd8ZW58MXx8fHwxNzc4OTU1MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Film production crew"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,17,40,0.95) 40%, rgba(13,17,40,0.5) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,17,40,1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Decorative orange accent */}
      <div
        className="absolute right-0 top-0 opacity-20"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "#F5A500",
          transform: "translate(40%, -40%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div style={{ width: "40px", height: "2px", backgroundColor: "#F5A500" }} />
            <span
              style={{
                color: "#F5A500",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.15em",
              }}
            >
              FILM & VIDEO PRODUCTION
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(52px, 8vw, 110px)",
              lineHeight: 0.95,
              color: "#fff",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Every <span style={{ color: "#F5A500" }}>Frame</span>
            <br />
            Tells Your
            <br />
            <span
              style={{
                WebkitTextStroke: "2px #fff",
                color: "transparent",
              }}
            >
              Story.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-lg"
            style={{
              color: "rgba(255,255,255,0.65)",
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Shutters Films is a professional film and video production company
            based in Sri Lanka. We craft compelling visual narratives that
            captivate audiences and elevate your brand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToWork}
              className="flex items-center gap-3 px-8 py-4 transition-all hover:scale-105"
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
              <Play size={16} fill="#0D1128" />
              VIEW OUR WORK
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-3 px-8 py-4 transition-all hover:bg-white/10"
              style={{
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "0.08em",
                borderRadius: "2px",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              CONTACT US
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
      >
        <span
          style={{
            color: "#fff",
            fontFamily: "'Barlow', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.2em",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} color="#F5A500" />
        </motion.div>
      </button>
    </section>
  );
}
