import React from 'react'
import './HeroImgStyle.css'
import { Link } from 'react-router-dom';
import {FaDownload } from 'react-icons/fa';
import { AiFillContacts} from "@react-icons/all-files/ai/AiFillContacts";
export default function HeroImg(props) {
  return (
    <>
       <div className='hero-img'>
            <div className='heading'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
                <div className="homebtn">
               <button  className='btn1 dn'><a href='' download="Suresh Rokaya CV">Get Resume <span style={{fontSize:"20px" }}><FaDownload/></span>
                </a>
              </button> 
                <button className=' btn1 at'> <Link to="/contact">Contact <span style={{fontSize:"20px",  }}><AiFillContacts/></span> </Link></button>
              </div>
            </div>
       </div>
    </>
  )
}
