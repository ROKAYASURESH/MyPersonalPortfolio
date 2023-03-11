import React ,{useEffect}from 'react';
import logo from '../images/MY RESUME.pdf'
import { NavLink } from 'react-router-dom';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio'
import Teams from './Teams';
import Contact from './Contact'
import {FaDownload } from 'react-icons/fa';
import { AiFillContacts} from "@react-icons/all-files/ai/AiFillContacts";
import { Link } from 'react-router-dom';

import img from '../images/suresh.webp'
import myphoto from '../images/myphoto.jpg'


import { useTypewriter, Cursor } from 'react-simple-typewriter';


export default function Home() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Home page`;
  });
  const [text] = useTypewriter({
    words:['🔺Frontent Developer🔺', '🔺Graphic Design🔺', '🔺Android Developer🔺'],
    loop:{},
    typeSpeed:150, 
    deleteSpeed:80,
  });
  return (
    <>
      <section className='back'>
        <div className="container Home">
          <div className="row">
            <div className="col-lg-6 infor skr ">
              <h3>WELCOME TO MY WEBSITE</h3>
              <h1>I'm Suresh Rokaya  <br />
                <span className='tex' style={{fontSize:"35px"}}> {text}</span>
                <Cursor cursorColor='pink'  /><br />
                based in Nepal
              </h1>
              <div className="homebtn">
               <button  className='btn1 dn'><a href={logo} download="Suresh Rokaya CV">Get Resume <span style={{fontSize:"20px" }}><FaDownload/></span>
                </a>
              </button> 
                <button className=' btn1 at'> <Link to="/contact">Hire me <span style={{fontSize:"20px", padding: '5px' }}><AiFillContacts/></span> </Link></button>
              </div>

            </div>

            <div className="col-lg-6 order-1 order-lg-2 ssr">
              <div className="animated">
                <img src={img} alt="" className='img-fluid animated' />
              </div>
              <img src={myphoto} alt="" className='myphoto' />
              <div className="text"><h2> 🔺Frontent Developer🔺</h2></div>
            </div>
          </div>
        </div>
      </section>
      {/* <About />
      <Service />
      <Portfolio />
      <Teams />
      <Contact /> */}
    </>
  )
}
