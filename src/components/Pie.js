import React, { Fragment } from "react";

function Pie(){
    return(
        <Fragment>
        {/* Main Footer */}
        <footer className="main-footer">
        {/* Widgets Section*/}
        <div
          className="widgets-section"
          style={{ backgroundImage: "url(assets/images/resource/seleccionados/fondo25.png)" }}
        >
        <div className="auto-container">
          <div className="row">
            <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                {/* Footer Column */}
                <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget about-widget">
                    <div className="logo">
                                    <a href="/">
                                      <img src="assets/images/logo-2.png" alt="Logo"/>
                                    </a>
                                  </div>
                                  <div className="text">
                                    <p>
                                      Porque no solo son nuestros pacientes, son parte de nuestra familia!
                                    </p>
                                  </div>

                    <ul className="social-icon-three">
                      <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="/"><i className="fab fa-pinterest"></i></a></li>
                      <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="/"><i className="fab fa-skype"></i></a></li>
                      <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Column */}
                <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                </div>
              </div>
            </div>
            
            {/* Big Column*/}
            <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                {/* Footer Column*/}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget">
                    <h2 class="widget-title">Atajos</h2>
                    <ul class="user-links">
                        <li><a href="/">Centro de Hemodialisis</a></li>
                        <li><a href="/">Consultorio Diabetes</a></li>
                        <li><a href="/">Nuestros Servicios</a></li>
                        <li><a href="/">Especialidades</a></li>
                        <li><a href="/">Nosotros</a></li>
                        <li><a href="/">Trabaja con Nosotros</a></li>
                    </ul>
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
                  <a href="index.html">Power By @ECUES</a>
                </li>
              </ul>
            </div>

            <div className="copyright-text">
              <p>
                Copyright © 2025 <a href="/">Hospital Maria Esperanza</a> All Rights Reserved.
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
