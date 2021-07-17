const express = require("express");
// const User = require("../models/user");

const router = express.Router();
const{ lis } =require('./login')

const Quotes={Gallons:3,Delivery_Address:'8450 cambridge st',Delivery_Date:new Date(2021,2,28)
    ,Suggested_Price_gallon:4}

router.get("/pricequote", async (req, res) => {

    res.send({Quotes})
})

module.exports = router;