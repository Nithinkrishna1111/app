import { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";

const PricequoteHandle=(callback,validation)=>{
    const [gallons, setGallons] = useState(0);
    const gallonChangeHandler=(e) =>{
        setGallons(e.target.value)
    }
    const [Delivery_Address, setAddress] = useState('');
    const AddressChangeHandler=(e) =>{
        setAddress(e.target.value)
    }

    const [date, setDate] = useState('');
    const dateChangeHandler=(e) =>{
        setDate((e.target.value).toString())
    }


    const [price,setPrice]=useState(0)

    const priceChangeHandler=(e) =>{
        setPrice(e.target.value)
    }



    const [errors,setErrors]=useState({})
    const [isSubmit,setsubmit]=useState(false);

    let history =useHistory();
    const historyHandle=()=>{
        history.push("/FuelQuoteHistory")
    }

    const refresh = e =>{
        e.preventDefault()
        const values={Gallons:gallons,Delivery_date:date}
        console.log(values)
        console.log(isSubmit)
        console.log(errors)

        setErrors(validation(values))
        setsubmit(true);
        setPrice('');
        setDate('');
        setAddress('');
        setGallons('');

    };
    useEffect(() =>{
            if(Object.keys(errors).length===0 && isSubmit){
                callback();
                historyHandle()
            }
        },[errors]
    );
    return[refresh,errors,gallons,Delivery_Address,date,price,gallonChangeHandler,AddressChangeHandler,dateChangeHandler,priceChangeHandler]
}
export default PricequoteHandle
