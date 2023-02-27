import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
function Accepted() {
    return (
        <section className='acceptedSec'>
            <div className="acceptedDiv">
                <div className='textAcc'><h3>Click the "PURCHASE" button below to confirm the purchase of the products you have added to the cart</h3></div>
                <div><Link to={'/buy'}><button className='PURCHASEbtn'>PURCHASE</button></Link>
                </div>
                <div><Link to={'/'}>Cancel</Link></div>
            </div>
        </section>
    )
}

export default Accepted