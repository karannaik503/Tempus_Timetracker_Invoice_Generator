import React from 'react';
import DropDown from "../DropDown";

function Header(){
    return(
        <nav className="navbar-modes">
            <div className='left-section-modes'>
                <img className='logo-modes' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <a href="#"><h2>TEMPUS</h2></a>
            </div>
            <div className='right-section-modes'>
                <ul className='nav-list-modes'>
                    <li className='nav-item-modes'><a href="#">About</a></li>
                    <li className='nav-item-modes'><a href="#footer-modes">Contact</a></li>
                    <div className='profile-container-modes'>
                        <li className='nav-item-modes'><DropDown /></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
