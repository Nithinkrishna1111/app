

import React from "react";
import validation from './PricequoteValidation'
import PricequoteHandle from './PricequoteHandle'
import'./PricequoteForm.css'
import {BrowserRouter as Router} from "react-router-dom";
const PricequoteForm=( {onSubmit} )=> {
    const[refresh,errors,gallons,Delivery_Address,date,price,gallonChangeHandler,AddressChangeHandler,dateChangeHandler,priceChangeHandler]=PricequoteHandle(onSubmit,validation)
    const qprice=5

    return (
        <Router>
            <form >
                <div className='Login-Form'>

                    &nbsp;&nbsp;&nbsp;
                    <div className='LoginForm-Input'>
                        <h1>Price Quote Form</h1>
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
                        {/*<label>Password</label>*/}
                        <input readOnly
                               name='Delivery Address'
                               placeholder='Delivery Address:'
                               type="textArea"
                               value='8450 cambridge street'
                        />

                    </div>
                    &nbsp;
                    <div className='LoginForm-Input'>
                        {/*<label>Password</label>*/}
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
                        {/*<label>Password</label>*/}
                        <input readOnly
                               name='Suggestedprice'
                               value={qprice}/>

                    </div>

                    &nbsp;
                    <div className='LoginForm-Input'>
                        {/*<label>Password</label>*/}
                        <input readOnly value={5*qprice}placeholder='Quote' />

                    </div>
                    &nbsp;
                    <div className='loginBtn' onClick={refresh}>
                        <button type="submit" >Login</button>
                    </div>


                </div>
            </form>
        </Router>


    );
}

export default PricequoteForm;