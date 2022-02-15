import React from 'react'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const Footer =() =>{
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);
    
      // This function will scroll the window to the top 
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };
    return(
        <div>
             <footer className="primary-footer" allowFullScreen>
                <div className="primary-footer-area container-fluid">
                    <div className="row primary-footer__links justify-content-center">
                        <div>
                            <ul className="primary-footer__copyright">
                                {/* <li>
                                    <a href="">
                                        &copy; VOCASARA
                                    </a>
                                </li> */}
                                <li className="row justify-content-center horraires">
                                    <div  className="col-2"><FontAwesomeIcon icon='clock'/></div><p className="col-10"><strong>Lundi au Vendredi</strong><br/>

                                    8h00 à 12h00 - 13h30 à 17h30</p>
                                </li>
                               
                            </ul>
                        </div>
                        <div>
                            <ul className="primary-footer__sociale">
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5 primary-footer__company justify-content-center">
                        <div className="col-lg-3 text-light logo">
                            <img className="footer-img" src="/img/logo2.png" alt="" height=""/>
                        </div>
                        <div className="col-lg-5 mt-3 diayante" >
                            <strong className="titrefooter text-light">&nbsp; DIAYANTE  &nbsp; BA &nbsp; NAW</strong>
                        </div>
                        <div className="col-lg-4 mt-3 text-light">
                            <ul className="primary-footer__address">
                                <li className="row justify-content-right">
                                    <ul className="reseau">
                                        {/* <li className="facebook"><Link><a href="" className="item-top-nav-right"><FontAwesomeIcon icon={['fab','facebook']}/></a></Link>  </li> */}
                                        <li className="instagram"><a href="https://www.instagram.com/p/CZ7Ymnwjjtt/?utm_medium=share_sheet" className="item-top-nav-right"><FontAwesomeIcon icon={['fab','instagram']}/></a> </li>
                                        <li className="twitter"><a href="https://twitter.com/vocasara?t=OvUnp4xDFPpd5MN1InG8EQ&s=08" className="item-top-nav-right"><FontAwesomeIcon icon={['fab','twitter']}/></a></li>
                                        {/* <li className="linkedin"><Link><a href="" className="item-top-nav-right"><FontAwesomeIcon icon={['fab','linkedin']}/></a></Link> </li> */}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <p className="map">
                            <i className="fas fa-map-marked-alt  text-light"></i>
                            Dakar(Sénégal), Hann Maristes I Villa numéro B 113
                            </p>
                        </div>
                        <div className='col-md-12'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15434.28014045236!2d-17.425203!3d14.7368843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x494168c5dd93026e!2sVOCASARA!5e0!3m2!1sfr!2ssn!4v1642714901261!5m2!1sfr!2ssn"  allowFullScreen loading="lazy"></iframe>
                        </div>
                    </div>
                    <div id="footer-section" className="text-center">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-8 col-sm-offset-2">
                                <p className="copyright">
                                    &copy; 2022 VOCASARA - Created By <a href="">Dahibou KA</a>
                                </p>
                            </div> 
                        </div> 
                        </div> 
                    </div>
                </div>
                <div className="area" allowFullScreen>
                    <ul className="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                    </ul>
                </div >
            </footer>
            
            {showButton && (
                <div onClick={scrollToTop} className="animate-bounce back-to-top">
                       <FontAwesomeIcon icon='chevron-up'/>
                </div>
            )}
        </div>
        
    )
}

export default Footer;