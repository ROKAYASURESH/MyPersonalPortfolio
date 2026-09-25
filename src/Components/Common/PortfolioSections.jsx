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
          I&apos;m Suresh Rokaya, a software and full-stack developer based in
          Kathmandu, Nepal. I build web applications and REST APIs with Python,
          Django, Django REST Framework, React, Vue.js, and PostgreSQL —
          connecting the data behind an application to the interface people use
          every day.
        </p>
        <p>
          My work has included sales reporting, authentication, REST APIs,
          PostgreSQL data modeling, and frontend integration with React and
          Vue.js. I enjoy the practical parts: untangling a data flow, fixing a
          stubborn bug, and making code easier for the next person to follow.
        </p>
        <p>
          My approach is simple: understand the problem, build a clear solution,
          and keep learning from the work. Lately I&apos;ve been working with
          Docker and Linux workflows, TypeScript, and GIS-backed web
          applications. <Link to="/about">Read more about Suresh Rokaya</Link>{" "}
          or <Link to="/portfolio">browse selected projects</Link>.
        </p>
      </div>
      <aside className="working-note">
        <span className="eyebrow">AT MY DESK</span>
        <h3>Backend to browser.</h3>
        <p>
          Currently working with Django, React, Vue.js, and PostgreSQL on Linux
          with Docker.
        </p>
        <span className="small-label">A principle I come back to</span>
        <p>Readable code is easier to improve.</p>
        <Link to="/about">
          More about Suresh Rokaya <span aria-hidden="true">↗</span>
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
      "REST APIs · authentication · permissions · business logic · data processing",
    ],
    [
      "Frontend",
      "React.js, Vue.js, Next.js, Nuxt.js, JavaScript, TypeScript",
      "Reusable components · API integration · responsive interfaces · state management",
    ],
    [
      "Databases & GIS",
      "PostgreSQL, PostGIS, MySQL, SQL Server",
      "Relational data · database design · queries · migrations · geospatial data",
    ],
    [
      "Tools & Deployment",
      "Git, GitHub, GitLab, Linux, Docker, Nginx, Gunicorn",
      "Version control · collaboration · containers · deployment",
    ],
    [
      "Currently Exploring",
      "Cloud deployment · system design · application performance· AI-assisted development",
      "Infrastructure · scalability · development workflows",
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
          <p className="small-label">1+ year of professional experience</p>
        </div>
        <div>
          <h3>Full-Stack Developer</h3>
          <p className="company">Upveda Technology Pvt. Ltd</p>
          <p>
            I worked on business management and customer-facing web applications
            using Django, Django REST Framework, React.js and Next.js.
          </p>
          <p>
            My work involved building new features, developing APIs, connecting
            frontend and backend systems, working with business data and
            improving existing application functionality.
          </p>
          <h5>What I worked on:</h5>
          <ul>
            <li>
              Developed and maintained the Direct Sales Report (DSR/MIS)
              application for managing sales-related data, reporting and
              business operations.
            </li>
            <li>
              Developed and integrated REST APIs using Django REST Framework.
            </li>
            <li>
              Implemented authentication, role-based access and permissions to
              control what different users can view and manage within the
              application.
            </li>
            <li>
              Built and improved reusable React.js and Next.js interfaces for
              internal and customer-facing workflows.
            </li>

            <li>
              Worked with application state, data flow and frontend-backend
              integration.
            </li>

            <li>
              Implemented features related to sales reporting, customer
              information, products and business data.
            </li>
            <li>Worked on dashboards and data-driven interfaces.</li>
            <li>
              Debugged existing functionality and fixed issues based on business
              requirements.
            </li>
            <li>
              Collaborated with the development team using Git and version
              control.
            </li>
            <li>
              Worked across backend and frontend, gaining practical experience
              in full-stack web development.
            </li>
          </ul>
          <h5>Technologies Used:</h5>
          <p className="project-stack">
            Django · Django REST Framework · React.js · Next.js · JavaScript ·
            REST APIs · Authentication · Authorization · Git
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal className="experience-row">
        <div>
          <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
          <p className="small-label">Dec 2025 – Present</p>
        </div>
        <div>
          <h3>Django Developer</h3>
          <p className="company">Thimi Tech Pvt. Ltd.</p>
          <p>
            I work primarily with Django and Django REST Framework, building and
            maintaining web applications and APIs. I also work with Vue.js,
            PostgreSQL and GIS-related functionality depending on the project
            requirements.
            {/* <br />
            Working on web applications using Django, Django REST Framework,
            Vue.js, PostgreSQL, and GIS technologies. Developing REST APIs,
            integrating frontend and backend services, working with geospatial
            data, and maintaining existing production codebases. */}
          </p>
          <h5>What I work on:</h5>
          <ul>
            <li>Develop backend features using Python and Django.</li>
            <li>Build and maintain REST APIs using Django REST Framework</li>
            <li>
              Work with PostgreSQL databases, models, relationships and queries.
            </li>
            <li>Integrate backend APIs with Vue.js frontend applications.</li>
            <li>Work with GIS-related features and geospatial data.</li>
            <li>Troubleshoot database and migration issues.</li>
            <li>
              Debug existing application functionality and implement new
              requirements.
            </li>
            <li>
              Work with existing codebases and understand application
              architecture before making changes.
            </li>
            <li>
              Worked on database migration, debugging, feature development, and
              performance improvements.
            </li>
            <li>
              Collaborate with the development team using Git and Git-based workflows.
            </li>
          </ul>
          <h5>Technologies Used:</h5>
          <p className="project-stack">
            Python · Django · Django REST Framework · Vue.js · PostgreSQL ·
            PostGIS · GIS · Git
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
      // Offset +24px right so the native mouse arrow stays visible
      // next to the pill (like the screenshot) instead of hidden under it.
      badgeRef.current.style.transform = `translate(${x + 24}px, ${y}px) translate(-50%, -50%) scale(1)`;
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
      aria-label={`View ${project.Pheading} project details by Suresh Rokaya`}
      onMouseMove={moveBadge}
      onMouseEnter={showBadge}
      onMouseLeave={hideBadge}
    >
      <img
        src={project.Project}
        alt={`${project.Pheading} website interface screenshot — project by Suresh Rokaya`}
        loading="lazy"
        decoding="async"
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
                aria-label={`${project.Pheading} — project details`}
              >
                {project.Pheading} <span aria-hidden="true">↗</span>
              </Link>
            </h3>
            <p>{project.PParagraph}</p>
            <p className="project-stack">{project.stack}</p>
            <Link
              className="text-link"
              to={`/portfoliodetails/${encodeURIComponent(project.Pheading)}`}
              aria-label={`Read project notes for ${project.Pheading}`}
            >
              Project notes for {project.Pheading}{" "}
              <span aria-hidden="true">→</span>
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
