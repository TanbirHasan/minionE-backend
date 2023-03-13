const Orders = require('../models/orders');

const getAllOrders = async (req, res) => {
	try {
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const orders = await Orders.find({})
			.skip(page * size)
			.limit(size);
		const count = await Orders.estimatedDocumentCount();
		res.send({ orders, count });
	} catch (error) {
		res.send({
			error: error.message,
		});
		console.log(error.message);
	}
};

const getOrdersForSingleUser = async (req, res) => {
	try {
		const email = req.params.email;
		const order = await Orders.find({ email: email });
		res.send(order);
	} catch (error) {
		res.send({
			error: error.message,
		});
		console.log(error.message);
	}
};

const addOrdersInfo = async (req, res) => {
	try {
		const orderInfo = req.body;
		const result = await Orders.create(orderInfo);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { addOrdersInfo, getAllOrders, getOrdersForSingleUser };
