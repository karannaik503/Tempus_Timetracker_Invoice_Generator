import React from 'react';

function Footer(){
    return(
        <div id="footer-bhome">
            <div className='contact-info-bhome'>
                <h2>Contact Us</h2>
                <h4>Address</h4>
                <p>XYZ street name, City, Country, “Pin-Code”.</p>
                <h4>Phone</h4>
                <p>(123) 456-7890.</p>
                <h4>Email</h4>
                <p>Sample@gmail.com</p>
            </div>
            <div className='right-footer-bhome'>
                <div className='footer-logo-bhome'>
                    <img src="./images/TEMPUS_logo2.png" className="footer-logo-left-bhome" alt="error!"/>
                    <h1>TEMPUS</h1>
                </div>
                <div className='social-links-bhome'>
                <a href="#"><img src="./images/insta-logo.png" alt="error" className='social-icon-bhome'/></a>
                <a href="#"><img src="./images/facebook-logo.png" alt="error" className='social-icon-bhome'/></a>
                <a href="#"><img src="./images/twitter-logo.png" alt="error" className='social-icon-bhome'/></a>
                <a href="#"><img src="./images/linkedin-logo.png" alt="error" className='social-icon-bhome'/></a>
                </div>
                <div className='copyright-bhome'>
                    <span>TEMPUS © 2023. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;