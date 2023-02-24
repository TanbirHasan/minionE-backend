const express = require('express');
const { addReviews, getAllReviews } = require('../controllers/reviews');
const Reviewroute = express.Router();

Reviewroute.route('/').get(getAllReviews);
Reviewroute.route('/').post(addReviews);

module.exports = Reviewroute;
