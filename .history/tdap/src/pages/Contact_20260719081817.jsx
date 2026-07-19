import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function AnimatedSection({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/2347074171697?text=${encodeURIComponent(`Hello The Digital Artist Push! My name is ${form.name}. I'm interested in ${form.service || "your services"}. Message: ${form.message}`)}`,
      "_blank",
    );
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: "234 707 417 1697",
      action: "https://wa.me/2347074171697",
      actionText: "Chat Now",
    },
    {
      icon: MdOutlineMail,
      title: "Email",
      details: "info@thedigitalartistpush.com",
      action: "mailto:info@thedigitalartistpush.com",
      actionText: "Send Email",
    },
    {
      icon: CiLocationOn,
      title: "Location",
      details: "Lagos, Nigeria\nServing artists worldwide",
      action: "#",
      actionText: "Get Directions",
    },
    {
      icon: IoIosTime,
      title: "Business Hours",
      details: "-Fri: 8AM-6PM\nSat: 10AM-4PM\nSun: Closed",
      action: "#",
      actionText: null,
    },
  ];
  const socialLinks = [
    { icon: FaInstagram, name: "Instagram", url: "#" },
    { icon: FaFacebook, name: "Facebook", url: "#" },
    { icon: FaTiktok, name: "TikTok", url: "#" },
  ];

  return (
    <main>
      <section className="contact-hero">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1800&q=80"
          alt=""
          className="hero-bg"
          loading="eager"
        />
        <div className="hero-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <p className="section-label">Contact Us</p>
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">
            Ready to take your music career to the next level? Reach out to us
            and let's make it happen.
          </p>
        </motion.div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <AnimatedSection>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label>Service Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="Music Distribution">
                      Music Distribution
                    </option>
                    <option value="Spotify Promotion">Spotify Promotion</option>
                    <option value="Apple Music Promotion">
                      Apple Music Promotion
                    </option>
                    <option value="Audiomack Promotion">
                      Audiomack Promotion
                    </option>
                    <option value="Boomplay Promotion">
                      Boomplay Promotion
                    </option>
                    <option value="YouTube Services">YouTube Services</option>
                    <option value="TikTok Promotion">TikTok Promotion</option>
                    <option value="Instagram Promotion">
                      Instagram Promotion
                    </option>
                    <option value="Media PR">Media PR & Publicity</option>
                    <option value="Blog Promotion">Blog Promotion</option>
                    <option value="Google Services">Google Services</option>
                    <option value="Creative Design">Creative Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-whatsapp btn-large"
                  style={{ width: "100%" }}
                >
                  <FaWhatsapp /> Send Message via WhatsApp
                </button>
              </form>
            </div>
          </AnimatedSection>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            {contactInfo.map((info, i) => (
              <AnimatedSection key={i}>
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    {<info.icon></info.icon>}
                  </div>
                  <div>
                    <h4>{info.title}</h4>
                    <p style={{ whiteSpace: "pre-line" }}>{info.details}</p>
                    {info.actionText && (
                      <a
                        href={info.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--primary-accent-light)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          display: "inline-block",
                          marginTop: "8px",
                        }}
                      >
                        {info.actionText} →
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "30px",
                }}
              >
                <h4 style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
                  Follow Us
                </h4>
                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "rgba(75,0,130,0.1)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        transition: "all 0.3s ease",
                        border: "1px solid rgba(75,0,130,0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "var(--primary-accent)";
                        e.target.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(75,0,130,0.1)";
                        e.target.style.transform = "translateY(0)";
                      }}
                      title={s.name}
                    >
                      {<s.icon></s.icon>}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Click the WhatsApp button below to start a conversation with our
            team right now.
          </p>
          <a
            href="https://wa.me/2347074171697?text=I'm%20ready%20to%20start%20my%20music%20career%20journey."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-large"
          >
            <FaWhatsapp /> Chat on WhatsApp Now
          </a>
        </motion.div>
      </section>
    </main>
  );
}
export default Contact;
