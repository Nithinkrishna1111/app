
import {useState} from "react";
import LoginForm from "./LoginForm";
import Pricequote from "../PriceQuote/Pricequote";
const LoginPage =()=>{
    const[isSubmit,setSubmit]=useState(false);

    function onSubmit(){
        setSubmit(true);
    }


    return(
        <div className='login-page'>
            <div className='login'>
                {(!isSubmit?(<LoginForm onSubmit={
                    onSubmit}/>):<Pricequote/>)}
            </div>

        </div>

    )
}
export default LoginPage;