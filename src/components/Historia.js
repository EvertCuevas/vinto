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
                  Hospital Maria Esperanza<br />
                </h2>
                <h5 className="text-reveal-anim">
                  Un sueño que comenzó con un latido de Esperanza
                </h5>

                <span className="divider"></span>
                <p>                  
                  El 8 de diciembre de 2016, Nació el Centro de Hemodiálisis María Esperanza. Con el objetivo de brindar la mejor atención a nuestros pacientes con insuficiencia renal crónica.
                  De igual forma en la zona de Curubamba Centro, Sacaba, Se inicio con el proyecto Esperanza, lo que hoy es un hospital que comenzó siendo un sueño
                  pequeño pero profundamente humano, con el sentimiento de devolver esperanza y calidad de vida a pacientes, donde sembramos la semilla de un sueño más grande.
                  Y es un dia 02 de febrero de 2026 que abrimos puertas pero no solo inauguramos un servicio médico, mas por el contrario brindamos esperanza.
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
                  src="assets/images/resource/seleccionados/Doc2.png"
                  alt="Medical Care"
                />
              </figure>

              <figure className="image-2">
                <img
                  src="assets/images/resource/seleccionados/Doc.png"
                  alt="Medical Team"
                />
              </figure>

              <figure className="image-3">
                <span className="hex"></span>
                <img
                  src="assets/images/resource/seleccionados/Enfermeras.png"
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
