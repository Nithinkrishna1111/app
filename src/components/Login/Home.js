
import React, {useState} from 'react'
import './Loginpages/LoginPage.css'
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'

import LoginPage from './Loginpages/LoginPage'
import Pricequote from "./Pricequote";

const Home = () =>{

    return(
        <Router>
            <div className='top-bar'>
                <Link to ="/"> Login </Link>
                <Link to ="/Pricequote">Register</Link>

            </div>

            <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/Register" exact component={Pricequote}/>
            </Switch>
        </Router>
    );
};
export default Home;

