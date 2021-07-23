import {useState} from "react";
import BasicInformationForm from "./BasicInformationForm";
import Pricequote from "../PriceQuote/Pricequote";
import './BasicInformationPage.css'
import {useParams} from "react-router-dom";
const BasicInformationPage =()=>{
    const[isSubmit,setSubmit]=useState(false);
    const {id}=useParams()


    function onSubmit(){
        setSubmit(true);
    }


    return(
        <div className='basic-page'>

            <div className='basic'>

                {(!isSubmit?(<BasicInformationForm onSubmit={
                    onSubmit} id={id}/>):<Pricequote/>)}
            </div>

        </div>

    )
}
export default BasicInformationPage;
