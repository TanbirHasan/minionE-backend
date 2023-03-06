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
		const page = parseInt(req.query.page);
		const size = parseInt(req.query.size);
		const users = await User.find({})
			.sort({ _id: -1 })
			.skip(page * size)
			.limit(size);
		const count = await User.estimatedDocumentCount();
		res.send({ users, count });
	} catch (error) {
		console.log(error.message);
	}
};

//! All users except admin
// const getAllUsersExceptAdmin = async (req, res) => {
// 	try {
// 		const page = parseInt(req.query.page);
// 		const size = parseInt(req.query.size);
// 		const users = await User.find({ role: '' })
// 			.sort({ _id: -1 })
// 			.skip(page * size)
// 			.limit(size);
// 		const count = await User.estimatedDocumentCount();
// 		res.send({ users, count });
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

const getAdminUsers = async (req, res) => {
	try {
		const email = req.params.email;
		const user = await User.findOne({ email: email });
		res.send({ isAdmin: user?.role === 'admin' });
	} catch (error) {
		console.log(error);
	}
};

const deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await User.findByIdAndDelete(id);
		res.send(result);
	} catch (error) {
		console.log(error);
	}
};

const setActiveUserStatus = async (req, res) => {
	try {
		const id = req.params.id;
		const filter = { _id: id };
		const update = { status: 'deactivated' };
		const user = await User.findOneAndUpdate(id);
		res.send(user);
	} catch (error) {}
};

module.exports = {
	addUser,
	getAllUsers,
	getAdminUsers,
	deleteUser,
	setActiveUserStatus,
};
