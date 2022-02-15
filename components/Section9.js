import React from 'react';
import Link from 'next/link';

const Section9 =() =>{
    return(
        <div className="present" > 
            
            <section className="video  text-light">
                <div className="row">
                    <div className="col-md-6  partie-video-gauche">

                    </div>
                    <div className="col-md-6   partie-video-droite">
                        <div className="video-text container">
                            <div className="text-position">
                                <div className="video-title">
                                    <h2> Sécurisez en toute facilité</h2>                
                                </div>
                                <div className="video-p">
                                    <p>
                                    Choisir vocasara, c’est choisir un meilleur dispositif de surveillance et de control respectant les normes internationales. Nous donnons le meilleur de la vidéosurveillance pour assurer au mieux la sécurité de vos infrastructures.
                                </p>
                                </div>
                            </div>
                            <div className="button-go">
                            <Link href="/devis">
                                <button className="button-go-button"><p>A partir de 29 900 FCFA</p> &rarr;</button>
                            </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video2">
                <div className='row'>
                    <div className='col-12'>
                        <div className="overlay">
                        </div>
                        <div className="container video_container">
                            <div className="row ">
                                <div className="col-md-6 video2_gauche ">
                                    <div className="container">
                                        <div className="video2_title">
                                            <h2 >Innovation</h2>
                                        </div>
                                        <div className="video2_p">
                                            <p>La recherche et l’innovation sont au coeur de la stratégie de notre entreprise pour faciliter et emmener vos travaux dans une autre dimension.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 video2_droite "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
          
        </div>
       
    )
}

export default Section9;