import { useState, useEffect } from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {updateUser,createUser,validateUser} from "../../../actions/login";

const querystring = require('querystring');
const http = require('http');

const FormHandle=(callback,validation,onId,currentId)=>{

    const[enteredUsername,setEnteredUsername]=useState('')
    const userChangeHandler=(e) =>{
        setEnteredUsername(e.target.value)
    }

    const [enteredpassword,setEnteredPassword]=useState('')
    const pwdChangeHandler=(e) =>{
        setEnteredPassword(e.target.value)
    }

    const [enteredPassword2,setEnteredPassword2]=useState('')
    const pwdChangeHandler2=(e) =>{
        setEnteredPassword2(e.target.value)
    }

    const [enteredEmail,setEnteredEmail]=useState('')
    const emailChangeHandler=(e) =>{
        setEnteredEmail(e.target.value)
    }


    const [errors,setErrors]=useState({})
    const [isSubmit,setsubmit]=useState(false);


    const values={username:enteredUsername,password:enteredpassword,email:enteredEmail,password2:enteredPassword2}

    // const users=useSelector((state) => currentId ? state.users.find((p)=>p._id===currentId):null);

    const users=useSelector((state) => !currentId ? state.users.find((p)=>p.username===enteredUsername):null);
    // console.log(users)
    const dispatch=useDispatch()
    let history =useHistory();

    const data = querystring.stringify({
        username: enteredUsername,
        password: enteredpassword
    });

    const options = {
        host: '127.0.0.1',
        port:5000,
        path: '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': data.length
        }
    };
    const [uname,setUname]=useState(null)
    const refresh = e =>{
        e.preventDefault()

        console.log(values)
        dispatch(validateUser(values))

        // console.log(users._id)
        if (typeof users !== 'undefined'){
            console.log(users._id,"above on id")
            onId(users._id)
            setUname(users.fullname)
            console.log(users)
            console.log((typeof users._id))
            const myJSON = JSON.stringify(users._id);
            console.log((typeof myJSON))

        }
        else {
            onId(null)
        }
        // console.log(currentId)




        setErrors(validation(values,users))

        setsubmit(true)

        setEnteredUsername('')
        setEnteredPassword('')
        setEnteredPassword2('')
        setEnteredEmail('')
        console.log(errors)

    };
    const fuelquotehistory=()=>{
        if(uname!=null){
            console.log(uname,"if")
            history.push(`/PriceQuote/${currentId}`)}
        else{
            console.log(uname,"else")
            history.push(`/BasicInformation/${currentId}`)}
        }


    useEffect(() =>{
        if(Object.keys(errors).length===0 && isSubmit){


            callback();


            console.log(currentId)





            // dispatch({type:'AUTH',data:{values}})
            fuelquotehistory()


            }
    },[errors]
    );

    return [refresh,errors,userChangeHandler,pwdChangeHandler,enteredpassword,enteredUsername,emailChangeHandler,pwdChangeHandler2,enteredEmail,enteredPassword2];
};

export default FormHandle;