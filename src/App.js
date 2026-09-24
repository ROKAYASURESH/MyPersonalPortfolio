import "./App.css";
import "./Components/Motion/motion.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Portfolio from "./Components/Pages/Portfolio";
import Teams from "./Components/Pages/Teams";
import Contact from "./Components/Pages/Contact";
import Servic from "./Components/Pages/Service";
import Footer from "./Components/Pages/Footer";
import Teamdetail from "./Components/Details/Teamdetail";
import { Servicedetails } from "./Components/Details/Servicedetails";
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
          <Route path="/service" element={<Servic />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teamsdetail/:id" element={<Teamdetail />} />
          <Route path="/servicedetail/:heading" element={<Servicedetails />} />
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
