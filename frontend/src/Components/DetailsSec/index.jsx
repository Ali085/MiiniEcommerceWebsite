import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { addProduct } from '../../Redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'

function DetailsSec() {
    const [post, setPost] = useState([]);
    const { id } = useParams()
   
    const cart = useSelector((state) => state.cart)
    const allData = () => {
        axios.get(`http://localhost:5000/api/products/find/${id}`).then((res) => {
            setPost(res.data);
        });
    }

    useEffect(() => {
        allData()
    }, []);

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addProduct(post))
    }

    return (
        <section className='DetailsSec'>
            <div className="DetailsDiv">
                <div className='DetailsHeader'>
                    <h3>Details</h3>
                </div>
                <div className="productDetails">
                    <div className="detailsImg">
                        <img src={post.img} alt="foto" />
                    </div>
                    <div className="detailsData">
                        <div className="importantData">
                            <h2>{post.title}</h2>
                            <h4>Price: ${post.price}</h4>
                            <p>{post.desc}</p>
                        </div>
                        <div className="sumAndBuy">
                            <button onClick={handleClick}>Add To Basket</button>
                        </div>
                        <div className="moreData">
                            <div className="sizeData">
                                <h3>Size: {post.size}</h3>
                            </div>
                            <div className="catagoryData">
                                <h3>Catagories: {post.categories}</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSec