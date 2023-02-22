const User = require('../models/users');

const addUser = async (req, res) => {
	const email = req.params.email;
	const user = req.body;
	const filter = { email: email };
    const options = { upsert: true };
    console.log(user);
	const updatedDoc = {
		$set: user,
	};
	const result = await User.updateOne(filter, updatedDoc, options);
	return res.send(result);
};

const getAllUsers = async(req,res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {addUser,getAllUsers}