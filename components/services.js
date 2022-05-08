import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services =() =>{
    
    return(
        <div className='overfow'>
            <div className='service-banner'>
                <div className='layer'>
                    <h2 className='service-title'>
                        Formations / Stages
                    </h2>
                </div>
                
            </div>
            <div className='row justify-content-center service-body'>
                <div className='col-12 header-services-h3 m-auto'>
                    <h3>Nous recrutons plus de mille stagiaires</h3>
                    <div className='separateur'></div>
                </div>
                <div className='col-12 header-services mt-5'>
                   <div className='layer'></div>
                   <div className='row row-layer'>
                       <div className='col-md-6 header-services-text m-auto'>
                           <h3 className='text-end my-auto'>TROUVER UN STAGE QUI VOUS CORRESPOND, C’EST FACILE</h3>
                       </div>
                       <div className='col-md-6 header-service-img mx-auto'>
                                    <ul className="reseau">
                                        {/* <li className="facebook"><Link><a href="" className="item-top-nav-right"><FontAwesomeIcon icon={['fab','facebook']}/></a></Link>  </li> */}
                                        <li className="instagram"><a href="https://www.instagram.com/p/CZ7Ymnwjjtt/?utm_medium=share_sheet" className="item-top-nav-right" target={"_blank"}><FontAwesomeIcon icon={['fab','instagram']}/></a> </li>
                                        <li className="twitter"><a href="https://twitter.com/vocasara?t=OvUnp4xDFPpd5MN1InG8EQ&s=08" className="item-top-nav-right" target={"_blank"}><FontAwesomeIcon icon={['fab','twitter']}/></a></li>
                                        {/* <li className="linkedin"><Link><a href="" className="item-top-nav-right"><FontAwesomeIcon icon={['fab','linkedin']}/></a></Link> </li> */}
                                    </ul>
                           <img src='/img/9467940-15187424-min.jpg' className='img-fluid' alt='senelec-agent'/>
                       </div>
                       
                   </div>
                </div>
                <div className='col-12 forms'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc7iCYElmTQuro0iFo5u59l3AE4C8ADs5AmiDlGPmt2p01Qaw/viewform?embedded=true" width="840" height="2013" frameborder="0" marginheight="0" marginwidth="0" className='document'>Chargement…</iframe>
                </div>
            </div>
        </div>
        )
    }
    
export default services;