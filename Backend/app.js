

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// require("./auth/passport");
//
// require("./models/user");

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
});

// let lis=[]
//
// const trav=(lis,obj)=>{
//     for(let i in lis.username){
//         if(lis.username[i]==obj){
//             response.json("username already exists")
//         }
//     }
//
// }
//
app.post("/login",(req,res)=>{
        const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
        console.log(obj);
        // lis.push(obj)
        // console.log(lis[1])
        // trav(lis,obj)
        res.json("nithin")

        // { title: 'product' }

    })
app.post("/pricequote",(req,res)=>{
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj);
    // lis.push(obj)
    // console.log(lis[1])
    // trav(lis,obj)
    res.json("nithin")

    // { title: 'product' }

})
app.post("/pricequotehistory",(req,res)=>{
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj);
    res.json("nithin")
    // lis.push(obj)
    // console.log(lis[1])
    // trav(lis,obj)

    // { title: 'product' }

})
app.post("/basicinformation",(req,res)=>{
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj);
    res.json("nithin")
    // lis.push(obj)
    // console.log(lis[1])
    // trav(lis,obj)

    // { title: 'product' }

})
app.post("/register",(req,res)=>{
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj);
    res.json("nithin")
    // lis.push(obj)
    // console.log(lis[1])
    // trav(lis,obj)

    // { title: 'product' }

})






app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;