import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser} from "../../../actions/login";
import axios from "axios";
const querystring = require('querystring');

const http = require('http');

const PricequoteHandle=(callback,validation,id)=>{
    const [gallons, setGallons] = useState(0);
    const gallonChangeHandler=(e) =>{
        setGallons(e.target.value)
    }
    const [Delivery_Address, setAddress] = useState('');
    const AddressChangeHandler=(e) =>{
        setAddress(e.target.value)
    }

    const [date, setDate] = useState('');
    const dateChangeHandler=(e) =>{
        setDate((e.target.value).toString())
    }


    const [price,setPrice]=useState(0)

    const priceChangeHandler=(e) =>{
        setPrice(e.target.value)
    }



    const [errors,setErrors]=useState({})
    const [isSubmit,setsubmit]=useState(false);

    let history =useHistory();
    const historyHandle=()=>{
        history.push(`/FuelQuoteHistory/${id}`)
    }
    const data = querystring.stringify({
        Gallons:gallons,
        address:Delivery_Address,
        Date:date,
        Price:price
    });
    const dispatch=useDispatch()
    const refresh = e =>{
        e.preventDefault()
        const values={gallonsRequired:gallons,date:date}
        console.log(data)
        console.log(id,"id in priceqyote handle ")

        dispatch(updateUser(id,values))

        setErrors(validation(values))
        setsubmit(true);
        setPrice('');
        setDate('');
        setAddress('');
        setGallons('');

    };
    useEffect(() =>{
            if(Object.keys(errors).length===0 && isSubmit){
                callback();
                historyHandle()
            }
        },[errors]
    );
    return[refresh,errors,gallons,Delivery_Address,date,price,gallonChangeHandler,AddressChangeHandler,dateChangeHandler,priceChangeHandler]
}
export default PricequoteHandle
