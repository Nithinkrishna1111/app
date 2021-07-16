import { useState, useEffect } from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import fire from "../../../fire";
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
    const[data,setData]=useState({
        name:enteredUsername
    })


    const values={username:enteredUsername,password:enteredpassword,email:enteredEmail,password2:enteredPassword2}


    let history =useHistory();
    const fuelquotehistory=()=>{
        history.push("/PriceQuote")
    }
    const refresh = e =>{
        e.preventDefault()

        console.log(values)
        setErrors(validation(values))
        setsubmit(true)

        // axios.post('http://localhost:8080/',{name:data.name}).then(res=>{
        //     console.log(res.data).catch(error=>{
        //         console.log(error)
        //     })
        // })
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