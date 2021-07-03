import React from "react";
import {useState} from "react";
import PricequoteForm from "./PricequoteForm";
import FuelQuoteHistoryPage from "../FuelQuoteHistory/FuelQuoteHistoryPage";
import'./Pricequote.css'


const Pricequote=()=>{
    const[isSubmit,setSubmit]=useState(false);

    function onSubmit(){
        setSubmit(true);
    }
    return(
        <div className='price-page'>
            <div className='price'>
                {(!isSubmit?(<PricequoteForm onSubmit={
                    onSubmit}/>):<FuelQuoteHistoryPage/>)}
            </div>
        </div>
    )
}

export default Pricequote;
