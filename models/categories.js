const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var CategoriesSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	categoryName: {
		type: String,
		required: true,
	},
	categoryPicture: {
		type: String,
		required: true,
	},
});

//Export the model
module.exports = mongoose.model('Category', CategoriesSchema);
