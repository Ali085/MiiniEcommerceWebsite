import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss'
import { login } from '../../Redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../Redux/userSlicer';



const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [first, setFirst] = useState(false)
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(state => state.user)
    const navigate = useNavigate()
    function loginnn (){
        setFirst(!first)
    }
    function LoginAminDashboard() {
        setTimeout(() => {
            loginnn()
            if (JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(user)).currentUser)).isAdmin === true) {
                navigate('/users')
            } else {
                alert('You are not admin')
            }
        }, 1000)
    }

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
        LoginAminDashboard()
        
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
                        <button disabled={isFetching} onClick={handleClick} type="submit">submit</button>
                    </div>
                    <div className={first === false ? 'loginBtnFinish' : 'mystyle'}>
                        <button disabled={isFetching} onClick={handleClick} type="submit">Login</button>
                    {error && <span className='wrong'>Enter the correct information and log in to your account</span>}
                    </div>
                </Form>
            </section>

        </Formik>
    );
};

export default Login