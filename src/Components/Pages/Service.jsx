import React,{useEffect} from 'react'
import { Card } from '../Common/Card';
import { ServiceData } from '../All file Data/Data';
import HeroImg from '../Common/HeroImg';

export default function Servic() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Service-Page`;
  });
  return (
<>
<HeroImg heading="Service" text="Customer service should not be a department. It should be the entire company."/>

        <div className="container-fluid py-5 bg-dark ">
            <div className="row gy-5">
            
                <div className="col-lg-11 mx-auto">
                  <div className="hed">
                  <h1>Our Services</h1>
              <p>As a web developer, I have a strong understanding of web technologies and the ability to create and maintain websites and web applications. I have a good grasp of programming languages such as HTML, CSS, and JavaScript, as well as experience with frameworks and libraries like AngularJS, React, and Vue.js.npm </p>
                  </div>
              
                    <div className="row gy-5 serv">
                    {ServiceData.map((sr)=>(
                    <Card 
                     icons={sr.icon}
                     heading={sr.heading}
                     paragraph={sr.paragraph}
                     button={sr.Button}
                    />
                ))}
                    </div>
                </div>

            </div>
        </div>

</>
  )
}
