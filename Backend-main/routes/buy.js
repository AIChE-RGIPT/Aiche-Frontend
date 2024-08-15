const express = require("express");
const router = express.Router();
const buyContact = require("../controller/buy.js");

router.post("/buy", buyContact);
router.get("/buy", (req,res)=>{res.send("Buy router established")});

module.exports = router;
