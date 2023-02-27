import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addProduct } from '../../../Redux/cartRedux';
import { addWishlist } from '../../../Redux/vishlistSlicer';
import '../../ShopAllProduct/index.scss'
function ShopAllProduct() {
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState("");

    const allData = () => {
        axios.get(`http://localhost:5000/api/products?catagory=Clock`).then((res) => {
            setPost(res.data);
        });
    }
    useEffect(() => {
        allData()
    }, []);

    const sortLow = () => {
        setPost([...post.sort((a, b) => a.price > b.price ? 1 : b.price > a.price ? -1 : 0),]);
    }
    const sortHigh = () => {
        setPost([...post.sort((a, b) => a.price < b.price ? 1 : b.price < a.price ? -1 : 0),]);
    }
    const sortPopularity = () => {
        setPost([...post.sort((a, b) => a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0),]);
    }
    function sortDivFlex() {
        let element = document.getElementById("flexSort");
        element.classList.toggle("DisplayFlex");
    }
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    const handleWishAdd = (id) => {
        dispatch(addWishlist(id))

    }

    return (
        <section className='shop'>
            <div className="shopDiv">
                <div className="filterShop">
                    <div className="filterInpDiv">
                        <input placeholder='Search' type="text" id='inpVal' />
                        <i onClick={(e) => setSearch(document.getElementById("inpVal").value)} className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="catagoryFilter">
                        <h2>Categories</h2>
                        <ul>
                            <Link to={'/shop'}><li>All Product<i className="fa-solid fa-chevron-right"></i></li></Link>
                            <Link to={`/products/Clock`}><li>Clock <i className="fa-solid fa-chevron-right"></i></li></Link>
                            <Link to={'/products/diningroom'}><li>Dining Room <i className="fa-solid fa-chevron-right"></i></li></Link>
                            <Link to={'/products/lamp'}><li>Lamp <i className="fa-solid fa-chevron-right"></i></li></Link>
                            <Link to={'/products/furniture'}><li>Furniture <i className="fa-solid fa-chevron-right"></i></li></Link>
                        </ul>
                    </div>
                    <div className="filterByPriceDiv">
                        <div className="filter-price">


                        </div>
                    </div>
                </div>
                <div className="productShop">
                    <div className="sortHeaderDiv">
                        <p >Showing all result</p>
                        <div className="sortDiv">
                            <div className="onClickSortDiv" onClick={sortDivFlex}>
                                <h3>Sorting</h3> <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            <div className="sortList" id='flexSort'>
                                <ul>
                                    <li onClick={() => allData()}>Default</li> <hr />
                                    <li onClick={sortPopularity}>Popularity</li> <hr />
                                    <li onClick={sortLow}>Low to high</li> <hr />
                                    <li onClick={sortHigh}>High to low</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="shopProducts">
                        {
                            post
                                .filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))
                                .map((element, index) => {
                                    return (
                                        <div className="allProductCard" key={index}>
                                            <Link to={`/details/${element._id}`}><img src={element.img} alt="product" /></Link>
                                            <Link to={`/details/${element._id}`}>  <p>{element.title}</p></Link>
                                            <h6>{element.categories}</h6>
                                            <Link to={`/details/${element._id}`}>  <h3>${element.price}</h3></Link>
                                            <div className='productAddIcons'>
                                                <i onClick={() => handleWishAdd(element)} className="fa-solid fa-heart"></i>
                                                <i onClick={() => dispatch(addProduct(element))} className="fa-solid fa-basket-shopping"></i>
                                            </div>
                                        </div>
                                    )

                                }

                                )
                        }

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShopAllProduct



