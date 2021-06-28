import {useState} from 'react';
import './LoginForm.css'

import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import FormHandle from '../FormHandle'
import loginImg from '../user-icon-trendy-flat-style-260nw-418179865.jpeg';
import {useHistory} from "react-router-dom"
import validation from '../Validation-data'
import register from '../Registerpages/RegisterPage'

const LoginForm =({ onSubmit }) =>
{
    let history =useHistory();
    const [refresh,errors,userChangeHandler,pwdChangeHandler,enteredpassword,enteredUsername]=FormHandle(onSubmit,validation)
    const signup=()=>{
        history.push("/register")
    }

    return(
        <Router>
            <form >
                <div className='Login-Form'>
                    <div className='image'>
                        <img src={loginImg}/>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className='LoginForm-Input'>
                        {/*<label>Username</label>*/}
                        <input
                            type='text'
                            name='username'
                            placeholder='Enter Username'
                            // placeholder='Enter your username'
                            value={enteredUsername}
                            onChange={userChangeHandler}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    &nbsp;
                    <div className='LoginForm-Input'>
                        {/*<label>Password</label>*/}
                        <input
                            type='Password'
                            name='password'
                            placeholder='Enter your password'
                            value={enteredpassword}
                            onChange={pwdChangeHandler}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className='LoginForm-Actions' onClick={refresh}>
                        <button type="submit" >Login</button>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className='LoginForm-Actions' onClick={signup}>
                        <button type="submit" >Signup</button>
                    </div>
                </div>
            </form>
        </Router>





)
}
export default LoginForm