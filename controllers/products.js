const Product = require('../models/products');

const getAllProducts = async (req, res) => {
	const products = await Product.find({});
	return res.send(products);
};

const getSingleProduct = async (req, res) => {
	const id = req.params.id;
	const product = await Product.findById(id);
	return res.send(product);
};

const bestRatedProducts = async (req, res) => {
	try {
		const bestRated = await Product.find({}).sort({ ratings: -1 });
		res.send(bestRated);
	} catch (error) {
		console.log(error.message);
	}
};

const paginatedProducts = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		console.log(page, size);

		const products = await Product.find({})
			.skip(page * size)
			.limit(size);
		const count = await Product.estimatedDocumentCount();
		return res.send({ products, count });
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { getAllProducts, getSingleProduct, bestRatedProducts,paginatedProducts };
