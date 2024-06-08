const express=require('express');
const router=express.Router();
const getProducts=require('../Controller/ProductController');
router.get('/getProducts',getProducts);
module.exports=router;