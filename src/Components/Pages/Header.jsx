import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaDownload } from 'react-icons/fa';
import ThemeToggle from '../Common/ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.navbar')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/MyPersonalPortfolio') {
      return location.pathname === '/MyPersonalPortfolio' || location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <NavLink
          className="navbar-brand"
          to="/MyPersonalPortfolio"
          onClick={closeMobileMenu}
        >
          <div className="brand-logo-wrapper">
            <img src={logo} alt="Suresh Rokaya" />
            <div className="logo-glow"></div>
          </div>
          <div className="brand-text">
            <span className="brand-name">SURESH ROKAYA</span>
            <span className="brand-title">Full-Stack Developer</span>
          </div>
        </NavLink>

        <button
          className={`navbar-toggler ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

        <ul className={`navbar-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${isActive('/MyPersonalPortfolio') ? 'active' : ''}`}
              to="/MyPersonalPortfolio"
              onClick={closeMobileMenu}
            >
              <span className="nav-text">Home</span>
              <span className="nav-indicator"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              to="/about"
              onClick={closeMobileMenu}
            >
              <span className="nav-text">About</span>
              <span className="nav-indicator"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
              to="/portfolio"
              onClick={closeMobileMenu}
            >
              <span className="nav-text">Portfolio</span>
              <span className="nav-indicator"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${isActive('/service') ? 'active' : ''}`}
              to="/service"
              onClick={closeMobileMenu}
            >
              <span className="nav-text">Services</span>
              <span className="nav-indicator"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${isActive('/teams') ? 'active' : ''}`}
              to="/teams"
              onClick={closeMobileMenu}
            >
              <span className="nav-text">Teams</span>
              <span className="nav-indicator"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              to="/contact"
              onClick={closeMobileMenu}
            >
              <span className="nav-text">Contact</span>
              <span className="nav-indicator"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
