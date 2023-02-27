import React from 'react'
import './index.scss'
function ContactNumber() {
    return (
        <section className='number'>
            <div className='numDiv'>
                <div className='aboutData'>
                    <div>
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className='numTxt'>
                        <p>Phone Number</p>
                        <h3>+1 342 5860 282</h3>
                    </div>
                </div>
                <div className='aboutData'>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className='numTxt'>
                        <p>Address</p>
                        <h3>168 King Street Manhattan, NYC 1001 United States</h3>
                    </div>
                </div>
                <div className='aboutData'>
                    <div>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className='numTxt'>
                        <p>Email</p>
                        <h3>guest@cititours.com</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactNumber