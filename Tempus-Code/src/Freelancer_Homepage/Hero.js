import React from 'react';
import { Link } from "react-router-dom";

export default function Hero(){
    return(
        <div className='hero-fhome'>
            <h1>Welcome to Free-Lancer workspace!</h1>
            <p>Explore a new arena of viewing, saving information and billing invoices and more. The following are the features of free lancer mode.</p>
            <h3>Click to explore them...</h3>
            <div className='mode-options-fhome'>
                <Link to="/f-employer"><button className='fhome-button'>Customer Info</button></Link>    
                <Link to="/f-timesheet"><button className='fhome-button'>Time Sheet</button></Link> 
                <Link to="/f-invoice"><button className='fhome-button'>Rates & Invoice</button></Link>       
            
            </div>
        </div>
    )
}