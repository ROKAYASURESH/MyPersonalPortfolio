import React from 'react';
import { useParams } from 'react-router-dom';
import { PortfolioData } from '../All file Data/Data';
import { useEffect } from 'react';




export default function Portfoliodetails() {
  useEffect(() => {
    // Update the document title using the browser API
document.title=`Project Details`
     
  });
  let {Pheading}= useParams()

  const portfolios= PortfolioData.find(element=>element.Pheading==Pheading);
  
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 py-5 my-5">
                <img src={portfolios.Project} alt="" width="100%" />
            </div>
        </div>
    </div>
    </>
  )
}
