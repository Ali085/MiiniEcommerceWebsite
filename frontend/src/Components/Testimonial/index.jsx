import React from 'react'
import './index.scss'
function Testimonial() {
    return (
        <section className='testimonial'>
            <div className='testiDiv'>
                <h2>testimonial</h2>
                <div className='testiParag'><p>
                    Top notch quality of product. Everything is simple but not
                    boring at all. I wisht I could buy all stuff in here. The
                    customer services are incredible with kindness & careful. I
                    would recommend Minim for all of you guys.
                </p></div>
                <div className='testiImg'>
                    <img src="https://180dc.org/wp-content/uploads/2019/05/Foto-CV.png" alt="foto" />
                </div>
                <div className="testiName">
                    <h3>Paul Wilson</h3>
                    <p>San Jose</p>
                </div>

            </div>
        </section>
    )
}

export default Testimonial