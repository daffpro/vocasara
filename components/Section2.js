import React from 'react'
const Section2 =() =>{
    return(
        <div>
            <div id="landing-offer" class="pad-sec ">
                <div class="container">

                <div class="title-section big-title-sec animated fadeInUp" >
                    <div class="row justify-content-center">
                    <div class="col-sm-8 col-sm-offset-2">
                        <h2 class="big-title">Quelques informations à propos de nous</h2>
                        <h1 class="big-subtitle">Nous œuvrons dans le secteur énergetique &amp; digital </h1>
                        <hr/>
                        <p class="about-text">
                            {/* Nous sommes compétences reposent sur l’ingénieurie notament par nos inspections 
                            par drones via notre Centre de Traitement et d’Analyse de Données (CTAD). */}
                            La société vocasara est un acteur montant dans le secteur de l'énergie et du digital. Grace
                            son orientation futiriste elle offre de nouvelles perspectives dans ces dit secteurs.
                       </p>
                    </div>
                    </div>
                </div>

                <div class="offer-boxes">

                    <div class="row">
                    <div class="col-sm-4">
                    <div class="offer-post text-center animated fadeInLeft" >
                        <div class="offer-icon">
                            <img src='/img/electric-tower (1).png' className='img-fluid'/>
                        </div>
                        <h4>Inspections &amp; Préventions </h4>
                        <p>Systéme d'inspections par drone permettant d'auguementer la productivité et la maintenabilté des réseaux énergétiques.</p>
                    </div> 
                    </div> 

                    <div class="col-sm-4">
                    <div class="offer-post text-center animated fadeInUp" >
                        <div class="offer-icon">
                            <img src='/img/camera-de-videosurveillance.png' className='img-fluid'/>
                        </div>
                        <h4>Sécurité</h4>
                        <p>Installation de systémes modernes de surveillances</p>
                    </div> 
                    </div>

                    <div class="col-sm-4">
                    <div class="offer-post text-center animated fadeInRight" >
                        <div class="offer-icon">
                            <img src='/img/videography.png' className='img-fluid'/>
                        </div>
                        <h4>Media</h4>
                        <p>Couverture médiatique évenements, promotions d'activités, clips.</p>
                    </div> 
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

export default Section2;