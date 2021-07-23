import {useState, useEffect} from 'react';
import axios from "axios";

import {useDispatch,useSelector} from "react-redux";

import {useHistory} from "react-router-dom";
import {createUser,updateUser} from "../../../actions/login"
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
    // const data = querystring.stringify({
    //     username: enteredUsername,
    //     email:enteredEmail,
    //     password: enteredpassword
    // });
    //
    // const options = {
    //     host: '127.0.0.1',
    //     port:5000,
    //     path: "/api/v1/register",
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Content-Length': data.length
    //     }
    // };

    const refresh = async (e) => {
        e.preventDefault()
        // const req = http.request(options, function(res) {
        //     res.setEncoding('utf8');
        //     res.on('data', function (chunk) {
        //         console.log("body: " + chunk);
        //     });
        // });
        // req.write(data);
        // req.end();
        dispatch(createUser(postData))
        // axios.post('http://127.0.0.1:4000/login',data).catch(error=>{
        //     console.log(error)
        // })
        // console.log(data)

        setErrors(validation(values))
        setsubmit(true)
        setEnteredUsername('')
        setEnteredPassword('')
        setEnteredPassword2('')
        setEnteredEmail('')

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