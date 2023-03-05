const mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

//Export the model
module.exports = mongoose.model('ContactMessage', ContactSchema);
