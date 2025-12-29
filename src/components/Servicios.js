import React, { Fragment } from "react";

function Servicios(){
    return(
    <Fragment>
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
      
    </Fragment>
    )
}

export default Servicios;
