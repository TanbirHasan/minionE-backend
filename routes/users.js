const express = require('express');
const { addUser, getAllUsers, getAdminUsers } = require('../controllers/users');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/:email').put(addUser);
// router.route('/admin/:email').get(getAdminUsers);
router.get('/admin/:email', verifyToken,getAdminUsers);

module.exports = router;
