import {useState} from "react";
import priceqoute from '../PriceQuote/Pricequote'
import BasicInformationPage from '../BasicInformation/BasicInformationPage'
import RegisterForm from "./RegisterForm";
import './RegisterPage.css'
const RegisterPage =()=>{
    const[isSubmit,setSubmit]=useState(false);

    function onSubmit(){
        setSubmit(true);
    }


    return(
        <div className='register-page'>
            <div className='register'>
                {(!isSubmit?(<RegisterForm onSubmit={
                    onSubmit}/>):<BasicInformationPage/>)}
            </div>

        </div>

    )
}
export default RegisterPage;