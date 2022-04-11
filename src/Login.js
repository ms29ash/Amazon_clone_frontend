import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from './axios.js'
import { useForm } from "react-hook-form";
import { ProContext } from './Context/ProductContext'


function Login() {
    const [{ user }, dispatch] = ProContext();

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const res = await axios.post('/auth/login', data)
            console.log(res.data.authtoken)
            localStorage.setItem('authToken', res.data.authtoken)
            dispatch({
                type: 'ADD_USER',
                email: data.email,

            })
            navigate('/');
        } catch (error) {
            console.error(error);
        }



    }
    return (
        <div className="login">
            <Link to='/'>

                <img className="login__logo" src="./amazon-black-logo.png" alt="" />
            </Link>
            <form className="signin__box" onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign in</h3>
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")} />
                <button className="singin__button">Sign in</button>
                <p className="terms">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
            </form>
            <div className="signup">
                <p className="new__amazon">New to Amazon</p>

                <Link to='/signup'>Create your Amazon account</Link>
            </div>
        </div>
    )
}

export default Login
