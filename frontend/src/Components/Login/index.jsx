import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './index.scss'
import { login } from '../../Redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';




const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(state => state.user)

    const handleClick = (e) => {
            e.preventDefault()
            login(dispatch, { username, password })
    }

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .max(22, 'Must be 15 characters or less')
                    .required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={() => {
                handleClick()
                console.log('object');
            }}
        >
            <section className='login'>
                <div className="loginHeader">
                    Login
                </div>
                <Form className='loginInp'>

                    <Field placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="text" />


                    <Field placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" />

                    <div className="loginBtn">
                        <button  disabled={isFetching} onClick={handleClick} type="submit">Submit</button>
                        {error && <div className='wrong'>Enter the correct information and log in to your account</div>}
                    </div>
                    <Link className='registerBtn' to={'/register'}>Register Now!</Link>
                </Form>
            </section>

        </Formik>
    );
};

export default Login