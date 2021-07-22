import './FuelQuoteHistoryPage.css'

import FuelQuoteHistory from "./FuelQuoteHistory";
import {useSelector} from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core';
import {useEffect,useState} from "react";
import axios from "axios";

const FuelQuoteHistoryPage=()=>{


    const Quotes=[{Gallons:3,Delivery_Address:'8450 cambridge st',Delivery_Date:new Date(2021,2,28)
        ,Suggested_Price_gallon:4},
        {Gallons:2,Delivery_Address:'3148 Holyhall',Delivery_Date:new Date(2021,2,28)
            ,Suggested_Price_gallon:7}]
    const users=useSelector((state) => state.users);
    console.log(users)



    return(
        <div>
            <div className='bg'>
                <h1 className='Title'>Price Quote History</h1>
                &nbsp;
            </div>
            <div>
                {
                    !users.length ? <CircularProgress /> : (
                        <Grid >
                            {users.map((post) => (
                                <Grid key={post._id} >
                                    <FuelQuoteHistory post={post}  />
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