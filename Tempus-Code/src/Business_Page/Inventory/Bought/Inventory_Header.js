import React from 'react';
import { Link } from "react-router-dom";
import DropDown from '../../../DropDown';

function Inventory_Header(){
    return(
        <nav className="navbar-bInventory">
            <div className='left-section-bInventory'>
                <img className='logo-bInventory' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <Link to="/businessmode"><h2>TEMPUS</h2></Link>
            </div>
            <div className='right-section-bInventory'>
                <ul className='nav-list-bInventory'>
                    <li className='nav-item-bInventory'><a href="#">About</a></li>
                    <li className='nav-item-bInventory'><a href="#footer-bInventory">Contact</a></li>
                    <div className='profile-container-bInventory'>
                        <li className='nav-item-bInventory'><img className="profile-icon-bInventory" alt="profile" src="./images/profile-icon.jpg"/><DropDown /></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Inventory_Header;