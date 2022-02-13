import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Section7 =() =>{
    
    return(
        <div className='activites'>
            <div className='row justify-content-center'>
                <div className='col-md-6  gauche-img'>
                    <div className='gallery-pad' id="galerie">
                        <div className="gallery">
                            <div className="gallery__column">
                                <a href="#galerie" className="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img src="/img/slider4.jpeg" alt="Portrait by Mari Lezhava" className="gallery__image"/>
                                        <figcaption className="gallery__caption">Equipes dynamiques</figcaption>
                                    </figure>
                                </a>
                            
                                    <a href="#galerie" className="gallery__link">
                                        <figure className="gallery__thumb">
                                            <img src="/img/slider5.jpeg" alt="Portrait by Oladimeji Odunsi" className="gallery__image" />
                                            <figcaption className="gallery__caption">Spécialistes en énergie</figcaption>
                                        </figure>
                                    </a>
                            
                            </div>
                            
                            <div className="gallery__column">                    
                                <a href="#galerie"classNameName="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img src="/img/slider3 (2).jpeg" alt="Portrait by Ivana Cajina" className="gallery__image"/>
                                        <figcaption className="gallery__caption">Toujours plus proche de vous</figcaption>
                                    </figure>
                                </a>
                                <a href="#galerie"  className="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img src="/img/silder10.jpeg" alt="Portrait by Sam Burriss" className="gallery__image"/>
                                        <figcaption className="gallery__caption">Investis dans l'éducation</figcaption>
                                    </figure>
                                </a>  
                            </div>
                            
                            <div className="gallery__column">
                                <a href="#galerie" className="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img src="/img/slider9.jpeg" alt="Portrait by Mari Lezhava" className="gallery__image"/>
                                        <figcaption className="gallery__caption">Couverture médiatique</figcaption>
                                    </figure>
                                </a>
                                
                                <a href="#galerie" className="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img src="/img/slider8.jpeg" alt="Portrait by Sam Burriss" className="gallery__image"/>
                                        <figcaption className="gallery__caption">Dynamisme sur le terrain</figcaption>
                                    </figure>
                                </a>
                                <a href="#galerie"  className="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img src="/img/drone-g4dcd1fa1d_1920.jpg" alt="Portrait by Sam Burriss" className="gallery__image"/>
                                        <figcaption className="gallery__caption">Voler plus proche de vous</figcaption>
                                    </figure>
                                </a>
                            </div>
                            
                            <div className="gallery__column">
                                <a href="#galerie"  className="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img src="/img/slider2.jpeg" alt="Portrait by Guilian Fremaux" className="gallery__image"/>
                                        <figcaption className="gallery__caption">Equipements de qualités</figcaption>
                                    </figure>
                                </a>

                                <a href="#galerie"  className="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img src="/img/slider11.jpeg" alt="Portrait by Jasmin Chew" className="gallery__image"/>
                                        <figcaption className="gallery__caption">Acharnement dans le travail</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 droite-img'>
                    <div className='pt-5 droite-img-b'>
                        <h2 className='h2-pass'>
                            Passez à l'iot !
                        </h2>
                        <p className='p-pass'>
                         Grâce à des outils modernes de qualités, nous entrons dans une ére nouvelle. Toujours proches ds populations, nous tenons à faire participer 
                         l'ensemble des acteurs dans nos missions pour mettre au service du public notre savoir faire.
                         <br/> Nous rentrons également dans la formation et l'éducation des jeunes, sur les technologies dit d'avenir pour leur permettre de rentrer dans l'ére du temps et ainsi entrapercevoir un futur radieux.
                        </p>
                    </div>
                </div>
                <div className='col-md-12 part-4'>

                </div>
                <div className='col-md-12 part-3'>
                    <section id="team" className="pb-5">
                        <div className="container">
                            {/* <h2 className="section-title ">Nos domaines d'activités</h2> */}
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" >
                                        <div className="mainflip flip-0">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src="/img/creation-de-sites-web.png" alt="card image" /></p>
                                                        <h4 className="card-title">Web design</h4>
                                                        <p className="card-text">Développement d'applications web, robustes, maintenable, flexible.</p>
                                                        <a  className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Web design</h4>
                                                        <p className="card-text">Nous vous accompagnons dans la conception et la réalisation de sites web/ plateforme pour vos activités</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src="/img/camera-de-videosurveillance.png" alt="card image"/></p>
                                                        <h4 className="card-title">Sécurité</h4>
                                                        <p className="card-text">Installation vidéosurveillance et alarmes.</p>
                                                        <a  className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Sécurité</h4>
                                                        <p className="card-text">Installation vidéosurveillance et alarmes à un prix reduis pour vous permettre d'assurer la sécurité de vos insfrastructures 24/7</p>                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src="/img/videography.png" alt="card image"/></p>
                                                        <h4 className="card-title">Media</h4>
                                                        <p className="card-text">Accompagne dans la couverture de vos évenements, clips, promotions d'activités.</p>
                                                        <a  className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Media</h4>
                                                        <p className="card-text">Nous vous accompagnons dans la réalisation de vos activités media en mettant à votre disposition nos drones et aparreils photos de derniére génération.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src="/img/iot.png" alt="card image"/></p>
                                                        <h4 className="card-title">Ventes d'équipements</h4>
                                                        <p className="card-text">Commercialisation de drones et équipements électriques </p>
                                                        <a  className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Ventes d'équipements</h4>
                                                        <p className="card-text">Commercialisation de drones et équipements électriques.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src="/img/electric-tower (1).png" alt="card image"/></p>
                                                        <h4 className="card-title">Inspections et préventions</h4>
                                                        <p className="card-text">Inspections sur la production, dans le secteur de l'énergie.</p>
                                                        <a  className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Inspections et préventions</h4>
                                                        <p className="card-text">Réalisation de travaux d'inspections de domaines énergetique, recensement, maintenance préventive et curative.</p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                                    <i className="fa fa-skype"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg" alt="card image"/></p>
                                                        <h4 className="card-title">Sunlimetech</h4>
                                                        <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                                        <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Sunlimetech</h4>
                                                        <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                                    <i className="fa fa-skype"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                        

                            </div>
                        </div>
                    </section>
                </div>
                <div className='col-md-12 part-5 pt-5'>
                    <h4 className='text-center'>Commander votre devis à tout moment !</h4>
                </div>
                
            </div>
        </div>

        )
    }
    
export default Section7;