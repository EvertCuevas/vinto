import React, { Fragment } from "react";

function Pie(){
    return(
        <Fragment>
                        
            


        {/* Main Footer */}
        <footer className="main-footer">
        {/* Widgets Section*/}
        <div
          className="widgets-section"
          style={{ backgroundImage: "url(assets/images/background/7.jpg)" }}
        >



          <div className="auto-container">
            <div className="row">
              <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className="row">



                  {/* Footer Column*/}
                  <div >
                    <div className="footer-widget about-widget">
                      <div className="logo">
                          <img src="assets/images/resource/image-3.png" alt="logo" />
                        
                      </div>
                      <ul className="social-icon-three">
                        <li>
                          <a href="/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-skype"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>



                  

                  
                </div>
              </div>
              {/* Big Column*/}
              <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                  {/* Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget recent-posts">
                      <h2 className="widget-title">Latest News</h2>
                      <div className="widget-content">
                        <div className="post">
                          <div className="thumb">
                            <a href="blog-post-image.html">
                              <img src="assets/images/resource/post-thumb-1.jpg" alt="" />
                            </a>
                          </div>
                          <h4>
                            <a href="blog-post-image.html">
                              Integrative Medicine <br /> & Cancer Treatment.
                            </a>
                          </h4>
                          <span className="date">July 11, 2020</span>
                        </div>

                        <div className="post">
                          <div className="thumb">
                            <a href="blog-post-image.html">
                              <img src="assets/images/resource/post-thumb-2.jpg" alt="" />
                            </a>
                          </div>
                          <h4>
                            <a href="blog-post-image.html">
                              Achieving Better <br /> Health Care Time.
                            </a>
                          </h4>
                          <span className="date">August 1, 2020</span>
                        </div>

                        <div className="post">
                          <div className="thumb">
                            <a href="blog-post-image.html">
                              <img src="assets/images/resource/post-thumb-3.jpg" alt="" />
                            </a>
                          </div>
                          <h4>
                            <a href="blog-post-image.html">
                              Great Health Care <br /> For Patients.
                            </a>
                          </h4>
                          <span className="date">August 1, 2020</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contact-widget">
                      <h2 className="widget-title">Contactanos</h2>
                      <div className="widget-content">
                        <ul className="contact-list">
                          <li>
                            <span className="icon flaticon-placeholder"></span>
                            <div className="text">
                              Km. 17 Av. Villazon <br /> Curubamba
                            </div>
                          </li>

                          <li>
                            <span className="icon flaticon-call-1"></span>
                            <div className="text">Lunes a Viernes : 24 Hrs.</div>
                            <a href="tel:+5917968585">
                              <strong>+591 76090905</strong>
                            </a>
                          </li>

                          <li>
                            <span className="icon flaticon-email"></span>
                            <div className="text">
                              Tienes dudas y/o preguntas?
                              <br />
                              <a href="mailto:info@gmail.com">
                                <strong>recepción@hospmariaesperanza.com</strong>
                              </a>
                            </div>
                          </li>

                          <li>
                            <span className="icon flaticon-back-in-time"></span>
                            <div className="text">
                              Atención Continua
                              <br />
                              <strong>24/7</strong>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
















        </div>


        

























        {/* Footer Bottom*/}
        <div className="footer-bottom">
          <div
            className="scroll-to-top scroll-to-target"
            data-target="html"
          >
            <span className="fa fa-angle-up"></span>
          </div>

          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="footer-nav">
                <ul className="clearfix">
                  <li>
                    <a href="index.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about-us.html">Contact</a>
                  </li>
                  <li>
                    <a href="services.html">Supplier</a>
                  </li>
                </ul>
              </div>

              <div className="copyright-text">
                <p>
                  Copyright © 2025 <a href="/">Hospital aria Esperanza</a> All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
    )
}

export default Pie;
