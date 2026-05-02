import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import { useEffect } from 'react';
import Header from './Components/Pages/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import Teams from './Components/Pages/Teams';
import Contact from './Components/Pages/Contact';
import Servic from './Components/Pages/Service';
import Footer from './Components/Pages/Footer';
import Teamdetail from './Components/Details/Teamdetail';
import { Servicedetails } from './Components/Details/Servicedetails';
import Portfoliodetails from './Components/Details/Portfoliodetails';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Smooth scroll animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
      '.about-section, .skills-section, .projects-section, .contact-section, .project-card, .skill-card, .contact-item'
    );

    elementsToAnimate.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Servic/>}/>
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/teamsdetail/:id' element={<Teamdetail/>} />
        <Route path='/servicedetail/:heading' element={<Servicedetails/>} />
        <Route path='/portfoliodetails/:Pheading' element={<Portfoliodetails/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
