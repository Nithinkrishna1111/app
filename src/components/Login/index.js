import React, {useState} from "react";
import Pricequote from './Pricequote'
import Login from "./login";


const Index = () => {
  const[isSubmit,setSubmit]=useState(false);

  function onSubmit(){
    setSubmit(true);
  }

  return(
      <div>
        {/*<Pricequote/>*/}
        {!isSubmit?(<Login onSubmit={
          onSubmit}/>):<Pricequote/>}
      </div>
  )

};
export default Index;