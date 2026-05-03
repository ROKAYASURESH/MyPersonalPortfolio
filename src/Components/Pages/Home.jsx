import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import logo from '../images/My Personal CV (1).pdf';
import img from '../images/suresh.png';
import myphoto from '../images/IMG_3682.jpg';
import abs from '../images/myphotoss.jpeg';
import avs from '../images/myphotoss (2).jpeg';

export default function Home() {
  useEffect(() => {
    document.title = 'Suresh Rokaya | Developer Portfolio';
  }, []);

  // Component ready

  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'Software Developer', 'Django Developer', 'React.js Specialist'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

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

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skills = [
    { name: 'Django & DRF', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'REST API Development', percentage: 88 },
    { name: 'PostgreSQL & MySQL', percentage: 82 },
    { name: 'JavaScript & TypeScript', percentage: 85 },
    { name: 'Git & GitHub', percentage: 90 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-gradient"></div>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>

        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I`m</p>
          <h1 className="hero-title">
            <span className="gradient-text">Suresh Rokaya</span>
          </h1>
          <p className="hero-subtitle">
            I'm a <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{text}</span>
            <Cursor cursorColor="var(--accent-secondary)" />
            <br />
            Building scalable web applications with Django & React.js
          </p>
          <div className="hero-buttons">
            <a href={logo} download="Suresh_Rokaya_CV.pdf" className="btn btn-primary btn-glow">
              <FaDownload style={{ marginRight: '8px' }} />
              Download Resume
            </a>
            <Link to="/contact" className="btn btn-outline">
              <AiFillContacts style={{ marginRight: '8px' }} />
              Hire Me
            </Link>
          </div>
          {/* <div className="hero-image">
            <img src={myphoto} alt="Suresh Rokaya" />
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="gradient-blob blob-3"></div>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div style={{ marginBottom: '1.5rem' }}>
                {/* <span style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.25rem',
                  background: 'rgba(91, 143, 168, 0.2)',
                  border: '1px solid rgba(91, 143, 168, 0.4)',
                  borderRadius: '50px',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  marginBottom: '1.5rem'
                }}>
                  FULL-STACK DEVELOPER
                </span> */}
              </div>
              <h2 style={{ marginBottom: '1.5rem' }}>
                Who Am <span className="text-gradient">I?</span>
              </h2>
              <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                I'm a <strong style={{ color: 'var(--accent-primary)' }}>passionate Full-Stack Developer</strong> with
                <strong style={{ color: 'var(--accent-secondary)' }}> 1+ year of hands-on experience</strong> in
                building scalable back-end services using Django REST Framework and interactive
                front-end applications with React.js.
              </p>
              <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                I specialize in <strong>designing RESTful APIs</strong>, integrating third-party services,
                and creating <strong>responsive interfaces</strong> that deliver exceptional user experiences.
                Known for writing <strong style={{ color: 'var(--accent-primary)' }}>clean, maintainable code</strong> and
                delivering <strong>complete product solutions</strong> from concept to deployment.
              </p>
              <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.9', marginBottom: '2rem' }}>
                I thrive on <strong>solving complex problems</strong> and transforming ideas into
                <strong style={{ color: 'var(--accent-secondary)' }}> powerful digital experiences</strong> that make a real impact.
              </p>

              {/* Quick Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                marginBottom: '2rem',
                padding: '1.5rem',
                background: 'var(--accent-soft)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                border: '1px solid var(--glass-border)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>
                    1+
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    Years Experience
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>
                    10+
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    Projects Completed
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>
                    100%
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary btn-glow" style={{ marginTop: '1rem' }}>
                Get In Touch
              </Link>
            </div>
            <div className="about-image">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '1rem',
                position: 'relative'
              }}>
                <div style={{
                  gridColumn: '1 / span 8',
                  gridRow: '1',
                  position: 'relative',
                  zIndex: 2,
                }}>
                  {/* <img 
                    src={abs} 
                    alt="Suresh Rokaya - Full Stack Developer" 
                    style={{
                      width: '100%',
                      borderRadius: '20px',
                      border: '2px solid rgba(91, 143, 168, 0.3)',
                      boxShadow: '0 20px 60px rgba(91, 143, 168, 0.3)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  /> */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.75rem 1.25rem',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid var(--glass-border)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 600,
                    color: 'var(--accent-secondary)'
                  }}>
                    Full Stack Developer
                  </div>
                </div>
                <div style={{
                  gridColumn: '4 / span 8',
                  gridRow: '1',
                  position: 'relative',
                  zIndex: 1,
                  marginTop: '2rem',
                }}>
                  <img
                    src={abs}
                    alt="Suresh Rokaya - Software Developer"
                    style={{
                      width: '100%',
                      borderRadius: '20px',
                      border: '2px solid rgba(201, 125, 96, 0.3)',
                      boxShadow: '0 20px 60px rgba(201, 125, 96, 0.3)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '-0.2rem',
                    right: '-1rem',
                    padding: '0.75rem 1.25rem',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid var(--glass-border)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 600,
                    color: 'var(--accent-primary)'
                  }}>
                    API • REACT • DJANGO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-title">
            <h2>My <span className="text-gradient">Skills</span></h2>
            <p>Core technologies and frameworks I use to build robust, scalable applications</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{
                      width: skillsVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get In <span className="text-gradient">Touch</span></h2>
            <p>Have a project in mind? Let's work together to make it happen.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>Koteshwor, 32</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+9779869504717">+977 9869504717</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:sureshrokaya761@gmail.com">sureshrokaya761@gmail.com</a>
                  <a href="https://github.com/ROKAYASURESH" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3 style={{ marginBottom: '1.5rem', fontSize: 'var(--font-size-2xl)' }}>Send a Message</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                If you have any work for me or any types of queries, you can send me a message from here.
                It's my pleasure to help you.
              </p>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
              }}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-input" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input type="email" className="form-input" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-glow" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
