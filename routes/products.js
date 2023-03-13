const express = require('express');
const {
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
} = require('../controllers/products');
const verifyToken = require('../middlewares/verifyToken');

const productRoute = express.Router();

productRoute.route('/').get(getAllProducts);
productRoute.route('/category/:categoryId').get(getProductRelatedToCategories);
productRoute.route('/').post(verifyToken,addProduct);
productRoute.route('/recent-products').get(getRecentProducts);
productRoute.route('/recent-paginated-products').get(recentPaginatedProducts);
productRoute.route('/paginated-products').get(paginatedProducts);
productRoute.route('/best-rated').get(bestRatedProducts);
productRoute.route('/:id').get(getSingleProduct);
productRoute.route('/:id').put(updateProduct);
productRoute.route('/:id').delete(deleteProduct);

module.exports = productRoute;
