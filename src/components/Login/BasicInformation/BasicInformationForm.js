
import './BasicInformationForm.css'
import{useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import BasicFormHandle from './BasicInformationHandle'
import loginImg from '../Home/user-icon-trendy-flat-style-260nw-418179865.jpeg';
import {useHistory} from "react-router-dom"
import validation from './Validation-basic'


const BasicInformationForm =({ onSubmit }) =>
{
    let history =useHistory();
    const [refresh,errors,FullNameChangeHandler,Address1ChangeHandler,Address2ChangeHandler,CityChangeHandler,StateChangeHandler,ZipcodeChangeHandler,enteredFullName,enteredAddress1,enteredAddress2,enteredCity,enteredState,enteredZipcode,amount,PriceHandler]=BasicFormHandle(onSubmit,validation)
    const signup=()=>{
        history.push("/register")
    }


    return(
        <Router>
            <form >
                <div className='Basic-form'>
                    {/*<div className='image'>*/}
                    {/*    <img src={loginImg}/>*/}
                    {/*/!*</div>*!/*/}
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <h1>Profile </h1>

                    <div className='BasicForm-Input'>
                        {/*<label>fullname</label>*/}
                        <input
                            type='text'
                            name='fullname'
                            placeholder='Enter Fullname'
                            value={enteredFullName}
                            onChange={FullNameChangeHandler}
                        />
                        {errors.fullname && <p>*{errors.fullname}</p>}
                    </div>
                    &nbsp;
                    <div className='BasicForm-Input'>
                        {/*<label>Password</label>*/}
                        &nbsp;
                        <input
                            type='text'
                            name='address1'
                            placeholder='Enter your Address'
                            value={enteredAddress1}
                            onChange={Address1ChangeHandler}
                        />
                        {errors.address1 && <p>*{errors.address1}</p>}
                    </div>
                    &nbsp;
                    <div className='BasicForm-Input'>
                        {/*<label>Password</label>*/}
                        <input
                            type='text'
                            name='address2'
                            placeholder='Enter your Address'
                            value={enteredAddress2}
                            onChange={Address2ChangeHandler}
                        />
                        {errors.address2 && <p>*{errors.address2}</p>}
                    </div>
                    &nbsp;
                    <div className='BasicForm-Input'>
                        {/*<label>Password</label>*/}
                        <input
                            type='text'
                            name='city'
                            placeholder='Enter your City'
                            value={enteredCity}
                            onChange={CityChangeHandler}
                        />
                        {errors.city && <p>*{errors.city}</p>}
                    </div>
                    &nbsp;
                    <div className='BasicForm-Input'>
                        {/*<label>State</label>*/}
                        <select className="form-control" id="state" name="state"  placeholder='State' onChange={StateChangeHandler}>
                            <option value="">State</option>
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DC">District of Columbia</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        {errors.state && <p>*{errors.state}</p>}
                    </div>
                    &nbsp;
                    <div className='BasicForm-Input'>
                        {/*<label>Password</label>*/}
                        <input
                            type='text'
                            name='Zipcode'
                            placeholder='Enter your Zipcode'
                            value={enteredZipcode}
                            onChange={ZipcodeChangeHandler}
                        />
                        {errors.zipcode && <p>*{errors.zipcode}</p>}
                    </div>
                    &nbsp;
                    {/*<div className='BasicForm-Input'>*/}
                    {/*    <input readOnly value={2*enteredZipcode}placeholder='Quote' />*/}
                    {/*</div>*/}
                    &nbsp;
                    {/*<div className='price-quote' onClick={PriceHandler}>*/}
                    {/*    <button type='submit'>Generate Quote </button>*/}
                    {/*</div>*/}
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <div className='loginBtn' onClick={refresh}>
                        <button type="submit" >Submit</button>
                    </div>

                </div>
            </form>
        </Router>





    )
}
export default BasicInformationForm
