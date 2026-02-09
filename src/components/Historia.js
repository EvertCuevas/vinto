import React, { Fragment } from "react";

function Historia(){
    return(
    <Fragment>

    <section className="about-section">
      <div className="auto-container">
        <div className="row">

          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
            <div className="inner-column">
              <div className="sec-title">

                <h2 className="text-reveal-anim">
                  Un poco de Nuestra Historia <br />
                  Hospital Maria Esperanza.
                </h2>

                <span className="divider"></span>

                <p>
                  Fecha de fundación
                </p>
                <p>
                  Diciembre 8 del 2016
                </p>
                <p>                  
                  Iniciamos con el Centro de Hemodiálisis, pero este año implementamos más áreas como Neumología, 
                  Medicina del Sueno, Medicina Interna, Laboratorios y muy pronto iniciaremos con Imagenología y Farmacia.
                  Estamos en proceso de adquisición de equipos de última tecnología para el área de imagenología.
                </p>
              </div>
            </div>
          </div>

          {/* Images Column */}
          <div className="images-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">

              <div className="video-link">
                <a
                  href="https://www.youtube.com/watch?v=1uhMg24dVfE"
                  className="play-btn lightbox-image"
                  data-fancybox="images"
                >
                  <span className="flaticon-play-button-1"></span>
                </a>
              </div>

              <figure className="image-1">
                <img
                  src="assets/images/resource/image-1.png"
                  alt="Medical Care"
                />
              </figure>

              <figure className="image-2">
                <img
                  src="assets/images/resource/image-2.png"
                  alt="Medical Team"
                />
              </figure>

              <figure className="image-3">
                <span className="hex"></span>
                <img
                  src="assets/images/resource/image-3.png"
                  alt="Hospital"
                />
              </figure>

            </div>
          </div>

        </div>
      </div>
    </section>
    </Fragment>
    )
}

export default Historia;
