import React from "react";
import loginImg from "./baef39121587841.Y3JvcCwxMzY1LDEwNjgsMjc3LDE1NQ.jpg";
// import loginImg from '../../../../Id card back.JPG'
//import loginImg from '/Users/nithinkrishna/Documents/React/softwaredesign_project/public/sdf/login';




const register = ({ submitForm }) =>{
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );
    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>

                <div className='form-group'>
                    <label className='form-label'>Username</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-group'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-group'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-group'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign up
                </button>
                <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
            </form>
        </div>
    );


}
export default register;