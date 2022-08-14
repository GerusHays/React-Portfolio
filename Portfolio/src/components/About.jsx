import React from 'react';
import Footer from './Footer';

function About() {
  return (
            <section className="about section" id="about">
              <div className="container">
                <div className="row">
                  <div className="section-title padd-15">
                    <h2>About Me</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="about-content padd-15">
                    <div className="row">
                      <div className="about-text padd-15">
                        <h3>I'm Gerus Hays a <span>Software Developer</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusantium consequatur a nisi, eius quaerat hic rem quasi quisquam officia quae quia molestias odit impedit adipisci, doloribus facilis commodi sit?</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="personal-info padd-15">
                        <div className="row">
                          <div className="info-item padd-15">
                            <p>Birthday: <span>09 July 1995</span></p>
                          </div>
                          <div className="info-item padd-15">
                            <p>Age: <span>26</span></p>
                          </div>
                          <div className="info-item padd-15">
                            <p>Website: <span>www.domain.com</span></p>
                          </div>
                          <div className="info-item padd-15">
                            <p>Email: <span>gerushays@gmail.com</span></p>
                          </div>
                          <div className="info-item padd-15">
                            <p>Degree: <span>Computer Science</span></p>
                          </div>
                          <div className="info-item padd-15">
                            <p>Phone: <span>571-409-4215</span></p>
                          </div>
                          <div className="info-item padd-15">
                            <p>City / State: <span>Salt Lake City, UT</span></p>
                          </div>
                          <div className="info-item padd-15">
                            <p>Freelance: <span>Available</span></p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="buttons padd-15">
                            <a href="#contact" data-section-index={1} className="btn hire-me">Hire Me</a>
                          </div>
                        </div>
                      </div>
                      <div className="skills padd-15">
                        <div className="row">
                          <div className="skill-item padd-15">
                            <h5>JS</h5>
                            <div className="progress">
                              <div className="progress-in" style={{width: '86%'}} />
                              <div className="skill-percent">86%</div>
                            </div>
                          </div>
                          <div className="skill-item padd-15">
                            <h5>C++</h5>
                            <div className="progress">
                              <div className="progress-in" style={{width: '66%'}} />
                              <div className="skill-percent">66%</div>
                            </div>
                          </div>
                          <div className="skill-item padd-15">
                            <h5>HTML</h5>
                            <div className="progress">
                              <div className="progress-in" style={{width: '96%'}} />
                              <div className="skill-percent">96%</div>
                            </div>
                          </div>
                          <div className="skill-item padd-15">
                            <h5>Bootstrap</h5>
                            <div className="progress">
                              <div className="progress-in" style={{width: '76%'}} />
                              <div className="skill-percent">76%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="education padd-15">
                        <h3 className="title">Education</h3>
                        <div className="row">
                          <div className="timeline-box padd-15">
                            <div className="timeline shadow-dark">
                              {/* ==== timeline item ==== */}
                              <div className="timeline-item">
                                <div className="circle-dot" />
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar" /> 2013 - 2015
                                </h3>
                                <h4 className="timeline-title">Master in Computer Science</h4>
                                <p className="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Porro sed doloribus fugiat id, minima maxime at voluptas, pariatur distinctio sit, molestias impedit non!</p>
                              </div>
                              {/* ==== timeline item ==== */}
                              <div className="timeline-item">
                                <div className="circle-dot" />
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar" /> 2013 - 2015
                                </h3>
                                <h4 className="timeline-title">Master in Computer Science</h4>
                                <p className="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Porro sed doloribus fugiat id, minima maxime at voluptas, pariatur distinctio sit, molestias impedit non!</p>
                              </div>
                              {/* ==== timeline item ==== */}
                              <div className="timeline-item">
                                <div className="circle-dot" />
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar" /> 2013 - 2015
                                </h3>
                                <h4 className="timeline-title">Master in Computer Science</h4>
                                <p className="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Porro sed doloribus fugiat id, minima maxime at voluptas, pariatur distinctio sit, molestias impedit non!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="experience padd-15">
                        <h3 className="title">Experience</h3>
                        <div className="row">
                          <div className="timeline-box padd-15">
                            <div className="timeline shadow-dark">
                              {/* ==== timeline item ==== */}
                              <div className="timeline-item">
                                <div className="circle-dot" />
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar" /> 2013 - 2015
                                </h3>
                                <h4 className="timeline-title">Master in Computer Science</h4>
                                <p className="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Porro sed doloribus fugiat id, minima maxime at voluptas, pariatur distinctio sit, molestias impedit non!</p>
                              </div>
                              {/* ==== timeline item ==== */}
                              <div className="timeline-item">
                                <div className="circle-dot" />
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar" /> 2013 - 2015
                                </h3>
                                <h4 className="timeline-title">Master in Computer Science</h4>
                                <p className="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Porro sed doloribus fugiat id, minima maxime at voluptas, pariatur distinctio sit, molestias impedit non!</p>
                              </div>
                              {/* ==== timeline item ==== */}
                              <div className="timeline-item">
                                <div className="circle-dot" />
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar" /> 2013 - 2015
                                </h3>
                                <h4 className="timeline-title">Master in Computer Science</h4>
                                <p className="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum. Porro sed doloribus fugiat id, minima maxime at voluptas, pariatur distinctio sit, molestias impedit non!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </section>
          );
        }

export default About