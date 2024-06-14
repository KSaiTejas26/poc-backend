const router = require('express').Router()
const  VendorController  =new require('../../Controllers/vendorcontroller');
const fetchvendor = require('../../Middlewares/fetchvendor');

router.get('/getvendorproducts',fetchvendor,VendorController.getAllVendorProducts) // done
router.get('/vendorprofile',fetchvendor,VendorController.getVendorProfile) // done
router.delete('/products/:productId',fetchvendor,VendorController.deleteProduct) // done
router.post('/addproduct',fetchvendor,VendorController.addProduct) // done
router.put('/editprofile',fetchvendor,VendorController.editProfile) // done

router.get('/getsoloproduct/:id',VendorController.getsoloproduct)
router.put('/soloproduct/update/:id',VendorController.updateProduct);
router.delete('/products/:productId/:vendorId',VendorController.deleteProduct1);

module.exports=router;