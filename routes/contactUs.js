const express = require('express');
const { addContactMessages, getAllMessages } = require('../controllers/contactUs');
const ContactRouter = express.Router();

ContactRouter.route('/').get(getAllMessages)
ContactRouter.route('/').post(addContactMessages)

module.exports = ContactRouter