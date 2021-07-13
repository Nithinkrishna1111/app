import {Fragment} from "react";
import {useState} from "react";
import PricequoteForm from "./PricequoteForm";
import FuelQuoteHistoryPage from "../FuelQuoteHistory/FuelQuoteHistoryPage";
import './Pricequote.css'
import Header from "../layout/Header";



const Pricequote = () => {
    const [isSubmit, setSubmit] = useState(false);

    function onSubmit() {
        setSubmit(true);
    }


    return (
        <Fragment>

            <div className='price-page'>
                <div className='price'>
                    {(!isSubmit ? (<PricequoteForm onSubmit={
                        onSubmit}/>) : <FuelQuoteHistoryPage/>)}
                </div>
                &nbsp;
                <Header/>

            </div>
        </Fragment>
    )
}

export default Pricequote;
