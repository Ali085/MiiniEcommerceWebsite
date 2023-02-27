import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const mySchemaAdd = Yup.object({
    Title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    description: Yup.string()
        .max(200, 'Must be 20 characters or less')
        .required('Required'),
    Catagories: Yup.string()
        .max(90, 'Must be 20 characters or less')
        .required('Required'),
    Popularity: Yup.string()
        .max(90, 'Must be 20 characters or less')
        .required('Required'),
    Price: Yup.string()
        .max(90, 'Must be 20 characters or less')
        .required('Required'),
    Size: Yup.string()
        .max(90, 'Must be 20 characters or less')
        .required('Required'),

})

function Added() {
    const navigate = useNavigate()
    return (
        <Formik
            initialValues={{
                Title: '',
                description: '',
                Image: '',
                Catagories: '',
                Popularity: '',
                Price: '',
                Size: '',
                color: ''
            }}
            validationSchema={mySchemaAdd}
            onSubmit={(values) => {
                axios.post('http://localhost:5000/api/products', {
                    title: values.Title,
                    desc: values.description,
                    img: values.Image,
                    categories: values.Catagories,
                    popularity: values.Popularity,
                    price: values.Price,
                    size: values.Size,
                    color: values.color
                })
                    .then(console.log('seccessful'))
                    .then(navigate('/products'))
            }}
            validator={() => ({})}
        >
            <section className='formSec'>
                <h1>Add New Product</h1>
                <Form>
                    <label htmlFor="Title">Title</label>
                    <Field name="Title" placeholder='Title>>>' type="text" />
                    <ErrorMessage name="Title" />

                    <label htmlFor="description">Description</label>
                    <Field name="description" placeholder='Description>>>' type="text" />
                    <ErrorMessage name="description" />

                    <label htmlFor="Image">Image Url</label>
                    <Field name="Image" placeholder='Enter Url>>>' type="text" />
                    <ErrorMessage name="Image" />

                    <label htmlFor="Catagories">Catagories</label>
                    <Field name="Catagories" placeholder='Categories>>>' type="text" />
                    <ErrorMessage name="Catagories" />

                    <label htmlFor="Size" >Size</label>
                    <Field name="Size" placeholder='M,L,S' type="text" />
                    <ErrorMessage name="Size" />

                    <label htmlFor="color">Color</label>
                    <Field name="color" placeholder='Red,Blue,Black' type="text" />
                    <ErrorMessage name="color" />

                    <label htmlFor="Popularity">Popularity</label>
                    <Field name="Popularity" placeholder='1,2,3,4,5' type="number" />
                    <ErrorMessage name="Popularity" />

                    <label htmlFor="Price">Price</label>
                    <Field name="Price" placeholder='$0' type="number" />
                    <ErrorMessage name="Price" />

                    <button type="submit">POST</button>
                </Form>
            </section>

        </Formik>
    )
}

export default Added