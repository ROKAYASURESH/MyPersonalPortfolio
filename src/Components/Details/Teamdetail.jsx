import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { teamdata } from "../All file Data/Data";
import { FaFacebook, FaWhatsappSquare, FaLinkedin } from "react-icons/fa";

export default function Teamdetail() {
  const [activeTab, setActiveTab] = useState("skill");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();
  const teamMember = teamdata.find((element) => String(element.id) === id);

  if (!teamMember) {
    return (
      <div className="detail-page-error">
        <div className="container">
          <h2>Team member not found</h2>
          <Link to="/teams" className="btn btn-primary">
            Back to Teams
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="detail-hero-section">
        <div className="container">
          <div className="detail-hero-content">
            <h1 className="detail-hero-title">{teamMember.heading}</h1>
            <p className="detail-hero-subtitle">{teamMember.paragraph}</p>
          </div>
        </div>
      </section>

      <section className="team-detail-section">
        <div className="container">
          <div className="team-detail-grid">
            <div className="team-detail-image-wrapper">
              <img src={teamMember.icon} alt={teamMember.heading} />
            </div>

            <div>
              <div>
                <h2>About</h2>
                <p>{teamMember.About}</p>
              </div>

              {(teamMember.message ||
                teamMember.Whatsapp ||
                teamMember.Linkedin) && (
                <div className="team-social-links-large">
                  {teamMember.message && (
                    <a
                      href={teamMember.message}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="team-tabs-nav">
              <button
                className={`team-tab-button ${activeTab === "skill" ? "active" : ""}`}
                onClick={() => setActiveTab("skill")}
              >
                {teamMember.MainSkill}
              </button>
              <button
                className={`team-tab-button ${activeTab === "experience" ? "active" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                {teamMember.Experience}
              </button>
              <button
                className={`team-tab-button ${activeTab === "education" ? "active" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                {teamMember.Education}
              </button>
            </div>

            <div className="team-tab-content" key={activeTab}>
              {activeTab === "skill" && (
                <div>
                  <div className="team-skill-item">
                    <div>
                      <span>{teamMember.HTMLtitle}</span>
                    </div>
                  </div>

                  <div className="team-skill-item">
                    <div>
                      <span>{teamMember.CSStitle}</span>
                    </div>
                  </div>

                  <div className="team-skill-item">
                    <div>
                      <span>{teamMember.Fluttortitle}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <div>
                    <p>{teamMember.WorkExp}</p>
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div>
                  <div>
                    <div>
                      <h4>School Level</h4>
                      <p>{teamMember.SEE}</p>
                    </div>
                    <div>
                      <h4>Higher Secondary</h4>
                      <p>{teamMember.Higher}</p>
                    </div>
                    <div>
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
