import {useState} from "react";

import BasicInformationPage from '../BasicInformation/BasicInformationPage'
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
                    onSubmit}/>):<BasicInformationPage/>)}
            </div>

        </div>

    )
}
export default RegisterPage;