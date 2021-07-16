import React from "react";

import {useState,useEffect} from "react";
import Home from './components/Login/Home/Home'
import quote from './components/Login/PriceQuote/PricequoteForm'
import PricequoteForm from "./components/Login/PriceQuote/PricequoteForm";
import Pricequote from "./components/Login/PriceQuote/Pricequote";
import FuelQuoteHistory from "./components/Login/FuelQuoteHistory/FuelQuoteHistory";
import fire from './fire'
import nk from './components/nk'

function App() {
    // const authlistener=()=>{
    //     fire.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //
    //         }
    //     })
    // }
    // const [postId, setPostId] = useState(null);
    //
    // useEffect(() => {
    //     // POST request using fetch inside useEffect React hook
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    //     };
    //     fetch('http://localhost/5000/api/v1/register', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setPostId(data.id));
    //
    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    return (
        <div className="App">
        {/*<div>*/}
        {/*    <h1>nk rocks</h1>*/}
        {/*    <form>*/}
        {/*        <button type='submit'>login</button>*/}
        {/*    </form>*/}
        {/*    <nk/>*/}
            <Home/>
        </div>
    );
}

export default App;
