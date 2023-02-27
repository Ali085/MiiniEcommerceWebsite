import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'
function UpdateSec() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const [popularity, setPopularity] = useState('')

    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/api/products/find/${params.id}`);
        result = await result.json()
        console.warn(result);
        setTitle(result.title)
        setDesc(result.desc)
        setImg(result.img)
        setSize(result.size)
        setColor(result.color)
        setPrice(result.price)
        setPopularity(result.popularity)
    }

    const updateProduct = async () => {
        return axios.put(`http://localhost:5000/api/products/${params.id}`, {
            title: title,
            desc:desc,
            img:img,
            size:size,
            color:color,
            price:price,
            popularity:popularity
        }).then(result=>{
            console.log(result.data);
        }).then(navigate('/products'))
    }
    


    return (
        <section className='updateSec'>
            <div className="updateDiv">
                <h1>Update Product</h1>
                <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Title' />
                <input value={desc} onChange={(e) => { setDesc(e.target.value) }} type="text" placeholder='Desc' />
                <input value={img} onChange={(e) => { setImg(e.target.value) }} type="text" placeholder='Img' />
                <input value={size} onChange={(e) => { setSize(e.target.value) }} type="text" placeholder='Size' />
                <input value={color} onChange={(e) => { setColor(e.target.value) }} type="text" placeholder='Color' />
                <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="number" placeholder='Price' />
                <input value={popularity} onChange={(e) => { setPopularity(e.target.value) }} type="number" placeholder='Popularity' />
                <button onClick={updateProduct}>Update</button>
            </div>
        </section>
    )
}

export default UpdateSec