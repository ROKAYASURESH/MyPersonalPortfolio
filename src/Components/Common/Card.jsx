import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => {
  return (
    <>
        <div className="col-lg-4 col-md-6 service">
            <div className="card px-5">
                <div className="icon">
                  {/* {props.icons} */}
                <img src={props.sss} alt="" />
                </div>
                    <div className="card-body">
                        <h1 className="card-title">{props.heading}</h1>
                        <p className="card-text">{props.paragraph}</p>
                     <span className="butt"><Link to={`/servicedetail/${props.heading}`}>{props.button}</Link></span>   
                </div>
             </div>
         </div>
                    
    </>
  )
}
