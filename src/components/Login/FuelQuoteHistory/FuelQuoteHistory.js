import {useState} from "react";
import './FuelQuoteHistoryPage.css'
function FuelQuoteHistory(props){
    //const[PriceHistory,SetPriceHistory]=useState('')
    const day=props.Delivery_Date.toLocaleString('en-US',{day:'2-digit'})
    const month=props.Delivery_Date.toLocaleString('en-US',{month:'long'})
    const year=props.Delivery_Date.getFullYear()
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