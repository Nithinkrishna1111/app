import {Fragment, useState} from "react";
import LoginForm from "./LoginForm";
import Pricequote from "../PriceQuote/Pricequote";

import Header from "../layout/Header"
const LoginPage = () => {
    const [isSubmit, setSubmit] = useState(false);

    function onSubmit() {
        setSubmit(true);
    }


    return (
        <Fragment>

            <div className='login-page'>
                <div className='login'>
                    {/*{(!isSubmit ? (<LoginForm onSubmit={*/}
                    {/*    onSubmit}/>) : <Pricequote/>)}*/}
                    {!isSubmit && <LoginForm onSubmit={onSubmit}/> }
                    {isSubmit && <Pricequote/>}
                </div>

            </div>
        </Fragment>

    )
}
export default LoginPage;