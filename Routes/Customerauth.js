const express = require("express");
const router = express.Router();
const { createuser, login,getCustomer } = require("../Controller/authController");
const {getCart,addCart}=require('../Controller/cartController');
//const login = require('../Controller/authController');
const fetchCustomer=require('../middleware/fetchcustomer')

router.post("/signup", createuser);
router.post("/login", login);
router.post("/getCustomer", getCustomer);
router.get("/getCart", fetchCustomer, getCart);
router.post("/addToCart", fetchCustomer, addCart);

module.exports = router;
