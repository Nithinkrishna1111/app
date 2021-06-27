import { useState, useEffect } from 'react';

const Formvalid = (valid) => {
    const[values, setValues]=useState({
        username: '',
        email:'',
        password:'',
        password2: ''

    });
    const [errors,setErrors]=useState({})
    const [isSubmit,setsubmit]=useState(false)
    const change= e=>{
        setValues({
            ...values,[e.target.name]:e.target.value
        });
    };
    const submitrefresh = e =>{
        e.preventDefault()
        setErrors(valid(values))
        setsubmit(true)
    };

    return {change,values,submitrefresh,errors};
}
export default Formvalid;