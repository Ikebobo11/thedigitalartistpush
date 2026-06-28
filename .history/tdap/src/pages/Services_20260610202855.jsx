import React from 'react'
import { motion } from 'framer-motion'
import { servicesData } from '../data/servicesData.js'
import { FaWhatsapp } from "react-icons/fa6";

function ServiceDetail({ service }) {
  return (
    <motion.section className="service-detail" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <img src={service.bgImage} alt="" className="service-detail-bg" loading="lazy" />
      <div className="section-container">
        <div className="service-header">
          <div className="service-header-icon">{service.icon}</div>
          <p className="section-label">Service</p>
          <h2 className="section-title">{service.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{service.subtitle}</p>
        </div>
        <p style={{ textAlign:'center', color:'var(--text-secondary)', maxWidth:'700px', margin:'0 auto 50px', lineHeight:1.8 }}>{service.description}</p>
        <div className="service-sub-sections">
          {service.subsections.map((sub,i) => (
            <motion.div key={i} className="service-sub-section" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}>
              <h4>{sub.title}</h4><p>{sub.desc}</p>
            </motion.div>
          ))}
        </div>
        {service.platforms && (
          <div style={{ textAlign:'center', marginBottom:'30px' }}>
            <p style={{ color:'var(--text-secondary)', marginBottom:'15px', fontWeight:600 }}>Available Platforms:</p>
            <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
              {service.platforms.map((p,i) => (
                <span key={i} style={{ padding:'6px 16px', background:'rgba(75,0,130,0.15)', border:'1px solid rgba(75,0,130,0.3)', borderRadius:'50px', fontSize:'0.85rem', color:'var(--primary-accent-light)' }}>{p}</span>
              ))}
            </div>
          </div>
        )}
        <div className="service-cta-wrapper">
          <a href={`https://wa.me/2348000000000?text=${encodeURIComponent(service.whatsapp)}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large"><FaWhatsapp /> Reach Out On WhatsApp To Get Started</a>
        </div>
      </div>
    </motion.section>
  )
}

function Services() {
  return (
    <main>
      <section className="services-hero">
        <img src="https://images.unsplash.com/photo-1524650359799-842906ca1c06?w=1800&q=80" alt="" className="hero-bg" loading="eager" />
        <div className="hero-overlay"></div>
        <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className="hero-content">
          <p className="section-label">Our Services</p>
          <h1 className="hero-title">Complete Music Promotion & Distribution Services</h1>
          <p className="hero-subtitle">From global distribution to targeted marketing campaigns, we provide everything you need to grow your music career.</p>
          <div className="hero-buttons">
            <a href="#services-list" className="btn btn-primary btn-large">View All Services ↓</a>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large"><FaWhatsapp /> Talk To Us</a>
          </div>
        </motion.div>
      </section>
      <div id="services-list">
        {servicesData.map((service,i) => <ServiceDetail key={service.id} service={service} />)}
      </div>
      <section className="cta-section">
        <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="cta-title">Not Sure Which Service You Need?</h2>
          <p className="cta-subtitle">Contact us and we'll help you create a customized growth plan tailored to your music and goals.</p>
          <a href="https://wa.me/2348000000000?text=Hello%20The%20Digital%20Artist%20Push!%20I%20need%20help%20choosing%20the%20right%20service." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large"> Get Free Consultation</a>
        </motion.div>
      </section>
    </main>
  )
}
export default Services