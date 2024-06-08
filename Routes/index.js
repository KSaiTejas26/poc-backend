const express = require('express');
const router = express.Router();
const adminroute = require('./api/admin')
const vendorroute = require('./api/vendor')

router.use('/admin', adminroute);
router.use('/vendor', vendorroute);


module.exports=router;