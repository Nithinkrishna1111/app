import './FuelQuoteHistoryPage.css'

import FuelQuoteHistory from "./FuelQuoteHistory";
const FuelQuoteHistoryPage=()=>{

    const expenseDate=new Date(2021,2,28);
    const expenseTitle= 'CarInsurance';
    const expenseAmount=294.67
    const Quotes=[{Gallons:3,Delivery_Address:'8450 cambridge st',Delivery_Date:new Date(2021,2,28)
    ,Suggested_Price_gallon:4},
        {Gallons:2,Delivery_Address:'3148 Holyhall',Delivery_Date:new Date(2021,2,28)
            ,Suggested_Price_gallon:7}]


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
       </div>

    )
}

export default FuelQuoteHistoryPage