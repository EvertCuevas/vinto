// components/BannerSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// CORRECCIÓN: Importar de 'swiper/modules' no de 'swiper'
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function BannerSwiper() {
  return (
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
                    <a href="/about-us" className="theme-btn btn-style-one">
                      <span className="btn-title">About Us</span>
                    </a>
                    <a href="/departments" className="theme-btn btn-style-two">
                      <span className="btn-title">Our Services</span>
                    </a>
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
                    <a href="/about-us" className="theme-btn btn-style-one">
                      <span className="btn-title">About Us</span>
                    </a>
                    <a href="/departments" className="theme-btn btn-style-two">
                      <span className="btn-title">Our Services</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default BannerSwiper;