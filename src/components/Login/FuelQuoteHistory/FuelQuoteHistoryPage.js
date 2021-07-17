import './FuelQuoteHistoryPage.css'

import FuelQuoteHistory from "./FuelQuoteHistory";
import {useEffect,useState} from "react";
import axios from "axios";

const FuelQuoteHistoryPage=()=>{


    const Quotes=[{Gallons:3,Delivery_Address:'8450 cambridge st',Delivery_Date:new Date(2021,2,28)
    ,Suggested_Price_gallon:4},
        {Gallons:2,Delivery_Address:'3148 Holyhall',Delivery_Date:new Date(2021,2,28)
            ,Suggested_Price_gallon:7}]

    const [items, setItems] = useState([]);

    // useEffect(()=>{
    //     // fetchItems();
    //     fetch('api/v1/register').then(res=>{
    //         if(res.ok){
    //             return res.json()
    //         }
    //     }).then(jsonResponse => console.log(jsonResponse))
    //
    //     router.get('/register',(req,res)=>{
    //         console.log('api/users called!')
    //         res.json(users)
    //     })
    // },[]);
    const quote={
        Gallons:'',
        Delivery_Address: '',
        Delivery_Date:'',
        Suggested_Price_gallon: ''
    }

    const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

    function reviver(key, value) {
        if (typeof value === "string" && dateFormat.test(value)) {
            return new Date(value);
        }

        return value;

    }







    useEffect(()=>{
        fetch('http://127.0.0.1:5000/api/v1/pricequote').then((response)=>{
            response.json().then((data)=>{
                console.log(data)
                console.log(Quotes[0].Delivery_Date)
                console.log(data.Quotes.Gallons)


                quote.Gallons=data.Quotes.Gallons
                quote.Delivery_Address=data.Quotes.Delivery_Address
                quote.Delivery_Date=data.Quotes.Delivery_Date

                quote.Suggested_Price_gallon=data.Quotes.Suggested_Price_gallon
                const[gal,dela,deld,sup]=[data.Quotes.Gallons,data.Quotes.Delivery_Address,data.Quotes.Delivery_Date,data.Quotes.Suggested_Price_gallon]
                console.log(quote.Suggested_Price_gallon)

            })
        })

    // .catch((err) => {
    //         if (err && err.response)
    //             console.log("Error",err);
    //         // console.log(values)
    //
    //
    //     })
        // const fetchItems = async () => {
        //     const data = await fetch('http://localhost:5000/register');
        //     const item = await data.json();
        //     console.log(item)
        //     setItems(item)
        //     console.log(items)
        // }
        // fetchItems()

        // const componentDidMount=async() => {
        //     // POST request using fetch with async/await
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ title: 'React POST Request Example' })
        //     };
        //     const response = await fetch('http://localhost:5000/register', requestOptions);
        //     const data = await response.json();
        //     this.setState({ postId: data.id });
        // }


    },[])
    // const obj = JSON.parse(quote.Delivery_Date, reviver);

    // https://jsonplaceholder.typicode.com/users



    // const fetchItems = async () => {
    //     const data = await fetch('/hello');
    //     const items = await data.json();
    //     console.log(items)
    // }



    return(
       <div >
           <div className='bg'>
               <h1 className='Title'>Price Quote History</h1>
           </div>
            &nbsp;

           <FuelQuoteHistory Gallons={Quotes[0].Gallons} Delivery_Address={Quotes[0].Delivery_Address} Delivery_Date=
           {Quotes[0].Delivery_Date} Suggested_Price_gallon={Quotes[0].Suggested_Price_gallon}></FuelQuoteHistory>
           {/*<FuelQuoteHistory Gallons={quote.Gallons} Delivery_Address={quote.Delivery_Address} Delivery_Date=*/}
           {/*    {obj} Suggested_Price_gallon={quote.Suggested_Price_gallon}></FuelQuoteHistory>*/}

           {/*{*/}
           {/*    items.map(item => (*/}
           {/*        <div>*/}
           {/*            <p>{item.address}</p>*/}
           {/*            <p>{item.gallons}</p>*/}
           {/*            <p>{item.amount}</p>*/}

           {/*        </div>*/}

           {/*    ))*/}
           {/*}*/}

           {/*{items.length>0 && items.map(e=><li>{e}</li>)}*/}
       </div>

    )
}

export default FuelQuoteHistoryPage