import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Section6 =() =>{
    return(
            <div>
               <section id="contact">
                    <div class="contact-info">
                        <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <a href="#"><FontAwesomeIcon icon='map-marked-alt' className='icon'/>Dakar(Sénégal), Hann Maristes I Villa numéro B 113.</a>
                            </div> 
                            <div class="col-sm-4">
                                <a href="tel:+221338322652"><FontAwesomeIcon icon='phone'  className='icon'/>+221 33 832 26 52</a>
                            </div>
                            <div class="col-sm-4">
                                <a href="mailto:hello@hotmail.com"><FontAwesomeIcon icon='envelope'  className='icon'/>hello@hotmail.com</a>
                            </div>
                        </div>
                        </div> 
                    </div> 
                </section>
            </div>
        )
    }
    
export default Section6;