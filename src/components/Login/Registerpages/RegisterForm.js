import './RegisterForm.css'

import {BrowserRouter as Router} from 'react-router-dom'
import FormHandle from './FormHandle'
import RegisterImg from '../Home/user-icon-trendy-flat-style-260nw-418179865.jpeg';
import React, {useEffect, useState} from "react";
import validation from './Validation-register'
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";


const RegisterForm = ({onSubmit,currentId,onId}) => {

    const [refresh, errors, userChangeHandler, pwdChangeHandler, enteredpassword, enteredUsername, emailChangeHandler, pwdChangeHandler2, enteredEmail, enteredPassword2] = FormHandle(onSubmit, validation,currentId,onId)
    const history=useHistory()
    const loginHandler=()=>{
        history.push(history.push("/"))
    }
    // const [initialState, setInitialState] = useState([])
    // useEffect(()=>{
    //     fetchItems();
    // },[]);
    // const [items, setItems] = useState([]);
    //
    // const fetchItems = async () => {
    //     const data = await fetch('/register');
    //     const items = await data.json();
    //     setItems(items)
    // }

    return (
        <Router>
            <form>
                <div className='Register-Form'>
                    {/*<div className='image'>*/}
                    {/*    <img src={RegisterImg}/>*/}
                    {/*</div>*/}
                    &nbsp;&nbsp;&nbsp;
                    <div className='RegisterForm-Input'>
                        {/*<label>Username</label>*/}
                        <h1>Register</h1>
                        <input
                            type='text'
                            name='username'
                            placeholder='Enter Username'
                            // placeholder='Enter your username'
                            value={enteredUsername}
                            onChange={userChangeHandler}
                        />
                        {errors.username && <p>*{errors.username}</p>}
                    </div>
                    &nbsp;
                    <div className='RegisterForm-Input'>

                        <input
                            type='Email'
                            name='email'
                            placeholder='Enter your Email'
                            value={enteredEmail}
                            onChange={emailChangeHandler}
                        />
                        {errors.email && <p>*{errors.email}</p>}
                    </div>
                    &nbsp;
                    <div className='RegisterForm-Input'>
                        {/*<label>Password</label>*/}
                        <input
                            type='Password'
                            name='password'
                            placeholder='Enter your password'
                            value={enteredpassword}
                            onChange={pwdChangeHandler}
                        />
                        {errors.password && <p>*{errors.password}</p>}
                    </div>
                    &nbsp;
                    <div className='RegisterForm-Input'>
                        {/*<label>Password</label>*/}
                        <input
                            type='Password'
                            name='password2'
                            placeholder='Reenter your password'
                            value={enteredPassword2}
                            onChange={pwdChangeHandler2}
                        />
                        {errors.password2 && <p>*{errors.password2}</p>}
                    </div>
                    &nbsp;&nbsp;&nbsp;

                    <div className='RegisterBtn' onClick={refresh}>
                        <button type="submit">Signup</button>
                        {errors.userExists && <p>*{errors.userExists}</p>}
                    </div>
                    &nbsp;
                    <div className='loginBtn' onClick={loginHandler}>
                        <button type="submit"  >Signin</button>
                    </div>

                    {/*{*/}
                    {/*    items.map(item => (*/}
                    {/*        <div>*/}
                    {/*            <p>{item.username}</p>*/}
                    {/*            <p>{item.email}</p>*/}
                    {/*            <p>{item.password}</p>*/}
                    {/*            <p>{item.renterpassword}</p>*/}
                    {/*        </div>*/}

                    {/*    ))*/}
                    {/*}*/}
                </div>
            </form>
        </Router>


    )
}
export default RegisterForm