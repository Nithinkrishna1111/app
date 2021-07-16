const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// require("./auth/passport");
//
// require("./models/user");
//
const middlewares = require("./middlewares");
const api = require("./api");

const app = express();

// const users=[] as {username:string,password:string,password2:string}[]



app.use(bodyParser.urlencoded({ extended: true }));
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


app.post('/register',(req,res)=>{
    console.log(req.body)
    const username=req.body.username
    console.log(username)
    // res.json(state)

    // res.json({message:"HEllo"})

})

app.get('/register',(req,res)=>{
    console.log('api/users called!')

    // res.json(state)
})
let books=[]
app.post('/login',(req,res)=>{
    // res.send({
    //     "nithin":"nithin"
    // })
    const newBook={
        BookId:req.body.bookId,
        Title:req.body.bookTitle,
        Author:req.body.bookAuthor
    }
    books.push(newBook)
    console.log(books)
    res.redirect('/')
})
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;