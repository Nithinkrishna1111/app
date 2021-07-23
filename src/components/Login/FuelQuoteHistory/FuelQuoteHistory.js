import {useEffect, useState} from "react";
import './FuelQuoteHistoryPage.css'
import {useSelector} from "react-redux";
import {CircularProgress, Grid} from "@material-ui/core";
import FuelQuoteHistoryPage from "./FuelQuoteHistoryPage";

function FuelQuoteHistory({post}){
    // const[PriceHistory,SetPriceHistory]=useState('')
    // const date=new Date(props.Delivery_Date)
    // const day=date.toLocaleString('en-US',{day:'2-digit'})
    // const month=date.toLocaleString('en-US',{month:'long'})
    // const year=date.getFullYear()
    // console.log(props.Delivery_Date)
    // const users = useSelector((state)=>state.users)
    // console.log(users)
    // const users=useSelector((state) => state.users);
    // console.log(users)












    return(

        <div>


            {/*<div className='quote-item'>*/}

            {/*    <div className='date'>*/}
            {/*        <div className='date-month'> {month}</div>*/}
            {/*        <div className='date-year'> {year}</div>*/}
            {/*        <div className='date-day'> {day}</div>*/}

            {/*    </div>*/}

            {/*    <div className='quote-item__description'>*/}
            {/*        <h2>Address: {props.Delivery_Address}</h2>*/}
            {/*        <h2>Gallons Requested:  {props.Gallons}</h2>*/}

            {/*        <div className='quote-item__price'>Total Amount Due:  {props.Gallons * props.Suggested_Price_gallon}$</div>*/}



            {/*    </div>*/}


            {/*</div>*/}
            <div>

                <h1>{post.date}</h1>
                {/*<h1>{post.password}</h1>*/}
                {/*<h1>{post.email}</h1>*/}
            </div>

            {/*<div>*/}
            {/*    !users.length ? <CircularProgress /> : (*/}
            {/*    <Grid >*/}
            {/*        {users.map((post) => (*/}
            {/*            <Grid key={post._id} >*/}
            {/*                <FuelQuoteHistoryPage post={post}/>*/}
            {/*            </Grid>*/}
            {/*        ))}*/}
            {/*    </Grid>*/}
            {/*    )*/}
            {/*</div>*/}



        </div>
    )
}
export default FuelQuoteHistory