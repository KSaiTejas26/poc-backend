const router = require('express').Router()
const  VendorController  =new require('../../Controllers/vendorcontroller');

router.get('/getvendorproducts/:id',VendorController.getAllVendorProducts) // done
router.get('/vendorprofile/:id',VendorController.getVendorProfile) // done
router.delete('/vendors/:vendorId/products/:productId',VendorController.deleteProduct) // done
router.post('/vendors/:vendorId/addproduct/',VendorController.addProduct) // done
router.put('/profile/:id',VendorController.editProfile) // done

router.get('/getsoloproduct/:id',VendorController.getsoloproduct)
router.put('/soloproduct/update/:id',VendorController.updateProduct);


module.exports=router;