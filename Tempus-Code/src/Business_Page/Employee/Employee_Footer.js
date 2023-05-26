import React from 'react';

function Employee_Footer(){
    return(
        <div id="footer-bEmployee">
            <div className='contact-info-bEmployee'>
                <h2>Contact Us</h2>
                <h4>Address</h4>
                <p>XYZ street name, City, Country, “Pin-Code”.</p>
                <h4>Phone</h4>
                <p>(123) 456-7890.</p>
                <h4>Email</h4>
                <p>Sample@gmail.com</p>
            </div>
            <div className='right-footer-bEmployee'>
                <div className='footer-logo-bEmployee'>
                    <img src="./images/TEMPUS_logo2.png" className="footer-logo-left-bEmployee" alt="error!"/>
                    <h1>TEMPUS</h1>
                </div>
                <div className='social-links-bEmployee'>
                <a href="#"><img src="./images/insta-logo.png" alt="error" className='social-icon-bEmployee'/></a>
                <a href="#"><img src="./images/facebook-logo.png" alt="error" className='social-icon-bEmployee'/></a>
                <a href="#"><img src="./images/twitter-logo.png" alt="error" className='social-icon-bEmployee'/></a>
                <a href="#"><img src="./images/linkedin-logo.png" alt="error" className='social-icon-bEmployee'/></a>
                </div>
                <div className='copyright-bEmployee'>
                    <span>TEMPUS © 2023. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Employee_Footer;