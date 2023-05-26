import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className="navbar-logout">
            <div className='left-section-logout'>
                <img className='logo-logout' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <Link to="/"><h2>TEMPUS</h2></Link>
            </div>
            <div className='right-section-logout'>
                <ul className='nav-list-logout'>
                    <li className='nav-item-logout'><a href="#footer">Contact</a></li>
                    <Link to="/"><li className='nav-item-logout'><a href="#get-started">Get Started</a></li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header;