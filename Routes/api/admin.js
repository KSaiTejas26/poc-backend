const router = require('express').Router();
const adminController = require('../../Controllers/admincontroller'); 

router.get('/allproducts', adminController.getAllProducts); // done
router.get('/adminprofile/:id', adminController.getProfile); // done
router.get('/requests', adminController.getRequests); // done
router.get('/vendors', adminController.getAllVendors); // done
router.delete('/vendors/:vendorId/products/:productId', adminController.deleteProduct); // done
router.delete('/vendor/delete/:id', adminController.deleteVendor); // working but need to update the doubt and code 
router.put('/profile/:id', adminController.updateProfile); // done
router.post('/addproduct/:id', adminController.addProduct); // done 

module.exports = router;
