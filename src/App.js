import React,{useEffect} from "react";
import Home from './components/Login/Home/Home'
import {getUsers} from './actions/login'
import {useDispatch} from "react-redux";

function App() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])

    return (
        <div className="App">

            <Home/>
        </div>
    );
}

export default App;
