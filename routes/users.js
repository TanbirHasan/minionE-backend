const express = require('express');
const { addUser, getAllUsers } = require('../controllers/users');
const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/:email').put(addUser);

module.exports = router;
