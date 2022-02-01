import React from 'react'
import useInView from "react-cool-inview";
const Section3 =() =>{
    return(
            <div>
                <div id="features-section" class="pad-sec">
                    <div class="container">
                        <div class="title-section text-center animated fadeInDownBig" >
                            <div class="row justify-content-center">
                            <div class="col-sm-8 col-sm-offset-2">
                                <h2 className='title-section-h2'>Nos domaines d'actiités</h2>
                                <hr/>
                                <p className='title-section-p'>Specialisé dans l'énergie et l'iot.</p>
                            </div>
                            </div> 
                        </div> 
                        <div class="row">
                            <div class="col-md-3 without-padding">
                            <div class="left-features-services">
                                <ul class="features-list">
                               
                                {/* <li>
                                    <div class="left-features-box animated fadeInLeftBig" >
                                        <span class="iconbox"><i class="icon-mobile"></i></span>
                                        <div class="features-box-content">
                                            <h6>Conception de la GMAO </h6>
                                            <p>Gestion de la Maintenance Assisté par Ordinateur (GMAO).</p>
                                        </div> 
                                    </div> 
                                </li> */}
                                <li>
                                    <div class="left-features-box animated fadeInLeftBig">
                                    <span class="iconbox"><img src='/img/creation-de-sites-web.png'/></span>
                                    <div class="features-box-content">
                                        <h6>Web design</h6>
                                        <p>Développement d'applications web, robustes, maintenable, flexible.</p>
                                    </div>
                                    </div> 
                                </li>
                                <li>
                                    <div class="left-features-box animated fadeInLeftBig" >
                                    <span class="iconbox"><img src='/img/support-technique.png'/></span>
                                    <div class="features-box-content">
                                        <h6>Support</h6>
                                        <p>Equipes disponnibles 24h/24.</p> 
                                    </div> 
                                    </div>
                                </li>
                             
                                <li>
                                    <div class="left-features-box animated fadeInLeftBig" data-animation="" data-delay="0">
                                    <span class="iconbox"><img src='/img/electric-tower (1).png'/></span>
                                    <div class="features-box-content">
                                        <h6>Inspections et préventions</h6>
                                        <p>Inspections sur la production, dans le secteur de l'énergie.</p>
                                    </div>
                                    </div> 
                                </li>
                                </ul> 
                            </div> 
                            </div>

                            <div class="col-md-6">
                                <div class="features-image animated " >
                                    <img src="/img/woman.png" alt="" className='img-fluid'/>
                                </div> 
                            </div> 

                            <div class="col-md-3 without-padding">
                                <div class="right-features-services">
                                    <ul class="features-list">
                                
                                    {/* <li>
                                        <div class="right-features-box animated fadeInRightBig" >
                                        <span class="iconbox"><i class="icon-tools-2"></i></span>
                                        <div class="features-box-content">
                                            <h6>Inspections et préventions</h6>
                                            <p>Inspections sur la production, dans le secteur de l'énergie.</p>
                                        </div>
                                        </div>
                                    </li> */}
                                    
                                    <li>
                                        <div class="right-features-box animated fadeInRightBig">
                                        <span class="iconbox"><img src='/img/camera-de-videosurveillance.png'/></span>
                                        <div class="features-box-content">
                                            <h6>Sécurité</h6>
                                            <p>Installation vidéosurveillance et alarmes.</p>
                                        </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="right-features-box animated fadeInRightBig" >
                                        <span class="iconbox"><img src='/img/videography.png'/></span>
                                        <div class="features-box-content">
                                            <h6>Media</h6>
                                            <p>Accompagne dans la couverture de vos évenements, clips, promotions d'activités.</p>
                                        </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="right-features-box animated fadeInRightBig" >
                                            <span class="iconbox"><img src='/img/iot.png'/></span>
                                            <div class="features-box-content">
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
                    <div class="sep-section"></div>
                </section>
            </div>
        )
    }
    
    export default Section3;