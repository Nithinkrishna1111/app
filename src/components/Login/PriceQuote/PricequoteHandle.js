import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateUser,createUserQuote} from "../../../actions/login";
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
    const users=useSelector((state) =>  state.users.find((p)=>p._id===id));

    const dispatch=useDispatch()
    const refresh = e =>{
        e.preventDefault()
        const values={gallonsRequired:gallons,date:date}
        const vals={id:id,gallonsRequired:gallons,date:date,address:users.address1}

        console.log(id,"id in priceqyote handle ")

        dispatch(createUserQuote(vals))

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
