import { useState, useEffect } from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const querystring = require('querystring');
const http = require('http');

const FormHandle=(callback,validation)=>{

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


    let history =useHistory();
    const fuelquotehistory=()=>{
        history.push("/PriceQuote")
    }
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
    const refresh = e =>{
        e.preventDefault()
        // const req = http.request(options, function(res) {
        //     res.setEncoding('utf8');
        //     res.on('data', function (chunk) {
        //         console.log("body: " + chunk);
        //     });
        // });
        // req.write(data);
        // req.end();

        console.log(values)
        setErrors(validation(values))
        setsubmit(true)
        axios.post('http://127.0.0.1:5000/login',data).catch(error=>{
            console.log(error)
        })


        // then(res=>{
        //     console.log(res.data)
        // fire.auth().signInWithEmailAndPassword(enteredUsername,enteredpassword).then((u)=>{console.log(u)}).catch((err)=>{
        //     console.log(err)
        // })
        setEnteredUsername('')
        setEnteredPassword('')
        setEnteredPassword2('')
        setEnteredEmail('')

    };

    useEffect(() =>{
        if(Object.keys(errors).length===0 && isSubmit){
            callback();

            fuelquotehistory()

            }
    },[errors]
    );

    return [refresh,errors,userChangeHandler,pwdChangeHandler,enteredpassword,enteredUsername,emailChangeHandler,pwdChangeHandler2,enteredEmail,enteredPassword2];
};

export default FormHandle;