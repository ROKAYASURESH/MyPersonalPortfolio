import "./App.css";
import "./Components/Motion/motion.css";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./animations/gsapSetup";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Portfolio from "./Components/Pages/Portfolio";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Pages/Footer";
import Portfoliodetails from "./Components/Details/Portfoliodetails";
import SEO from "./Components/Common/SEO";

function NotFound() {
  return (
    <div className="detail-page-error">
      <div className="container">
        <SEO
          title="Page not found | Suresh Rokaya"
          description="The requested page could not be found on the official portfolio of Suresh Rokaya."
          path="/"
          noindex
        />
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>
          This page doesn&apos;t exist.{" "}
          <Link to="/">Return to Suresh Rokaya&apos;s homepage</Link> or{" "}
          <Link to="/portfolio">browse projects</Link>.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const main = useRef(null);
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(decodeURIComponent(location.hash.slice(1)))
        ?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Simple route transition: new pages fade in. Hash-only jumps on the home
  // page skip it so anchor navigation stays instant.
  useEffect(() => {
    if (previousPath.current === location.pathname) return undefined;
    previousPath.current = location.pathname;
    const target = main.current;
    if (!target || prefersReducedMotion()) return undefined;
    const fade = gsap.fromTo(
      target,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "opacity,transform",
      },
    );
    return () => {
      fade.kill();
    };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="reading-progress" aria-hidden="true" />
      <main ref={main} id="main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/portfoliodetails/:Pheading"
            element={<Portfoliodetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
