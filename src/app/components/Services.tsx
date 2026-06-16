import { motion } from "motion/react";
import { Film, Video, Users, Music, FileText, Megaphone } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Film Production",
    desc: "Full-scale narrative film and short film production from pre-production planning to final delivery.",
  },
  {
    icon: Video,
    title: "Corporate Videos",
    desc: "Professional corporate films, brand stories, product launches, and internal communication videos.",
  },
  {
    icon: Users,
    title: "Event Coverage",
    desc: "Live event videography for concerts, conferences, galas, and weddings — capturing every key moment.",
  },
  {
    icon: Music,
    title: "Music Videos",
    desc: "Cinematic music video production with creative direction, choreography support, and color grading.",
  },
  {
    icon: FileText,
    title: "Documentaries",
    desc: "Story-driven documentary production that shines a light on people, places, and important causes.",
  },
  {
    icon: Megaphone,
    title: "Commercial Ads",
    desc: "High-impact TVC and digital ad production designed to grow brand awareness and drive conversions.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#0A0E1F" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              WHAT WE DO
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
            Our <span style={{ color: "#F5A500" }}>Services</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Barlow', sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            From concept to screen — we offer a complete range of production services
            tailored to your vision and goals.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 cursor-default overflow-hidden"
              style={{
                backgroundColor: "#111729",
                borderRadius: "2px",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(245,165,0,0.08) 0%, transparent 60%)",
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(245,165,0,0.1)", borderRadius: "4px" }}
              >
                <svc.icon size={26} color="#F5A500" />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "22px",
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                }}
              >
                {svc.title}
              </h3>

              {/* Desc */}
              <p
                className="mt-3"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.7,
                }}
              >
                {svc.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#F5A500" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
