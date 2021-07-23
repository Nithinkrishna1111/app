
import {useState} from "react";
import LoginForm from "./LoginForm";
import Pricequote from "../PriceQuote/Pricequote";
const LoginPage =()=>{
    const[isSubmit,setSubmit]=useState(false);
    const [currentId,setCurrentId]=useState(null)

    function onSubmit(id){
        setSubmit(true);
        setCurrentId(id)
    }
    function onId(id){
        setCurrentId(id)
        console.log(id,"print id")
        console.log(currentId ,"outside global")
    }


    return(
        <div className='login-page'>
            <div className='login'>
                {(!isSubmit?(<LoginForm onSubmit={
                    onSubmit} onId={onId} currentId={currentId}/>):<Pricequote currentId={currentId}/>)}
            </div>

        </div>

    )
}
export default LoginPage;