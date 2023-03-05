const ContactMessage = require('../models/contactUs');

const addContactMessages = async (req, res) => {
	try {
		const message = await req.body;
		const result = await ContactMessage.create(message);
		res.send(result);
	} catch (error) {
		console.log(error);
	}
};

const getAllMessages = async (req, res) => {
	try {
		const messages = await ContactMessage.find({});
		res.send(messages);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { addContactMessages, getAllMessages };
