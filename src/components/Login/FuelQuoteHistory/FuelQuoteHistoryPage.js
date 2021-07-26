import './FuelQuoteHistoryPage.css'

import FuelQuoteHistory from "./FuelQuoteHistory";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { Grid, CircularProgress } from '@material-ui/core';
import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const FuelQuoteHistoryPage=()=>{
    const {id}=useParams()
    // let currentId=null

    const Quotes=[{Gallons:3,Delivery_Address:'8450 cambridge st',Delivery_Date:new Date(2021,2,28)
        ,Suggested_Price_gallon:4},
        {Gallons:2,Delivery_Address:'3148 Holyhall',Delivery_Date:new Date(2021,2,28)
            ,Suggested_Price_gallon:7}]
    // const users=useSelector((state) => state.users.find((p)=>p._id===idd));
    // const quotes=useSelector((state) => state.quotes.find((p)=>p.id===idd));
// .find((p)=>p.id===id)

    // const quotes=useSelector((state) => state.quotes);
    // console.log(quotes)

    // console.log(typeof id)
    const history=useHistory()
    const quotes=useSelector((state) =>  state.quotes)

    console.log(quotes)
    console.log(id)
    let filteredQuotes=quotes.filter(obj=>obj.id==id)
    console.log(filteredQuotes)


    const logoutHandler=()=>{
        history.push(history.push("/"))


    }


    return(
        <div>
            <form>
                <div className='logoutBtn' onClick={logoutHandler}>
                    <button type="submit" >LOGOUT</button>
                </div>
            </form>
            <div className='bg'>
                <h1 className='Title'>Price Quote History</h1>
                &nbsp;
            </div>
            <div>
                {
                    !quotes.length ? <CircularProgress /> : (
                        <Grid >
                            {filteredQuotes.map((post) => (
                                <Grid key={post._id} >
                                    <FuelQuoteHistory post={post} />
                                </Grid>
                            ))}
                        </Grid>
                    )
                }
            </div>
        </div>



    )
}

export default FuelQuoteHistoryPage