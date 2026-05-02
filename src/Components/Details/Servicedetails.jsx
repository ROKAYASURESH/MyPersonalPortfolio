import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ServiceData, PortfolioData } from '../All file Data/Data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Servicedetails = () => {
  const [visibleProjects, setVisibleProjects] = useState({});

  useEffect(() => {
    document.title = "Service Details | Suresh Rokaya";
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = document.querySelectorAll('.related-project-card');
    projects.forEach((project, index) => {
      project.dataset.index = index;
      observer.observe(project);
    });

    return () => {
      projects.forEach((project) => observer.unobserve(project));
    };
  }, []);

  let { heading } = useParams();
  const service = ServiceData.find(element => element.heading === heading);

  if (!service) {
    return (
      <div className="detail-page-error">
        <div className="container">
          <h2>Service not found</h2>
          <Link to="/service" className="btn btn-primary">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="detail-hero-section">
        <div className="hero-background"></div>
        <div className="hero-gradient"></div>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        
        <div className="container">
          <Link to="/service" className="detail-back-button">
            <FaArrowLeft style={{ marginRight: '8px' }} />
            Back to Services
          </Link>
          
          <div className="detail-hero-content">
            <div className="service-icon-large">
              <div className="service-icon-bg-large"></div>
              {service.icon}
            </div>
            <h1 className="detail-hero-title">
              {service.heading}
            </h1>
            <p className="detail-hero-subtitle">
              {service.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="service-detail-section">
        <div className="container">
          <div className="service-detail-card">
            <div className="service-detail-content">
              <h2 className="service-detail-heading">{service.heading}</h2>
              <div className="service-detail-description">
                <p>{service.paragraph}</p>
                <p>{service.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="related-projects-section">
        <div className="gradient-blob blob-3"></div>
        <div className="container">
          <div className="section-header-modern">
            <span className="section-badge">Related Work</span>
            <h2 className="section-title-modern">
              Related <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-description">
              Explore some of our projects that showcase this service
            </p>
          </div>

          <div className="related-projects-grid">
            {PortfolioData.map((project, index) => (
              <div
                key={project.id}
                className={`related-project-card ${visibleProjects[index] ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/portfoliodetails/${project.Pheading}`}>
                  <div className="related-project-inner">
                    <div className="related-project-image-wrapper">
                      <img src={project.Project} alt={project.Pheading} />
                      <div className="related-project-overlay">
                        <div className="related-project-content">
                          <h3>{project.Pheading}</h3>
                          <p>{project.PParagraph}</p>
                          <span className="related-project-link">
                            View Details
                            <FaArrowRight style={{ marginLeft: '8px' }} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
