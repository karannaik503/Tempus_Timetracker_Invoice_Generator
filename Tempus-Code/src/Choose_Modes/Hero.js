import React from 'react';
import { Link } from "react-router-dom";

function Hero(){
    return(
        <div className="hero-modes">
            <div className='choose-mode-modes'>
                <div className="mode-flex-modes">
                    <div className='mode-modes'>
                        <img src="./images/business-mode.jpg" className='mode-img-modes' alt='error'/> 
                        <div className='layer-modes'>
                            <a href="#"><Link to="/businessmode"><img className="link-modes" alt="error" src="./images/link-button.png"/></Link></a>
                        </div>
                    </div>
                    <p>
                        Business <span>Mode</span>
                    </p>
                </div>
                <div className="mode-flex-modes">
                    <div className='mode-modes'>
                        <img src="./images/freelance-mode.jpeg" className='mode-img-modes' alt='error'/> 
                        <div className='layer-modes'>
                            <a href="#"><Link to="/freelancermode"><img className="link-modes" alt="error" src="./images/link-button.png"/></Link></a>
                        </div>
                    </div>
                    <p>
                        Free-Lancer <span>Mode</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero;