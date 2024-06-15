const express=require('express');
const router=express.Router();
const getProducts=require('../Controllers/ProductController');
router.get('/getProducts',getProducts);
module.exports=router;