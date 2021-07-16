
import './LoginForm.css'

import {BrowserRouter as Router} from 'react-router-dom'
import FormHandle from './FormHandle'
import loginImg from '../Home/user-icon-trendy-flat-style-260nw-418179865.jpeg';
import {useHistory} from "react-router-dom"
import validation from './Validation-data'
import {useState,useEffect} from "react";


const LoginForm =({ onSubmit }) =>
{
    let history =useHistory();
    const [refresh,errors,userChangeHandler,pwdChangeHandler,enteredpassword,enteredUsername]=FormHandle(onSubmit,validation)
    const signup=()=>{
        history.push("/register")
    }
    // const[intialState,setIntialState]=useState([])
    // useEffect(()=>{
    //     fetch('/').then(res=>{
    //         if(res.ok){
    //             return res.json()
    //         }
    //     }).then(jsonResponse=> setIntialState(jsonResponse))
    // },[])
    // console.log(intialState)

    return(
        <Router>
            <form >
                <div className='Login-Form'>

                    &nbsp;&nbsp;&nbsp;
                    <div className='LoginForm-Input'>
                        {/*<label>Username</label>*/}
                        <h1>Login</h1>
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
                    <div className='LoginForm-Input'>
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
                    &nbsp;
                    &nbsp;
                    <div className='loginBtn' onClick={refresh}>
                        <button type="submit" >Login</button>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className='loginBtn' onClick={signup}>
                        <button type="submit" >Signup</button>
                    </div>
                </div>
            </form>
        </Router>





)
}
export default LoginForm