const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const reviewRouter = require('./routes/reviewsRoute');
const userRouter = require("./routes/userRoute")

app.use(reviewRouter);
app.use(userRouter);

// 404 Handler
app.use('*', (req, res) => {
    res.status(404).send('Page not found');
});

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Sila';

mongoose.connect(mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Server Start
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
