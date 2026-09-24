import React from "react";
import ScrollReveal from "../Motion/ScrollReveal";
import { Link } from "react-router-dom";
import { PortfolioData } from "../All file Data/Data";

export function SectionHeading({ number, title, children }) {
  return (
    <ScrollReveal className="section-heading">
      <div>
        <span className="eyebrow">{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </ScrollReveal>
  );
}
export function AboutStory() {
  return (
    <ScrollReveal className="story-layout">
      <div>
        <p className="lead">
          I like understanding how things work — then making them a little
          easier to use.
        </p>
        <p>
          I'm Suresh, a full-stack developer based in Kathmandu, Nepal. I work
          with Django REST Framework and React, connecting the data behind an
          application to the interface people use every day.
        </p>
        <p>
          My work has included sales reporting, authentication, REST APIs, and
          frontend integration. I enjoy the practical parts: untangling a data
          flow, fixing a stubborn bug, and making code easier for the next
          person to follow.
        </p>
        <p>
          My approach is simple: understand the problem, build a clear solution,
          and keep learning from the work.
        </p>
      </div>
      <aside className="working-note">
        <span className="eyebrow">AT MY DESK</span>
        <h3>Backend to browser.</h3>
        <p>Currently working with Django, React, and relational databases.</p>
        <span className="small-label">A principle I come back to</span>
        <p>Readable code is easier to improve.</p>
        <Link to="/about">
          More about me <span aria-hidden="true">↗</span>
        </Link>
      </aside>
    </ScrollReveal>
  );
}
export function Skills() {
  const groups = [
    [
      "Backend",
      "Python, Django, Django REST Framework",
      "REST APIs · authentication · data processing",
    ],
    [
      "Frontend",
      "React, Vue, JavaScript, TypeScript",
      "Reusable components · responsive interfaces",
    ],
    ["Databases", "PostgreSQL, MySQL", "Relational data · application queries"],
    [
      "Tools & workflow",
      "Git, GitHub",
      "Version control · collaboration · code reviews",
    ],
  ];
  return (
    <div className="skills-list">
      {groups.map(([name, stack, use], i) => (
        <ScrollReveal className="skill-row" key={name} stagger={i}>
          <span className="eyebrow">0{i + 1}</span>
          <h3>{name}</h3>
          <div>
            <p>{stack}</p>
            <span className="small-label">{use}</span>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
export function Experience() {
  return (
    <ScrollReveal className="experience-row">
      <div>
        <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
        <p className="small-label">1+ year of experience</p>
      </div>
      <div>
        <h3>Full-Stack Developer</h3>
        <p className="company">Upveda Technology Pvt. Ltd</p>
        <ul>
          <li>
            Developed a Direct Sales Report system for managing sales data and
            reporting.
          </li>
          <li>
            Built Django REST APIs for authentication, reporting, and data
            processing.
          </li>
          <li>
            Created React interfaces with reusable components and integrated
            them with backend services.
          </li>
          <li>
            Worked on API performance, code reviews, and version control with
            Git.
          </li>
        </ul>
        <p className="project-stack">Django REST Framework / React / Git</p>
      </div>
    </ScrollReveal>
  );
}
export function ProjectList({ compact = false }) {
  const projects = compact
    ? PortfolioData.filter((p) =>
        ["Direct Sales Report", "Portfolio"].includes(p.Pheading),
      )
    : PortfolioData;
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ScrollReveal
          as="article"
          className="project-entry"
          key={project.id}
          stagger={index % 2}
        >
          {project.Project ? (
            <Link
              className="project-preview"
              to={`/portfoliodetails/${encodeURIComponent(project.Pheading)}`}
              aria-label={`View ${project.Pheading} project`}
            >
              <img
                src={project.Project}
                alt={`${project.Pheading} website screenshot`}
                loading="lazy"
              />
            </Link>
          ) : (
            <div className="project-work-note">
              <span className="eyebrow">FROM MY WORK AT UPVEDA</span>
              <h3>
                Sales data.
                <br />
                Clearer reports.
              </h3>
              <p>Authentication, reporting APIs, and a React interface.</p>
              <span className="project-stack">BACKEND ↔ FRONTEND</span>
            </div>
          )}
          <div className="project-copy">
            <span className="eyebrow">
              0{index + 1} / {project.kind}
            </span>
            <h3>
              <Link
                to={`/portfoliodetails/${encodeURIComponent(project.Pheading)}`}
              >
                {project.Pheading} <span aria-hidden="true">↗</span>
              </Link>
            </h3>
            <p>{project.PParagraph}</p>
            <p className="project-stack">{project.stack}</p>
            <Link
              className="text-link"
              to={`/portfoliodetails/${encodeURIComponent(project.Pheading)}`}
            >
              Project notes <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
export function ContactInvite() {
  return (
    <ScrollReveal
      as="section"
      id="contact"
      className="contact-invite container"
    >
      <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
      <div>
        <h2>Let's talk about it.</h2>
        <Link className="btn btn-primary" to="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <p>
        A project, a question, or a conversation about code. My inbox is open.
      </p>
    </ScrollReveal>
  );
}
