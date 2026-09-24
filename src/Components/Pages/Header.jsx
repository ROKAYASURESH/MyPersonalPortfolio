import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../Common/ThemeToggle";

const links = [
  { label: "Home", to: "/", section: "home" },
  { label: "About", to: "/about", section: "about" },
  { label: "Skills", to: "/#skills", section: "skills" },
  { label: "Projects", to: "/portfolio", section: "projects" },
  { label: "Experience", to: "/#experience", section: "experience" },
  { label: "Contact", to: "/contact", section: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef(null);
  const sentinel = useRef(null);
  const navigation = useRef(null);
  const indicator = useRef(null);
  const location = useLocation();
  const active =
    location.pathname === "/"
      ? section
      : location.pathname.startsWith("/portfolio")
        ? "projects"
        : location.pathname.slice(1);

  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  // During the short close transition, remove links from keyboard navigation
  // immediately. Desktop navigation remains interactive at every breakpoint.
  useEffect(() => {
    const media = window.matchMedia?.("(max-width: 760px)");
    const nav = navigation.current;
    const update = () => {
      nav.inert = Boolean(media?.matches && !open);
    };
    update();
    media?.addEventListener?.("change", update);
    return () => media?.removeEventListener?.("change", update);
  }, [open]);

  useEffect(() => {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    setSection(location.hash.slice(1) || "home");
    if (!window.IntersectionObserver) return;
    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.target);
          else visible.delete(entry.target.id);
        });
        const current = [...visible.values()].sort(
          (a, b) =>
            Math.abs(a.getBoundingClientRect().top - 100) -
            Math.abs(b.getBoundingClientRect().top - 100),
        )[0];
        if (current) setSection(current.id);
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: 0 },
    );
    links.forEach((link) => {
      const element = document.getElementById(link.section);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const nav = navigation.current;
    const line = indicator.current;
    const update = () => {
      const target = nav.querySelector("a.active");
      if (!target || !target.offsetWidth) {
        line.style.opacity = "0";
        return;
      }
      line.style.transform = `translateX(${target.offsetLeft}px) scaleX(${target.offsetWidth})`;
      line.style.opacity = "1";
    };
    update();
    if (!window.ResizeObserver) return;
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    nav.querySelectorAll("a").forEach((link) => observer.observe(link));
    return () => observer.disconnect();
  }, [active, open]);

  return (
    <>
      <div ref={sentinel} className="header-sentinel" aria-hidden="true" />
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <nav className="navbar" aria-label="Main navigation">
          <Link to="/" className="brand">
            suresh<span>.</span>
            <span className="brand-note"> / developer</span>
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <div
            ref={navigation}
            id="navigation"
            className={`navigation ${open ? "is-open" : ""}`}
          >
            {links.map((link) => (
              <Link
                key={link.section}
                to={link.to}
                className={active === link.section ? "active" : ""}
                aria-current={
                  active === link.section
                    ? location.pathname === "/"
                      ? "location"
                      : "page"
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
            <span
              ref={indicator}
              className="nav-active-line"
              aria-hidden="true"
            />
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
