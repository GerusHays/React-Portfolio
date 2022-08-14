import React from 'react';
import Footer from './Footer';

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Last Projects:</h2>
            </div>
          </div>
          <div className="row">
            {/* portfolio item start */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <a href="https://gerushays.github.io/Drunk-Trivia/" target="_blank">
                    <img src="images/Drunk-Trivia-Screenshot.PNG" alt="Drunk trivia application" />
                  </a>
                </div>
              </div>
            </div>
            {/* portfolio item end */}
            {/* portfolio item start */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <a href="https://strategic-home-inspection.herokuapp.com/" target="_blank">
                    <img src="images/Screenshot-main.png" alt="Home Inspection Webpage created in a team" />
                  </a>
                </div>
              </div>
            </div>
            {/* portfolio item end */}
            {/* portfolio item start */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/Weather-Dashboard-Screenshot.png" alt="" />
                </div>
              </div>
            </div>
            {/* portfolio item end */}
            {/* portfolio item start */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/Work-scheduler-screenshot.png" alt="" />
                </div>
              </div>
            </div>
            {/* portfolio item end */}
            {/* portfolio item start */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/run-buddy.png" alt="" />
                </div>
              </div>
            </div>
            {/* portfolio item end */}
            {/* portfolio item start */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/placeholder.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* portfolio item end */}
          </div>
        </div>
        <Footer />
      </section>
    );
  }

export default Portfolio