const express = require("express");
const router = express.Router();
const {createuser,login,getCustomer} =require('../Controllers/customerauthController');
const {getCart,addCart,deleteCart}=require('../Controllers/cartController');
const { makeorder,getOrder }=require('../Controllers/orderController')
//const login = require('../Controller/authController');
const fetchCustomer=require('../Middlewares/fetchcustomer');

//const login = require('../Controller/authController');

router.post("/signup",createuser);
router.post("/login",login);
router.post("/getCustomer", getCustomer);
router.get("/getCart", fetchCustomer, getCart);
router.post("/addToCart", fetchCustomer, addCart);
router.delete("/deleteCart/:id",fetchCustomer,deleteCart);
router.get("/getorders",fetchCustomer,getOrder);
router.post("/order",makeorder);

  
module.exports=router;