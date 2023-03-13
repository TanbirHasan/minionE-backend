const Orders = require('../models/orders');

const addOrdersInfo = async (req, res) => {
	try {
		const orderInfo = req.body;
		const result = await Orders.create(orderInfo);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { addOrdersInfo };
