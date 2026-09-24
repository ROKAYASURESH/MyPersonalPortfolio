import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortfolioData } from '../All file Data/Data';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

export default function Portfoliodetails() {
  useEffect(() => {
    document.title = `Project Details | Suresh Rokaya`;
    window.scrollTo(0, 0);
  }, []);

  let { Pheading } = useParams();
  const portfolio = PortfolioData.find(element => element.Pheading === Pheading);

  if (!portfolio) {
    return (
      <div className="detail-page-error">
        <div className="container">
          <h2>Project not found</h2>
          <Link to="/portfolio" className="btn btn-primary">Back to Portfolio</Link>
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
          <Link to="/portfolio" className="detail-back-button">
            <FaArrowLeft style={{ marginRight: '8px' }} />
            Back to Portfolio
          </Link>
          
          <div className="detail-hero-content">
            <h1 className="detail-hero-title">
              {portfolio.Pheading}
            </h1>
            <p className="detail-hero-subtitle">
              {portfolio.PParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image Section */}
      <section className="portfolio-detail-section">
        <div className="container">
          {portfolio.Project && <div className="portfolio-image-wrapper">
            <div className="portfolio-image-glow"></div>
            <img 
              src={portfolio.Project} 
              alt={portfolio.Pheading}
              className="portfolio-detail-image"
            />
            <div className="portfolio-image-overlay"></div>
          </div>}
          
          <div className="project-facts"><div><span className="eyebrow">PROJECT TYPE</span><p>{portfolio.kind}</p></div><div><span className="eyebrow">TECHNOLOGIES / FOCUS</span><p>{portfolio.stack}</p></div><div><span className="eyebrow">PROJECT NOTES</span>{portfolio.role ? <><p><strong>My role:</strong> {portfolio.role}</p><ul>{portfolio.features.map(feature => <li key={feature}>{feature}</li>)}</ul><p><strong>Development focus:</strong> {portfolio.focus}</p></> : <p>This is an earlier frontend project from my archive. The screenshot records the interface; detailed implementation notes and a source repository are not yet listed.</p>}</div></div>
          {portfolio.URL && (
            <div className="portfolio-actions">
              <a 
                href={portfolio.URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-glow"
              >
                {portfolio.linkLabel || 'View Live Project'}
                <FaExternalLinkAlt style={{ marginLeft: '8px' }} />
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
