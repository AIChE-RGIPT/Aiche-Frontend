const express = require("express");
const router = express.Router();
const saveContact = require("../controller/contact.js");

router.post("/contact", saveContact);
router.get("/contact", (req, res) => { res.send("contact router established") });

module.exports = router;
