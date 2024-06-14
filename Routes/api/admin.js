const router = require('express').Router();
const adminController = require('../../Controllers/admincontroller'); 
const fetchadmin = require('../../Middlewares/fetchadmin');



router.get('/allproducts', adminController.getAllProducts); // done
router.get('/adminprofile', fetchadmin,adminController.getProfile); // done
router.get('/requests', adminController.getRequests); // done
router.get('/vendors', adminController.getAllVendors); // done
router.delete('/vendors/:vendorId/products/:productId', adminController.deleteProduct); // done
router.delete('/vendor/delete/:id', adminController.deleteVendor); // working but need to update the doubt and code 
router.put('/profile', fetchadmin,adminController.updateProfile); // done
router.post('/addproduct/:id', adminController.addProduct); // done 
router.put('/request/accept/:id',adminController.acceptRequest);
router.put('/request/reject/:id',adminController.rejectedRequest);   
router.post('/addvendor',adminController.addVendor);
router.delete('/vendor/deleteMany',adminController.deleteManyRequests);
router.delete('/vendor/deleteMany/accept',adminController.acceptSelectedRequest);
router.delete('/vendor/deleteMany/reject',adminController.rejectSelectedRequest);
router.get('/getvendorproducts/:id',adminController.getVendorSpecific);

module.exports = router;
