import React from 'react'
import logo from '../images/logo.png'
import {FaFacebook,FaTwitterSquare,FaInstagramSquare } from 'react-icons/fa/';


export default function 
() {  
  return (
    <>
    <div className="contactsss mt-5">
    
   
        <div className="container-fluid footer bg-dark ">
            <div className="row">
                <div className="col-lg-10 col-5 mx-auto ">
                    <div className="row ">
                        <div className="col-lg-3 hide mx-auto">
                           <div className="f-image">
                           <img src={logo} alt="" /> 
                           {/* <span>Suresh Rokaya</span>  */}
                           </div>
                           <div className="f-title">
                           <p> As a web developer, We have a strong team understanding of web technologies and the ability to create and maintain websites and web applications. We have a good grasp of programming languages such as HTML, CSS, and JavaScript, as well as experience with frameworks and libraries like Bootstrap , React, and React JS .</p>
                           </div>
                        </div>

                        <div className="col-lg-3 location hide  ">
                            <h3> <span>Location</span> </h3>
                            <ul>
                                <li>Near CCRC College</li>
                                <li>Koteshwork 32</li>
                                <li>Kathmandu</li>
                               
                            </ul>
                        </div>

                        <div className="col-lg-2 location hide ">
                            <h3><span>Links</span> </h3>
                            <ul>
                                <li> <a href="/">Home</a> </li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/service">Service</a></li>
                                <li><a href="/portfolio">portfolio</a></li>
                                <li> <a href="/team">Teams</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 location f-contact">
                            <h3><span>Contact</span></h3>
                            <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='fill email address'/>
                            </div>
            
                            <button type="submit" className="btn btn-primary text-center">Submit</button>
                            </form>
                            <div className="f-icon">
                                <ul>

                                    <li><a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a></li>
                                
                                    <li>  <a href=""><FaTwitterSquare/></a> </li>
                                    <li><FaInstagramSquare/></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                  
                </div>
                <div className="col-lg-12 cpright">Copyright © 2023 by Suresh Rokay</div>
            </div>
            <h1 className="class mx-auto bg-dark">Building beautiful and functional interfaces with code</h1>
        </div>
        </div>
    </>
  )
}
