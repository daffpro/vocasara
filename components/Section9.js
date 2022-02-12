import React from 'react'


const Section9 =() =>{
    return(
        <div className="present" >  
            <section className="video  text-light">
                <div className="row">
                    <div className="col-md-6 col-sm-12 partie-video-gauche">

                    </div>
                    <div className="col-md-6 col-sm-12  partie-video-droite">
                        <div className="video-text container">
                            <div className="text-position">
                                <div className="video-title">
                                    <h2> Découvrez toute notre offre de formation</h2>                
                                </div>
                                <div className="video-p">
                                    <p>
                                    Choisir l’ESP, c’est intégrer un établissement pluridisciplinaire de renommée mondiale, donner le meilleur de soi-même pour suivre une formation de haut niveau, et rejoindre une communauté de plus de 20 617 étudiantes et étudiants, et 30 000 alumni dans le monde entier.
                                </p>
                                </div>
                            </div>
                            <div className="button-go">
                                <button className="button-go-button"><p>Veillez cliquer pour voir les offres</p> &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video2">
                <div className="overlay">
                </div>
                <div className="container video_container">
                    <div className="row ">
                        <div className="col-md-6 video2_gauche ">
                            <div className="container">
                                <div className="video2_title">
                                    <h2 >Recherche et Innovation</h2>
                                </div>
                                <div className="video2_p">
                                    <p>La recherche et l’innovation sont au coeur de la stratégie de notre Ecole pour améliorer les performances de l’ESP et maintenir sa position de centre d’excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 video2_droite "></div>
                    </div>
                </div>
            </section>
          
        </div>
       
    )
}

export default Section9;