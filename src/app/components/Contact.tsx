import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#111729",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "15px",
    padding: "14px 16px",
    borderRadius: "2px",
    outline: "none",
    width: "100%",
  };

  return (
    <section
      id="contact"
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
              GET IN TOUCH
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
            Let's Start Your <span style={{ color: "#F5A500" }}>Project</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Barlow', sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Ready to bring your vision to life? Drop us a message and our team
            will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {[
              {
                icon: MapPin,
                title: "Our Location",
                lines: ["Colombo, Sri Lanka"],
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["hello@shutters.lk"],
              },
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+94 77 000 0000"],
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-5">
                <div
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(245,165,0,0.12)", borderRadius: "4px" }}
                >
                  <item.icon size={20} color="#F5A500" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#fff",
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </div>
                  {item.lines.map((l) => (
                    <div
                      key={l}
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.55)",
                        marginTop: "4px",
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="mt-2">
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#fff",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Follow Us
              </div>
              <div className="flex gap-3">
                {["FB", "TW", "IG", "YT"].map((s) => (
                  <div
                    key={s}
                    className="w-10 h-10 flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                    style={{
                      backgroundColor: "rgba(245,165,0,0.15)",
                      borderRadius: "2px",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "12px",
                      color: "#F5A500",
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12"
                style={{
                  backgroundColor: "#111729",
                  borderRadius: "2px",
                  border: "1px solid rgba(245,165,0,0.3)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#F5A500" }}
                >
                  <Send size={24} color="#0D1128" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "26px",
                    color: "#fff",
                    textTransform: "uppercase",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  className="mt-3"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "8px",
                      }}
                    >
                      YOUR NAME *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "8px",
                      }}
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "8px",
                      }}
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+94 77 000 0000"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: "8px",
                      }}
                    >
                      SERVICE REQUIRED
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" style={{ backgroundColor: "#111729" }}>Select a service</option>
                      <option value="Film Production" style={{ backgroundColor: "#111729" }}>Film Production</option>
                      <option value="Corporate Video" style={{ backgroundColor: "#111729" }}>Corporate Video</option>
                      <option value="Event Coverage" style={{ backgroundColor: "#111729" }}>Event Coverage</option>
                      <option value="Music Video" style={{ backgroundColor: "#111729" }}>Music Video</option>
                      <option value="Documentary" style={{ backgroundColor: "#111729" }}>Documentary</option>
                      <option value="Commercial Ad" style={{ backgroundColor: "#111729" }}>Commercial Ad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "8px",
                    }}
                  >
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-3 px-8 py-4 transition-all hover:scale-105 w-full sm:w-auto justify-center"
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
                  <Send size={16} />
                  SEND MESSAGE
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
