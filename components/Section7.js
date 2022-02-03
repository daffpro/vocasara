import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Section7 =() =>{
    
    return(
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
                    <a href="#galerie"className="gallery__link">
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
        )
    }
    
export default Section7;