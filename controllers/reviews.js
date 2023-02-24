const Reviews = require('../models/reviews');

const getAllReviews = async (req, res) => {
	try {
		const review = await Reviews.find({});
		res.send(review);
	} catch (error) {
		console.log(error);
	}
};

const addReviews = async (req, res) => {
	try {
		const review = await req.body;
		const result = await Reviews.create(review);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { addReviews,getAllReviews };
