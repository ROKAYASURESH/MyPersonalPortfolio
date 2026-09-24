import ScrollReveal from "../Motion/ScrollReveal";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ServiceData, PortfolioData } from "../All file Data/Data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Servicedetails = () => {
  useEffect(() => {
    document.title = "Service Details | Suresh Rokaya";
    window.scrollTo(0, 0);
  }, []);

  let { heading } = useParams();
  const service = ServiceData.find((element) => element.heading === heading);

  if (!service) {
    return (
      <div className="detail-page-error">
        <div className="container">
          <h2>Service not found</h2>
          <Link to="/service" className="btn btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="detail-hero-section">
        <div className="container">
          <Link to="/service" className="detail-back-button">
            <FaArrowLeft style={{ marginRight: "8px" }} />
            Back to Services
          </Link>

          <div className="detail-hero-content">
            <div>
              <div></div>
              {service.icon}
            </div>
            <h1 className="detail-hero-title">{service.heading}</h1>
            <p className="detail-hero-subtitle">{service.paragraph}</p>
          </div>
        </div>
      </section>

      <section className="service-detail-section">
        <div className="container">
          <div>
            <div>
              <h2>{service.heading}</h2>
              <div>
                <p>{service.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-projects-section">
        <div className="container">
          <div className="section-header-modern">
            <span className="section-badge">Related Work</span>
            <h2>
              Related <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-description">
              Explore some of our projects that showcase this service
            </p>
          </div>

          <div className="related-projects-grid">
            {PortfolioData.map((project, index) => (
              <ScrollReveal key={project.id} stagger={index % 3}>
                <Link to={`/portfoliodetails/${project.Pheading}`}>
                  <div>
                    <div className="related-project-image-wrapper">
                      {project.Project && (
                        <img src={project.Project} alt={project.Pheading} />
                      )}
                      <div className="related-project-overlay">
                        <div className="related-project-content">
                          <h3>{project.Pheading}</h3>
                          <p>{project.PParagraph}</p>
                          <span>
                            View Details
                            <FaArrowRight style={{ marginLeft: "8px" }} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
