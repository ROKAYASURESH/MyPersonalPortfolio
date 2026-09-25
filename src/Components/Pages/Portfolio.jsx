import React, { useEffect } from "react";
import { ProjectList, ContactInvite } from "../Common/PortfolioSections";
import SEO from "../Common/SEO";
export default function Portfolio() {
  useEffect(() => {
    document.title = "Projects by Suresh Rokaya | Django, React & Web Applications";
  }, []);
  return (
    <>
      <SEO
        title="Projects by Suresh Rokaya | Django, React & Web Applications"
        description="Selected projects by Suresh Rokaya, full-stack developer — including Django and React web applications, REST APIs, sales reporting systems, and frontend work."
        path="/portfolio"
      />
      <section className="page-intro container">
        <span className="eyebrow">PROJECT ARCHIVE</span>
        <h1>Projects by Suresh Rokaya.</h1>
        <p>
          Web applications and selected frontend work — including Django REST
          APIs, React interfaces, reporting systems, and responsive layouts.
        </p>
      </section>
      <section className="section container">
        <ProjectList />
      </section>
      <ContactInvite />
    </>
  );
}
