import React, { Fragment } from "react";

function Testimonio(){
    return(
    <Fragment>
    <section className="testimonial-section">
      <div className="auto-container">

        {/* Sec Title */}
        <div className="sec-title text-center">
          <span className="title">Historias de Vida</span>
          <h2 className="text-reveal-anim">Testimonio de Nuestros Pacientes</h2>
          <span className="divider"></span>
        </div>

        <div className="testimonial-outer">

          {/* Client Testimonial Carousel */}
          <div className="swiper testi-content-swiper">
            <div className="swiper-wrapper">

              {[...Array(6)].map((_, index) => (
                <div className="testimonial-block swiper-slide" key={index}>
                  <div className="inner-box">
                    <div className="text">
                      ¨Me siento muy bien, los doctores y las enfermeras son muy amables, siempre están atentos a lo que necesitamos¨
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="client-thumb-outer">
            <div className="swiper testi-thumbs-swiper">
              <div className="swiper-wrapper">

                {[
                  "testi-thumb-1.jpg",
                  "testi-thumb-2.jpg",
                  "testi-thumb-3.jpg",
                  "testi-thumb-1.jpg",
                  "testi-thumb-2.jpg",
                  "testi-thumb-3.jpg",
                ].map((img, index) => (
                  <div className="thumb-item swiper-slide" key={index}>
                    <figure className="thumb-box">
                      <img
                        src={`assets/images/resource/${img}`}
                        alt="Testimonial"
                      />
                    </figure>
                    <div className="author-info">
                      <span className="icon fa fa-quote-left"></span>
                      <div className="author-name">Lara Croft</div>
                      <div className="designation">Restaurant Owner</div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

        </div>
      </div>
    </section>

    </Fragment>
    )
}

export default Testimonio;
