import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Section7 =() =>{
    
    return(
        <div className='gallery-pad'>
            <div className="gallery">
                <div className="gallery__column">
                    <a href="https://unsplash.com/@marilezhava" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/slider4.jpeg" alt="Portrait by Mari Lezhava" className="gallery__image"/>
                            <figcaption className="gallery__caption">Equipes dynamiques</figcaption>
                        </figure>
                    </a>
                    <a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/slider5.jpeg" alt="Portrait by Oladimeji Odunsi" className="gallery__image" />
                            <figcaption className="gallery__caption">Spécialistes en énergie</figcaption>
                        </figure>
                    </a>
                </div>
                
                <div className="gallery__column">                    
                    <a href="https://unsplash.com/@von_co" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/slider3 (2).jpeg" alt="Portrait by Ivana Cajina" className="gallery__image"/>
                            <figcaption className="gallery__caption">Toujours plus proche de vous</figcaption>
                        </figure>
                    </a>
                    <a href="https://unsplash.com/@samburriss" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/silder10.jpeg" alt="Portrait by Sam Burriss" className="gallery__image"/>
                            <figcaption className="gallery__caption">Investis dans l'éducation</figcaption>
                        </figure>
                    </a>  
                </div>
                
                <div className="gallery__column">
                    <a href="https://unsplash.com/@marilezhava" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/slider9.jpeg" alt="Portrait by Mari Lezhava" className="gallery__image"/>
                            <figcaption className="gallery__caption">Couverture médiatique</figcaption>
                        </figure>
                    </a>
                    
                    <a href="https://unsplash.com/@samburriss" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/slider8.jpeg" alt="Portrait by Sam Burriss" className="gallery__image"/>
                            <figcaption className="gallery__caption">Dynamisme sur le terrain</figcaption>
                        </figure>
                    </a>
                    <a href="https://unsplash.com/@samburriss" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/drone-g4dcd1fa1d_1920.jpg" alt="Portrait by Sam Burriss" className="gallery__image"/>
                            <figcaption className="gallery__caption">Voler plus proche de vous</figcaption>
                        </figure>
                    </a>
                </div>
                
                <div className="gallery__column">
                    <a href="https://unsplash.com/@frxgui" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/slider2.jpeg" alt="Portrait by Guilian Fremaux" className="gallery__image"/>
                            <figcaption className="gallery__caption">Equipements de qualités</figcaption>
                        </figure>
                    </a>

                    <a href="https://unsplash.com/@majestical_jasmin" target="_blank" className="gallery__link">
                        <figure className="gallery__thumb">
                            <img src="/img/slider11.jpeg" alt="Portrait by Jasmin Chew" className="gallery__image"/>
                            <figcaption className="gallery__caption">Acharnement dans le travail</figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </div>
        // <div>       
        //     <Carousel>
        //         <Carousel.Item fade >
        //             <img
        //             className="d-block w-100"
        //             src="/img/slider2.jpeg"
        //             alt="First slide"
        //             />
        //             <Carousel.Caption>
        //                 <h3>First slide label</h3>
        //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //             className="d-block w-100"
        //             src="/img/slider3.jpeg"
        //             alt="First slide"
        //             />

        //             <Carousel.Caption>
        //             <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //             className="d-block w-100"
        //             src="/img/slider5.jpeg"
        //             alt="First slide"
        //             />

        //             <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>
        )
    }
    
export default Section7;