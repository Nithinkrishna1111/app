const express = require("express");
const router = express.Router();

router.post("/pricequote", async (req, res) => {

    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj);

});


module.exports = router;



