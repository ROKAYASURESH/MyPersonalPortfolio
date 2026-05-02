import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioData } from '../All file Data/Data';
import { FaExternalLinkAlt, FaBriefcase, FaLaptopCode, FaRocket, FaArrowRight } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio | Suresh Rokaya';
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
            <FaBriefcase className="badge-icon" />
            <span>My Work</span>
          </div> */}
          
          <h1 className="hero-title">
            My <span className="text-gradient">Portfolio</span>
          </h1>
          
          <p className="hero-subtitle">
            A collection of projects I've worked on, showcasing my skills and creativity.
            Each project represents a unique challenge and solution in web development.
          </p>
          
          <div className="hero-features">
            <div className="hero-feature-item">
              <FaLaptopCode className="feature-icon" />
              <span>Web Projects</span>
            </div>
            <div className="hero-feature-item">
              <FaRocket className="feature-icon" />
              <span>Modern Tech</span>
            </div>
            <div className="hero-feature-item">
              <FaBriefcase className="feature-icon" />
              <span>10+ Projects</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary btn-glow">
              View Projects
              <FaArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <Link to="/contact" className="btn btn-outline">
              <AiFillContacts style={{ marginRight: '8px' }} />
              Hire Me
            </Link>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>

      <section className="projects-section" id="portfolio">
        <div className="gradient-blob blob-3"></div>
        <div className="container">
          <div className="section-title">
            <h2>Recent <span className="text-gradient">Works</span></h2>
            <p>
              I am working on web design projects that focus on creating visually appealing,
              user-friendly and optimized websites using various technologies such as HTML, CSS, 
              and JavaScript. I have done lots of work for various business institutions like 
              ecommerce, portfolio, game, Real Estate, News Portals, Hotels and much more.
            </p>
          </div>
          <div className="projects-grid">
            {PortfolioData.map((project, index) => (
              <div key={index} className="project-card">
                <img 
                  src={project.Project} 
                  alt={project.Pheading}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3 className="project-title">{project.Pheading}</h3>
                  <p className="project-description">{project.PParagraph}</p>
                  <Link 
                    to={`/portfoliodetails/${project.Pheading}`}
                    className="project-link"
                  >
                    View Details <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
