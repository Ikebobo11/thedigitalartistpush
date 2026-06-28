import React, { useState } from 'react'
import { BsAppleMusic } from "react-icons/bs";
// import { FaWhatsapp } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaBold } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { GiMusicSpell } from "react-icons/gi";


import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { servicesData, testimonials, whyChooseUs, faqData } from '../data/servicesData.js'

function AnimatedSection({ children, className }) {
  return <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className={className}>{children}</motion.div>
}

function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '500+', label: 'Artists Served' },
    { number: '1000+', label: 'Campaigns Managed' },
    { number: '50+', label: 'Countries Reached' },
  ]
  const platforms = [
    { name: 'Spotify', icon: FaSpotify}, { name: 'Apple Music', icon: BsAppleMusic  }, { name: 'Audiomack', icon: SiAudiomack },
    { name: 'Boomplay', icon: FaBold }, { name: 'YouTube', icon: FaYoutube }, { name: 'TikTok', icon: FaTiktok },
    { name: 'Instagram', icon: FaInstagram }, { name: 'Facebook', icon: FaFacebook }, { name: 'X (Twitter)', icon: FaXTwitter },
  ]

  return (
    <main>
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1800&q=80" alt="" className="hero-bg" loading="eager" />
        <div className="hero-overlay"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-content">
          <div className="hero-badge">🔥 Premium Music Services Since 2022</div>
          <h1 className="hero-title">Global Music Distribution & Marketing For Independent Artists</h1>
          <p className="hero-subtitle">Take your music career to the next level with professional distribution, strategic marketing, and targeted promotion across all major streaming platforms.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary btn-large">Explore Our Services →</Link>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large">💬 Chat With Us</a>
          </div>
        </motion.div>
      </section>

      <section className="trusted-section">
        <h3 className="trusted-title">Trusted By Independent Artists Worldwide</h3>
        <div className="trusted-logos">
          {[ <CiMicrophoneOn /> ,'🎧','🎸','🎹','🥁','🎻'].map((l,i) => (
            <motion.span key={i} className="trusted-logo" initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}>{l}</motion.span>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s,i) => (
            <motion.div key={i} className="stat-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.15 }}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatedSection><section className="services-overview">
        <div className="section-container text-center">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Comprehensive Music Services</h2>
          <p className="section-subtitle">From distribution to promotion, we provide everything you need to grow your music career globally.</p>
        </div>
        <div className="services-grid">
          {servicesData.map((s,i) => (
            <motion.div key={s.id} className="service-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }}>
              <div className="service-card-icon">{<s.icon >/</s.icon>}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <Link to="/services" className="service-card-link">Learn More →</Link>
            </motion.div>
          ))}
        </div>
      </section></AnimatedSection>

      <section className="why-choose">
        <AnimatedSection><div className="section-container text-center">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Why The Digital Artist Push?</h2>
          <p className="section-subtitle">We combine industry expertise with cutting-edge strategies to deliver results that matter.</p>
        </div></AnimatedSection>
        <div className="why-grid">
          {whyChooseUs.map((w,i) => (
            <motion.div key={i} className="why-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}>
              <div className="why-icon">{<w.icon></w.icon>}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatedSection><section className="platforms-section">
        <div className="section-container text-center">
          <p className="section-label">Featured Platforms</p>
          <h2 className="section-title">Where Your Music Will Be Heard</h2>
          <p className="section-subtitle">We distribute and promote your music across every major streaming platform worldwide.</p>
        </div>
        <div className="platforms-grid">
          {platforms.map((p,i) => (
            <motion.div key={i} className="platform-card" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}>
              <div className="platform-card-logo">{<p.icon></p.icon>}</div>
              <h4>{p.name}</h4>
            </motion.div>
          ))}
        </div>
      </section></AnimatedSection>

      <section className="testimonials-section">
        <AnimatedSection><div className="section-container text-center">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Artists Say About Us</h2>
          <p className="section-subtitle">Hear from independent artists who have transformed their careers.</p>
        </div></AnimatedSection>
        <div className="testimonials-grid">
          {testimonials.map((t,i) => (
            <motion.div key={i} className="testimonial-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.15 }}>
              <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" />
                <div><div className="testimonial-name">{t.name}</div><div className="testimonial-role">{t.role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatedSection><section className="faq-section">
        <div className="section-container text-center">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Got questions? We've got answers.</p>
        </div>
        <div className="faq-container">
          {faqData.map((f,i) => (
            <motion.div key={i} className="faq-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }}>
              <div className={`faq-question ${openFaq===i?'active':''}`} onClick={() => setOpenFaq(openFaq===i?null:i)}>
                {f.question}<span className={`faq-icon ${openFaq===i?'active':''}`}>+</span>
              </div>
              {openFaq===i && <motion.div className="faq-answer" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} transition={{duration:0.3}}>{f.answer}</motion.div>}
            </motion.div>
          ))}
        </div>
      </section></AnimatedSection>

      <section className="cta-section">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="cta-title">Ready to Take Your Music Career to the Next Level?</h2>
          <p className="cta-subtitle">Join hundreds of independent artists who trust us for their music distribution and promotion needs.</p>
          <a href="https://wa.me/2348000000000?text=Hello%20The%20Digital%20Artist%20Push!%20I%20want%20to%20grow%20my%20music%20career." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large">💬 Start Your Journey Now</a>
        </motion.div>
      </section>
    </main>
  )
}
export default Home