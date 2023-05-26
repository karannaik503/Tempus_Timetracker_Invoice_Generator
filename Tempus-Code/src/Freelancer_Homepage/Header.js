import React from 'react';
import { Link } from "react-router-dom";
import DropDown from '../DropDown';

function Header(){
    return(
        <nav className="navbar-fhome">
            <div className='left-section-fhome'>
                <img className='logo-fhome' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <Link to="/chooseMode"><h2>TEMPUS</h2></Link>
            </div>
            <div className='right-section-fhome'>
                <ul className='nav-list-fhome'>
                    <li className='nav-item-fhome'><a href="#">About</a></li>
                    <li className='nav-item-fhome'><a href="#footer-fhome">Contact</a></li>
                    <div className='profile-container-fhome'>
                        <li className='nav-item-fhome'><img className="profile-icon-fhome" alt="profile" src="./images/profile-icon.jpg"/><DropDown /></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Header;