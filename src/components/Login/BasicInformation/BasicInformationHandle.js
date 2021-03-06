import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {updateUser} from "../../../actions/login";
const querystring = require('querystring');


const BasicFormHandle=(callback,validation,id)=>{
    const[enteredFullName,setEnteredFullName]=useState('')
    const FullNameChangeHandler=(e) =>{
        setEnteredFullName(e.target.value)
    }

    const[enteredAddress1,setEnteredAddress1]=useState('')
    const Address1ChangeHandler=(e) =>{
        setEnteredAddress1(e.target.value)
    }

    const[enteredAddress2,setEnteredAddress2]=useState('')
    const Address2ChangeHandler=(e) =>{
        setEnteredAddress2(e.target.value)
    }

    const[enteredCity,setEnteredCity]=useState('')
    const CityChangeHandler=(e) =>{
        setEnteredCity(e.target.value)
    }

    const[enteredState,setEnteredState]=useState('')
    const StateChangeHandler=(e) =>{
        setEnteredState(e.target.value)
    }
    const[amount,setamount]=useState(0)
    const[enteredZipcode,setEnteredZipcode]=useState('')
    const ZipcodeChangeHandler=(e) =>{
        setEnteredZipcode(e.target.value)
        // setamount(enteredZipcode*2)

    }
    const PriceHandler=(e) =>{
        e.preventDefault()
        setamount(enteredZipcode*2)
    }
    const data = querystring.stringify({
        fullname:enteredFullName,
        city:enteredCity,
        address1:enteredAddress1,
        enteredAddress2:enteredAddress2,
        state:enteredState

    });




    const [errors,setErrors]=useState({})
    const [isSubmit,setsubmit]=useState(false);

    let history =useHistory();
    const BasicInformationHandler=()=>{
        history.push(`/PriceQuote/${id}`)
    }
    const dispatch=useDispatch()
    const refresh = e =>{
        e.preventDefault()
        const values={fullname:enteredFullName,address1:enteredAddress1,address2:enteredAddress2,city:enteredCity,state:enteredState,zipcode:enteredZipcode}
        console.log(values)
        dispatch(updateUser(id,values))
        setErrors(validation(values))
        setsubmit(true);

        setEnteredFullName('')
        setEnteredAddress1('')
        setEnteredAddress2('')
        setEnteredCity('')
        setEnteredState('')
        setEnteredZipcode('')



    };
    useEffect(() =>{
            if(Object.keys(errors).length===0 && isSubmit){
                callback();
                BasicInformationHandler()
            }
        },[errors]
    );
    return [refresh,errors,FullNameChangeHandler,Address1ChangeHandler,Address2ChangeHandler,CityChangeHandler,StateChangeHandler,ZipcodeChangeHandler,enteredFullName,enteredAddress1,enteredAddress2,enteredCity,enteredState,enteredZipcode,amount,PriceHandler];
};

export default BasicFormHandle;
