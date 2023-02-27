import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function PagesLayout() {
    return (
        <section className='pagesLayputSec'>
            <div className="layoutDiv">
                <ul>
                    <Link to={'/users'}><li><i className="fa-solid fa-user"></i>Users</li></Link>
                    <Link to={'/products'}><li><i className="fa-brands fa-product-hunt"></i>Products</li></Link>
                    <Link to={'/add'}><li><i className="fa-solid fa-circle-plus"></i>Add Product</li></Link>
                </ul>
            </div>
        </section>
    )
}

export default PagesLayout