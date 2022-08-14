import React from 'react'
import Footer from './Footer';
function Home() {
  return (
    <section className="home active section" id="home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">Hello, my name is <span className="name">Gerus Hays</span></h3>
              <h3 className="my-profession">I'm a <span className="typing">Software Developer</span></h3>
              <p>I'm a entry level Software Developer with strong drive and willingness to improve my skills.
                I work well with a team and posess a strong leadership presence from serving in the military.</p>
              <a href="#" className="btn">Download CV</a>
            </div>
            <div className="home-img padd-15">
              <img src="./images/Hero.JPG" alt="Picture of myself, Interview ready." />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }

export default Home