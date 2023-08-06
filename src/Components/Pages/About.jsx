import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { tabcontent } from '../All file Data/Data';
import about from '../images/image.jpg';
import HeroImg from '../Common/HeroImg';
import Partical from '../Partical/Partical';


export default function About() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `About page`;
  });
  
  return (
    <>
       <HeroImg heading="About" text="Some Special about Me !!!!!"/>
    <section id="about" className="about_wrapper">
<div className="container-fluid bg-dark">
 <div className="row justify-content-between align-items center">
   <div className="col-lg-10 mx-auto">
     <div className="row">
 <div className="col-lg-5 mb-4 mb-lg-0 imx ">
     <img src={about} className="img-fluid my-5" alt="About us" />
   </div>

   <div className="col-lg-7 ps-lg-5 text-center text-lg-start py-4">
     <div className="my-3 mb-lg-0 text-center about-content">
       <span className="subtitle"><h3>My About Details</h3>  </span>
       <h2>About Me</h2>
       <p>As a web developer, I have a strong understanding of web technologies and the ability to create and maintain websites and web applications. I have a good grasp of programming languages such as HTML, CSS, and JavaScript, as well as experience with frameworks and libraries like Bootstrap , React, and React JS .</p>
     </div>
     {/* nav-tabbar */}
     <div className="py-5 ">
       <ul className="nav nav-pills justify-content-center justify-content-lg-between mb-3" id="pills-tab" role="tablist ">
         <li className="nav-item" role="presentation ">
           <button className="nav-link active " id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><div className="btt">Main Skill</div></button>
         </li>

         <li className="nav-item" role="presentation">
           <button className="nav-link" id="pills-Experiance-tab" data-bs-toggle="pill" data-bs-target="#pills-Experiance" type="button" role="tab" aria-controls="pills-Experiance" aria-selected="false"><div className="btt">Experiance</div></button>
         </li>
         <li className="nav-item" role="presentation">
           <button className="nav-link" id="pills-Education-tab" data-bs-toggle="pill" data-bs-target="#pills-Education" type="button" role="tab" aria-controls="pills-Education" aria-selected="false"> <div className="btt">Education</div></button>
         </li>
       </ul>
       <div className="tab-content" id="pills-tabContent">
         {/* Skilll */}
         <div className="tab-pane fade show active" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab" tabIndex={0}>
         
             {tabcontent.map((tb)=>(
                 <div className="single-progress">
             <h6>{tb.title}</h6>

             <div className="progress">
               <div className="progress-bar" role="progressbar" style={{width: `${tb.width}`}}  aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
               <div><span className="label">{tb.Percentages}</span></div>
             </div>
           </div>
           ))}
          <div style={{height:"20px"}}></div>
         </div>
         {/* Experiance */}
         <div className="tab-pane fade" id="pills-Experiance" role="tabpanel" aria-labelledby="pills-Experiancet-tab" tabIndex={0}>
           <ul className="text-start ps-0">
           <li>No work Experience</li>

             <li><a href>I am maked many project by use html, css , javascrip and React JS:-  <span style={{color:'#ff004f'}}>Ecomerce: 2023</span></a> </li>

           </ul>
               <button className='More' ><NavLink to="/portfolio">Project</NavLink></button>
               <button className='More'><NavLink to="/service">Service</NavLink></button>
            <div style={{height:"20px"}}></div>

         </div>
         
         {/* Education */}
         <div className="tab-pane fade" id="pills-Education" role="tabpanel" aria-labelledby="pills-Education-tab" tabIndex={0}>
           <ul className="text-start ps-0">                 
             <li><a href> School Level <span>-Sunlight Public School Krishnapur 02 Bani Kanchanpur</span></a> :-2017 </li>
             <li><a href> +2  <span>-Little Buddha Academy</span></a> :-2020  </li>

             <li><a href> Bac.IT <span>-University on Sunderland</span></a> :-2021  running</li>

           </ul>
         </div>
       </div>  
     </div>
   </div>
   </div>
   </div>
 </div>
</div>
  
</section>
</>
  )
}
