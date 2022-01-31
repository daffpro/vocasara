import React from 'react'
const Section2 =() =>{
    return(
        <div>
            <div id="landing-offer" class="pad-sec ">
                <div class="container">

                <div class="title-section big-title-sec animated fadeIn" >
                    <div class="row justify-content-center">
                    <div class="col-sm-8 col-sm-offset-2">
                        <h2 class="big-title">Some information about us</h2>
                        <h1 class="big-subtitle">We’re small branding &amp; digital studio</h1>
                        <hr/>
                        <p class="about-text">Cras porta dolor ut velit imperdiet, quis sodales tellus facilisis. Vestibulum magna turpis, tincidun blandit semper lorem. Mauris nodesterin feugiat neque, a aliquet ligula. Sed non felis tincidunt, facilisis felis vitae, mollis est. Nulla sapien dui, feugiat sed velit a, egestas porta magna.</p>
                    </div>
                    </div>
                </div>

                <div class="offer-boxes">

                    <div class="row">
                    <div class="col-sm-4">
                    <div class="offer-post text-center animated fadeIn" >
                        <div class="offer-icon">
                            <img src='/img/electric-tower.png' className='img-fluid'/>
                        </div>
                        <h4>DESIGNS &amp; INTERFACES</h4>
                        <p>Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus. Aliquam accumsan erat id sem placerat tempus.</p>
                    </div> 
                    </div> 

                    <div class="col-sm-4">
                    <div class="offer-post text-center animated fadeInUp" >
                        <div class="offer-icon">
                            <img src='/img/cctv-camera.png' className='img-fluid'/>
                        </div>
                        <h4>Branding</h4>
                        <p>Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus. Aliquam accumsan erat id sem placerat tempus.</p>
                    </div> 
                    </div>

                    <div class="col-sm-4">
                    <div class="offer-post text-center animated fadeInRight" >
                        <div class="offer-icon">
                            <img src='/img/videography.png' className='img-fluid'/>
                        </div>
                        <h4>Dedicated support</h4>
                        <p>Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus. Aliquam accumsan erat id sem placerat tempus.</p>
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