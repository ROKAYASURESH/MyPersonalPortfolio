import "./App.css";
import "./Components/Motion/motion.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Portfolio from "./Components/Pages/Portfolio";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Pages/Footer";
import Portfoliodetails from "./Components/Details/Portfoliodetails";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(decodeURIComponent(location.hash.slice(1)))
        ?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <div className="reading-progress" aria-hidden="true" />
      <main id="main" tabIndex="-1">
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
