import React from 'react';
import { Link } from "react-router-dom";

function Get_started(){
    return(
        <div id='get-started'>
            <Link to="/login"><button className='login'>LOG IN</button></Link>
            <span>Get Started!</span>
            <Link to="/signup"><button className='signup'>SIGN UP</button></Link>
        </div>
    )
}

export default Get_started;