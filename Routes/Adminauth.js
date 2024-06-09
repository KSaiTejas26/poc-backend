const express = require("express");
const router = express.Router();
const {login} =require('../Controllers/adminauthcontroller');

//const login = require('../Controller/authController');


router.post(
        "/login",
        login);
  
module.exports=router;