const Product = require('../models/products');

const getAllProducts = async (req, res) => {
	const products = await Product.find({});
	return res.send(products);
};

const addProduct = async (req, res) => {
	try {
		const product = await req.body;
		const result = await Product.create(product);
		return res.send(result);
	} catch (error) {
		console.log(error);
	}
};

const getSingleProduct = async (req, res) => {
	const id = req.params.id;
	const product = await Product.findById(id);
	return res.send(product);
};

const getRecentProducts = async (req, res) => {
	try {
		const product = await Product.find({}).sort({ _id: -1 });
		return res.send(product);
	} catch (error) {
		console.log(error);
	}
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

		const sort = parseInt(req.query.sort);
		console.log('sort', sort);
		const bestRating = parseInt(req.query.bestRating);
		console.log('bestRating', bestRating);

		const products = await Product.find({})
			.sort({ _id: sort, ratings: bestRating })
			.skip(page * size)
			.limit(size);
		const count = await Product.estimatedDocumentCount();
		return res.send({ products, count });
	} catch (error) {
		console.log(error.message);
	}
};

const recentPaginatedProducts = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);

		const products = await Product.find({})
			.sort({ _id: -1 })
			.skip(page * size)
			.limit(size);
		const count = await Product.estimatedDocumentCount();
		return res.send({ products, count });
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = {
	getAllProducts,
	getSingleProduct,
	bestRatedProducts,
	paginatedProducts,
	addProduct,
	getRecentProducts,
	recentPaginatedProducts,
};
