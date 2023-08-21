import React, { useEffect } from 'react';
import logo from '../images/MY RESUME.pdf'
import abs from '../images/myphotoss.jpg'
import avs from '../images/myphotoss (2).jpg'
import { NavLink } from 'react-router-dom';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio'
import Teams from './Teams';
import Contact from './Contact'
import { FaDownload } from 'react-icons/fa';
import { AiFillContacts } from "@react-icons/all-files/ai/AiFillContacts";
import { Link } from 'react-router-dom';

import img from '../images/suresh.webp'
import myphoto from '../images/myphoto.png'


import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Partical from '../Partical/Partical';


export default function Home() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Home page`;
  });
  const [text] = useTypewriter({
    words: ['🔺Frontend Developer🔺', '🔺Graphic Design🔺', '🔺Custom Website🔺'],
    loop: {},
    typeSpeed: 700,
    deleteSpeed: 700,
  });
  return (
    <>
      <section className='back'>
        <div className="container Home">
          <div className="row">
            <div className="col-lg-6 infor skr ">
              <h3>WELCOME TO MY WEBSITE</h3>
              <h1>I'm SureshRokaya  <br />
                <span className='tex' style={{ fontSize: "35px" }}> {text}</span>
                <Cursor cursorColor='pink' /><br />
                based in Nepal
              </h1>
              <div className="homebtn">
                <button className='btn1 dn'><a href={logo} download="Suresh Rokaya CV">Get Resume <span style={{ fontSize: "20px" }}><FaDownload /></span>
                </a>
                </button>
                <button className=' btn1 at'> <Link to="/contact">Hire me <span style={{ fontSize: "20px", padding: '5px' }}><AiFillContacts /></span> </Link></button>
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
      
      <div className='about'>
        <div className='left'>
          <h1 style={{ color: 'white', fontSize: '4rem' }}>Who Am I?</h1>
          <p style={{ color: 'white', fontSize: '2rem' }}> I am react Frontend developer. I create responsive secure website for my clinet</p>
          <Link to='/Contact'  ><button className='btn' style={{ color: 'white', fontSize: '2rem', background: 'blue' }}>Contact</button></Link>
        </div>

        <div className='right' >
          <div className='img-container'>
            <div className='img-stack top'>
              <img src={abs} alt='' title="suresh" />
            </div>
            
            <div className='img-stack bottom'>
              <img src={avs} alt='' />
            </div>

          </div>
        </div>
      </div>

      {/* ........Contact............... */}
      <section className='cont'>
      <div className="containers ">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt" />
              <div className="topic">Address</div>
              <div className="text-one">Koteshwor, 32</div>
              <div className="text-two">Kathmandu </div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt" />
              <div className="topic">Phone</div>
              <div className="text-one">-977 9869504717</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope" />
              <div className="topic">Email</div>
              <div className="text-one">rokayasuresh028@gmail.com</div>
              <div className="text-two">sureshrokay@ismt.edu.np</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p style={{ fontSize: '1.5rem' }}>If you have any work from me or any types of quries , you can send me message from here. It's my pleasure to help you.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <input type="text" placeholder="Comment" />

              </div>
              <div className="button">
                <input type="button" defaultValue="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>

      {/* <About /> */}
      {/* <Service /> */}
      {/* <Portfolio /> */}
      {/* <Teams /> */}
      {/* <Contact /> */}
      {/* <Partical/> */}

    </>
  )
}
