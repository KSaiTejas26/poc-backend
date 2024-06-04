const express = require('express');
const router = express.Router();
const admincontroller = require('../Controllers/admincontroller')
const vendorcontroller = require('../Controllers/vendorcontroller')

router.use('/admin', admincontroller);
router.use('/vendor', vendorcontroller);

module.exports=router;