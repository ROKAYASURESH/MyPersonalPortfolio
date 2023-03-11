import React from 'react'
import { useParams } from 'react-router-dom'
import { teamdata } from '../All file Data/Data';



export default function Teamdetail() {
    let {id}=useParams();
    const foun =teamdata.find(element=>element.id==id);
  return (
    <>  
    <div className="whole bg-dark py-5 ">
       <div className="container bb py-5  rounded-5 my-5" style={{border:"1px solid black" ,background:"pink" }} >
        <div className="row ">
            <div className="col-lg-5 m-5 sds" style={{opacity: '0.9'}}>
                <img className='rounded-5 ' src={foun.icon} alt="" width="95%" height="100%"/>
            </div>

            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                <h1>{foun.heading} </h1>
                <h3>{foun.paragraph} </h3>
               <h4 style={{textAlign: 'justify' , padding:"10px 0"}}>{foun.About}</h4>
               <div className="row">

                <div className="col-lg-12 py-5 nn">
                <ul className="nav Ramesh nav-pills justify-content-lg-between mb-3" id="pills-tab" role="tablist ">
              <li className="nav-item" role="presentation ">
                <button className="nav-link active " id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><div className="btt">{foun.MainSkill}</div></button>
              </li>
    
              <li className="nav-item exp" role="presentation">
                <button className="nav-link" id="pills-Experiance-tab" data-bs-toggle="pill" data-bs-target="#pills-Experiance" type="button" role="tab" aria-controls="pills-Experiance" aria-selected="false"><div className="btt">{foun.Experience}</div></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-Education-tab" data-bs-toggle="pill" data-bs-target="#pills-Education" type="button" role="tab" aria-controls="pills-Education" aria-selected="false"> <div className="btt">{foun.Education} </div></button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
            {/* Skilll */}
         <div className="tab-pane fade show active" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab" tabIndex={0}>
             <div className="single-progress">
         <h6>{foun.HTMLtitle}</h6>
         <div className="progress">
           <div className="progress-bar" role="progressbar" style={{width: `${foun.HTMLwidth}`}}  aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
           <div><span className="label">{foun.HTMLpercentages}</span></div>
         </div>

         <h6>{foun.CSStitle}</h6>
         <div className="progress">
           <div className="progress-bar" role="progressbar" style={{width: `${foun.CSSwidth}`}}  aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
           <div><span className="label">{foun.CSSPercentages}</span></div>
         </div>

         <h6>{foun.Fluttortitle}</h6>
         <div className="progress">
           <div className="progress-bar" role="progressbar" style={{width: `${foun.Fluttorwidth}`}}  aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
           <div><span className="label">{foun.FluttorPercentages}</span></div>
         </div>
       </div>
    

     </div>
         {/* Experiance */}
         <div className="tab-pane fade" id="pills-Experiance" role="tabpanel" aria-labelledby="pills-Experiancet-tab" tabIndex={0}>
           <ul className="text-start ps-0">
           <li>{foun.WorkExp}</li>
           </ul>

         </div>

     {/* Education */}

            <div className="tab-pane fade suresh" id="pills-Education" role="tabpanel" aria-labelledby="pills-Education-tab" tabIndex={0}>
           <ul className="text-start ps-0">                 
             <li><a href> {foun.SEE}</a></li>
             <li><a href>{foun.Higher}</a> </li>

             <li><a href> {foun.Bachelor}</a></li>

           </ul>
         </div>
         </div>

                </div>
               </div>
            </div>
        </div>
       </div>
       </div>
    </>
  )
}
