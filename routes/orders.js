const express = require('express');
const { addOrdersInfo } = require('../controllers/orders');
const router = express.Router();

router.route('/').post(addOrdersInfo)

module.exports = router;
