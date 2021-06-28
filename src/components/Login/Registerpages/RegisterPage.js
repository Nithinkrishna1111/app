import {useState} from "react";

import Pricequote from "../Pricequote";
import RegisterForm from "./RegisterForm";
const RegisterPage =()=>{
    const[isSubmit,setSubmit]=useState(false);

    function onSubmit(){
        setSubmit(true);
    }


    return(
        <div className='login-page'>
            <div className='login'>
                {(!isSubmit?(<RegisterForm onSubmit={
                    onSubmit}/>):<Pricequote/>)}
            </div>

        </div>

    )
}
export default RegisterPage;