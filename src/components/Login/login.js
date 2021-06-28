// import React from "react";
// import Formvalid from './formvalid'
// import valid from './validdata'
// import Register from './register'
// import loginImg from "./baef39121587841.Y3JvcCwxMzY1LDEwNjgsMjc3LDE1NQ.jpg";
// import './style.css'
// // import loginImg from '../../../../Id card back.JPG'
// //import loginImg from '/Users/nithinkrishna/Documents/React/softwaredesign_project/public/sdf/login';
//
//     const Login = ({ onSubmit }) =>{
//         const { change,values,submitrefresh,errors} = Formvalid(onSubmit,valid);
//
//         return (
//             <div className='form-content-right'>
//                 <form onSubmit={submitrefresh} className='form' noValidate>
//                     <div className='image'>
//                         <img src={loginImg}/>
//                     </div>
//
//                     <div className='form-inputs'>
//                         <label className='form-label'>Username</label>
//                         <input
//                             className='form-input'
//                             id='username'
//                             type='text'
//                             name='username'
//                             placeholder='Enter your username'
//                             value={values.username}
//                             onChange={change}
//                         />
//                         {errors.username && <p>{errors.username}</p>}
//                     </div>
//
//                     <div className='form-inputs'>
//                         <label className='form-label'>Password</label>
//                         <input
//                             className='form-input'
//                             id='password'
//                             type='password'
//                             name='password'
//                             placeholder='Enter your password'
//                             value={values.password}
//                             onChange={change}
//                         />
//                         {errors.password && <p>{errors.password}</p>}
//                     </div>
//
//                     <button className='form-input-btn' type='submit'>
//                         Sign in
//                     </button>
//                     <button className='form-input-btn' type='submit' >
//                         Sign up
//                     </button>
//
//                     {/*<span className='form-input-login'>*/}
//                     {/*    Register? here <a href='#'>here</a>*/}
//                     {/*</span>*/}
//                 </form>
//             </div>
//         );
//
//
//     }
// export default Login;
//
