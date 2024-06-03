const router = require('express').Router()

router.use('/admin',require('./api/admin'))
router.use('/vendor',require('./api/vendor'))