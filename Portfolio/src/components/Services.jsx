import React from 'react';
import Footer from './Footer';

function Services() {
  return (
    <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div className="row">
            {/* Service item Start */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-mobile-alt" />   
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum in quo.</p>
              </div>
            </div>
            {/* Service item Start */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-laptop-code" />   
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum in quo.</p>
              </div>
            </div>
            {/* Service item Start */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-palette" />   
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum in quo.</p>
              </div>
            </div>
            {/* Service item Start */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-code" />   
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum in quo.</p>
              </div>
            </div>
            {/* Service item Start */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-search" />   
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum in quo.</p>
              </div>
            </div>
            {/* Service item Start */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-bullhorn" />   
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum in quo.</p>
              </div>
            </div>
            {/* Service item End */}
          </div>
        </div>
        <Footer />
      </section>
    );
  }

export default Services