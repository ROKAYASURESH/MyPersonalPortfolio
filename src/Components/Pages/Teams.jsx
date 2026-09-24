import ScrollReveal from "../Motion/ScrollReveal";
import React, { useEffect } from "react";
import {
  FaFacebook,
  FaWhatsappSquare,
  FaLinkedin,
  FaArrowRight,
  FaUsers,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa/";
import { Link } from "react-router-dom";
import { teamdata } from "../All file Data/Data";
import { AiFillContacts } from "react-icons/ai";

export default function Teams() {
  useEffect(() => {
    document.title = `My Teams Details`;
  }, []);

  return (
    <>
      {/* Modern Hero Section */}
      <section className="page-hero-section">
        <div className="hero-background"></div>
        <div className="hero-gradient"></div>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>

        <div className="hero-content">
          {/* <div className="hero-badge">
                        <FaUsers className="badge-icon" />
                        <span>Meet The Team</span>
                    </div> */}

          <h1 className="hero-title">
            My <span className="text-gradient">Teams</span>
          </h1>

          <p className="hero-subtitle">
            People in my development network, working across web, mobile, and
            design.
          </p>

          <div className="hero-features">
            <div className="hero-feature-item">
              <FaUsers className="feature-icon" />
              <span>Development</span>
            </div>
            <div className="hero-feature-item">
              <FaHandshake className="feature-icon" />
              <span>Collaborative</span>
            </div>
            <div className="hero-feature-item">
              <FaLightbulb className="feature-icon" />
              <span>Design</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-glow">
              <AiFillContacts style={{ marginRight: "8px" }} />
              Work With Us
            </Link>
            <a href="#teams" className="btn btn-outline">
              View Team
              <FaArrowRight style={{ marginLeft: "8px" }} />
            </a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>

      <section className="teams-section-modern" id="teams">
        <div className="gradient-blob blob-3"></div>

        <div className="container">
          <div className="section-header-modern">
            <span className="section-badge">Our Experts</span>
            <h2 className="section-title-modern">
              Supporting <span className="text-gradient">Teams</span> With Me
            </h2>
            <p className="section-description">
              My team is composed of web developers, graphic designers, and
              android developers. Together, they have the skills and expertise
              to design, develop, and launch cutting-edge web and mobile
              applications that meet the needs of clients.
            </p>
          </div>

          <div className="teams-grid-modern">
            {teamdata.map((tr, index) => (
              <ScrollReveal
                key={tr.id}
                className="team-card-modern"
                stagger={index % 3}
              >
                <div className="team-card-inner">
                  <div className="team-image-wrapper">
                    <div className="team-image-glow"></div>
                    <img
                      src={tr.icon}
                      alt={tr.heading}
                      className="team-image"
                    />
                    <div className="team-overlay"></div>
                    <div className="team-status-badge">
                      <span className="status-dot"></span>
                      Available
                    </div>
                  </div>

                  <div className="team-content">
                    <h3 className="team-name">{tr.heading}</h3>
                    <p className="team-role">{tr.paragraph}</p>

                    <div className="team-social-links">
                      {tr.message && (
                        <a
                          href={tr.message}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-social-link"
                          aria-label="Facebook"
                        >
                          <FaFacebook />
                        </a>
                      )}
                      {tr.Whatsapp && (
                        <a
                          href={tr.Whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-social-link"
                          aria-label="WhatsApp"
                        >
                          <FaWhatsappSquare />
                        </a>
                      )}
                      {tr.Linkedin && (
                        <a
                          href={tr.Linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-social-link"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                    </div>

                    <Link
                      to={`/teamsdetail/${tr.id}`}
                      className="team-detail-link"
                    >
                      <span>{tr.Button}</span>
                      <FaArrowRight className="team-link-icon" />
                    </Link>
                  </div>

                  <div className="team-card-border"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
