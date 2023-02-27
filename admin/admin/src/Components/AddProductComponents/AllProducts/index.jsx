import './index.scss'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Added from '../Added';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function AllProducts() {
    const [post, setPost] = useState([]);
    const products = () => {
        axios.get(`http://localhost:5000/api/products`).then((res) => {
            setPost(res.data);
        });
    }
    useEffect(() => {
        products()
    }, []);

    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:5000/api/products/${_id}`)
            .then(products())
    }

    return (
        <section className='AllProductsSec'>
            <div className="AllProductsDiv">
                <h1>All Products</h1>
                {
                    post.map((element) =>
                        <div className='productDet'>
                            <img src={element.img} alt="" />
                            <div className="title">

                                <h2>{element.title}</h2>
                            </div>
                            <div className="productsSize">
                                <h3>Size:{element.size}</h3>
                                <h3>Color:{element.color}</h3>
                            </div>

                            <p>Price:${element.price}</p>
                            <div className='DeleteUpdate'>
                                
                                    <Tooltip title="Delete" onClick={() => deleteProduct(element._id)}>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                
                                <Link to={`/update/${element._id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                            </div>
                        </div>

                    )
                }

            </div>

        </section>
    )
}

export default AllProducts