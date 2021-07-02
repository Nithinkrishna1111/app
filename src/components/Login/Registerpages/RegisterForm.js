
import './RegisterForm.css'

import {BrowserRouter as Router } from 'react-router-dom'
import FormHandle from '../FormHandle'
import RegisterImg from '../Home/user-icon-trendy-flat-style-260nw-418179865.jpeg';

import validation from './Validation-register'



const RegisterForm =({ onSubmit }) =>
{

    const [refresh,errors,userChangeHandler,pwdChangeHandler,enteredpassword,enteredUsername,emailChangeHandler,pwdChangeHandler2,enteredEmail,enteredPassword2]=FormHandle(onSubmit,validation)


    return(
        <Router>
            <form >
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
                        {/*<label>Password</label>*/}
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
                        <button type="submit" >Signup</button>
                    </div>
                </div>
            </form>
        </Router>





    )
}
export default RegisterForm