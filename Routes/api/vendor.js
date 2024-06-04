const router = require('express').Router()
const VendorController = require('../../Controllers/vendorcontroller');

router.get('/getvendorproducts',VendorController.getallvendorproducts)
router.get('/vendorprofile',VendorController.getvendorprofile)
router.delete('/vendors/:vendorId/products/:productId',VendorController.delete)
router.post('/vendors/:vendorId/addproduct/',VendorController.addProduct)
router.put('/profile/:id',VendorController.editprofile)