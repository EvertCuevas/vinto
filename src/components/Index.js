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
                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span className="fab fa-skype"></span></a></li>
                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
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

                <a href="#nav-mobile" className="mobile-nav-toggler navbar-trigger"><span className="fa fa-bars"></span></a>
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
              <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon flaticon-charity"></span>
                  <h4>
                    <a href="/">Quality & Safety</a>
                  </h4>
                  <p>
                    Our Delmont hospital utilizes state of the art technology and
                    employs a team of true experts.
                  </p>
                </div>
              </div>

              {/* Feature Block */}
              <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon flaticon-lifeline"></span>
                  <h4>
                    <a href="/">Leading Technology</a>
                  </h4>
                  <p>
                    Our Delmont hospital utilizes state of the art technology and
                    employs a team of true experts.
                  </p>
                </div>
              </div>

              {/* Feature Block */}
              <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon flaticon-doctor"></span>
                  <h4>
                    <a href="/">Experts by Experience</a>
                  </h4>
                  <p>
                    Our Delmont hospital utilizes state of the art technology and
                    employs a team of true experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}

            

        {/* Clients Section */}
        <section className="clients-section">
        </section>
        {/* End Clients Section */}

        {/* Main Footer */}
        <footer className="main-footer">
        </footer>
        {/* End Main Footer */}

      </div>
    </Fragment>
    )
}

export default Index;
