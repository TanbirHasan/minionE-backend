require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const connectDB = require('./db/connect');
const ProductRoutes = require('./routes/products');
const UserRoutes = require('./routes/users');
const CategoriesRoutes = require('./routes/categories');
const ReviewsRoutes = require('./routes/reviews');
const ContactRouter = require('./routes/contactUs');

// middleware
app.use(express.json());
app.use(cors());

// middleware to set router
app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);
app.use('/categories', CategoriesRoutes);
app.use('/reviews', ReviewsRoutes);
app.use('/contact-messages', ContactRouter);

app.get('/', (req, res) => {
	res.send('Hello I am live');
});

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`${PORT} is connected`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();
