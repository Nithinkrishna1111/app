const express = require("express");
// const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
    // const { fullName, email, password } = req.body;
    // console.log(fullName)

    // const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    //     (err) => {
    //         console.log("Error: ", err);
    //     }
    // );
    //
    // if (alreadyExistsUser) {
    //     return res.status(409).json({ message: "User with email already exists!" });
    // }

//     const newUser = new User({ fullName, email, password });
//     const savedUser = await newUser.save().catch((err) => {
//         console.log("Error: ", err);
//         res.status(500).json({ error: "Cannot register user at the moment!" });
//     });
//
//     if (savedUser) res.json({ message: "Thanks for registering" });
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    // console.log(obj);
    // lis.push(obj)
 });

module.exports = router;