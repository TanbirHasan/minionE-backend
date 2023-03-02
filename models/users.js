const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: ''
	},
});

//Export the model
module.exports = mongoose.model('User', UserSchema);
