import React, { useEffect, useRef, useState } from "react";
import {
  AboutStory,
  Skills,
  Experience,
  ContactInvite,
} from "../Common/PortfolioSections";
import SEO from "../Common/SEO";
import { ScrollTrigger, prefersReducedMotion } from "../../animations/gsapSetup";
export default function About() {
  const [active, setActive] = useState("Skills");
  const [selection, setSelection] = useState(0);
  const tabs = useRef(null);

  useEffect(() => {
    if (!selection) return undefined;
    // Wait for the selected panel and its reveal triggers to mount.
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const headerHeight = document.querySelector(".header")?.getBoundingClientRect().height || 0;
      const top = window.scrollY + tabs.current.getBoundingClientRect().top - headerHeight - 16;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: prefersReducedMotion() ? "instant" : "smooth",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [selection]);

  const selectTab = (tab) => {
    setActive(tab);
    setSelection(value => value + 1);
  };
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
        <div ref={tabs} className="about-tabs" aria-label="Background sections">
          {["Skills", "Experience", "Education"].map((tab) => (
            <button
              key={tab}
              aria-pressed={active === tab}
              className={active === tab ? "active" : ""}
              onClick={() => selectTab(tab)}
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
