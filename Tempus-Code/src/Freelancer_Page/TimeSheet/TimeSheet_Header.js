import React from 'react';
import { Link } from "react-router-dom";
import DropDown from '../../DropDown';

function Employer_Header(){
    return(
        <nav className="navbar-fTimeSheet">
            <div className='left-section-fTimeSheet'>
                <img className='logo-fTimeSheet' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <Link to="/freelancermode"><h2>TEMPUS</h2></Link>
            </div>
            <div className='right-section-fTimeSheet'>
                <ul className='nav-list-fTimeSheet'>
                    <li className='nav-item-fTimeSheet'><a href="#">About</a></li>
                    <li className='nav-item-fTimeSheet'><a href="#footer-fTimeSheet">Contact</a></li>
                    <div className='profile-container-fTimeSheet'>
                        <li className='nav-item-fTimeSheet'><img className="profile-icon-fTimeSheet" alt="profile" src="./images/profile-icon.jpg"/><DropDown /></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Employer_Header;