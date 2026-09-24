import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer container">
      <div>
        <Link className="brand" to="/">
          suresh<span>.</span>
        </Link>
        <p>Built with care, in Kathmandu.</p>
        <span className="small-label">
          © {new Date().getFullYear()} Suresh Rokaya
        </span>
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/ROKAYASURESH"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a href="mailto:sureshrokaya761@gmail.com">Email ↗</a>
        <Link to="/portfolio">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
