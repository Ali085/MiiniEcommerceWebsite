import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementBasketItemCount, increaseBasketItemCount } from '../../Redux/cartRedux';
import { loginFailure } from '../../Redux/userSlicer';

import { persistor } from '../../Redux/store';

import './index.scss'

function Navbar() {
    const user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState("");
    const allData = () => {
        axios.get(`http://localhost:5000/api/products`).then((res) => {
            setPost(res.data);
        });
    }
    useEffect(() => {
        allData()
    }, []);
    const handleLogOut = () => {
        // console.log(localStorage.getItem('persist:root'))
        localStorage.setItem("persist:root","")
        dispatch(loginFailure())

    }
    const handleClick = () => {
        const element = document.getElementById("myDIV");
        element.classList.toggle("mystyle");
    }
    const handleClickSearch = () => {
        document.getElementById("mySearch").style.display = "flex"
    }
    const handleClickClose = () => {
        document.getElementById("mySearch").style.display = "none"
    }
    const handleClickCloseBasket = () => {
        document.getElementById("myBasket").style.display = "none"
    }
    const handleClickOpenBasket = () => {
        document.getElementById("myBasket").style.display = "flex"
    }

    const [purchase, setPurchase] = useState(false)



    const cart = useSelector(state => state.cart)
    const dispatchCount = useDispatch()

    function update() {
        let obj = JSON.parse(localStorage.getItem("persist:root"))
        let user = JSON.parse(obj.user)
        let user_id = user.currentUser._id
        console.log(cart.products)

        axios.post("http://localhost:5000/api/basket/update ", { products: cart.products, user_id: user_id }).then(data => {
            console.log(data)
        })
    }



    const handleCount = (id) => {
        dispatchCount(increaseBasketItemCount(id))
        update()



    }
    const handleDec = (id) => {
        dispatchCount(decrementBasketItemCount(id))
        update()
    }
    return (
        <>
            <nav>
                <div className="navDiv">
                    <div className='toggleBurgerMenu'>
                        <i className="fa-solid fa-bars-staggered" onClick={() => handleClick()}></i>
                    </div>
                    <div className="navLogo">
                        <Link to={'/'}><img src="http://miini.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2019/01/miini-logo.png" alt="LOGO" /></Link>
                    </div>
                    <div className="navList">
                        <ul>
                            <Link to={'/'}><li>Home</li></Link>
                            <Link to={'/shop'}><li>Shop</li></Link>
                            <Link to={'/contact'}><li>Contact</li></Link>
                            <Link to={'/blog'}><li>Blog</li></Link>


                        </ul>
                    </div>

                    <div className="navIcons">

                        <i onClick={() => handleClickSearch()} className="fa-solid fa-magnifying-glass" ></i>
                        <Link className='navLinkHeart' to={'/wishlist'}><i className="fa-solid fa-heart"></i></Link>
                        <Link className='navLinkUser' to={'/login'}> <i className="fa-regular fa-user"></i></Link>
                        <i onClick={() => handleClickOpenBasket()} className="fa-solid fa-basket-shopping"></i>
                        <p className='basketCount'>{cart.quantity}</p>

                    </div>
                    {user && <div>
                        <h6 className='logout' onClick={handleLogOut}>Log Out</h6>
                    </div>}

                </div>
            </nav>
            <div className="BurgerMenu" id='myDIV'>
                <div className="burgerAll">
                    <div className='menuBar'><i onClick={() => handleClick()} className="fa-solid fa-bars-staggered"></i><h2>MENU</h2></div>

                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/shop'}><li>Shop</li></Link>
                        <Link to={'/contact'}><li>Contact</li></Link>
                        <Link to={'/blog'}><li>Blog</li></Link>
                        <Link to={'/wishlist'}><li>Wishlist</li></Link>
                        <Link className='navLinkUser' to={'/login'}><li>Account</li></Link>
                    </ul>
                </div>
            </div>
            <div className="searchDiv" id='mySearch'>
                <div className='searchDivIcon'>
                    <i onClick={() => handleClickClose()} className="fa-solid fa-x"></i>
                </div>
                <div>
                    <h2 className='searchHeader'>Search</h2>
                    <input type="text" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="searchProductNav">
                    {
                        post
                            .filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))
                            .map((element, index) =>
                                <div key={index} className="searchProductDivNav">
                                    <Link to={`/details/${element._id}`}><img src={element.img} alt="product" /></Link>
                                    <Link to={`/details/${element._id}`}>  <p>{element.title}</p></Link>

                                </div>
                            )
                    }
                </div>

            </div>
            <div className='FlexEndDivBasket' id='myBasket'>
                <div className="basketDiv" id='basketFlex'>
                    <div className='basketHeader'>
                        <h2>Basket</h2>
                        <i onClick={() => handleClickCloseBasket()} className="fa-solid fa-xmark"></i>
                    </div>
                    <div className='basketContent'>
                        {
                            cart.products.map((e, index) =>
                                <div key={index} className="BasketProduct">
                                    <div className="basketImage">
                                        <img src={e.img} alt="foto" />
                                    </div>
                                    <div className='basketProductData'>
                                        <h2 >{e.title}</h2>
                                        <p >${e.price}</p>
                                    </div>
                                    <div className='incAndDec'>
                                        <button onClick={() => handleCount(e._id)}>+</button>
                                        <p>{e.count}</p>
                                        <button onClick={() => handleDec(e._id)}>-</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='ChechBtnDiv'>
                        <Link to={cart.total < 1 ? '/shop' : '/accapted'}><button >Total:${cart.total}</button></Link>

                    </div>

                </div>
            </div>

        </>


    )
}

export default Navbar