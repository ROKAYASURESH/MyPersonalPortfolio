import React, { useRef } from "react";
import ScrollReveal from "../Motion/ScrollReveal";
import { Link } from "react-router-dom";
import {
  gsap,
  useGSAP,
  prefersReducedMotion,
} from "../../animations/gsapSetup";
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
    <div>
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
  const wrap = useRef(null);

  // The timeline rail draws in step with the scroll position. The progress
  // value inherits into .experience-row, whose ::before rail reads it.
  // Without scroll (or with reduced motion) the rail simply shows fully.
  useGSAP(
    () => {
      const wrapper = wrap.current;
      if (!wrapper || prefersReducedMotion()) return undefined;
      const draw = gsap.fromTo(
        wrapper,
        { "--tl-progress": 0 },
        {
          "--tl-progress": 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 78%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        },
      );
      return () => {
        draw.scrollTrigger?.kill();
        draw.kill();
      };
    },
    { scope: wrap },
  );

  return (
    <div ref={wrap}>
      <ScrollReveal className="experience-row">
        <div>
          <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
          <p className="small-label">1+ year of experience</p>
        </div>
        <div>
          <h3>Full-Stack Developer</h3>
          <p className="company">Upveda Technology Pvt. Ltd</p>
          <p>
            Worked on business management and customer-facing web applications
            for Consistent Infosystems, using Django, Django REST Framework,
            React, and Next.js.
          </p>
          <ul>
            <li>
              Developed and maintained the Direct Sales Report (DSR/MIS)
              application for managing sales-related data, reporting, and
              business operations.
            </li>
            <li>
              Developed responsive and reusable React/Next.js interfaces for
              internal users and customer-facing workflows.
            </li>
            <li>
              Implemented frontend-backend integration using REST APIs and
              handled application state and data flow.
            </li>
            <li>
              Worked on features related to sales reporting, customer information, product/business data, and dashboard-based workflows.
            </li>
            <li>
              Debugged existing functionality, fixed application issues, and implemented new features based on business requirements.
            </li>
            <li>
              Collaborated with the development team using Git and version control and followed structured development practices.
            </li>
            <li>
              Worked across both backend and frontend, gaining practical experience in full-stack application development.
            </li>
          </ul>
          <p className="project-stack">Django · Django REST Framework · React · Next.js · JavaScript · REST API · Git</p>
        </div>
      </ScrollReveal>
      <ScrollReveal className="experience-row">
        <div>
          <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
          <p className="small-label">Dec 2025 – Present</p>
        </div>
        <div>
          <h3>Full-Stack Developer</h3>
          <p className="company">Thimi Tech Pvt. Ltd.</p>
          <p>
            Working on web applications using Django, Django REST Framework,
            Vue.js, PostgreSQL, and GIS technologies. Developing REST APIs,
            integrating frontend and backend services, working with geospatial
            data, and maintaining existing production codebases.
          </p>
          <ul>
            <li>
              Developed and maintained backend services using Django & Django
              REST Framework.
            </li>
            <li>Built and integrated Vue.js interfaces with REST APIs.</li>
            <li>
              Worked with PostgreSQL/PostGIS for application and geospatial
              data.
            </li>
            <li>
              Contributed to the Pure Nepal platform and its GIS-based features.
            </li>
            <li>
              Worked on database migration, debugging, feature development, and
              performance improvements.
            </li>
            <li>
              Used Git, Docker, and Linux for development and project workflows.
            </li>
          </ul>
          <p className="project-stack">
            Django · DRF · Vue.js · PostgreSQL · PostGIS · GIS · Docker · Git
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
// Image card with a "VIEW" pill that follows the mouse (like the screenshot).
// - Desktop only: hidden on touch / small screens via CSS.
// - Uses a ref + direct transform for smooth 1:1 follow without re-renders.
function ProjectPreview({ project }) {
  const badgeRef = useRef(null);

  const moveBadge = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (badgeRef.current) {
      badgeRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(1)`;
    }
  };

  const showBadge = (event) => {
    moveBadge(event);
    badgeRef.current?.classList.add("is-visible");
  };

  const hideBadge = () => {
    badgeRef.current?.classList.remove("is-visible");
  };

  return (
    <Link
      className="project-preview has-cursor"
      to={`/portfoliodetails/${encodeURIComponent(project.Pheading)}`}
      aria-label={`View ${project.Pheading} project`}
      onMouseMove={moveBadge}
      onMouseEnter={showBadge}
      onMouseLeave={hideBadge}
    >
      <img
        src={project.Project}
        alt={`${project.Pheading} website screenshot`}
        loading="lazy"
      />
      <span ref={badgeRef} className="cursor-view" aria-hidden="true">
        VIEW <span aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}
export function ProjectList({ compact = false }) {
  const projects = compact
    ? PortfolioData.filter((p) =>
        ["Direct Sales Report", "Portfolio"].includes(p.Pheading),
      )
    : PortfolioData;
  return (
    <div>
      {projects.map((project, index) => (
        <ScrollReveal
          as="article"
          className="project-entry"
          key={project.id}
          stagger={index % 2}
        >
          {project.Project ? (
            <ProjectPreview project={project} />
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
