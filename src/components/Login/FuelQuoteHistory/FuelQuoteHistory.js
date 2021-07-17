import {useEffect, useState} from "react";
import './FuelQuoteHistoryPage.css'
function FuelQuoteHistory(props){
    const[PriceHistory,SetPriceHistory]=useState('')
    const date=new Date(props.Delivery_Date)
    const day=date.toLocaleString('en-US',{day:'2-digit'})
    const month=date.toLocaleString('en-US',{month:'long'})
    const year=date.getFullYear()
    console.log(props.Delivery_Date)

    const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

    function reviver(key, value) {
        if (typeof value === "string" && dateFormat.test(value)) {
            return new Date(value);
        }

        return value;

    }






    return(
        <div>

            <div className='quote-item'>

                <div className='date'>
                    <div className='date-month'> {month}</div>
                    <div className='date-year'> {year}</div>
                    <div className='date-day'> {day}</div>

                </div>

                <div className='quote-item__description'>
                    <h2>Address: {props.Delivery_Address}</h2>
                    <h2>Gallons Requested:  {props.Gallons}</h2>

                    <div className='quote-item__price'>Total Amount Due:  {props.Gallons * props.Suggested_Price_gallon}$</div>



                </div>


            </div>
        </div>
    )
}
export default FuelQuoteHistory