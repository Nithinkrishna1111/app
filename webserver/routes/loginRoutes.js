const express =require('express')
const app = express()
const path = require('path')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Router is working ')
});