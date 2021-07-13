import './FuelQuoteHistoryPage.css'

import FuelQuoteHistory from "./FuelQuoteHistory";
import {useEffect,useState} from "react";

const FuelQuoteHistoryPage=()=>{


    const Quotes=[{Gallons:3,Delivery_Address:'8450 cambridge st',Delivery_Date:new Date(2021,2,28)
    ,Suggested_Price_gallon:4},
        {Gallons:2,Delivery_Address:'3148 Holyhall',Delivery_Date:new Date(2021,2,28)
            ,Suggested_Price_gallon:7}]



    useEffect(()=>{
        fetchItems();
    },[]);


    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/history');
        const items = await data.json();
        setItems(items)
    }


    return(
       <div >
           <div className='bg'>
               <h1 className='Title'>Price Quote History</h1>
           </div>
            &nbsp;

           <FuelQuoteHistory Gallons={Quotes[0].Gallons} Delivery_Address={Quotes[0].Delivery_Address} Delivery_Date=
           {Quotes[0].Delivery_Date} Suggested_Price_gallon={Quotes[0].Suggested_Price_gallon}></FuelQuoteHistory>
           <FuelQuoteHistory Gallons={Quotes[1].Gallons} Delivery_Address={Quotes[1].Delivery_Address} Delivery_Date=
               {Quotes[1].Delivery_Date} Suggested_Price_gallon={Quotes[1].Suggested_Price_gallon}></FuelQuoteHistory>

           {
               items.map(item => (
                   <div>
                       <p>{item.username}</p>
                       <p>{item.email}</p>
                       <p>{item.password}</p>

                   </div>

               ))
           }
       </div>

    )
}

export default FuelQuoteHistoryPage