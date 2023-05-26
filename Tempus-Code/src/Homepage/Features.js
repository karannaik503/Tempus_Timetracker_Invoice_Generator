import React from 'react';

function Features(){
    return(
        <div id="features">
            <div className='why-tempus'>
                <div className='feature-component'>
                    <img src="./images/Time_tracking.png" className='features-img' alt='error'/> 
                    <div className='layer'>
                        <p>
                        Tempus enables users to track their work hours and assign them to specific projects and clients, 
                        providing an efficient and streamlined way to monitor productivity and generate invoices based on tracked time.
                        </p>
                    </div>
                </div>
                <div className='feature-component'>
                    <img src="./images/Payment_bill.png" className='features-img' alt='error'/> 
                    <div className='layer'>
                        <p>
                        Tempus simplifies payments and invoicing by allowing users to create customizable invoices and accept online payments
                        from clients, streamlining the entire invoicing process.
                        </p>
                    </div>
                </div>
                <div className='feature-component'> 
                    <img src="./images/Choose_modes.png" className='features-img' alt='error'/> 
                    <div className='layer'>
                        <p>
                        Tempus offers the flexibility to choose between freelancer and business modes,
                        allowing users to customize the software according to their specific needs and preferences. 
                        This feature ensures that Tempus can cater to a wide range of users, from freelancers to small businesses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;