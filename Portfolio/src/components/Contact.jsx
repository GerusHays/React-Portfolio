import React from 'react'
import Footer from './Footer';

function Contact() {
  return (
    <section className="contact section" id="contact">
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Contact Me</h2>
        </div>
      </div>
      <h3 className="contact-title padd-15">Have you any Questions?</h3>
      <h4 className="contact-sub-title padd-15">I'm at your service</h4>
      <div className="row">
        {/* Contact info item start */}
        <div className="contact-info-item padd-15">
          <div className="icon"><i className="fa fa-phone" /></div>
          <h4>Call Me On</h4>
          <p>571-409-4215</p>
        </div>
        {/* Contact info item end */}
        {/* Contact info item start */}
        <div className="contact-info-item padd-15">
          <div className="icon"><i className="fa fa-map-marker-alt" /></div>
          <h4>Office</h4>
          <p>Salt Lake City, UT</p>
        </div>
        {/* Contact info item end */}
        {/* Contact info item start */}
        <div className="contact-info-item padd-15">
          <div className="icon"><i className="fa fa-envelope" /></div>
          <h4>Email</h4>
          <p>gerushays@gmail.com</p>
        </div>
        {/* Contact info item end */}
        {/* Contact info item start */}
        <div className="contact-info-item padd-15">
          <div className="icon"><i className="fa fa-globe-europe" /></div>
          <h4>Website</h4>
          <p>www.domain.com</p>
        </div>
        {/* Contact info item end */}
      </div>
      <h3 className="contact-title padd-15">Send me an email</h3>
      <h4 className="contact-sub-title padd-15">I will get back to you as soon as possible!</h4>
      {/* Contact Form */}
      <div className="row">
        <div className="contact-form padd-15">
          <div className="row">
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
            </div>
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-item col-12 padd-15">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-item col-12 padd-15">
              <div className="form-group">
                <textarea name className="form-control" placeholder="Message" defaultValue={""} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-item col-12 padd-15">
              <button type="submit" className="btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
);
}

export default Contact