import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
function PopularProduct() {
    const [post, setPost] = useState([]);

    const allData = () => {
        axios.get(`http://localhost:5000/api/products`).then((res) => {
            setPost(res.data);
        });
    }

    useEffect(() => {
        allData()
    }, []);

    const sortPopularity = () => {
        setPost([...post.sort((a, b) => a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0),]);
    }

    return (
        <section className='popularProduct'>
            <div className='populartHeader'>
                <h2>popular products</h2>
            </div>
            <div className='popularDiv'>
                {
                    post.map((element) =>
                        <div className="productPopular">
                            <Link to={`/details/${element._id}`}><img src={element.img} alt="product" /></Link>
                            <Link to={`/details/${element._id}`}>  <p>{element.title}</p></Link>
                            <Link to={`/details/${element._id}`}>  <h3>${element.price}</h3></Link>
                        </div>
                    )
                }
            </div>
            <div className="popularBtn">
                <Link to={'/shop'}><button>All products</button></Link>
            </div>
        </section>
    )
}

export default PopularProduct