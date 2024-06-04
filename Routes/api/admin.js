const router = require('express').Router()
const AdminController = require('../../Controllers/admincontroller');

router.get('/allproducts',AdminController.getallproducts)
router.get('/adminprofile',AdminController.getprofile)
router.get('/requests',AdminController.getrequests)
router.get('/vendors',AdminController.allvendor)
router.delete('/vendors/:vendorId/products/:productId',AdminController.delete)
router.delete('/vendor/delete/:id',AdminController.deletevendor)
router.put('/profile/:id',AdminController.updateprofile)
router.post('/addproduct/:id',AdminController.addproduct)