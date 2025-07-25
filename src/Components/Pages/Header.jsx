import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { useState } from 'react';

export default function Header() {  
  /* ...........when scrol then bg color show....... */
  const [color, setColor]=useState(false);
  const changeColor=()=>{
      if(window.scrollY >=50)
      {
          setColor(true);
      }
      else
      {
          setColor(false);
      }
  };

  window.addEventListener("scroll",changeColor);
  // end
  return (
    <>
    <div className={color ?"header header-bg":"header"}>
        <nav className="navbar navbar-expand-lg" >
        <div className="container suresh">
          <NavLink className="navbar-brand" to="/MyPersonalPortfolio">
            <img src={logo} alt="" />
           
          </NavLink>
          <h3>SURESH ROKAYA</h3>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light text-light" />
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/MyPersonalPortfolio">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Service</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/team">Our Teams</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}
