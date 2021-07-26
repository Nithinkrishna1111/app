

import React, {useState} from "react";
import validation from './PricequoteValidation'
import PricequoteHandle from './PricequoteHandle'
import'./PricequoteForm.css'
import {BrowserRouter as Router} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

// Location Factor = 2% for Texas, 4% for out of state
//     Rate History Factor = 1% if client requested fuel before, 0% if no history (you can query fuel quote table to check if there are any rows for the client)
// Gallons Requested Factor = 2% if more than 1000 Gallons, 3% if less
//     Company Profit Factor = 10% always




const PricequoteForm=( {onSubmit,id} )=> {
    const[refresh,errors,gallons,Delivery_Address,date,price,gallonChangeHandler,AddressChangeHandler,dateChangeHandler,priceChangeHandler,getQuote,suggPrice]=PricequoteHandle(onSubmit,validation,id)
    const qprice=5

    const [disable, setDisable] = useState(false);

    const history=useHistory()
    const logoutHandler=()=>{
        history.push(history.push("/"))

    }
    //variable factors

    const users=useSelector((state) =>  state.users.find((p)=>p._id===id));




    // Location Factor = 2% for Texas, 4% for out of state
//     Rate History Factor = 1% if client requested fuel before, 0% if no history (you can query fuel quote table to check if there are any rows for the client)
// Gallons Requested Factor = 2% if more than 1000 Gallons, 3% if less
//     Company Profit Factor = 10% always
    console.log(users)





    // useEffect(() =>{
    //     Location Factor
    //     Rate History Factor
    //     Gallons Requested Factor
    //
    // },[])



    return (
        <Router>
            <form >
                <div className='logoutBtn' onClick={logoutHandler}>
                    <button type="submit" >LOGOUT</button>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className='Login-Form'>

                    &nbsp;&nbsp;&nbsp;
                    <div className='LoginForm-Input'>

                        <h1>Price Quote Form</h1>
                        <label>Gallons Requested</label>
                        <input
                            name='Gallons Requested'
                            placeholder='Enter Gallons '
                            type="number"
                            value={gallons}
                            onChange={gallonChangeHandler}
                        />
                        {errors.Gallons && <p>*{errors.Gallons}</p>}
                    </div>
                    &nbsp;
                    <div className='LoginForm-Input'>
                        <label>Delivery Address</label>
                        <input readOnly
                               name='Delivery Address'
                               placeholder='Delivery Address:'
                               type="textArea"
                               value={users.address1}
                        />

                    </div>
                    &nbsp;
                    <div className='LoginForm-Input'>
                        {/*<label>Password</label>*/}
                        <label>Date</label>
                        <input

                            name=''
                            placeholder='Pick the Delivery Date:'
                            type="date"
                            value={date}
                            onChange={dateChangeHandler}/>

                        {errors.Delivery_date && <p>*{errors.Delivery_date}</p>}
                    </div>
                    &nbsp;
                    <div className='LoginForm-Input'>
                        <label>Suggested Price</label>
                        <input readOnly
                               name='Suggestedprice'
                               value={suggPrice}/>

                    </div>

                    &nbsp;
                    <div className='LoginForm-Input'>
                        <label>Total Amount Due</label>
                        <input readOnly value={gallons*suggPrice}placeholder='Quote' />

                    </div>
                    &nbsp;
                    <div className='loginBtn' onClick={getQuote}>
                        <button type="submit" disabled={!gallons || !date } >GetQuote</button>
                    </div>
                    &nbsp;
                    <div className='loginBtn' onClick={refresh}>
                        <button type="submit" disabled={!gallons || !date } >PriceHistory</button>
                    </div>

                </div>
            </form>
        </Router>


    );
}

export default PricequoteForm;
