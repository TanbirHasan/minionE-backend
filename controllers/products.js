const Product = require('../models/products');
const Category = require('../models/categories');
const { findById } = require('../models/products');

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
		res.send(product);
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

const getProductRelatedToCategories = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const id = req.params.categoryId;
		const products = await Product.find({ categoryId:id })
			.skip(page * size)
			.limit(size);
		const count = await Product.estimatedDocumentCount();
		return res.send({ products, count });
	} catch (error) {
		console.log(error.message);
	}
};

const updateProduct = async (req, res) => {
	try {
		const id = req.params.id;
		const product = req.body;
		const filter = Product.findById(id);
		const options = { upsert: true };
		const updatedDoc = {
			$set: product,
		};
		const result = await Product.updateOne(filter, updatedDoc, options);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

const deleteProduct = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Product.findByIdAndDelete(id);
		res.send(result);
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
	updateProduct,
	deleteProduct,
	getProductRelatedToCategories,
};
