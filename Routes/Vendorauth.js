const express = require("express");
const router = express.Router();
const {createuser,login} =require('../Controllers/vendorauthcontroller');

//const login = require('../Controller/authController');

router.post(
    "/signup",
    createuser);
router.post(
        "/login",
        login);
  
module.exports=router;