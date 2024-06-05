const express = require("express");
const router = express.Router();
const { createuser, login,getCustomer } = require("../Controller/authController");
//const login = require('../Controller/authController');

router.post("/signup", createuser);
router.post("/login", login);
router.post("/getCustomer", getCustomer);

module.exports = router;
