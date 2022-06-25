import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import axios from './axios.js'
import { useForm } from "react-hook-form";
import { useProductContext } from './Context/ProductContext'





function SignUp() {
    const [{ user }, dispatch] = useProductContext();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('/auth/register', data)
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
                <h3>Sign up</h3>
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name")} />
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")} />
                <button className="singin__button">Sign Up</button>
                <p className="terms">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
            </form>
            <div className="signup">
                <p className="already__amazon">Already have an account</p>
                {/* <button> */}


                <Link to='/login'>Login Now</Link>
                {/* </button> */}
            </div>
        </div>
    )
}

export default SignUp
