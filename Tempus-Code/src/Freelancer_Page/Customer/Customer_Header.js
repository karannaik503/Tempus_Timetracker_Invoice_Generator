import React from 'react';
import { Link } from "react-router-dom";
import DropDown from '../../DropDown';

function Customer_Header(){
    return(
        <nav className="navbar-bEmployee">
            <div className='left-section-bEmployee'>
                <img className='logo-bEmployee' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <Link to="/freelancermode"><h2>TEMPUS</h2></Link>
            </div>
            <div className='right-section-bEmployee'>
                <ul className='nav-list-bEmployee'>
                    <li className='nav-item-bEmployee'><a href="#">About</a></li>
                    <li className='nav-item-bEmployee'><a href="#footer-bEmployee">Contact</a></li>
                    <div className='profile-container-bEmployee'>
                        <li className='nav-item-bEmployee'><img className="profile-icon-bEmployee" alt="profile" src="./images/profile-icon.jpg"/><DropDown /></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Customer_Header;