import React from 'react'
import { useParams } from 'react-router-dom'
import { ServiceData } from '../All file Data/Data'
import { useEffect } from 'react'
import { PortfolioData } from '../All file Data/Data'
import { Link } from 'react-router-dom'

export const Servicedetails = () => {
  useEffect(() => {
    // Update the document title using the browser API
document.title="Out Service Detail"
  });
    let {heading}=useParams()
    const servce=ServiceData.find(element=>element.heading==heading)
  return (
    <>
    <div className="container text-light py-5">
        <div className="row">
            <div className="col-lg-8 mx-auto my-5">
                  <div className="row gx-5 my-5">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
                      <h1 style={{fontSize:"100px"}}>  {servce.icon}</h1>
                      <div className='box2 my-5'><h2    style={{fontSize:"30px"}}>{servce.heading}</h2></div>
                      

                    </div>
                        <div className="col-lg-8 p-5 text-light"style={{border:'10px solid orange',boxShadow:'15px -15px 5px white, inset 15px -15px 5px white', borderRadius:'50px', textAlign:"justify", outline:"1px solid black" }}>
                          <h2 className='text-center'>{servce.heading}</h2>
                          <h4 className='text-justify'>{servce.paragraph}</h4>
                          <h4>{servce.paragraph}</h4>
                          
                        </div>
                  </div>
            </div>
            <hr />

        </div>
        <div className="work-list">
            {PortfolioData.map((Pt)=>(
                <div className="work">
                <img src={Pt. Project} alt="" />
                <div class="layer">
						<h4>{Pt.Pheading}</h4>
						<p>{Pt.PParagraph}</p>   
            <Link to={`/portfoliodetails/${Pt.Pheading}`}>{Pt.Pincon} </Link>

					</div>
            </div>
            ))}
            
        </div>
        <hr />
    </div>


     
    </>
  )
}
