import React from 'react';
import { Link } from "react-router-dom";

function Hero(){
    return(
        <div className='logout-page'>
            <div className='logout-container'>
                <h1>
                    Log-Out Successful
                </h1>
                <img className='tick-mark-logout' src="./images/tick-mark.png"/>
            </div>
        </div>    
    )
}

export default Hero;