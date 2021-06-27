import React from "react";
import Formvalid from './formvalid'
import valid from './validdata'
import loginImg from "./baef39121587841.Y3JvcCwxMzY1LDEwNjgsMjc3LDE1NQ.jpg";
import './style.css'
// import loginImg from '../../../../Id card back.JPG'
//import loginImg from '/Users/nithinkrishna/Documents/React/softwaredesign_project/public/sdf/login';



    const Login = ({ submitForm }) =>{
        const { change,values,submitrefresh,errors} = Formvalid(valid);
        return (
            <div className='form-content-right'>
                <form onSubmit={submitrefresh} className='form' noValidate>
                    <div className='image'>
                        <img src={loginImg}/>
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>Username</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={values.username}
                            onChange={change}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={change}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>

                    <button className='form-input-btn' type='submit'>
                        Sign in
                    </button>
                    <span className='form-input-login'>
                        Register? here <a href='#'>here</a>
                    </span>
                </form>
            </div>
        );


    }
export default Login;