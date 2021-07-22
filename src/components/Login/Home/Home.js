
import React, {useState} from 'react'
import '../Loginpages/LoginPage.css'
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'

import LoginPage from '../Loginpages/LoginPage'
import Pricequote from "../PriceQuote/Pricequote";
import Register from '../Registerpages/RegisterPage'
import './Home.css'
import BasicInformationPage from "../BasicInformation/BasicInformationPage";

import FuelQuoteHistoryPage from "../FuelQuoteHistory/FuelQuoteHistoryPage";
const Home = () =>{

    return(
        <Router>
            {/*<div className='top-bar'>*/}
            {/*    <Link to ="/"> Login </Link>*/}
            {/*    <Link to ="/Register">Register</Link>*/}

            {/*</div>*/}

            <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/BasicInformation" exact component={BasicInformationPage}/>
                <Route path="/FuelQuoteHistory/:id" exact component={FuelQuoteHistoryPage}/>
                <Route path="/PriceQuote/:id" exact component={Pricequote}/>
            </Switch>
        </Router>
    );
};
export default Home;

