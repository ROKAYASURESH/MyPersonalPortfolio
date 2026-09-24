import React, { useState, useEffect } from "react";
import ScrollReveal from "../Motion/ScrollReveal";
import { FaPhone, FaLocationArrow, FaArrowRight } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Suresh Rokaya";
  }, []);

  const [notice, setNotice] = useState("");
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
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
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.fullname}`,
    );
    const body = encodeURIComponent(
      `${data.msg}\n\nFrom: ${data.fullname}\nEmail: ${data.email}\nPhone: ${data.phone}`,
    );
    window.location.href = `mailto:sureshrokaya761@gmail.com?subject=${subject}&body=${body}`;
    setNotice(
      "Your email app should open with a draft. Send it there to complete your message. If it does not open, email sureshrokaya761@gmail.com directly.",
    );
  };

  return (
    <>
      <section className="page-intro container">
        <span className="eyebrow">CONTACT</span>
        <h1>Get in touch.</h1>
        <p>
          Have a project in mind? Let&apos;s work together to make it happen.
          I&apos;m always open to discussing new opportunities and exciting
          projects.{" "}
          <Link className="text-link" to="/portfolio">
            View my work <span aria-hidden="true">↗</span>
          </Link>
        </p>
      </section>

      <section className="section container" id="contact">
        <ScrollReveal className="contact-content">
          <div>
            <span className="eyebrow">DIRECT</span>
            <div className="contact-item">
              <div className="contact-icon">
                <AiOutlineMail />
              </div>
              <div className="contact-details">
                <span className="small-label">Email — best way to reach me</span>
                <a href="mailto:sureshrokaya761@gmail.com">
                  sureshrokaya761@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <span className="small-label">Phone</span>
                <a href="tel:+9779869504717">+977 9869504717</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaLocationArrow />
              </div>
              <div className="contact-details">
                <span className="small-label">Based in</span>
                <p>Koteshwor, Kathmandu 44600, Nepal</p>
              </div>
            </div>

            <span className="small-label contact-elsewhere-label">
              Elsewhere
            </span>
            <div className="footer-links">
              <a
                href="https://github.com/ROKAYASURESH"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>

            <div className="contact-map-container">
              <iframe
                title="Map of Koteshwor, Kathmandu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.02983141154!2d85.34188701506161!3d27.685474982801454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199026369065%3A0x70b2ad0441584b42!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1625470000000!5m2!1sen!2snp"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="form-header">
              <h2>Send a message</h2>
              <p>
                This form prepares a draft in your email app. You can review
                it before sending.
              </p>
            </div>
            <form onSubmit={formSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullname">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="fullname"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="+977 98..."
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="msg">
                  Your Message
                </label>
                <textarea
                  className="form-textarea"
                  id="msg"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-glow">
                <span>Prepare email</span>
                <FaArrowRight />
              </button>
            </form>
            <p role="status" className="form-notice">
              {notice}
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
