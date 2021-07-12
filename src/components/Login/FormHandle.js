import { useState, useEffect } from 'react';

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


    const refresh = e =>{
        e.preventDefault()
        const values={username:enteredUsername,password:enteredpassword,email:enteredEmail,password2:enteredPassword2}
        console.log(values)
        setErrors(validation(values))
        setsubmit(true);
        setEnteredUsername('')
        setEnteredPassword('')
        setEnteredPassword2('')
        setEnteredEmail('')


    };
    useEffect(() =>{
        if(Object.keys(errors).length===0 && isSubmit){
            callback();
            }
    },[errors]
    );
    return [refresh,errors,userChangeHandler,pwdChangeHandler,enteredpassword,enteredUsername,emailChangeHandler,pwdChangeHandler2,enteredEmail,enteredPassword2];
};

export default FormHandle;