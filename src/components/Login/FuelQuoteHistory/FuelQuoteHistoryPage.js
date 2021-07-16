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

    useEffect(()=>{
        // axios.get('http://localhost:5000/register').then(response=>{
        //     console.log(response)
        //     setItems(JSON.stringify(response))
        //     console.log(items)
        // }).catch((err) => {
        //     if (err && err.response)
        //         console.log("Error",err);
        //     // console.log(values)
        //
        //
        // })
        const fetchItems = async () => {
            const data = await fetch('http://localhost:5000/register');
            const item = await data.json();
            console.log(item)
            setItems(item)
            console.log(items)
        }
        fetchItems()

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

           <FuelQuoteHistory Gallons={Quotes[0].Gallons} Delivery_Address={items.gallon} Delivery_Date=
           {Quotes[0].Delivery_Date} Suggested_Price_gallon={items.gallon}></FuelQuoteHistory>
           <FuelQuoteHistory Gallons={Quotes[1].Gallons} Delivery_Address={Quotes[1].Delivery_Address} Delivery_Date=
               {Quotes[1].Delivery_Date} Suggested_Price_gallon={Quotes[1].Suggested_Price_gallon}></FuelQuoteHistory>

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