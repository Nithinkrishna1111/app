const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const helloApi=require("./hello")
// const paymentApi = require("./payment");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(helloApi)
// router.use(paymentApi);

// router.get("/",(req,res)=>{
//     res.json({
//         message:"API"
//     })
// })

module.exports = router;