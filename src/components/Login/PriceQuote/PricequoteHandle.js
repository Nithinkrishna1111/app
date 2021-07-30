import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateUser,createUserQuote} from "../../../actions/login";
import axios from "axios";
const querystring = require('querystring');

const http = require('http');

const PricequoteHandle=(callback,validation,id)=>{
    const [gallons, setGallons] = useState('');
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
    const [loc,setLoc]=useState(0.04)
    const [rateHis,setRateHis]=useState(0)
    const[gallonsReq,setGallonsReq]=useState(0.03)
    const companyProfit=0.1
    const[suggPrice,setSuggPrice]=useState(0)
    const quotes=useSelector((state) =>  state.quotes)
    let filteredQuotes=quotes.filter(obj=>obj.id==id)
    const LocationFactor=()=>{
        if(users.state==="TX"){
            setLoc(0.02)
        }
        else {
            setLoc(0.04)
        }
    }
    const RateHistoryFactor=()=>{
        if (typeof filteredQuotes !== 'undefined' || filteredQuotes!=null ){
            setRateHis(0.01)
        }
    }
    const GallonsRequestedFactor=()=>{
        if(gallons>1000){
            setGallonsReq(0.02)
        }
        else{
            setGallonsReq(0.03)
        }
    }
    const SuggestedPrice=()=>{
        setSuggPrice(((loc-rateHis+gallonsReq+companyProfit)*1.50)+1.50)
    }
    useEffect(()=>{
        // setSuggPrice(((loc-rateHis+gallonsReq+companyProfit)*1.50)+1.50)
        if(users.state==="TX"){
            setLoc(0.02)
        }
        else {
            setLoc(0.04)
        }

    },[loc,rateHis,gallonsReq])

    const getQuote=(e)=>{
        e.preventDefault()
        LocationFactor()
        RateHistoryFactor()
        GallonsRequestedFactor()
        // SuggestedPrice()
        SuggestedPrice()
        setSuggPrice(((loc-rateHis+gallonsReq+companyProfit)*1.50)+1.50)
        console.log(loc,rateHis,gallonsReq,suggPrice)
        console.log(typeof filteredQuotes)
        console.log(filteredQuotes)
    }


    const dispatch=useDispatch()
    const refresh = e =>{
        e.preventDefault()
        const values={gallonsRequired:gallons,date:date}
        const vals={id:id,gallonsRequired:gallons,date:date,address:users.address1,suggestedPrice:suggPrice}

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
    return[refresh,errors,gallons,Delivery_Address,date,price,gallonChangeHandler,AddressChangeHandler,dateChangeHandler,priceChangeHandler,getQuote,suggPrice]
}
export default PricequoteHandle
