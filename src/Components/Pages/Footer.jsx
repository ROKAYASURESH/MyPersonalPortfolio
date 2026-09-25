import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../../seo/site";

export default function Footer() {
  return (
    <footer className="footer container">
      <div>
        <Link className="brand" to="/" aria-label="Suresh Rokaya — home">
          suresh<span>.</span>
        </Link>
        <p>
          Official portfolio of Suresh Rokaya — software &amp; full-stack web
          developer in Kathmandu, Nepal.
        </p>
        <span className="small-label">
          © {new Date().getFullYear()} Suresh Rokaya
        </span>
      </div>
      <nav className="footer-links" aria-label="Professional profiles and pages">
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer me"
          aria-label="GitHub — Suresh Rokaya"
        >
          GitHub — Suresh Rokaya ↗
        </a>
        <a
          href={`mailto:${SITE.email}`}
          aria-label="Email Suresh Rokaya"
        >
          Email — Suresh Rokaya ↗
        </a>
        <Link to="/about">About Suresh Rokaya</Link>
        <Link to="/portfolio">Projects by Suresh Rokaya</Link>
        <Link to="/contact">Contact Suresh Rokaya</Link>
      </nav>
    </footer>
  );
}
