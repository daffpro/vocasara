import React from 'react'


const Presentation =() =>{
    return(
        <div>  
             <div className="present" >
                <div className="container-box">
                    <div className="box row">
                        <div className="product__img col-lg-6">
                            <img className="img-fluid" src="/img/dji.png" alt="" />
                        </div>

                        {/* <div className="product__video">
                            <div className="video">
                                <i className="fas fa-play"></i>
                                <p>watch a review</p>
                            </div>
                        </div> */}

                        <div className="product__disc col-lg-6">
                            <div className="product__disc--content">
                                <div className="disc__content--about">
                                    <h2>Oculus Rift S</h2>
                                    <span>get ready to step into a new world</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur hic minus nihil
                                        obcaecati, ratione repellendus saepe sint tenetur totam ullam. Accusantium aspernatur
                                        ducimus impedit perferendis quisquam repellendus similique ullam vitae!</p>
                                </div>

                                <div className="product__view--more">
                                    <p>view all specifications</p>
                                    <div className="view__more--block"></div>
                                </div>
                            </div>
                        </div>

                        <div className="product_buttons">
                            <button className="btn wishlist">Allez decouvrir notre boutique !</button>
                            {/* <button className="btn buy">buy</button> */}
                        </div>
                    </div>
                </div>
            </div> 
          
        </div>
       
    )
}

export default Presentation;