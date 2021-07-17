import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
const querystring = require('querystring');
const http = require('http');

const PricequoteHandle=(callback,validation)=>{
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
        history.push("/FuelQuoteHistory")
    }
    const data = querystring.stringify({
        Gallons:gallons,
        address:Delivery_Address,
        Date:date,
        Price:price
    });

    const refresh = e =>{
        e.preventDefault()
        const values={Gallons:gallons,Delivery_date:date}
        console.log(data)
        axios.post('http://127.0.0.1:5000/pricequote',data).catch(error=>{
            console.log(error)
        })
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
