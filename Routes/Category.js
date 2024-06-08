const express=require('express');
const router=express.Router();
const getCategory=require('../Controllers/categoryController.js');
router.get('/getCategory',getCategory);
module.exports=router;