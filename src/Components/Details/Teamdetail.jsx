import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamdata } from '../All file Data/Data';
import { FaArrowLeft, FaFacebook, FaWhatsappSquare, FaLinkedin } from 'react-icons/fa';

export default function Teamdetail() {
  const [activeTab, setActiveTab] = useState('skill');
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Intersection Observer for skills animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.querySelector('.team-skills-container');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  let { id } = useParams();
  const teamMember = teamdata.find(element => element.id == id);

  if (!teamMember) {
    return (
      <div className="detail-page-error">
        <div className="container">
          <h2>Team member not found</h2>
          <Link to="/teams" className="btn btn-primary">Back to Teams</Link>
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
          {/* <Link to="/teams" className="detail-back-button">
            <FaArrowLeft style={{ marginRight: '8px' }} />
            Back to Teams
          </Link> */}
          
          <div className="detail-hero-content pt-5">
            <div className="team-hero-image-wrapper pt-5">
              <div className="team-hero-image-glow"></div>
              <img src={teamMember.icon} alt={teamMember.heading} />
            </div>
            <h1 className="detail-hero-title">
              {teamMember.heading}
            </h1>
            <p className="detail-hero-subtitle team-role-subtitle">
              {teamMember.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* Team Detail Section */}
      <section className="team-detail-section">
        <div className="container">
          <div className="team-detail-grid">
            {/* Team Image */}
            <div className="team-detail-image-wrapper">
              <div className="team-detail-image-glow"></div>
              <img src={teamMember.icon} alt={teamMember.heading} />
              <div className="team-status-badge-large">
                <span className="status-dot"></span>
                Available
              </div>
            </div>

            {/* Team Info */}
            <div className="team-detail-info">
              <div className="team-about-card">
                <h2>About</h2>
                <p>{teamMember.About}</p>
              </div>

              {/* Social Links */}
              {(teamMember.message || teamMember.Whatsapp || teamMember.Linkedin) && (
                <div className="team-social-links-large">
                  {teamMember.message && (
                    <a 
                      href={teamMember.message} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="team-social-link-large"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </a>
                  )}
                  {teamMember.Whatsapp && (
                    <a 
                      href={teamMember.Whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="team-social-link-large"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsappSquare />
                    </a>
                  )}
                  {teamMember.Linkedin && (
                    <a 
                      href={teamMember.Linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="team-social-link-large"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Tabs Section */}
          <div className="team-tabs-container">
            <div className="team-tabs-nav">
              <button
                className={`team-tab-button ${activeTab === 'skill' ? 'active' : ''}`}
                onClick={() => setActiveTab('skill')}
              >
                {teamMember.MainSkill}
              </button>
              <button
                className={`team-tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                {teamMember.Experience}
              </button>
              <button
                className={`team-tab-button ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                {teamMember.Education}
              </button>
            </div>

            <div className="team-tab-content">
              {activeTab === 'skill' && (
                <div className="team-skills-container">
                  <div className="team-skill-item">
                    <div className="team-skill-header">
                      <span className="team-skill-name">{teamMember.HTMLtitle}</span>
                      <span className="team-skill-percentage">{teamMember.HTMLpercentages}</span>
                    </div>
                    <div className="team-skill-progress">
                      <div 
                        className="team-skill-progress-bar"
                        style={{ 
                          width: skillsVisible ? teamMember.HTMLwidth : '0%',
                          transitionDelay: '0.1s'
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="team-skill-item">
                    <div className="team-skill-header">
                      <span className="team-skill-name">{teamMember.CSStitle}</span>
                      <span className="team-skill-percentage">{teamMember.CSSPercentages}</span>
                    </div>
                    <div className="team-skill-progress">
                      <div 
                        className="team-skill-progress-bar"
                        style={{ 
                          width: skillsVisible ? teamMember.CSSwidth : '0%',
                          transitionDelay: '0.2s'
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="team-skill-item">
                    <div className="team-skill-header">
                      <span className="team-skill-name">{teamMember.Fluttortitle}</span>
                      <span className="team-skill-percentage">{teamMember.FluttorPercentages}</span>
                    </div>
                    <div className="team-skill-progress">
                      <div 
                        className="team-skill-progress-bar"
                        style={{ 
                          width: skillsVisible ? teamMember.Fluttorwidth : '0%',
                          transitionDelay: '0.3s'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="team-tab-panel">
                  <div className="team-experience-card">
                    <p>{teamMember.WorkExp}</p>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="team-tab-panel">
                  <div className="team-education-list">
                    <div className="team-education-item">
                      <h4>School Level</h4>
                      <p>{teamMember.SEE}</p>
                    </div>
                    <div className="team-education-item">
                      <h4>Higher Secondary</h4>
                      <p>{teamMember.Higher}</p>
                    </div>
                    <div className="team-education-item">
                      <h4>Bachelor's Degree</h4>
                      <p>{teamMember.Bachelor}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
