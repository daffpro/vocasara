import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Section6 =() =>{
    return(
            <div>
               <sectio>
                    <div className="contact-info">
                        <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="#" aria-label="location"><FontAwesomeIcon icon='map-marked-alt' className='icon'/>Dakar(Sénégal), Hann Maristes I Villa numéro B 113.</a>
                            </div> 
                            <div className="col-sm-4">
                                <a href="tel:+221338322652" aria-label="tel"><FontAwesomeIcon icon='phone'  className='icon'/>+221 33 832 26 52</a>
                            </div>
                            <div className="col-sm-4">
                                <a href="mailto:hello@hotmail.com" aria-label="mail"><FontAwesomeIcon icon='envelope'  className='icon'/>support@vocasara.com</a>
                            </div>
                        </div>
                        </div> 
                    </div> 
                </sectio>
            </div>
        )
    }
    
export default Section6;