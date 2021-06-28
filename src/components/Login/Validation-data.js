import {useState} from "react";
export default function Validationdata(values){
    let errors={}
    if(!values.username.trim()){
        errors.username="username required"
    }
    if(!values.password){
        errors.password="Password required"
    }
    else if (values.password.length<5){
        errors.password="Password too short"
    }
    if(!values.password2){
        errors.password2="Reenterpasword"
    }
    else if(values.password2!=values.password){
        errors.password2="Passwords not matching"
    }
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    return errors;

}