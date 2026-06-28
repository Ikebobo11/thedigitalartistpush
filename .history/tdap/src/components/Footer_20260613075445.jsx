import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>The Digital Artist Push</h3>
          <p>Global music distribution and marketing services for independent artists.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            {/* <a href="#" aria-label="Twitter">🐦</a> */}
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            {/* <a href="#" aria-label="YouTube">▶️</a> */}
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Music Distribution</Link></li>
            <li><Link to="/services">Spotify Promotion</Link></li>
            <li><Link to="/services">Apple Music Promotion</Link></li>
            <li><Link to="/services">YouTube Services</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="mailto:info@thedigitalartistpush.com">info@thedigitalartistpush.com</a></li>
            <li><a href="https://wa.me/2347074171697">WhatsApp: +234 470 74 0000</a></li>
            <li>Lagos, Nigeria</li>
            <li>Mon - Fri: 9AM - 6PM</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Digital Artist Push. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer