import React from "react";
import { motion } from "framer-motion";
import { teamMembers, timelineData } from "../data/servicesData.js";
import { FaWhatsapp } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import Lastkid from "../";
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

function About() {
  return (
    <main>
      <section className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1800&q=80"
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
          <p className="section-label">About Us</p>
          <h1 className="hero-title">About The Digital Artist Push</h1>
          <p className="hero-subtitle">
            Empowering independent artists with professional music distribution
            and marketing since 2022.
          </p>
        </motion.div>
      </section>

      <AnimatedSection>
        <section className="about-content">
          <div className="about-grid">
            <img
              src="https://i.pinimg.com/736x/44/86/59/4486598d87585e478c7a1b8d6414b90c.jpg"
              alt=""
              className="about-image"
              loading="lazy"
            />
            <div className="about-text">
              <p className="section-label">Our Story</p>
              <h2>Our Journey</h2>
              <p>
                The Digital Artist Push was founded in 2022 with the vision of
                helping independent artists grow their music careers through
                professional distribution, marketing, and digital promotion
                services.
              </p>
              <p>
                Since our launch, we have worked with artists from Nigeria and
                international markets who required reliable music marketing
                solutions. Our mission is to continue expanding globally while
                helping artists increase streams, visibility, fan engagement,
                and overall career growth.
              </p>
              <a
                href="https://wa.me/2347074171697"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <FaWhatsapp /> Let's Work Together
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="mission-vision">
        <div className="mv-grid">
          <AnimatedSection>
            <div className="mv-card">
              <h3>
                <GoGoal /> Our Mission
              </h3>
              <p>
                To empower independent artists worldwide with professional-grade
                music distribution, marketing, and promotional services that
                help them reach their full potential and build sustainable music
                careers.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mv-card">
              <h3>
                <FaEye /> Our Vision
              </h3>
              <p>
                To become the leading global platform for independent artist
                growth, connecting talent with audiences across every continent
                while maintaining the highest standards of service and
                innovation.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mv-card">
              <h3>
                <IoDiamond /> Core Values
              </h3>
              <p>
                Integrity, transparency, innovation, and dedication. We believe
                in putting artists first, delivering measurable results, and
                maintaining the highest ethical standards in everything we do.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection>
        <section className="timeline">
          <div className="section-container text-center">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">Company Timeline</h2>
            <p className="section-subtitle">
              From our founding to our global expansion goals, here's our growth
              story.
            </p>
          </div>
          <div className="timeline-container">
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{item.year}</h4>
                  <p>{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* <section className="team-section">
        <AnimatedSection><div className="section-container text-center">
          <p className="section-label">Our Team</p>
          <h2 className="section-title">Meet The Team</h2>
          <p className="section-subtitle">Passionate professionals dedicated to your music career success.</p>
        </div></AnimatedSection>
        <div className="team-grid">
          {teamMembers.map((m,i) => (
            <motion.div key={i} className="team-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}>
              <img src={m.image} alt={m.name} className="team-img" loading="lazy" />
              <div className="team-info"><h4>{m.name}</h4><p>{m.role}</p></div>
            </motion.div>
          ))}
        </div>
      </section> */}

      <AnimatedSection>
        <section className="cta-section">
          <h2 className="cta-title">Global Expansion Goals</h2>
          <p className="cta-subtitle">
            We're on a mission to expand our reach to 50+ countries, bringing
            professional music services to independent artists everywhere.
          </p>
          <a
            href="https://wa.me/2347074171697"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-large"
          >
            <FaWhatsapp /> Be Part of Our Growth
          </a>
        </section>
      </AnimatedSection>
    </main>
  );
}
export default About;
