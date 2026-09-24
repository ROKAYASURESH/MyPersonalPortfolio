import ScrollReveal from "../Motion/ScrollReveal";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServiceData } from "../All file Data/Data";
import { FaArrowRight, FaRocket, FaCode, FaPalette } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";

export default function Servic() {
  useEffect(() => {
    document.title = `Service-Page`;
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
            <FaRocket className="badge-icon" />
            <span>What We Offer</span>
          </div> */}

          <h1 className="hero-title">
            My <span className="text-gradient">Services</span>
          </h1>

          <p className="hero-subtitle">
            I help build and maintain websites, from responsive interfaces to
            the backend services that support them.
          </p>

          <div className="hero-features">
            <div className="hero-feature-item">
              <FaCode className="feature-icon" />
              <span>Web Development</span>
            </div>
            <div className="hero-feature-item">
              <FaPalette className="feature-icon" />
              <span>UI/UX Design</span>
            </div>
            <div className="hero-feature-item">
              <FaRocket className="feature-icon" />
              <span>Practical solutions</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-glow">
              <AiFillContacts style={{ marginRight: "8px" }} />
              Get Started
            </Link>
            <a href="#services" className="btn btn-outline">
              Explore Services
              <FaArrowRight style={{ marginLeft: "8px" }} />
            </a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>

      <section className="services-section-modern" id="services">
        <div className="gradient-blob blob-3"></div>

        <div className="container">
          <div className="section-header-modern">
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title-modern">
              What I <span className="text-gradient">Provide</span>
            </h2>
            <p className="section-description">
              As a web developer, I have a strong understanding of web
              technologies and the ability to create and maintain websites and
              web applications. I have a good grasp of programming languages
              such as HTML, CSS, and JavaScript, as well as experience with
              frameworks and libraries like AngularJS, React, and Vue.js.
            </p>
          </div>

          <div className="services-grid-modern">
            {ServiceData.map((sr, index) => (
              <ScrollReveal
                key={sr.id}
                className="service-card-modern"
                stagger={index % 3}
              >
                <div className="service-card-inner">
                  <div className="service-image-wrapper">
                    <div className="service-image-glow"></div>
                    <img
                      src={sr.serv}
                      alt={sr.heading}
                      className="service-image"
                    />
                    <div className="service-overlay"></div>
                  </div>

                  <div className="service-content">
                    <div className="service-icon-wrapper">
                      <div className="service-icon-bg"></div>
                      {sr.icon}
                    </div>

                    <h3 className="service-title">{sr.heading}</h3>
                    <p className="service-description">{sr.paragraph}</p>

                    <Link
                      to={`/servicedetail/${sr.heading}`}
                      className="service-link"
                    >
                      <span>{sr.Button}</span>
                      <FaArrowRight className="service-link-icon" />
                    </Link>
                  </div>

                  <div className="service-card-border"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
