import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router';
import Header from './Components/Pages/Header';
import Home from './Components/Pages/Home';
import  About  from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import Teams from './Components/Pages/Teams';
import Contact from './Components/Pages/Contact';
import Servic from './Components/Pages/Service';
import Footer from './Components/Pages/Footer';
import Teamdetail from './Components/Details/Teamdetail';
import { Servicedetails } from './Components/Details/Servicedetails';
import Portfoliodetails from './Components/Details/Portfoliodetails';

function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Servic/>}/>
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/team' element={<Teams/>} />
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
