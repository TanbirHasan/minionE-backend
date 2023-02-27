const express = require('express');
const {
	getAllProducts,
	getSingleProduct,
	bestRatedProducts,
	paginatedProducts,
	addProduct,
    getRecentProducts,
	recentPaginatedProducts,
} = require('../controllers/products');

const productRoute = express.Router();

productRoute.route('/').get(getAllProducts);
productRoute.route('/').post(addProduct);
productRoute.route('/recent-products').get(getRecentProducts);
productRoute.route('/recent-paginated-products').get(recentPaginatedProducts);
productRoute.route('/paginated-products').get(paginatedProducts);
productRoute.route('/best-rated').get(bestRatedProducts);
productRoute.route('/:id').get(getSingleProduct);

module.exports = productRoute;
