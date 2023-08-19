import React,{useEffect} from 'react';
import {FaFacebook,FaWhatsappSquare,FaLinkedin } from 'react-icons/fa/';
import { Link } from 'react-router-dom';
import { teamdata } from '../All file Data/Data';
// import HeroImg from '../Common/HerojImg';
import HeroImg from '../Common/HeroImg';

export default function Teams() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `My Teams Details`;
      });
  return (
    <>
{/* <HeroImg heading="Our Teams" text="Your vision, our passion. Design and development that exceed expectation"/> */}
<HeroImg heading="Our Teams" text="Your vision, our passion. Design and development that exceed expectation"/>

    <div className="container-fluid py-5 bg-dark ">
    <div className="row gy-5">
        <div className="col-lg-11 mx-auto">
       
            <div className="row gy-5">
            <div className="hed">
           <h1>Our Teams</h1>
           <h5>TEAMS WITH ME</h5> 
           <p>My team is composed of web developers, graphic designers, and android developers.
        Together, they have the skills and expertise to design, develop, and launch cutting-edge web and mobile applications
        meet the needs of clients.</p>
            </div>
                    {teamdata.map((tr)=>(
                                <div className="col-lg-3 col-md-6">
                                <div className="card px-5">
                                    <div className="icons">
                                        <img src={tr.icon} alt="" />
                                    </div>
                                        <div className="card-bod">
                                            <h1 className="card-titl">{tr.heading}</h1>
                                            <p className="card-tex">{tr.paragraph}</p>
                                         <span className="butto"><Link to={`/teamsdetail/${tr.id}`}>{tr.Button}</Link></span>  

<ul className="sci">
<li >

<a href={tr.message} target="_blank"><span><FaFacebook/></span></a>
</li>
<li>
<a href={tr.Whatsapp} target="_blank"><span><FaWhatsappSquare/></span></a>
</li>
<li>
<a href={tr.Linkedin} target="_blank"><span><FaLinkedin/></span></a>
</li>
</ul>


                                    </div>
                                 </div>
                             </div>
                    ))}
            </div>
        </div>

    </div>
</div>

</>
  )
}
