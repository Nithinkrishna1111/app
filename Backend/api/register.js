const express = require("express");
// const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
       // console.log(req.body)
       // res.json({message:"HEllo"})
       console.log(res)
});
router.get('/register',async(req,res)=>{
       console.log('api/users called!')
       res.json({"nithin":"nithin"})
       console.log(req.body)
})



module.exports = router;
//     const { username, email, password ,password2} = req.body;
//
//     const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
//         (err) => {
//             console.log("Error: ", err);
//         }
//     );
//
//     if (alreadyExistsUser) {
//         return res.status(409).json({ message: "User with email already exists!" });
//     }
//
//     const newUser = new User({ username, email, password,password2 });
//     const savedUser = await newUser.save().catch((err) => {
//         console.log("Error: ", err);
//         res.status(500).json({ error: "Cannot register user at the moment!" });
//     });
//
//     if (savedUser) res.json({ message: "Thanks for registering" });
//