const express = require('express');
const { getAllProducts, getSingleProduct, bestRatedProducts, paginatedProducts } = require('../controllers/products');

const productRoute = express.Router();

productRoute.route('/').get(getAllProducts);
productRoute.route('/paginated-products').get(paginatedProducts);
productRoute.route('/best-rated').get(bestRatedProducts);
productRoute.route('/:id').get(getSingleProduct);


module.exports = productRoute;
