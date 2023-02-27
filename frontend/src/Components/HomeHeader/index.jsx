import React from 'react'
import './index.scss'

function HomeHeader() {
    return (
        <section className='homeHeader'>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active firstSlider">
                        <div>

                            <h2>Lamp Collection</h2>
                            <p className='loof'>LOOF MODULAR LIGHTNING</p>
                        </div>

                    </div>
                    <div className="carousel-item secondSlider">
                        <div>

                            <h2>Lamp Collection</h2>
                            <p>Desk Lamp</p>
                        </div>
                    </div>
                    <div className="carousel-item threeSlider">
                        <div>

                            <h2>Lamp Collection</h2>
                            <p>Circular Lamp</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
}

export default HomeHeader