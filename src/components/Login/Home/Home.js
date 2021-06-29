
import React, {useState} from 'react'
import '../Loginpages/LoginPage.css'
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'

import LoginPage from '../Loginpages/LoginPage'
import Pricequote from "../PriceQuote/Pricequote";
import Register from '../Registerpages/RegisterPage'

const Home = () =>{

    return(
        <Router>
            {/*<div className='top-bar'>*/}
            {/*    <Link to ="/"> Login </Link>*/}
            {/*    <Link to ="/Register">Register</Link>*/}

            {/*</div>*/}

            <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/Register" exact component={Register}/>
            </Switch>
        </Router>
    );
};
export default Home;

