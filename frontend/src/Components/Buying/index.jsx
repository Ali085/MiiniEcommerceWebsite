import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.scss'
function Buying() {
    const cart = useSelector(state => state.cart)
  return (
    <section className='buyingSec'>
      <div>
        
      </div>
        <div className="buyingDiv">
            <h1>Purchase successful!</h1>
        <i class="fa-solid fa-circle-check"></i>
            <h3>Total:${cart.total}</h3>
        <Link to={'/'}><button>Back to Home</button></Link> 
        </div>
    </section>
  )
}

export default Buying