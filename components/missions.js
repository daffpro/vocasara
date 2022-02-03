import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const missions =() =>{
    
    return(
        <div >
            <div className='mission-banner'>
                <div className='layer'>
                <h2 className='mission-title'>
                    MISSIONS
                </h2>
                </div>
                
            </div>
            <div className='row justify-content-center mission-body'>
                <div className='col-lg-10 col-sm-12 p-5'>
                 La mission de notre entreprise consiste à : <br/>

                    -Fournir une planification rapide de la maintenance pour les entreprise du secteur énergétique, industriel, etc… ;<br/>
                    -Réaliser des prestations de qualités dans le secteur énergétique, industrie, télécommunication en matière d’inspections drone, et d’électricité dans une recherche constante de la satisfaction du client ;<br/>
                    -Identifier, étudier, et résoudre les dysfonctionnements techniques existants dans le secteur de l’énergie, télécommunications.<br/>
                    <br/><br/><br/>
                    En outre ces missions sont effectuées par une organisation, une structuration et collaboration des différents services que regorgent notre VOCA SARA à savoir : 
                </div>
            </div>
            <div className='row justify-content-center mission-body'>
                {/* <div className='col-10 mt-1 mb-5'>
                    <h6 className='mt-1'>
                        Le digital au service de l'énergie
                    </h6>
                </div> */}
                <div className='col-lg-5 col-sm-12 align-items-center p-5'>

                    <h6 className='mt-1 mb-5'>
                        Le service d’inspections
                    </h6>
                    
                    <p>
                    Il est chargé d’effectuer :<br/>
                    <br/>
                        -Le pilotage des projets ;<br/>
                        -La collecte des données via les drones ;<br/>
                        -Géolocalisation des défauts du réseau HTA et BT ;<br/>
                        -Conception de la GMAO ;<br/>
                        -Conception de la cartographie du réseau HTA ;<br/>
                    </p>
                </div>
                <div className='col-lg-5 col-sm-12 p-5'>
                    <img src='/img/slider6.jpeg' className='img-fluid'/>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-10 p-5'>
                     <em>Préstataire de la SENELEC</em>  depuis 2016, nous réalisons des prestations de qualités dans une recherche constante de la satisfaction du client.
                </div>
            </div>
            <div className='row justify-content-center mission-body'>
                <div className='col-lg-5 col-sm-12 p-5'>
                    <img src='/img/données.jpg' className='img-fluid'/>
                </div>
                <div className='col-lg-5 col-sm-12 align-items-center p-5'>

                    <h6 className='mt-1 mb-5'>
                        Le Centre de Traitement et d’Analyse de Données (CTAD) 
                    </h6>
                    
                    <p>
                    -Le recueil et l’extraction des sources données pertinentes et qualités(Images normale, Image thermographique) ;<br/>
                    -Le traitement , exploitation et intégration des données au niveau de la plateforme VOCA SARA ;<br/>
                    -La production d’analyse et de recommandation aux clients (en fonction des défauts détectées) ;<br/>
                    -La gestion des outils d’analyse pour les décideurs interne et les clients afin qu’ils puissent suivre l’évolution des problèmes rencontrés ;<br/>
                    -La veille technologique des nouveaux outils de visant à l’amélioration de l’analyse des données ;<br/>
                    -Étude technique des différents stades d’avancement des projets ;<br/>
                    -Élaboration des fiche de visites d’inspections, Rédaction des rapports techniques  des visites et contrôles de saisie des données, traçabilités et sécurités de données, suivi à long terme des données ;<br/>
                    -La quantification statistique des défauts détectés ;<br/>

                    </p>
                </div>
                
            </div>
        </div>
        )
    }
    
export default missions;