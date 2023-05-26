import React from 'react';

function Invoice_Footer(){
    return(
        <div id="footer-fInvoice">
            <div className='contact-info-fInvoice'>
                <h2>Contact Us</h2>
                <h4>Address</h4>
                <p>XYZ street name, City, Country, “Pin-Code”.</p>
                <h4>Phone</h4>
                <p>(123) 456-7890.</p>
                <h4>Email</h4>
                <p>Sample@gmail.com</p>
            </div>
            <div className='right-footer-fInvoice'>
                <div className='footer-logo-fInvoice'>
                    <img src="./images/TEMPUS_logo2.png" className="footer-logo-left-fInvoice" alt="error!"/>
                    <h1>TEMPUS</h1>
                </div>
                <div className='social-links-fInvoice'>
                <a href="#"><img src="./images/insta-logo.png" alt="error" className='social-icon-fInvoice'/></a>
                <a href="#"><img src="./images/facebook-logo.png" alt="error" className='social-icon-fInvoice'/></a>
                <a href="#"><img src="./images/twitter-logo.png" alt="error" className='social-icon-fInvoice'/></a>
                <a href="#"><img src="./images/linkedin-logo.png" alt="error" className='social-icon-fInvoice'/></a>
                </div>
                <div className='copyright-fInvoice'>
                    <span>TEMPUS © 2023. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Invoice_Footer;