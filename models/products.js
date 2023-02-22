const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		default: 1,
	},
	sizes_color: {
		type: Boolean,
		required: true,
		default: false,
	},
	ratings: {
		type: Number,
		default: 4.5,
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: Date.now(),
	},
	price: {
		type: Number,
		required: true,
	},
	stockAmount: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
});

//Export the model
module.exports = mongoose.model('Product', ProductSchema);
