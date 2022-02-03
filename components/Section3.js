import React from 'react'
import useInView from "react-cool-inview";
const Section3 =() =>{
    return(
            <div>
                <div id="features-section" className="pad-sec">
                    <div className="container">
                        <div className="title-section text-center animated fadeInDownBig" >
                            <div className="row justify-content-center">
                            <div className="col-sm-8 col-sm-offset-2">
                                <h2 className='title-section-h2'>Nos domaines d'activités</h2>
                                <hr/>
                                <p className='title-section-p'>Specialisé dans l'énergie et l'iot.</p>
                            </div>
                            </div> 
                        </div> 
                        <div className="row">
                            <div className="col-md-3 without-padding">
                            <div className="left-features-services">
                                <ul className="features-list">
                               
                                {/* <li>
                                    <div className="left-features-box animated fadeInLeftBig" >
                                        <span className="iconbox"><i className="icon-mobile"></i></span>
                                        <div className="features-box-content">
                                            <h6>Conception de la GMAO </h6>
                                            <p>Gestion de la Maintenance Assisté par Ordinateur (GMAO).</p>
                                        </div> 
                                    </div> 
                                </li> */}
                                <li>
                                    <div className="left-features-box animated fadeInLeftBig">
                                    <span className="iconbox"><img src='/img/creation-de-sites-web.png'/></span>
                                    <div className="features-box-content">
                                        <h6>Web design</h6>
                                        <p>Développement d'applications web, robustes, maintenable, flexible.</p>
                                    </div>
                                    </div> 
                                </li>
                                <li>
                                    <div className="left-features-box animated fadeInLeftBig" >
                                    <span className="iconbox"><img src='/img/support-technique.png'/></span>
                                    <div className="features-box-content">
                                        <h6>Support</h6>
                                        <p>Equipes disponnibles 24h/24.</p> 
                                    </div> 
                                    </div>
                                </li>
                             
                                <li>
                                    <div className="left-features-box animated fadeInLeftBig" data-animation="" data-delay="0">
                                    <span className="iconbox"><img src='/img/electric-tower (1).png'/></span>
                                    <div className="features-box-content">
                                        <h6>Inspections et préventions</h6>
                                        <p>Inspections sur la production, dans le secteur de l'énergie.</p>
                                    </div>
                                    </div> 
                                </li>
                                </ul> 
                            </div> 
                            </div>

                            <div className="col-md-6">
                                <div className="features-image animated " >
                                    <img src="/img/woman.png" alt="" className='img-fluid'/>
                                </div> 
                            </div> 

                            <div className="col-md-3 without-padding">
                                <div className="right-features-services">
                                    <ul className="features-list">
                                
                                    {/* <li>
                                        <div className="right-features-box animated fadeInRightBig" >
                                        <span className="iconbox"><i className="icon-tools-2"></i></span>
                                        <div className="features-box-content">
                                            <h6>Inspections et préventions</h6>
                                            <p>Inspections sur la production, dans le secteur de l'énergie.</p>
                                        </div>
                                        </div>
                                    </li> */}
                                    
                                    <li>
                                        <div className="right-features-box animated fadeInRightBig">
                                        <span className="iconbox"><img src='/img/camera-de-videosurveillance.png'/></span>
                                        <div className="features-box-content">
                                            <h6>Sécurité</h6>
                                            <p>Installation vidéosurveillance et alarmes.</p>
                                        </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="right-features-box animated fadeInRightBig" >
                                        <span className="iconbox"><img src='/img/videography.png'/></span>
                                        <div className="features-box-content">
                                            <h6>Media</h6>
                                            <p>Accompagne dans la couverture de vos évenements, clips, promotions d'activités.</p>
                                        </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="right-features-box animated fadeInRightBig" >
                                            <span className="iconbox"><img src='/img/iot.png'/></span>
                                            <div className="features-box-content">
                                                <h6>Commercialisation de drones et équipements électriques </h6>
                                                <p>Ventes de produits électriques de qualités.</p>
                                            </div>
                                        </div>
                                    </li>
                                    </ul> 
                                </div>
                            </div> 

                        </div> 
                    </div> 
                </div>
                <section>
                    <div className="sep-section"></div>
                </section>
            </div>
        )
    }
    
    export default Section3;