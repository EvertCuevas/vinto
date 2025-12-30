// components/Carrusel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Carrusel() {
  return (
    <>
      {/* BANNER */}
      <section className="banner-section-one">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 8000 }}
          className="banner-swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide-item">
              <div
                className="bg bg-image"
                style={{ backgroundImage: "url(/assets/images/main-slider/1.jpg)" }}
              />
              <div className="auto-container">
                <div className="content-outer">
                  <div className="content-box">
                    <span className="title animate-2">
                      Bienvenidos a tu Hospital donde:
                    </span>
                    <h2 className="animate-4">
                      La Salud que mereces se construye con ESFUERZO Y ESPERANZA.
                    </h2>
                    <div className="text animate-4">
                     La excelencia es Nuestra Misión. 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide-item">
              <div
                className="bg bg-image"
                style={{ backgroundImage: "url(/assets/images/main-slider/2.jpg)" }}
              />
              <div className="auto-container">
                <div className="content-outer">
                  <div className="content-box">
                    <span className="title animate-2">
                      Lo que nos Caracteriza:
                    </span>
                    <h2 className="animate-4">
                      Atención con CALIDEZ HUMANA.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* FEATURES */}
      <section className="top-features">
        <div className="auto-container">
          <div className="row">
            <div className="feature-block col-lg-2 col-md-6 col-sm-12" />

            <div className="feature-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <span className="icon flaticon-charity" />
                <h4><a href="/">SERVICIOS</a></h4>
              </div>
            </div>

            <div className="feature-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <span className="icon flaticon-lifeline" />
                <h4><a href="/">INSTALACIONES</a></h4>
              </div>
            </div>

            <div className="feature-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <span className="icon flaticon-doctor" />
                <h4><a href="/">EXPERIENCIA</a></h4>
              </div>
            </div>    
          </div>
        </div>
      </section>
    </>
  );
}

export default Carrusel;
