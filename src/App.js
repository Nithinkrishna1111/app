import React,{useEffect,useState} from "react";
import Home from './components/Login/Home/Home'
import {getUsers} from './actions/login'
import {getUsersQuote} from './actions/login'
import {useDispatch} from "react-redux";



function App() {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
        dispatch(getUsersQuote())
    },[dispatch])


    return (
        <div className="App">

            <Home/>
        </div>
    );
}

export default App;
