import { motion } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "8+", label: "Years Experience" },
  { value: "120+", label: "Happy Clients" },
  { value: "15+", label: "Industry Awards" },
];

export function Stats() {
  return (
    <section
      style={{ backgroundColor: "#F5A500" }}
      className="py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(40px, 6vw, 64px)",
                  color: "#0D1128",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "rgba(13,17,40,0.75)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
