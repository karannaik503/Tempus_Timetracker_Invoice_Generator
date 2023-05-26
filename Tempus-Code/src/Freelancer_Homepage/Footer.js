import React from 'react';

function Footer(){
    return(
        <div id="footer-fhome">
            <div className='contact-info-fhome'>
                <h2>Contact Us</h2>
                <h4>Address</h4>
                <p>XYZ street name, City, Country, “Pin-Code”.</p>
                <h4>Phone</h4>
                <p>(123) 456-7890.</p>
                <h4>Email</h4>
                <p>Sample@gmail.com</p>
            </div>
            <div className='right-footer-fhome'>
                <div className='footer-logo-fhome'>
                    <img src="./images/TEMPUS_logo2.png" className="footer-logo-left-fhome" alt="error!"/>
                    <h1>TEMPUS</h1>
                </div>
                <div className='social-links-fhome'>
                <a href="#"><img src="./images/insta-logo.png" alt="error" className='social-icon-fhome'/></a>
                <a href="#"><img src="./images/facebook-logo.png" alt="error" className='social-icon-fhome'/></a>
                <a href="#"><img src="./images/twitter-logo.png" alt="error" className='social-icon-fhome'/></a>
                <a href="#"><img src="./images/linkedin-logo.png" alt="error" className='social-icon-fhome'/></a>
                </div>
                <div className='copyright-fhome'>
                    <span>TEMPUS © 2023. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;