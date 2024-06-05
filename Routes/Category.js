const express=require('express');
const router=express.Router();
const getCategory=require('../Controller/categoryController');
router.get('/getCategory',getCategory);
module.exports=router;