import "./App.css";
import "./Components/Motion/motion.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./animations/gsapSetup";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Portfolio from "./Components/Pages/Portfolio";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Pages/Footer";
import Portfoliodetails from "./Components/Details/Portfoliodetails";

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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
