import React, { useEffect, useState } from "react";
import {
  AboutStory,
  Skills,
  Experience,
  ContactInvite,
} from "../Common/PortfolioSections";
import SEO from "../Common/SEO";
export default function About() {
  const [active, setActive] = useState("Skills");
  useEffect(() => {
    document.title = "About Suresh Rokaya | Software Developer from Nepal";
  }, []);
  return (
    <>
      <SEO
        title="About Suresh Rokaya | Software Developer from Nepal"
        description="About Suresh Rokaya — full-stack software developer in Kathmandu, Nepal, working with Python, Django, Django REST Framework, React, Vue.js, and PostgreSQL."
        path="/about"
      />
      <section className="page-intro container">
        <span className="eyebrow">A LITTLE ABOUT ME</span>
        <h1>About Suresh Rokaya — software developer.</h1>
        <p>
          I&apos;m a full-stack developer based in Kathmandu, Nepal, building
          web applications and REST APIs with Python, Django, React, Vue.js,
          and PostgreSQL. My background, the way I work, and what I&apos;ve
          learned along the way.
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
