const express = require('express');
const {
	addUser,
	getAllUsers,
	getAdminUsers,
	deleteUser,
	setActiveUserStatus,
	getAllUsersExceptAdmin,
} = require('../controllers/users');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/non-admin').get(getAllUsersExceptAdmin);
router.route('/:email').put(addUser);
router.route('/:id').put(setActiveUserStatus);
router.route('/:id').delete(deleteUser);
// router.route('/admin/:email').get(getAdminUsers);
router.get('/admin/:email', getAdminUsers);

module.exports = router;
