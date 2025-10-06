import React, { Fragment } from "react";

function Index(){
    return(
        <Fragment>
      <div className="page-wrapper">


        



      
        
        {/* Main Header */}
        <header className="main-header header-style-one">

          {/* Header top */}
          <div className="header-top">
            <div className="auto-container">
              <div className="inner-container">
                <div className="top-left">
                  <ul className="contact-list clearfix">
                    <li><i className="flaticon-hospital-1"></i>Av. Villazon Km. 3 1/2, c/Alamos y Progreso</li>
                    <li><i className="flaticon-phone"></i>4219185 - 76925865</li>
                  </ul>
                </div>
                <div className="top-right">
                  <ul className="social-icon-one">
                    <li><a href="/"><span className="fab fa-facebook-f"></span></a></li>
                    <li><a href="/"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="/"><span className="fab fa-skype"></span></a></li>
                    <li><a href="/"><span className="fab fa-linkedin-in"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End Header Top */}
          
          {/* Header Lower */}
          <div className="header-lower">
            <div className="auto-container">    
              {/* Main box */}
              <div className="main-box">
                <div className="logo-box">
                  <div className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title=""/></a></div>
                </div>

                {/* Nav Box */}
                <div className="nav-outer">
                  <nav className="nav main-menu">
                    <ul className="navigation" id="navbar">
                      <li className="current">
                        <span>INICIO</span>
                        {/* <ul>
                          <li className="current"><a href="index.html">Inicio</a></li>
                          <li><a href="index-2.html">Home Clanic</a></li>
                          <li><a href="index-3.html">Home Dental Care</a></li>
                          <li><a href="index-4.html">Home Eye Care</a></li>
                          <li><a href="index-5.html">Home Prenatal care</a></li>
                        </ul> */}
                      </li>

                      <li className="dropdown">
                        <span>NOSOTROS</span>
                        <ul>
                          <li><a href="about-us.html">Nosotros</a></li>
                          <li><a href="services.html">Historia</a></li>
                          <li><a href="services.html">Directorio</a></li>
                          <li><a href="pricing-table.html">Centros Médicos</a></li>
                          <li><a href="elements.html">UI Elements</a></li>
                          <li><a href="coming-soon.html">Coming Soon</a></li>
                          <li><a href="error-page.html">Error 404</a></li>
                          <li><a href="terms-and-condition.html">Terms and Condition</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <span>ESPECIALIDADES</span>
                        <ul>
                          <li><a href="doctors.html">Doctores</a></li>
                          <li><a href="doctor-detail.html">Doctor Detail</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <span>SERVICIOS</span>
                        <ul>
                          <li><a href="departments.html">Servicios</a></li>
                          <li><a href="department-detail.html">Cardiology</a></li>
                          <li><a href="department-detail.html">Neurology</a></li>
                          <li><a href="department-detail.html">Urology</a></li>
                          <li><a href="department-detail.html">Gynecological</a></li>
                          <li><a href="department-detail.html">Pediatrical</a></li>
                          <li><a href="department-detail.html">Laboratory</a></li>
                          <li><a href="department-detail.html">Department Detail</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <span>NOTICIAS</span>
                        <ul>
                          <li><a href="blog-standard.html">Standard</a></li>
                          <li><a href="blog-checkboard.html">Checkerboard</a></li>
                          <li><a href="blog-masonry.html">Masonry</a></li>
                          <li><a href="blog-two-col.html">Two Columns</a></li>
                          <li><a href="blog-three-col.html">Three Colums</a></li>
                          <li><a href="blog-four-col-wide.html">Four Colums</a></li>
                          <li className="dropdown">
                            <span>Post Types</span>
                            <ul>
                              <li><a href="blog-post-image.html">Image Post</a></li>
                              <li><a href="blog-post-gallery.html">Gallery Post</a></li>
                              <li><a href="blog-post-link.html">Link Post</a></li>
                              <li><a href="blog-post-audio.html">Audio Post</a></li>
                              <li><a href="blog-post-quote.html">Quote Post</a></li>
                              <li><a href="blog-post-video.html">Video Post</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <span>CONTACTO</span>
                        <ul>
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="shop-single.html">Shop Single</a></li>
                          <li><a href="shopping-cart.html">Shopping Cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="login.html">Login</a></li>
                        </ul>
                      </li>

                      <li><a href="contact.html">ENLACES</a></li>
                    </ul>
                  </nav>
                  {/* Main Menu End */}

                  <div className="outer-box">
                    {/* <button className="search-btn"><span className="fa fa-search"></span></button> */}
                    <a href="appointment.html" id="appointment-btn" className="theme-btn btn-style-one">
                      <span className="btn-title">Cita Médica</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Header */}
          <div className="sticky-header">
            <div className="auto-container">
              <div className="main-box">
                <div className="logo-box">
                  <div className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title=""/></a></div>
                </div>

                <div className="nav-outer">
                  <nav className="nav main-menu">
                    <ul className="navigation" id="navbar">
                      <li className="current">
                        <span>INICIO</span>
                        {/* <ul>
                          <li className="current"><a href="index.html">Inicio</a></li>
                          <li><a href="index-2.html">Home Clanic</a></li>
                          <li><a href="index-3.html">Home Dental Care</a></li>
                          <li><a href="index-4.html">Home Eye Care</a></li>
                          <li><a href="index-5.html">Home Prenatal care</a></li>
                        </ul> */}
                      </li>

                      <li className="dropdown">
                        <span>NOSOTROS</span>
                        <ul>
                          <li><a href="about-us.html">Nosotros</a></li>
                          <li><a href="services.html">Historia</a></li>
                          <li><a href="services.html">Directorio</a></li>
                          <li><a href="pricing-table.html">Centros Médicos</a></li>
                          <li><a href="elements.html">UI Elements</a></li>
                          <li><a href="coming-soon.html">Coming Soon</a></li>
                          <li><a href="error-page.html">Error 404</a></li>
                          <li><a href="terms-and-condition.html">Terms and Condition</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <span>ESPECIALIDADES</span>
                        <ul>
                          <li><a href="doctors.html">Doctores</a></li>
                          <li><a href="doctor-detail.html">Doctor Detail</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <span>SERVICIOS</span>
                        <ul>
                          <li><a href="departments.html">Servicios</a></li>
                          <li><a href="department-detail.html">Cardiology</a></li>
                          <li><a href="department-detail.html">Neurology</a></li>
                          <li><a href="department-detail.html">Urology</a></li>
                          <li><a href="department-detail.html">Gynecological</a></li>
                          <li><a href="department-detail.html">Pediatrical</a></li>
                          <li><a href="department-detail.html">Laboratory</a></li>
                          <li><a href="department-detail.html">Department Detail</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <span>NOTICIAS</span>
                        <ul>
                          <li><a href="blog-standard.html">Standard</a></li>
                          <li><a href="blog-checkboard.html">Checkerboard</a></li>
                          <li><a href="blog-masonry.html">Masonry</a></li>
                          <li><a href="blog-two-col.html">Two Columns</a></li>
                          <li><a href="blog-three-col.html">Three Colums</a></li>
                          <li><a href="blog-four-col-wide.html">Four Colums</a></li>
                          <li className="dropdown">
                            <span>Post Types</span>
                            <ul>
                              <li><a href="blog-post-image.html">Image Post</a></li>
                              <li><a href="blog-post-gallery.html">Gallery Post</a></li>
                              <li><a href="blog-post-link.html">Link Post</a></li>
                              <li><a href="blog-post-audio.html">Audio Post</a></li>
                              <li><a href="blog-post-quote.html">Quote Post</a></li>
                              <li><a href="blog-post-video.html">Video Post</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <span>CONTACTO</span>
                        <ul>
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="shop-single.html">Shop Single</a></li>
                          <li><a href="shopping-cart.html">Shopping Cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="login.html">Login</a></li>
                        </ul>
                      </li>

                      <li><a href="contact.html">ENLACES</a></li>
                    </ul>
                  </nav>
                  {/* Main Menu End */}

                  <div className="outer-box">
                    {/* <button className="search-btn"><span className="fa fa-search"></span></button> */}
                    <a href="appointment.html" id="appointment-btn" className="theme-btn btn-style-one">
                      <span className="btn-title">Cita Médica</span>
                    </a>
                  </div>
                </div>





                {/* Keep This Empty / Menu will come through Javascript */}
              </div>
            </div>
          </div>
          {/* End Sticky Menu */}

          {/* Mobile Header */}
          <div className="mobile-header">
            <div className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title=""/></a></div>

            {/* Nav Box */}
            <div className="nav-outer clearfix">
              <div className="outer-box">
                {/* Search Btn */}
                {/* <div className="search-box">
                  <button className="search-btn mobile-search-btn"><i className="flaticon-magnifying-glass"></i></button>
                </div> */}

                <a href="/nav-mobile" className="mobile-nav-toggler navbar-trigger"><span className="fa fa-bars"></span></a>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <div id="nav-mobile"></div>

          {/* Header Search */}
          {/* <div className="search-popup">
            <span className="search-back-drop"></span>
            <button className="close-search"><span className="fa fa-times"></span></button>
            
            <div className="search-inner">
              <form method="post" action="blog-showcase.html">
                <div className="form-group">
                  <input type="search" name="search-field" defaultValue="" placeholder="Search..." required />
                  <button type="submit"><i className="flaticon-magnifying-glass"></i></button>
                </div>
              </form>
            </div>
          </div> */}
          {/* End Header Search */}

        </header>
        {/* Bnner Section One */}
        <section className="banner-section-one">
          <div className="swiper banner-swiper">
            <div className="swiper-wrapper">

              {/* Slide Item 1 */}
              <div className="slide-item swiper-slide">
                <div
                  className="bg bg-image"
                  style={{ backgroundImage: "url(assets/images/main-slider/1.jpg)" }}
                ></div>
                <div className="auto-container">
                  <div className="content-outer">
                    <div className="content-box">
                      <span className="title animate-2">
                        Welcome to our Medical Care Center
                      </span>
                      <h2 className="animate-3">
                        We take care our <br /> patients health
                      </h2>
                      <div className="text animate-4">
                        I realized that becoming a doctor, I can only help a small
                        community. <br /> But by becoming a doctor, I can help my
                        whole country.
                      </div>
                      <div className="btn-box animate-5">
                        <a href="about-us.html" className="theme-btn btn-style-one">
                          <span className="btn-title">About Us</span>
                        </a>
                        <a href="departments.html" className="theme-btn btn-style-two">
                          <span className="btn-title">Our Services</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Item 2 */}
              <div className="slide-item swiper-slide">
                <div className="bg bg-image" style={{ backgroundImage: "url(assets/images/main-slider/2.jpg)" }}></div>
                <div className="auto-container">
                  <div className="content-outer">
                    <div className="content-box">
                      <span className="title animate-2">
                        Welcome to our Medical Care Center
                      </span>
                      <h2 className="animate-3">
                        We take care our <br /> patients health
                      </h2>
                      <div className="text animate-4">
                        I realized that becoming a doctor, I can only help a small
                        community. <br /> But by becoming a doctor, I can help my
                        whole country.
                      </div>
                      <div className="btn-box animate-5">
                        <a href="about-us.html" className="theme-btn btn-style-one">
                          <span className="btn-title">About Us</span>
                        </a>
                        <a href="departments.html" className="theme-btn btn-style-two">
                          <span className="btn-title">Our Services</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="default-btn">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </section>
        {/* Top Features */}
        <section className="top-features">
          <div className="auto-container">
            <div className="row">
              
              {/* Feature Block */}
              <div className="feature-block col-lg-2 col-md-6 col-sm-12">
              </div>
              <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon flaticon-charity"></span>
                  <h4>
                    <a href="/">SERVICIOS</a>
                  </h4>
                </div>
              </div>

              {/* Feature Block */}
              <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon flaticon-lifeline"></span>
                  <h4>
                    <a href="/">INSTALACIONES</a>
                  </h4>
                </div>
              </div>

              {/* Feature Block */}
              <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon flaticon-doctor"></span>
                  <h4>
                    <a href="/">EXPERIENCIA</a>
                  </h4>
                </div>
              </div>
              <div className="feature-block col-lg-2 col-md-6 col-sm-12">
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}
            {/* About Section */}
            <section class="about-section">
                <div class="auto-container">
                    <div class="row">

                        {/* Content Column */}
                        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <h2 class="text-reveal-anim"><br/> SOBRE NOSOTROS <br/></h2>
                                    <span class="sub-title">A su servicio...</span>
                                    <span class="divider"></span>
                                    <p>El Hospital MARIA ESPERANZA fue fundado el 8 de diciembre del 2016, iniciando con el centro de hemodiálisis. Este año 2020 implementamos más áreas.</p>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                                </div>
                                <div class="link-box">
                                    <figure class="signature"><img src="assets/images/resource/signature.png" alt=""/></figure>
                                    <a href="/" class="theme-btn btn-style-one"><span class="btn-title">More About</span></a>
                                </div>
                            </div>
                        </div>

                        {/* Images Column */}
                        <div class="images-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="video-link">
                                    <a href="https://www.youtube.com/watch?v=4UvS3k8D4rs" class="play-btn lightbox-image" data-fancybox="images"><span class="flaticon-play-button-1"></span></a>
                                </div>
                                <figure class="image-1"><img src="assets/images/resource/image-1.png" alt=""/></figure>
                                <figure class="image-2"><img src="assets/images/resource/image-2.png" alt=""/></figure>
                                <figure class="image-3">
                                    <span class="hex"></span>
                                    <img src="assets/images/resource/image-3.png" alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="services-section">
              <div className="auto-container">
                <div className="sec-title text-center">
                  <h2 className="text-reveal-anim">NUESTROS SERVICIOS</h2>
                  <span className="sub-title">Contamos con áreas de atención</span>
                  <span className="divider"></span>
                </div>

                <div className="row">
                  {/* Service Block */}
                  <div className="service-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <span className="icon flaticon-lab"></span>
                      <h5><a href="/">Laboratorio</a></h5>
                      <div className="text">
                        Servicio de Estudios profesionales.
                      </div>
                    </div>
                  </div>

                  {/* Service Block */}
                  <div className="service-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <span className="icon flaticon-transport"></span>
                      <h5><a href="/">Servicios de Emergencia</a></h5>
                      <div className="text">
                        Servicio de Emergencia con respuesta inmediata a su servicio.
                      </div>
                    </div>
                  </div>

                  {/* Service Block */}
                  <div className="service-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <span className="icon flaticon-heartbeat"></span>
                      <h5><a href="/">Medicina Interna</a></h5>
                      <div className="text">
                        Evaluación y diagnostico por profesionales.
                      </div>
                    </div>
                  </div>

                  {/* Service Block */}
                  <div className="service-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <span className="icon flaticon-pharmacy"></span>
                      <h5><a href="/">Farmacia</a></h5>
                      <div className="text">
                        Servicio de dispensación de medicamentos para su bienestar.
                      </div>
                    </div>
                  </div>

                  {/* Service Block */}
                  <div className="service-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <span className="icon flaticon-first-aid"></span>
                      <h5><a href="/">Imagen</a></h5>
                      <div className="text">
                        Servicios de Imagenologia con equipos y profecionales capacitados.
                      </div>
                    </div>
                  </div>

                  {/* Service Block */}
                  <div className="service-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <span className="icon flaticon-surgery-room"></span>
                      <h5><a href="/">Medicina Preventiva</a></h5>
                      <div className="text">
                        Al cuidado de su salud.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


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

        {/* End Main Footer */}

      </div>
    </Fragment>
    )
}

export default Index;
