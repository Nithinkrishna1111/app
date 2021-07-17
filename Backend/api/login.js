const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();
lis=[]

router.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//
//     const userWithEmail = await User.findOne({ where: { email } }).catch(
//         (err) => {
//             console.log("Error: ", err);
//         }
//     );
//
//     if (!userWithEmail)
//         return res
//             .status(400)
//             .json({ message: "Email or password does not match!" });
//
//     if (userWithEmail.password !== password)
//         return res
//             .status(400)
//             .json({ message: "Email or password does not match!" });
//
//     const jwtToken = jwt.sign(
//         { id: userWithEmail.id, email: userWithEmail.email },
//         process.env.JWT_SECRET
//     );
//
//     res.json({ message: "Welcome Back!", token: jwtToken });
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj);
    lis.push(obj)

});

module.exports = router;