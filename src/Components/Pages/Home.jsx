import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import resume from "../images/My Personal CV (1).pdf";
import photo from "../images/IMG_3682.jpg";
import {
  SectionHeading,
  AboutStory,
  Skills,
  Experience,
  ProjectList,
  ContactInvite,
} from "../Common/PortfolioSections";
export default function Home() {
  useEffect(() => {
    document.title = "Suresh Rokaya | Full-Stack Developer";
  }, []);
  return (
    <>
      <section id="home" className="personal-hero container">
        <div className="intro">
          <p className="eyebrow location-label">
            <span aria-hidden="true" />
            KATHMANDU, NEPAL
          </p>
          <h1>
            Hi, I'm Suresh Rokaya<span className="accent">.</span>
          </h1>
          <p className="hero-role">
            A developer who enjoys
            <br />
            making useful things for the web.
          </p>
          <p className="hero-description">
            I build practical web applications with Django, React, and Vue. From
            the API to the small details on screen, I like making things work
            well together.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/portfolio">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <a
              className="text-link"
              href={resume}
              download="Suresh_Rokaya_CV.pdf"
            >
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span className="small-label">Mostly working with</span>
            <span>Django &nbsp; / &nbsp; React &nbsp; / &nbsp; PostgreSQL</span>
          </div>
        </div>
        <figure className="portrait">
          <img src={photo} alt="Suresh Rokaya" fetchpriority="high" />
          <figcaption>
            <span>Suresh, away from the keyboard.</span>
            <span aria-hidden="true">↳</span>
          </figcaption>
        </figure>
      </section>
      <section className="section container" id="about">
        <SectionHeading
          number="01 / A LITTLE CONTEXT"
          title="The person behind the code"
        />
        <AboutStory />
      </section>
      <section className="section container" id="projects">
        <SectionHeading number="02 / SELECTED WORK" title="Things I've built">
          <Link className="text-link" to="/portfolio">
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </SectionHeading>
        <ProjectList compact />
      </section>
      <section className="section container" id="skills">
        <SectionHeading number="03 / MY TOOLKIT" title="What I work with">
          <p>
            Tools I use to turn an idea
            <br />
            into a working application.
          </p>
        </SectionHeading>
        <Skills />
      </section>
      <section className="section container" id="experience">
        <SectionHeading
          number="04 / ALONG THE WAY"
          title="Learning through the work"
        />
        <Experience />
      </section>
      <ContactInvite />
    </>
  );
}
