const User = require('../models/users');
const jwt = require('jsonwebtoken');

const addUser = async (req, res) => {
	const email = req.params.email;
	const user = req.body;
	const filter = { email: email };
	const options = { upsert: true };
	const updatedDoc = {
		$set: user,
	};
	const result = await User.updateOne(filter, updatedDoc, options);
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
	res.send({ result, token });
};

const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { addUser, getAllUsers };
