const express = require('express');
const { addOrdersInfo, getAllOrders, getOrdersForSingleUser } = require('../controllers/orders');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

router.route('/').get(verifyToken,getAllOrders);
router.route('/:email').get(getOrdersForSingleUser);
router.route('/').post(addOrdersInfo);

module.exports = router;
