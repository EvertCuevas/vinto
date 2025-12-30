import React, { Fragment } from "react";

function Emergencia(){
    return(
        <Fragment>
        <section className="fun-fact-section-two">
            <div className="auto-container">
                <div className="row">
                {/* Column */}
                <div className="counter-column col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="count-box">
                    <div className="icon-box">
                        <span className="icon flaticon-transport" style={{ color:"white" }}></span>
                    </div>
                    <h4 className="counter-title">Servicio de Emergencias, nuestras lineas disponible:</h4>
                    
                    </div>
                </div>
                {/* Column */}
                <div className="counter-column col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="count-box">
                    
                    <span
                        className="count-text"
                        data-speed="3000"
                        data-stop="25"
                        style={{ color:"white" }}
                    >
                        EMERGENCIAS
                    </span>
                    <br></br>
                    <h4 className="counter-title"   style={{ color:"#254993", fontSize:"30px" }}>(+591) 7845698</h4>
                    <h4 className="counter-title"   style={{ color:"#254993", fontSize:"30px" }}>(+591) 7845698</h4>
                    </div>
                </div>
                {/* Column */}
                <div
                    className="counter-column col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                    data-wow-delay="800ms"
                >
                    <img src="assets/images/ambulancia-2.png" alt="Logo"/>
                </div>
                </div>
            </div>
        </section>

    </Fragment>
    )
}

export default Emergencia;
