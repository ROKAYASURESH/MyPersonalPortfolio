import React, { useState, useEffect } from 'react';
import { FaPhone, FaLocationArrow, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { AiOutlineMail, AiFillContacts } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Suresh Rokaya';
  }, []);

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: ''
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${data.fullname}! I have received your message. I will get back to you at ${data.email} soon.`);
    setData({
      fullname: '',
      phone: '',
      email: '',
      msg: ''
    });
  };

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
            <FaEnvelope className="badge-icon" />
            <span>Let's Connect</span>
          </div> */}

          <h1 className="hero-title">
            Get In <span className="text-gradient">Touch</span>
          </h1>

          <p className="hero-subtitle">
            Have a project in mind? Let's work together to make it happen.
            I'm always open to discussing new opportunities and exciting projects.
          </p>

          <div className="hero-features">
            <div className="hero-feature-item">
              <FaEnvelope className="feature-icon" />
              <span>Quick Response</span>
            </div>
            <div className="hero-feature-item">
              <FaMapMarkerAlt className="feature-icon" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="hero-feature-item">
              <FaPhone className="feature-icon" />
              <span>Available 24/7</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-glow">
              Send Message
              <FaArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <Link to="/portfolio" className="btn btn-outline">
              View Portfolio
              <FaArrowRight style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="gradient-blob blob-3"></div>
        <div className="container">
          <div className="section-title">
            <h2>Let's Start a <span className="text-gradient">Conversation</span></h2>
            <p>
              Whether you have a question about my work, want to discuss a project,
              or just want to say hi, I'd love to hear from you.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaLocationArrow />
                  </div>
                  <div className="contact-details">
                    <h4>Visit Me</h4>
                    <p>M8CW+JJM Capital College, Koteshwor</p>
                    <p>Kathmandu 44600, Nepal</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h4>Call Me</h4>
                    <a href="tel:+9779869504717">+977 9869504717</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <AiOutlineMail />
                  </div>
                  <div className="contact-details">
                    <h4>Email Me</h4>
                    <a href="mailto:sureshrokaya761@gmail.com">sureshrokaya761@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-map-container">
                <iframe
                  title="My Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.02983141154!2d85.34188701506161!3d27.685474982801454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199026369065%3A0x70b2ad0441584b42!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1625470000000!5m2!1sen!2snp"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>Feel free to drop a message, and I'll get back to you within 24 hours.</p>
              </div>
              <form onSubmit={formSubmit} className="modern-form">
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group flex-1">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-input"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder="+977 98..."
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-textarea"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-glow submit-btn">
                  <span>Send Message</span>
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
