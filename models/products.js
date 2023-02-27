const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
	productsName: {
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
	oldPrice: {
		type: Number,
	},
	newPrice: {
		type: Number,
	},
	stockAmount: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	isFeatured: {
		type: Boolean,
		default: false,
	},
});

//Export the model
module.exports = mongoose.model('Product', ProductSchema);
