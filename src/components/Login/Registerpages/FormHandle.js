import {useState, useEffect} from 'react';
import axios from "axios";

import {useDispatch,useSelector} from "react-redux";

import {useHistory} from "react-router-dom";
import {createUser, getUsers, updateUser} from "../../../actions/login"
const querystring = require('querystring');
const http = require('http');

const FormHandle = (callback, validation,currentId,onId) => {
    const [postData,setPostData]=useState({username:'',email:'',password:''})

    const [enteredUsername, setEnteredUsername] = useState('')
    const userChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
        setPostData({...postData,username: e.target.value})
    }

    const [enteredpassword, setEnteredPassword] = useState('')
    const pwdChangeHandler = (e) => {
        setEnteredPassword(e.target.value)
        setPostData({...postData,password: e.target.value})
    }

    const [enteredPassword2, setEnteredPassword2] = useState('')
    const pwdChangeHandler2 = (e) => {
        setEnteredPassword2(e.target.value)
    }

    const [enteredEmail, setEnteredEmail] = useState('')
    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
        setPostData({...postData,email: e.target.value})
    }


    const dispatch = useDispatch()

    const [errors, setErrors] = useState({})
    const [isSubmit, setsubmit] = useState(false);
    // const [isSub, setsub] = useState(true);


    const values = {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredpassword,
        password2: enteredPassword2
    }


    let history = useHistory();
    const BasicInformationHandle = () => {
        history.push("/")
    }
    useEffect(()=>{
        dispatch(getUsers())
    },[enteredUsername])

    const user=useSelector((state) =>  state.users.find((p)=>p.username===enteredUsername));

    console.log(user)

    const refresh = async (e) => {
        e.preventDefault()
        dispatch(createUser(postData))


        setErrors(validation(values,user))
        setsubmit(true)
        setEnteredUsername('')
        setEnteredPassword('')
        setEnteredPassword2('')
        setEnteredEmail('')
        dispatch(getUsers())

    };

    useEffect(() => {
            if (Object.keys(errors).length === 0 && isSubmit) {
                callback();

                BasicInformationHandle()
            }
        }, [errors]
    );

    return [refresh, errors, userChangeHandler, pwdChangeHandler, enteredpassword, enteredUsername, emailChangeHandler, pwdChangeHandler2, enteredEmail, enteredPassword2];
};

export default FormHandle;