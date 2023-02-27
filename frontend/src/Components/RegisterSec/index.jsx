import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .max(44, 'Must be 15 characters or less'),
  password: Yup.string()
    .max(44, 'Must be 20 characters or less'),
  email: Yup.string().email('Invalid email address')
    .required('Invalid email address'),
  Adress: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Must be 30 characters or less'),
  Card: Yup.string()
    .min(15, 'Must enter a minimum of 16 characters')
    .max(17, 'Must be 16 characters or less')
    .required(" Card number ,there must be 16 numbers"),
  CardYear: Yup.string()
    .min(2, 'Must enter a minimum of 2 characters')
    .max(2, 'Must be 2 characters or less')
    .required('must be a 2-digit number in the month and year digits'),
  CardMonth: Yup.string()
    .max(2, 'Must be 2 characters or less')
    .required('must be a 2-digit number in the month and year digits'),
  CVV: Yup.string()
    .min(3, 'Must enter a minimum of 3 characters')
    .max(3, 'Must be 3 characters or less')
    .required('"CVV" must be 3 digits'),
})

const RegisterSec = () => {
  const navigate = useNavigate();

  
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
        Card: '',
        CardYear: '',
        CardMonth: '',
        CVV: '',
        Adress: ''
      }}
      
      validationSchema={RegisterSchema}

      onSubmit={(values) => {
        axios.post('http://localhost:5000/api/auth/register', {
          username: values.username,
          password: values.password,
          email: values.email,
          address: values.Adress,
          cartNumber: values.Card,
          cartMonth: values.CardMonth,
          cartYear: values.CardYear,
          cvv: values.CVV,
        }).then(navigate('/login'))
      }}
    >
      
        {({ errors, touched }) => {
         {console.log(errors);}
          return (
            <section className='registerSec'>
            <Form className='formReg' >
              <div className="regHeader">
                Register
              </div>
              <div className="userPass">
                <Field  placeholder='Username' className='user' name="username" type="text" />
                {errors.username && touched.username ? <div style={{ color: "red", fontSize: 12 }}>{errors.username}</div> : null}

                <Field  placeholder='Password' className='user' name="password" type="password" />
                {errors.password && touched.password ? <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div> : null}
              </div>

              <div className="regEmail">
                <Field  placeholder='Email' name="email" type="email" x />
                {errors.email && touched.email ? <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div> : null}
              </div>

              <div className="regAdress">
                <Field  placeholder='Adress' name="Adress" type="text" />
                {errors.Adress && touched.Adress ? <div style={{ color: "red", fontSize: 12 }}>{errors.Adress}</div> : null}
              </div>
              <div className="cardDataAll">
                <div className="regCard">
                  <Field  placeholder='Card Number' min="1" name="Card" type="number" />

                </div>

                <div className="dataCard">

                  <div className="monthYear">
                    <Field  placeholder='Month' min="1" name="CardMonth" type="number" />
                    <p>/</p>
                    <Field placeholder='Year' min="1" name="CardYear" type="number" />
                  </div>

                  <div className="cvvDiv">
                    <Field  placeholder='CVV' min="1" name="CVV" type="number" />
                  </div>

                </div>
              </div>
              <div className='errorDiv'>
                {errors.Card && touched.Card ? <div style={{ color: "red", fontSize: 12 }}>{errors.Card}</div> : null}
                {errors.CardYear && touched.CardYear ? <div style={{ color: "red", fontSize: 12 }}>{errors.CardYear}</div> : null}
                {errors.CardMonth && touched.CardMonth ? <div style={{ color: "red", fontSize: 12 }}>{errors.CardMonth}</div> : null}
                {errors.CVV && touched.CVV ? <div style={{ color: "red", fontSize: 12 }}>{errors.CVV}</div> : null}
              </div>





              <button type="submit" >Register</button>
            </Form>
            </section>)
        }}
      

    </Formik>
  );
};


export default RegisterSec