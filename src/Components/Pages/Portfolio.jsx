import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioData } from '../All file Data/Data';
import HeroImg from '../Common/HeroImg';

export default function Portfolio() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Portfolio page`;
  });
  return (
    <>
      <HeroImg heading="Portfolio" text="I am working on a web desing project" />

      <div id="portfolio bg-dark ">
        <div className="container py-5 ">
          <div className="Portfolio-content ">
            <div className="hed">
              <h2>Our Portfolio</h2>
              <h1>Our Recent Works</h1>
              <p>I am working on a web design project that focuses on creating a visually appealing,
                user-friendly and optimized website using various technologies such as HTML, CSS, and JavaScript. We have done lots of
                   work for various business institutions like ecomerce, portfolio, game, Real Estate, News Portals, 
                   Hotels and much more.</p>

            </div>
          </div>
          <div className="work-list">
            {PortfolioData.map((Pt) => (
              <div className="work">
                <img src={Pt.Project} alt="" />
                <div class="layer">
                  <h4>{Pt.Pheading}</h4>
                  <p>{Pt.PParagraph}</p>
                  {/*<a href={Pt.URL}>ss</a>*/}
                  <Link to={`/portfoliodetails/${Pt.Pheading}`}>{Pt.Pincon} </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <br />
      <br />

    </>
  )
}
