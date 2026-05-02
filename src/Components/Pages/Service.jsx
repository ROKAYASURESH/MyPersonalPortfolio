import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ServiceData } from '../All file Data/Data';
import { FaArrowRight, FaRocket, FaCode, FaPalette } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';

export default function Servic() {
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    document.title = `Service-Page`;
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card-modern');
    cards.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => observer.unobserve(card));
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
            <FaRocket className="badge-icon" />
            <span>What We Offer</span>
          </div> */}
          
          <h1 className="hero-title">
            Our <span className="text-gradient">Services</span>
          </h1>
          
          <p className="hero-subtitle">
            Transforming ideas into powerful digital experiences with cutting-edge solutions.
            We deliver excellence in every project, combining innovation with proven expertise.
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
              <span>Fast Delivery</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-glow">
              <AiFillContacts style={{ marginRight: '8px' }} />
              Get Started
            </Link>
            <a href="#services" className="btn btn-outline">
              Explore Services
              <FaArrowRight style={{ marginLeft: '8px' }} />
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
              What We <span className="text-gradient">Provide</span>
            </h2>
            <p className="section-description">
              As a web developer, I have a strong understanding of web technologies and the ability to create 
              and maintain websites and web applications. I have a good grasp of programming languages such as 
              HTML, CSS, and JavaScript, as well as experience with frameworks and libraries like AngularJS, React, and Vue.js.
            </p>
          </div>

          <div className="services-grid-modern">
            {ServiceData.map((sr, index) => (
              <div
                key={sr.id}
                className={`service-card-modern ${visibleCards[index] ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-card-inner">
                  <div className="service-image-wrapper">
                    <div className="service-image-glow"></div>
                    <img src={sr.serv} alt={sr.heading} className="service-image" />
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
