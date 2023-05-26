import React from 'react';
import { Link } from "react-router-dom";

export default function Hero(){
    return(
        <div className='hero-bhome'>
            <h1>Welcome to Business workspace!</h1>
            <p>Explore a new arena of viewing, saving information and billing invoices and more. The following are the features of business mode.</p>
            <h3>Click to explore them...</h3>
            <div className='mode-options-bhome'>
                <Link to="/b-employee"><button className='bhome-button'>Employee Info</button></Link>    
                <Link to="/bought"><button className='bhome-button'>Inventory</button></Link> 
                <Link to="/b-invoice"><button className='bhome-button'>Invoice</button></Link>       
            </div>
        </div>
    )        
    
}