import {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const FormHandle = (callback, validation) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const userChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const [enteredpassword, setEnteredPassword] = useState('')
    const pwdChangeHandler = (e) => {
        setEnteredPassword(e.target.value)
    }

    const [enteredPassword2, setEnteredPassword2] = useState('')
    const pwdChangeHandler2 = (e) => {
        setEnteredPassword2(e.target.value)
    }

    const [enteredEmail, setEnteredEmail] = useState('')
    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
    }


    const [errors, setErrors] = useState({})
    const [isSubmit, setsubmit] = useState(false);
    const[mesage,setmesage]=useState(null)

    const values = {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredpassword,
        password2: enteredPassword2
    }


    let history = useHistory();
    const BasicInformationHandle = () => {
        history.push("/BasicInformation")
    }
    const book={
        'bookID': 'nithin',
            'bookTitle': 'kris',
        'bookAuthor': 'ni'
    };

    const refresh = async (e) => {
        e.preventDefault()

        const response=await axios.post('http://localhost:/5000/login', book).catch((err) => {
            if (err && err.response)
                console.log("Error",err);
            // console.log(values)


        })
        setErrors(validation(values))
        setsubmit(true)


        // if(response && response.data){
        //     setmesage(response.data)
        // }
        // if(response){
        //
        // }

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