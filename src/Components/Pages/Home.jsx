import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  gsap,
  useGSAP,
  prefersReducedMotion,
  hasFinePointer,
} from "../../animations/gsapSetup";
import resume from "../images/My Personal CV (1).pdf";
import photo from "../images/homeImage.jpg";
import {
  SectionHeading,
  AboutStory,
  Skills,
  Experience,
  ProjectList,
  ContactInvite,
} from "../Common/PortfolioSections";
import SEO from "../Common/SEO";
export default function Home() {
  const hero = useRef(null);
  const badge = useRef(null);
  const title = useRef(null);
  const role = useRef(null);
  const description = useRef(null);
  const actions = useRef(null);
  const media = useRef(null);
  const footnote = useRef(null);

  useEffect(() => {
    // Route metadata is handled by <SEO />; keep this as a fallback.
    document.title =
      "Suresh Rokaya | Software Developer & Full-Stack Web Developer";
  }, []);

  // Hero entrance: badge -> heading words -> supporting copy -> CTAs and
  // portrait -> footnote. From-tweens never block interaction, and the whole
  // sequence finishes in about a second. Static layout when reduced motion
  // is preferred.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return undefined;
      const words = title.current?.querySelectorAll(".hero-word");
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from(badge.current, { opacity: 0, y: 14, duration: 0.45 }, 0.05)
        .from(
          words,
          { opacity: 0, y: 40, duration: 0.6, stagger: 0.07 },
          0.1,
        )
        .from(
          [role.current, description.current],
          { opacity: 0, y: 30, duration: 0.55, stagger: 0.08 },
          0.3,
        )
        .from(actions.current, { opacity: 0, y: 30, duration: 0.5 }, 0.5)
        .from(
          media.current,
          { opacity: 0, scale: 0.95, duration: 0.6 },
          0.45,
        )
        .from(footnote.current, { opacity: 0, duration: 0.5 }, 0.7);
      return () => {
        timeline.kill();
      };
    },
    { scope: hero },
  );

  // Barely-there depth on the portrait for fine-pointer devices only.
  // A few pixels of drift; nothing moves on touch or reduced motion.
  useEffect(() => {
    if (prefersReducedMotion() || !hasFinePointer()) return undefined;
    const section = hero.current;
    const portrait = media.current;
    if (!section || !portrait) return undefined;
    const driftX = gsap.quickTo(portrait, "x", {
      duration: 0.4,
      ease: "power2.out",
    });
    const driftY = gsap.quickTo(portrait, "y", {
      duration: 0.4,
      ease: "power2.out",
    });
    const move = (event) => {
      const bounds = section.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      driftX(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
      driftY(((event.clientY - bounds.top) / bounds.height - 0.5) * 10);
    };
    const reset = () => {
      driftX(0);
      driftY(0);
    };
    section.addEventListener("mousemove", move);
    section.addEventListener("mouseleave", reset);
    return () => {
      section.removeEventListener("mousemove", move);
      section.removeEventListener("mouseleave", reset);
    };
  }, []);
  return (
    <>
      <SEO
        title="Suresh Rokaya | Software Developer & Full-Stack Web Developer"
        description="Suresh Rokaya is a software and full-stack web developer from Nepal specializing in Django, Django REST Framework, React, Vue.js, PostgreSQL, and modern web applications."
        path="/"
      />
      <section id="home" ref={hero} className="personal-hero container">
        <div>
          <p ref={badge} className="eyebrow location-label">
            <span aria-hidden="true" />
            KATHMANDU, NEPAL
          </p>
          <h1 ref={title} aria-label="Hi, I'm Suresh Rokaya.">
            <span aria-hidden="true" className="hero-word">
              Hi,
            </span>{" "}
            <span aria-hidden="true" className="hero-word">
              I&apos;m
            </span>{" "}
            <span aria-hidden="true" className="hero-word">
              Suresh
            </span>{" "}
            <span aria-hidden="true" className="hero-word">
              Rokaya
            </span>
            <span aria-hidden="true" className="accent">
              .
            </span>
          </h1>
          <p ref={role} className="hero-role">
            Software developer building
            <br />
            practical web applications &amp; REST APIs.
          </p>
          <p ref={description} className="hero-description">
            I&apos;m Suresh Rokaya, a full-stack developer based in Kathmandu,
            Nepal. I build web applications with Python, Django, React,
            Vue.js, and PostgreSQL — from the API to the small details on
            screen.
          </p>
          <div ref={actions} className="hero-actions">
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
          <div ref={footnote} className="hero-footnote">
            <span className="small-label">Mostly working with</span>
            <span>Django &nbsp; / &nbsp; React &nbsp; / &nbsp; PostgreSQL</span>
          </div>
        </div>
        <figure ref={media} className="portrait">
          <img
            src={photo}
            alt="Suresh Rokaya, software developer from Nepal"
            width="800"
            height="960"
            fetchPriority="high"
            decoding="async"
          />
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
