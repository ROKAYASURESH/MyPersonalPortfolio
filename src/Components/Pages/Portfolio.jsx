import React, { useEffect } from "react";
import { ProjectList, ContactInvite } from "../Common/PortfolioSections";
export default function Portfolio() {
  useEffect(() => {
    document.title = "Projects | Suresh Rokaya";
  }, []);
  return (
    <>
      <section className="page-intro container">
        <span className="eyebrow">PROJECT ARCHIVE</span>
        <h1>Practice, projects, and progress.</h1>
        <p>
          Work on web applications, alongside earlier experiments with layout,
          responsive design, and frontend development.
        </p>
      </section>
      <section className="section container">
        <ProjectList />
      </section>
      <ContactInvite />
    </>
  );
}
