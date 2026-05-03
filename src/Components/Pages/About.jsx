import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { tabcontent } from '../All file Data/Data';
import about from '../images/image.jpeg';
import { FaUser, FaCode, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';

export default function About() {
  useEffect(() => {
    document.title = 'About | Suresh Rokaya';
  }, []);

  const [activeTab, setActiveTab] = useState('skill');
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
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

    const skillsSection = document.querySelector('.skills-container');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
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
            <FaUser className="badge-icon" />
            <span>About Me</span>
          </div> */}
          
          <h1 className="hero-title">
            About <span className="text-gradient">Me</span>
          </h1>
          
          <p className="hero-subtitle">
            Get to know more about my journey, skills, and experience.
            A passionate Full-Stack Developer dedicated to creating exceptional digital solutions.
          </p>
          
          <div className="hero-features">
            <div className="hero-feature-item">
              <FaCode className="feature-icon" />
              <span>Full-Stack</span>
            </div>
            <div className="hero-feature-item">
              <FaUser className="feature-icon" />
              <span>1+ Year Experience</span>
            </div>
            <div className="hero-feature-item">
              <FaGraduationCap className="feature-icon" />
              <span>BSc Computer Science</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary btn-glow">
              View About Me  ddsdsds
              <FaArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <Link to="/contact" className="btn btn-outline">
              <AiFillContacts style={{ marginRight: '8px' }} />
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="gradient-blob blob-3"></div>
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div style={{ position: 'relative' }}>
                <img 
                  src={about} 
                  alt="About Suresh Rokaya - Full Stack Developer" 
                  style={{
                    width: '100%',
                    borderRadius: '20px',
                    border: '2px solid rgba(91, 143, 168, 0.3)',
                    boxShadow: '0 20px 60px rgba(91, 143, 168, 0.2)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Overlay Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-2rem',
                  left: '1rem',
                  padding: '1rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '15px',
                  border: '1px solid rgba(91, 143, 168, 0.4)',
                  boxShadow: '0 10px 30px rgba(91, 143, 168, 0.3)',
                }}>
                  <div style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    marginBottom: '0.25rem',
                    letterSpacing: '0.1em'
                  }}>
                    FULL-STACK DEVELOPER
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--text-primary)',
                    fontWeight: 700
                  }}>
                    Suresh Rokaya
                  </div>
                </div>
              </div>
            </div>
            <div className="about-text">
              {/* <div style={{ marginBottom: '1.5rem' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.25rem',
                  background: 'rgba(201, 125, 96, 0.2)',
                  border: '1px solid rgba(201, 125, 96, 0.4)',
                  borderRadius: '50px',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  marginBottom: '1.5rem'
                }}>
                  PROFESSIONAL PROFILE
                </span>
              </div> */}
              <h2 style={{ marginBottom: '1.5rem' }}>
                About My fdff <span className="text-gradient">Details</span>
              </h2>
              <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                I'm a <strong style={{ color: 'var(--accent-cyan)' }}>passionate Full-Stack Developer</strong> with 
                <strong style={{ color: 'var(--primary-purple)' }}> 1+ year of hands-on experience</strong> in 
                building scalable back-end services using Django REST Framework and interactive 
                front-end applications with React.js.
              </p>
              <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                Skilled in <strong>designing RESTful APIs</strong>, integrating third-party services, 
                and creating <strong>responsive interfaces</strong> that deliver exceptional user experiences. 
                Known for writing <strong style={{ color: 'var(--accent-cyan)' }}>clean, maintainable code</strong> and 
                delivering <strong>complete product solutions</strong> from concept to deployment.
              </p>
              <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.9', marginBottom: '2rem' }}>
                I thrive in <strong>collaborative team environments</strong> and am committed to 
                <strong style={{ color: 'var(--primary-purple)' }}> continuous learning</strong> and professional growth. 
                Every project is an opportunity to push boundaries and create something extraordinary.
              </p>

              {/* Key Highlights */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(91, 143, 168, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(91, 143, 168, 0.2)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, var(--primary-purple), var(--accent-cyan))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--font-size-xl)',
                    flexShrink: 0
                  }}>
                    🚀
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Scalable Solutions
                    </div>
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                      Building robust systems that grow with your business
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(201, 125, 96, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(201, 125, 96, 0.2)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--primary-purple))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--font-size-xl)',
                    flexShrink: 0
                  }}>
                    💻
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Clean Code
                    </div>
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                      Writing maintainable, efficient, and well-documented code
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(91, 143, 168, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(91, 143, 168, 0.2)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, var(--primary-purple), var(--accent-cyan))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--font-size-xl)',
                    flexShrink: 0
                  }}>
                    🎯
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      End-to-End Delivery
                    </div>
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                      From concept to deployment, delivering complete solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div style={{ marginTop: '4rem', maxWidth: '1000px', margin: '4rem auto 0' }}>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              <button
                className={`btn ${activeTab === 'skill' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveTab('skill')}
              >
                Main Skills
              </button>
              <button
                className={`btn ${activeTab === 'experience' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button
                className={`btn ${activeTab === 'education' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>

            <div className="skills-container">
              {activeTab === 'skill' && (
                <div className="skills-grid">
                  {tabcontent.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <span className="skill-name">{skill.title}</span>
                        <span className="skill-percentage">{skill.Percentages}</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{ 
                            width: skillsVisible ? skill.width : '0%',
                            transitionDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="glass-card" style={{ padding: '2.5rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', fontSize: 'var(--font-size-2xl)' }}>
                    Professional Experience
                  </h3>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <div style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--accent-cyan)',
                        fontSize: '1.5rem',
                        top: '0.2rem'
                      }}>▸</span>
                      <h4 style={{ 
                        color: 'var(--text-primary)', 
                        fontSize: 'var(--font-size-xl)',
                        marginBottom: '0.5rem',
                        fontWeight: 700
                      }}>
                        Full-Stack Developer
                      </h4>
                      <p style={{ 
                        color: 'var(--accent-cyan)', 
                        fontSize: 'var(--font-size-base)',
                        marginBottom: '1rem',
                        fontWeight: 600
                      }}>
                        Upveda Technology Pvt. Ltd • 1+ Year Experience
                      </p>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0,
                        color: 'var(--text-secondary)',
                        fontSize: 'var(--font-size-base)',
                        lineHeight: '1.8'
                      }}>
                        <li style={{ marginBottom: '0.75rem', paddingLeft: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--primary-purple)' }}>•</span>
                          Developed Direct Sales Report (DSR) system for managing sales data, reports, and analytics
                        </li>
                        <li style={{ marginBottom: '0.75rem', paddingLeft: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--primary-purple)' }}>•</span>
                          Built REST APIs using Django REST Framework for authentication, reporting, and data processing
                        </li>
                        <li style={{ marginBottom: '0.75rem', paddingLeft: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--primary-purple)' }}>•</span>
                          Created dynamic user interfaces using React.js with reusable components
                        </li>
                        <li style={{ marginBottom: '0.75rem', paddingLeft: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--primary-purple)' }}>•</span>
                          Maintained code quality, optimized API performance, and implemented secure user authentication
                        </li>
                        <li style={{ marginBottom: '0.75rem', paddingLeft: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--primary-purple)' }}>•</span>
                          Collaborated in team environment using Git for version control and code reviews
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <NavLink to="/portfolio" className="btn btn-primary">
                      View Projects
                    </NavLink>
                    <NavLink to="/contact" className="btn btn-outline">
                      Get In Touch
                    </NavLink>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="glass-card" style={{ padding: '2.5rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', fontSize: 'var(--font-size-2xl)' }}>
                    Educational Background
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                      <h4 style={{ 
                        color: 'var(--accent-cyan)', 
                        marginBottom: '0.5rem',
                        fontSize: 'var(--font-size-xl)'
                      }}>
                        School Level
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                        Sunlight Public School Krishnapur 02 Bani Kanchanpur
                      </p>
                      <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)', margin: '0.5rem 0 0 0' }}>
                        Completed: 2017
                      </p>
                    </div>
                    <div>
                      <h4 style={{ 
                        color: 'var(--accent-cyan)', 
                        marginBottom: '0.5rem',
                        fontSize: 'var(--font-size-xl)'
                      }}>
                        +2 Level
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                        Little Buddha Academy
                      </p>
                      <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)', margin: '0.5rem 0 0 0' }}>
                        Completed: 2020
                      </p>
                    </div>
                    <div>
                      <h4 style={{ 
                        color: 'var(--accent-cyan)', 
                        marginBottom: '0.5rem',
                        fontSize: 'var(--font-size-xl)'
                      }}>
                        Bachelor's Degree
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>
                        University of Sunderland
                      </p>
                      <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0' }}>
                        Bsc (Hons) Computer System Engineering
                      </p>
                      <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)', margin: '0.5rem 0 0 0' }}>
                        2021 - 2024
                      </p>
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
