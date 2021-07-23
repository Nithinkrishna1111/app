import {useState} from "react";
import priceqoute from '../PriceQuote/Pricequote'
import BasicInformationPage from '../BasicInformation/BasicInformationPage'
import LoginPage from "../Loginpages/LoginPage";
import RegisterForm from "./RegisterForm";
import './RegisterPage.css'
const RegisterPage =()=>{
    const[isSubmit,setSubmit]=useState(false);
    const [currentId,setCurrentId]=useState(null)
    function onId(id){
        setCurrentId(id)
        console.log(id,"print id")
        console.log(currentId ,"outside global")
    }

    function onSubmit(){
        setSubmit(true);
    }






    return(
        <div className='register-page'>
            <div className='register'>
                {(!isSubmit?(<RegisterForm onSubmit={
                    onSubmit} currentId={currentId} onId={onId}/>):<LoginPage/>)}
            </div>


        </div>

    )
}
export default RegisterPage;