import React from 'react';

function Header(){
    return(
        <nav className="navbar">
            <div className='left-section'>
                <img className='logo' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <a href="#"><h2>TEMPUS</h2></a>
            </div>
            <div className='right-section'>
                <ul className='nav-list'>
                    <li className='nav-item'><a href="#features">Why Tempus?</a></li>
                    <li className='nav-item'><a href="#footer">Contact</a></li>
                    <li className='nav-item'><a href="#get-started">Get Started</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;