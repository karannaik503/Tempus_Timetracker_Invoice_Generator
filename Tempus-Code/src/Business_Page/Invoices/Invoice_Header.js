import React from 'react';
import { Link } from "react-router-dom";
import DropDown from '../../DropDown';

function Invoice(){
    return(
        <nav className="navbar-bInvoice">
            <div className='left-section-bInvoice'>
                <img className='logo-bInvoice' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <Link to="/businessmode"><h2>TEMPUS</h2></Link>
            </div>
            <div className='right-section-bInvoice'>
                <ul className='nav-list-bInvoice'>
                    <li className='nav-item-bInvoice'><a href="#">About</a></li>
                    <li className='nav-item-bInvoice'><a href="#footer-bInvoice">Contact</a></li>
                    <div className='profile-container-bInvoice'>
                        <li className='nav-item-bInvoice'><img className="profile-icon-bInvoice" alt="profile" src="./images/profile-icon.jpg"/><DropDown /></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Invoice;