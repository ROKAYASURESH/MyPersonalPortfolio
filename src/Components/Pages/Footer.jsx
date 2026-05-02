import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <img src={logo} alt="Suresh Rokaya" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
            <h3 style={{ margin: 0, fontSize: 'var(--font-size-xl)' }}>Suresh Rokaya</h3>
          </div>
          <p>
          Full-Stack Developer skilled in Django REST and React.js, creating seamless web experiences.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ROKAYASURESH" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
          <ul className="footer-links">
            <li>Near CCRC College</li>
            <li>Koteshwor, 32</li>
            <li>Kathmandu, Nepal</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p style={{ marginBottom: '0.5rem' }}>
            <a href="mailto:sureshrokaya761@gmail.com">sureshrokaya761@gmail.com</a>
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <a href="tel:+9779869504717">+977 9869504717</a>
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <a href="https://github.com/ROKAYASURESH" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © {currentYear} by Suresh Rokaya. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: 'var(--font-size-xs)', opacity: 0.7 }}>
          Building beautiful and functional interfaces with code
        </p>
      </div>
    </footer>
  );
}
