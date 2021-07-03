import {useState} from "react";
import BasicInformationForm from "./BasicInformationForm";
import Pricequote from "../PriceQuote/Pricequote";
import './BasicInformationPage.css'
const BasicInformationPage =()=>{
    const[isSubmit,setSubmit]=useState(false);

    function onSubmit(){
        setSubmit(true);
    }


    return(
        <div className='basic-page'>

            <div className='basic'>

                {(!isSubmit?(<BasicInformationForm onSubmit={
                    onSubmit}/>):<Pricequote/>)}
            </div>

        </div>

    )
}
export default BasicInformationPage;
