import React, { useEffect, useState } from "react";
import {
  AboutStory,
  Skills,
  Experience,
  ContactInvite,
} from "../Common/PortfolioSections";
export default function About() {
  const [active, setActive] = useState("Skills");
  useEffect(() => {
    document.title = "About | Suresh Rokaya";
  }, []);
  return (
    <>
      <section className="page-intro container">
        <span className="eyebrow">A LITTLE ABOUT ME</span>
        <h1>More than a list of technologies.</h1>
        <p>
          My background, the way I work, and what I've learned along the way.
        </p>
      </section>
      <section className="container section">
        <AboutStory />
        <div className="about-tabs" aria-label="Background sections">
          {["Skills", "Experience", "Education"].map((tab) => (
            <button
              key={tab}
              aria-pressed={active === tab}
              className={active === tab ? "active" : ""}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="background-panel" key={active}>
          {active === "Skills" && <Skills />}
          {active === "Experience" && <Experience />}
          {active === "Education" && (
            <div className="education-list">
              <article>
                <span className="eyebrow">2021–2024</span>
                <h3>University of Sunderland</h3>
                <p>BSc (Hons) Computer System Engineering</p>
              </article>
              <article>
                <span className="eyebrow">COMPLETED 2020</span>
                <h3>Little Buddha Academy</h3>
                <p>Higher secondary education (+2)</p>
              </article>
              <article>
                <span className="eyebrow">COMPLETED 2017</span>
                <h3>Sunlight Public School</h3>
                <p>Krishnapur 02, Bani, Kanchanpur</p>
              </article>
            </div>
          )}
        </div>
      </section>
      <ContactInvite />
    </>
  );
}
